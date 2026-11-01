import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 64 · At-Taghābun — book pages 1056–1060 (verses 1–18, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Page 1056 opens with the end of Sūrah 63; page 1060 opens with the last two verses of this sūrah.
 */
const surah: SurahData = {
  number: 64,
  pages: [
    {
      bookPage: 1056,
      heading: {
        title: "At-Taghābun",
        lines: ["(The Day of Alas and Remorse)", "Revealed at Madīnah", "18 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["All creatures in the heavens and on", "The earth Celebrate Allāh’s Attributes", "And His Absolute Purity. To Him", "Belongs the Dominion [of the heavens", "And the earth and what is between", "Them]; thanksgiving and adoration of", "The worshippers is due only to Him.", "Verily, Allāh is Powerful over all things;"],
        },
        {
          type: "verse",
          number: 2,
          lines: ["Allāh is the One Who created you; and", "Then some of you people are", "Disbelievers and some are believers and", "Allāh is the Seer of what you do;"],
        },
        {
          type: "verse",
          number: 3,
          lines: ["Allāh has created the heavens and", "The earth based on the Divine", "Necessity and Truth; and He is", "The One Who gave you shape, a good"],
          continues: true,
        },
      ],
    },
    {
      bookPage: 1057,
      blocks: [
        { type: "verse", number: 3, continued: true, lines: ["One [in your mothers’ wombs] and to", "Him is the return of all;"] },
        {
          type: "verse",
          number: 4,
          lines: ["Allāh through His Embracing", "Knowledge knows about all that are in", "The heavens and on the earth; and he", "Knows what you conceal and what you", "Disclose; and Allāh is the Knower of", "The secrets of the hearts."],
        },
        {
          type: "verse",
          number: 5,
          lines: ["Has not the story reached you of those", "Nations who lived before you and", "Disbelieved? So they tasted", "The Chastisement as the recompense of", "Their deeds; and for them will also be", "The painful punishment in the Hereafter;"],
        },
        {
          type: "verse",
          number: 6,
          lines: ["That punishment fell upon them because", "Messengers came to them with Signs", "And Miracles but they said: “Shall men", "Like ourselves be in a position to guide", "Us?” So they fell into disbelief and", "Turned away from the Truth; Allāh", "Declared Himself Free from the need of", "Their worship: And Allāh is", "The Independent Commender of", "Goodness of Faith [yet Free from the", "Need of the Worship of the commended", "Ones.]"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["The disbelievers think that they will not", "Be raised up in the Hereafter. Say", "[O, Messenger!]: “I swear by my", "Creator&Nurturer that you shall surely", "Be raised up and you shall be informed"],
          continues: true,
        },
      ],
    },
    {
      bookPage: 1058,
      blocks: [
        { type: "verse", number: 7, continued: true, lines: ["About your deeds in this world and this", "Will be quite easy for Allāh.”"] },
        {
          type: "verse",
          number: 8,
          lines: ["So believe in Allāh and in His", "Messenger and in the Light{1} which We", "Have sent down. And [know that] Allāh", "Is Well Informed about what you do;"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["The Day of Gathering when Allāh", "Gathers you all, that will prove to be", "The Day of Alas and Remorse [for those", "Who cheated out themselves by doing", "Wrong.] And one who believes in Allāh", "And does righteous deeds, Allāh will", "Blot out his sins and admits him to", "The Gardens in the midst of which flow", "Streams, to dwell therein forever and", "That will be the Great Achievement."],
        },
        {
          type: "verse",
          number: 10,
          lines: ["And those who disbelieved and denied", "Our Signs and Miracles, they will be", "The inhabitants of the Hell Fire and will", "Dwell therein forever; and worst indeed is", "That destination!"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 11,
          lines: ["No disaster falls upon a people but by", "Allāh’s Command; and whoever believes", "In Allāh, He will guide his heart;", "And Allāh is the Absolute Knower of all", "Things."],
        },
        { type: "verse", number: 12, lines: ["Obey Allāh and obey His Messenger", "And if you people turn away from the"], continues: true },
      ],
    },
    {
      bookPage: 1059,
      blocks: [
        { type: "verse", number: 12, continued: true, lines: ["Truth know that Our Messenger is only", "In charge of conveying the Divine", "Message publicly;"] },
        { type: "verse", number: 13, lines: ["There is no God but Allāh, so in Allāh", "Alone should the believers put their", "Trust."] },
        { type: "divider" },
        {
          type: "verse",
          number: 14,
          lines: ["O, you who believe! Verily, some of your", "Wives and your children are enemies of", "You; [those who out of selfish", "Motivations bar you from migration or", "Fighting in Allāh’s Path] so beware of", "Them but if they changed their mind", "And followed you in obeying Allāh’s", "Commands, then forgive them and", "Overlook their faults; since verily, Allāh", "Is the Merciful Forgiving [and a believer", "Has to follow Allāh’s Line];"],
        },
        {
          type: "verse",
          number: 15,
          lines: ["Your wealth and your children are only", "Means of trial in this world: By them", "You will be tried [because you are highly", "Attached to them] however with Allāh", "Is the Great Reward;"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["Fear the disobedience from Allāh’s", "Commands as much as you can; listen", "To His Commands and obey; and spend", "In charity; you will profit from these", "Admonitions. And whoever is delivered", "From the greed of his own", "Passionate-self, he is indeed of", "Those who receive salvation;"],
        },
      ],
    },
    {
      bookPage: 1060,
      blocks: [
        {
          type: "verse",
          number: 17,
          lines: ["If you present to Allāh a goodly loan [by", "Spending in charity and giving to", "The needy] Allāh will pay it back to you", "Double; and will grant you Forgiveness", "And Allāh is the Appreciative", "Forebearing."],
        },
        { type: "verse", number: 18, lines: ["And Allāh is the only Knower of", "The Unseen and the Visible; and He is", "The Source-Wisdom Sovereign."] },
      ],
    },
  ],
  footnotes: [{ id: 1, blocks: [{ kind: "p", text: "The Holy Qur’ān" }] }],
};

export default surah;
