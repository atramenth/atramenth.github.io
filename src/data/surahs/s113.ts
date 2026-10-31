import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 113 · Al-Falaq — book page 1195 (verses 1–5, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * The top of page 1195 carries the last verse of Sūrah 112; it is stored in s112.ts.
 */
const surah: SurahData = {
  number: 113,
  pages: [
    {
      bookPage: 1195,
      heading: {
        title: "Al-Falaq",
        lines: ["(The Dawn)", "Revealed at Makkah", "5 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Say [O, Messenger!]: “I take refuge in", "The Creator of the Dawn:"] },
        { type: "verse", number: 2, lines: ["“From the evil of all creatures;"] },
        { type: "verse", number: 3, lines: ["“And from the evil of the darkness of", "The night when it overtakes all things;"] },
        { type: "verse", number: 4, lines: ["“And from the evil of the sorceresses", "Who blow spell in the knots;"] },
        { type: "verse", number: 5, lines: ["“And from the evil of the jealous when", "Jealousy is raised in him.”"] },
      ],
    },
  ],
  footnotes: [],
};

export default surah;
