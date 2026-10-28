import { Link } from "react-router-dom";
import { Hexagon } from "../components/Icons.tsx";
import type { CatalogItem } from "../domain/Surah.ts";
import { useStore } from "../hooks/useStore.ts";
import { library } from "../services/library.ts";
import { progress } from "../services/ProgressStore.ts";

function Row({ item, continues }: { item: CatalogItem; continues: boolean }) {
  const ready = library.isAvailable(item.number);
  const body = (
    <>
      <span className="row__num">
        <Hexagon size={34}>
          <text x="16" y="19.6" textAnchor="middle" fill="currentColor" stroke="none">
            {item.number}
          </text>
        </Hexagon>
      </span>
      <span className="row__main">
        <strong>{item.name}</strong>
        <small>
          {continues
            ? `Continued from Part ${library.partOf(item.number)}`
            : `${item.place === "Madinah" ? "Madīnah" : "Makkah"} · ${item.ayahCount} āyāt · p. ${item.bookPage}`}
        </small>
      </span>
      <span className="row__tag">{ready ? "Read" : "Soon"}</span>
    </>
  );
  return ready ? (
    <Link className="row" to={`/surah/${item.number}/1`}>
      {body}
    </Link>
  ) : (
    <div className="row is-disabled" aria-disabled="true">
      {body}
    </div>
  );
}

export default function Surahs() {
  const { last } = useStore(progress);
  const groups = library.byPart();
  const openPart = last ? library.partOf(last.surah) : 1;
  const resume = last ? library.get(last.surah) : undefined;

  return (
    <main className="screen">
      <header className="screen__head">
        <h1>Sūrahs</h1>
        <p>
          {library.availableCount} of 114 added · 30 parts
        </p>
      </header>

      {resume && last && (
        <Link className="resume" to={`/surah/${last.surah}/${last.pageIndex + 1}`}>
          <small>Continue reading</small>
          <strong>{resume.name}</strong>
          <span>Page {last.pageIndex + 1}</span>
        </Link>
      )}

      <div className="parts">
        {groups.map(({ part, items }) => (
          <details key={part} className="part" open={part === openPart}>
            <summary>
              <span className="part__name">Part {part}</span>
              <span className="part__meta">
                from p. {Math.round(library.partStartPage(part))}
              </span>
            </summary>
            {items.length === 0 ? (
              <p className="part__note">No sūrah data for this part.</p>
            ) : (
              items.map(({ item, continues }) => <Row key={item.number} item={item} continues={continues} />)
            )}
          </details>
        ))}
      </div>
    </main>
  );
}
