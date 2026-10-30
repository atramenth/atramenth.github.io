import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 97 · Al-Qadr — book pages 1176–1177 (verses 1–5, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 97,
  pages: [
    {
      bookPage: 1176,
      heading: {
        title: "Al-Qadr",
        lines: ["(The Ordainment)", "Revealed at Makkah", "5 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
      ],
    },
    {
      bookPage: 1177,
      blocks: [
        { type: "verse", number: 1, lines: ["Verily, We sent down the Holy Qur’ān", "In the Night of Qadr.{1}"] },
        { type: "verse", number: 2, lines: ["And what makes you know what", "The Night of Qadr is?"] },
        { type: "verse", number: 3, lines: ["The Night of Qadr is better than a", "Thousand months:"] },
        {
          type: "verse",
          number: 4,
          lines: ["The Angels and the Holy Spirit will", "Descend therein by their Creator’s", "Command, [to the Saviour", "Imām-e-Zamān (AS)] to proclaim the", "Ordainments about everything;"],
        },
        {
          type: "verse",
          number: 5,
          lines: ["Salutation be on this Holy night [which is", "Full of Grace and health] till the dawn of", "The promised morning."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "The Night of Qadr meaning the Night of Ordainment is a night in which the Holy Qur’ān was revealed to the Holy Messenger. This Blissful Event did happen in the latter part of Ramazān, month of fast; also it is believed by the Shīah that in the Night of Qadr, the fate of the world for the coming year will be Ordained by Allāh the Almighty; and then it will be revealed to Imām-e-Zamān the twelfth Infallible Imām, by the Angels and the Holy Spirit for taking action accordingly." },
      ],
    },
  ],
};

export default surah;
