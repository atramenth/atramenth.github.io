import { useMemo } from "react";
import { InlineParser } from "../domain/InlineParser.ts";

interface Props {
  text: string;
  /** When given, footnote markers become tappable buttons. */
  onNote?: (id: number) => void;
  /** With no `onNote`, show footnote markers as plain superscripts instead of hiding them. */
  staticNotes?: boolean;
}

/** Renders marked text: line breaks, translator insertions and footnote markers. */
export function InlineText({ text, onNote, staticNotes }: Props) {
  const tokens = useMemo(() => InlineParser.parse(text), [text]);
  return (
    <>
      {tokens.map((t, i) => {
        switch (t.kind) {
          case "break":
            return <br key={i} />;
          case "note":
            return onNote ? (
              <button key={i} type="button" className="fn" aria-label={`Open note ${t.id}`} onClick={() => onNote(t.id)}>
                {t.id}
              </button>
            ) : staticNotes ? (
              <sup key={i} className="fn-static">
                {t.id}
              </sup>
            ) : null;
          default:
            return (
              <span key={i} className={t.editorial ? "ed" : undefined}>
                {InlineParser.splitArabic(t.value).map((run, j) =>
                  run.arabic ? (
                    <span key={j} className="ar" lang="ar" dir="rtl">
                      {run.text}
                    </span>
                  ) : (
                    run.text
                  ),
                )}
              </span>
            );
        }
      })}
    </>
  );
}
