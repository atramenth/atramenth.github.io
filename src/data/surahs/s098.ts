import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 98 · Al-Bayyinah — book pages 1177–1179 (verses 1–8, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 98,
  pages: [
    {
      bookPage: 1177,
      heading: {
        title: "Al-Bayyinah",
        lines: ["(The Evident Proof)", "Revealed at Madīnah", "8 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
      ],
    },
    {
      bookPage: 1178,
      blocks: [
        {
          type: "verse",
          number: 1,
          lines: ["Those who disbelieved among", "The people of the Book [i.e., the Jews", "Who called Ozair son of Allāh and", "The Christians who believed in", "The Trinity]; and also the pagans of", "Quraish could not depart from their", "Deviated ideas until came to them", "The Evident Proof:"],
        },
        {
          type: "verse",
          number: 2,
          lines: ["A Messenger of Allāh who recites to", "Them the Words of Revelation from", "The Pure pages,"],
        },
        { type: "verse", number: 3, lines: ["Revelations wherein right admonitions", "And lasting Decrees are written."] },
        {
          type: "verse",
          number: 4,
          lines: ["Though the people of the Book, [based", "On the Signs written in the Taurāt and", "The Injīl regarding the Appearance of", "The Holy Messenger of Islām, were", "Waiting for him] but after he came they", "Differed among themselves out of envy", "And selfish motivations."],
        },
        {
          type: "verse",
          number: 5,
          lines: ["Though what was recited to them from", "Qur’ān was also enjoined on them in", "Their Own Books: That they should", "Worship Allāh alone; and that they", "Should make their religion sincere for", "Him; and that they should establish", "Prayers and pay alms; and though [they", "Were enjoined that] all of these are basic", "Decrees common between the", "Monotheistic Religions, [nevertheless they", "Opposed the Truth!]"],
        },
      ],
    },
    {
      bookPage: 1179,
      blocks: [
        {
          type: "verse",
          number: 6,
          lines: ["Verily, those who disbelieve from among", "The people of the Book and also", "The polytheists, they shall be in the Hell", "Fire to abide therein forever; and they", "Are indeed the worst of the creatures."],
        },
        {
          type: "verse",
          number: 7,
          lines: ["Verily, those who sincerely believe in", "Allāh and do righteous deeds, they are", "The best of the creatures;"],
        },
        {
          type: "verse",
          number: 8,
          lines: ["The reward of the best creatures from", "Their Creator&Nurturer will be", "The Everlasting Gardens in which", "Streams flow; and they will abide therein", "Forever. Allāh is Well Pleased with such", "Devoted worshippers and they are happy", "And thankful for the Favour bestowed on", "Them from their Creator&Nurturer; and", "This is a gift for a person who fears from", "The disobedience of Allāh’s Commands."],
        },
      ],
    },
  ],
  footnotes: [],
};

export default surah;
