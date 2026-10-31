import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 82 · Al-Infitār — book pages 1141–1143 (verses 1–19, complete). Begins halfway down page 1141 and ends partway down page 1143.
 * Markup: {n} footnote marker · [ ] translator’s insertion.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 82,
  pages: [
    {
      bookPage: 1141,
      heading: {
        title: "Al-Infitār",
        lines: ["(The Cleaving Asunder of the Sky)", "Revealed at Makkah", "19 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["When the sky is cleft asunder,"] },
        { type: "verse", number: 2, lines: ["And when the stars are scattered,"] },
        { type: "verse", number: 3, lines: ["And when the seas remove their barriers", "And run on the land disorderly,"] },
        { type: "verse", number: 4, lines: ["And when the graves are turned upside", "Down [and the dead are raised up]"] },
      ],
    },
    {
      bookPage: 1142,
      blocks: [
        { type: "verse", number: 5, lines: ["Then man will be informed of what he", "Has sent for his Hereafter; and what is", "Left to be calculated later and added to", "His account."] },
        { type: "divider" },
        { type: "verse", number: 6, lines: ["O, mankind! What has made you be", "Arrogant and rude towards your Creator", "Who is the Supreme Bounteous?"] },
        { type: "verse", number: 7, lines: ["The One Who created you and gave you", "Shape and due proportion,"] },
        { type: "verse", number: 8, lines: ["In whatever form He Willed He gave", "You shape."] },
        { type: "verse", number: 9, lines: ["The truth is that you people deny", "The Day of Recompense for the Deeds;"] },
        { type: "verse", number: 10, lines: ["Verily, over you are appointed guard", "Angels to protect you;"] },
        { type: "verse", number: 11, lines: ["They are honourable Emissaries and", "They write down whatever you do,"] },
        { type: "verse", number: 12, lines: ["They know all that you do."] },
        { type: "divider" },
        { type: "verse", number: 13, lines: ["Verily, the pious will be in the blissful", "Paradise;"] },
        { type: "verse", number: 14, lines: ["And verily, the wicked disbelievers will be", "In the Hell Fire,"] },
        { type: "verse", number: 15, lines: ["Wherein they shall enter on the Day", "Of Recompense,"] },
      ],
    },
    {
      bookPage: 1143,
      blocks: [
        { type: "verse", number: 16, lines: ["And they cannot be absent from that", "Place."] },
        { type: "verse", number: 17, lines: ["And what do you know about the Day", "Of Recompense?{1}"] },
        { type: "verse", number: 18, lines: ["Again what do you know about the Day", "Of Recompense?"] },
        { type: "verse", number: 19, lines: ["It will be a Day that no one shall be of", "Any benefit for another, since on that", "Day the Command will totally belong to", "Allāh, the Almighty."] },
      ],
    },
  ],
  footnotes: [
    { id: 1, blocks: [{ kind: "p", text: "The Day of Recompense or the Day of Religion is the day when man’s recompense of his deeds is given on the basis of the Decrees of the Religion." }] },
  ],
};

export default surah;
