import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 88 · Al-Ghāshiyah — book pages 1157–1159 (verses 1–26, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 88,
  pages: [
    {
      bookPage: 1157,
      heading: {
        title: "Al-Ghāshiyah",
        lines: ["(The Event of the Resurrection)", "Revealed at Makkah", "26 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["[O, Messenger!] Has there come to you", "The story of Ghāshiah?{1}"] },
      ],
    },
    {
      bookPage: 1158,
      blocks: [
        { type: "verse", number: 2, lines: ["On that Day some faces will be", "Humiliated,"] },
        {
          type: "verse",
          number: 3,
          lines: ["Those who have laboured hard for their", "Worldly life which did not profit them", "And have remained with fatigue,"],
        },
        { type: "verse", number: 4, lines: ["They will surely enter in the Blazing", "Fire;"] },
        { type: "verse", number: 5, lines: ["They will be made to drink from a", "Boiling spring{2};"] },
        {
          type: "verse",
          number: 6,
          lines: ["There will be no food for them but Zarī", "A bitter thorny plant, [food of", "The camels];"],
        },
        { type: "verse", number: 7, lines: ["A food which shall neither nourish, nor", "Avail against hunger."] },
        { type: "verse", number: 8, lines: ["On that Day some faces will be bright", "And happy,"] },
        { type: "verse", number: 9, lines: ["Pleased with their labour of good deeds", "[Of the past,]"] },
        { type: "verse", number: 10, lines: ["The Sublime Garden is their abode:"] },
        { type: "verse", number: 11, lines: ["Where they will neither hear idle talks", "Nor falsehood,"] },
        { type: "verse", number: 12, lines: ["Therein will be running springs,"] },
        { type: "verse", number: 13, continues: true, lines: ["Therein will be raised sofas [for the"] },
      ],
    },
    {
      bookPage: 1159,
      blocks: [
        { type: "verse", number: 13, continued: true, lines: ["People of the Garden],"] },
        { type: "verse", number: 14, lines: ["And goblets are set ready,"] },
        { type: "verse", number: 15, lines: ["And cushions are set in range,"] },
        { type: "verse", number: 16, lines: ["And precious carpets are spread out."] },
        { type: "divider" },
        { type: "verse", number: 17, lines: ["Do the disbelievers not look at", "The camel how it was created?"] },
        { type: "verse", number: 18, lines: ["And about the sky how it is raised over", "Them?"] },
        { type: "verse", number: 19, lines: ["And about the mountains how they are", "Firmly fixed on the earth?"] },
        { type: "verse", number: 20, lines: ["And about the earth how it is spread", "Out?"] },
        { type: "verse", number: 21, lines: ["So [O, Messenger!] remind them since", "You are the one to admonish,"] },
        { type: "verse", number: 22, lines: ["But you are not a compeller over them,", "[So you cannot force them to Faith]."] },
        { type: "verse", number: 23, lines: ["But whoever turns away and", "Disbelieves,"] },
        { type: "verse", number: 24, lines: ["Then Allāh will punish him with", "The Gravest Punishment;"] },
        { type: "verse", number: 25, lines: ["Verily, to Us will be their final return;"] },
        { type: "verse", number: 26, lines: ["Then it is with Us to attend to their", "Account."] },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "Ghāshiah: The Resurrection Day" },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "The water of spring is usually cool and pleasant but spring in the Hell pours forth boiling water!" },
      ],
    },
  ],
};

export default surah;
