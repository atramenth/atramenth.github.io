import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 77 · Al-Mursalāt — book pages 1119–1123 (verses 1–50, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 77,
  pages: [
    {
      bookPage: 1119,
      heading: {
        title: "Al-Mursalāt",
        lines: ["(The Divine Emissaries)", "Revealed at Makkah", "50 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["By the Messengers [and the Divine", "Emissaries] who were sent one after", "Another for man’s guidance,"],
        },
        {
          type: "verse",
          number: 2,
          lines: ["By the Angels who move like swift", "Winds after the Commands of their", "Creator,"],
        },
        { type: "verse", number: 3, lines: ["By those who publish the Divine Truth", "Among mankind,"] },
        {
          type: "verse",
          number: 4,
          lines: ["By those who exhibit the distinctive", "Separation between Truth and", "Falsehood,"],
        },
        { type: "verse", number: 5, lines: ["By those Angels who are the means of", "Reaching Revelations to the Messengers,"] },
        {
          type: "verse",
          number: 6,
          lines: ["So that it be proof and justification for", "The good-doers and warning for", "The wrongdoers."],
        },
        { type: "verse", number: 7, continues: true, lines: ["[By all these oaths] That what you"] },
      ],
    },
    {
      bookPage: 1120,
      blocks: [
        { type: "verse", number: 7, continued: true, lines: ["People are promised about the Hereafter", "Will come to pass."] },
        { type: "divider" },
        {
          type: "verse",
          number: 8,
          lines: ["On the Day when [the Promise of", "Resurrection comes to pass] the stars", "Become lightless and dim,"],
        },
        { type: "verse", number: 9, lines: ["And the sky will cleave asunder;"] },
        {
          type: "verse",
          number: 10,
          lines: ["And the mountains will be removed", "From their places and will be crashed", "And blown away;"],
        },
        { type: "verse", number: 11, lines: ["The Messengers will be given a time", "To bear witness to their followers:"] },
        { type: "verse", number: 12, lines: ["For what Day is this time appointed?"] },
        {
          type: "verse",
          number: 13,
          lines: ["For the Day of Separation between", "Truth and Falsehood, the Day of", "Judgement."],
        },
        { type: "verse", number: 14, lines: ["And what will make you know what", "The Day of Separation is?"] },
        { type: "verse", number: 15, lines: ["On that Day, woe to the beliers of", "The Truth!{1}"] },
        { type: "verse", number: 16, lines: ["Did We not destroy the disbelievers and", "The tyrants of the old?"] },
        {
          type: "verse",
          number: 17,
          continues: true,
          lines: ["So We shall send later generations of", "The disbelievers after them [to the land"],
        },
      ],
    },
    {
      bookPage: 1121,
      blocks: [
        { type: "verse", number: 17, continued: true, lines: ["Of perdition]"] },
        { type: "verse", number: 18, lines: ["Thus We punish the sinful ones."] },
        { type: "verse", number: 19, lines: ["On that Day woe to the beliers of", "The Truth!"] },
        { type: "verse", number: 20, lines: ["Did We not create you from a mean", "Drop of fluid?"] },
        { type: "verse", number: 21, lines: ["Then We placed it in a secured place [of", "Mothers’ wombs],"] },
        { type: "verse", number: 22, lines: ["For a determined time;"] },
        { type: "verse", number: 23, lines: ["We did Ordain the time and We are", "The Only Ordainer."] },
        { type: "verse", number: 24, lines: ["On that Day woe to the beliers of", "The Truth!"] },
        { type: "verse", number: 25, lines: ["Did We not make the earth as a center", "For lodging the people?"] },
        { type: "verse", number: 26, lines: ["For their living on it and being burried", "Under it;"] },
        {
          type: "verse",
          number: 27,
          lines: ["And We placed firm and strong", "Mountains on the earth [to keep it from", "Shaking] and We provided sweet water", "For you [running in the rivers and", "Streams]."],
        },
        { type: "verse", number: 28, lines: ["On that Day woe to the beliers of", "The Truth!"] },
        { type: "verse", number: 29, lines: ["[It will be said to them:] “Be gone to", "That which you used to deny!"] },
      ],
    },
    {
      bookPage: 1122,
      blocks: [
        { type: "verse", number: 30, lines: ["“Be gone to the shadow of smoke", "Ascending Fire with three columns.”"] },
        { type: "verse", number: 31, lines: ["It gives no cool shade, nor avail you", "From the Blazing Fire;"] },
        {
          type: "verse",
          number: 32,
          lines: ["Verily, its sparks which it throws are like", "Forts [huge and hard for a spark]"],
        },
        { type: "verse", number: 33, lines: ["They look like yellow camels runing", "After one another rapidly."] },
        { type: "verse", number: 34, lines: ["On that Day woe to the beliers of", "The Truth!"] },
        {
          type: "verse",
          number: 35,
          lines: ["This is the Day that the disbelievers will", "Shut up their mouths from talking", "Falsehood,"],
        },
        {
          type: "verse",
          number: 36,
          lines: ["And they will not be given the", "Opportunity for appology and rendering", "Excuses."],
        },
        { type: "verse", number: 37, lines: ["On that Day woe to the beliers of", "The Truth!"] },
        {
          type: "verse",
          number: 38,
          lines: ["This is the Day of Separation between", "Truth and Falsehood and the Day of", "Judgement; and We will gather you and", "All the disbelievers of the old,"],
        },
        { type: "verse", number: 39, lines: ["So if you have any plot, now use it", "Against Me [Allāh, the Almighty.]"] },
        { type: "verse", number: 40, lines: ["On that Day woe to the beliers of", "The Truth!"] },
        { type: "divider" },
      ],
    },
    {
      bookPage: 1123,
      blocks: [
        {
          type: "verse",
          number: 41,
          lines: ["[But on that Day] The righteous are in", "The shades of Gardens and beside", "The flowing streams:"],
        },
        { type: "verse", number: 42, lines: ["And they shall have fruits, all that they", "Desire;"] },
        {
          type: "verse",
          number: 43,
          lines: ["[It will be stated to them:] “Eat and", "Drink with pleasantness, for it is", "The reward of your good deeds.”"],
        },
        { type: "verse", number: 44, lines: ["Verily, thus We recompense", "The good-doers."] },
        { type: "verse", number: 45, lines: ["On that Day woe to the beliers of", "The Truth!"] },
        {
          type: "verse",
          number: 46,
          lines: ["[O, you disbelievers and beliers of", "The Truth] Eat and enjoy yourselves in", "This temporal life, for you are", "The sinners [and you will receive the due", "Punishment on the Day which you", "Deny it]"],
        },
        { type: "verse", number: 47, lines: ["On that Day woe to the beliers of", "The Truth!"] },
        {
          type: "verse",
          number: 48,
          lines: ["Those who refuse to bow down when it", "Is said to them: “Bow you down in", "Prayer!”"],
        },
        { type: "verse", number: 49, lines: ["On that Day woe to the beliers of", "The Truth!"] },
        {
          type: "verse",
          number: 50,
          lines: ["[O, Messenger!] In what other word after", "The Holy Qur’ān will this people", "Believe in?"],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "The disbelievers and the polytheists who belie the Truth are those who deny the Unity of Allāh, the Resurrection Day and all Divine Signs and Miracles, therefore the Messengers and the Books of Guidance. So equivalent of Haq, involving the denied mentioned factors is the Truth." },
      ],
    },
  ],
};

export default surah;
