import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 99 · Az-Zilzāl — book pages 1179–1180 (verses 1–8, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 99,
  pages: [
    {
      bookPage: 1179,
      heading: {
        title: "Az-Zilzāl",
        lines: ["(The Convulsion)", "Revealed at Madīnah", "8 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, continues: true, lines: ["When the earth is shaken with its most"] },
      ],
    },
    {
      bookPage: 1180,
      blocks: [
        { type: "verse", number: 1, continued: true, lines: ["Severe earthquakes,"] },
        {
          type: "verse",
          number: 2,
          lines: ["And the earth throws up her burdens", "[Such as the contents of the graves and", "The mines],"],
        },
        { type: "verse", number: 3, lines: ["Man keeps saying: “What has happened", "To the earth?”"] },
        {
          type: "verse",
          number: 4,
          lines: ["On that Day she shall relate her news,", "[Regarding the deeds of her inhabitants],"],
        },
        {
          type: "verse",
          number: 5,
          lines: ["Because indeed it has been revealed to", "Her by your Creator&Nurturer that", "She should speak up."],
        },
        {
          type: "verse",
          number: 6,
          lines: ["On that Day people shall come out from", "Their graves hastily, that their", "Deeds be shown to them:"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["Then he who has done a particle-weight", "Of good shall see it, [and shall receive", "The reward for it],"],
        },
        {
          type: "verse",
          number: 8,
          lines: ["And he who has done a particle-weight", "Of evil shall see it [and shall receive", "The recompense for it]."],
        },
      ],
    },
  ],
  footnotes: [],
};

export default surah;
