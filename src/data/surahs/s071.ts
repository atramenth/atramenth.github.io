import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 71 · Nūh — book pages 1091–1095 (verses 1–28, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 71,
  pages: [
    {
      bookPage: 1091,
      heading: {
        title: "Nūh",
        lines: ["(Noah, the Prophet)", "Revealed at Makkah", "28 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["Verily, We sent Nūh to his people", "Stating: “Admonish your people by way", "Of warning them before there comes to", "Them a painful Torment.”"],
        },
      ],
    },
    {
      bookPage: 1092,
      blocks: [
        { type: "verse", number: 2, lines: ["He said: “O, my people! Truly to you I", "Am a Divine Expositoring Warner:"] },
        { type: "verse", number: 3, lines: ["“Worship Allāh and fear from", "The disobedience of His Commands and", "Obey me,"] },
        {
          type: "verse",
          number: 4,
          lines: ["“So He may forgive your sins; and will", "Bestow a respite on you till an", "Appointed Term, but when the Ordained", "Term of Allāh arrives it cannot be put", "Back if you understand, [what I mean]”"],
        },
        {
          type: "verse",
          number: 5,
          lines: ["Nūh said: “O, my Creator&Nurturer!", "Truly I called my people by night and", "Day constantly,"],
        },
        { type: "verse", number: 6, lines: ["“But my call increased only to their", "Detest and keeping away from the Truth;"] },
        {
          type: "verse",
          number: 7,
          lines: ["“And whenever I called them to Faith so", "That You may forgive them, they", "Thrusted their fingers into their ears", "[Not to hear my voice] and they covered", "Their heads with their shirts [not to see", "My face] and they persisted in their", "Denial and showed a grave arrogance;"],
        },
        { type: "verse", number: 8, lines: ["“Then I called them to Faith publicly;"] },
        { type: "verse", number: 9, lines: ["“Then I conversed with every individual", "Publicly or privately:"] },
      ],
    },
    {
      bookPage: 1093,
      blocks: [
        {
          type: "verse",
          number: 10,
          lines: ["“I said to them: “Ask your", "Creator&Nurturer’s Forgiveness; verily,", "He is the Highly Forgiving;"],
        },
        { type: "verse", number: 11, lines: ["“And then He will send rain to your", "Lands in abundance,"] },
        {
          type: "verse",
          number: 12,
          lines: ["“And will add to your wealth and", "Children and will provide for you", "Gardens and flowing streams;"],
        },
        {
          type: "verse",
          number: 13,
          lines: ["“What is the reason that you do not", "Acknowledge the Highness of Allāh’s", "Stand?"],
        },
        { type: "verse", number: 14, lines: ["“Whereas He has created you stage by", "Stage;{1}"] },
        {
          type: "verse",
          number: 15,
          lines: ["“Do you not see how Allāh has created", "The Seven Heavens on top of one", "Another? [With full adjustment]"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["“And has created the moon the light", "In them for the night and the sun a", "Glorious Light-giving lamp [for the day];"],
        },
        { type: "verse", number: 17, lines: ["“And Allāh has created you from", "The earth like plants,"] },
        {
          type: "verse",
          number: 18,
          lines: ["“Then He will return you to the earth", "[In your graves] and then He will bring", "You out on the Resurrection Day;"],
        },
      ],
    },
    {
      bookPage: 1094,
      blocks: [
        { type: "verse", number: 19, lines: ["“And Allāh has spread out the earth for", "You as a carpet,"] },
        { type: "verse", number: 20, lines: ["“So that you may travel through its vast", "Roads, towards your destination.”"] },
        {
          type: "verse",
          number: 21,
          lines: ["Nūh said: “O, my Creator&Nurturer!", "They have rebelled against me and they", "Followed a person whose wealth and", "Children do not increase to him but", "Total loss [because he is a disbeliever];"],
        },
        { type: "verse", number: 22, lines: ["“And they have plotted a grave plot", "Against me and my Mission:"] },
        {
          type: "verse",
          number: 23,
          lines: ["“And the chiefs of them have enjoined", "The people saying: “You should not", "Leave your gods, nor you should leave", "Wad nor Sūwa neither Yaghūss and", "Yaūq and Nassr;"],
        },
        {
          type: "verse",
          number: 24,
          lines: ["“And indeed they have led astray many,", "So please do not increase for", "The disbelievers but total astray.”"],
        },
        {
          type: "verse",
          number: 25,
          lines: ["So [upon Nūh’s invocation] they were", "Drowned in the sea due to their disbelief;", "Then they were made to enter the Fire;", "And they found none to help them but", "Allāh, [Who would not help those whose", "Respite for repentance was over]"],
        },
        {
          type: "verse",
          number: 26,
          lines: ["And Nūh prayed: “O, my", "Creator&Nurturer! Please do not let any", "Of the disbelievers on the earth;"],
        },
      ],
    },
    {
      bookPage: 1095,
      blocks: [
        {
          type: "verse",
          number: 27,
          lines: ["“If You do, they will mislead Your", "Worshippers and will have no", "Production but corrupt and ingrateful", "Offsprings;"],
        },
        {
          type: "verse",
          number: 28,
          lines: ["“O, my Creator&Nurturer! Bestow Your", "Forgiveness on me and my parents and", "The believers who come to my home", "And associate with me and all", "The believing men and women; and to", "The disbelievers and transgressors do", "Not give but perdition.”"],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "See 23:13-14" },
      ],
    },
  ],
};

export default surah;
