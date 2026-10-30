import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 86 · At-Tāriq — book pages 1153–1155 (verses 1–17, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 86,
  pages: [
    {
      bookPage: 1153,
      heading: {
        title: "At-Tāriq",
        lines: ["Revealed at Makkah", "17 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["By the Sky and by Tāriq"] },
        { type: "verse", number: 2, lines: ["And what makes clear the meaning of", "Tāriq to you?"] },
        {
          type: "verse",
          number: 3,
          lines: ["It is a shooting-star [which protects", "The heaven from the devils who steal", "The Divine discourses; and the shooting-", "Stars pursue the devils to their perdition.]"],
        },
        { type: "verse", number: 4, lines: ["Allāh has appointed for every soul a", "Guardian Angel."] },
        { type: "verse", number: 5, continues: true, lines: ["Man should ponder about his own"] },
      ],
    },
    {
      bookPage: 1154,
      blocks: [
        { type: "verse", number: 5, continued: true, lines: ["Creation to see of what he is created:"] },
        { type: "verse", number: 6, lines: ["He is created from a leaping drop,"] },
        { type: "verse", number: 7, lines: ["Which comes out of the backbone of", "The father and the ribs [of the mother];"] },
        { type: "verse", number: 8, lines: ["Certainly Allāh is Able to raise up this", "Creature after his death."] },
        { type: "verse", number: 9, lines: ["On the Day when all the secrets will be", "Disclosed,"] },
        {
          type: "verse",
          number: 10,
          lines: ["Then for man there will be no power", "And no helper to defend him against", "The Divine Chastisement."],
        },
        { type: "divider" },
        { type: "verse", number: 11, lines: ["By the Sky which produces rain", "Frequently;"] },
        {
          type: "verse",
          number: 12,
          lines: ["And by the Earth which splits for grain;", "And grains yield production [in the splits]."],
        },
        {
          type: "verse",
          number: 13,
          lines: ["[By all these oaths] That this Qur’ān is a", "Word which discriminates Truth from", "Falsehood,"],
        },
        { type: "verse", number: 14, lines: ["And it is not joke or jest."] },
        { type: "verse", number: 15, lines: ["Verily, the disbelievers are only after", "Making plots,"] },
        { type: "verse", number: 16, continues: true, lines: ["And I [Allāh, the Almighty] make a"] },
      ],
    },
    {
      bookPage: 1155,
      blocks: [
        { type: "verse", number: 16, continued: true, lines: ["Strong scheme against their plots;"] },
        {
          type: "verse",
          number: 17,
          lines: ["So [O, Messenger!] respite", "The disbelievers and treat them gently", "Until the Ordained Time, [surely they", "Cannot frustrate Allāh’s Plans.]"],
        },
      ],
    },
  ],
  footnotes: [],
};

export default surah;
