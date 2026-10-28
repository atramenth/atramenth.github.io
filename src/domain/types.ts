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

export type PageBlock = VerseBlock | DividerBlock;

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

export interface IntroductionData {
  title: string;
  sections: { heading: string; paragraphs: MarkedText[] }[];
}
