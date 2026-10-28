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

  constructor(data: PageData) {
    this.bookPage = data.bookPage;
    this.heading = data.heading;
    this.blocks = data.blocks;
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
}

/** A fully validated surah ready for the reader. */
export class Surah {
  readonly number: number;
  readonly pages: readonly BookPage[];
  readonly footnotes: ReadonlyMap<number, Footnote>;

  constructor(data: SurahData) {
    this.number = data.number;
    this.pages = data.pages.map((p) => new BookPage(p));
    this.footnotes = new Map(data.footnotes.map((f) => [f.id, new Footnote(f)]));
    this.validate();
  }

  get orderedFootnotes(): Footnote[] {
    return [...this.footnotes.values()].sort((a, b) => a.id - b.id);
  }

  pageIndexOfVerse(ayah: number): number {
    const i = this.pages.findIndex((p) => p.verses.some((v) => v.number === ayah));
    return i < 0 ? 0 : i;
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
