import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 66 · At-Tahrīm — book pages 1064–1068 (verses 1–12, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Verse 1 carries an insertion across the page break, so page 1065 opens with its closing bracket.
 * Page 1064 opens with the end of Sūrah 65, above the heading of this sūrah.
 */
const surah: SurahData = {
  number: 66,
  pages: [
    {
      bookPage: 1064,
      heading: {
        title: "At-Tahrīm",
        lines: ["(To Hold Forbidden)", "Revealed at Madīnah", "12 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["O, Messenger! Why do you hold", "Forbidden, what Allāh has made lawful", "For you? You did this in order to please", "Your wives and Allāh is the Merciful", "Forgiving, [so He will forgive your"],
          continues: true,
        },
      ],
    },
    {
      bookPage: 1065,
      blocks: [
        { type: "verse", number: 1, continued: true, lines: ["Mistake.]{1}"] },
        {
          type: "verse",
          number: 2,
          lines: ["Indeed Allāh has passed a Decree by", "Which you expiate for your oaths and", "Allāh is your Guardian and He is", "The Knowing Decreer.{2}"],
        },
        {
          type: "verse",
          number: 3,
          lines: ["Once the Holy Messenger disclosed a", "Matter in confidence to one of his wives", "And she reported it to another; so Allāh", "Informed him; and made known a", "Part of it and passed over a part; so", "When the Messenger told her about", "What he had known, she said: “Who", "Informed you of this?” He said:", "“Informed me, the Informed Knower of", "Every thing.”"],
        },
        {
          type: "verse",
          number: 4,
          lines: ["[Then they were addressed:] If you two", "[Wives of the Messenger] turn in", "Repentance to Allāh, [it is for your own", "Benefit] since your hearts are deviated;", "And if you back up each other against", "Him [you will be the losers] since Allāh", "Is his Guardian; and Jebrāīl and", "The Righteous of the believers{3} are his", "Friends and the Angels will all support", "Him;"],
        },
      ],
    },
    {
      bookPage: 1066,
      blocks: [
        {
          type: "verse",
          number: 5,
          lines: ["And if he gives you a divorce, by Allāh’s", "Favour he will have better wives in your", "Place who will be submissive,", "Good believer, obedient, constant", "Invoker to Allāh and willing to fast;", "[Having such qualifications], they may be", "From among widows or virgins."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 6,
          lines: ["O, you who believe! Secure yourselves", "And your households from the Fire that", "Its fuel shall be men and stones; over", "Which shall be guards of Angels, they", "Are very harsh and stern and they are", "Dutiful to Allāh’s Commands; they act", "Upon what they have been Commanded;"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["And they will say to the disbelievers:", "“O, You who disbelieved! Do not render", "Many excuses today; you shall be", "Requited for what you used to do in", "The world.”"],
        },
        {
          type: "verse",
          number: 8,
          lines: ["O, you who believe! [If you desire to be", "Immune from the bad end, then avoid", "Wrongdoing while you are in this world]", "Submit your repentance to Allāh with a", "Sincere Repentance;{4} your Creator may", "Remove from you, your sins and will", "Admit you to the Gardens in the midst of", "Which streams flow. On the Day of", "Judgement the Messenger and his"],
          continues: true,
        },
      ],
    },
    {
      bookPage: 1067,
      blocks: [
        {
          type: "verse",
          number: 8,
          continued: true,
          lines: ["Believing followers are not disgraced by", "Allāh: Their light will go ahead of them", "And on their right side; and they pray:", "“O, our Creator&Nurturer! Perfect for", "Us our light and grant us Forgiveness;", "Verily, You are Powerful over all", "Things.”"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["O, Messenger! Fight against", "The disbelievers and the hypocrites and", "Be harsh against them; and their abode", "Will be Hell; and evil is their", "Destination."],
        },
        {
          type: "verse",
          number: 10,
          lines: ["Allāh has set forth examples among", "Those who disbelieved [of women]: They", "Were the wife of Nūh and the wife of Lūt", "They married two of Our righteous", "Worshippers and they both betrayed their", "Husbands by opposing their Mission and", "Their Faith. But their husbands [though", "Messengers] could not intercede for", "Them against Allāh’s Will, and they", "Were told: “Enter the Fire along with", "Those who enter!”"],
        },
        {
          type: "verse",
          number: 11,
          lines: ["And Allāh has set forth examples among", "Those who believed [of the women]:", "The wife of Firown when she prayed:", "“O, My Creator&Nurturer! Please", "Construct for me a home in the Paradise", "In Your Presence and save me from", "Firown and His wrongdoings and save", "Me from this people who are all", "Wrongdoers.”"],
        },
      ],
    },
    {
      bookPage: 1068,
      blocks: [
        {
          type: "verse",
          number: 12,
          lines: ["And also Maryam daughter of Imrān", "Who was a chaste woman; and We", "Breathed in her a spirit from Our", "Own Presence; and she testified to", "The Truth of her Creator’s Words of", "Revelation and His Books; and she was", "Of the obedient worshippers of Allāh."],
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
          text: "Zainab daughter of Jahsh, one of the Holy Messenger’s wives used to offer a drink of honey to the Messenger: ‘Āyeshah and Hafasah, two other wives, out of envy made a conspiracy against Zainab; so they both said to the Holy Messenger that he smelt of a foul smell which they believed it came from the honey. The Holy Messenger who appreciated good scent and smell took an oath to forbid honey for himself, so this Sūrah was revealed to him.",
        },
      ],
    },
    { id: 2, blocks: [{ kind: "p", text: "See 5:89 for the expiation of the oaths." }] },
    { id: 3, blocks: [{ kind: "p", text: "Imām Alī (AS)" }] },
    {
      id: 4,
      blocks: [
        {
          kind: "p",
          text: "Nassūh Repentance, is a sincere and true repentance presented to Allāh, the Repentance-Accepter, along with a covenant for quiting the disbelief or any other sins, permanently.",
        },
      ],
    },
  ],
};

export default surah;
