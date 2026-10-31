import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 72 · Al-Jinn — book pages 1095–1100 (verses 1–28, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 72,
  pages: [
    {
      bookPage: 1095,
      heading: {
        title: "Al-Jinn",
        lines: ["(The Jinn)", "Revealed at Makkah", "28 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["Say [O, Messenger!]: “It has been", "Revealed to me that a party of Jinns", "Listened to the recitation of this Qur’ān", "And then they said: “Verily, we have", "Heard a wondrous recital [of", "The Divine Words];"],
        },
        {
          type: "verse",
          number: 2,
          continues: true,
          lines: ["“It does guide to the Straight Path, so", "We believed in it; and we shall never"],
        },
      ],
    },
    {
      bookPage: 1096,
      blocks: [
        { type: "verse", number: 2, continued: true, lines: ["Consider any partner for our Creator;"] },
        {
          type: "verse",
          number: 3,
          lines: ["“Our Creator is the Supreme Exalted", "And He has never chosen a wife nor any", "Children;"],
        },
        {
          type: "verse",
          number: 4,
          lines: ["“And some foolish ones{1} among us", "used to say certain things about", "Our Creator which was utterly falsehood;"],
        },
        {
          type: "verse",
          number: 5,
          lines: ["“And verily, we were of the opinion that", "Mankind and Jinns would never say a lie", "Against Allāh;"],
        },
        {
          type: "verse",
          number: 6,
          lines: ["“And verily, there were some men", "Among mankind who [when passing", "Through a desert at night] took shelter", "In the chiefs of the Jinns [instead of", "Allāh]{2} and this added to the rebellion", "And arrogance of the Jinns [against", "Allāh];"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["“And those men like you, disbelieving", "Jinns, thought that Allāh will never", "Raise them up;"],
        },
        {
          type: "verse",
          number: 8,
          lines: ["“And we [the Jinns] searched the sky but", "We found out that [recently] it has been", "Guarded by mighty guards and", "Shooting-stars;"],
        },
        {
          type: "verse",
          number: 9,
          continues: true,
          lines: ["“And we used to seat on some of", "The seats in the sky to steal a hearing,{3}"],
        },
      ],
    },
    {
      bookPage: 1097,
      blocks: [
        {
          type: "verse",
          number: 9,
          continued: true,
          lines: ["But now anyone who aims such, he will", "Find the shooting-stars, in wait for him;"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["“Now we do not know whether Allāh", "Has Decided to punish those on the", "Earth or He has intended something", "Good for them?"],
        },
        {
          type: "verse",
          number: 11,
          lines: ["“And among us there are some good", "Ones and some are wicked; we have", "Different sects and different ways of life", "Among the Jinns;"],
        },
        {
          type: "verse",
          number: 12,
          lines: ["“This we knew that we will never be able", "To overcome Allāh’s Will on the earth", "And that we can never escape His", "Punishment if He Decides to punish us;"],
        },
        {
          type: "verse",
          number: 13,
          lines: ["“And verily, when we listened to Allāh’s", "Guidance we believed in it; and whoever", "Believes in his Creator there will be no", "Fear either of loss or injustice for him", "[Since Allāh does not deal with His", "Creatures unjustly whether be mankind", "Or Jinns; they will receive recompense", "Against their deeds]"],
        },
        {
          type: "verse",
          number: 14,
          lines: ["“And among us some are Muslims and", "Some are disbelievers; and whoever has", "Become a Muslim then such has sought", "The Straight Path.”"],
        },
        { type: "divider" },
        { type: "verse", number: 15, continues: true, lines: ["And regarding the transgressors they"] },
      ],
    },
    {
      bookPage: 1098,
      blocks: [
        { type: "verse", number: 15, continued: true, lines: ["Shall be the fuel and the firewood for", "The Hell{4},"] },
        {
          type: "verse",
          number: 16,
          lines: ["If the disbelievers accept Faith and", "Remain firm on the Straight Path, We", "Will grant them  abundance of rain;"],
        },
        {
          type: "verse",
          number: 17,
          lines: ["So that We might try them through this", "Sign of Our Grace; but whoever turns", "Away from the Reminder of his Creator", "Allāh will cause him to enter into a", "Vehement Torment."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 18,
          lines: ["The mosques are worshipping places for", "Allāh, so do not worship others besides", "Allāh at all;"],
        },
        {
          type: "verse",
          number: 19,
          lines: ["And indeed when the devoted", "Worshipper of Allāh, [Mohammad S.A]", "Rose up for praying, they [the Quraish", "Pagans] tried to cause around him a", "Compact crowd [to tease him and", "To make disturbances for him]"],
        },
        {
          type: "verse",
          number: 20,
          lines: ["Say [O, Messenger!]: “I do not worship", "But my Creator&Nurturer; and I do not", "Consider any partner with Him.”"],
        },
        {
          type: "verse",
          number: 21,
          lines: ["Say [O, Messenger!]: “I do not own any", "Power to cause any harm to you or", "To put you on the right way [everything", "Depends on Allāh’s Will].”"],
        },
        {
          type: "verse",
          number: 22,
          continues: true,
          lines: ["Say [O, Messenger!]: “No one can", "Provide me a shelter when Allāh Wills"],
        },
      ],
    },
    {
      bookPage: 1099,
      blocks: [
        {
          type: "verse",
          number: 22,
          continued: true,
          lines: ["To chastise me [if I disobey Him] and", "There is no refuge for me but Him;"],
        },
        {
          type: "verse",
          number: 23,
          lines: ["“My only duty is to convey Allāh’s", "Message; and those who rebel against", "Allāh and His Messenger, then indeed", "For them will be the Hell Fire, in which", "They will abide forever.”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 24,
          lines: ["When in the Hereafter they see with", "Their own eyes what they have been", "Promised [of Chastisement] they will", "Learn who is the weakest concerning his", "Helpers and who is the least of", "Account concerning the number of", "The people [as his hosts];"],
        },
        {
          type: "verse",
          number: 25,
          lines: ["Say [O, Messenger!]: “I do not know", "Whether the punishment which you have", "Been promised is near or whether my", "Creator&Nurturer will appoint for it a", "Long reach term;"],
        },
        {
          type: "verse",
          number: 26,
          lines: ["“Allāh is the Knower of the Unseen, but", "He does not let any one be informed of", "His secrets,"],
        },
        {
          type: "verse",
          number: 27,
          lines: ["“Save a Messenger whom He has", "Chosen and is pleased with him; and", "Then He commands a group of Angels", "As guards march before him and", "Behind him,"],
        },
        {
          type: "verse",
          number: 28,
          continues: true,
          lines: ["“That He may know whether every", "Messenger has surely conveyed", "The Messages of his Creator; and"],
        },
      ],
    },
    {
      bookPage: 1100,
      blocks: [
        {
          type: "verse",
          number: 28,
          continued: true,
          lines: ["Allāh’s Knowledge encompasses all that", "[The Messengers have been bestowed]", "From power and knowledge; and Allāh", "Takes account of the exact number of", "Everything.”"],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "Satan" },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "By saying: “O chief of this wild forest! [or desert] I took refuge in you against the harmful subordinates of you”" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "Before the Appearance of the Holy Messenger and the Descending of the Glorious Qur’ān." },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "See 2:24" },
      ],
    },
  ],
};

export default surah;
