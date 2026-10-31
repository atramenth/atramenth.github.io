import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 76 · Al-Insān — book pages 1114–1118 (verses 1–31, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 76,
  pages: [
    {
      bookPage: 1114,
      heading: {
        title: "Al-Insān",
        lines: ["(Human being) or Ad-Dahr (Time)", "Revealed at Madīnah", "31 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["Was not there a time that man was of", "No significance to be mentioned? [In", "The state of being a sperm or embryo]"],
        },
        {
          type: "verse",
          number: 2,
          lines: ["Verily, We created man from a mingled", "Sperm [of male and of the female’s ovum]", "And in order to try him We granted", "Him the faculties of hearing and sight;"],
        },
        {
          type: "verse",
          number: 3,
          lines: ["Then We showed him the Straight Path:", "Whether he chooses to be grateful or be", "Ingratitude and disbeliver;"],
        },
      ],
    },
    {
      bookPage: 1115,
      blocks: [
        {
          type: "verse",
          number: 4,
          lines: ["Verily, We have prepared for the", "Disbelievers chains, fetters and Blazing", "Fire."],
        },
        {
          type: "verse",
          number: 5,
          lines: ["But for the righteous [prepared is a", "Reception] They shall drink of a cup", "Which tastes of Kāfūr (camphor),"],
        },
        {
          type: "verse",
          number: 6,
          lines: ["And Kāfūr is a fountain which pours", "Forth for the devoted believers of Allāh;", "And in every spot they wish, it springs", "Forth [by Allāh’s Leave]."],
        },
        {
          type: "verse",
          number: 7,
          lines: ["[The devoted believers of Allāh]", "Fulfill their vows and fear the Day that", "Its evil touches all and everything;"],
        },
        {
          type: "verse",
          number: 8,
          lines: ["And for Allāh’s Pleasure they feed", "The needy, the orphan and the captive", "Though themselves go hungry.{1}"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["[And they say:] “We only feed you", "To obey Allāh’s Command and for His", "Sake, therefore we do not expect neither", "Your reward nor thanks;"],
        },
      ],
    },
    {
      bookPage: 1116,
      blocks: [
        {
          type: "verse",
          number: 10,
          lines: ["“Verily, we fear from the punishment of", "Our Creator&Nurturer when comes", "The frowned Day of Judgement.”"],
        },
        {
          type: "verse",
          number: 11,
          lines: ["So due to their Faith Allāh will ward", "Off from them the evil of that Day and", "Will cause happiness and joy appear on", "Their faces;"],
        },
        {
          type: "verse",
          number: 12,
          lines: ["And because they were patient and", "Steadfast in Allāh’s Way, He will reward", "Them with Gardens of Paradise and", "Garments of pure silk:"],
        },
        {
          type: "verse",
          number: 13,
          lines: ["They will lean against the raised sofas", "And they shall not suffer there from", "The intensive heat or cold, the weather", "Is quite pleasant,"],
        },
        {
          type: "verse",
          number: 14,
          lines: ["Trees of the Garden shall spread their", "Shadows on them; and fruits are", "Available to them, and they can pluck", "Fruits from the low and near branches,"],
        },
        { type: "verse", number: 15, lines: ["The waiters serve drinks, out of silver", "Cups and crystal jars,"] },
        { type: "verse", number: 16, lines: ["The silver cups are of various sizes,"] },
        {
          type: "verse",
          number: 17,
          lines: ["And they are given a drink which tastes", "Of ginger [it gives warmth to the body,", "And zest to the taste]"],
        },
        { type: "verse", number: 18, lines: ["This drink is from a fountain which is", "Named Salsabīl."] },
      ],
    },
    {
      bookPage: 1117,
      blocks: [
        {
          type: "verse",
          number: 19,
          lines: ["And around them are waiters, boys of", "Permanent age; if you look at them [in", "Their coming and going], they look as", "Scattered pearls."],
        },
        {
          type: "verse",
          number: 20,
          lines: ["And when you look at the Garden", "Carefully you will find it a grand", "Kingdom full of blessings;"],
        },
        {
          type: "verse",
          number: 21,
          lines: ["And the devoted believers are wearing", "Garments of fine green silk and rich", "Brocade and they shall be adorned with", "Bracelets of silver; and their", "Creator&Nurturer gives them of pure", "Drink [which causes no intoxication, nor", "Headache];"],
        },
        {
          type: "verse",
          number: 22,
          lines: ["[And will be stated to them:] “Verily,", "This Garden is the reward of your", "Good deeds; and your endeavour in Allāh’s Way", "Is being thus appreciated.”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 23,
          lines: ["[O, Messenger!] Verily, We are the One", "Who have sent down the Qur’ān to you", "[And what the disbelievers say about it is", "But idle talks]"],
        },
        {
          type: "verse",
          number: 24,
          lines: ["So be patient and steadfast in executing", "The Commands of your Creator&Nurturer", "And do not conform to the desire of any", "Sinful or disbelieving person;"],
        },
        { type: "verse", number: 25, lines: ["And Celebrate the Name of your", "Creator&Nurturer morning and evening,"] },
      ],
    },
    {
      bookPage: 1118,
      blocks: [
        {
          type: "verse",
          number: 26,
          lines: ["And some part of the night be", "Prostrating for Him and Celebrate", "Allāh’s Attributes a longer part of", "The night [so that you may benefit from", "The blessings of the invocation and", "Allāh’s Remembrance]"],
        },
        {
          type: "verse",
          number: 27,
          lines: ["Surely these disbelievers love", "The temporal and transitory life and", "They are heedless of coming a Day", "Which is Grave;"],
        },
        {
          type: "verse",
          number: 28,
          lines: ["We did indeed create them and We gave", "Them a great deal of strength, but if We", "Will [despite their strength] will bring", "Another nation in their place."],
        },
        {
          type: "verse",
          number: 29,
          lines: ["Verily, this Qur’ān is a Reminder and a", "Guide; and whoever who wishes can find", "Through it, a way towards his", "Creator&Nurturer."],
        },
        {
          type: "verse",
          number: 30,
          lines: ["And you, the believers do not wish", "Something unless it is according to", "Allāh’s Will verily, Allāh is the Knowing", "Decreer."],
        },
        {
          type: "verse",
          number: 31,
          lines: ["Allāh will admit to His Grace whom He", "Wills; and for the disbelievers and", "The oppressors He has prepared a", "Painful Chastisement."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "The authorities of Shīah and Sunnī both confirm that this Sūrah particularly ‘Āyāt 7-13 are about the Holy Messenger’s Family: Allāh, the Almighty has determined to appoint them as Selected Examples for mankind regarding their Faith and devotion: Once Hassan and Hossein (AS) the two grandsons of the Holy Messenger fell sick; the Holy Messenger enjoined that their parents should vow for a three days fast after the recovery of their two young sons. After their vow was accepted by the Divine Presence and they gained their health, the whole family fasted. Each day Fatimah (AS) baked five loaves of bread; but in the first evening when they were about to break their fast a beggar came to the house and asked for food; they all gave away their bread and broke their fast with water; even Fizzah the maid servant gave away her loaf of bread; next day an orphan came and they gave away their bread; the third day a captive came to the door and they gave away their bread and broke their fast with water. So the Holy Messenger invoked to Allāh asking His Grace for those devoted believers; and later theAngel Gabriel appeared and this Sūrah was revealed in praise of the Holy Messenger’s Family: Thus they were introduced as Selected Examples of Allāh’s devoted and obedient worshippers." },
      ],
    },
  ],
};

export default surah;
