import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { IconSearch } from "../components/Icons.tsx";
import { library } from "../services/library.ts";

type Filter = "all" | "Makkah" | "Madinah";

const fold = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f.'’‘\s-]/g, "")
    .toLowerCase();

export default function IndexPage() {
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
      <header className="screen__head">
        <h1>Index</h1>
        <p>Table of names of the sūrahs</p>
      </header>

      <div className="tools">
        <label className="search">
          <IconSearch />
          <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Name or number" aria-label="Search sūrahs" />
        </label>
        <div className="seg seg--tight" role="radiogroup" aria-label="Place of revelation">
          {(["all", "Makkah", "Madinah"] as const).map((f) => (
            <button key={f} type="button" role="radio" aria-checked={filter === f} className={filter === f ? "is-on" : ""} onClick={() => setFilter(f)}>
              {f === "all" ? `All ${library.items.length}` : `${f === "Madinah" ? "Madīnah" : "Makkah"} ${library.count(f)}`}
            </button>
          ))}
        </div>
      </div>

      <table className="index">
        <thead>
          <tr>
            <th scope="col" className="c-no">No.</th>
            <th scope="col">Sūrah</th>
            <th scope="col" className="c-page">Page</th>
            <th scope="col" className="c-city">City</th>
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
                  <span className={`place place--${i.place.toLowerCase()}`}>{i.place === "Madinah" ? "Madīnah" : "Makkah"}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {rows.length === 0 && <p className="none">No sūrah matches “{query}”.</p>}
    </main>
  );
}
