import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 112 · Al-Ikhlās — book pages 1194–1195 (verses 1–4, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Page 1195 opens with the last verse of this sūrah, above the heading of Sūrah 113.
 */
const surah: SurahData = {
  number: 112,
  pages: [
    {
      bookPage: 1194,
      heading: {
        title: "Al-Ikhlās",
        lines: ["(Sincerity in Faith)", "Revealed at Makkah", "4 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Say [O, Messenger!]: “Allāh is the One", "And the Only Creator;"] },
        { type: "verse", number: 2, lines: ["“Allāh is the Absolute Independent,", "[Free from all attachments:]"] },
        { type: "verse", number: 3, lines: ["“Neither He has a son nor a daughter,", "Nor He is born of any other being,"] },
      ],
    },
    {
      bookPage: 1195,
      blocks: [{ type: "verse", number: 4, lines: ["“And there is no equal, no match and no", "Mate for Allāh, the Almighty.”"] }],
    },
  ],
  footnotes: [],
};

export default surah;
