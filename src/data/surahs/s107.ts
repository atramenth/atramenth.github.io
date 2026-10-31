import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 107 · Al-Mā‘ūn — book pages 1189–1190 (verses 1–7, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Page 1190 opens with the rest of this sūrah, above the heading of Sūrah 108.
 */
const surah: SurahData = {
  number: 107,
  pages: [
    {
      bookPage: 1189,
      heading: {
        title: "Al-Mā‘ūn",
        lines: ["(Alms)", "Revealed at Makkah", "7 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Have you noticed him who practically", "Denies the Day of Judgement?"] },
      ],
    },
    {
      bookPage: 1190,
      blocks: [
        { type: "verse", number: 2, lines: ["This is the one who [against Allāh’s", "Commands] repulses the orphan with", "Harshness;"] },
        { type: "verse", number: 3, lines: ["And does not enjoin the others to feed", "The needy;"] },
        { type: "verse", number: 4, lines: ["So woe to those performers of prayers,"] },
        { type: "verse", number: 5, lines: ["Who are neglectful about establishing", "Prayers regularly and on the time", "Appointed;"] },
        { type: "verse", number: 6, lines: ["And those who do things to show off;"] },
        { type: "verse", number: 7, lines: ["And they refuse to pay alms and even", "To supply small things that their", "Neighbours need."] },
      ],
    },
  ],
  footnotes: [],
};

export default surah;
