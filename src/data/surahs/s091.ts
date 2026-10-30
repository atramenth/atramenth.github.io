import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 91 · Ash-Shams — book pages 1166–1167 (verses 1–15, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 91,
  pages: [
    {
      bookPage: 1166,
      heading: {
        title: "Ash-Shams",
        lines: ["(The Sun)", "Revealed at Makkah", "15 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["By the Sun and its spreading light;"] },
        { type: "verse", number: 2, lines: ["And by the Moon which follows the Sun;"] },
        { type: "verse", number: 3, lines: ["And by the Day when it manifests", "The light of the Sun;"] },
        { type: "verse", number: 4, lines: ["And by the Night when it covers", "The day;"] },
        { type: "verse", number: 5, lines: ["And by the Sky and the One Who has", "Built it;"] },
        { type: "verse", number: 6, lines: ["And by the Earth and the One Who has", "Expanded it;"] },
        {
          type: "verse",
          number: 7,
          lines: ["And by the Soul and the One Who", "Created it and gave order and perfection", "To it,"],
        },
      ],
    },
    {
      bookPage: 1167,
      blocks: [
        { type: "verse", number: 8, lines: ["And inspired to it both its wrong and its", "Right;"] },
        { type: "verse", number: 9, lines: ["[By all these oaths] That the one who", "Purified it, received salvation,"] },
        {
          type: "verse",
          number: 10,
          lines: ["But the one who polutted", "It with sin and corruption", "Became the hopeless failure;"],
        },
        { type: "verse", number: 11, lines: ["[Such as] The people of Thamūd who by", "Denying Sālih, they rebelled,"] },
        { type: "verse", number: 12, lines: ["When the most rascal of them stood for", "Committing crime;"] },
        {
          type: "verse",
          number: 13,
          lines: ["Then Sālih the Messenger of Allāh said", "To them: “This is a she-camel of Allāh", "And let her have her turn of", "The drinking-place to drink water.”"],
        },
        {
          type: "verse",
          number: 14,
          lines: ["They rejected their Messenger and", "Hamstrung her; so their Creator", "Crushed them with a thunderbolt as", "Recompense for their sins and made", "Them levelled with the earth;"],
        },
        {
          type: "verse",
          number: 15,
          lines: ["And Allāh did not fear", "The consequences of what He did,", "[Since punishment of the wrongdoers is", "An act of Truth by the Divine Law.]"],
        },
      ],
    },
  ],
  footnotes: [],
};

export default surah;
