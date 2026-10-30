import { Link } from "react-router-dom";
import { Hexagon } from "../components/Icons.tsx";
import { LangToggle } from "../components/LangToggle.tsx";
import type { CatalogItem } from "../domain/Surah.ts";
import { useStore } from "../hooks/useStore.ts";
import { useT, type T } from "../hooks/useT.tsx";
import { library } from "../services/library.ts";
import { progress } from "../services/ProgressStore.ts";

function Row({ item, continues, t }: { item: CatalogItem; continues: boolean; t: T["t"] }) {
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
            ? t("surahs.continued", { n: library.partOf(item.number) })
            : `${t(`place.${item.place}`)} · ${item.ayahCount} ${t("unit.ayat")} · ${t("unit.pageShort")} ${item.bookPage}`}
        </small>
      </span>
      <span className="row__tag">{ready ? t("surahs.tagRead") : t("surahs.tagSoon")}</span>
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
  const { t } = useT();
  const { last } = useStore(progress);
  const groups = library.byPart();
  const openPart = last ? library.partOf(last.surah) : 1;
  const resume = last ? library.get(last.surah) : undefined;

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

      {resume && last && (
        <Link className="resume" to={`/surah/${last.surah}/${last.pageIndex + 1}`}>
          <small>{t("surahs.continue")}</small>
          <strong>{resume.name}</strong>
          <span>{t("surahs.page", { n: last.pageIndex + 1 })}</span>
        </Link>
      )}

      <div className="parts">
        {groups.map(({ part, items }) => (
          <details key={part} className="part" open={part === openPart}>
            <summary>
              <span className="part__name">{t("surahs.part", { n: part })}</span>
              <span className="part__meta">{t("surahs.partFrom", { n: Math.round(library.partStartPage(part)) })}</span>
            </summary>
            {items.length === 0 ? (
              <p className="part__note">{t("surahs.partEmpty")}</p>
            ) : (
              items.map(({ item, continues }) => <Row key={item.number} item={item} continues={continues} t={t} />)
            )}
          </details>
        ))}
      </div>
    </main>
  );
}
