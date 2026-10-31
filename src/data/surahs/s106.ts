import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 106 · Al-Quraish — book pages 1188–1189 (verses 1–4, complete).
 * The book restarts footnote numbering on every page; here notes are numbered
 * once per sūrah in reading order (1 = page 1188, 2 = page 1189).
 * Page 1189 opens with the rest of this sūrah, above the heading of Sūrah 107.
 */
const surah: SurahData = {
  number: 106,
  pages: [
    {
      bookPage: 1188,
      heading: {
        title: "Al-Quraish",
        lines: ["(The Quraish people)", "Revealed at Makkah", "4 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["The Tribe of Quraish to render their", "Gratitude to their Creator for their", "Commercial compacts with the pilgrims", "Of Ka‘bah,{1}"],
        },
        { type: "verse", number: 2, lines: ["And the covenants that they make on"], continues: true },
      ],
    },
    {
      bookPage: 1189,
      blocks: [
        { type: "verse", number: 2, continued: true, lines: ["Their trade journeys in the winter [to", "Yaman] and in the summer [to Syria],"] },
        { type: "verse", number: 3, lines: ["So they should worship the Owner of", "This Sacred House:"] },
        {
          type: "verse",
          number: 4,
          lines: ["The One Who provided their sustenance", "[In the barren land of Makkah due to", "Their position as the servants of", "The Sacred Shrine of Ka‘bah] and", "Provided security for them against any", "Danger.{2}"],
        },
      ],
    },
  ],
  footnotes: [
    { id: 1, blocks: [{ kind: "p", text: "Īlāf in this Word of Revelation means covenant and commercial compacts rather than familiarity or friendship." }] },
    {
      id: 2,
      blocks: [
        {
          kind: "p",
          text: "Following the invocation of Ibrāhīm (AS) to Allāh for bestowing security and bounty on the dry and without herbage land of Makkah City (2:126), both were bestowed on the inhabitants; and the defeat of Abraha was one of the outcomes. Therefore the Quraish tribe who were at the service of the Holy Shrine of Ka‘bah found all sorts of opportunity for establishing commercial compacts with the pilgrims of the Sacred House in Makkah City as well as in their summer and winter journies. They did owe this to their Grace-Bestowing Creator and to the sincere invocation of the Messenger of Allāh, Ibrāhīm the Upright in Faith.",
        },
      ],
    },
  ],
};

export default surah;
