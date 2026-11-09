import { InlineParser } from "./InlineParser.ts";
import type {
  CatalogEntry,
  FootnoteBlock,
  FootnoteData,
  HeadingData,
  PageBlock,
  PageData,
  SurahData,
  VerseBlock,
} from "./types.ts";

export class Footnote {
  readonly id: number;
  readonly blocks: readonly FootnoteBlock[];

  constructor(data: FootnoteData) {
    this.id = data.id;
    this.blocks = data.blocks;
  }
}

export class BookPage {
  readonly bookPage: number;
  readonly heading: HeadingData | undefined;
  readonly blocks: readonly PageBlock[];
  /**
   * For every block, how many translator brackets are already open when it starts. Non-zero only for a verse that
   * began on the previous book page inside an insertion. Filled in by `Surah`, which can see the page before.
   */
  readonly openDepths: readonly number[];

  constructor(data: PageData, openDepths: readonly number[] = []) {
    this.bookPage = data.bookPage;
    this.heading = data.heading;
    this.blocks = data.blocks;
    this.openDepths = openDepths;
  }

  /** Footnote ids cited on this page, in reading order. */
  get noteIds(): number[] {
    const texts: string[] = [];
    if (this.heading) texts.push(this.heading.title, ...this.heading.lines);
    for (const b of this.blocks) if (b.type === "verse") texts.push(...b.lines);
    return [...new Set(texts.flatMap((t) => InlineParser.noteIds(t)))];
  }

  get verses(): VerseBlock[] {
    return this.blocks.filter((b): b is VerseBlock => b.type === "verse");
  }

  /** First and last verse number printed on this page, or null for a page with no verse. */
  get verseRange(): { first: number; last: number } | null {
    const v = this.verses;
    return v.length ? { first: v[0].number, last: v[v.length - 1].number } : null;
  }
}

/** A fully validated surah ready for the reader. */
export class Surah {
  readonly number: number;
  readonly partial: boolean;
  readonly pages: readonly BookPage[];
  readonly footnotes: ReadonlyMap<number, Footnote>;
  /** Markup slips in the data (a stray `]`, a `[` never closed). Harmless to the reader, listed by `check:data`. */
  readonly markupWarnings: readonly string[];

  constructor(data: SurahData) {
    this.number = data.number;
    this.partial = data.partial ?? false;
    this.footnotes = new Map(data.footnotes.map((f) => [f.id, new Footnote(f)]));

    // Carry the open-bracket depth through the verses in order, across lines and across book pages.
    const warnings: string[] = [];
    let carry = 0;
    this.pages = data.pages.map((p) => {
      const depths = p.blocks.map((b) => {
        if (b.type !== "verse") return 0;
        const start = b.continued ? carry : 0;
        if (!b.continued && carry > 0) warnings.push(`page ${p.bookPage}, verse ${b.number}: a "[" from the previous verse was never closed`);
        const end = InlineParser.endDepth(b.lines, start);
        const hits = InlineParser.readLines(b.lines, start);
        if (hits.lines.some((l) => l.some((t) => t.kind === "text" && t.value.includes("]") && !t.editorial))) {
          warnings.push(`page ${p.bookPage}, verse ${b.number}: a "]" has no matching "["`);
        }
        carry = b.continues ? end : 0;
        if (!b.continues && end > 0) warnings.push(`page ${p.bookPage}, verse ${b.number}: a "[" is never closed`);
        return start;
      });
      return new BookPage(p, depths);
    });
    this.markupWarnings = warnings;
    this.validate();
  }

  get orderedFootnotes(): Footnote[] {
    return [...this.footnotes.values()].sort((a, b) => a.id - b.id);
  }

  pageIndexOfVerse(ayah: number): number {
    const i = this.pages.findIndex((p) => p.verses.some((v) => v.number === ayah));
    return i < 0 ? -1 : i;
  }

  /** Highest verse number present in the data. */
  get lastVerse(): number {
    let last = 0;
    for (const p of this.pages) for (const v of p.verses) last = Math.max(last, v.number);
    return last;
  }

  /** Fails loudly when a data file is inconsistent. */
  private validate(): void {
    for (const page of this.pages) {
      for (const id of page.noteIds) {
        if (!this.footnotes.has(id)) {
          throw new Error(`Surah ${this.number}, page ${page.bookPage}: marker {${id}} has no footnote`);
        }
      }
    }
  }
}

export class CatalogItem {
  readonly number: number;
  readonly name: string;
  readonly place: CatalogEntry["place"];
  readonly bookPage: number;
  readonly ayahCount: number;

  constructor(entry: CatalogEntry) {
    this.number = entry.number;
    this.name = entry.name;
    this.place = entry.place;
    this.bookPage = entry.bookPage;
    this.ayahCount = entry.ayahCount;
  }
}
