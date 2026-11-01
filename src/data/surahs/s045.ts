import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 45 · Al-Jāthiyah — book pages 929–936 (verses 1–37, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 45,
  pages: [
    {
      bookPage: 929,
      heading: {
        title: "Al-Jāthiyah",
        lines: ["(Bowing the Knee)", "Revealed at Makkah", "37 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Hā. Mīm{1}"] },
        {
          type: "verse",
          number: 2,
          lines: ["The Descending of this Holy Book is by", "Allāh the Source-Wisdom", "Supremepower."],
        },
        {
          type: "verse",
          number: 3,
          lines: ["Verily, in the heavens and the earth are", "Signs of Allāh’s Power for the believers;"],
        },
        {
          type: "verse",
          number: 4,
          lines: ["And in the creation of you mankind and", "What Allāh has scattered of moving", "Creatures on the earth, there are Signs of", "Allāh’s Power for people who have", "Attained Certainty in Faith;"],
        },
        {
          type: "verse",
          number: 5,
          continues: true,
          lines: ["And in the difference between night and", "Day; and the rain that Allāh sends down", "From the sky and gives life thereby", "To the earth after it is withered and dry;"],
        },
      ],
    },
    {
      bookPage: 930,
      blocks: [
        {
          type: "verse",
          number: 5,
          continued: true,
          lines: ["And in the blowing of the winds, [in all", "These] are Signs of Allāh’s Power for", "Men of reason."],
        },
        {
          type: "verse",
          number: 6,
          lines: ["[O, Messenger] These are Words of", "Revelation that We recite to you from", "The Source of Truth; then in what", "Statement after Allāh’s Words do these", "People believe?"],
        },
        { type: "verse", number: 7, lines: ["Woe to the sinful liar,"] },
        {
          type: "verse",
          number: 8,
          lines: ["Who listens to Allāh’s Words of", "Revelation which is recited to him, then", "He arrogantly persists in turning away", "From the Truth as if he has not heard", "Them; so [O, Messenger] give him tidings", "Of a painful Chastisement;"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["And when he gets to know about some", "Of Our Signs he makes redicule of", "Them; for such like him, there will be a", "Disgracing Chastisement;"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["Such people will be faced with Hell and", "Whatever they have collected of worldly", "Wealth and the deities that they", "Have taken besides Allāh, will be of no", "Use to them and will not avail them", "Against the Divine Punishment; and for", "Them will be a Grave Chastisement;"],
        },
        {
          type: "verse",
          number: 11,
          continues: true,
          lines: ["This Holy Qur’ān is a True Guidance", "For mankind; and those who have", "Denied the Revelations of their", "Creator&Nurturer, for them will be a"],
        },
      ],
    },
    {
      bookPage: 931,
      blocks: [
        { type: "verse", number: 11, continued: true, lines: ["Chastisement, a Painful Chastisement."] },
        { type: "divider" },
        {
          type: "verse",
          number: 12,
          lines: ["Allāh is the One Who has subjected", "The sea to your benefit since the ships", "Can sail through it in order that you", "May seek sustenance by travelling for", "Trade and that you may be thankful to", "His Favour;"],
        },
        {
          type: "verse",
          number: 13,
          lines: ["And Allāh has subjected for you", "Whatever is in the heavens and on", "The earth; and indeed in this are Signs", "Of Allāh’s Power for those who", "Ponder."],
        },
        {
          type: "verse",
          number: 14,
          lines: ["[O, Messenger!] Say to those who believe", "In Allāh’s Oneness to forgive those who", "Do not hope for the Days of Allāh [days", "Of the victory of Faith over Disbelief],", "Since it is with Allāh to recompense", "People, based on their deeds:"],
        },
        {
          type: "verse",
          number: 15,
          lines: ["If a person does good deeds, it is for his", "Own benefit and if he does evil, it will", "Be against himself, since at the end all", "Of you will be returned to your Creator", "[And will receive the due recompense]."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 16,
          continues: true,
          lines: ["And indeed We gave to the Children of", "Israīl the Book, the kingdom and", "The prophethood and We gave them", "Good and pure things for their"],
        },
      ],
    },
    {
      bookPage: 932,
      blocks: [
        {
          type: "verse",
          number: 16,
          continued: true,
          lines: ["Sustenance and We preferred them", "Above all people of their own time;"],
        },
        {
          type: "verse",
          number: 17,
          lines: ["And We granted them Clear and", "Explicit Revelations and Messages{2} and", "They did not have any problem due to", "Understanding Messages until some of", "Them fulfilled [i.e., the Appearance of", "The Messenger of Islām] so they fell into", "Dispute among themselves out of envy", "And rebellion. Verily, your", "Creator&Nurturer will judge among", "Them on the Day of Judgement about", "Those matters in which they differed;"],
        },
        {
          type: "verse",
          number: 18,
          lines: ["Then [O, Messenger!] We appointed you", "The Religious-law Guide under Our", "Command, so follow the Command and", "Do not conform to the desire of those", "Who have no knowledge;"],
        },
        {
          type: "verse",
          number: 19,
          lines: ["They will not be able to avail you", "Against Allāh’s Will if He decides", "To punish you. And indeed", "The disbelievers are protectors of one", "Another and Allāh is the Guardian and", "The Protector of the pious."],
        },
        {
          type: "verse",
          number: 20,
          lines: ["This Qur’ān is a sight-giving Book for", "Mankind and it is a Guidance and Grace", "For the believers who have attained", "Certainty in their Faith."],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 933,
      blocks: [
        {
          type: "verse",
          number: 21,
          lines: ["Do those who do evil deeds presume", "That We shall consider them equal with", "Those who believe and do righteous", "Deeds in this world; and equal will be", "Their life and their death? This is an", "Evil judgement;"],
        },
        {
          type: "verse",
          number: 22,
          lines: ["And Allāh has created the heavens and", "The earth based on Truth, and", "The Divine Necessity; and each", "Person will receive his recompense for", "What he has done [good or evil] and no", "One will be dealt with unjustly."],
        },
        {
          type: "verse",
          number: 23,
          lines: ["[O, Messenger!] Have you observed", "The one who takes his dominating", "Carnal-self as his god and follows its", "Orders? So Allāh has knowingly left", "Such person in his error and has sealed", "His ears and his heart and has put a", "Cover on his sight [that he should not", "Hear, understand and see the Truth.]", "Then who is there but Allāh to guide", "Such a person? Will you people not", "Reflect and take admonition?"],
        },
        {
          type: "verse",
          number: 24,
          lines: ["And the Materialistic Disbelievers say:", "“There is nothing but the life of this", "World; we die and another group come", "To live and nothing destroys us but", "“Time”.” They have no knowledge of", "The Truth, they only depend on", "Conjecture;"],
        },
        {
          type: "verse",
          number: 25,
          continues: true,
          lines: ["And when Our Explicit Words of", "Revelation [concerning the Resurrection", "Day] is recited to them their only"],
        },
      ],
    },
    {
      bookPage: 934,
      blocks: [
        {
          type: "verse",
          number: 25,
          continued: true,
          lines: ["Reaction and argument is that they say:", "“So bring back to life our ancestors if", "You are telling the truth!”"],
        },
        {
          type: "verse",
          number: 26,
          lines: ["Say [O, Messenger!]: “Allāh is the One", "Who gives you life and causes you", "Death and He will gather you on the Day", "Of Judgement about which there is", "No doubt; and indeed most of mankind", "Do not understand.”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 27,
          lines: ["And to Allāh belongs the Dominion of", "The heavens and the earth; and on", "The Day that the Hour of Reckoning", "Shall start, the followers of Falsehood", "Shall be the real losers;"],
        },
        {
          type: "verse",
          number: 28,
          lines: ["And on that Day, you [O, Messenger]", "Shall see all people bowing the knee.", "Each nation will be called to its Book of", "Deeds [recorded by the Angels] and it", "Will be stated to them: “Today you shall", "Be recompensed for what you used to", "Do;"],
        },
        {
          type: "verse",
          number: 29,
          lines: ["“And this is Our Book which speaks", "Against you according to justice; indeed", "We used to record what you used to do”"],
        },
        {
          type: "verse",
          number: 30,
          lines: ["On the Day those who believed and did", "Good deeds, their Creator&Nurturer will", "Grant them of His Grace and that is", "The Great Achievement;"],
        },
      ],
    },
    {
      bookPage: 935,
      blocks: [
        {
          type: "verse",
          number: 31,
          lines: ["And to those who disbelieved, Allāh will", "State: “Were not My Revelations", "Recited to you? But you turned away", "Arrogantly; you were a people", "Given to sin;"],
        },
        {
          type: "verse",
          number: 32,
          lines: ["“And when it was said to you: “Verily,", "The Promise of Allāh is True and there", "Is no doubt about the coming of", "The Hour”, you used to say: “We do not", "Know what does Hour mean, We do not", "Think it but as a conjecture; and we", "Have no firm belief in it.”"],
        },
        {
          type: "verse",
          number: 33,
          lines: ["Then will appear to them their evil", "Deeds and they will be encircled by that", "Which they used to mock at;"],
        },
        {
          type: "verse",
          number: 34,
          lines: ["And it will be stated to them: “This Day", "We will neglect you as you neglected", "The Meeting of this Day of yours; and", "Your abode is the Fire and you will have", "No one to help you;"],
        },
        {
          type: "verse",
          number: 35,
          lines: ["“This Chastisement came to you because", "You used to take Allāh’s Revelation for", "Joke; and you were deceived by the life", "Of the world.” So from then on, they", "Shall not be permitted to leave the Hell", "And they shall have no chance for", "Repentance."],
        },
        {
          type: "verse",
          number: 36,
          continues: true,
          lines: ["So thanksgiving and adoration of", "The worshippers is due only to Allāh,", "The Creator of the heavens and"],
        },
      ],
    },
    {
      bookPage: 936,
      blocks: [
        {
          type: "verse",
          number: 36,
          continued: true,
          lines: ["The earth, and the Creator of the worlds", "And their inhabitants;"],
        },
        {
          type: "verse",
          number: 37,
          lines: ["And to Him belongs the Absolute", "Grandeur in the heavens and on", "The earth; and He is the Supremepower", "Sovereign."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "See note on 2:1" },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "In the Taurāt" },
      ],
    },
  ],
};

export default surah;
