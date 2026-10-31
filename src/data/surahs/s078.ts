import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 78 · An-Naba — book pages 1124–1128 (verses 1–40, complete). Begins at the top of page 1124 and ends partway down page 1128.
 * Markup: {n} footnote marker · [ ] translator’s insertion.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 78,
  pages: [
    {
      bookPage: 1124,
      heading: {
        title: "An-Naba",
        lines: ["(The Great News)", "Revealed at Makkah", "40 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Of what do they ask one another?"] },
        { type: "verse", number: 2, lines: ["Of the Great News [of the Resurrection", "Day]"] },
        { type: "verse", number: 3, lines: ["About which they [the believers and", "The disbelievers] differ and make", "Dispute;"] },
        { type: "verse", number: 4, lines: ["[What the deniers say is but falsehood]", "And they shall soon know;"] },
        { type: "verse", number: 5, lines: ["Verily, they shall soon know."] },
        { type: "verse", number: 6, lines: ["Did We not make the earth a vast space", "For establishing your habitation on it,"] },
        { type: "verse", number: 7, lines: ["And the mountains as strong pegs", "To keep the earth and you secure", "Against the shaking?"] },
      ],
    },
    {
      bookPage: 1125,
      blocks: [
        { type: "verse", number: 8, lines: ["And We did create you in pairs [male", "And female to give you family and", "To maintain your generation]"] },
        { type: "verse", number: 9, lines: ["And We caused sleep for your rest and", "Repose;"] },
        { type: "verse", number: 10, lines: ["And We appointed Night a covering", "To protect you from tumult and fatigue", "Of the day;"] },
        { type: "verse", number: 11, lines: ["And We appointed Day a time for work", "And seeking livelihood [from Allāh’s", "Bounties;]"] },
        { type: "verse", number: 12, lines: ["And We built above you Seven Mighty", "Heavens;"] },
        { type: "verse", number: 13, lines: ["And We placed in it a highly light-", "Giving Lamp, [by the name of Sun]"] },
        { type: "verse", number: 14, lines: ["And We sent down from the heavy", "Clouds, water in abundance,"] },
        { type: "verse", number: 15, lines: ["By which We produce for you corn, fruit", "And vegetations,"] },
        { type: "verse", number: 16, lines: ["And also gardens of crowded foliage."] },
        { type: "verse", number: 17, lines: ["But verily, the Day of Separation", "Between Truth and Falsehood is", "The Promised Day to be met by all", "Mankind."] },
        { type: "verse", number: 18, continues: true, lines: ["On that Day the Trumpet will be blown"] },
      ],
    },
    {
      bookPage: 1126,
      blocks: [
        { type: "verse", number: 18, continued: true, lines: ["And you shall come out in huge groups;"] },
        { type: "verse", number: 19, lines: ["And the sky will be opened as if turned", "Into gates [and the Angels descend from", "Them]"] },
        { type: "verse", number: 20, lines: ["And the mountains will be set in motion", "And they look like mirage;"] },
        { type: "verse", number: 21, lines: ["Verily, the Hell will be a place of", "Ambush, [lying in wait for", "The wrongdoers]"] },
        { type: "verse", number: 22, lines: ["And the final destination for", "The disbelievers and the transgressors;"] },
        { type: "verse", number: 23, lines: ["Therein they will abide for centuries:"] },
        { type: "verse", number: 24, lines: ["They will not taste any cool drink", "Therein,"] },
        { type: "verse", number: 25, lines: ["They only drink the boiling water and", "Filth of the wounds;"] },
        { type: "verse", number: 26, lines: ["[And it is] A required recompense for their", "Deeds:"] },
        { type: "verse", number: 27, lines: ["Since they did not expect a Reckoning", "Day to come,"] },
        { type: "verse", number: 28, lines: ["And they utterly belied Our Signs and", "Miracles;"] },
        { type: "verse", number: 29, continues: true, lines: ["And all their deeds We have recorded in"] },
      ],
    },
    {
      bookPage: 1127,
      blocks: [
        { type: "verse", number: 29, continued: true, lines: ["A Book;"] },
        { type: "verse", number: 30, lines: ["[It will be stated to them:] “So taste you", "The consequences of your deeds, We", "Only increase to your Chastisement.”"] },
        { type: "divider" },
        { type: "verse", number: 31, lines: ["[But for the believers life is different]", "Verily, for the pious, there will be a", "Great Achievement:"] },
        { type: "verse", number: 32, lines: ["For them, there will be Gardens and", "Grapeyards;"] },
        { type: "verse", number: 33, lines: ["And pretty Angels of equal age serve", "Them,"] },
        { type: "verse", number: 34, lines: ["With cups of pure drink full to", "The brim;"] },
        { type: "verse", number: 35, lines: ["There they will hear no idle talks no", "Lies;"] },
        { type: "verse", number: 36, lines: ["[O, Messenger!] This wonderful reception", "[Based on the account of good deeds]", "Has been granted from your", "Creator&Nurturer to the pious,"] },
        { type: "verse", number: 37, lines: ["From the Creator of the heavens and", "The earth and what is between them;", "On that Day, none shall have the power", "To argue with Ar-Rahmān [regarding", "The intercession]."] },
        { type: "verse", number: 38, continues: true, lines: ["On that Day the Holy Spirit and"] },
      ],
    },
    {
      bookPage: 1128,
      blocks: [
        { type: "verse", number: 38, continued: true, lines: ["The Angels will stand in ranks; none", "Shall speak save those who are", "Permitted by Ar-Rahmān; and he will", "Speak only what is right;"] },
        { type: "verse", number: 39, lines: ["That will be the Day of Truth [that", "The disbelievers question one another", "About its news] and whosoever wishes", "A good Return to his Creator&Nurturer", "Has to take a way to Him [while he", "Abides in this world.]"] },
        { type: "verse", number: 40, lines: ["Verily, We warn you of a Chastisement", "Which is near; and of the Day when man", "Beholds what he has sent before, of his", "Own deeds; and the disbeliever will say:", "“If only I were dust!” [And had not been", "Raised to suffer the disgrace and", "The Chastisement]"] },
      ],
    },
  ],
  footnotes: [
  ],
};

export default surah;
