import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 108 · Al-Kauthar — book pages 1190–1191 (verses 1–3, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Verse 1 starts on page 1190 and finishes at the top of page 1191, above the heading of Sūrah 109.
 */
const surah: SurahData = {
  number: 108,
  pages: [
    {
      bookPage: 1190,
      heading: {
        title: "Al-Kauthar",
        lines: ["(Good in Abundance)", "Revealed at Makkah", "3 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["[O, Messenger!] We have bestowed upon"], continues: true },
      ],
    },
    {
      bookPage: 1191,
      blocks: [
        { type: "verse", number: 1, continued: true, lines: ["You Good in Abundance.{1}"] },
        { type: "verse", number: 2, lines: ["So perform thanksgiving prayer{2} and", "Offer a sacrifice in Allāh’s Way."] },
        { type: "verse", number: 3, lines: ["Verily, your enemy shall be the one cut", "Off in progeny."] },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        {
          kind: "p",
          text: "After the death of Ibrāhīm the Holy Messenger’s son, born of Khadījeh, some enemies of the Holy Messenger overjoyed the news and called him ‘Abtar’ meaning without offspring, since according to the belief of the Time of Ignorance a man without a son to inherit his position is the one cut off in progeny. So Allāh, the Grace-Bestowing Mighty, to console His Messenger in this Sūrah gives him glad-tiding of Her Highness Fātimah Az-zahrā who proved to be the mother of the Holy Progeny of eleven Infallible Imāms, all religious leaders for mankind. Kauthar also is the name of a spring in the Paradise located under the Arsh, from which the pious will drink.",
        },
      ],
    },
    { id: 2, blocks: [{ kind: "p", text: "By prayer, here is meant thanksgiving prayer not regular prayer." }] },
  ],
};

export default surah;
