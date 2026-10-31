import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 84 · Al-Insheqāq — book pages 1147–1150 (verses 1–25, complete). Begins halfway down page 1147 and ends partway down page 1150.
 * Markup: {n} footnote marker · [ ] translator’s insertion.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 84,
  pages: [
    {
      bookPage: 1147,
      heading: {
        title: "Al-Insheqāq",
        lines: ["(The Rending Asunder of the Sky)", "Revealed at Makkah", "25 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
      ],
    },
    {
      bookPage: 1148,
      blocks: [
        { type: "verse", number: 1, lines: ["When the Sky is cleft asunder,"] },
        { type: "verse", number: 2, lines: ["And it gives ear to the Command of its", "Creator; and truly it must do so;"] },
        { type: "verse", number: 3, lines: ["And when the Earth shall be stretched", "Out, [quite flattened; no mountains,", "No hills],"] },
        { type: "verse", number: 4, lines: ["And shall throw out whatever is in it", "And becomes empty,"] },
        { type: "verse", number: 5, lines: ["And it gives ear to the Command of its", "Creator and truly it must do so;"] },
        { type: "verse", number: 6, lines: ["O, man! Verily, you who toil and strive", "In the Path of your Creator&Nurturer,", "Surely you are going to Meet Him."] },
        { type: "verse", number: 7, lines: ["So for the one whose Record of Deeds", "Is given to his right hand,"] },
        { type: "verse", number: 8, lines: ["Soon his account shall be taken in an", "Easy way [because he has fulfilled", "The requirements which has forwarded", "From the other world],"] },
        { type: "verse", number: 9, lines: ["And he will return joyfully to his family."] },
        { type: "verse", number: 10, lines: ["But the one whose Record is given from", "Behind his back,"] },
        { type: "verse", number: 11, lines: ["He shall wish and pray for his death", "To be saved from the Chastisement,"] },
      ],
    },
    {
      bookPage: 1149,
      blocks: [
        { type: "verse", number: 12, lines: ["And he will enter the flaming Hell Fire,"] },
        { type: "verse", number: 13, lines: ["Verily, he enjoyed life among his family", "In the world,"] },
        { type: "verse", number: 14, lines: ["And verily, he was of the opinion that he", "Would never be raised up after his death,"] },
        { type: "verse", number: 15, lines: ["But his Creator&Nurturer was ever", "Whatchful of him."] },
        { type: "divider" },
        { type: "verse", number: 16, lines: ["So I swear by the Twilight;"] },
        { type: "verse", number: 17, lines: ["And by the Night and all that it covers;"] },
        { type: "verse", number: 18, lines: ["And by the Moon in its Fullness;"] },
        { type: "verse", number: 19, lines: ["[By all these oaths] That you people", "Shall surely pass from one stage to", "Another [from birth to death and then to", "The Resurrection]"] },
        { type: "verse", number: 20, lines: ["What is the matter with the disbelievers", "That they do not accept Faith and do", "Not believe in the Hereafter?"] },
        { type: "verse", number: 21, lines: ["And when Qur’ān is recited to them", "They do not prostrate in adoration,"] },
        { type: "verse", number: 22, lines: ["The disbelievers not only do not", "Prostrate, but they also belie the Holy", "Qur’ān;"] },
      ],
    },
    {
      bookPage: 1150,
      blocks: [
        { type: "verse", number: 23, lines: ["And Allāh is the Only Knower of what", "They hide in their hearts."] },
        { type: "verse", number: 24, lines: ["So [O, Messenger!] give them", "The glad-tidings of a painful", "Chastisements!"] },
        { type: "verse", number: 25, lines: ["Except are those who [following", "The warnings], believe and", "Do good deeds; for them will be", "The permanent Reward [of Paradise.]"] },
      ],
    },
  ],
  footnotes: [
  ],
};

export default surah;
