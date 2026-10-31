import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 83 · Al-Mutaffifīn — book pages 1143–1147 (verses 1–36, complete). Begins halfway down page 1143 and ends partway down page 1147.
 * Markup: {n} footnote marker · [ ] translator’s insertion.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 83,
  pages: [
    {
      bookPage: 1143,
      heading: {
        title: "Al-Mutaffifīn",
        lines: ["(Those Who Deal in Fraud)", "Revealed at Makkah", "36 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Woe to those sellers who deal in fraud!"] },
        { type: "verse", number: 2, continues: true, lines: ["Those who when they buy something"] },
      ],
    },
    {
      bookPage: 1144,
      blocks: [
        { type: "verse", number: 2, continued: true, lines: ["They demand full and exact weight,"] },
        { type: "verse", number: 3, lines: ["But when they sell something to", "The people decrease their right: Give", "Them less than the due weight and", "Measure;"] },
        { type: "verse", number: 4, lines: ["Do they not think that there will be a", "Judgement Day and they will be raised", "Up [to receive their recompense?]"] },
        { type: "verse", number: 5, lines: ["And [this will happen] on a Great Day:"] },
        { type: "verse", number: 6, lines: ["The Day that all mankind will stand", "Before the Creator of the worlds; [to", "Receive their recompense]"] },
        { type: "verse", number: 7, lines: ["Nay, [they do not believe in such a Day]", "Whereas verily, the Record of the Deeds", "Of the wicked sinners is preserved in", "Sijjīn.{1}"] },
        { type: "verse", number: 8, lines: ["And what will make you know what", "Sijjīn is?"] },
        { type: "verse", number: 9, lines: ["A written Record of the wrongdoers’", "Deeds."] },
        { type: "verse", number: 10, lines: ["On that Day, woe to those who belied", "The Truth!"] },
        { type: "verse", number: 11, lines: ["Those who belied and denied the Day of", "Recompense,"] },
      ],
    },
    {
      bookPage: 1145,
      blocks: [
        { type: "verse", number: 12, lines: ["And none does belie it but", "The transgressing sinful;"] },
        { type: "verse", number: 13, lines: ["Those who when Our Words of", "Revelation are recited to them, they say:", "“This is the same legend of the ancients.”"] },
        { type: "verse", number: 14, lines: ["But on their hearts is the stain of their", "Evil deeds,"] },
        { type: "verse", number: 15, lines: ["Surely on the Resurrection Day, they", "Will be deprived from Meeting their", "Creator;"] },
        { type: "verse", number: 16, lines: ["Then they will surely enter the Hell", "Fire,"] },
        { type: "verse", number: 17, lines: ["Then, it will be said to them: “This Hell", "Is what you used to deny it.”"] },
        { type: "divider" },
        { type: "verse", number: 18, lines: ["But, the Record of the pious is", "Preserved in Illīyīn,{2}"] },
        { type: "verse", number: 19, lines: ["And what will make you know what", "Illīyīn is?"] },
        { type: "verse", number: 20, lines: ["A written Record [of the Deeds of", "The righteous,]"] },
        { type: "verse", number: 21, lines: ["To which bear witness those who are", "Nearest to Allāh."] },
      ],
    },
    {
      bookPage: 1146,
      blocks: [
        { type: "verse", number: 22, lines: ["Verily, the righteous will be in", "The blissful Paradise:"] },
        { type: "verse", number: 23, lines: ["Leaning against the raised sofas, they", "Watch and appreciate the beauty of", "The bounties of Allāh;"] },
        { type: "verse", number: 24, lines: ["You will recognize in their faces", "The brightness and the beam of", "Happiness;"] },
        { type: "verse", number: 25, lines: ["They will be given the pure drink from a", "Jar which is sealed,"] },
        { type: "verse", number: 26, lines: ["The seal of the drink is pure musk so", "They inhale the scent of it eagerly,"] },
        { type: "verse", number: 27, lines: ["And it is mixed with the water of", "Tassnīm Fountain,"] },
        { type: "verse", number: 28, lines: ["A Fountain [in the lofty part of", "The Paradise] whereof drink those", "Nearest to Allāh."] },
        { type: "divider" },
        { type: "verse", number: 29, lines: ["The sinful ones used to mock at", "The believers,"] },
        { type: "verse", number: 30, lines: ["And when they passed by the believers,", "They winked at one another mockingly,"] },
        { type: "verse", number: 31, lines: ["And when they returned home to their", "Family they continued laughing and", "Mocking at the believers [while talking", "About them];"] },
      ],
    },
    {
      bookPage: 1147,
      blocks: [
        { type: "verse", number: 32, lines: ["And whenever they saw the believers", "They used to say: “These are the", "Ones who have indeed gone", "Astray [because they do not own", "Property and wealth nevertheless they", "Believe in Allāh and the Day of", "Resurrection]”"] },
        { type: "verse", number: 33, lines: ["Whereas they had not been sent as", "keepers over them, [so they had no right", "To sit in judgement over them]"] },
        { type: "verse", number: 34, lines: ["This Day is the believers’ turn to laugh", "At the disbelievers,"] },
        { type: "verse", number: 35, lines: ["The righteous, leaning against the raised", "Sofas, watch the beauty of Allāh’s", "Promise and Allāh’s Garden of Bliss."] },
        { type: "verse", number: 36, lines: ["Are not the disbelievers recompensed", "For what they used to do?"] },
      ],
    },
  ],
  footnotes: [
    { id: 1, blocks: [{ kind: "p", text: "The name of the Book of the Black Deeds and the place in the Hell wherein it is kept." }] },
    { id: 2, blocks: [{ kind: "p", text: "The name of the Record of the pious and also a loftly place in the Paradise wherein it is kept." }] },
  ],
};

export default surah;
