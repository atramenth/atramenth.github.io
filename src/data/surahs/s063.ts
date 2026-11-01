import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 63 · Al-Munāfiqūn — book pages 1053–1056 (verses 1–11, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Page 1053 opens with the end of Sūrah 62; page 1056 opens with the end of this sūrah.
 */
const surah: SurahData = {
  number: 63,
  pages: [
    {
      bookPage: 1053,
      heading: {
        title: "Al-Munāfiqūn",
        lines: ["(The Hypocrites)", "Revealed at Madīnah", "11 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["[O, Messenger!] When the hypocrites", "Come to you, they say: “We bear witness", "That you are indeed the Messenger of", "Allāh.” Allāh Himself is the Knower that", "You are His Messenger [since He", "Himself has sent you for guidance.] And", "He bears witness that they are liars [and", "They do not believe in what they say];"],
        },
        {
          type: "verse",
          number: 2,
          lines: ["They have made their oaths to Allāh’s", "Name a cover for hiding their evil", "Intentions [to acquire people’s trust] and", "Through their trust, hinder them from", "Allāh’s Straight Path; indeed, evil is", "What they do;"],
        },
      ],
    },
    {
      bookPage: 1054,
      blocks: [
        {
          type: "verse",
          number: 3,
          lines: ["That is because first they believed and", "Then they disbelieved, [and caused", "Doubt about the Truth among the", "Community] so Allāh set a seal on their", "Hearts therefore they do not understand;"],
        },
        {
          type: "verse",
          number: 4,
          lines: ["And their physical appearance when you", "[O, Messenger] look at them, seems", "Pleasant and it marvels you; and when", "They speak, you listen to their speech;", "They are but hollow men and are like", "Dressed up blocks of wood leaning", "Against the wall. They consider every cry", "Of truth is something against them,", "[Because they suspect themselves]. They", "Are your serious enemies, beware of", "Them. May Allāh kill them! How they", "Turn away from the Truth?"],
        },
        {
          type: "verse",
          number: 5,
          lines: ["And when it is said to them: “Come to", "The Messenger so that he may ask", "Allāh’s Forgiveness for you.” They shake", "Their heads in denial and they turn away", "Out of arrogance;"],
        },
        {
          type: "verse",
          number: 6,
          lines: ["[O, Messenger!] It is equal if you ask", "Allāh’s Forgiveness for them or if you", "Do not, since Allāh Will never forgive", "Them; verily, Allāh deprives of His", "Guidance the corrupt and", "The disobedient people;"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["They are the ones who say to other", "People: “Do not spend on those", "Emigrants who are near to Allāh’s", "Messenger in order that to make them", "Leave Madīnah and therefore to desert"],
          continues: true,
        },
      ],
    },
    {
      bookPage: 1055,
      blocks: [
        {
          type: "verse",
          number: 7,
          continued: true,
          lines: ["The Messenger.” And to Allāh belong", "The treasures of the heavens and", "The earth but the hypocrites do not", "Understand [that Allāh is the Source", "Sustainer];"],
        },
        {
          type: "verse",
          number: 8,
          lines: ["They say: “When we return to Madīnah", "City the most honourable", "[Abdullāh ibn-i-Ubai the ringleader of", "The hypocrites] will expel the lowest", "Ones [i.e., the Messenger of Allāh and", "The Emigrants]{1} but Honour and Power", "Belong to Allāh and He bestows on His", "Messenger and the believers, but", "The hypocrites do not understand."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 9,
          lines: ["O, you who believe! Do not let your", "Wealth and your children keep you away", "From Allāh’s Remembrance; and those", "Who do that, then they are the", "Losers indeed:"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["And spend in charity of that which We", "Have provided sustenance for you,", "Before death comes to any of you; then", "The man in the agony of death will say:", "“O, my Creator&Nurturer! If only You", "Give me respite for a short time, then I", "Will pay in charity and will be among", "The righteous.”"],
        },
        { type: "verse", number: 11, lines: ["But Allāh does not grant respite to a", "Person, whose appointed term has"], continues: true },
      ],
    },
    {
      bookPage: 1056,
      blocks: [{ type: "verse", number: 11, continued: true, lines: ["Arrived; and Allāh is the Knower of all", "That you people do."] }],
    },
  ],
  footnotes: [
    { id: 1, blocks: [{ kind: "p", text: "These words were spoken by Abdullāh ibn Ubai the ringleader of the hypocrites of Madīnah City." }] },
  ],
};

export default surah;
