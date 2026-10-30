import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 90 · Al-Balad — book pages 1163–1165 (verses 1–20, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 90,
  pages: [
    {
      bookPage: 1163,
      heading: {
        title: "Al-Balad",
        lines: ["(The City)", "Revealed at Makkah", "20 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["I swear by this [Makkah] City,"] },
      ],
    },
    {
      bookPage: 1164,
      blocks: [
        { type: "verse", number: 2, lines: ["And you are a native of this city"] },
        { type: "verse", number: 3, lines: ["And by the Father and the Son,{1}"] },
        {
          type: "verse",
          number: 4,
          lines: ["Verily, We created man [‘Ādam] in", "The space [somewhere between the sky", "And the earth.]{2}"],
        },
        { type: "verse", number: 5, lines: ["Does man think that Allāh the One", "[The Ahad] has no power over him?"] },
        {
          type: "verse",
          number: 6,
          lines: ["The [hypocrite] man says: “I wasted lots", "Of money [in paying alms and charity].”"],
        },
        { type: "verse", number: 7, lines: ["Does he think that he is not seen by", "Ahad? [Allāh, the One]"] },
        { type: "verse", number: 8, lines: ["Have We not made for him two eyes?"] },
        { type: "verse", number: 9, lines: ["And a tongue and two lips?"] },
        { type: "verse", number: 10, lines: ["And We did show him the two ways [of", "Truth and Falsehood]"] },
        { type: "verse", number: 11, lines: ["But he did not give himself to", "The Undertaking of the Hard Task,"] },
        { type: "verse", number: 12, lines: ["What whould make you know what is", "The Undertaking of the Hard Task?"] },
        {
          type: "verse",
          number: 13,
          lines: ["[Undertaking the Hard Task includes:]", "Freeing a slave [of one’s own or to pay", "For an outsider slave to be free];"],
        },
      ],
    },
    {
      bookPage: 1165,
      blocks: [
        { type: "verse", number: 14, lines: ["Or feeding in the time of famine;"] },
        { type: "verse", number: 15, lines: ["An orphan which is near kin,"] },
        { type: "verse", number: 16, lines: ["Or a needy afflicted with poverty,"] },
        {
          type: "verse",
          number: 17,
          lines: ["And above all, to be included among", "The believers who enjoin one another", "To steadfastness and patience in Allāh’s", "Path; and enjoin one another to kindness", "And compassion to mankind."],
        },
        {
          type: "verse",
          number: 18,
          lines: ["Such people who have fulfilled", "“The Undertaking of the Hard Task” are", "The Fortunate Ones [they will be", "The inhabitants of the Paradise and", "The Record of their Deeds is in their", "Right hand]"],
        },
        {
          type: "verse",
          number: 19,
          lines: ["But those who denied Our Signs and", "Miracles, they are the Miserable Ones", "[They will enter the Hell and the Record", "Of their Deeds is in their left hand;]"],
        },
        { type: "verse", number: 20, lines: ["And on such shall be Fire, enclosing", "Them from all sides."] },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "Ibrāhīm and Ismāīl who built the Sacred House of Ka’bah in Makkah City by Allāh’s Command." },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "The word Kabad means: space; air; somewhere between the sky and the earth. why should Allāh the Merciful intend to create man in toil? Translators almost all have mistaken Kabad for Kabid which means liver and metaphorically implies a place of toil and sufferage." },
      ],
    },
  ],
};

export default surah;
