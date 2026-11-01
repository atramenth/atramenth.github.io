import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 44 · Ad-Dukhān — book pages 921–928 (verses 1–59, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 44,
  pages: [
    {
      bookPage: 921,
      heading: {
        title: "Ad-Dukhān",
        lines: ["(The Smoke)", "Revealed at Makkah", "59 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Hā. Mīm.{1}"] },
        { type: "verse", number: 2, lines: ["By the Illuminating Book of Religion,"] },
        {
          type: "verse",
          number: 3,
          lines: ["We have sent it{2} down in the Blessed", "Night [of Qadr]; for We are", "The Ever Commender of Goodness and", "The Warner against Evil;"],
        },
        {
          type: "verse",
          number: 4,
          lines: ["In that night all matters are distinctively", "Ordained by the Command of Allāh,", "The Source of Wisdom;"],
        },
        { type: "verse", number: 5, lines: ["It is by Our Command that We send", "Messengers and messages;"] },
        {
          type: "verse",
          number: 6,
          continues: true,
          lines: ["And [O, Messenger!] this sending", "Messages and Messengers is a Sign of", "Grace from your Creator&Nurturer to"],
        },
      ],
    },
    {
      bookPage: 922,
      blocks: [
        {
          type: "verse",
          number: 6,
          continued: true,
          lines: ["Mankind; He is the Knowing Hearer: [He", "Hears the voices of the invokers by His", "Embracing Knowledge and grants", "Response to the people’s need for", "Guidance, law and an orderly", "Community.]"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["You should know that Allāh is", "The Creator of the heavens and", "The earth and what is between them, if", "Your Faith has attained certainty;"],
        },
        {
          type: "verse",
          number: 8,
          lines: ["There is no God but Allāh and He is", "The One Who gives life and causes", "Death and He is the Creator of you as", "Well as your ancient ancestors;"],
        },
        { type: "verse", number: 9, lines: ["But these Quraish pagans play about in", "Doubt regarding the Truth,"] },
        {
          type: "verse",
          number: 10,
          lines: ["So [O, Messenger!] wait you for the Day", "That the sky will bring forth a visible", "Heavy smoke,"],
        },
        { type: "verse", number: 11, lines: ["It covers the people and it will be a", "Painful Torment;"] },
        {
          type: "verse",
          number: 12,
          lines: ["Then the disbelievers will say: “O, our", "Creator! Please remove this", "Chastisement, because now we do really", "Believe.”"],
        },
        {
          type: "verse",
          number: 13,
          lines: ["How did this awakening embrace", "Them? Whereas when the Expositoring", "Messenger came to them,"],
        },
      ],
    },
    {
      bookPage: 923,
      blocks: [
        {
          type: "verse",
          number: 14,
          lines: ["They turned away from him saying:", "“This man is but a crazy one who has", "Been taught by the others.”"],
        },
        {
          type: "verse",
          number: 15,
          lines: ["However We shall remove the Torment", "For a time but you will surely return to", "Your deeds again;"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 16,
          lines: ["So on the Day that We seize", "The disbelievers with a mighty attack,", "We will then take a harsh revenge upon", "Them."],
        },
        {
          type: "verse",
          number: 17,
          lines: ["The example of such seizure We did try", "In the past on the people of Firown by", "Sending Mūssā the honourable", "Messenger of Allāh:"],
        },
        {
          type: "verse",
          number: 18,
          lines: ["Mūssā Said: “Give them back to me", "The worshippers of Allāh,{3} I am to you", "A trusted Messenger;"],
        },
        {
          type: "verse",
          number: 19,
          lines: ["“And do not be arrogant against Allāh’s", "Command since I have come to you with", "Evident Miracles;"],
        },
        {
          type: "verse",
          number: 20,
          lines: ["“And if you decide to stone me I take", "Refuge in my Creator and your Creator", "[And He will support me against you];"],
        },
        {
          type: "verse",
          number: 21,
          lines: ["“And if you do not believe in", "The Oneness of Allāh and my", "Messengership, at least leave me alone", "And do not suppress me.”"],
        },
      ],
    },
    {
      bookPage: 924,
      blocks: [
        {
          type: "verse",
          number: 22,
          lines: ["[They tried to harm him] So Mūssā", "Complained to his Creator&Nurturer", "Saying: “These are a sinful people!”"],
        },
        {
          type: "verse",
          number: 23,
          lines: ["[It was stated to him:] “Leave the land", "Along with My worshippers by night", "Surely they will be chasing you;"],
        },
        {
          type: "verse",
          number: 24,
          lines: ["“[In the sea by Allāh’s Command a dry", "Road will be opened to you; 20:77] cross", "It slowly; [after that again the sea will be", "There] and the host shall be all drowned", "In it by Allāh’s Command.”"],
        },
        {
          type: "verse",
          number: 25,
          lines: ["How many were the gardens and", "The springs that the wrongdoers left", "Behind,"],
        },
        { type: "verse", number: 26, lines: ["And swon-fields and luxurious palaces", "And buildings,"] },
        { type: "verse", number: 27, lines: ["And all sorts of comfort in which they", "Used to enjoy life;"] },
        {
          type: "verse",
          number: 28,
          lines: ["And We made the Children of Isrāīl", "To inherit the whole wealth and", "The Dominion;"],
        },
        {
          type: "verse",
          number: 29,
          lines: ["And neither heaven nor earth shed tears", "Over the destruction of Firown and his", "People; and they were not given any", "Respite for repentance either."],
        },
        { type: "verse", number: 30, lines: ["And indeed We delivered the Children", "Of Isrāīl from the humiliating Torment,"] },
      ],
    },
    {
      bookPage: 925,
      blocks: [
        {
          type: "verse",
          number: 31,
          lines: ["And from Firown who was one of", "The rebellious tyrants of the human", "History;"],
        },
        {
          type: "verse",
          number: 32,
          lines: ["And We preferred the Children of", "Isrāīl above the people of their time", "Knowingly and based on a Divine", "Purpose, [to fulfill Allāh’s Promise", "About supporting the oppressed nations", "Against the tyrant governments];"],
        },
        {
          type: "verse",
          number: 33,
          lines: ["And We granted bounties on them", "Which also served as means for their", "Trial."],
        },
        { type: "divider" },
        { type: "verse", number: 34, lines: ["These pagans of Quraish say:"] },
        {
          type: "verse",
          number: 35,
          lines: ["“There is only one death for us and we", "Shall not be raised up once we are", "Dead.”"],
        },
        { type: "verse", number: 36, lines: ["And they say: “Bring to life our", "Ancestors if you speak the truth.”"] },
        {
          type: "verse",
          number: 37,
          lines: ["Are they more important or the people", "Of Tubba{4} and other people before", "Them? We did destroy all of them due", "To their sinfulness and disbelief;"],
        },
        {
          type: "verse",
          number: 38,
          lines: ["And We did not create the heavens and", "The earth and what is between them in", "Vain;"],
        },
        { type: "verse", number: 39, continues: true, lines: ["We created them based on Truth and"] },
      ],
    },
    {
      bookPage: 926,
      blocks: [
        {
          type: "verse",
          number: 39,
          continued: true,
          lines: ["Divine Purposes, but most of these", "People do not understand."],
        },
        {
          type: "verse",
          number: 40,
          lines: ["Verily, the Resurrection Day is the Day", "Of Separation between Truth and", "Falsehood and it is the time appointed", "For all:"],
        },
        {
          type: "verse",
          number: 41,
          lines: ["The Day that no friend can help his", "Friend; and they will not receive any", "Help,"],
        },
        {
          type: "verse",
          number: 42,
          lines: ["Except him on whom Allāh bestows His", "Mercy; verily, Allāh is the Merciful", "Invincible-Mighty."],
        },
        { type: "divider" },
        { type: "verse", number: 43, lines: ["Verily, [in the Hell] the fruit of Zaqqūm", "Tree,"] },
        { type: "verse", number: 44, lines: ["Will be the only food for the sinful;"] },
        { type: "verse", number: 45, lines: ["Like the molten copper it will boil in", "Their bellies,"] },
        { type: "verse", number: 46, lines: ["Like the boiling water."] },
        {
          type: "verse",
          number: 47,
          lines: ["A call will be heard: “Seize him and", "Cast him in the middle of the Blazing", "Fire,"],
        },
        { type: "verse", number: 48, lines: ["“Then pour over his head of the boiling", "Water;”"] },
        {
          type: "verse",
          number: 49,
          continues: true,
          lines: ["[And to him will be said:] “Taste this", "Chastisement, you who considered"],
        },
      ],
    },
    {
      bookPage: 927,
      blocks: [
        { type: "verse", number: 49, continued: true, lines: ["Yourself the mighty honourable", "Gentleman!"] },
        {
          type: "verse",
          number: 50,
          lines: ["“This Chastisement is the same thing", "That you expressed your doubt about it.”"],
        },
        { type: "divider" },
        { type: "verse", number: 51, lines: ["Verily, on that Day the pious will be in a", "Place of comfort and security:"] },
        { type: "verse", number: 52, lines: ["They are among gardens and near", "Fountains,"] },
        {
          type: "verse",
          number: 53,
          lines: ["Dressed in fine silk with heavy brocade;", "And they are sitting on the sofas facing", "Each other;"],
        },
        { type: "verse", number: 54, lines: ["We let them marry the Angels of", "Paradise, those with large eyes;{5}"] },
        { type: "verse", number: 55, lines: ["They can call for whatever fruits they", "Care for in peace and security;"] },
        {
          type: "verse",
          number: 56,
          lines: ["They will not taste any death save the", "First one and by Allāh’s Favour they are", "Secured from the Torment of the Blazing", "Fire;"],
        },
        {
          type: "verse",
          number: 57,
          lines: ["And this is a Grace from your", "Creator&Nurturer and it is a Great", "Achievement."],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 928,
      blocks: [
        {
          type: "verse",
          number: 58,
          lines: ["[O, Messenger!] We have made this", "Qur’ān easy in your tongue,{6} in order", "That your people understand", "The meaning of it and be reminded by it;"],
        },
        {
          type: "verse",
          number: 59,
          lines: ["[Nevertheless they turn away from it]", "So [O, Messenger] wait for Allāh’s", "Promises [against the disbelievers], verily,", "They too are waiting."],
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
        { kind: "p", text: "The Holy Qur’ān, 2:185" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "The Children of Isrāīl" },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "A title of Himyar kings in Yamman who lived in Arabia for about two centuries [4-6 A.D] and they were star-worshippers." },
      ],
    },
    {
      id: 5,
      blocks: [
        { kind: "p", text: "The bachlors or those men whose wives were not of the righteous, since the righteous wives and children will join them in the Paradise 52:21 and 84:9" },
      ],
    },
    {
      id: 6,
      blocks: [
        { kind: "p", text: "The Arabic language" },
      ],
    },
  ],
};

export default surah;
