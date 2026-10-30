import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 95 · At-Tīn — book pages 1173–1174 (verses 1–8, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 95,
  pages: [
    {
      bookPage: 1173,
      heading: {
        title: "At-Tīn",
        lines: ["Revealed at Makkah", "8 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["By Tīn and Zaitūn,{1}"] },
        { type: "verse", number: 2, lines: ["By the Sinai Mount [where the Tablets", "Of Taurāt were bestowed to Mūssā]"] },
        { type: "verse", number: 3, lines: ["And by this City of Security,{2}"] },
        {
          type: "verse",
          number: 4,
          lines: ["That indeed We created man in perfect", "Balance [spritual, mental and physical],"],
        },
      ],
    },
    {
      bookPage: 1174,
      blocks: [
        {
          type: "verse",
          number: 5,
          lines: ["Then We rendered him to the lowest", "Part of [the Hell due to his disbelief,", "Ingratefulness and corruption];"],
        },
        {
          type: "verse",
          number: 6,
          lines: ["But those who believe and do righteous", "Deeds for them shall be the Permanent", "Reward [of the Paradise.]"],
        },
        { type: "verse", number: 7, lines: ["O, Man! After this proclamation, what", "Makes you belie the Day of Judgement?"] },
        { type: "verse", number: 8, lines: ["Is not Allāh the Supreme Judge", "On the Day of Judgement?"] },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "Two mountains in Syria" },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "Makkah City" },
      ],
    },
  ],
};

export default surah;
