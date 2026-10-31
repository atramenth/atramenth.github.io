import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 103 · Al-‘Asr — book pages 1185–1186 (verses 1–3, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Page 1186 opens with the end of verse 3, above the heading of Sūrah 104.
 */
const surah: SurahData = {
  number: 103,
  pages: [
    {
      bookPage: 1185,
      heading: {
        title: "Al-‘Asr",
        lines: ["(The Era)", "Revealed at Makkah", "3 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["By the Era{1}"] },
        { type: "verse", number: 2, lines: ["That man is indeed in a grave loss,"] },
        {
          type: "verse",
          number: 3,
          lines: ["Save those who have Faith in Allāh, and", "Do righteous deeds, and enjoin one", "Another to believe in the Truth,", "[The Holy Qur’ān]; and enjoin one"],
          continues: true,
        },
      ],
    },
    {
      bookPage: 1186,
      blocks: [{ type: "verse", number: 3, continued: true, lines: ["Another to be patient and steadfast in", "Allāh’s Path [against the disbelievers]."] }],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        {
          kind: "p",
          text: "The Era of the Appearance of the Messenger of Islām or the Era of the Appearance of the Waited Saviour, Hojjat ibn Al-Hassan Al-Askarie (A.S) the twelfth Infallible Imām of Shīah Religion.",
        },
      ],
    },
  ],
};

export default surah;
