import type { MarkedText } from "./types.ts";

export type Token =
  | { kind: "text"; value: string; editorial: boolean }
  | { kind: "note"; id: number }
  | { kind: "break" };

export type ScriptRun = { text: string; arabic: boolean };

const ARABIC_WORD = "[\\u0600-\\u06FF\\u0750-\\u077F\\u08A0-\\u08FF\\uFB50-\\uFDFF\\uFE70-\\uFEFF]+";
/** A run of Arabic words (spaces between words stay inside the run). */
const ARABIC_RUN = new RegExp(`${ARABIC_WORD}(?:\\s+${ARABIC_WORD})*`, "g");

export type RefPart = { text: string } | { ref: string; surah: number; ayah: number };

/** Turns marked text into render tokens. Pure and stateless. */
export class InlineParser {
  static parse(input: MarkedText): Token[] {
    const tokens: Token[] = [];
    let buffer = "";
    let depth = 0;

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
          tokens.push({ kind: "note", id });
          i = end;
        } else buffer += ch;
      } else if (ch === "[") {
        flush();
        depth++;
        buffer += ch;
      } else if (ch === "]") {
        buffer += ch;
        flush();
        depth = Math.max(0, depth - 1);
      } else buffer += ch;
    }
    flush();
    return tokens;
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
    const re = /(\d{1,3}):(\d{1,3})(?:\s*[-–]\s*\d{1,3})*/g;
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
