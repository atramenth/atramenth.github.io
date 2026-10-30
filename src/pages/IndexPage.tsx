import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { IconSearch } from "../components/Icons.tsx";
import { LangToggle } from "../components/LangToggle.tsx";
import { useT } from "../hooks/useT.tsx";
import { library } from "../services/library.ts";

type Filter = "all" | "Makkah" | "Madinah";

const fold = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f.'’‘\s-]/g, "")
    .toLowerCase();

export default function IndexPage() {
  const { t } = useT();
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");

  const rows = useMemo(() => {
    const q = fold(query);
    return library.items.filter(
      (i) => (filter === "all" || i.place === filter) && (!q || fold(i.name).includes(q) || String(i.number) === query.trim()),
    );
  }, [filter, query]);

  return (
    <main className="screen">
      <header className="screen__head screen__head--row">
        <div>
          <h1>{t("index.title")}</h1>
          <p>{t("index.subtitle")}</p>
        </div>
        <div className="head-actions">
          <LangToggle />
        </div>
      </header>

      <div className="tools">
        <label className="search">
          <IconSearch />
          <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t("index.searchPlaceholder")} aria-label={t("index.searchAria")} />
        </label>
        <div className="seg seg--tight" role="radiogroup" aria-label={t("index.placeAria")}>
          {(["all", "Makkah", "Madinah"] as const).map((f) => (
            <button key={f} type="button" role="radio" aria-checked={filter === f} className={filter === f ? "is-on" : ""} onClick={() => setFilter(f)}>
              {f === "all" ? t("index.all", { n: library.items.length }) : `${t(`place.${f}`)} ${library.count(f)}`}
            </button>
          ))}
        </div>
      </div>

      <table className="index">
        <thead>
          <tr>
            <th scope="col" className="c-no">{t("index.colNo")}</th>
            <th scope="col">{t("index.colSurah")}</th>
            <th scope="col" className="c-page">{t("index.colPage")}</th>
            <th scope="col" className="c-city">{t("index.colCity")}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((i) => {
            const ready = library.isAvailable(i.number);
            return (
              <tr key={i.number} className={ready ? "is-ready" : undefined}>
                <td className="c-no">{i.number}</td>
                <th scope="row">
                  {ready ? <Link to={`/surah/${i.number}/1`}>{i.name}</Link> : i.name}
                </th>
                <td className="c-page">{i.bookPage}</td>
                <td className="c-city">
                  <span className={`place place--${i.place.toLowerCase()}`}>{t(`place.${i.place}`)}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {rows.length === 0 && <p className="none">{t("index.none", { q: query })}</p>}
    </main>
  );
}
