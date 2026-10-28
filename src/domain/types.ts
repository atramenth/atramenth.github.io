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

export interface IntroductionData {
  title: string;
  sections: { heading: string; paragraphs: MarkedText[] }[];
}

/** The translator’s biography, printed at the end of the book. */
export interface TranslatorData {
  /** Page title, drawn from the text: she is all three. */
  title: string;
  name: string;
  /** The heading the publisher printed above the text. */
  subtitle: string;
  /** Plain text; wrap a phrase in **double asterisks** for bold. */
  paragraphs: string[];
  signature: string;
  letter: { alt: string; heading: string; caption: string };
}
