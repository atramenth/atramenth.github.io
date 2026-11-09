import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { HexNumber, IconBookmark, IconCheck, IconNext, IconSearch } from "../components/Icons.tsx";
import { LangToggle } from "../components/LangToggle.tsx";
import type { CatalogItem } from "../domain/Surah.ts";
import { useStore } from "../hooks/useStore.ts";
import { useT, type T } from "../hooks/useT.tsx";
import { bookmarks } from "../services/BookmarkStore.ts";
import { library } from "../services/library.ts";
import { progress } from "../services/ProgressStore.ts";

type Filter = "all" | "ready" | "Makkah" | "Madinah";
type View = "parts" | "index";

const fold = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ.'’‘\s-]/g, "")
    .toLowerCase();

function Row({ item, continues, t }: { item: CatalogItem; continues: boolean; t: T["t"] }) {
  useStore(progress);
  const ready = library.isAvailable(item.number);
  const f = progress.fraction(item.number);
  const done = f >= 1;
  const body = (
    <>
      <span className="row__num">
        <HexNumber n={item.number} size={42} progress={ready ? f : undefined} />
      </span>
      <span className="row__main">
        <strong>{item.name}</strong>
        <small>
          {continues
            ? t("surahs.continued", { n: library.partOf(item.number) })
            : `${t(`place.${item.place}`)} · ${item.ayahCount} ${t("unit.ayat")} · ${t("unit.pageShort")} ${item.bookPage}`}
        </small>
      </span>
      <span className="row__side">
        {!ready ? (
          <span className="row__tag">{t("surahs.tagSoon")}</span>
        ) : done ? (
          <span className="row__done" title={t("surahs.finished")}>
            <IconCheck />
          </span>
        ) : f > 0 ? (
          <span className="row__pct">{Math.round(f * 100)}%</span>
        ) : (
          <IconNext />
        )}
      </span>
    </>
  );
  return ready ? (
    <Link className="row" to={`/surah/${item.number}/${(progress.of(item.number)?.at ?? 0) + 1}`}>
      {body}
    </Link>
  ) : (
    <div className="row is-disabled" aria-disabled="true">
      {body}
    </div>
  );
}

/** One screen for finding a sūrah: by part, or as the book's own index, with search and filters for both. */
export default function Surahs() {
  const { t } = useT();
  const [params, setParams] = useSearchParams();
  const view: View = params.get("view") === "index" ? "index" : "parts";
  const [filter, setFilter] = useState<Filter>("all");
  const [query, setQuery] = useState("");
  const prog = useStore(progress);
  const marks = useStore(bookmarks).marks;
  const last = prog.last;
  const resume = last ? library.get(last.surah) : undefined;
  const openPart = last ? library.partOf(last.surah) : 1;

  const pass = (i: CatalogItem) => {
    if (filter === "ready") return library.isAvailable(i.number);
    if (filter === "Makkah" || filter === "Madinah") return i.place === filter;
    return true;
  };
  const q = fold(query);
  const searching = q.length > 0 || query.trim().length > 0;
  const rows = useMemo(
    () => library.items.filter((i) => (!q || fold(i.name).includes(q) || String(i.number) === query.trim()) && pass(i)),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filter, query],
  );
  const groups = useMemo(
    () => library.byPart().map((g) => ({ part: g.part, items: g.items.filter(({ item }) => pass(item)) })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [filter],
  );

  const setView = (v: View) => {
    const next = new URLSearchParams(params);
    if (v === "index") next.set("view", "index");
    else next.delete("view");
    setParams(next, { replace: true });
  };

  const FILTERS: { id: Filter; label: string }[] = [
    { id: "all", label: t("library.filterAll", { n: library.items.length }) },
    { id: "ready", label: t("library.filterReady", { n: library.availableCount }) },
    { id: "Makkah", label: `${t("place.Makkah")} ${library.count("Makkah")}` },
    { id: "Madinah", label: `${t("place.Madinah")} ${library.count("Madinah")}` },
  ];

  return (
    <main className="screen">
      <header className="screen__head screen__head--row">
        <div>
          <h1>{t("surahs.title")}</h1>
          <p>{t("surahs.summary", { n: library.availableCount })}</p>
        </div>
        <div className="head-actions">
          <LangToggle />
        </div>
      </header>

      {resume && last && !searching && (
        <Link className="resume" to={`/surah/${last.surah}/${last.pageIndex + 1}`}>
          <small>{t("surahs.continue")}</small>
          <strong>{resume.name}</strong>
          <span>{prog.surahs[last.surah]?.total ? t("home.resumeMeta", { n: last.pageIndex + 1, total: prog.surahs[last.surah].total }) : t("surahs.page", { n: last.pageIndex + 1 })}</span>
          <IconNext />
          <i className="resume__bar" aria-hidden="true">
            <b style={{ width: `${Math.max(3, Math.round(progress.fraction(last.surah) * 100))}%` }} />
          </i>
        </Link>
      )}

      {marks.length > 0 && !searching && (
        <section className="saved" aria-label={t("library.saved")}>
          <h2>
            <IconBookmark filled /> {t("library.saved")}
          </h2>
          <div className="saved__row">
            {marks.map((m) => (
              <Link key={`${m.surah}:${m.page}`} className="saved__item" to={`/surah/${m.surah}/${m.page + 1}`}>
                <strong>{library.get(m.surah)?.name}</strong>
                <small>
                  {t("unit.pageShort")} {m.bookPage}
                </small>
              </Link>
            ))}
          </div>
        </section>
      )}

      <div className="tools">
        <label className="search">
          <IconSearch />
          <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t("index.searchPlaceholder")} aria-label={t("index.searchAria")} enterKeyHint="search" />
        </label>
        <div className="tools__row">
          <div className="seg seg--tight seg--view" role="radiogroup" aria-label={t("library.viewAria")}>
            {(["parts", "index"] as const).map((v) => (
              <button key={v} type="button" role="radio" aria-checked={view === v} className={view === v ? "is-on" : ""} onClick={() => setView(v)}>
                {t(v === "parts" ? "library.viewParts" : "library.viewIndex")}
              </button>
            ))}
          </div>
        </div>
        <div className="chips" role="radiogroup" aria-label={t("index.placeAria")}>
          {FILTERS.map((f) => (
            <button key={f.id} type="button" role="radio" aria-checked={filter === f.id} className={`pill${filter === f.id ? " is-on" : ""}`} onClick={() => setFilter(f.id)}>
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {searching || view === "index" ? (
        <>
          <div className="group index" role="table" aria-label={t("index.title")}>
            <div className="index__head" role="row">
              <span role="columnheader" className="c-no">
                {t("index.colNo")}
              </span>
              <span role="columnheader" className="c-name">
                {t("index.colSurah")}
              </span>
              <span role="columnheader" className="c-page">
                {t("index.colPage")}
              </span>
              <span role="columnheader" className="c-city">
                {t("index.colCity")}
              </span>
            </div>
            {rows.map((i) => {
              const ready = library.isAvailable(i.number);
              const cells = (
                <>
                  <span className="c-no" role="cell">
                    {i.number}
                  </span>
                  <span className="c-name" role="cell">
                    {i.name}
                  </span>
                  <span className="c-page" role="cell">
                    {i.bookPage}
                  </span>
                  <span className="c-city" role="cell">
                    <span className={`place place--${i.place.toLowerCase()}`}>{t(`place.${i.place}`)}</span>
                  </span>
                </>
              );
              return ready ? (
                <Link key={i.number} role="row" className="index__row is-ready" to={`/surah/${i.number}/1`}>
                  {cells}
                </Link>
              ) : (
                <div key={i.number} role="row" className="index__row">
                  {cells}
                </div>
              );
            })}
          </div>
          {rows.length === 0 && <p className="none">{t("index.none", { q: query })}</p>}
        </>
      ) : (
        <div className="parts">
          {groups.map(({ part, items }) => (
            <details key={part} className="part" open={part === openPart}>
              <summary>
                <span className="part__name">{t("surahs.part", { n: part })}</span>
                <span className="part__meta">{t("surahs.partFrom", { n: Math.round(library.partStartPage(part)) })}</span>
              </summary>
              <div className="group">
                {items.length === 0 ? (
                  <p className="part__note">{filter === "all" ? t("surahs.partEmpty") : t("library.noneInFilter")}</p>
                ) : (
                  items.map(({ item, continues }) => <Row key={`${part}:${item.number}`} item={item} continues={continues} t={t} />)
                )}
              </div>
            </details>
          ))}
        </div>
      )}
    </main>
  );
}
