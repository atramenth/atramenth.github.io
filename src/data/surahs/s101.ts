import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 101 · Al-Qāri‘ah — book pages 1182–1183 (verses 1–11, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Page 1182 opens with the end of Sūrah 100, above the heading of this sūrah.
 */
const surah: SurahData = {
  number: 101,
  pages: [
    {
      bookPage: 1182,
      heading: {
        title: "Al-Qāri‘ah",
        lines: ["(One of the Names of the Resurrection Day)", "Revealed at Makkah", "11 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Al-Qāri‘ah!"] },
      ],
    },
    {
      bookPage: 1183,
      blocks: [
        { type: "verse", number: 2, lines: ["What is Al-Qāri‘ah?{1}"] },
        { type: "verse", number: 3, lines: ["How can you visualize what Al-Qāri‘ah", "Is?"] },
        { type: "verse", number: 4, lines: ["Qāri‘ah or the Grave Calamity is", "The Day that people shall become", "Scattered about like grasshoppers;"] },
        { type: "verse", number: 5, lines: ["And the mountains shall become like", "Carded colour wool."] },
        { type: "verse", number: 6, lines: ["So whoever has a heavy balance of", "Good deeds,"] },
        { type: "verse", number: 7, lines: ["He will live in a pleasing life in", "The Paradise;"] },
        { type: "verse", number: 8, lines: ["And as for him who has a light balance", "Of good deeds,"] },
        { type: "verse", number: 9, lines: ["His home shall be Hāviah;{2}"] },
        { type: "verse", number: 10, lines: ["How can you visualize what is Hāviah?"] },
        { type: "verse", number: 11, lines: ["It is [the abyss of] the Blazing Fire."] },
      ],
    },
  ],
  footnotes: [
    { id: 1, blocks: [{ kind: "p", text: "One of the names of the Resurrection Day, meaning Grave calamity." }] },
    { id: 2, blocks: [{ kind: "p", text: "One of the names of the Hell." }] },
  ],
};

export default surah;
