import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 69 · Al-Hāqqah — book pages 1081–1086 (verses 1–52, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 69,
  pages: [
    {
      bookPage: 1081,
      heading: {
        title: "Al-Hāqqah",
        lines: ["(The Fulfillment of the True Promise)", "Revealed at Makkah", "52 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["The Fulfillment of the True Promise!"] },
        { type: "verse", number: 2, lines: ["What is the Fulfillment of the True", "Promise?"] },
        {
          type: "verse",
          number: 3,
          lines: ["And what will make you know how", "The Fulfillment of the True Promise will", "Happen?"],
        },
        {
          type: "verse",
          number: 4,
          lines: ["Thamūd and ‘Ād people belied", "The devastative event of the Day of", "Judgement;"],
        },
        { type: "verse", number: 5, lines: ["So Thamūd people were destroyed by a", "Thunderbolt;"] },
        { type: "verse", number: 6, lines: ["And ’Ād people were destroyed by a", "Furious cold wind;"] },
      ],
    },
    {
      bookPage: 1082,
      blocks: [
        {
          type: "verse",
          number: 7,
          lines: ["Which overtook them [by Allāh’s", "Command] for seven nights and eight", "Days successively; and you could see", "Men lying dead as trunks of hollow", "Palm-trees, taking here and there by", "The wild wind;"],
        },
        { type: "verse", number: 8, lines: ["[O, Messenger!] Do you see any of that", "Generation alive?"] },
        {
          type: "verse",
          number: 9,
          lines: ["Firown and the disbelievers before him", "And the Overthrown Cities of the people", "Of Lūt, they all were guilty of", "Committing sin;"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["And they rebelled against their", "Creator’s Messenger; so Allāh seized", "Them with a Severe Torment."],
        },
        {
          type: "verse",
          number: 11,
          lines: ["Verily, [as regards to the believers]", "When the water rose to the level of", "Flood, We carried you [the believing", "Generation of your ancestors] in", "Nūh’s Ark,{1}"],
        },
        {
          type: "verse",
          number: 12,
          lines: ["So that the story of Nūh’s Ark may", "Become a Reminder for you mankind;", "And the ears who listen to the Truth may", "Hear it and may be reminded by it."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 13,
          lines: ["[At the time of the Fulfillment of", "The True Promise] When the Trumpet", "Blows the First Blast,"],
        },
      ],
    },
    {
      bookPage: 1083,
      blocks: [
        {
          type: "verse",
          number: 14,
          lines: ["The earth and the mountains shall be", "Removed and crashed with a single", "Stroke of shake;"],
        },
        { type: "verse", number: 15, lines: ["On that Day the Resurrection will", "Happen:"] },
        {
          type: "verse",
          number: 16,
          lines: ["And the sky will cleave asunder and it", "Will become frail and ready to fall", "Apart;"],
        },
        {
          type: "verse",
          number: 17,
          lines: ["And the Angels will be on all sides of", "The sky; and eight Angels will bear", "The Throne of Arsh of your", "Creator&Nurturer above their heads;"],
        },
        {
          type: "verse",
          number: 18,
          lines: ["That Day you shall be exposed to", "The Divine Judgement Seat and not a", "Single secret of your deeds will remain", "Secret:"],
        },
        {
          type: "verse",
          number: 19,
          lines: ["Then as for him who will be given his", "Record in his right hand, he will say", "Proudly: “Take this record of my deeds", "And read it!"],
        },
        { type: "verse", number: 20, lines: ["“I did know that I will surely meet with", "My Account.”"] },
        { type: "verse", number: 21, lines: ["So the one with good record will live in", "A pleasant life:"] },
        { type: "verse", number: 22, lines: ["In an excellent Garden,"] },
        { type: "verse", number: 23, continues: true, lines: ["The fruits of it are on low branches and"] },
      ],
    },
    {
      bookPage: 1084,
      blocks: [
        { type: "verse", number: 23, continued: true, lines: ["Available for him;"] },
        {
          type: "verse",
          number: 24,
          lines: ["[It will be stated to them:] “Eat and drink", "With pleasure as recompense for what", "You have sent on before in the past days", "Of your worldly life.”"],
        },
        {
          type: "verse",
          number: 25,
          lines: ["But the one in whose left hand is his", "Record of deeds will say: “If only my", "Record was not given to me;"],
        },
        { type: "verse", number: 26, lines: ["“And that I had never learned about my", "Account;"] },
        { type: "verse", number: 27, lines: ["“If only death was the end of everything!"] },
        { type: "verse", number: 28, lines: ["“My wealth did not avail me [of", "The Divine Punishment];"] },
        { type: "verse", number: 29, lines: ["“My power and position and splendour", "All are perished.”"] },
        { type: "verse", number: 30, lines: ["[Then it will be stated:] “Seize him and", "Fetter him!"] },
        { type: "verse", number: 31, lines: ["“Later cast him in the Hell Fire;"] },
        { type: "verse", number: 32, lines: ["“Now fetter him with a chain of seventy", "Cubits;"] },
        { type: "verse", number: 33, lines: ["“Since he was the one who did not", "Believe in Allāh, the Great Mighty;"] },
        { type: "verse", number: 34, lines: ["“And he never encouraged people", "To feed the needy;"] },
      ],
    },
    {
      bookPage: 1085,
      blocks: [
        { type: "verse", number: 35, lines: ["“So this Day he has no intimate friend", "To help him;"] },
        { type: "verse", number: 36, lines: ["“And there is no food for him but filth", "Of the wounds,"] },
        { type: "verse", number: 37, lines: ["“Which is food but for the sinners.”"] },
        { type: "divider" },
        { type: "verse", number: 38, lines: ["I swear by what you mankind can see,", "[The Visible World]"] },
        { type: "verse", number: 39, lines: ["And what you cannot see, [the Unseen", "World]"] },
        { type: "verse", number: 40, lines: ["That verily, this Qur’ān is the Word", "Revealed to an honourable Messenger;"] },
        { type: "verse", number: 41, lines: ["It is not the word of a poet; but you", "People believe very little;"] },
        {
          type: "verse",
          number: 42,
          lines: ["It is not either the word of a soothsayer;", "You people rarely receive admonition,"],
        },
        { type: "verse", number: 43, lines: ["This Qur’ān is Descended by the Creator", "Of the worlds;"] },
        { type: "verse", number: 44, lines: ["And if the Messenger had forged words", "While quoting them under Our Name,"] },
        { type: "verse", number: 45, lines: ["Surely We would have seized him by his", "Right hand;"] },
      ],
    },
    {
      bookPage: 1086,
      blocks: [
        { type: "verse", number: 46, lines: ["And would have surely cut off the artery", "Of his heart;"] },
        { type: "verse", number: 47, lines: ["And none of you could avail him against", "The Divine Wrath."] },
        { type: "verse", number: 48, lines: ["And verily, this Qur’ān is a Reminder", "For the pious;"] },
        { type: "verse", number: 49, lines: ["And verily, We have made known that", "There are some among you who belie it,"] },
        {
          type: "verse",
          number: 50,
          lines: ["But the denial of this Qur’ān will be a", "Cause of remorse for the disbelievers", "[Mainly on the Resurrection Day];"],
        },
        { type: "verse", number: 51, lines: ["And verily, this Qur’ān is the Truth of", "Certainty, free from any doubt."] },
        {
          type: "verse",
          number: 52,
          lines: ["So [O, Messenger!] Celebrate the Name", "Of your Creator&Nurturer,", "The Supreme Great, [in order to benefit", "From the light of Allāh’s Remembrance.]"],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "See 11:40" },
      ],
    },
  ],
};

export default surah;
