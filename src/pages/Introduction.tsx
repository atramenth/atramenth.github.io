import { useState } from "react";
import { IconBack, IconNext, IconType, Ornament } from "../components/Icons.tsx";
import { LangToggle } from "../components/LangToggle.tsx";
import { InlineText, MarkedLines } from "../components/InlineText.tsx";
import { ReadingProgress } from "../components/ReadingProgress.tsx";
import { RefText } from "../components/Refs.tsx";
import { SettingsSheet } from "../components/SettingsSheet.tsx";
import { Sheet } from "../components/Sheet.tsx";
import { introductionFor } from "../data/content.ts";
import { useT } from "../hooks/useT.tsx";
import type { IntroBlock } from "../domain/types.ts";

function Block({ block, onNote, from }: { block: IntroBlock; onNote: (id: number) => void; from: string }) {
  switch (block.type) {
    case "basmala":
      return (
        <p className="intro__basmala">
          {block.lines.map((l, i) => (
            <span key={i}>{l}</span>
          ))}
        </p>
      );
    case "title":
      return (
        <>
          <h2 className="intro__title">{block.text}</h2>
          <Ornament className="intro__rule" />
        </>
      );
    case "heading":
      return (
        <h3 className={`intro__heading${block.italic ? " is-italic" : ""}`}>
          <InlineText text={block.text} onNote={onNote} refFrom={from} />
        </h3>
      );
    case "lines":
      return (
        <p className="intro__lines">
          <MarkedLines lines={block.lines} onNote={onNote} refFrom={from} as="br" />
        </p>
      );
    case "ornament":
      return (
        <p className="intro__ornament" aria-hidden="true">
          {"❊".repeat(block.count)}
        </p>
      );
    default:
      return (
        <p className="intro__p">
          <InlineText text={block.text} onNote={onNote} refFrom={from} />
        </p>
      );
  }
}

export default function Introduction() {
  const { t, rich, lang } = useT();
  const INTRODUCTION = introductionFor(lang);
  const from = t("tabs.introduction");
  const [noteId, setNoteId] = useState<number | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const empty = INTRODUCTION.blocks.length === 0;

  const notes = INTRODUCTION.footnotes;
  const index = notes.findIndex((n) => n.id === noteId);
  const note = notes[index];
  const prev = notes[index - 1];
  const next = notes[index + 1];

  return (
    <main className="screen screen--read">
      {!empty && <ReadingProgress />}
      <header className="screen__head screen__head--row">
        <div>
          <h1>{INTRODUCTION.title}</h1>
          <p>{t("intro.subtitle")}</p>
        </div>
        <div className="head-actions">
          <LangToggle />
          {!empty && (
            <button type="button" className="icon-btn" onClick={() => setShowSettings(true)} aria-label={t("reader.settings")}>
              <IconType />
            </button>
          )}
        </div>
      </header>

      {empty ? (
        <div className="soon soon--intro">
          <svg viewBox="0 0 120 120" width="120" height="120" aria-hidden="true">
            <circle cx="60" cy="60" r="52" className="ink-ring" />
            <circle cx="60" cy="60" r="36" className="ink-ring ink-ring--dash" />
            <path d="M60 24c13 14 20 24 20 35a20 20 0 0 1-40 0c0-11 7-21 20-35z" className="ink-drop" />
          </svg>
          <h2>{t("intro.emptyTitle")}</h2>
          <p>{rich("intro.emptyBody")}</p>
        </div>
      ) : (
        <article className="intro">
          {INTRODUCTION.blocks.map((b, i) => (
            <Block key={i} block={b} onNote={setNoteId} from={from} />
          ))}
        </article>
      )}

      {note && (
        <Sheet
          label={t("note.label", { n: note.id })}
          onClose={() => setNoteId(null)}
          header={
            <>
              <span className="sheet__kicker">{t("note.kicker")}</span> {note.id}
              <span className="sheet__of"> {t("note.of", { n: notes.length })}</span>
            </>
          }
        >
          <article className="note" key={note.id}>
            <p>
              <RefText text={note.text} from={from} onGo={() => setNoteId(null)} />
            </p>
          </article>
          <nav className="note-nav" aria-label={t("note.nav")}>
            <button type="button" className="btn btn--quiet" disabled={!prev} onClick={() => prev && setNoteId(prev.id)}>
              <IconBack /> {t("note.prev")}
            </button>
            <button type="button" className="btn btn--quiet" disabled={!next} onClick={() => next && setNoteId(next.id)}>
              {t("note.next")} <IconNext />
            </button>
          </nav>
        </Sheet>
      )}
      {showSettings && <SettingsSheet onClose={() => setShowSettings(false)} />}
    </main>
  );
}
