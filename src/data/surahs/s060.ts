import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 60 · Al-Mumtahanah — book pages 1042–1046 (verses 1–13, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 */
const surah: SurahData = {
  number: 60,
  pages: [
    {
      bookPage: 1042,
      heading: {
        title: "Al-Mumtahanah",
        lines: ["(The Examined Woman)", "Revealed at Madīnah", "13 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["O, you who believe! Do not take My", "Enemies and your enemies as", "Your friends, by establishing intimate", "Relationship with them whereas they", "Disbelieve in what has come to you of", "The Truth, [the Holy Qur’ān]; they have", "Expelled your Messenger and yourselves", "From your homeland simply because", "You believe in Allāh, your Creator. If", "you have come forth to fight in My Way,", "To seek My Pleasure but why do you", "Establish friendship with them in", "Secret while I am the Supreme Knower", "Of what you conceal and what you", "Reveal? So whoever among you", "Establishes friendship with", "The disbelievers, has gone astray", "indeed;"],
        },
        { type: "verse", number: 2, lines: ["If they gain any chance against you, they"], continues: true },
      ],
    },
    {
      bookPage: 1043,
      blocks: [
        {
          type: "verse",
          number: 2,
          continued: true,
          lines: ["Will treat you with hostility and will", "Stretch out their hands and their", "Tongues against you; and they are eager", "To turn you to disbelief;"],
        },
        {
          type: "verse",
          number: 3,
          lines: ["On the Day of Resurrection neither your", "Relatives nor your children are of any", "Benefit to you. Allāh will separate", "You [because it is the Day of Separation", "Between the believers and", "The disbelievers]; and Allāh is the Seer", "Of all you do;"],
        },
        {
          type: "verse",
          number: 4,
          lines: ["Indeed Ibrāhīm and those with him", "Make an excellent example for you [in", "The Path of Monotheism]{1} when they", "Said to their people: “We detest you and", "What you worship instead of Allāh; we", "Reject you and between us there will be", "Hatered and hostility forever unless you", "Believe in Allāh the One only.”", "The exception was the promise of", "Ibrāhīm to his father when said to him:", "“Verily, I will ask Allāh’s Forgiveness for", "You but I myself have no power before", "Allāh at all, the Decision remains with", "Him.” [Then Ibrāhīm and those with him", "Prayed:] “O, our Creator&Nurturer! We", "Put our trust in You and to You we", "Turn in repentance and to You is our", "Final Destination;"],
        },
        { type: "verse", number: 5, lines: ["“O, our Creator&Nurturer! Do not make", "Us a trial for the disbelievers, have"], continues: true },
      ],
    },
    {
      bookPage: 1044,
      blocks: [
        { type: "verse", number: 5, continued: true, lines: ["Mercy upon us; verily, You are", "The Source-Wisdom Supremepower.”"] },
        {
          type: "verse",
          number: 6,
          lines: ["Certainly, in them [Ibrāhīm and those", "With him] there is a good example", "To follow, for any of you who hopes in", "The Meeting with Allāh and the Day of", "Resurrection; and whoever that turns", "Away from the Truth, [he should know", "That] Allāh is the Independent", "Commender of Goodness: [Free from", "The need of being obeyed by the warned", "Ones]."],
        },
        {
          type: "verse",
          number: 7,
          lines: ["Perhaps Allāh will [in future] cause", "Friendship between you and those whom", "You hold as enemies{2} since Allāh is", "The Absolute Power and Allāh is also", "The Merciful Forgiving."],
        },
        {
          type: "verse",
          number: 8,
          lines: ["Allāh dose not forbid you having", "Relationship with those who have not", "Fought you on the account of Religion", "And have not driven you out of your", "Homeland and He does not forbid you", "From doing good and regarding justice", "To them: Verily, Allāh likes those who", "Consider justice towards other people;"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["But Allāh forbids you only from having", "Friendship with those who fought", "You on the account of Religion and", "Drove you out of your homeland; and"],
          continues: true,
        },
      ],
    },
    {
      bookPage: 1045,
      blocks: [
        {
          type: "verse",
          number: 9,
          continued: true,
          lines: ["Helped one another in driving you out;", "You are forbidden to have friendly", "Relation with them; and whoever among", "You does so, then he is regarded as", "One of the disbelievers."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 10,
          lines: ["O, you who believe! When the believing", "Women come to you as Emigrants,", "Examine them regarding their Faith;", "Allāh is the Knower of the state of their", "Faith, then if you made it clear that", "Their migration is out of their belief", "[Not out of personal motivations such as", "Family problems] then do not send them", "Back to the disbelievers: They are not", "Lawful for the disbelievers, nor", "The disbelievers are lawful husbands for", "The Muslim women; but give", "The disbelievers the amount of money", "Which they have spent on them; and", "There will be no sin on you to marry", "Them after you have paid their marriage", "Portion to them. Also do not keep", "The disbelieving women as wives but [if", "Your wives turned to disbelief] ask for", "The amount which you have spent on", "Them; and also be prepared for paying", "Back the amount which the disbelieving", "Men have spent; this is Allāh’s Decree", "Which rules and judges among you", "People; and Allāh is the Knowing", "Decreer;"],
        },
        { type: "verse", number: 11, lines: ["And if any of your wives quits you and", "Joins the pagans and meanwhile you"], continues: true },
      ],
    },
    {
      bookPage: 1046,
      blocks: [
        {
          type: "verse",
          number: 11,
          continued: true,
          lines: ["Gain some booties of the war so you", "Should divide that among those men", "Whose wives have deserted them [as a", "Recompense for their financial loss]", "And fear from the disobedience of Allāh", "In Whom you believe."],
        },
        {
          type: "verse",
          number: 12,
          lines: ["O, Messenger! When the [newly]", "Believing women come to you for", "The oath of allegiance, that they will not", "Consider any partner for Allāh, that they", "Will not steal, that they will not commit", "Fornication, that they will not kill their", "Children, that they will not forge a lie", "And relate their unlawful children to", "Their husbands and that they will not", "Disobey you in acting according to", "The Islāmic Law, then accept their oath", "Of allegiance and ask Allāh to forgive", "Them; verily, Allāh is", "The Merciful Forgiving."],
        },
        {
          type: "verse",
          number: 13,
          lines: ["O, you who believe! Do not seek", "Friendship with those on whom has", "Fallen Allāh’s Wrath since they are", "The ones who have no hope in coming", "Of the Hereafter, just as the pagans", "Who are in despair about those buried", "In the graves."],
        },
      ],
    },
  ],
  footnotes: [
    { id: 1, blocks: [{ kind: "p", text: "‘Those with him’ were his nephew Lūt, the prophet and other believers who went into exile with him." }] },
    { id: 2, blocks: [{ kind: "p", text: "This Divine Prophecy was fulfilled after Makkah Victory: Those who converted to Islām became sincere friends with the Muslims of the old. (Majma)" }] },
  ],
};

export default surah;
