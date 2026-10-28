import { Fragment, useState, type ReactNode } from "react";
import { IconBack, IconNext, IconType } from "../components/Icons.tsx";
import { InlineText } from "../components/InlineText.tsx";
import { SettingsSheet } from "../components/SettingsSheet.tsx";
import { Sheet } from "../components/Sheet.tsx";
import { INTRODUCTION } from "../data/introduction.ts";
import type { IntroBlock } from "../domain/types.ts";
import { library } from "../services/library.ts";

/** Qur’ān references in a note (2:57, 4: 149, 54:17, 22 …) become the same chips the reader uses. */
const REF = /(\d{1,3}):\s?(\d{1,3})(?:\s*[-–]\s*\d{1,3})*/g;

function NoteText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  let last = 0;
  for (const m of text.matchAll(REF)) {
    const at = m.index ?? 0;
    if (at > last) parts.push(<Fragment key={at}>{text.slice(last, at)}</Fragment>);
    const ready = library.isAvailable(Number(m[1]));
    parts.push(
      <span key={`r${at}`} className={`ref${ready ? "" : " is-soon"}`}>
        {m[0]}
      </span>,
    );
    last = at + m[0].length;
  }
  if (last < text.length) parts.push(<Fragment key="end">{text.slice(last)}</Fragment>);
  return <>{parts}</>;
}

function Block({ block, onNote }: { block: IntroBlock; onNote: (id: number) => void }) {
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
          <svg className="intro__rule" viewBox="0 0 240 14" aria-hidden="true">
            <path d="M0 7h98M142 7h98" />
            <polygon points="120,1.5 127,7 120,12.5 113,7" />
          </svg>
        </>
      );
    case "heading":
      return (
        <h3 className={`intro__heading${block.italic ? " is-italic" : ""}`}>
          <InlineText text={block.text} onNote={onNote} />
        </h3>
      );
    case "lines":
      return (
        <p className="intro__lines">
          {block.lines.map((l, i) => (
            <Fragment key={i}>
              {i > 0 && <br />}
              <InlineText text={l} onNote={onNote} />
            </Fragment>
          ))}
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
          <InlineText text={block.text} onNote={onNote} />
        </p>
      );
  }
}

export default function Introduction() {
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
      <header className="screen__head screen__head--row">
        <div>
          <h1>{INTRODUCTION.title}</h1>
          <p>From the end of the book</p>
        </div>
        {!empty && (
          <button type="button" className="icon-btn" onClick={() => setShowSettings(true)} aria-label="Reading settings">
            <IconType />
          </button>
        )}
      </header>

      {empty ? (
        <div className="soon soon--intro">
          <svg viewBox="0 0 120 120" width="120" height="120" aria-hidden="true">
            <circle cx="60" cy="60" r="52" className="ink-ring" />
            <circle cx="60" cy="60" r="36" className="ink-ring ink-ring--dash" />
            <path d="M60 24c13 14 20 24 20 35a20 20 0 0 1-40 0c0-11 7-21 20-35z" className="ink-drop" />
          </svg>
          <h2>Waiting for the text</h2>
          <p>
            Add the translator’s introduction to <code>src/data/introduction.ts</code> as <code>blocks</code> and <code>footnotes</code>.
          </p>
        </div>
      ) : (
        <article className="intro">
          {INTRODUCTION.blocks.map((b, i) => (
            <Block key={i} block={b} onNote={setNoteId} />
          ))}
        </article>
      )}

      {note && (
        <Sheet
          label={`Note ${note.id}`}
          onClose={() => setNoteId(null)}
          header={
            <>
              <span className="sheet__kicker">Note</span> {note.id}
              <span className="sheet__of"> of {notes.length}</span>
            </>
          }
        >
          <article className="note" key={note.id}>
            <p>
              <NoteText text={note.text} />
            </p>
          </article>
          <nav className="note-nav" aria-label="Notes">
            <button type="button" className="btn btn--quiet" disabled={!prev} onClick={() => prev && setNoteId(prev.id)}>
              <IconBack /> Previous
            </button>
            <button type="button" className="btn btn--quiet" disabled={!next} onClick={() => next && setNoteId(next.id)}>
              Next <IconNext />
            </button>
          </nav>
        </Sheet>
      )}
      {showSettings && <SettingsSheet onClose={() => setShowSettings(false)} />}
    </main>
  );
}
