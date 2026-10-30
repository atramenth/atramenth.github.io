import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 93 · Az-Zohā — book pages 1170–1171 (verses 1–11, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 93,
  pages: [
    {
      bookPage: 1170,
      heading: {
        title: "Az-Zohā",
        lines: ["(The Full Morning Light)", "Revealed at Makkah", "11 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["By the brightness of the full morning", "Light,"] },
        { type: "verse", number: 2, lines: ["By the Night when it becomes quiet and", "Still,"] },
        {
          type: "verse",
          number: 3,
          continues: true,
          lines: ["[By these oaths] That your", "Creator&Nurturer has not forsaken you"],
        },
      ],
    },
    {
      bookPage: 1171,
      blocks: [
        { type: "verse", number: 3, continued: true, lines: ["And is not displeased with you;{1}"] },
        { type: "verse", number: 4, lines: ["And certainly your Hereafter will be better", "For you, than this present life;"] },
        {
          type: "verse",
          number: 5,
          lines: ["And surely soon your Creator&Nurturer", "Will grant you so much of the Blessings", "That you will be joyous from it."],
        },
        { type: "verse", number: 6, lines: ["Did He not find you an orphan and did", "He not give you shelter?"] },
        { type: "verse", number: 7, lines: ["And also Allāh found you lost on the way", "And he guided you;"] },
        { type: "verse", number: 8, lines: ["And He found you in need so He", "Enriched you;"] },
        { type: "verse", number: 9, lines: ["So you too do not treat the orphans", "With harshness;"] },
        { type: "verse", number: 10, lines: ["And do not repulse the beggar;"] },
        {
          type: "verse",
          number: 11,
          lines: ["And proclaim the Grace and Favour of", "Your Creator&Nurturer to the people", "[To give them hope for invoking to their", "Creator.]"],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "The delay of receiving Words of Revelation from Allāh in about two weeks caused the Quraish pagans to taunt the Holy Messenger by saying: ‘Allāh is displeased with Mohammad that does not send any Revelation to him.’" },
      ],
    },
  ],
};

export default surah;
