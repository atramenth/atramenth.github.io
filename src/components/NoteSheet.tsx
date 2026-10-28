import { Fragment } from "react";
import { InlineParser } from "../domain/InlineParser.ts";
import type { Footnote, Surah } from "../domain/Surah.ts";
import { library } from "../services/library.ts";
import { IconBack, IconNext } from "./Icons.tsx";
import { Sheet } from "./Sheet.tsx";

interface Props {
  surah: Surah;
  noteId: number;
  onSelect: (id: number) => void;
  onClose: () => void;
}

function RichText({ text }: { text: string }) {
  return (
    <>
      {InlineParser.parse(text).map((tok, i) => {
        if (tok.kind !== "text") return null;
        return (
          <span key={i} className={tok.editorial ? "ed" : undefined}>
            {InlineParser.splitReferences(tok.value).map((part, j) =>
              "ref" in part ? <RefChip key={j} ref_={part.ref} surah={part.surah} /> : <Fragment key={j}>{part.text}</Fragment>,
            )}
          </span>
        );
      })}
    </>
  );
}

function RefChip({ ref_, surah }: { ref_: string; surah: number }) {
  const ready = library.isAvailable(surah);
  const name = library.get(surah)?.name;
  return (
    <span
      className={`ref${ready ? "" : " is-soon"}`}
      title={ready ? `Sūrah ${surah}${name ? ` · ${name}` : ""}` : `Sūrah ${surah}${name ? ` (${name})` : ""} isn’t added yet`}
    >
      {ref_}
    </span>
  );
}

function NoteBody({ note }: { note: Footnote }) {
  return (
    <>
      {note.blocks.map((b, i) =>
        b.kind === "p" ? (
          <p key={i}>
            <RichText text={b.text} />
          </p>
        ) : (
          <section key={i} className="def">
            <h3 className="def__term">{b.term}</h3>
            <ol>
              {b.senses.map((s, j) => (
                <li key={j}>{s}</li>
              ))}
            </ol>
          </section>
        ),
      )}
    </>
  );
}

export function NoteSheet({ surah, noteId, onSelect, onClose }: Props) {
  const notes = surah.orderedFootnotes;
  const index = notes.findIndex((n) => n.id === noteId);
  const note = notes[index];
  if (!note) return null;
  const prev = notes[index - 1];
  const next = notes[index + 1];

  return (
    <Sheet
      label={`Note ${note.id}`}
      onClose={onClose}
      header={
        <>
          <span className="sheet__kicker">Note</span> {note.id}
          <span className="sheet__of"> of {notes.length}</span>
        </>
      }
    >
      <article className="note" key={note.id}>
        <NoteBody note={note} />
      </article>
      <nav className="note-nav" aria-label="Notes">
        <button type="button" className="btn btn--quiet" disabled={!prev} onClick={() => prev && onSelect(prev.id)}>
          <IconBack /> Previous
        </button>
        <button type="button" className="btn btn--quiet" disabled={!next} onClick={() => next && onSelect(next.id)}>
          Next <IconNext />
        </button>
      </nav>
    </Sheet>
  );
}
