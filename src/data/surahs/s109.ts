import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 109 · Al-Kāfirūn — book pages 1191–1192 (verses 1–6, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Page 1192 opens with the last three verses of this sūrah, above the heading of Sūrah 110.
 */
const surah: SurahData = {
  number: 109,
  pages: [
    {
      bookPage: 1191,
      heading: {
        title: "Al-Kāfirūn",
        lines: ["(Those Who Reject Faith)", "Revealed at Makkah", "6 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Say [O, Messenger!]: “O, you ringleaders", "Of disbelief!"] },
        { type: "verse", number: 2, lines: ["“I do not worship what you worship,"] },
        { type: "verse", number: 3, lines: ["“And you do not worship Allāh the One", "Whom I worship;"] },
      ],
    },
    {
      bookPage: 1192,
      blocks: [
        { type: "verse", number: 4, lines: ["“And I will not definitely be", "The worshipper of what you worship;"] },
        { type: "verse", number: 5, lines: ["“Nor you will be the worshippers of", "Allāh, the One, Whom I worship;"] },
        { type: "verse", number: 6, lines: ["“So to you be your rite and to me my", "Religion.”{1}"] },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        {
          kind: "p",
          text: "The Makkan ringleaders of pagans came to the Holy Messenger suggesting that to remove the hostile attitudes among them, the Holy Messenger may worship their idols for one year and they will worship his God for another year; it was against that foolish suggestion that this Sūrah was revealed.",
        },
      ],
    },
  ],
};

export default surah;
