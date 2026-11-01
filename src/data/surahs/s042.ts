import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 42 · Ash-Shūrā — book pages 895–906 (verses 1–53, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 42,
  pages: [
    {
      bookPage: 895,
      heading: {
        title: "Ash-Shūrā",
        lines: ["(The Consultation)", "Revealed at Makkah", "53 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Hā. Mīm{1}"] },
        { type: "verse", number: 2, lines: ["‘Ain. Sīn. Qāf{2}"] },
        {
          type: "verse",
          number: 3,
          lines: ["Thus does Allāh, the Source-Wisdom", "Supremepower reveal to you", "[O, Messenger] as He did reveal to", "The Messengers before you;"],
        },
        {
          type: "verse",
          number: 4,
          lines: ["To Him belong all that is in the heavens", "And all that is on the earth; and He is", "The Exalted Supreme-Great."],
        },
        {
          type: "verse",
          number: 5,
          continues: true,
          lines: ["The heavens from the above may", "Rent asunder [from what the polytheists", "Ascribe to Allāh such as having partner", "Or child]; the Angels repeat", "The Remembrance of thanksgiving", "To their Creator&Nurturer; they also"],
        },
      ],
    },
    {
      bookPage: 896,
      blocks: [
        {
          type: "verse",
          number: 5,
          continued: true,
          lines: ["Ask Allāh’s Forgiveness for those on", "The earth; [O, people] know that Allāh is", "The Merciful Forgiving [and He will", "Accept your repentance, so repent to", "Him invokingly]"],
        },
        {
          type: "verse",
          number: 6,
          lines: ["And those who have chosen guardians", "Besides Allāh, He watches their deeds;", "And you [O, Messenger] are not", "Responsible for what they do out of", "Disbelief;"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["And We revealed this Holy Qur’ān in", "Arabic language that you warn", "People of the Mother of the Cities{3}", "And all around it, and that you warn", "Them of the Day of Assembly about", "Which there is no doubt; on that Day", "Some will enter the Paradise and some", "The Blazing Fire."],
        },
        {
          type: "verse",
          number: 8,
          lines: ["And if Allāh had so Willed he could", "Have made the whole people a single", "Nation,{4} but He bestows His Grace", "Upon whom He Wills, so the disbelievers", "Will have no guardian and no protector;"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["Have they [the polytheists] chosen", "Guardians besides Him? But Allāh is", "The Only Guardian and He is the One", "Who gives life to the dead and He is", "Powerful over all things."],
        },
      ],
    },
    {
      bookPage: 897,
      blocks: [
        {
          type: "verse",
          number: 10,
          lines: ["[Say O, Messenger!:] “And in whatever", "You people differ the Decision and", "The Command is with Allāh; such is", "Allāh, my Creator&Nurturer in Whom I", "Have put my trust and to Him I invoke", "For everything I need.”"],
        },
        {
          type: "verse",
          number: 11,
          lines: ["Allāh is the Creator of the heavens and", "The earth. He has made for you mates", "Of human kind; and for the cattle also", "Mates [to maintain generation among", "The creatures]; for Allāh there is no", "Similar, no mate: He is One and Only", "And He is the Knowing Seer;"],
        },
        {
          type: "verse",
          number: 12,
          lines: ["To Him belong the keys of the heavens", "And the earth; Allāh expands", "The sustenance for whom He Wills", "[According to the Divine Decision] and", "Restricts it for whom He Wills", "[According to the Divine Decision]", "Verily, Allāh is the Knower of all things;"],
        },
        {
          type: "verse",
          number: 13,
          continues: true,
          lines: ["Allāh has Determined for you the same", "Religion which He enjoined on Nūh,", "And what We revealed to you", "[O, Mohammad] is that which We", "Enjoined on Ibrāhīm, Mussā and Īssā;", "And We have emphatically enjoined that", "You [Messengers] should all be steadfast", "In establishing the Religion of", "Monotheism; and do not cause any", "Division therein, though what you invite", "Them to is hard on the polytheists. Allāh", "Chooses [for prophethood] whom He"],
        },
      ],
    },
    {
      bookPage: 898,
      blocks: [
        {
          type: "verse",
          number: 13,
          continued: true,
          lines: ["Wills, and guides to His Path those who", "Return to Him invokingly."],
        },
        {
          type: "verse",
          number: 14,
          lines: ["And they{5} became divided only after", "They observed that Allāh’s Promise was", "Fulfilled [regarding the Appearance of", "The Holy Messenger of Islām] and", "The reason behind it was selfish motives", "And envy; and had it not been for", "The Word that had been Ordained", "Before from your Creator&Nurturer to", "An Appointed Term [regarding respite],", "Perdition would have fallen on them;", "And those who were made to inherit", "The Book{6} are still in doubt about it", "[Concerning the Divine Prophecy of", "The Appearance of the Holy Messenger];"],
        },
        {
          type: "verse",
          number: 15,
          lines: ["So you [O, Messenger!] invite them to", "This Religion of Islām and the Holy", "Qur’ān and be firm and steadfast about", "It, as you have been Commanded; and", "Do not conform to their caprices; and", "Say: “I believe in all the Books that", "Allāh has sent down and I am", "Commanded to establish justice among", "You; Allāh is our Creator and your", "Creator; we are responsible for our", "Deeds and you for your deeds; there is", "No personal dispute between us and", "You; Allāh will gather us on", "The Resurrection Day; and to Him is", "Our return.”"],
        },
      ],
    },
    {
      bookPage: 899,
      blocks: [
        {
          type: "verse",
          number: 16,
          lines: ["And those who dispute about Allāh with", "The believers who have accepted", "To follow the Divine Path, their", "Argument is utterly absurd in the Sight", "Of their Creator; Allāh’s Wrath will be", "On them and for them will be a", "Severe Chastisement."],
        },
        {
          type: "verse",
          number: 17,
          lines: ["Allāh is the One Who has sent down", "The Book from the Source of Truth and", "It is a Criterion for judging between", "Right and Wrong. And how do you", "Know, may be the Hour of Resurrection", "Is near;"],
        },
        {
          type: "verse",
          number: 18,
          lines: ["Those who do not believe in the Hour", "Seek to hasten it, while those who", "Believe in it, are worried since they", "Know that it is the Truth. Verily, those", "Who express their doubts about", "The Resurrection, are certainly plunged", "Into a serious error."],
        },
        {
          type: "verse",
          number: 19,
          lines: ["Allāh is Gracious to His human", "Creatures and He gives sustenance to", "Whom He Wills [and also according to", "Men’s demand] and He is indeed the", "Supreme Invincible Mighty."],
        },
        {
          type: "verse",
          number: 20,
          lines: ["Whoever intends the tilth of", "The Hereafter We increase his portion", "Of the production and whoever intends", "The tilth of this world, We grant him of", "That but surely he will have no portion", "In the Hereafter."],
        },
      ],
    },
    {
      bookPage: 900,
      blocks: [
        {
          type: "verse",
          number: 21,
          lines: ["Do they have deities who have compiled", "A religious law for them without Allāh’s", "Permission? Had it not been for", "The Ordained Word of the past", "[Regarding respite], perdition would have", "Fallen on them; and indeed for", "The disbelievers there is a painful", "Chastisement;"],
        },
        {
          type: "verse",
          number: 22,
          lines: ["On the Day of Judgement you will see", "The disbelievers are in fear due to", "The consequences of their deeds,", "However the Torment will fall upon", "Them; but those who believe and do", "Righteous deeds, in the Gardens they", "Shall have all that they wish in", "The Presence of their Creator and that", "Is the Great Grace;"],
        },
        {
          type: "verse",
          number: 23,
          lines: ["Such hospitality is what Allāh gives its", "Glad-tidings to His obedient", "Worshippers who do righteous deeds.", "Say [O, Messenger!]: “No wage I ask you", "For my Mission, [Messenger’s reward is", "With Allāh] but all I expect is", "The affection to my near kin.”{7} And if", "Anyone does any good We shall give", "Him an increase of good instead. Verily,", "Allāh is the Appreciative Forgiving."],
        },
        {
          type: "verse",
          number: 24,
          continues: true,
          lines: ["Do they say that he has forged a lie", "Against Allāh? [due to showing", "Kindness to Messenger’s near kin]"],
        },
      ],
    },
    {
      bookPage: 901,
      blocks: [
        {
          type: "verse",
          number: 24,
          continued: true,
          lines: ["Whereas if Allāh Wills He could seal up", "Your heart [in order not to be able", "To receive Revelations and passing them", "To the people.] And Allāh repells", "Falsehood and proves the Truth by His", "Word of Command. Verily, He knows", "The secrets of the hearts;"],
        },
        {
          type: "verse",
          number: 25,
          lines: ["Allāh is the One Who accepts", "Repentance from His human creatures", "And forgives their sins; and He knows", "All that you people do;"],
        },
        {
          type: "verse",
          number: 26,
          lines: ["And He fulfills the prays of His", "Believers who do righteous deeds", "And gives them increase out of His", "Grace. And for the disbelievers surely", "There is but a Severe Chastisement."],
        },
        {
          type: "verse",
          number: 27,
          lines: ["If Allāh gives sustenance and wealth to", "His human creatures abundantly, they", "Reble on the earth, so He sends down", "Sufficient provision due to people’s", "Need and capacity. Verily, Allāh is", "The Informed Seer of His human", "Creatures;"],
        },
        {
          type: "verse",
          number: 28,
          lines: ["And Allāh is the One Who sends down", "Rain after people are despaired due to", "Drought, and spreads His Grace", "Everywhere; and He is the Benevolent", "Guardian;"],
        },
        {
          type: "verse",
          number: 29,
          continues: true,
          lines: ["And of His Signs of Power is", "The creation of the heavens and", "The earth and all creatures that He has"],
        },
      ],
    },
    {
      bookPage: 902,
      blocks: [
        {
          type: "verse",
          number: 29,
          continued: true,
          lines: ["Spread in them; and He is Able", "To assemble them when He Wills."],
        },
        {
          type: "verse",
          number: 30,
          lines: ["And whatever misfortune befalls on you", "People, it is the result of your own deeds", "But Allāh forgives a great part of them;"],
        },
        {
          type: "verse",
          number: 31,
          lines: ["And you cannot frustrate Allāh’s", "Power in the earth nor you have", "Besides Allāh any guardian or protector."],
        },
        { type: "verse", number: 32, lines: ["And of His Signs of Power are", "The mountain-like ships sailing in", "The sea;"] },
        {
          type: "verse",
          number: 33,
          lines: ["If Allāh Decides He causes the wind", "To cease moving, so that the ships", "Become motionless on the back of", "The sea. Verily, in these are Signs of", "Allāh’s Power for the grateful and", "Patient believers;"],
        },
        {
          type: "verse",
          number: 34,
          lines: ["Or He may cause a severe storm", "To perdish the passengers due to their", "Wrongdoings, but He pardons most", "Of them;"],
        },
        {
          type: "verse",
          number: 35,
          lines: ["And those who dispute over Our", "Signs and Miracles, should know that", "For them there will be no way of escape", "Against the Divine Punishment."],
        },
        {
          type: "verse",
          number: 36,
          continues: true,
          lines: ["So whatever you people have been", "Given is only means of this temporal life", "But what is in Allāh’s Presence is better"],
        },
      ],
    },
    {
      bookPage: 903,
      blocks: [
        {
          type: "verse",
          number: 36,
          continued: true,
          lines: ["And more enduring for those who", "Believe and put their trust in their", "Creator&Nurturer:"],
        },
        {
          type: "verse",
          number: 37,
          lines: ["[The believers who put their trust", "In their Creator are:] Those who avoid", "To commit Grave Sins and when they", "Are made angry they forgive;"],
        },
        {
          type: "verse",
          number: 38,
          lines: ["[The believers who put their trust in", "Their Creator are:] Those who respond", "To the Call and Command of their", "Creator, and perform their prayers", "Regularly, and for running their affairs", "They employ mutual consultations", "Among themselves, and spend in Allāh’s", "Way out of what We have given them as", "Sustenance;"],
        },
        {
          type: "verse",
          number: 39,
          lines: ["[And the believers who put their trust", "in their Creator are:] Those who when", "They have been attacked by oppression", "Take revenge in their own defence;"],
        },
        {
          type: "verse",
          number: 40,
          lines: ["And a recompense for any harm is an", "Equal harm, but if one forgives and", "Makes reconciliation, his reward will be", "With Allāh, since Allāh does not like", "The oppressors;"],
        },
        {
          type: "verse",
          number: 41,
          lines: ["But if a person takes revenge in", "Defending himself after he has been", "Wronged there is no blame on him;"],
        },
        {
          type: "verse",
          number: 42,
          continues: true,
          lines: ["Blame is on those who do wrong to", "The people and make mischief through"],
        },
      ],
    },
    {
      bookPage: 904,
      blocks: [
        {
          type: "verse",
          number: 42,
          continued: true,
          lines: ["The land disregard of justice; for such", "People will be a severe Chastisement;"],
        },
        {
          type: "verse",
          number: 43,
          lines: ["But if a person shows patience and", "Forgives, that is indeed a sign of", "Possessing a strong will and resolution."],
        },
        {
          type: "verse",
          number: 44,
          lines: ["The one whom Allāh has deprived of", "His Guidance, there is no Guardian for", "Him instead of Allāh; and [on", "The Resurrection Day] you will see", "The wrongdoers [who look for a way]", "When they are faced with", "The Chastisement and they say: “Is there", "A way that one can return?”"],
        },
        {
          type: "verse",
          number: 45,
          lines: ["And you will see them in their", "Humiliation when they are exposed to", "The Fire, looking at it with a stealthy", "Glance; and the believers [pointing to", "Them] will say: “These are the ones", "Who made themselves and their family", "[Who followed them] the losers on", "The Resurrection Day.” Know that", "Truly the wrongdoers will be in a", "Permanent Chastisement;"],
        },
        {
          type: "verse",
          number: 46,
          lines: ["And no Guardian they have to protect", "Them instead of Allāh; but whomever", "Allāh deprives of His Guidance, there", "Is no way to salvation for him;"],
        },
        {
          type: "verse",
          number: 47,
          continues: true,
          lines: ["So, [O, men!] listen to Allāh’s Call", "Before comes a Day which there will be"],
        },
      ],
    },
    {
      bookPage: 905,
      blocks: [
        {
          type: "verse",
          number: 47,
          continued: true,
          lines: ["No return for it; and the Day that there", "Will be no place of refuge for you; and", "No chance for denying your deeds."],
        },
        {
          type: "verse",
          number: 48,
          lines: ["[O, Messenger!] If these people turn", "Away [do not feel distressed] because We", "Have not sent you as a protector over", "Them; your only duty is to convey", "The Divine Message publicly. And verily,", "When We cause a man to taste of Our", "Grace he feels joyous about it, but when", "Some misfortune befalls him, due to his", "Own deeds, he turns away from the", "Truth, so indeed man is ingratitude."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 49,
          lines: ["To Allāh belongs the Dominion of", "The heavens and the earth: He creates", "Whatever He Wills: He bestows female", "Child upon whom He Wills and male", "Child to whom He Wills,"],
        },
        {
          type: "verse",
          number: 50,
          lines: ["Or He bestows both males and females", "And He leaves barren whom He Wills", "Verily, Allāh is the Supreme-Knowing", "Ordainer."],
        },
        {
          type: "verse",
          number: 51,
          lines: ["There is not any chance for man that", "Allāh should speak to him unless it be", "By Revelation or from behind a veil or", "He sends an Angel to reveal to him what", "He Wills by His Permission. Verily,", "Allāh is the Exalted Source-Wisdom."],
        },
        { type: "verse", number: 52, continues: true, lines: ["And thus We have revealed to you"] },
      ],
    },
    {
      bookPage: 906,
      blocks: [
        {
          type: "verse",
          number: 52,
          continued: true,
          lines: ["[O, Messenger] through an Arch Angel", "By Our Command. Before this you did", "Not know what was Book of religion and", "What was Faith; but We have made", "The Qur’ān a Light by which We guide", "Our worshippers as We Will; and verily,", "You [O, Messenger] do guide people to", "The Straight Path,"],
        },
        {
          type: "verse",
          number: 53,
          lines: ["Which is the Path of Allāh; and Allāh is", "The One to Whom belongs whatever is", "In the heavens and whatever is on the", "Earth. O, people! Do know that all", "Affairs are directed to Allāh’s Will."],
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
        { kind: "p", text: "See note on 2:1" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "Makkah City" },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "Allāh granted freedom of choice to man after sending Messengers and Books for his guidance." },
      ],
    },
    {
      id: 5,
      blocks: [
        { kind: "p", text: "People of the Book" },
      ],
    },
    {
      id: 6,
      blocks: [
        { kind: "p", text: "Taurāt" },
      ],
    },
    {
      id: 7,
      blocks: [
        { kind: "p", text: "Reference is made to Ali (AS) who was a real Fighter against the polytheists and the disbelievers, so they were hostile towards him due to his Faith in Monotheism. (Commentators)" },
      ],
    },
  ],
};

export default surah;
