import { Fragment } from "react";
import { InlineParser } from "../domain/InlineParser.ts";
import type { Footnote, Surah } from "../domain/Surah.ts";
import { useT } from "../hooks/useT.tsx";
import { library } from "../services/library.ts";
import { IconBack, IconNext } from "./Icons.tsx";
import { Sheet } from "./Sheet.tsx";

interface Props {
  surah: Surah;
  /** Language of the sūrah text, for assistive tech. */
  contentLang: string;
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
  const { t } = useT();
  const ready = library.isAvailable(surah);
  const name = library.get(surah)?.name;
  return (
    <span
      className={`ref${ready ? "" : " is-soon"}`}
      title={ready ? (name ? t("note.refTitleNamed", { n: surah, name }) : t("note.refTitle", { n: surah })) : t("note.refSoon", { n: surah, name: name ?? "" })}
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

export function NoteSheet({ surah, contentLang, noteId, onSelect, onClose }: Props) {
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
        <>
          <span className="sheet__kicker">{t("note.kicker")}</span> {note.id}
          <span className="sheet__of"> {t("note.of", { n: notes.length })}</span>
        </>
      }
    >
      <article className="note" key={note.id} lang={contentLang}>
        <NoteBody note={note} />
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
