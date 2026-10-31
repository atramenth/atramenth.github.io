import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 68 · Al-Qalam — book pages 1074–1081 (verses 1–52, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 68,
  pages: [
    {
      bookPage: 1074,
      heading: {
        title: "Al-Qalam",
        lines: ["(The Pen)", "Revealed at Makkah", "52 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Nūn.{1} By the Pen and what they write", "With it{2} that,"] },
        {
          type: "verse",
          number: 2,
          lines: ["You [O, Messenger!] are not by", "The Favour of your Creator&Nurturer a", "Crazy man [as the disbelievers claim];"],
        },
        { type: "verse", number: 3, lines: ["And verily, for you will be a grand and", "Permanent Reward;"] },
        { type: "verse", number: 4, lines: ["And [O, Mohammad!] verily, you are a", "Man of high level character;"] },
      ],
    },
    {
      bookPage: 1075,
      blocks: [
        { type: "verse", number: 5, lines: ["Soon you will see and your enemies will", "Also see that"] },
        { type: "verse", number: 6, lines: ["Which of you are afflicted with", "Madness."] },
        { type: "divider" },
        {
          type: "verse",
          number: 7,
          lines: ["Verily, your Creator&Nurturer is", "The Absolute Knower and only He", "Knows those who have deviated from", "His Path and those who are guided", "Aright;"],
        },
        { type: "verse", number: 8, lines: ["So do not conform to{3} the caprices of", "The deniers of the Truth,"] },
        {
          type: "verse",
          number: 9,
          lines: ["They desire that you should compromise", "With them, [about their idols] that", "They too compromise with you [about", "Your Faith in Allāh];"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["And [O, Messengers] do not conform to", "The desire of the wicked one who", "Swears a lot:"],
        },
        { type: "verse", number: 11, lines: ["A fault-finder who goes around with", "Slander;"] },
        {
          type: "verse",
          number: 12,
          lines: ["A mean person who bars people from", "Doing charity and he is a sinful", "Transgressor;"],
        },
        { type: "verse", number: 13, continues: true, lines: ["An obstinate and rude cruel who"] },
      ],
    },
    {
      bookPage: 1076,
      blocks: [
        { type: "verse", number: 13, continued: true, lines: ["Furthermore is a product of an", "Illegitimate birth;"] },
        { type: "verse", number: 14, lines: ["And because he owns wealth and sons,", "[He turns away from the Truth];"] },
        {
          type: "verse",
          number: 15,
          lines: ["And when Our Words of Revelation are", "Recited to him, he says: “These are", "The legends of the old.”"],
        },
        { type: "verse", number: 16, lines: ["We will soon put a brand of disgrace on", "His nose.{4}"] },
        { type: "divider" },
        {
          type: "verse",
          number: 17,
          lines: ["Verily, We will punish these people as", "We did punish the owners of the garden", "Who decided to pluck the fruits of", "The garden in the early morning when", "No beggars were around;"],
        },
        { type: "verse", number: 18, lines: ["And they did not even say: “By Allāh’s", "Will” [we shall go];"] },
        {
          type: "verse",
          number: 19,
          lines: ["So when they were asleep at night an", "Affliction fell upon their garden from your", "Creator&Nurturer,"],
        },
        { type: "verse", number: 20, lines: ["And the garden was turned into a black", "Barren land;"] },
        {
          type: "verse",
          number: 21,
          lines: ["[Not knowing about the calamity] They", "Called one another in the early morning:"],
        },
      ],
    },
    {
      bookPage: 1077,
      blocks: [
        { type: "verse", number: 22, lines: ["Saying: “Start early to your tilth if you are", "Going to pluck fruits.”"] },
        { type: "verse", number: 23, lines: ["They set out while whispering to one", "Another:"] },
        {
          type: "verse",
          number: 24,
          lines: ["“Let not any poor enter the garden", "Today; while you are plucking the fruits.”"],
        },
        {
          type: "verse",
          number: 25,
          lines: ["In the morning they went to their", "Garden with a firm decision about", "Preventing the needy to enter the garden", "And to have a portion [of what Allāh", "Had bestowed upon them.]"],
        },
        {
          type: "verse",
          number: 26,
          lines: ["But when they saw the garden they did", "Not recognize it and said: “We have", "Surely lost the way!"],
        },
        { type: "verse", number: 27, lines: ["“No, it is our garden but we have", "Suffered a great loss.”"] },
        {
          type: "verse",
          number: 28,
          lines: ["A wiser one among them said: “Did I not", "Tell you why should you not express", "Your thanks for Allāh’s Bounties?” [By", "Helping the poor]"],
        },
        {
          type: "verse",
          number: 29,
          lines: ["They prayed: “Absolute Pure is our", "Creator! Verily, we did wrong to", "Ourselves.”"],
        },
        { type: "verse", number: 30, lines: ["Then they turned to one another and", "Reproached themselves;"] },
        { type: "verse", number: 31, continues: true, lines: ["They said: “Woe to us! We have been"] },
      ],
    },
    {
      bookPage: 1078,
      blocks: [
        {
          type: "verse",
          number: 31,
          continued: true,
          lines: ["Indeed, rebellious against Allāh’s", "Command [as to spend in charity];"],
        },
        {
          type: "verse",
          number: 32,
          lines: ["“May be Allāh will give us a better", "Garden in place of this, since indeed we", "Are returning to our Creator&Nurturer", "Repentant, and with a great hope.”"],
        },
        {
          type: "verse",
          number: 33,
          lines: ["Such is their punishment in this world", "And the Chastisement of the Hereafter", "Is graver, if people but knew."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 34,
          lines: ["Verily, for the pious with their", "Creator&Nurturer are the Gardens of", "Bliss;"],
        },
        {
          type: "verse",
          number: 35,
          lines: ["Do We place the Muslims who are", "Submissive to the Truth equal to", "The guilty ones?"],
        },
        { type: "verse", number: 36, lines: ["What is the matter with you that you", "Judge like this?"] },
        { type: "verse", number: 37, lines: ["Or is there a Book of religion in which", "You find a decree as this?"] },
        { type: "verse", number: 38, lines: ["And therein are decrees written as you", "Desire?"] },
        {
          type: "verse",
          number: 39,
          lines: ["Have you a sworn covenant from Us", "That to the Day of Judgement you shall", "Surely have whatever you order?"],
        },
        { type: "verse", number: 40, lines: ["Ask them which one will surely", "Guarantee that covenant?"] },
      ],
    },
    {
      bookPage: 1079,
      blocks: [
        {
          type: "verse",
          number: 41,
          lines: ["Or if they have deities in place of", "Allāh whom they worship, then they", "Should introduce them, if they are", "Truthful."],
        },
        {
          type: "verse",
          number: 42,
          lines: ["On the Day that they are afflicted with", "The hardship they are called to prostrate", "But they will not be able to do it;"],
        },
        {
          type: "verse",
          number: 43,
          lines: ["Their eyes will be cast down out of", "Shame and remorse; disgrace will", "Overtake them, seeing that aforetime", "That they were healthy and could", "Prostrate they refused to do it when they", "Were summoned to prayer and", "Adoration."],
        },
        {
          type: "verse",
          number: 44,
          lines: ["So [O, Messenger] leave to Me those", "Who belie this Qur’ān; I will gradually", "Seize them with punishment from where", "They do not perceive;"],
        },
        { type: "verse", number: 45, lines: ["And yet I respite them: Verily, My plan", "[Against them] is very strong."] },
        {
          type: "verse",
          number: 46,
          lines: ["Do you [O, Messenger] ask some wage", "For your Mission of guiding them that", "They consider it a burden of debt or", "Fine which cannot afford?"],
        },
        {
          type: "verse",
          number: 47,
          lines: ["Or with them is the secrets of", "The Unseen and they are busy writing", "Them down?"],
        },
        { type: "divider" },
        { type: "verse", number: 48, continues: true, lines: ["So wait for the Command of your"] },
      ],
    },
    {
      bookPage: 1080,
      blocks: [
        {
          type: "verse",
          number: 48,
          continued: true,
          lines: ["Creator and do not be impatient like", "The Companion of the Fish, [Yūnus", "The prophet] when he invoked to his", "Creator out of agony and remorse;"],
        },
        {
          type: "verse",
          number: 49,
          lines: ["And if a Favour from his", "Creator&Nurturer had not saved him,", "He would have been certainly cast forth", "On the bare bank of the sea while he", "Was to be blamed;{5}"],
        },
        {
          type: "verse",
          number: 50,
          lines: ["So [following his repentance] his", "Creator&Nurturer chose him [as", "The Messenger for the same people] and", "Appointed him of the righteous ones."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 51,
          lines: ["And those who disbelieve would almost", "Harm you [O, Messenger] with the evil", "Power of their eyes; the fascination of", "The recitation of the Words of", "Revelation makes them envy you; but", "After they hear the Message, out of", "Jealousy they say: “Verily, he is a", "Mad man!”"],
        },
        {
          type: "verse",
          number: 52,
          continues: true,
          lines: ["But Qur’ān is a Reminder to mankind", "Throughout the world [so if", "The ringleaders of the pagans are", "Worried about its influence on", "The people, they should know that", "The Messenger is not to be envied since"],
        },
      ],
    },
    {
      bookPage: 1081,
      blocks: [
        {
          type: "verse",
          number: 52,
          continued: true,
          lines: ["The Creator of the Word of Truth is", "The Bestower of the Divine Fascination", "To the Word of Truth.]"],
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
        { kind: "p", text: "Words of Divine Revelation and any Word of Truth which stands against Falsehood" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "Allāh’s Messenger only ‘obeys’ Allāh’s Commands; the Messenger may under circumstances ‘conform to’ the wish of the disbelievers yet translators in English and Persian have prefered ‘obey’ over ‘conform to’" },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "The man described through the Words of Revelation 10-17 is Walīd ibne Moghīrah one of the ringleaders of the pagans and a bitter enemy of the Holy Messenger; he received injuries in the Badr Battle, so the nose of the sinful was branded by the sword as promised by Allāh, the Almighty." },
      ],
    },
    {
      id: 5,
      blocks: [
        { kind: "p", text: "In connection with the story revealed in 37:139-148, three stages of Allāh’s Favour is to be seen on Yunus (Jonah): 1) his repentance was accepted, so the crocodile cast him on the shore by Allāh’s Command 2) a pampkin was planted to give shade over his body in order to protect him from the direct sun-shine 3) he was returned to his position as a prophet for the same people." },
      ],
    },
  ],
};

export default surah;
