import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 102 · At-Takāthur — book pages 1184–1185 (verses 1–8, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Page 1185 opens with the last three verses of this sūrah, above the heading of Sūrah 103.
 */
const surah: SurahData = {
  number: 102,
  pages: [
    {
      bookPage: 1184,
      heading: {
        title: "At-Takāthur",
        lines: ["(The Greed for Multiplication of Wealth and Worldy Belongings)", "Revealed at Makkah", "8 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["The vain effort of piling up worldly", "Things, money, children and members of", "The tribes amused you and made you", "Neglectful about Allāh’s Remembrance:"],
        },
        { type: "verse", number: 2, lines: ["Even you paid a visit to the family", "Graves [and numbered your dead", "Relatives as a matter of rivalry]"] },
        { type: "verse", number: 3, lines: ["Nay! You shall soon come to know;"] },
        { type: "verse", number: 4, lines: ["Nay! You shall soon come to know [that", "All these boastful manner is absurd]."] },
        {
          type: "verse",
          number: 5,
          lines: ["Nay! If you people knew with", "Certainty of knowledge the reality of", "The End [you would give up such false", "Amusements]."],
        },
      ],
    },
    {
      bookPage: 1185,
      blocks: [
        { type: "verse", number: 6, lines: ["You shall surely see the Hell;"] },
        { type: "verse", number: 7, lines: ["And surely you will attain the certainty", "Of vision [after being cast into the Fire];"] },
        {
          type: "verse",
          number: 8,
          lines: ["There you will be certainly questioned", "About the bounties that you were", "Bestowed [and you did not value them,", "And did not express your thanks for", "Having them]."],
        },
      ],
    },
  ],
  footnotes: [],
};

export default surah;
