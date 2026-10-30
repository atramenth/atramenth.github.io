import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 87 · Al-A‘lā — book pages 1155–1157 (verses 1–19, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 87,
  pages: [
    {
      bookPage: 1155,
      heading: {
        title: "Al-A‘lā",
        lines: ["(The Supreme Exalted)", "Revealed at Makkah", "19 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["[O, Messenger!] Celebrate the Name", "Of your Creator&Nurturer,", "The Supreme Exalted:"],
        },
        { type: "verse", number: 2, lines: ["The One Who created man and shaped", "Him with the due proportion;"] },
        { type: "verse", number: 3, lines: ["The One Who Ordained man’s life and", "Also guided him to the Right Path;"] },
        { type: "verse", number: 4, lines: ["And the One Who brought out", "The pasturage [for your cattle],"] },
        { type: "verse", number: 5, continues: true, lines: ["And then in another season reduced it"] },
      ],
    },
    {
      bookPage: 1156,
      blocks: [
        { type: "verse", number: 5, continued: true, lines: ["To a dark stubble."] },
        { type: "divider" },
        {
          type: "verse",
          number: 6,
          lines: ["[O, Messenger!] We shall recite Qur’ān", "To you in a way that will be engraved in", "Your memory and you shall not forget,"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["Save that much that Allāh Wills. Verily,", "Allāh is the Knower of what is evident", "And what is hidden."],
        },
        { type: "verse", number: 8, lines: ["We will make your Mission easy for you,"] },
        { type: "verse", number: 9, lines: ["So remind men if they receive", "Admonition;"] },
        {
          type: "verse",
          number: 10,
          lines: ["Surely those who fear from", "The disobedience of Allāh’s Commands,", "Will receive the Reminder and", "The admonition;"],
        },
        { type: "verse", number: 11, lines: ["But it will be rejected by the most", "Misfortunate one;"] },
        { type: "verse", number: 12, lines: ["And such will enter the Grave Fire;"] },
        { type: "verse", number: 13, lines: ["Wherein, he will neither die nor live:", "[But he suffers the agony of death]."] },
        { type: "divider" },
        {
          type: "verse",
          number: 14,
          lines: ["Indeed the one who purifies himself", "[From the filth of disbelief and", "Polytheism] will attain salvation,"],
        },
      ],
    },
    {
      bookPage: 1157,
      blocks: [
        {
          type: "verse",
          number: 15,
          lines: ["And also the one who Celebrates", "Allāh’s Names and Attributes, and", "Performs prayer [will attain salvation]."],
        },
        {
          type: "verse",
          number: 16,
          lines: ["But the truth is that you mankind", "Prefer the temporal life to", "The Hereafter,"],
        },
        { type: "verse", number: 17, lines: ["Though the Hereafter is finer and", "Enduring;"] },
        { type: "verse", number: 18, lines: ["Verily, these preachings have also been", "Mentioned in the former Scriptures:"] },
        { type: "verse", number: 19, lines: ["The Scriptures of Ibrāhīm and Mūssā."] },
      ],
    },
  ],
  footnotes: [],
};

export default surah;
