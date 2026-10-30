import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 92 · Al-Lail — book pages 1168–1170 (verses 1–21, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 92,
  pages: [
    {
      bookPage: 1168,
      heading: {
        title: "Al-Lail",
        lines: ["(The Night)", "Revealed at Makkah", "21 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["By the Night when [its darkness]", "Envelopes all things;"] },
        { type: "verse", number: 2, lines: ["By the Day when it manifests in", "Complete light;"] },
        { type: "verse", number: 3, lines: ["And by Allāh the One Who created", "Male and female [all in pairs];"] },
        {
          type: "verse",
          number: 4,
          lines: ["[By all these oaths] Indeed the efforts", "And the aims of you people are diverse."],
        },
        {
          type: "verse",
          number: 5,
          lines: ["As for him who spends in charity and", "Fears from the disobedience of Allāh’s", "Commands,"],
        },
        { type: "verse", number: 6, lines: ["And confirms the truth of", "The Supreme Excellent,{1}"] },
      ],
    },
    {
      bookPage: 1169,
      blocks: [
        {
          type: "verse",
          number: 7,
          lines: ["We will solve his problems and will", "Make his difficulties to encounter with", "Easiness;"],
        },
        { type: "verse", number: 8, lines: ["But he who is niggardly seeking", "To become rich and self-sufficient,"] },
        { type: "verse", number: 9, lines: ["And who also belies the truth of", "The Supreme Excellent,"] },
        { type: "verse", number: 10, lines: ["We will cause smooth for him the path", "To problems and disasters;"] },
        {
          type: "verse",
          number: 11,
          lines: ["And his wealth is of no benefit to him", "When he is being put into the grave and", "Cast into the Fire."],
        },
        { type: "verse", number: 12, lines: ["Verily, Guidance is what We have taken", "As a task on Us;"] },
        { type: "verse", number: 13, lines: ["And verily, to Us belong the End as well", "As the Begining of the Existence;"] },
        { type: "verse", number: 14, lines: ["So I [Allāh, the Almighty] do warn you", "Of a Blazing Fire:"] },
        { type: "verse", number: 15, lines: ["Only the most misfortunate ones are", "Doomed to burn therein;"] },
        { type: "verse", number: 16, lines: ["The one who belied the Truth and", "Turned away from it;"] },
        { type: "verse", number: 17, lines: ["But the most pious are the most", "Removed from it:"] },
        { type: "verse", number: 18, continues: true, lines: ["The one who spends his wealth [in"] },
      ],
    },
    {
      bookPage: 1170,
      blocks: [
        { type: "verse", number: 18, continued: true, lines: ["Charity] to purify it;"] },
        {
          type: "verse",
          number: 19,
          lines: ["Although he does not owe any one any", "Favour for which a compensation is due", "To be rendered;"],
        },
        {
          type: "verse",
          number: 20,
          lines: ["But he spends only to seek the Pleasure", "Of his Creator&Nurturer,", "The Supreme Exalted;"],
        },
        { type: "verse", number: 21, lines: ["And such will surely attain his aim of", "Seeking Allāh’s Pleasure."] },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "The Holy Qur’ān or the Paradise" },
      ],
    },
  ],
};

export default surah;
