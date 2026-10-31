import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 104 · Al-Humazah — book pages 1186–1187 (verses 1–9, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Page 1187 opens with the last three verses of this sūrah, above the heading of Sūrah 105.
 */
const surah: SurahData = {
  number: 104,
  pages: [
    {
      bookPage: 1186,
      heading: {
        title: "Al-Humazah",
        lines: ["(A Taunter and Backbiter)", "Revealed at Makkah", "9 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Woe to every taunter and ill-will", "Backbiter!{1}"] },
        { type: "verse", number: 2, lines: ["A man who has collected wealth and", "Keeps on counting it;"] },
        { type: "verse", number: 3, lines: ["And he thinks that his wealth will cause", "Him a lasting life;"] },
        { type: "verse", number: 4, lines: ["Nay! Verily, he will be cast into", "Hotamah;"] },
        { type: "verse", number: 5, lines: ["And how could you know what", "The Hotamah is?{2}"] },
        { type: "verse", number: 6, lines: ["It is a Fire which has been kindled by", "Allāh’s Wrath;"] },
      ],
    },
    {
      bookPage: 1187,
      blocks: [
        { type: "verse", number: 7, lines: ["The flames of which aims the hearts", "Of the disbelievers;"] },
        { type: "verse", number: 8, lines: ["Verily, it shall enclose", "The disbelievers from all directions,"] },
        { type: "verse", number: 9, lines: ["In the pillars of flames which are tall", "And stretched."] },
      ],
    },
  ],
  footnotes: [
    { id: 1, blocks: [{ kind: "p", text: "Valid ibn-Moghirah who used to backbite about the Holy Messenger and spread falsehood against him." }] },
    { id: 2, blocks: [{ kind: "p", text: "Hotamah: Blazing Fire, also one of the names of the Hell." }] },
  ],
};

export default surah;
