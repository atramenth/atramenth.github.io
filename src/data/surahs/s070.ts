import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 70 · Al-Ma‘ārij — book pages 1086–1091 (verses 1–44, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 70,
  pages: [
    {
      bookPage: 1086,
      heading: {
        title: "Al-Ma’ārij",
        lines: ["(The Ways of Ascent)", "Revealed at Makkah", "44 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, continues: true, lines: ["A demander demanded Allāh to send a"] },
      ],
    },
    {
      bookPage: 1087,
      blocks: [
        { type: "verse", number: 1, continued: true, lines: ["Chastisement on him.{1}"] },
        {
          type: "verse",
          number: 2,
          lines: ["For the disbelievers there is no repeller", "Against the Divine Chastisement in this", "World and in the Hereafter,"],
        },
        { type: "verse", number: 3, lines: ["Since it is from Allāh the Owner of", "The Ways of Ascent to His Presence:"] },
        {
          type: "verse",
          number: 4,
          lines: ["To Allāh ascend the Angels and", "The Spirit on the Day [of Resurrection]", "The duration of which is fifty thousand", "Years [to the sinners]."],
        },
        { type: "verse", number: 5, lines: ["So be you [O, Messenger] patient with a", "Patience free of complaints,"] },
        {
          type: "verse",
          number: 6,
          lines: ["Verily, the disbelievers deem it a far", "Away distance, [impossible to reach to it],"],
        },
        { type: "verse", number: 7, lines: ["But We see it quite near [to the reality]:"] },
        { type: "verse", number: 8, lines: ["It will happen on a Day that the sky", "Shall be like molten copper;"] },
        { type: "verse", number: 9, lines: ["And the mountains shall be like flakes", "Of wool; [driven by carder’s hand]"] },
        { type: "verse", number: 10, lines: ["And no friend cares about his friend;"] },
      ],
    },
    {
      bookPage: 1088,
      blocks: [
        {
          type: "verse",
          number: 11,
          lines: ["Though they will be exposed to one", "Another, but the sinner even wishes that", "He could sacrifice his children as ransom", "To save himself;"],
        },
        { type: "verse", number: 12, lines: ["And [to sacrifice] his wife and his brother;"] },
        { type: "verse", number: 13, lines: ["And his tribe and relatives who", "Supported him throughout his life;"] },
        {
          type: "verse",
          number: 14,
          lines: ["And all that is on the earth, if they", "Could deliver him [from the due", "Chastisement];"],
        },
        { type: "verse", number: 15, lines: ["But there is no escape from the flaming", "Hell Fire;"] },
        { type: "verse", number: 16, lines: ["Taking away man’s scalp;"] },
        {
          type: "verse",
          number: 17,
          lines: ["And the Hell Fire invites to itself those", "Who turned their backs and turned away", "From the Truth;"],
        },
        { type: "verse", number: 18, lines: ["And those who collected money and", "Stored it, [and did not spend in charity]."] },
        { type: "verse", number: 19, lines: ["Verily, man is a very greedy and", "Impatient creature:"] },
        { type: "verse", number: 20, lines: ["When some harm touches him, he is", "Fretful and keeps complaining,"] },
        {
          type: "verse",
          number: 21,
          lines: ["And when wealth and bounty come to", "Him he is miser, [avoids spending on", "The needy.]"],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 1089,
      blocks: [
        { type: "verse", number: 22, lines: ["Those who perform prayers with real", "Devotion they are not so:"] },
        { type: "verse", number: 23, lines: ["They are the ones who perform their", "Prayers regularly;"] },
        {
          type: "verse",
          number: 24,
          lines: ["And those in whose wealth is an", "Appointed share, [for paying alms and", "Spending in charity]"],
        },
        {
          type: "verse",
          number: 25,
          lines: ["For the needy who demands and also", "For the one who is deprived yet does", "Not demand;"],
        },
        { type: "verse", number: 26, lines: ["And those who do confirm the Truth of", "The Day of Judgement;"] },
        { type: "verse", number: 27, lines: ["And those who fear from the Punishment", "Of their Creator&Nurturer;"] },
        {
          type: "verse",
          number: 28,
          lines: ["[And those who know that] Verily,", "The Punishment of their", "Creator&Nurturer is not a thing to feel", "Secure from it;"],
        },
        { type: "verse", number: 29, lines: ["And those who have control over their", "Carnal desires,"] },
        {
          type: "verse",
          number: 30,
          lines: ["Save with their wives and the female", "Slaves whom they own; for that they", "Will not be reproached;"],
        },
        { type: "verse", number: 31, lines: ["But those who trespass beyond this", "Decree, they are transgressors;"] },
        { type: "verse", number: 32, continues: true, lines: ["And those who respect people’s trusts"] },
      ],
    },
    {
      bookPage: 1090,
      blocks: [
        { type: "verse", number: 32, continued: true, lines: ["And fulfill their covenants;"] },
        { type: "verse", number: 33, lines: ["And those who are firm in their", "Testimonies;"] },
        { type: "verse", number: 34, lines: ["And those who perform their prayers", "Regularly;"] },
        { type: "verse", number: 35, lines: ["Such believers shall be honoured in", "The Gardens of Paradise."] },
        { type: "divider" },
        {
          type: "verse",
          number: 36,
          lines: ["[O, Messenger!] But what makes", "The disbelievers hasten on coming to", "You? [These days],"],
        },
        { type: "verse", number: 37, lines: ["In groups, from the right and the left", "[From all directions;]"] },
        {
          type: "verse",
          number: 38,
          lines: ["Does every of them long for entering", "The Blissful Paradise? [Whereas they", "Doubt about the Hereafter and they", "Have not earned the due qualifications]"],
        },
        {
          type: "verse",
          number: 39,
          lines: ["It is a vain hope, because they know", "That We have created them of a low", "Material;{2}"],
        },
        { type: "verse", number: 40, lines: ["By the Creator of the Easts and", "The Wests that We are surely Able,"] },
        {
          type: "verse",
          number: 41,
          continues: true,
          lines: ["To bring a better people than them", "In their place; and We shall not be"],
        },
      ],
    },
    {
      bookPage: 1091,
      blocks: [
        { type: "verse", number: 41, continued: true, lines: ["Overtaken and defeated in Our schemes;"] },
        {
          type: "verse",
          number: 42,
          lines: ["So [O, Messenger!] Leave them to their", "Idleness and amusements until they", "Meet the Day which they have been", "Promised:"],
        },
        {
          type: "verse",
          number: 43,
          lines: ["The Day that they will come out of their", "Graves as if they were rushing to a", "Sign-post decided for them;"],
        },
        {
          type: "verse",
          number: 44,
          lines: ["Their eyes will be lowered out of fear and", "Shame; and they are filled with disgrace;", "That is the Day which they were", "Promised and which they persisted in", "Denying it."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "It has been confirmed by both Sunnī and Shīah authorities that this Revelation was sent down after the day of Ghadīr-e-Khom on which the Holy Messenger introduced Imām Alī as his successor. A man named Harith-ibn-Qahrī went up to the Messenger and said: ‘what you said about Alī-ibn-Abītalib was it by Allāh’s Command or your own desire.’ the Holy Messenger said: ‘It was by Allāh’s Command.’ The man going towards his camel said: ‘O, Allāh! If what Mohammad claims is true then send a stone from the sky on my head to kill me.’ Then by Allāh’s Command a stone fell upon his head and he was killed. (Commentators)" },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "So man should acquire the required merits of a believer which is all spiritual." },
      ],
    },
  ],
};

export default surah;
