/** Raw, serialisable shapes. Every surah file exports one `SurahData`. */

export type Place = "Makkah" | "Madinah";

/**
 * Inline markup used in every text field:
 *   {4}      footnote marker for footnote #4 of the surah
 *   [ ... ]  translator's insertion (may span line breaks)
 *   \n       line break exactly as printed in the book
 */
export type MarkedText = string;

export type FootnoteBlock =
  | { kind: "p"; text: MarkedText }
  /** A dictionary definition, e.g. "Verse:" with numbered senses. */
  | { kind: "definition"; term: string; senses: string[] };

export interface FootnoteData {
  id: number;
  blocks: FootnoteBlock[];
}

export interface VerseBlock {
  type: "verse";
  /** Verse (āyah) number as printed. */
  number: number;
  lines: MarkedText[];
  /** The verse began on the previous book page. */
  continued?: boolean;
  /** The verse carries on to the next book page. */
  continues?: boolean;
}

export interface DividerBlock {
  type: "divider";
}

/** The unnumbered opening formula printed under a sūrah title (every sūrah except 1 and 9). */
export interface BismillahBlock {
  type: "bismillah";
  lines: MarkedText[];
}

export type PageBlock = VerseBlock | DividerBlock | BismillahBlock;

export interface HeadingData {
  title: MarkedText;
  lines: MarkedText[];
}

export interface PageData {
  /** Page number printed in the book. */
  bookPage: number;
  heading?: HeadingData;
  blocks: PageBlock[];
}

export interface SurahData {
  number: number;
  /** True while only some of the sūrah’s pages have been added. */
  partial?: boolean;
  pages: PageData[];
  footnotes: FootnoteData[];
}

export interface CatalogEntry {
  number: number;
  name: string;
  place: Place;
  bookPage: number;
  ayahCount: number;
}

export interface PartStart {
  part: number;
  surah: number;
  ayah: number;
}

export type IntroBlock =
  /** Centred opening formula at the very top (bold). */
  | { type: "basmala"; lines: MarkedText[] }
  | { type: "title"; text: MarkedText }
  | { type: "heading"; text: MarkedText; italic?: boolean }
  | { type: "p"; text: MarkedText; continued?: boolean; continues?: boolean }
  /** Separate printed lines, e.g. a short numbered list. */
  | { type: "lines"; lines: MarkedText[] }
  /** The printed ❊ mark between passages (1 or 3 of them). */
  | { type: "ornament"; count: 1 | 3 };

export interface IntroFootnoteData {
  id: number;
  text: MarkedText;
}

/** One printed page of the introduction. Footnote numbers restart on every page. */
export interface IntroPageData {
  bookPage: number;
  blocks: IntroBlock[];
  footnotes: IntroFootnoteData[];
}

export interface IntroductionData {
  title: string;
  pages: IntroPageData[];
}
