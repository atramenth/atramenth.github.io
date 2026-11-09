import { useState, type FormEvent } from "react";
import type { CatalogItem, Surah } from "../domain/Surah.ts";
import { useStore } from "../hooks/useStore.ts";
import { useT } from "../hooks/useT.tsx";
import { bookmarks } from "../services/BookmarkStore.ts";
import { IconBookmark } from "./Icons.tsx";
import { Sheet } from "./Sheet.tsx";

interface Props {
  surah: Surah;
  entry: CatalogItem;
  current: number;
  onGo: (pageIndex: number) => void;
  onClose: () => void;
}

/**
 * Where to? Three ways to travel a long sūrah: type a verse, drag the scrubber, or pick a page from the list.
 * Nothing moves until the reader commits, so opening the sheet never loses their place.
 */
export function JumpSheet({ surah, entry, current, onGo, onClose }: Props) {
  const { t } = useT();
  const marks = useStore(bookmarks).marks;
  const total = surah.pages.length;
  const [draft, setDraft] = useState(Math.min(current, total - 1));
  const [verse, setVerse] = useState("");
  const [error, setError] = useState("");

  const page = surah.pages[draft];
  const range = page?.verseRange;
  const last = surah.lastVerse;

  const go = (i: number) => {
    onGo(i);
    onClose();
  };

  const submitVerse = (e: FormEvent) => {
    e.preventDefault();
    const n = Number(verse.trim());
    if (!Number.isInteger(n) || n < 1) {
      setError(t("jump.verseHint", { n: entry.ayahCount }));
      return;
    }
    const i = surah.pageIndexOfVerse(n);
    if (i < 0) {
      setError(t("jump.verseMissing", { n }));
      return;
    }
    go(i);
  };

  const verseLabel = (r: { first: number; last: number } | null | undefined) =>
    !r ? "" : r.first === r.last ? t("reader.verseOne", { n: r.first }) : t("reader.versesRange", { a: r.first, b: r.last });

  return (
    <Sheet label={t("jump.title")} onClose={onClose} header={entry.name} tall>
      <section className="jump__block" aria-labelledby="jump-page">
        <h3 id="jump-page" className="jump__label">
          {t("jump.page")}
        </h3>
        <div className="jump__readout" aria-live="polite">
          <strong>{t("reader.pageOf", { n: draft + 1, total })}</strong>
          <span>
            {verseLabel(range)}
            {range ? " · " : ""}
            {t("reader.bookPageShort", { n: page?.bookPage ?? "" })}
          </span>
        </div>
        <input
          className="scrub"
          type="range"
          min={0}
          max={Math.max(0, total - 1)}
          step={1}
          value={draft}
          aria-label={t("jump.scrubber")}
          aria-valuetext={t("reader.pageOf", { n: draft + 1, total })}
          style={{ "--fill": total > 1 ? `${(draft / (total - 1)) * 100}%` : "0%" } as React.CSSProperties}
          onChange={(e) => setDraft(Number(e.target.value))}
          onPointerUp={() => draft !== current && go(draft)}
          onKeyDown={(e) => e.key === "Enter" && go(draft)}
        />
        {draft !== current && (
          <button type="button" className="btn btn--primary jump__go" onClick={() => go(draft)}>
            {t("jump.goPage", { n: draft + 1 })}
          </button>
        )}
      </section>

      <form className="jump__block" onSubmit={submitVerse} aria-labelledby="jump-verse">
        <h3 id="jump-verse" className="jump__label">
          {t("jump.verse")}
        </h3>
        <div className="jump__verse">
          <input
            className="field"
            inputMode="numeric"
            pattern="[0-9]*"
            autoComplete="off"
            enterKeyHint="go"
            value={verse}
            placeholder={t("jump.versePlaceholder", { a: 1, b: last })}
            aria-label={t("jump.verseHint", { n: last })}
            aria-invalid={error ? true : undefined}
            onChange={(e) => {
              setVerse(e.target.value.replace(/\D/g, "").slice(0, 3));
              setError("");
            }}
          />
          <button type="submit" className="btn" disabled={!verse}>
            {t("jump.go")}
          </button>
        </div>
        {error && (
          <p className="jump__error" role="alert">
            {error}
          </p>
        )}
      </form>

      <section className="jump__block" aria-labelledby="jump-list">
        <h3 id="jump-list" className="jump__label">
          {t("jump.pages")}
        </h3>
        <div className="pagegrid">
          {surah.pages.map((p, i) => {
            const marked = marks.some((m) => m.surah === surah.number && m.page === i);
            return (
              <button key={p.bookPage} type="button" className={`pagegrid__item${i === current ? " is-current" : ""}`} aria-current={i === current ? "true" : undefined} onClick={() => go(i)}>
                <small>{t("unit.pageShort")} {p.bookPage}</small>
                <strong>{p.verseRange ? (p.verseRange.first === p.verseRange.last ? p.verseRange.first : `${p.verseRange.first} to ${p.verseRange.last}`) : ""}</strong>
                {marked && (
                  <span className="pagegrid__mark" aria-label={t("jump.saved")}>
                    <IconBookmark filled />
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </section>
    </Sheet>
  );
}
