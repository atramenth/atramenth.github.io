import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 105 · Al-Fīl — book pages 1187–1188 (verses 1–5, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Verse 1 carries an insertion across the page break, so page 1188 opens with its closing bracket.
 * Page 1188 opens with the rest of this sūrah, above the heading of Sūrah 106.
 */
const surah: SurahData = {
  number: 105,
  pages: [
    {
      bookPage: 1187,
      heading: {
        title: "Al-Fīl",
        lines: ["(The Elephant)", "Revealed at Makkah", "5 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["[O, Messenger!] Have you not observed", "What your Creator&Nurturer did with", "The owners of the elephants?{1} [Those"],
          continues: true,
        },
      ],
    },
    {
      bookPage: 1188,
      blocks: [
        { type: "verse", number: 1, continued: true, lines: ["Who had come to destroy Ka‘bah]"] },
        { type: "verse", number: 2, lines: ["Did He not confuse their plot?"] },
        { type: "verse", number: 3, lines: ["Allāh sent against them birds, in flocks:"] },
        { type: "verse", number: 4, lines: ["They stoned them with small stones of", "Baked clay which had stored in their", "Beaks,"] },
        { type: "verse", number: 5, lines: ["And left them as some chewed grass."] },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        {
          kind: "p",
          text: "Abraha, the Christian king of Yaman decided to destroy the Holy Ka‘bah because he found the House of Allāh was the center of Pilgrimage and a rival for the luxurious church that he had built at San‘ā to be both a comercial center and a place of pilgrimage in place of Makkah City. So he had a huge army with thirteen elephants to achieve his target. At his arrival he made his men to break the news of his intention about destroying the House of Allāh to Abdul Mottalib the grandfather of the Holy Messenger who was the highest chief of Makkah City; he went to Abraha in person to get back his camels that Abraha’s men had taken away. Abraha surprisingly said: ‘I have come to destroy the House of your God but you talk about your camels.’ He replied: ‘I am the owner of my camels and have come for them; the House of Allāh belongs to Him and He is in a position to preserve it from your harm.’ When Abraha and his men approached Ka‘bah, a huge flock of tiny birds by Allāh’s Command stoned the hosts with small stones stored in their beaks, so the soldiers and the elephants became motionless corpses. Thus Allāh saved His House and also the inhabitants of Makkah City who had taken refuge in the mountains as suggested by their chief. Some Commentators believe that this Miracle happened in the very year of the Holy Messenger’s birth and some believe that it was one year before.",
        },
      ],
    },
  ],
};

export default surah;
