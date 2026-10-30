import { useMemo } from "react";
import { useT } from "../hooks/useT.tsx";
import { InlineParser } from "../domain/InlineParser.ts";

interface Props {
  text: string;
  /** When given, footnote markers become tappable buttons. */
  onNote?: (id: number) => void;
}

/** Renders marked text: line breaks, translator insertions and footnote markers. */
export function InlineText({ text, onNote }: Props) {
  const { t } = useT();
  const tokens = useMemo(() => InlineParser.parse(text), [text]);
  return (
    <>
      {tokens.map((tok, i) => {
        switch (tok.kind) {
          case "break":
            return <br key={i} />;
          case "note":
            return onNote ? (
              <button key={i} type="button" className="fn" aria-label={t("note.open", { n: tok.id })} onClick={() => onNote(tok.id)}>
                {tok.id}
              </button>
            ) : null;
          default:
            return (
              <span key={i} className={tok.editorial ? "ed" : undefined}>
                {InlineParser.splitArabic(tok.value).map((run, j) =>
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
