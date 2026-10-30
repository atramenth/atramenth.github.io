import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 85 · Al-Burūj — book pages 1150–1153 (verses 1–22, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 85,
  pages: [
    {
      bookPage: 1150,
      heading: {
        title: "Al-Burūj",
        lines: ["(The Celestial Stations)", "Revealed at Makkah", "22 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["By the Sky and its broad belt of", "Constellations,"] },
        { type: "verse", number: 2, lines: ["By the Promised Day of Judgement,"] },
        {
          type: "verse",
          number: 3,
          lines: ["By those [Messengers] who bear witness", "And their followers who are the subject", "Of their witness,{1}"],
        },
      ],
    },
    {
      bookPage: 1151,
      blocks: [
        {
          type: "verse",
          number: 4,
          lines: ["[By all these oaths] That Allāh’s", "Decree [of burning all in the Hell Fire] was", "Issued against the fellows of", "The ditch-fire,{2}"],
        },
        { type: "verse", number: 5, lines: ["Fire supplied with abundance of fuel,"] },
        {
          type: "verse",
          number: 6,
          lines: ["And also the Decree of burning all in", "The Hell Fire was issued against those", "Who sat around the ditch,"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["And watched carelessly what was", "Doing to the believers [the act of", "Burning them];"],
        },
        {
          type: "verse",
          number: 8,
          lines: ["The believers’ accusation was not but", "That they believed in Allāh,", "The Praisworthy Supremepower;"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["The One to Whom belongs the Dominion", "Of the heavens and the earth; and Allāh", "Is the Supreme Witness over all things."],
        },
        {
          type: "verse",
          number: 10,
          lines: ["Verily, those who tortured the believing", "Men and women and then did not", "Repent, for them shall be", "The Chastisement of the Hell; and for", "Them shall be the Chastisement of", "The Burning Fire."],
        },
        {
          type: "verse",
          number: 11,
          continues: true,
          lines: ["Verily, those who believe and do good", "Deeds, for them shall be the Gardens in", "Which flow streams; and this is"],
        },
      ],
    },
    {
      bookPage: 1152,
      blocks: [
        { type: "verse", number: 11, continued: true, lines: ["The Great Achievement."] },
        { type: "verse", number: 12, lines: ["Verily, the assult of your", "Creator&Nurturer is Highly Grave."] },
        { type: "divider" },
        {
          type: "verse",
          number: 13,
          lines: ["Verily, Allāh is the One Who originates", "The creation and also causes it to return", "[To death and then to Resurrection]"],
        },
        { type: "verse", number: 14, lines: ["And He is the Affectionate Forgiving,"] },
        { type: "verse", number: 15, lines: ["And the Owner of the Mighty Throne of", "Arsh;"] },
        { type: "verse", number: 16, lines: ["And He is the Doer of whatever He", "Wills."] },
        { type: "verse", number: 17, lines: ["Have you [O, Messenger] heard about", "The story of the hosts of the disbelief?"] },
        {
          type: "verse",
          number: 18,
          lines: ["The hosts of Firown and Thamūd [and", "How they were destroyed by Allāh’s", "Command?]"],
        },
        { type: "verse", number: 19, lines: ["The disbelievers of Quraish also", "Persist in denying the Truth,"] },
        {
          type: "verse",
          number: 20,
          lines: ["So Allāh through His Embracing", "Knowledge encircles them from all", "Directions."],
        },
        { type: "verse", number: 21, continues: true, lines: ["For sure this Qur’ān{3} is a Glorious Book"] },
      ],
    },
    {
      bookPage: 1153,
      blocks: [
        {
          type: "verse",
          number: 21,
          continued: true,
          lines: ["Of Religion [and free from what is", "Ascribed to it such as the word of a poet", "Or a soothsayer],"],
        },
        {
          type: "verse",
          number: 22,
          lines: ["It is taken from the Preserved", "Tablet [i.e., the Book of Allāh’s", "Recorded Knowledge]."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "Reference is made to 4:41, 6:89 and 16:84. Allāh, the Almighty has appointed the Messengers as witnesses for their nations on the Day of Judgement. According to Shīah Commentators the Infallible Imāms also are witnesses of their followers since they are permitted by Allāh to intercede." },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "ZŪ-Nuwās the tyrant Jewish King of Yaman ordered that the Christians of Najran should convert into Jewish religion; those who refused his order faced the most cruel persecution: The jews dug several ditches and kindled a fire and cast the believing Christians one by one into the burning flames." },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "Qur’ān here is both a proper noun as well as a verbal noun" },
      ],
    },
  ],
};

export default surah;
