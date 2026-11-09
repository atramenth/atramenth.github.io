import { Fragment, useMemo, type ReactNode } from "react";
import { useT } from "../hooks/useT.tsx";
import { InlineParser, type Token } from "../domain/InlineParser.ts";
import { RefText } from "./Refs.tsx";

interface TokensProps {
  tokens: readonly Token[];
  /** When given, footnote markers become tappable buttons. */
  onNote?: (id: number) => void;
  /** When given, "chapter:verse" references in the text become links; the string names where the reader came from. */
  refFrom?: string;
}

/** Renders parsed tokens: line breaks, translator insertions, footnote markers and Arabic words. */
export function Tokens({ tokens, onNote, refFrom }: TokensProps) {
  const { t } = useT();
  return (
    <>
      {tokens.map((tok, i) => {
        switch (tok.kind) {
          case "break":
            return <br key={i} />;
          case "note":
            return onNote ? (
              <span key={i} className={tok.editorial ? "ed" : undefined}>
                {/* Word joiners keep the marker on the line of the word it follows (never alone at a line start). */}
                {"\u2060"}
                <button type="button" className="fn" aria-label={t("note.open", { n: tok.id })} onClick={() => onNote(tok.id)}>
                  {tok.id}
                </button>
                {"\u2060"}
              </span>
            ) : null;
          default:
            return (
              <span key={i} className={tok.editorial ? "ed" : undefined}>
                {InlineParser.splitArabic(tok.value).map((run, j) =>
                  run.arabic ? (
                    <span key={j} className="ar" lang="ar" dir="rtl">
                      {run.text}
                    </span>
                  ) : refFrom ? (
                    <RefText key={j} text={run.text} from={refFrom} />
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

interface Props {
  text: string;
  /** Translator brackets already open when this text starts (see `InlineParser.read`). */
  depth?: number;
  onNote?: (id: number) => void;
  refFrom?: string;
}

/** Renders one piece of marked text on its own. */
export function InlineText({ text, depth = 0, onNote, refFrom }: Props) {
  const tokens = useMemo(() => InlineParser.read(text, depth).tokens, [text, depth]);
  return <Tokens tokens={tokens} onNote={onNote} refFrom={refFrom} />;
}

interface LinesProps {
  lines: readonly string[];
  /** Translator brackets already open when the first line starts (a verse continued from the previous page). */
  depth?: number;
  onNote?: (id: number) => void;
  refFrom?: string;
  /** Rendered inside the last line, so it stays on that line (the end-of-verse marker). */
  tail?: ReactNode;
  /** How consecutive lines are joined: as separately styled printed lines, or with a hard break. */
  as?: "lines" | "br";
}

/**
 * Renders consecutive printed lines of one passage. The open-bracket depth is carried from line to line, so a
 * translator's insertion that wraps onto the next printed line keeps its highlight there too.
 */
export function MarkedLines({ lines, depth = 0, onNote, refFrom, tail, as = "lines" }: LinesProps) {
  const parsed = useMemo(() => InlineParser.readLines(lines, depth).lines, [lines, depth]);
  return (
    <>
      {parsed.map((tokens, i) => (
        <Fragment key={i}>
          {i > 0 && (as === "br" ? <br /> : " ")}
          {as === "br" ? <Tokens tokens={tokens} onNote={onNote} refFrom={refFrom} /> : (
            <span className="verse__line">
              <Tokens tokens={tokens} onNote={onNote} refFrom={refFrom} />
              {i === parsed.length - 1 && tail && (
                <>
                  {"\u2060"}
                  {tail}
                </>
              )}
            </span>
          )}
        </Fragment>
      ))}
    </>
  );
}
