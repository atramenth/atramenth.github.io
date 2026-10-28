import { useMemo } from "react";
import { InlineParser } from "../domain/InlineParser.ts";

interface Props {
  text: string;
  /** When given, footnote markers become tappable buttons. */
  onNote?: (id: number) => void;
}

/** Renders marked text: line breaks, translator insertions and footnote markers. */
export function InlineText({ text, onNote }: Props) {
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
            ) : null;
          default:
            return (
              <span key={i} className={t.editorial ? "ed" : undefined}>
                {t.value}
              </span>
            );
        }
      })}
    </>
  );
}
