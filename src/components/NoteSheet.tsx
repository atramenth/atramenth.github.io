import type { Footnote, Surah } from "../domain/Surah.ts";
import { InlineParser } from "../domain/InlineParser.ts";
import { useT } from "../hooks/useT.tsx";
import { IconBack, IconNext } from "./Icons.tsx";
import { RefText } from "./Refs.tsx";
import { Sheet } from "./Sheet.tsx";

interface Props {
  surah: Surah;
  /** Language of the sūrah text, for assistive tech. */
  contentLang: string;
  noteId: number;
  /** Names this place for the "Back to ..." pill when a reference inside the note is followed. */
  from: string;
  onSelect: (id: number) => void;
  onClose: () => void;
}

function RichText({ text, from, onGo }: { text: string; from: string; onGo: () => void }) {
  return (
    <>
      {InlineParser.parse(text).map((tok, i) => {
        if (tok.kind === "break") return <br key={i} />;
        if (tok.kind !== "text") return null;
        return (
          <span key={i} className={tok.editorial ? "ed" : undefined}>
            <RefText text={tok.value} from={from} onGo={onGo} />
          </span>
        );
      })}
    </>
  );
}

function NoteBody({ note, from, onGo }: { note: Footnote; from: string; onGo: () => void }) {
  return (
    <>
      {note.blocks.map((b, i) =>
        b.kind === "p" ? (
          <p key={i}>
            <RichText text={b.text} from={from} onGo={onGo} />
          </p>
        ) : (
          <section key={i} className="def">
            <h3 className="def__term">{b.term}</h3>
            <ol>
              {b.senses.map((s, j) => (
                <li key={j}>
                  <RefText text={s} from={from} onGo={onGo} />
                </li>
              ))}
            </ol>
          </section>
        ),
      )}
    </>
  );
}

export function NoteSheet({ surah, contentLang, noteId, from, onSelect, onClose }: Props) {
  const { t } = useT();
  const notes = surah.orderedFootnotes;
  const index = notes.findIndex((n) => n.id === noteId);
  const note = notes[index];
  if (!note) return null;
  const prev = notes[index - 1];
  const next = notes[index + 1];

  return (
    <Sheet
      label={t("note.label", { n: note.id })}
      onClose={onClose}
      header={
        <span className="sheet__count">
          <span className="sheet__kicker">{t("note.kicker")}</span>
          <b>{note.id}</b>
          <span className="sheet__of">{t("note.of", { n: notes.length })}</span>
        </span>
      }
    >
      <article className="note" key={note.id} lang={contentLang}>
        <NoteBody note={note} from={from} onGo={onClose} />
      </article>
      <nav className="note-nav" aria-label={t("note.nav")}>
        <button type="button" className="btn btn--quiet" disabled={!prev} onClick={() => prev && onSelect(prev.id)}>
          <IconBack /> {t("note.prev")}
        </button>
        <button type="button" className="btn btn--quiet" disabled={!next} onClick={() => next && onSelect(next.id)}>
          {t("note.next")} <IconNext />
        </button>
      </nav>
    </Sheet>
  );
}
