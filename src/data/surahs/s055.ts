import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 55 · Ar-Rahmān — book pages 1003–1010 (verses 1–78, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 55,
  pages: [
    {
      bookPage: 1003,
      heading: {
        title: "Ar-Rahmān",
        lines: ["(One of Allāh’s Names of Outstanding Excellence)", "Revealed at Madīnah", "78 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Ar-Rahmān,{1}"] },
        { type: "verse", number: 2, lines: ["Is the One Who taught reading of", "The Divine Text{2} the Holy Messenger;"] },
        { type: "verse", number: 3, lines: ["And the One Who created man;"] },
        { type: "verse", number: 4, lines: ["And taught him to express himself by", "Speech."] },
        {
          type: "verse",
          number: 5,
          lines: ["The sun and the moon run their courses", "According to an Ordained calculation", "[By Ar-Rahmān];"],
        },
        { type: "verse", number: 6, lines: ["The herbs and the trees prostrate in", "Adoration before their Creator."] },
      ],
    },
    {
      bookPage: 1004,
      blocks: [
        {
          type: "verse",
          number: 7,
          lines: ["Allāh raised the sky above the earth; and", "Set up the Criterion and the balance of", "Justice,"],
        },
        { type: "verse", number: 8, lines: ["In order that you mankind, may not", "Transgress the right of the others,"] },
        {
          type: "verse",
          number: 9,
          lines: ["So scale weight with justice and do not", "Reduce the due balance of people’s", "Things."],
        },
        { type: "verse", number: 10, lines: ["Ar-Rahmān is the One Who has spread", "Out the earth for the earthly beings:"] },
        { type: "verse", number: 11, lines: ["Therein grow fruits, and palm-trees", "Having sheathed dates,"] },
        { type: "verse", number: 12, lines: ["And also corn with leaves and stalks for", "Fodder and sweet-smelling plants."] },
        { type: "verse", number: 13, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        { type: "divider" },
        {
          type: "verse",
          number: 14,
          lines: ["Allāh created ‘Ādam [father of man]", "From a dry clay, like that used in pottery;"],
        },
        { type: "verse", number: 15, lines: ["And He created Jinns from a", "Smoke-free flame of fire;"] },
        { type: "verse", number: 16, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        { type: "verse", number: 17, continues: true, lines: ["He is the Creator of the Easts and"] },
      ],
    },
    {
      bookPage: 1005,
      blocks: [
        { type: "verse", number: 17, continued: true, lines: ["The Wests.{3}"] },
        { type: "verse", number: 18, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        {
          type: "verse",
          number: 19,
          lines: ["He placed the two seas, one with salt", "Water and one with sweet, next to", "Each other,"],
        },
        { type: "verse", number: 20, lines: ["And between them is a barrier so that", "None of the two can transgress;"] },
        { type: "verse", number: 21, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        { type: "verse", number: 22, lines: ["Out of the two seas pearls and corals", "Are drawn out;"] },
        { type: "verse", number: 23, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        {
          type: "verse",
          number: 24,
          lines: ["And to Him belong the ships which are", "Like huge mountains sailing in the sea;"],
        },
        { type: "verse", number: 25, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        { type: "verse", number: 26, lines: ["Whatever in the worlds are doomed to", "Perdition,"] },
        {
          type: "verse",
          number: 27,
          lines: ["Only the Existence of your", "Creator&Nurturer is the Eternal;", "The One Who is the Source-Owner of", "Sublimity, Honour and Bounty.{4}"],
        },
      ],
    },
    {
      bookPage: 1006,
      blocks: [
        { type: "verse", number: 28, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        {
          type: "verse",
          number: 29,
          lines: ["All creatures in the heavens and on", "The earth are in need of Him; and", "Every day He is busy in a new", "Miraculous Act by His Embracing Power;"],
        },
        { type: "verse", number: 30, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        { type: "divider" },
        {
          type: "verse",
          number: 31,
          lines: ["O, you two groups of Jinns and men!", "We shall soon attend to the account of", "You!"],
        },
        { type: "verse", number: 32, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        {
          type: "verse",
          number: 33,
          lines: ["O, You assembly of Jinns and mankind!", "If you can pass beyond the regions of", "The heavens and the earth, do not", "Hesitate to do it, but you cannot without", "The due authority and permission of", "Allāh;"],
        },
        { type: "verse", number: 34, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        {
          type: "verse",
          number: 35,
          lines: ["On the wrongdoers among you [two", "Groups] will be sent smoke-free flames", "Of fire and molten copper and you", "Cannot defend yourselves against it;"],
        },
      ],
    },
    {
      bookPage: 1007,
      blocks: [
        { type: "verse", number: 36, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        { type: "verse", number: 37, lines: ["When the sky is rent asunder and it", "Becomes like redish oil colour,{5}"] },
        { type: "verse", number: 38, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        {
          type: "verse",
          number: 39,
          lines: ["On that Day no question will be asked of", "Man or Jinn regarding their sins,", "[Because it has been made known", "Already from the marks of their faces.", "55:41]"],
        },
        { type: "verse", number: 40, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        {
          type: "verse",
          number: 41,
          lines: ["The sinners will be known by the marks", "Of their faces and they will be seized by", "Their forelocks and their feet [and will", "Be cast into the Fire]"],
        },
        { type: "verse", number: 42, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        { type: "verse", number: 43, lines: ["This is the Hell which the sinners used", "To deny;"] },
        {
          type: "verse",
          number: 44,
          lines: ["The beliers will be moving in", "The midst of the Hell Fire and", "The boiling water."],
        },
        { type: "verse", number: 45, continues: true, lines: ["Then which of the Bounties of your"] },
      ],
    },
    {
      bookPage: 1008,
      blocks: [
        { type: "verse", number: 45, continued: true, lines: ["Creator&Nurturer do you deny?"] },
        { type: "divider" },
        {
          type: "verse",
          number: 46,
          lines: ["But for him who feels awe from", "The High Stand of his Creator&Nurturer,", "And from standing before Him on", "The Day of Judgement, there will be two", "Gardens of Paradise:"],
        },
        { type: "verse", number: 47, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        { type: "verse", number: 48, lines: ["In the two Gardens are spreading", "Branches all over;"] },
        { type: "verse", number: 49, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        { type: "verse", number: 50, lines: ["In both of the two Gardens are two", "Springs pouring forth;"] },
        { type: "verse", number: 51, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        { type: "verse", number: 52, lines: ["In the Gardens there will be all kinds of", "Fruits in pairs;"] },
        { type: "verse", number: 53, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        {
          type: "verse",
          number: 54,
          lines: ["They lean against the sofas with", "Cushions made of thick silk; and fruits of", "The two gardens will be near and within", "Reach to their hands, [the branches are", "Low and bent down];"],
        },
        { type: "verse", number: 55, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
      ],
    },
    {
      bookPage: 1009,
      blocks: [
        {
          type: "verse",
          number: 56,
          lines: ["There are chaste damsels restraining", "Their eyes, no man or Jinn has touched", "Them before;"],
        },
        { type: "verse", number: 57, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        { type: "verse", number: 58, lines: ["Those damsels are in beauty like rubies", "And corals;"] },
        { type: "verse", number: 59, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        { type: "verse", number: 60, lines: ["Is there any reward for goodness", "Other than goodness?"] },
        { type: "verse", number: 61, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        { type: "divider" },
        { type: "verse", number: 62, lines: ["And besides those two, there are two", "Other Gardens;"] },
        { type: "verse", number: 63, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        { type: "verse", number: 64, lines: ["The colour of the two Gardens is", "Dark-green;"] },
        { type: "verse", number: 65, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        { type: "verse", number: 66, lines: ["In both of them there are two springs", "Pouring forth;"] },
        { type: "verse", number: 67, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
      ],
    },
    {
      bookPage: 1010,
      blocks: [
        { type: "verse", number: 68, lines: ["In both Gardens there are fruits,", "And date-palms and pomegranates;"] },
        { type: "verse", number: 69, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        { type: "verse", number: 70, lines: ["In the Gardens are maidens both nice", "And beautiful;"] },
        { type: "verse", number: 71, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        { type: "verse", number: 72, lines: ["Beautiful maidens have restrained", "Themselves in the tents;"] },
        { type: "verse", number: 73, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        {
          type: "verse",
          number: 74,
          lines: ["The beautiful maidens of the Gardens", "Are chaste and no man or Jinn has ever", "Touched them before;"],
        },
        { type: "verse", number: 75, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        { type: "verse", number: 76, lines: ["These people of the Gardens are", "Leaning on the sofas with green", "Cushions;"] },
        { type: "verse", number: 77, lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny?"] },
        {
          type: "verse",
          number: 78,
          lines: ["[O, Messenger!] Bless-Bestowing is", "The Name of your Creator&Nurturer", "The One Who is the Source-Owner of", "Sublimity, Honour and Bounty."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "One of Allāh’s Names of Outstanding Excellene; please see note on 1:1 for Ar-Rahmān." },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "Here Qur’ān is a verbal noun not a proper noun, so I have translated it." },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "With regards to 70:40 I have read Mashriq and Maghrib in plural." },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "See 4:139" },
      ],
    },
    {
      id: 5,
      blocks: [
        { kind: "p", text: "One of the Signs of the Resurrection Day (Commentators)" },
      ],
    },
  ],
};

export default surah;
