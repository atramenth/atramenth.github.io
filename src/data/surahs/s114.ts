import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 114 · An-Nās — book page 1196 (verses 1–6, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 */
const surah: SurahData = {
  number: 114,
  pages: [
    {
      bookPage: 1196,
      heading: {
        title: "An-Nāss",
        lines: ["(The people)", "Revealed at Makkah", "6 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Say [O, Messenger!]: “I take refuge in", "The Creator of mankind,"] },
        { type: "verse", number: 2, lines: ["“The King of mankind,"] },
        { type: "verse", number: 3, lines: ["“The God of mankind,"] },
        { type: "verse", number: 4, lines: ["“From the evil of the temptations of", "Satan:"] },
        { type: "verse", number: 5, lines: ["“The one who whispers into the hearts", "Of the people,"] },
        { type: "verse", number: 6, lines: ["“Whether he be from among the Jinns", "Or among the mankind.”"] },
      ],
    },
  ],
  footnotes: [],
};

export default surah;
