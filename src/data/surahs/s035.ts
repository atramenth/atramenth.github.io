import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 35 · Al-Fātir — book pages 792–802 (verses 1–45, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 35,
  pages: [
    {
      bookPage: 792,
      heading: {
        title: "Al-Fātir",
        lines: ["(The Originator of the Creation)", "Revealed at Makkah", "45 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["Thanksgiving and adoration is due only", "To Allāh the Originator-Creator of", "The heavens and the earth Who", "Appointed the Angels as the Divine", "Emissaries; Angels with wings two, three", "Or four; and He adds to their wings if", "He Decides so. Verily, Allāh is Powerful", "Over all things;"],
        },
        {
          type: "verse",
          number: 2,
          lines: ["When Allāh opens the gate of His", "Grace on a nation, no one can close it", "And the gate of His Grace that He", "Closes it on a nation, none can open", "Besides Him; and He is", "The Supremepower Sovereign;"],
        },
        {
          type: "verse",
          number: 3,
          continues: true,
          lines: ["O, men! Remember the Favour of Allāh", "Upon you! Is there any Creator besides", "Allāh who can provide you sustenance", "From the heaven and the earth? There"],
        },
      ],
    },
    {
      bookPage: 793,
      blocks: [
        {
          type: "verse",
          number: 3,
          continued: true,
          lines: ["Is no God but Allāh then how is that", "You turn away from the Truth?"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 4,
          lines: ["[O, Messenger!] If the disbelievers deny", "You, do not feel distressed, since", "The disbelievers of the old did the same", "To the Messengers before you. To Allāh", "Belongs the conclusive proof of all", "Affairs."],
        },
        {
          type: "verse",
          number: 5,
          lines: ["O, men! Verily, the Promise of Allāh is", "True, so do not let the wordly life", "Deceive you and do not let Satan", "Deceive you about Allāh;"],
        },
        {
          type: "verse",
          number: 6,
          lines: ["Surely Satan is your enemy, so you", "Should seriously consider him as an", "Enemy; he does invite his partisans", "To become the inhabitants of", "The Blazing Fire;"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["For the disbelievers there is a Severe", "Chastisement awaiting; and for", "The believers who do the righteous", "Deeds is a Great Reward;"],
        },
        {
          type: "verse",
          number: 8,
          continues: true,
          lines: ["Is the one whose evil deed is made", "Fair-seeming to him, and he looks upon", "It as good, like the one who escapes", "Devilish justifications and goes to", "The Right Way? Allāh does deprive", "The wrongdoers of His Guidance; and", "He bestows guidance on the one that", "He considers him entiteled. So", "[O, Messenger] do not destroy your soul"],
        },
      ],
    },
    {
      bookPage: 794,
      blocks: [
        {
          type: "verse",
          number: 8,
          continued: true,
          lines: ["Out of distress for them due to their", "Disbelief, since Allāh is the Knower of", "What they do."],
        },
        {
          type: "verse",
          number: 9,
          lines: ["Allāh is the One Who sends the winds to", "Move the clouds, and We drive them to", "A dry and bare of herbage land and", "Revive the dry and withered land with it:", "Such will be the case with Resurrection", "And raising up of the dead from the", "Graves."],
        },
        {
          type: "verse",
          number: 10,
          lines: ["Whoever tries to gain might and glory,", "He should know that Allāh is", "The Absolute Owner of might and", "Glory.{1} To Allāh ascend the pure and", "Sincere words [regarding Allāh’s Unity]", "And the righteous deeds ascend by", "The words of purity{2}. Those who plot", "Evil, for them will be a Severe", "Chastisement and their plot will be", "Perished."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 11,
          continues: true,
          lines: ["And Allāh created your father", "The original being [‘Ādam] from clay;", "Then created you, [‘Ādam’s offsprings]", "From a sperm-drop and He Ordained", "That you should have a mate and", "Become a couple. And no woman gets", "Pregnant nor she delivers her baby but is", "Known to Allāh, nor is a man", "Long-lived [like Nūh] nor is a part of his"],
        },
      ],
    },
    {
      bookPage: 795,
      blocks: [
        {
          type: "verse",
          number: 11,
          continued: true,
          lines: ["Life cut off but all is recorded in", "The Preserved Book; and all this is easy", "To Allāh."],
        },
        {
          type: "verse",
          number: 12,
          lines: ["The two kinds of the seas are not alike:", "The one with sweet water and pleasant", "Taste to drink and the other with salt", "Water and bitter; though from each of", "Them you eat fresh flesh of fish and", "Bring out pearl to be used as ornament.", "And you see the ships that drive forward", "Through the waves and you may seek of", "Allāh’s bounties [through trade journey]", "And that is upon you to express your", "Thanks."],
        },
        {
          type: "verse",
          number: 13,
          lines: ["Allāh is the One Who merges the night", "Into the day and the day into the night;", "And he has subjugated the sun and", "The moon by His Ordainment; and they", "Run their courses to an Appointed Term", "Towards the end of the world. [This", "Regular course of their running provides", "Man, time for rest and time for work", "One because of the darkness of the", "Night and one for the light-giving day.]", "Such is Allāh your Creator&Nurturer;", "To him belongs the Absolute Dominion", "Over all things, but those whom you", "Invoke besides Allāh, they do not", "Own power even as a pellicle;"],
        },
        {
          type: "verse",
          number: 14,
          continues: true,
          lines: ["If you invoke to them to remove your", "Problems or help you regarding your", "Needs they do not hear your invocation", "Even if they did, they cannot give any"],
        },
      ],
    },
    {
      bookPage: 796,
      blocks: [
        {
          type: "verse",
          number: 14,
          continued: true,
          lines: ["Positive response to your demand; also", "On the Resurrection Day they will deny", "Your partnership. So [O, Messenger] you", "Can only receive information from", "The Supreme Knower."],
        },
        { type: "divider" },
        { type: "verse", number: 15, lines: ["O, men! You are all in need of Allāh", "And Allāh is the Independent Rich;"] },
        {
          type: "verse",
          number: 16,
          lines: ["If He Intends He can remove you from", "The scene of existence and produce a", "New generation,"],
        },
        { type: "verse", number: 17, lines: ["And this is not a difficult task to", "Allāh."] },
        {
          type: "verse",
          number: 18,
          lines: ["On the Day of Judgement no sinner can", "Help another person with the burden of", "His sin and if he who is heavily loaded", "Should call another to bear his load, he", "Will not be aided though the one whom", "He has asked for help be of his near", "kinsmen. [O, Messenger] you can only", "Warn those who fear their Unseen", "Creator and who perform prayer and pay", "Alms. And whoever purifies himself", "[From the filth of polytheism, hypocrisy", "And other sins] he does it to the benefit", "Of himself because the return of all is to", "Allāh [and the process of reckoning will", "Surely take place]."],
        },
        { type: "divider" },
        { type: "verse", number: 19, continues: true, lines: ["Verily, the blind and the seeing are not"] },
      ],
    },
    {
      bookPage: 797,
      blocks: [
        { type: "verse", number: 19, continued: true, lines: ["Equal;"] },
        { type: "verse", number: 20, lines: ["Nor are the darkness and the light;"] },
        { type: "verse", number: 21, lines: ["Nor are the cool shade and the heat;"] },
        {
          type: "verse",
          number: 22,
          lines: ["Nor are the living and the dead.", "Verily, Allāh owns the power to make", "The deaf hear, but you [O, Messenger]", "Cannot make hear those who are in", "The graves;"],
        },
        {
          type: "verse",
          number: 23,
          lines: ["You are but a Warner, [your task is", "To warn not to give life, these people", "Are spiritually dead: Allāh will Decide", "For them.]"],
        },
        {
          type: "verse",
          number: 24,
          lines: ["[O, Messenger!] We have sent you on", "The basis of the Truth [due to", "The Divine Decision] as a Bearer of", "Glad-tidings and as a Warner; and no", "Nation of the past were without a", "Messenger;"],
        },
        {
          type: "verse",
          number: 25,
          lines: ["And if they belie you, [no wonder] so", "Did the generations before them with", "The Messengers who came to them with", "Signs and Miracles, Scriptures and", "The Illuminating Book;"],
        },
        {
          type: "verse",
          number: 26,
          lines: ["Therefore I [Allāh, the Almighty] seized", "The disbelievers with affliction which", "Was very severe."],
        },
        { type: "divider" },
        { type: "verse", number: 27, continues: true, lines: ["Have you not observed that Allāh sends"] },
      ],
    },
    {
      bookPage: 798,
      blocks: [
        {
          type: "verse",
          number: 27,
          continued: true,
          lines: ["Down rain from the sky by which We", "Brought out fruits with different colours?", "And in the mountains are also streaks,", "White and red and intensive black;"],
        },
        {
          type: "verse",
          number: 28,
          lines: ["And also men and beasts and cattle are", "Of various colours. The truth remains", "That among Allāh’s worshippers only", "The believing learned men are those", "Who fear Allāh. Verily, Allāh", "Is the Forgiving Invincible Mighty", "[Notwithstanding His might He forgives", "Those who do wrong out of ignorance.]"],
        },
        {
          type: "verse",
          number: 29,
          lines: ["Those who recite the Book of Allāh,", "Perform prayers regularly and spend to", "The poor secretly or publicly out of what", "We have bestowed on them, they have", "Entered a profit-making trade that will", "Not go through any bankruptcy;"],
        },
        {
          type: "verse",
          number: 30,
          lines: ["For Allāh will pay their rewards fully", "Even He will add to it out of His Favour", "Since He is indeed the Forgiving", "Appreciative [grants Forgiveness out of", "His Divine Favour.]"],
        },
        {
          type: "verse",
          number: 31,
          lines: ["[O, Messenger!] That which We have", "Revealed to you of the Qur’ān is", "The Perfect Truth and it is a confirmer", "Of the previous Books. Indeed Allāh is", "The Well-Aware Seer about His", "Worshippers;"],
        },
      ],
    },
    {
      bookPage: 799,
      blocks: [
        {
          type: "verse",
          number: 32,
          lines: ["Finally We appointed the Book{3} a", "Lasting Inheritance to Our selected", "Obedient worshippers [to remain among", "Them, generation after generation] some", "Of this nation of Islām are disobedient", "And self-oppressive, some are moderate", "And some are by Allāh’s Command", "Forerunners in doing good; and this is a", "Great virtue;"],
        },
        {
          type: "verse",
          number: 33,
          lines: ["The reward of these virtuous", "Worshippers will be the Gardens of", "Eternity in which they will enter and", "Abide forever. They will be adorned with", "Bracelets of gold and pearls and their", "Garments will be of silk;"],
        },
        {
          type: "verse",
          number: 34,
          lines: ["And they will say: “Thanksgiving and", "Adoration is due only to Allāh the One", "Who has repelled from us the anxiety", "About our fate regarding the Last", "Home; indeed our Creator is", "The Forgiving Appreciative, [overlooks", "Men’s flaws out of His Favour];"],
        },
        {
          type: "verse",
          number: 35,
          lines: ["“Allāh is the One Who out of Favour has", "Lodged us in the Permanent Home;", "Therein no hardship, no sense of fatigue", "Will touch us.”"],
        },
        {
          type: "verse",
          number: 36,
          lines: ["But those who disbelieved for them will", "Be the Hell Fire, no sentence is passed", "That they can die, nor their Torment is", "Lightened. Thus do We recompense", "The ungrateful people!"],
        },
      ],
    },
    {
      bookPage: 800,
      blocks: [
        {
          type: "verse",
          number: 37,
          lines: ["There they groan and cry out: “O, our", "Creator! Let us out of here to have", "Chance to do the righteous deeds.” [It", "Will be stated to them:] “Did We not", "Give you long enough of life so that", "To be reminded those of you who would", "Receive admonition? And did not for", "This purpose the Warner come to you?", "So taste you the due Torment, since", "There is no supporter for", "The wrongdoers.”"],
        },
        {
          type: "verse",
          number: 38,
          lines: ["Verily, Allāh is the Knower of", "The hidden things of the heavens and", "The earth, and He has full Knowledge of", "The secrets of men’s hearts;"],
        },
        {
          type: "verse",
          number: 39,
          lines: ["Allāh is the One Who appointed you", "Men the governors on the earth.", "Whoever disbelieves, his disbelief is", "Against him since it increases Allāh’s", "Wrath; therefore their disbelief ends in", "Their loss."],
        },
        {
          type: "verse",
          number: 40,
          lines: ["Say [O, Messenger!]: “Have you ever", "Thought about what your false deities", "Have created that you can show it to", "Me? Or have they any share in", "The creation of the heavens? Or have", "We given them a Book that they can", "Bring forth reasons from it for justifying", "Their polytheism?” The truth is that", "The wrongdoers promise each other", "Nothing but lies.{4}"],
        },
      ],
    },
    {
      bookPage: 801,
      blocks: [
        {
          type: "verse",
          number: 41,
          lines: ["Verily, Allāh is the One Who upholds", "The heavens and the earth to function", "By His Embracing Power and on", "The basis of Ordained Principles, so if", "They get out of order none but Allāh", "Can uphold them. Verily, Allāh is", "The Respite-Bestowing Forgiver [He", "Bestows respite to the people up to", "The determined time to repent and", "Amend]."],
        },
        {
          type: "verse",
          number: 42,
          lines: ["The polytheists of Arabia swore their", "Strongest oaths by Allāh that if a Warner", "Would come to them they would be", "Better guided than other nations, but", "When the Messenger came to them it", "Only increased their turning away from", "The Truth:"],
        },
        {
          type: "verse",
          number: 43,
          lines: ["They rebelled in the land arrogantly and", "Plotted evil plots, but the evil plots will", "Trap the plotters themselves. Are they", "Waiting for other than the fate of", "The disbelievers of the past? So no", "Conversion you will find in Allāh’s Way", "[Of treating the wrongdoers]; and you", "Will not surely find any change in", "Allāh’s Way in any case;{5}"],
        },
        {
          type: "verse",
          number: 44,
          continues: true,
          lines: ["Do they not travel through the earth", "To see the doom of those disbelievers of", "The past who were even stronger than", "Them? There is no power in the", "Heavens and on the earth to compete"],
        },
      ],
    },
    {
      bookPage: 802,
      blocks: [
        {
          type: "verse",
          number: 44,
          continued: true,
          lines: ["With Allāh’s Might: Indeed Allāh is", "The Omniscient Omnipotent."],
        },
        {
          type: "verse",
          number: 45,
          lines: ["And if Allāh were to punish men for every", "Disobedience they do, He would not", "Leave on the earth a single moving", "Creature, but he bestows respite on men", "For an Appointed Term; when the", "Ordained Term ends up, the Knower of", "The worshippers will Decide for their", "Punishment accordingly; since, Allāh is", "The Seer of His creatures, their deeds", "And intentions."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "So a believer should not compromise with the enemies of Allāh in order to gain honour and glory in this worldly life." },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "See 14:24" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "The Holy Qur’ān which is the Final and the Perfect Divine Book" },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "The ringleaders of the polytheism promise their followers deceiving promises about their idols." },
      ],
    },
    {
      id: 5,
      blocks: [
        { kind: "p", text: "Sunnat Allāh: Allāh’s Way; Line of Divine Conduct" },
      ],
    },
  ],
};

export default surah;
