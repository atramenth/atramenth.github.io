import type { MarkedText } from "./types.ts";

export type Token =
  | { kind: "text"; value: string; editorial: boolean }
  | { kind: "note"; id: number; editorial: boolean }
  | { kind: "break" };

export type ScriptRun = { text: string; arabic: boolean };

const ARABIC_WORD = "[\\u0600-\\u06FF\\u0750-\\u077F\\u08A0-\\u08FF\\uFB50-\\uFDFF\\uFE70-\\uFEFF]+";
/** A run of Arabic words (spaces between words stay inside the run). */
const ARABIC_RUN = new RegExp(`${ARABIC_WORD}(?:\\s+${ARABIC_WORD})*`, "g");

export type RefPart = { text: string } | { ref: string; surah: number; ayah: number };

/** The result of reading one piece of marked text: its tokens and how many `[` are still open at its end. */
export interface Parsed {
  tokens: Token[];
  depth: number;
}

/** Turns marked text into render tokens. Pure and stateless. */
export class InlineParser {
  /**
   * Reads one piece of marked text.
   *
   * `depth` is the number of translator brackets already open when this text starts. A bracket often opens on one
   * printed line and closes on a later one (or on the next book page), so the reader has to carry the depth from
   * piece to piece: see `parseLines`. A `]` with nothing open is kept as plain text and never makes the depth negative.
   */
  static read(input: MarkedText, depth = 0): Parsed {
    const tokens: Token[] = [];
    let buffer = "";

    const flush = () => {
      if (buffer) tokens.push({ kind: "text", value: buffer, editorial: depth > 0 });
      buffer = "";
    };

    for (let i = 0; i < input.length; i++) {
      const ch = input[i];
      if (ch === "\n") {
        flush();
        tokens.push({ kind: "break" });
      } else if (ch === "{") {
        const end = input.indexOf("}", i);
        const id = Number(input.slice(i + 1, end));
        if (end > i && Number.isInteger(id)) {
          flush();
          tokens.push({ kind: "note", id, editorial: depth > 0 });
          i = end;
        } else buffer += ch;
      } else if (ch === "[") {
        flush();
        depth++;
        buffer += ch;
      } else if (ch === "]") {
        if (depth === 0) {
          buffer += ch;
        } else {
          buffer += ch;
          flush();
          depth--;
        }
      } else buffer += ch;
    }
    flush();
    return { tokens, depth };
  }

  /** Tokens only, for text that stands alone (a footnote paragraph, an introduction paragraph). */
  static parse(input: MarkedText): Token[] {
    return InlineParser.read(input, 0).tokens;
  }

  /**
   * Reads consecutive printed lines of one passage (a verse, a heading) and carries the open-bracket depth from each
   * line to the next, so a translator's insertion that wraps onto the next line stays an insertion.
   * Returns one token list per line and the depth left open after the last line.
   */
  static readLines(lines: readonly MarkedText[], depth = 0): { lines: Token[][]; depth: number } {
    const out: Token[][] = [];
    let d = depth;
    for (const line of lines) {
      const r = InlineParser.read(line, d);
      out.push(r.tokens);
      d = r.depth;
    }
    return { lines: out, depth: d };
  }

  /** How many `[` are still open after these lines, given `depth` open before them. */
  static endDepth(lines: readonly MarkedText[], depth = 0): number {
    return InlineParser.readLines(lines, depth).depth;
  }

  static noteIds(input: MarkedText): number[] {
    return InlineParser.parse(input).flatMap((t) => (t.kind === "note" ? [t.id] : []));
  }

  /** Splits text into Latin and Arabic runs so Arabic words can be set right-to-left. */
  static splitArabic(input: string): ScriptRun[] {
    const out: ScriptRun[] = [];
    let last = 0;
    for (const m of input.matchAll(ARABIC_RUN)) {
      const at = m.index ?? 0;
      if (at > last) out.push({ text: input.slice(last, at), arabic: false });
      out.push({ text: m[0], arabic: true });
      last = at + m[0].length;
    }
    if (last < input.length) out.push({ text: input.slice(last), arabic: false });
    return out;
  }

  /** Splits text into plain runs and Qur'ān references like 2:21 or 36:69-70. */
  static splitReferences(input: string): RefPart[] {
    const out: RefPart[] = [];
    const re = /(?<![\d:])(\d{1,3}):\s?(\d{1,3})(?![\d:])(?:\s*[-–]\s*\d{1,3}(?![\d:]))*/g;
    let last = 0;
    for (const m of input.matchAll(re)) {
      const at = m.index ?? 0;
      if (at > last) out.push({ text: input.slice(last, at) });
      out.push({ ref: m[0].replace(/\s+/g, ""), surah: Number(m[1]), ayah: Number(m[2]) });
      last = at + m[0].length;
    }
    if (last < input.length) out.push({ text: input.slice(last) });
    return out;
  }
}
