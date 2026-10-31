import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 74 · Al-Muddassir — book pages 1104–1109 (verses 1–56, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 74,
  pages: [
    {
      bookPage: 1104,
      heading: {
        title: "Al-Muddassir",
        lines: ["(The Covered in Cloak)", "Revealed at Makkah", "56 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["O, you who have wrapped yourself in a", "Cloack!"] },
        { type: "verse", number: 2, lines: ["Arise and proclaim the warning publicly;"] },
        { type: "verse", number: 3, lines: ["And Celebrate the Greatness of your", "Creator;"] },
        { type: "verse", number: 4, lines: ["And keep your garments clean from any", "Kind of stains;"] },
        { type: "verse", number: 5, lines: ["And keep away from the abomination of", "Polytheism;"] },
        { type: "verse", number: 6, lines: ["Do not give, in order to receive more;"] },
        { type: "verse", number: 7, lines: ["Be patient and steadfast in the Way of", "Your Creator&Nurturer."] },
        { type: "divider" },
      ],
    },
    {
      bookPage: 1105,
      blocks: [
        { type: "verse", number: 8, lines: ["When the Trumpet is blown,"] },
        { type: "verse", number: 9, lines: ["That “Day”, will be the Day of", "Calamity,"] },
        { type: "verse", number: 10, lines: ["There will be no lenity and ease for", "The disbelievers on that Day."] },
        {
          type: "verse",
          number: 11,
          lines: ["[O, Messenger!] Leave him to Me", "The wicked one [valid ibn Moghirah]", "Whom I created lonely and naked;{1}"],
        },
        { type: "verse", number: 12, lines: ["For whom I appointed affluence in", "Abundance,"] },
        { type: "verse", number: 13, lines: ["And sons all prepared [to administer his", "Wealth and property],"] },
        { type: "verse", number: 14, lines: ["And for him I provided an easy and", "Comfortable life,"] },
        { type: "verse", number: 15, lines: ["But his greed demands that I should add", "To his wealth and children;"] },
        {
          type: "verse",
          number: 16,
          lines: ["An impossible desire for him, because", "He has treated Our Signs and Miracles", "Contumaciously;"],
        },
        { type: "verse", number: 17, lines: ["Soon I will make him encounter with a", "Mountain of calamities and hardship:"] },
        { type: "verse", number: 18, lines: ["For he thought and plotted against", "The Truth;"] },
      ],
    },
    {
      bookPage: 1106,
      blocks: [
        { type: "verse", number: 19, lines: ["Away with him, how he plotted, [for", "Forging lies against Qur’ān?]"] },
        { type: "verse", number: 20, lines: ["Yes! Away with him, how he plotted?"] },
        { type: "verse", number: 21, lines: ["Then he looked around and reflected;"] },
        { type: "verse", number: 22, lines: ["Then he frowned out of fury;"] },
        { type: "verse", number: 23, lines: ["Then he turned back with arrogance;"] },
        { type: "verse", number: 24, lines: ["And he said: “This Qur’ān is but magic", "Drived from the old books;"] },
        { type: "verse", number: 25, lines: ["“This is nothing more than the word of", "Human being.”"] },
        { type: "verse", number: 26, lines: ["So I will cast him into Saqar", "[Due to his disbelief.]"] },
        { type: "verse", number: 27, lines: ["And what will make you know what is", "Saqar?"] },
        {
          type: "verse",
          number: 28,
          lines: ["It is the Hell Fire which burns", "The sinner all over, but does not", "Leave him die [because a new skin will", "Be given to him to be burnt 4:56]"],
        },
        { type: "verse", number: 29, lines: ["The Fire that darkens the colour of", "The skin;"] },
        { type: "verse", number: 30, lines: ["Nineteen Angels guard the performance", "Of the burning,"] },
        {
          type: "verse",
          number: 31,
          continues: true,
          lines: ["And We have appointed none but", "The Angels as guards of the Fire; and"],
        },
      ],
    },
    {
      bookPage: 1107,
      blocks: [
        {
          type: "verse",
          number: 31,
          continued: true,
          lines: ["This Particular number is allotted for", "The trial of the disbelievers; the people", "Of the Book achieve certainty [because", "They have learned about that number in", "The Taurāt and the Injīl]{2} and it will also", "Add to the Faith of the believers; so", "There will be no doubt in the hearts of", "The people of the Book and", "The believing Muslims; but those in", "Whose hearts is a disease of doubt and", "Hypocrisy and also the pagans may", "Raise the question saying: “What does", "Allāh mean by assigning this particular", "Number for the Angels?” Thus does Allāh", "Deprive of His Guidance whom He finds", "Entitled to go astray; and He", "Guides whom He finds entitled to", "Guidance. And no one knows the exact", "Number of the hosts of your Creator but", "He Himself. Verily, this Qur’ān is a", "Reminder to all mankind."],
        },
        { type: "verse", number: 32, lines: ["[And to this issue] I swear by the Moon"] },
        { type: "verse", number: 33, lines: ["And by the Night as it retreats,"] },
        { type: "verse", number: 34, lines: ["And by the Morning when it appears", "Shining,"] },
        { type: "verse", number: 35, lines: ["That this Qur’ān is indeed a Great", "Portentous Book,"] },
      ],
    },
    {
      bookPage: 1108,
      blocks: [
        { type: "verse", number: 36, lines: ["It is a Warner to the whole mankind,"] },
        {
          type: "verse",
          number: 37,
          lines: ["And any one of you who wishes to", "Progress or to fall behind [he can", "Choose]."],
        },
        { type: "verse", number: 38, lines: ["All people will be held in pledge for their", "Deeds:"] },
        { type: "verse", number: 39, lines: ["The Companions of the Right Hand will", "Not receive any Torment;"] },
        { type: "verse", number: 40, lines: ["They enjoy the Bliss of the Gardens, they", "Will put question,"] },
        { type: "verse", number: 41, lines: ["To the sinners:"] },
        { type: "verse", number: 42, lines: ["“What drove you to the Hell Fire?”"] },
        { type: "verse", number: 43, lines: ["They will reply: “We were not of those", "Who performed prayers;"] },
        { type: "verse", number: 44, lines: ["“And we did not feed the needy;"] },
        { type: "verse", number: 45, lines: ["“And we used to talk vulgar talks, with", "The idle talkers;"] },
        { type: "verse", number: 46, lines: ["“And we used to belie the Day of", "Judgement;"] },
        { type: "verse", number: 47, lines: ["“We were like this until death came", "To us.”"] },
        {
          type: "verse",
          number: 48,
          lines: ["[Upon their own confessions] No", "Intercession of any intercessor will", "Benefit them."],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 1109,
      blocks: [
        {
          type: "verse",
          number: 49,
          lines: ["So what is the matter with these pagans", "Of Quraish that turn away from", "[Qur’ān which is a] reminder?"],
        },
        { type: "verse", number: 50, lines: ["They are like frightened wild donkeys,"] },
        { type: "verse", number: 51, lines: ["Escaped from a roaring lion;"] },
        {
          type: "verse",
          number: 52,
          lines: ["Each one of these disbelievers expect", "To be given scrolls of Revelations", "Specifically written for him!"],
        },
        {
          type: "verse",
          number: 53,
          lines: ["Nay! The truth is that they do not fear", "The Hereafter [because they are too", "Ignorant to believe that their Creator", "Can raise them up]"],
        },
        { type: "verse", number: 54, lines: ["For sure, this Qur’ān is a Reminder [for", "All in the human society],"] },
        { type: "verse", number: 55, lines: ["For whoever who is anxious to receive", "Admonition,"] },
        {
          type: "verse",
          number: 56,
          lines: ["And they will not be reminded unless", "Allāh Wills it. Verily, Allāh is", "The Source of Righteousness and", "The Owner of Forgiveness."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "Reference is made to 4:94 implying that man is lonely and naked in two stages: When he comes to the world and when he leaves the world; mainly at the time of his departure he leaves behind all bounties that by Allāh has been bestowed upon him, of properties, positions and children." },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "Nineteen is the number of the Angels who guard the Hell Fire, it has been also mentioned in the previous Books of religion: The Taurāt and the Injīl." },
      ],
    },
  ],
};

export default surah;
