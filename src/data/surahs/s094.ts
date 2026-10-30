import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 94 · Al-Inshirāh — book pages 1172–1173 (verses 1–8, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 94,
  pages: [
    {
      bookPage: 1172,
      heading: {
        title: "Al-Inshirāh",
        lines: ["(The Expansion of Tolerance)", "Revealed at Makkah", "8 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["[O, Messenger!] Did We not expand your", "Breast for receiving the Divine", "Knowledge; and did We not increase", "Your tolerance against the difficulties?"],
        },
        { type: "verse", number: 2, lines: ["And did We not take away from you", "The burden of your Mission?{1}"] },
        { type: "verse", number: 3, lines: ["A burden which was about to break your", "Back;"] },
        { type: "verse", number: 4, lines: ["And We did raise fame for your", "Name;"] },
        {
          type: "verse",
          number: 5,
          lines: ["So verily, with every straitened", "Circumstances there is a relief, [by", "Allāh’s Favour]"],
        },
      ],
    },
    {
      bookPage: 1173,
      blocks: [
        { type: "verse", number: 6, lines: ["Verily, with every straitened", "Circumstances there is a relief."] },
        {
          type: "verse",
          number: 7,
          lines: ["So when you are free from your daily", "Duties regarding your Mission, then", "Establish optional prayer;"],
        },
        { type: "verse", number: 8, lines: ["And to your Creator&Nurturer pray and", "Invoke with eagerness."] },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "By giving him a devoted minister named Ali-ibn-e-Abī Tālib and sending the Invisible Hosts from the heaven when the Holy Messenger was encountered by the enemies." },
      ],
    },
  ],
};

export default surah;
