import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 65 · At-Talāq — book pages 1060–1064 (verses 1–12, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Page 1060 opens with the end of Sūrah 64; page 1064 opens with the end of verse 11 and verse 12 of this sūrah.
 */
const surah: SurahData = {
  number: 65,
  pages: [
    {
      bookPage: 1060,
      heading: {
        title: "At-Talāq",
        lines: ["(The Divorce)", "Revealed at Madīnah", "12 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["O, Messenger! When you men intend", "To divorce your wives, divorce them at", "Their Iddah or [prescribed time]{1} and", "Fear from the disobedience out of your Creator;", "And do not turn them out of the homes", "Of the husbands nor shall they leave", "The homes unless they are guilty of", "Some wrongdoings [i.e., lewdness]; and"],
          continues: true,
        },
      ],
    },
    {
      bookPage: 1061,
      blocks: [
        {
          type: "verse",
          number: 1,
          continued: true,
          lines: ["These are the prescribed limits of Allāh", "And any one who transgresses the limits", "Has done wrong to himself. You do not", "Know, may be by Allāh’s Will a new", "Situation appears;"],
        },
        {
          type: "verse",
          number: 2,
          lines: ["And when their prescribed term is over", "Either retain them with a proper", "Manner and kindness or part with them", "With fairness; and call two witnesses,", "From among yourselves known for their", "Justice to be witness and establish", "The evidence regarding Allāh’s", "Command; this admonition will be", "Accepted by a person who believes in", "Allāh and the Hereafter; and he who", "Regards piety in Allāh’s Way, He will", "Make a way for him to get out of", "The hard situation;"],
        },
        {
          type: "verse",
          number: 3,
          lines: ["And Allāh provides sustenance for a", "Believer from where he could not even", "Imagine. And a believer who puts his", "Trust in Allāh, He will make him free", "From the need of mankind, and Allāh’s", "Support is sufficient for a believer.", "Verily, Allāh will fulfill His Command:", "Indeed Allāh has appointed a due time", "With any ordainment for every thing."],
        },
        {
          type: "verse",
          number: 4,
          lines: ["For the women who have passed the", "Age of their monthly periods, if you have", "Your doubts, the prescribed time will be", "Three months; and for those who have", "No monthly courses yet, also three"],
          continues: true,
        },
      ],
    },
    {
      bookPage: 1062,
      blocks: [
        {
          type: "verse",
          number: 4,
          continued: true,
          lines: ["Months will do, for the prescribed time;", "and for the women who are pregnant", "Their term is the time that they give", "Birth. And a person who regards piety in", "The Path of Allāh, Allāh will make", "Things easy for him;"],
        },
        {
          type: "verse",
          number: 5,
          lines: ["This is Allāh’s Command which He has", "Sent down to you; and a person who", "Regards piety in obeying Allāh’s", "Commands, He will remove his evil", "Deeds from him and will expand His", "Reward for him;"],
        },
        {
          type: "verse",
          number: 6,
          lines: ["Lodge the women [in Iddah] where you", "Yourself live; and according to your", "Financial possibility do not harm", "Them by restricting the condition for", "Them; and if they are pregnant, pay", "Their expenses until they deliver their", "Burden; and if they suckle the baby their", "Wage should be paid to them; make", "The affair of the baby by mutual", "Agreement and consultation, and if you", "Find some disagreement over suckling of", "The baby, then you should hire a nurse", "To suckle the baby;"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["To give alimony to the divorced woman:", "The rich man should spend according to", "His ability and a man with limited", "Budget, he should spend according to", "What Allāh has given him; Allāh does", "Not put any burden on man beyond", "What he has been given of ability; and Allāh", "Will grant ease after each hardship."],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 1063,
      blocks: [
        {
          type: "verse",
          number: 8,
          lines: ["How many populations of the towns", "Who turned away from Allāh’s", "Command and disobeyed His", "Messengers, so We did call them to a", "Severe account and chastised them in", "This world and with a horrible Torment;"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["So they tasted the evil end of their", "Wrongdoings and the consequences of", "Their deeds, also for them there will be", "A total loss in the Hereafter."],
        },
        {
          type: "verse",
          number: 10,
          lines: ["Allāh has prepared for the disbelievers a", "Severe Torment; so regard piety in", "Obeying Allāh’s Commands, O, you men", "Of reason who have accepted Islām!", "Indeed Allāh has sent down to you a", "Reminder; [it is mainly a Grace and", "Guidance for the pious. 2:2]"],
        },
        {
          type: "verse",
          number: 11,
          lines: ["And also Allāh has sent a Messenger", "Who recites to you Allāh’s Words of", "Revelation which are Clear and Explicit", "So that he may bring out those Muslims", "And good-doers who have potentiality of", "Becoming good believers from", "The darkness [of ambiguity and doubt]", "To the light of a deep Faith;{2}"],
          continues: true,
        },
      ],
    },
    {
      bookPage: 1064,
      blocks: [
        {
          type: "verse",
          number: 11,
          continued: true,
          lines: ["And whoever believes in Allāh and", "Does righteous deeds, He will", "Admit him into Gardens in which flow", "Streams, to dwell therein forever. Allāh", "Has indeed granted for the believers", "An Excellent Provision."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 12,
          lines: ["Allāh is the One Who created Seven", "Heavens and of the earth the same", "Number. He descends His Command to", "Them and it is obeyed by all, that you", "People may know Allāh is Powerful over", "All things; and verily, Allāh’s Embracing", "Knowledge encompasses all beings and", "Things."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        {
          kind: "p",
          text: "A period during which a divorced woman may not marry another man and it starts immediately after woman is clean from her menses and it covers three monthly courses. The Divine Purpose behind this Decree comprises at least two benefits: (1) to make clear if there is any unborn child (2) to give respite if there is any possibility for reconciliation.",
        },
      ],
    },
    {
      id: 2,
      blocks: [
        {
          kind: "p",
          text: "These two Words of Revelation, 10 and 11, stand confirming to 14 and 17 of Hujarāt Sūrah [see 49:14 and 17] They make clear the discrimination between a Muslim by the lips and a true believer of Islām by the heart; i.e., a person who regards piety by obeying Allāh’s Commands and ponders about Allāh’s Words as revealed in the Holy Qur’ān, he can hope to be delivered from the ‘darkness’ of ambiguity and doubt which stand on the way of his Muslimship towards perfection. Unless the reader of these āyāt is not helped by some explanation he will feel confounded with the question raisd in his mind about ‘the darkness’ (Zulamāt), once a Muslim is the center of the discourse.",
        },
      ],
    },
  ],
};

export default surah;
