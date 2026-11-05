import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 34 · Saba — book pages 779–791 (verses 1–54, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 34,
  pages: [
    {
      bookPage: 779,
      heading: {
        title: "Saba",
        lines: ["(The City of Saba)", "Revealed at Makkah", "54 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["Thanksgiving and adoration of", "The worshippers is only due to Allāh,", "The One Who Owns whatever in", "The heavens and on the earth; and in", "The Hereafter also thanksgiving and", "Adoration of the worshippers is only", "Due to Him; and He is the Well-Aware", "Sovereign [above the whole existence];"],
        },
        {
          type: "verse",
          number: 2,
          lines: ["Allāh knows all that goes into the earth", "[Such as grain] and all that comes out", "[Such as vegetations] [and He knows] all", "That descends from the sky [such as", "Revelations, Angels, sun shine and rain;", "[And He knows] all that ascends to", "The sky [such as people’s invocations];", "And Allāh is the Forgiving Merciful."],
        },
        { type: "divider" },
        { type: "verse", number: 3, continues: true, lines: ["The disbelievers keep on saying: “To us"] },
      ],
    },
    {
      bookPage: 780,
      blocks: [
        {
          type: "verse",
          number: 3,
          continued: true,
          lines: ["The Hour of Resurrection will not", "Come.” Say [O, Messenger!]: “This is not", "True; by my Creator it will afflict you by", "The Command of Allāh, the One Who is", "The Knower of the Unseen and", "Everything even as little as an atom is", "Not hidden from his Knowledge in the", "Heavens or on the earth, nor is there", "Anything smaller or bigger than the atom", "Which is not in the Preserved Book of", "Allāh’s Knowledge.”"],
        },
        {
          type: "verse",
          number: 4,
          lines: ["It is on the basis of this Divine", "Knowledge that Allāh does reward those", "Who believe and do deeds of", "Righteousness, for such people is", "Forgiveness and a generous sustenance;"],
        },
        {
          type: "verse",
          number: 5,
          lines: ["But those who try to frustrate Us by", "Denying Our Signs and Miracles, surely", "For them will be a Severe Torment."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 6,
          lines: ["And those on whom knowledge has", "Been bestowed know well that what is", "Revealed to you [O, Messenger] from", "Your Creator&Nurturer is the Absolute", "Truth and it guides man to the Path of", "The Invincible-Mightly Commender;"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["And the disbelievers said to the people:", "“Shall we show you a man who claims", "When you are turned into dust after", "Your death, then you will again have a", "New life?"],
        },
      ],
    },
    {
      bookPage: 781,
      blocks: [
        {
          type: "verse",
          number: 8,
          lines: ["“Has this man forged a lie against Allāh", "Or is he a crazy one?” Nay! none of", "These; but for those who disbelieve in", "The Hereafter there will be a Severe", "Torment because they are fallen in a", "Severe error;"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["Do they not see what can happen to", "Them of the sky and the earth now", "And in the future? If We Will, We", "Could Command the earth to swallow", "Them [as it happened to Qārūn] or", "Command the sky to shower stones on", "Them [as it happened to Lūt’s people]", "Verily, in this is an admonishing lesson", "For any repentant worshipper."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 10,
          lines: ["And verily, We bestowed Dāwūd certain", "Divine Distinctions from Our Presence", "And We stated to the mountains and", "The birds: “O, mountains and birds! Sing", "Along with him the songs of the Psalms!”", "And We made the iron soft for him;"],
        },
        {
          type: "verse",
          number: 11,
          lines: ["[And We revealed to him:] “Make coats", "Of mails loose fitting and easy to wear", "For men of war; and the chains of", "The coats of mail should be equal and", "Well balanced; and you and your", "People do righteous deeds, since surely", "I am Aware of what you do.”"],
        },
        {
          type: "verse",
          number: 12,
          continues: true,
          lines: ["And We subjected the wind to", "Solaimān;{1} [he was carried around by"],
        },
      ],
    },
    {
      bookPage: 782,
      blocks: [
        {
          type: "verse",
          number: 12,
          continued: true,
          lines: ["The wind] he could in a morning stride a", "Distance of one month’s journey and he", "Could in an evening stride a distance of", "One month’s journey; and We caused a", "Fountain of melted copper to flow for", "Him [to make vessels from it;] and", "The devils and jinns by Allāh’s", "Command worked for him and whoever", "Turned away from Our Command We", "Made him taste the punishment of", "The Blazing Fire;"],
        },
        {
          type: "verse",
          number: 13,
          lines: ["They made for him whatever he pleased,", "Such as: Temples, sculptures, images;", "And bowls as large as a pool and also", "Fixed cooking pots. [We stated to them:]", "“O, people of Dāwūd! Be thankful to", "Allāh’s Grace on you.” But very few of", "My worshippers are grateful;"],
        },
        {
          type: "verse",
          number: 14,
          lines: ["But when We decreed death for him,", "None of them were informed except a", "Termite which chewed his stick and", "Broke it, then Solaimān fell down. Had", "They, the Jinns [as it is believed by", "The people] owned the knowledge of", "The Unseen, they would not have", "Continued that humiliating torment [and", "Would quit the job]."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 15,
          continues: true,
          lines: ["There was a Sign of Allāh’s Favour for", "The people of Saba: Two blessing", "Gardens on the right and the left sides", "Of their home-land, with all kinds of", "Fruits and vegetations. [Their Messengers"],
        },
      ],
    },
    {
      bookPage: 783,
      blocks: [
        {
          type: "verse",
          number: 15,
          continued: true,
          lines: ["Told them:] “Eat of what your", "Creator&Nurturer has Bestowed you", "And express your thanks to Him for", "Granting you a pure and good land and", "For having a Forgiving Creator.”"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["But they rebelled and turned away from", "The Truth, so We afflicted them with a", "Violent flood; and converted their", "Productive gardens into two gardens", "Which yielded but bitter fruits and", "Tamarisk and some few lote-trees;"],
        },
        {
          type: "verse",
          number: 17,
          lines: ["Thus We requited them because they", "Were the ungrateful disbelievers; do We", "Give such requital except to those who", "Are ungrateful and disobedient?"],
        },
        {
          type: "verse",
          number: 18,
          lines: ["And We put between them and the cities", "Which We had blessed{2} small towns", "Related to one another; and We", "Ordained the journey therein and [their", "Messengers told them:] “Travel through", "The towns secure by nights and days.”"],
        },
        {
          type: "verse",
          number: 19,
          lines: ["But those ungrateful people [prayed:]", "“O, our Creator&Nurturer! Cause", "Longer distances between our towns.”", "And by this ungratefulness they did", "Wrong to themselves, so We destroyed", "Them by dispersing them; and We made", "Them a legend to be narrated for those", "Who take lessons; indeed in this is a", "Sign for every grateful patient;"],
        },
      ],
    },
    {
      bookPage: 784,
      blocks: [
        {
          type: "verse",
          number: 20,
          lines: ["And about them Satan found his", "Supposition quite fulfilled{3} and they all", "Followed him but a small group of", "The believers;"],
        },
        {
          type: "verse",
          number: 21,
          lines: ["Satan had no influence over them:{4}", "But through him We made it known", "Those who believed in the Hereafter", "From those who did not believe in it;", "And your Creator&Nurturer is", "The Protector of the whole existence."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 22,
          lines: ["Say: [O, Messenger!] “Invoke to those", "Whom you consider partners for Allāh", "For helping you in your affairs; they do", "Not own anything even to the weight of", "An atom in the heavens and the earth", "And they had no share in the creation of", "The heavens and the earth, nor any of", "Them has assisted Allāh in these", "Creations;"],
        },
        {
          type: "verse",
          number: 23,
          lines: ["“No intercession is accepted in", "The Presence of Allāh save by those", "Who are permitted to intercede.” The", "Sinners in order to remove fear and", "Anxiety from their hearts keep on asking", "The intercessors: “What is that your", "Creator said and decreed?” They will", "Reply: “He decreed what is true and just;", "And He is the Supreme-Exalted Great.”"],
        },
      ],
    },
    {
      bookPage: 785,
      blocks: [
        {
          type: "verse",
          number: 24,
          lines: ["Say [O, Messenger!]: “Who gives you", "Sustenance from the heavens and", "The earth?” Say: “Allāh”, then say: “Surely", "One of the two groups, we or you are on", "The Right Path or in an obvious error.”"],
        },
        {
          type: "verse",
          number: 25,
          lines: ["Say [O, Messenger!]: “And on", "The Resurrection Day you will not be", "Questioned of our sins and we will not", "Be questioned of your sins.”"],
        },
        {
          type: "verse",
          number: 26,
          lines: ["Say [O, Messenger!]: “Allāh will gather", "All of us on the Day of Resurrection,", "Then he will judge among us on the basis", "Of the Truth, since He is", "The Knowing Judge.” [And through His", "Embracing Knowledge He is Aware of", "The deeds of all His creatures]"],
        },
        {
          type: "verse",
          number: 27,
          lines: ["Say [O, Messenger!]: “Show me those", "Whom you consider partners for Allāh”", "But they do not exist. He is Allāh,", "The Invincible Mighty Sovereign in", "The heavens and on the earth."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 28,
          lines: ["[O, Messenger!] We did not send you", "But as a guide to all mankind in order", "To give glad-tidings to the believers and", "To warn those who have gone astray;", "But the majority of the people are", "Ignorant [so the Messenger will", "Encounter with problems along the way", "Of his Mission]"],
        },
      ],
    },
    {
      bookPage: 786,
      blocks: [
        {
          type: "verse",
          number: 29,
          lines: ["And the disbelievers say: “When this", "Promise of Resurrection will be fulfilled", "If you are truthful?”"],
        },
        {
          type: "verse",
          number: 30,
          lines: ["Say [O, Messenger!]: “What is promised", "To you will come on the exact Ordained", "Time; you cannot postpone Allāh’s", "Ordainment nor you can hasten on, even", "For an hour.”"],
        },
        {
          type: "verse",
          number: 31,
          lines: ["The disbelievers say: “We do not believe", "In the Qur’ān nor in the Scriptures", "Which came before it.” And", "[O, Messenger!] if you could see", "The guilty ones [how miserable they", "Look] when on the Day of Resurrection", "They are made to stand in the Presence", "Of their Creator; some utter the blaming", "Words to others; those who were feeble", "Followers among them say to", "The arrogant ringleaders of disbelief:", "“Had it not been because of you we", "Would have certainly been of", "The believers.”"],
        },
        {
          type: "verse",
          number: 32,
          lines: ["The ringleaders of the disbelief will", "Reply them saying: “Did we hinder you", "From the way after the guidance came", "To you? No! You were corrupt minded", "And wrongdoers.”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 33,
          continues: true,
          lines: ["And the feeble followers will say to", "The ringleaders of the disbelief: “You", "Out of plot chased us by night and day"],
        },
      ],
    },
    {
      bookPage: 787,
      blocks: [
        {
          type: "verse",
          number: 33,
          continued: true,
          lines: ["To convince us that we should disbelieve", "In Allāh and should consider equals for", "Him.” And they disclose their remorse", "When they practially see Our", "Chastisement; and We put chains around", "The necks of the disbelievers; is not", "Indeed the requital equal to their deeds?"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 34,
          lines: ["We never sent a Warner to a community", "But the affluents among them said: “We", "Do not believe in the Message with", "Which you have been sent.”"],
        },
        {
          type: "verse",
          number: 35,
          lines: ["And they also said: “We have more", "Wealth and children [than the believers]", "So this proves we are not to be", "Punished.”"],
        },
        {
          type: "verse",
          number: 36,
          lines: ["Say [O, Messenger!]: “My Creator is", "The One Who increases the sustenance", "Or restricts it to whom He Wills. But", "Most of people do not know [that this is", "But a trial].”"],
        },
        {
          type: "verse",
          number: 37,
          lines: ["Your wealth and children are not", "The means of your nearness to Us, but", "Only those who believe and do righteous", "Deeds, their reward will be doubled", "Due to their good deeds; and on the high", "Dwellings in the Garden, they will be", "Safe and secure,"],
        },
        { type: "verse", number: 38, continues: true, lines: ["But those who try hard to deny Our"] },
      ],
    },
    {
      bookPage: 788,
      blocks: [
        {
          type: "verse",
          number: 38,
          continued: true,
          lines: ["Signs and Messages in order to frustrate", "Our Power and Plans, they will surely be", "Called up into the Torment of the Fire."],
        },
        {
          type: "verse",
          number: 39,
          lines: ["Say [O, Messenger!]: “Verily, my", "Creator&Nurturer gives abundant or", "Restricted sustenance to His", "Worshippers as He Wills, and whatever", "You spend in Allāh’s Way, He will", "Bestow you instead and He is the", "Source Sustainer.”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 40,
          lines: ["And on the Day that Allāh will gather", "All of the polytheists, He will state to", "The Angels: “Did these people worship", "You?”"],
        },
        {
          type: "verse",
          number: 41,
          lines: ["They will say: “You are above having", "Partner in worship; You are our", "Guardian! But they worshipped", "The Jinns and most of them believed in", "Them!”"],
        },
        {
          type: "verse",
          number: 42,
          lines: ["So on the Day of Resurrection none of", "You will own any power to harm or", "Benefit one another; and We will state", "To the disbelievers: “Taste the Fire that", "You belied it!”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 43,
          continues: true,
          lines: ["And when Our Illuminating Words of", "Revelation are recited to them, they say", "To the people: “All this Mohammad"],
        },
      ],
    },
    {
      bookPage: 789,
      blocks: [
        {
          type: "verse",
          number: 43,
          continued: true,
          lines: ["Intends to do is to hinder you from", "What your ancestors used to worship”{5}", "And they say: “This Qur’ān is not but a", "Forged lie.” And whenever [through", "The life of the history] the Message of", "Truth came to the disbelievers, they used", "To repeat the same slogan: “This is but", "An evident magic!”"],
        },
        {
          type: "verse",
          number: 44,
          lines: ["[O, Messenger!] We had not send Books", "Of Religion to your people that they", "Could study; and We did not send them", "Any Messenger before you;"],
        },
        {
          type: "verse",
          number: 45,
          lines: ["And the disbelievers of former", "Generations used to deny the Message", "Of Truth; and these disbelievers of your", "People have not attained one tenth of", "The bounties and power that We gave to", "The former ones; nevertheless those", "Disbelievers belied My Messengers, so", "How sever was My Punishment on", "Them.{6}"],
        },
        {
          type: "verse",
          number: 46,
          continues: true,
          lines: ["Say [O, Messenger!]: “I admonish you", "To do one thing: Rise up for Allāh’s sake", "Either in pairs or by yourself;{7} and", "Ponder [for your own benefit.] If you use", "Your reason you will come to realize", "That there is no madness in your"],
        },
      ],
    },
    {
      bookPage: 790,
      blocks: [
        {
          type: "verse",
          number: 46,
          continued: true,
          lines: ["Well-wishing Supervisor; he is only a", "Warner and he admonishes and warns", "You before the Divine Chastisement", "Afflicts you;"],
        },
        {
          type: "verse",
          number: 47,
          lines: ["Say [O, Messenger!]: “I do not ask you", "Some wages for my Mission; my reward", "Is with Allāh, the One Who is Witness", "Over all things.”"],
        },
        {
          type: "verse",
          number: 48,
          lines: ["Say [O, Messenger!]: “My", "Creator&Nurturer Who is the Absolute", "Knower of the Unseen hurls the Truth", "Into the heart of the Messenger [from", "The Lofty Arsh].”"],
        },
        {
          type: "verse",
          number: 49,
          lines: ["Say [O, Messenger!]: “The Truth has", "Appeared and Falsehood [i.e. , the idols]", "Can neither originate any creation nor", "Cause it to return back after it is", "Dead.”"],
        },
        {
          type: "verse",
          number: 50,
          lines: ["Say [O, Messenger!]: “If I go astray it is", "Only to my own loss and if I am guided", "It is because my Creator&Nurturer", "Reveals the Truth to me through His", "Words of Revelation. Verily, Allāh is", "The Near Hearer” [He hears His", "Worshippers’ invocations through His", "Embracing Knowledge.]"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 51,
          continues: true,
          lines: ["[O, Messenger] If you could see how", "Miserable are the disbelievers when they", "Are terrified with the Chastisement; they", "Want to escape but they cannot; they are"],
        },
      ],
    },
    {
      bookPage: 791,
      blocks: [
        {
          type: "verse",
          number: 51,
          continued: true,
          lines: ["Seized in the nearest spot{8} where they", "Have been gathered."],
        },
        {
          type: "verse",
          number: 52,
          lines: ["It is then that they say: “We believe in", "The Qur’ān.” But they are in a place far", "From having any access to it in order", "To recite it and to act upon its Decrees."],
        },
        {
          type: "verse",
          number: 53,
          lines: ["Before this, they disbelieved in", "The Qur’ān and on conjecture they", "Talked about the Resurrection without", "Knowledge and from a far off place;"],
        },
        {
          type: "verse",
          number: 54,
          lines: ["This Day and this place will become a", "Barrier between them and their worldly", "Desires; and it was the same fate for", "Their likes of the old; they also doubted", "About the Day of Resurrection [and its", "Due punishment]."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "Dāwūd’s son" },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "Syriā" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "See 15:39-40" },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "Reference to 15:42" },
      ],
    },
    {
      id: 5,
      blocks: [
        { kind: "p", text: "Therefore when the Quraish pagans talk of the rites of their ancestors, it is but idolatry." },
      ],
    },
    {
      id: 6,
      blocks: [
        { kind: "p", text: "The people of ‘Ād and Thamūd and Firown were distinguished for the wealth and power that they owned by Allāh’s Favour which was ten times more than what were granted to the Quraish pagans; nevertheless they turned into perdition by Allāh’s Wrath due to their disbelief and transgression." },
      ],
    },
    {
      id: 7,
      blocks: [
        { kind: "p", text: "To resolve about some important matter it is advised that one should ponder singly or with a sincere friend rather than being influenced by group-mentality." },
      ],
    },
    {
      id: 8,
      blocks: [
        { kind: "p", text: "The ‘nearest spot’ is the Gathering Place of all mankind on the Day of Resurrection; after the disbelievers and the transgrassors receive their sentences, they will be captured and sent to the Hell. The Holy Qur’ān declares: On that Day the Hell will be brought to the eyes of the wrongdoers. [18:100]" },
      ],
    },
  ],
};

export default surah;
