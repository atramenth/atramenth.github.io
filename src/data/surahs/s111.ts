import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 111 · Al-Massad (Al-Lahab) — book pages 1193–1194 (verses 1–5, complete).
 * The book restarts footnote numbering on every page; here notes are numbered
 * once per sūrah in reading order (1 = page 1193, 2 = page 1194).
 * Page 1194 opens with the last three verses of this sūrah, above the heading of Sūrah 112.
 */
const surah: SurahData = {
  number: 111,
  pages: [
    {
      bookPage: 1193,
      heading: {
        title: "Al-Lahab",
        lines: ["(The Flame) or Al-Massad", "(a Rope made of Palm-leaf fibers)", "Revealed at Makkah", "5 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["May perish both hands of Abū Lahab", "And may perish he, himself!{1}"] },
        { type: "verse", number: 2, lines: ["The wealth that he collected and what", "He earned will not avail him against", "Allāh’s Punishment:"] },
      ],
    },
    {
      bookPage: 1194,
      blocks: [
        { type: "verse", number: 3, lines: ["He will surely be burnt in the Blazing", "Flame of the Fire,"] },
        { type: "verse", number: 4, lines: ["And his wife shall enter the Hell while", "Carrying wood for the Fire,{2}"] },
        { type: "verse", number: 5, lines: ["Upon her neck shall be a twisted rope of", "Palm-leaf fibers [which will become a", "Flame of the Fire around her neck]."] },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        {
          kind: "p",
          text: "This Sūrah is also another Divine Prophecy about the defeat of the enemies of the Holy Messenger and the Victory of Islām. Abū Lahab an uncle of the Holy Messenger was one of the most spiteful opponents of the early Islām who even publicly kept on slandering and insulting the Holy Messenger. Abū Lahab’s wife was also a co-partner of his mischievious deeds. It has been reported that one week after the Victory of Badr and the defeat of Makkan pagans, Abū Lahab (the Father of the Flame) following the Divine Curse died of a contagious stinky illness and nobody could stand to get near to his corpse, so they hired slaves to burry him; his soul had already gone to the Blazing Fire!",
        },
      ],
    },
    {
      id: 2,
      blocks: [
        {
          kind: "p",
          text: "She was his co-partner against the Holy Messenger and used to put thorns on the way of Allāh’s Messenger to hurt his feet.",
        },
      ],
    },
  ],
};

export default surah;
