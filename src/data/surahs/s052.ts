import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 52 · At-Tūr — book pages 982–987 (verses 1–49, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 52,
  pages: [
    {
      bookPage: 982,
      heading: {
        title: "At-Tūr",
        lines: ["(The Tūr Mount)", "Revealed at Makkah", "49 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["By the Tūr Mount{1}"] },
        { type: "verse", number: 2, lines: ["And by the Book which is [revealed and]", "Written,"] },
        { type: "verse", number: 3, lines: ["In a published parchment;"] },
        { type: "verse", number: 4, lines: ["And by the Bait-ul-Mamūr{2}"] },
        { type: "verse", number: 5, lines: ["And by the lofty ceiling of the sky"] },
        { type: "verse", number: 6, lines: ["And by the sea which is filled with Fire{3}"] },
        {
          type: "verse",
          number: 7,
          lines: ["[By all these oaths] That the Promised", "Chastisement of your Creator&Nurturer", "Will surely take over the wrongdoers;"],
        },
      ],
    },
    {
      bookPage: 983,
      blocks: [
        { type: "verse", number: 8, lines: ["And there is no power that can avert it;"] },
        {
          type: "verse",
          number: 9,
          lines: ["[The event will happen] on the Day", "When the heaven will shake", "Tremendously;"],
        },
        { type: "verse", number: 10, lines: ["And the mountains will move with rapid", "Movement;"] },
        { type: "verse", number: 11, lines: ["On that Day woe to the beliers of", "The Truth!"] },
        {
          type: "verse",
          number: 12,
          lines: ["Those who are busy with Falsehood and", "Vain talks about the Truth, [the Holy", "Qur’ān];"],
        },
        { type: "verse", number: 13, lines: ["On the Day when they are dragged", "Towards the Hell Fire,"] },
        { type: "verse", number: 14, lines: ["[The Hell-guards will say to them:] “This", "Is the Fire which you belied it!"] },
        { type: "verse", number: 15, lines: ["“Is this Fire, magic or your eyes are", "Unable to see it?"] },
        {
          type: "verse",
          number: 16,
          lines: ["“Enter you therein! Whether you can", "Bear it or not it is all the same; you are", "Receiving the recompense for your", "Deeds.”"],
        },
        { type: "divider" },
        { type: "verse", number: 17, lines: ["Indeed the righteous will be in", "The Gardens and among the bounties,"] },
      ],
    },
    {
      bookPage: 984,
      blocks: [
        {
          type: "verse",
          number: 18,
          lines: ["And they are rejoicing for the blessings", "Which they have been bestowed by", "Allāh and that their Creator&Nurturer", "Has secured them from the Torment of", "The Fire."],
        },
        {
          type: "verse",
          number: 19,
          lines: ["[The Angels will say to them:] “Eat and", "Drink pleasantly due to your  good", "Deeds in the world.”"],
        },
        {
          type: "verse",
          number: 20,
          lines: ["They will lean on sofas which are", "Arranged in ranks; and We shall wed", "Them with the Angels of the Paradise,", "Those with beautiful, wide eyes;{4}"],
        },
        {
          type: "verse",
          number: 21,
          lines: ["And those believers who have trained", "Believing children We shall join to them", "Their children; and We do not decrease", "Any reward of their deeds; and every", "One is in pledge of his own deeds."],
        },
        { type: "verse", number: 22, lines: ["And We shall bestow on them of fruits", "And meat as they desire;"] },
        {
          type: "verse",
          number: 23,
          lines: ["They exchange cups of pure drinks", "Which neither cause intoxication nor", "Vain talks;"],
        },
        {
          type: "verse",
          number: 24,
          lines: ["And around them are boys who serve", "Them ; they are handsome like pearl", "Covered in its shell;"],
        },
        {
          type: "verse",
          number: 25,
          lines: ["Some of the people of the Paradise turn", "To each other and ask mutual questions:"],
        },
      ],
    },
    {
      bookPage: 985,
      blocks: [
        {
          type: "verse",
          number: 26,
          lines: ["Some of them say: “We had our anxiety", "Regarding the Resurrection Day, when", "We were among our households,"],
        },
        { type: "verse", number: 27, lines: ["“But Allāh Favoured us and secured", "Us from the Chastisement of the Fire,”"] },
        {
          type: "verse",
          number: 28,
          lines: ["“Indeed we were constant-invokers of", "Allāh and verily, He is the Grace", "Bestowing Benevolent.”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 29,
          lines: ["So [O, Messenger!] admonish people;", "And by Allāh’s Grace you are neither a", "Soothsayer, nor a mad man;"],
        },
        { type: "verse", number: 30, lines: ["They say: “He is a poet whom we wait", "For his death.”"] },
        {
          type: "verse",
          number: 31,
          lines: ["Say: “You wait, and I am waiting too", "[For the victory of Islām as well as", "Perdition of the disbelief].”"],
        },
        {
          type: "verse",
          number: 32,
          lines: ["Do their false visions make them to say", "Such things or is it because they are", "A rebellious people by nature?"],
        },
        {
          type: "verse",
          number: 33,
          lines: ["Or do they say that Mohammad has", "Forged the Qur’ān? The very truth is that", "They lack Faith;"],
        },
        {
          type: "verse",
          number: 34,
          lines: ["If they are truthful and Qur’ān is", "The outcome of the mind of a human", "Being, then they should produce", "Something of the like;"],
        },
      ],
    },
    {
      bookPage: 986,
      blocks: [
        { type: "verse", number: 35, lines: ["Were they created out of nothing", "Or were they the Creator of themself?"] },
        {
          type: "verse",
          number: 36,
          lines: ["Have they created the heavens and", "The earth? No, they lack Faith and", "Certainty;"],
        },
        {
          type: "verse",
          number: 37,
          lines: ["Do they own the treasures of your", "Creator&Nurturer? Or are they", "The authorities over all things?"],
        },
        {
          type: "verse",
          number: 38,
          lines: ["Is there a ladder for them that they can", "Climb by it to the heavens and listen to", "The secret talks of the Unseen? Then", "They should be able to produce a solid", "Proof of what they have heard;"],
        },
        { type: "verse", number: 39, lines: ["Are daughters for Allāh and sons for", "You?"] },
        {
          type: "verse",
          number: 40,
          lines: ["Have you asked for conveying your", "Message a heavy wage from them which", "Being under a heavy burden of debt", "They cannot pay?"],
        },
        { type: "verse", number: 41, lines: ["Is with them the secrets of the Unseen", "And they are busy writing them down?"] },
        {
          type: "verse",
          number: 42,
          lines: ["Are they making a plot against you?", "Whereas the disbelievers [by Allāh’s", "Command] are encircled in their own", "Plot;"],
        },
        {
          type: "verse",
          number: 43,
          continues: true,
          lines: ["Do they have except Allāh the One, a", "God to take shelter in him?"],
        },
      ],
    },
    {
      bookPage: 987,
      blocks: [
        {
          type: "verse",
          number: 43,
          continued: true,
          lines: ["Allāh is the Absolute Pure and above", "The idea of having a partner;"],
        },
        {
          type: "verse",
          number: 44,
          lines: ["These disbelievers are so stubborn and", "Self-deceit that even if they see a piece", "Of the sky falling down, they say: “This", "Is only an accumulated piece of cloud.”"],
        },
        {
          type: "verse",
          number: 45,
          lines: ["So [O, Messenger] leave these pagans to", "Themselves until they encounter their", "Day wherein they shall be thunderstruck;"],
        },
        {
          type: "verse",
          number: 46,
          lines: ["The Day when their plotting does not", "Avail them at all; and they shall not be", "Helped and protected by any one."],
        },
        {
          type: "verse",
          number: 47,
          lines: ["And verily, for those who do wrong,", "There is a punishment in this world and", "Before the Hereafter, but most of them", "Do not understand."],
        },
        {
          type: "verse",
          number: 48,
          lines: ["[O, Messenger] Now be patient while", "Conveying the Message of your", "Creator&Nurturer; for indeed you are", "Under Our Supervision [and you are well", "Guided and protected]; and Celebrate", "The Absolute Purity of your", "Creator&Nurturer and say the", "Remembrance of praise and", "Thanksgiving when you stand for", "Midnight prayer;"],
        },
        {
          type: "verse",
          number: 49,
          lines: ["And also for part of the night Celebrate", "Allāh’s Absolute Purity as well as at", "The setting of the stars [i.e., in the early", "Hour of the dawn]."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "Where Mūssā (AS) received the Divine Revelations directly." },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "It is a place in the heavens which is located under Allāh’s Arsh and is paralell to Ka’bah and the Angels pay pilgrimage to it." },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "See 82:3" },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "This is only for the bachlors; those who have righteous family will join them in the Paradise, [21]" },
      ],
    },
  ],
};

export default surah;
