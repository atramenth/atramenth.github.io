import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 110 · An-Nasr — book pages 1192–1193 (verses 1–3, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Page 1193 opens with the last verse of this sūrah, above the heading of Sūrah 111.
 */
const surah: SurahData = {
  number: 110,
  pages: [
    {
      bookPage: 1192,
      heading: {
        title: "An-Nasr",
        lines: ["(The Divine Aid)", "Revealed at Madinah", "3 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["[O, Messenger!] When comes the Aid of", "Allāh and the Victory,{1}"] },
        { type: "verse", number: 2, lines: ["Then you will see that people enter", "Allāh’s Religion in crowds;"] },
      ],
    },
    {
      bookPage: 1193,
      blocks: [
        {
          type: "verse",
          number: 3,
          lines: ["So Celebrate the Absolute Purity of your", "Creator&Nurturer and say", "The Remembrance of thanksgiving to", "Allāh; and ask His Forgiveness. Verily,", "Allāh is the Relenting Repentance-", "Accepter."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        {
          kind: "p",
          text: "This Sūrah contains the Divine Prophecy which was known through the Embracing Knowledge of Allāh and its fulfillment appeared as the Victory of Makkah which put an end to paganism and established Islām as a universal Religion of the Truth.",
        },
      ],
    },
  ],
};

export default surah;
