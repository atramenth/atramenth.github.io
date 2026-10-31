import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 75 · Al-Qiyāmat — book pages 1110–1114 (verses 1–40, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 75,
  pages: [
    {
      bookPage: 1110,
      heading: {
        title: "Al-Qiyāmat",
        lines: ["(The Resurrection Day)", "Revealed at Makkah", "40 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["By the Resurrection Day;"] },
        {
          type: "verse",
          number: 2,
          lines: ["And by the Reproaching Intelect [that", "The deniers of the Day of Judgement are", "In error.]"],
        },
        {
          type: "verse",
          number: 3,
          lines: ["Does man think that We cannot", "Gather his bones? [After his body is", "Decomposed and turned into dust?]"],
        },
        { type: "verse", number: 4, lines: ["Even We are Able to put his finger-tips", "In order;{1}"] },
        {
          type: "verse",
          number: 5,
          lines: ["The truth is that man desires by denying", "The Day of Judgement to continue his", "Wrongdoing and corruption in the time", "In front of him,"],
        },
      ],
    },
    {
      bookPage: 1111,
      blocks: [
        { type: "verse", number: 6, lines: ["Nevertheless he keeps asking: “When", "Will be the Day of Resurrection?”"] },
        { type: "verse", number: 7, lines: ["When the Day arrives the eyes will be", "Fixed out of terror,"] },
        { type: "verse", number: 8, lines: ["And the Moon becomes lightless and", "Dark,"] },
        { type: "verse", number: 9, lines: ["And the Sun and the Moon will be", "Brought together, [they both lose light]"] },
        { type: "verse", number: 10, lines: ["On that Day man keeps asking: “Where", "To flee to?”"] },
        { type: "verse", number: 11, lines: ["There shall be no place to flee to;"] },
        { type: "verse", number: 12, lines: ["[O, Messenger!] On that Day all will", "Return to your Creator&Nurturer;"] },
        {
          type: "verse",
          number: 13,
          lines: ["And on that Day man will be informed", "About what he has done and what he", "Has not done [whether right or wrong]"],
        },
        { type: "verse", number: 14, lines: ["Then man will have an insight to", "Himself,"] },
        { type: "verse", number: 15, lines: ["Even though he tries to render excuses", "To defend himself."] },
        { type: "divider" },
        {
          type: "verse",
          number: 16,
          lines: ["[O, Messenger!] Do not repeat hastily", "The Word of Revelation while it is in", "The process of being sent down [make", "Sure that you have heard it completely.]"],
        },
      ],
    },
    {
      bookPage: 1112,
      blocks: [
        { type: "verse", number: 17, lines: ["Verily, it is Our Undertaking to compile", "And to recite it;"] },
        {
          type: "verse",
          number: 18,
          lines: ["And after We have recited the Word of", "Revelation [by the tongue of Jibrāīl]", "Then you repeat it;"],
        },
        { type: "verse", number: 19, lines: ["Also it is Our Undertaking to explain it", "In detail."] },
        { type: "divider" },
        { type: "verse", number: 20, lines: ["But you mankind love the temporal life,"] },
        { type: "verse", number: 21, lines: ["And you neglect the Hereafter."] },
        { type: "verse", number: 22, lines: ["On the Resurrection Day some faces", "Will beam in brightness of happiness,"] },
        { type: "verse", number: 23, lines: ["They look towards the Light of their", "Creator&Nurturer with hope."] },
        { type: "verse", number: 24, lines: ["And some faces on that Day will be", "Frowned and distressed,"] },
        { type: "verse", number: 25, lines: ["Expecting to be inflicted by some back-", "Breaking Chastisement."] },
        {
          type: "verse",
          number: 26,
          lines: ["But this disbeliever when he is still", "Alive and before his soul reaches his", "Throat will not believe;"],
        },
        {
          type: "verse",
          number: 27,
          lines: ["And [when his soul is reaching his throat],", "It is said: “Is there anyone who can cure", "Him?”"],
        },
      ],
    },
    {
      bookPage: 1113,
      blocks: [
        {
          type: "verse",
          number: 28,
          lines: ["But he knows that the time of departing", "Has arrived [and he has to say good-by", "To life]"],
        },
        { type: "verse", number: 29, lines: ["And his legs will be joined together", "[When shrouded]"] },
        { type: "verse", number: 30, lines: ["And on that Day to your", "Creator&Nurturer shall be the", "Destination;"] },
        { type: "verse", number: 31, lines: ["And this dead person neither confirmed", "The Truth and nor prayed,"] },
        { type: "verse", number: 32, lines: ["But he belied [the Holy Qur’ān] and", "Turned away from the Truth,"] },
        {
          type: "verse",
          number: 33,
          lines: ["And he, [Abu-Jahl] walked to his family", "With pride [that he is the one who has", "Resisted against Faith!]"],
        },
        {
          type: "verse",
          number: 34,
          lines: ["It will be said to him: “Woe to you! So", "Woe to you!” [For the way you spent", "Your life],"],
        },
        { type: "verse", number: 35, lines: ["“So woe to you [for the Chastisement]", "So woe to you!”"] },
        { type: "divider" },
        { type: "verse", number: 36, lines: ["Does man think that he will be left", "Without any trial or punishment?"] },
        { type: "verse", number: 37, lines: ["Was not he but a drop of sperm poured", "Forth? [In his mother’s womb]"] },
        { type: "verse", number: 38, continues: true, lines: ["Then he became a blood-clot; Allāh"] },
      ],
    },
    {
      bookPage: 1114,
      blocks: [
        { type: "verse", number: 38, continued: true, lines: ["Created him and bestowed him shape in", "Due proportion,"] },
        { type: "verse", number: 39, lines: ["And of him He produced two kinds:", "Male and female;"] },
        { type: "verse", number: 40, lines: ["So is not the One Who created man,", "Able to give life to the dead?"] },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "The signs which cause a person be distinguished from the others by the process of dactyloscopy in the finger-print department." },
      ],
    },
  ],
};

export default surah;
