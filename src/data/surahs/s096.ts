import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 96 · Al-‘Alaq — book pages 1174–1176 (verses 1–19, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 96,
  pages: [
    {
      bookPage: 1174,
      heading: {
        title: "Al-‘Alaq",
        lines: ["(The Blood-Clot)", "Revealed at Makkah", "19 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["[O, Messenger!] Recite in the Name of", "Allāh Who is your Creator&Nurturer", "And Who created all creatures of", "The universe;"],
        },
        { type: "verse", number: 2, lines: ["The One Who created man from a", "Blood-clot;"] },
      ],
    },
    {
      bookPage: 1175,
      blocks: [
        {
          type: "verse",
          number: 3,
          lines: ["Recite and know that your Creator is", "The Owner of Miracles [since you can", "Read by Allāh’s Will though you were", "Illiterate]:"],
        },
        {
          type: "verse",
          number: 4,
          lines: ["Allāh is the One Who taught all", "Sciences through the knowledge of", "Writing with pen;"],
        },
        { type: "verse", number: 5, lines: ["And He taught man what he did not", "Know;"] },
        { type: "verse", number: 6, lines: ["But indeed man is ungrateful and makes", "Rebellion,"] },
        { type: "verse", number: 7, lines: ["As soon as he feels free from the need", "[Regarding wealth and position]."] },
        { type: "verse", number: 8, lines: ["[O, Messenger] Verily, the return of all is", "To your Creator&Nurturer."] },
        { type: "verse", number: 9, lines: ["Have you noticed the man who", "Causes trouble for a devoted worshipper,"] },
        { type: "verse", number: 10, lines: ["When he is performing his prayer?{1}"] },
        { type: "verse", number: 11, lines: ["And if this man be guided on", "The Right Path,"] },
        {
          type: "verse",
          number: 12,
          lines: ["And enjoins people to piety, [then what", "Will be the punishment for that", "Rebellious disbeliever who harms him?]"],
        },
      ],
    },
    {
      bookPage: 1176,
      blocks: [
        { type: "verse", number: 13, lines: ["Do you think he who belied the Truth", "And turned away from it,"] },
        { type: "verse", number: 14, lines: ["Does he not know that Allāh surely sees", "Him and watches his evil conduct?"] },
        {
          type: "verse",
          number: 15,
          lines: ["For sure if he does not desist We shall", "Drag him by the forelock fallen on his", "Forehead,"],
        },
        { type: "verse", number: 16, lines: ["The forehead of the lying sinful,", "[And will cast him into the Fire];{2}"] },
        { type: "verse", number: 17, lines: ["Then let him call for help from friends of", "His council,"] },
        { type: "verse", number: 18, lines: ["We too shall call the Angels of", "Chastisement;"] },
        {
          type: "verse",
          number: 19,
          lines: ["Nay! Do not conform to his desire;", "Prostrate in obedience to Allāh and seek", "Nearness to His Divine Presence."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "Reference is made to Abū-Jahl who used to harm the Holy Messenger mainly when he was performing prostration in his prayer." },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "Allusion is made to 96:18" },
      ],
    },
  ],
};

export default surah;
