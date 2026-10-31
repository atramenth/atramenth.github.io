import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 100 · Al-‘Ādiyāt — book pages 1181–1182 (verses 1–11, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Page 1182 opens with the last six verses of this sūrah, above the heading of Sūrah 101.
 */
const surah: SurahData = {
  number: 100,
  pages: [
    {
      bookPage: 1181,
      heading: {
        title: "Al-‘Ādiyāt",
        lines: ["(The Chargers)", "Revealed at Makkah", "11 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["By the horses that ran with panting", "Breath [to the war against", "The disbelievers],"] },
        { type: "verse", number: 2, lines: ["By those that raised sparks of fire by", "Their hooves striking the earth;"] },
        { type: "verse", number: 3, lines: ["By those who assulted the enemy at", "The break of the dawn;"] },
        { type: "verse", number: 4, lines: ["And they raised dust over the place;"] },
        { type: "verse", number: 5, lines: ["They encircled the troops of the enemy", "By arriving in the midst of their circle.{1}"] },
      ],
    },
    {
      bookPage: 1182,
      blocks: [
        { type: "verse", number: 6, lines: ["[By all these oaths] Verily, man is", "Ungrateful to his Creator&Nurturer,"] },
        { type: "verse", number: 7, lines: ["And he is a witness to that;{2}"] },
        { type: "verse", number: 8, lines: ["And man’s love for wealth is something", "Serious;"] },
        { type: "verse", number: 9, lines: ["Does he not know that when the dead of", "The graves are raised up,"] },
        { type: "verse", number: 10, lines: ["All the secrets of men’s hearts will be", "Known and disclosed?"] },
        { type: "verse", number: 11, lines: ["Then, verily on that Day, their", "Creator&Nurturer is Well Informed", "Of their deeds."] },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        {
          kind: "p",
          text: "In the eighth year of Hijrat, the Holy Messenger was informed that a group of twelve thousand of warriers in the land of Yābess had made a compact to kill the Holy Messenger and to destroy the Islāmic community altogether. The Holy Messenger gave the banner of Islām to several of his Companions and sent over everywhere with a strong army, but each time they returned defeated. At last the Holy Messenger gave the mission to Ali (A.S); and a group of Emigrants and Assisters also were despatched to meet the enemy; the army marched at night and then in the breaking of the dawn, made a sudden assult on the army of the disbelief and by Allāh’s Will, Muslims became victorious: Some of the enemies were killed and some put in chains and were brought as a gift to the Holy Messenger. But the Miraculous manifest of Allāh’s Will was seen since before their arrival, this Sūrah was revealed to the Holy Messenger in the morning prayer; and when the people asked about it and said that it was not heard before, the Holy Messenger said: “Allāh, the Almighty made Ali and his army victorious and Jibrāīl brought the glad-tidings before the return of the victorious men of Islām.”",
        },
      ],
    },
    { id: 2, blocks: [{ kind: "p", text: "See: 6:130" }] },
  ],
};

export default surah;
