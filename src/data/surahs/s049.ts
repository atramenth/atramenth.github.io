import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 49 · Al-Hujurāt — book pages 962–966 (verses 1–18, complete). Begins at the top of page 962 and ends partway down page 966.
 * Markup: {n} footnote marker · [ ] translator’s insertion.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 49,
  pages: [
    {
      bookPage: 962,
      heading: {
        title: "Al-Hujurāt",
        lines: ["(The Chambers)", "Revealed at Madīnah", "18 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["O, you who believe! Do not put your", "Own will and wish ahead of Allāh’s", "Command and Messenger’s guidance.", "And fear from the disobedience of", "Allāh’s Commands; verily, Allāh is", "The Knowing Hearer, [by His Embracing", "Knowledge He Hears the secrets and", "The intentions of His creatures]."] },
        { type: "verse", number: 2, lines: ["O, you who believe! Do not raise your", "Voice above the voice of", "The Messenger when you are in his", "Presence; and do not speak loudly to", "Him as you ordinarily speak to one", "Another; by being inconsiderate you may", "Unknowingly ruin your good deeds;"] },
        { type: "verse", number: 3, continues: true, lines: ["Those who speak with a low voice and", "Humbly to Allāh’s Messenger, it shows", "That their hearts are under the trial of", "Allāh for becoming pious; for such will"] },
      ],
    },
    {
      bookPage: 963,
      blocks: [
        { type: "verse", number: 3, continued: true, lines: ["Be Forgiveness and a great reward;"] },
        { type: "verse", number: 4, lines: ["Verily, those men who call out to you", "[O, Messenger] from behind your house", "Most of them are foolish and impolite;"] },
        { type: "verse", number: 5, lines: ["Whereas if they have patience till you", "Could come out to them [in a relax", "Condition] it would be better for them;", "However Allāh is the Merciful Forgiving,", "[So you too forgive them for their", "Ignorance]"] },
        { type: "divider" },
        { type: "verse", number: 6, lines: ["O, you who believe! If a spiteful person", "With a private motive comes to you", "With certain news, try to verify it before", "Making any decision lest you may", "Unknowingly harm other people and", "Then become remorseful of what you", "Have done."] },
        { type: "verse", number: 7, lines: ["And know that the Messenger of Allāh", "Is among you, [his decision is based on", "The Divine Decision] so do not impose", "Your decisions and thoughts on him lest", "You fall into trouble. Allāh has put", "The love for Faith in your hearts and", "Has enlightened your hearts by it; and", "Has made detested to you disbelief,", "Wickedness and rebellion; such people", "Indeed are the rightly guided;"] },
        { type: "verse", number: 8, lines: ["Possessing such virtues is a Favour and", "Grace from Allāh; and Allāh is", "The Source-Wisdom Knower."] },
      ],
    },
    {
      bookPage: 964,
      blocks: [
        { type: "verse", number: 9, lines: ["And if two tribes or groups of", "The believers fall into a fight try", "To establish peace between them but if", "One of them transgresses, then you fight", "Against the one who acts oppressively till", "It complies by Allāh’s Command; in that", "Situation then try to make peace and", "Reconciliation between them based on", "Justice; verily, Allāh is Affectionate to", "Those who are just and equitable;"] },
        { type: "verse", number: 10, lines: ["The Muslims are considered brothers, so", "Make peace and agreement between", "Your brothers; and fear from", "The disobedience of Allāh’s Commands", "That you may receive Mercy."] },
        { type: "divider" },
        { type: "verse", number: 11, lines: ["O, you who believe! Do not let some", "Men of your group or tribe make fun of", "Other group: It may be that the ones", "Who are laughed at are better than", "The ones who make scoff at others. And", "Should not the women of a group make", "Fun of the women of another group;", "May be those women who are laughed", "At are better than the ones who make", "Scoff at them; and do not be sarcastic to", "Each other and do not insult one", "Another by unpleasant nicknames: It is", "Bad to call a newly believer with a name", "Of bad connotation; and those who do", "Not desist, are indeed the wrongdoers."] },
        { type: "verse", number: 12, continues: true, lines: ["O, you who believe! Avoid much"] },
      ],
    },
    {
      bookPage: 965,
      blocks: [
        { type: "verse", number: 12, continued: true, lines: ["Suspicion since in some cases", "Suspicion is a sin; and do not be", "Inquisitive about other people’s life and", "Do not backbite about one another;", "Is there any one of you who would like", "To eat from the flesh of his dead", "Brother? You would surely hate it, so", "Fear from the disobedience of Allāh’s", "Commands; verily, Allāh is the Merciful", "Repentance-Accepter. [You can repent if", "You have done any of these wrong", "Deeds]."] },
        { type: "verse", number: 13, lines: ["O, mankind! Verily, We created you all", "From a male and female [‘Ādam and", "Eve] and appointed for you tribes and", "Nations to be known to each other [by", "Specified characteristics] Verily, in", "Allāh’s Sight the most honourable of you", "Is the most pious of you; and Allāh is", "The Informed Owner of Knowledge."] },
        { type: "divider" },
        { type: "verse", number: 14, lines: ["The desert dweller Arabs say: “We", "Believe.” Say [O, Messenger!]: “You have", "Not believed, so you only say: “We are", "Submitted to Islām”; since Faith has not", "Yet entered into your hearts, but if you", "Obey Allāh and His Messenger, He", "Will not decrease anything from", "The reward of your deeds; verily, Allāh", "Is the Merciful Forgiving.”"] },
        { type: "verse", number: 15, continues: true, lines: ["The true believers are those who believe", "In the Oneness of Allāh and obey His", "Messenger due to his position; and do"] },
      ],
    },
    {
      bookPage: 966,
      blocks: [
        { type: "verse", number: 15, continued: true, lines: ["Not let doubt approaches them", "Regarding their belief and they strive", "With their wealth and their lives in", "Allāh’s Path; those are the truthful", "Indeed [since they have proved their", "Faith by acting according to Allāh’s", "Decrees.]"] },
        { type: "verse", number: 16, lines: ["Say [O, Messenger!]: “Do you mean", "To inform Allāh about your being", "Religious? Whereas Allāh knows all that", "Is in the heavens and all that is on", "The earth and Allāh is the Absolute", "Knower of all things.”"] },
        { type: "verse", number: 17, lines: ["They consider it a favour on you that", "They have accepted the Religion of", "Islām. Say [O, Messenger!]: “Do not", "Consider your Islām as a favour on me;", "Allāh is the One Who has granted a", "Favour on you by guiding you to", "The Faith, if you be truthful about having", "Faith.”"] },
        { type: "verse", number: 18, lines: ["Verily, Allāh knows the hidden secrets", "Of the heavens and the earth; and Allāh", "Is the Seer of what you do."] },
      ],
    },
  ],
  footnotes: [
  ],
};

export default surah;
