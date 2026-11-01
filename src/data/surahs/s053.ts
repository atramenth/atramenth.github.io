import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 53 · An-Najm — book pages 988–994 (verses 1–62, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 53,
  pages: [
    {
      bookPage: 988,
      heading: {
        title: "An-Najm",
        lines: ["(The Star)", "Revealed at Makkah", "62 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["By the star when it disappears,"] },
        {
          type: "verse",
          number: 2,
          lines: ["Your well-wishing Supervisor is neither", "Astray nor deviated from the Straight", "Path,"],
        },
        { type: "verse", number: 3, lines: ["Not he speaks out of his own desire,"] },
        { type: "verse", number: 4, lines: ["He relates to you only what is revealed", "To him;"] },
        { type: "verse", number: 5, lines: ["By the Supreme Power he has been", "Taught,"] },
        {
          type: "verse",
          number: 6,
          lines: ["The Supreme Powerful Who established", "Himself on Arsh [after the creation of", "The heavens and the earth]"],
        },
        { type: "verse", number: 7, lines: ["The One Who is on the Highest", "Horizon."] },
      ],
    },
    {
      bookPage: 989,
      blocks: [
        { type: "verse", number: 8, lines: ["Then he came closer and closer to His", "Presence,{1}"] },
        { type: "verse", number: 9, lines: ["Until the distance between He and he", "Was at two bow-lengths or even nearer,"] },
        {
          type: "verse",
          number: 10,
          lines: ["[From such close distance] Allāh", "Revealed His Messege to His obedient", "Worshipper, what He Willed to reveal,"],
        },
        { type: "verse", number: 11, lines: ["The Messenger’s heart did not deny", "What he saw [with his eyes];"] },
        { type: "verse", number: 12, lines: ["Will you people dispute about what he", "Saw in his Ascension?"] },
        { type: "verse", number: 13, lines: ["For indeed he saw His Presence at a", "Second descent;"] },
        { type: "verse", number: 14, lines: ["Near the Lote-tree;{2}"] },
        { type: "verse", number: 15, lines: ["Which is near the Garden of Abode."] },
        { type: "verse", number: 16, lines: ["Though the Lote-tree was covered with", "Light,"] },
        {
          type: "verse",
          number: 17,
          lines: ["The Messenger’s eyes looked straight", "Fixedly and did not turn away from", "The Light;"],
        },
        { type: "verse", number: 18, continues: true, lines: ["And he indeed saw some of the Great"] },
      ],
    },
    {
      bookPage: 990,
      blocks: [
        { type: "verse", number: 18, continued: true, lines: ["Signs of his Creator&Nurturer."] },
        { type: "divider" },
        { type: "verse", number: 19, lines: ["Have you seen [the three godesses of", "The idolaters] Lāt and Uzzā?"] },
        { type: "verse", number: 20, lines: ["And the third one, Manāt?"] },
        { type: "verse", number: 21, lines: ["How is it that male children for you and", "Female children for Allāh?"] },
        { type: "verse", number: 22, lines: ["This is a very unfair distribution!"] },
        {
          type: "verse",
          number: 23,
          lines: ["These are but names that you and your", "Ancestors have devised and for which", "Allāh has not sent down any", "Confirmation or proof. These idolaters", "Do not follow but conjecture and their", "Caprices, though there has come to", "Them the Book of Guidance from their", "Creator."],
        },
        { type: "verse", number: 24, lines: ["Does man ever reach all that he desire?"] },
        {
          type: "verse",
          number: 25,
          lines: ["The Dominion of the Hereafter and", "The former life belongs to Allāh [so", "Man’s will and desires are subordinate", "To Allāh’s Will.]"],
        },
        {
          type: "verse",
          number: 26,
          lines: ["There are so many Angels in", "The heavens but their intercession is not", "Accepted unless when Allāh gives", "Permission for the one whom He Wills", "And who has acquired Allāh’s Pleasure."],
        },
      ],
    },
    {
      bookPage: 991,
      blocks: [
        {
          type: "verse",
          number: 27,
          lines: ["Those who do not believe in", "The Hereafter name the Angels with", "Female names [and consider them", "Intercessors for their worldly needs]."],
        },
        {
          type: "verse",
          number: 28,
          lines: ["But they have no knowledge therein:", "They follow nothing but conjecture; and", "Conjecture does not help men for", "Recognition of the Truth."],
        },
        {
          type: "verse",
          number: 29,
          lines: ["So [O, Messenger] keep away from", "Those who turn away from Our", "Reminder, [the Holy Qur’ān] and who", "Are only after the life of this world;"],
        },
        {
          type: "verse",
          number: 30,
          lines: ["Their knowledge is limited to their", "Worldly means and materials only;", "Verily, your Creator is", "The Supreme Knower of those who are", "Deviated from His Way and those who", "Have received guidance."],
        },
        {
          type: "verse",
          number: 31,
          lines: ["The Dominion of the heavens and", "The earth belongs to Allāh, so He is in a", "Position to recompense those who do", "Evil according to their wrong deeds and", "To reward those who do good with what", "Is best, [the Paradise]."],
        },
        {
          type: "verse",
          number: 32,
          continues: true,
          lines: ["Those who avoid committing Grave Sins", "And shameful deeds save small faults,", "They should know that your Creator’s", "Scope of Forgiveness is vast. He knows", "You quite well when He created your", "Father [‘Ādam] of the earth and also", "When you were hidden in your mothers’"],
        },
      ],
    },
    {
      bookPage: 992,
      blocks: [
        {
          type: "verse",
          number: 32,
          continued: true,
          lines: ["Wombs; so do not consider yourselves", "Purified since only Allāh knows who are", "The pure and the pious."],
        },
        {
          type: "verse",
          number: 33,
          lines: ["[O, Messenger!] Did you notice the one", "Who turned away from Allāh’s", "Command?"],
        },
        { type: "verse", number: 34, lines: ["And he spent a little on Allāh’s Way and", "Then was niggardly;"] },
        {
          type: "verse",
          number: 35,
          lines: ["Has he any knowledge of the Unseen so", "He can see what is going to happen to", "Him?"],
        },
        { type: "verse", number: 36, lines: ["Is he not informed about what was", "Written in the Tablets of Mūssā?"] },
        { type: "verse", number: 37, lines: ["And of the Testament of Ibrāhīm, who", "Fulfilled his covenants with Allāh?"] },
        { type: "verse", number: 38, lines: ["That no one in the Hereafter will bear", "The burdens of the sins of the other,"] },
        { type: "verse", number: 39, lines: ["And that man can only have the fruit of", "What he has strived for;"] },
        { type: "verse", number: 40, lines: ["Verily, the result of his effort will soon", "Be observed;"] },
        { type: "verse", number: 41, lines: ["And he will be recompensed completely", "According to his deeds."] },
        { type: "verse", number: 42, lines: ["Has not man learned that to your", "Creator&Nurturer is the final return?"] },
      ],
    },
    {
      bookPage: 993,
      blocks: [
        { type: "verse", number: 43, lines: ["The One Who grants laughter and tears;"] },
        { type: "verse", number: 44, lines: ["And the One Who gives life and causes", "Death;"] },
        { type: "verse", number: 45, lines: ["And the One Who created the pairs,", "Male and female,"] },
        { type: "verse", number: 46, lines: ["From a sperm-drop poured in", "The womb;"] },
        {
          type: "verse",
          number: 47,
          lines: ["The One Who with Him alone is the", "Second creation [on the Resurrection", "Day]"],
        },
        { type: "verse", number: 48, lines: ["And the One Who gives both", "Contentment and wealth;"] },
        {
          type: "verse",
          number: 49,
          lines: ["And the One Who is the Creator of", "Sirius Star [which is worshipped by some", "Pagans;]"],
        },
        { type: "verse", number: 50, lines: ["And the One Who destroyed the former", "‘Ād people;"] },
        { type: "verse", number: 51, lines: ["And of Thamūd people He did not", "Leave any one on the earth;"] },
        {
          type: "verse",
          number: 52,
          lines: ["And of the people of Nūh aforetime", "Who were the most rebellious and the", "Most transgressors of the disbelievers of", "The old;"],
        },
        { type: "verse", number: 53, lines: ["And the One Who destroyed the cities", "Of the people of Lūt;"] },
      ],
    },
    {
      bookPage: 994,
      blocks: [
        { type: "verse", number: 54, lines: ["And He did cover them with what", "They were to be covered [i.e. , stones];"] },
        {
          type: "verse",
          number: 55,
          lines: ["Then which of the Bounties of your", "Creator&Nurturer do you deny [O, you", "Ungrateful man!] and dispute about", "Them?"],
        },
        { type: "verse", number: 56, lines: ["This [Mohammad] is a Warner in", "The line of Allāh’s Messengers of", "The old."] },
        { type: "verse", number: 57, lines: ["What is to be near is getting near,{3}"] },
        { type: "verse", number: 58, lines: ["And only Allāh is the One Who can", "Repel its Torment;"] },
        { type: "verse", number: 59, lines: ["Do you disbelieving people wonder at", "This statement?"] },
        { type: "verse", number: 60, lines: ["And you laugh at it instead of weeping?"] },
        { type: "verse", number: 61, lines: ["You are spending your life in total", "Negligence;"] },
        {
          type: "verse",
          number: 62,
          lines: ["[If you do not want to face the doom of", "The disbelievers of the old] Then", "Prostrate in Allāh’s Presence and", "Worship Him sincerely."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "Reference is made to the Ascension (Mirāj) of the Holy Messenger" },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "A tree in the Seventh Heaven" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "The Day of Judgement" },
      ],
    },
  ],
};

export default surah;
