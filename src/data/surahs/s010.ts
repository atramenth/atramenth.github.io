import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 10 · Yūnus — book pages 355–377 (verses 1–109, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 10,
  pages: [
    {
      bookPage: 355,
      heading: {
        title: "Yūnus",
        lines: ["(Jonah, the Prophet)", "Revealed at Makkah", "109 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Alif. Lām. Rā.{1} These are", "The Revelations of the Wisdom-", "Teaching Book."] },
        {
          type: "verse",
          number: 2,
          lines: ["Is it a wonder for this people that We", "Have sent Our Revelations to a man", "From among themselves that he should", "Warn mankind [of the consequences of", "Their misdeeds] and give glad-tidings to", "Those who believe that they shall have", "With their Creator&Nurturer a lofty", "Stand and the rewards of their good", "Deeds? But the disbelievers say: “He is", "Indeed an evident magician!”"],
        },
        {
          type: "verse",
          number: 3,
          continues: true,
          lines: ["Surely, your Creator&Nurturer is", "Allāh Who created the heavens and", "The earth in Six Days; then He", "Established himself upon the Throne of"],
        },
      ],
    },
    {
      bookPage: 356,
      blocks: [
        {
          type: "verse",
          number: 3,
          continued: true,
          lines: ["Arsh to govern and direct all matters", "From the above. There is no intercessor", "Save after Allāh’s Permission; such", "Position holds Allāh your", "Creator&Nurturer! So worship Him", "Alone. Will you not accept admonition?"],
        },
        {
          type: "verse",
          number: 4,
          lines: ["To Allāh is the return of all of you and", "Allāh’s Promise is True; verily,", "Allāh is the One Who begins", "The creation, then causes it to come to", "An end that He may reward with justice", "Those who believed and those who did", "Deeds of righteousness. And those who", "Disbelieve, for them shall be the drink", "From the boiling fluids as well as a", "Painful Torment."],
        },
        {
          type: "verse",
          number: 5,
          lines: ["Allāh is the One Who made the sun as a", "Light-giving source and the moon", "To be a light; and for it was planned", "Stations that you may know the number", "Of the years and the reckoning [of", "The time]. Allāh did not create all these", "But based on the Truth and the Divine", "Necessity. Thus does Allāh explain", "The Revelations in detail for those who", "Know and understand;"],
        },
        {
          type: "verse",
          number: 6,
          lines: ["Verily, in the difference between", "The night and the day and all that Allāh", "Has created in the heavens and the earth", "Are Signs of Allāh’s Power for", "The people who try to be pious."],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 357,
      blocks: [
        {
          type: "verse",
          number: 7,
          lines: ["Verily, those who do not expect", "Hopefully, to meet Us [on the Day of", "Resurrection] and are pleased with life", "Of this world and feel rested in it; and", "Those who are heedless about Our Signs", "And Miracles,"],
        },
        { type: "verse", number: 8, lines: ["Their abode shall be the Hell Fire because", "Of what they used to do;"] },
        {
          type: "verse",
          number: 9,
          lines: ["Surely, those who believe and do", "Deeds of righteousness, their", "Creator&Nurturer will guide them for", "Their Faith to the Straight Path [which", "Is the way to the Paradise] and in", "The midst of the Gardens of Bliss", "Streams flow;"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["[In the Gardens] Their prayer will be:", "“O, Allāh! Absolute purity is Yours.”", "And their greetings will be Salām{2} and", "They end their prayer saying:", "“Thanksgiving and adoration is due only", "To Allāh, the Creator of the worlds.”"],
        },
        {
          type: "verse",
          number: 11,
          lines: ["And if Allāh were to hasten on for", "Punishing mankind for the evil they have", "Done as they would do to hurry on", "The good [while invoking to Him,] their", "Respite [term] would be fastly decided", "For them. But We leave those who do", "Not hope to meet Us, to wander blindly", "In their insolence."],
        },
      ],
    },
    {
      bookPage: 358,
      blocks: [
        {
          type: "verse",
          number: 12,
          lines: ["When some misfortune afflicts man,", "He invokes to Us in all postures: Lying", "Down on his side, or sitting, or standing", "But when We have removed his trouble", "From him, he goes his way as though he", "Did not invoke Us regarding", "The misfortune that had afflicted him.", "Thus it has been made fair-seeming to", "The transgressors what they do."],
        },
        {
          type: "verse",
          number: 13,
          lines: ["We destroyed before you", "The generations who disbelieved and", "Who did wrong: Their Messengers came", "To them with Evident Signs&Miracles,", "But they did not believe; thus We", "Recompense the guilty people;"],
        },
        {
          type: "verse",
          number: 14,
          lines: ["Then We made you [Muslims] their", "Successors in the land after them, to see", "How you would act."],
        },
        {
          type: "verse",
          number: 15,
          lines: ["And when Our Explicit Revelations are", "Recited to them, those who do not hope", "Meeting with Us would say: “Bring a", "Reading material other than this{3} or", "Change it.” Say [O, Messenger!]: “It is", "Not for me to change it of my own", "Accord, I only follow what is revealed to", "Me. If I disobey my Creator&Nurturer,", "I fear the retribution of the Great Day.”"],
        },
        {
          type: "verse",
          number: 16,
          continues: true,
          lines: ["Say [O, Messenger!]: “If Allāh had not", "So Willed, I would not have recited it{4}"],
        },
      ],
    },
    {
      bookPage: 359,
      blocks: [
        {
          type: "verse",
          number: 16,
          continued: true,
          lines: ["To you, nor would Allāh made it known", "To you; verily, I lived among you a long", "Time before this;{5} do not you use your", "Reason?”"],
        },
        {
          type: "verse",
          number: 17,
          lines: ["And who then does more evil than he", "Who forges a lie against Allāh or belies", "His Signs? Surely, the sinners will never", "Receive salvation."],
        },
        {
          type: "verse",
          number: 18,
          lines: ["And they worship instead of Allāh", "The Almighty, things that they can", "Neither harm them, nor profit them; and", "They say: “These are our intercessors", "With Allāh.” Say [O, Messenger!]: “Do", "You inform Allāh of something that", "The Knower of the Unseen and the Visible", "Does not know in the heavens and on", "The earth? He is the Absolute Pure", "And He is exalted and far above having", "Partners as they ascribe to Him.”"],
        },
        {
          type: "verse",
          number: 19,
          lines: ["Mankind was but one community, then", "They differed and had it not been for a", "Word of Command that had been", "Ordained before,{6} by your", "Creator&Nurturer, it would have been", "Decided between them; [and perdition", "Would have fallen upon them.]"],
        },
        {
          type: "verse",
          number: 20,
          continues: true,
          lines: ["They say: “Why was not a Miracle", "Sent down upon him from his"],
        },
      ],
    },
    {
      bookPage: 360,
      blocks: [
        {
          type: "verse",
          number: 20,
          continued: true,
          lines: ["Creator&Nurturer?” Say [O, Messenger!]:", "“The knowledge of the Unseen is only", "For Allāh, then you people watch and", "Wait; I shall too be waiting with you.”"],
        },
        {
          type: "verse",
          number: 21,
          lines: ["And when We let a people taste of Our", "Mercy after hardship has afflicted them,", "[They take advantage of their good", "Mood] and they make plots against Our", "Signs and Miracles. Say [O, Messenger!]:", "“Allāh is the Supreme-Swift Planner;", "Surely, Our Angels write down what you", "Are plotting.”"],
        },
        {
          type: "verse",
          number: 22,
          lines: ["Allāh is the One Who enables you", "To travel through the land and the sea;", "When you are in the ship and the ships", "Run with a fair breeze and the passengers", "Rejoice in it, then comes a stormy wind", "And the waves surround them from all", "Sides; and they think that they are", "Encircled by the affliction, so they", "Invoke to Allāh making their Faith pure", "For Him, saying: “O, our", "Creator&Nurturer! If You deliver us", "From this danger we shall truly be", "Among the thankful.”"],
        },
        {
          type: "verse",
          number: 23,
          lines: ["But when Allāh saves them, they rebel", "And disobey Allāh in the land", "Wrongfully. O, mankind! Your rebellion", "Is only against yourselves; you will", "Have a brief enjoyment of this life and", "Then to Us is your return; and We shall", "Inform you of what you used to do."],
        },
      ],
    },
    {
      bookPage: 361,
      blocks: [
        {
          type: "verse",
          number: 24,
          lines: ["The similitude of the life of the world is", "Only as water{7} which We send down", "From the sky, so by its mingling with", "The soil arises the produce of the earth", "Of which men and cattle eat; when", "The earth has taken on her ornaments", "And is flourished and the owners of", "The land think that they have power", "Over it, then Our Command suddenly by", "Night or by day comes; and We make it", "[The earth] as a harvested land as though", "It had not been flourishing the day", "Before. Thus We expound the Words of", "Revelation for a people who ponder;{8}"],
        },
        {
          type: "verse",
          number: 25,
          lines: ["And Allāh invites [mankind] to the Home", "Of Peace and Health{9} and does guide", "Whom He Wills to the Straight Path;"],
        },
        {
          type: "verse",
          number: 26,
          lines: ["For those who have done good, there is", "A goodly reward and even there is more", "Achievement [having the luck of", "Meeting with their Creator]; neither", "Darkness nor dust nor any humiliating", "Disgrace shall cover their faces: They are", "The inhabitants of the Paradise; they", "Will abide therein forever."],
        },
        {
          type: "verse",
          number: 27,
          continues: true,
          lines: ["And those who have committed evil", "Deeds they will receive the recompense", "Of the evil deeds, exactly the like of it:", "Disgrace shall overtake them, and they", "Have not any defender against Allāh’s"],
        },
      ],
    },
    {
      bookPage: 362,
      blocks: [
        {
          type: "verse",
          number: 27,
          continued: true,
          lines: ["Wrath; their faces will be covered", "With the darkest part of the night;", "They are the inhabitants of the Fire,", "Therein they shall abide forever."],
        },
        {
          type: "verse",
          number: 28,
          lines: ["And on the Day [of Resurrection]", "Whereon We shall gather them all", "Together, then We shall state to those", "Who did set partners in worship with", "Us: “Stay at your place you and those", "Whom you considered partners.” And", "Then We shall separate them, and their", "Deities shall tell them: “It was not us", "That you worshipped.”"],
        },
        {
          type: "verse",
          number: 29,
          lines: ["[And they will say:] “Allāh’s Witness is", "Sufficient between us and you, that we", "Were not aware of your worshipping us.”"],
        },
        {
          type: "verse",
          number: 30,
          lines: ["There, every soul shall realize what he", "Has sent before; and they shall be", "Brought back to Allāh, their True", "Guardian; and what they fabricated will", "Vanish away."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 31,
          continues: true,
          lines: ["Say [O, Messenger!]: “Who provides you", "Sustenance from the sky and from", "The earth? Or who owns power over", "Hearing and sight? And who brings", "Forth the living from the dead? And", "Who brings forth the dead from", "The living? And who administers all", "Affairs of the universe?” They will", "Promptly say: “Allāh.” Then say"],
        },
      ],
    },
    {
      bookPage: 363,
      blocks: [
        {
          type: "verse",
          number: 31,
          continued: true,
          lines: ["[O, Messenger!]: “Will you not then be", "Afraid of Allāh’s Punishment [for", "Considering partners with Him]?”"],
        },
        {
          type: "verse",
          number: 32,
          lines: ["So such is Allāh, your True", "Creator&Nurturer; and after the Truth", "What else can there be save error? How", "Then are you turned away from", "The Truth?"],
        },
        {
          type: "verse",
          number: 33,
          lines: ["Thus the Word of Command of your", "Creator&Nurturer fulfilled against those", "Who rebelled; verily, they will not", "Believe."],
        },
        {
          type: "verse",
          number: 34,
          lines: ["Say [O, Messenger!]: “Is there any of", "Your partners who can originate", "The creation and then bring it back", "Again?” Say: “Allāh is the One Who", "Originates the creation and then brings", "It back again. Then how are you turned", "Away [from the Truth]?”"],
        },
        {
          type: "verse",
          number: 35,
          lines: ["Say [O, Messenger!]: “Is there any of", "Your partners who can guide to", "The Truth?” Say: “Allāh is the One Who", "Guides to the Truth. Is then the One", "Who guides to the Truth more worthy", "To be followed or he who himself does", "Not go aright unless he is guided? Then", "What is the matter with you? How do", "You judge?”"],
        },
        {
          type: "verse",
          number: 36,
          continues: true,
          lines: ["And most of them do not follow", "Anything but conjecture. Certainly", "Conjecture cannot avail them against"],
        },
      ],
    },
    {
      bookPage: 364,
      blocks: [
        { type: "verse", number: 36, continued: true, lines: ["The Truth. Verily, Allāh is Well Aware", "Of all that they do."] },
        { type: "divider" },
        {
          type: "verse",
          number: 37,
          lines: ["And this [Holy] Qur’ān is not such as", "Could be produced by other than Allāh;", "But it is a confirmation of what was", "Before it and an exposition of", "The Book,{10} wherein is no doubt, and", "Which is with the Creator of the worlds;"],
        },
        {
          type: "verse",
          number: 38,
          lines: ["Or do they say: “Mohammad has forged", "It?” Say [O, Messenger!]: “Bring then a", "Sūrah like it and call to your aid", "Whomsoever you wish except Allāh, if", "You speak truly.”"],
        },
        {
          type: "verse",
          number: 39,
          lines: ["No, they deny that which they do not", "Have the knowledge of it and", "The interpretation of it has not yet come", "To them; this is the way that those", "Before them belied; then see what was", "The end of the wrongdoers!"],
        },
        {
          type: "verse",
          number: 40,
          lines: ["And of them there are some who", "Believe in it{11} and of them there are", "Some who do not believe in it; and your", "Creator&Nurturer is the Knower of", "The mischief-makers."],
        },
        {
          type: "verse",
          number: 41,
          continues: true,
          lines: ["And if they belie you [O, Messenger!],", "Say: “For me are my deeds and for you", "Are your deeds; you are quit of what I"],
        },
      ],
    },
    {
      bookPage: 365,
      blocks: [
        { type: "verse", number: 41, continued: true, lines: ["Do and I am quit of what you do.”"] },
        {
          type: "verse",
          number: 42,
          lines: ["And among them are some who pretend", "To listen to you [O, Messenger], but can", "You make the deaf to hear the Truth,", "Even though they do not comprehend?"],
        },
        {
          type: "verse",
          number: 43,
          lines: ["And of them are some who look at you;", "Could you [O, Messenger] guide", "The blind, though they do not see", "[The Way?]"],
        },
        {
          type: "verse",
          number: 44,
          lines: ["Verily, Allāh does not do any injustice", "To mankind, but men do wrong to", "Themselves;"],
        },
        {
          type: "verse",
          number: 45,
          lines: ["And on the Day [of Resurrection] when", "Allāh gathers them together, it will seem", "As if they had not stayed [in this world]", "But an hour of a day. They will", "Recognize each other. Losers indeed will", "Be on that Day those who denied", "The Meeting with Allāh; and were not", "Guided aright."],
        },
        {
          type: "verse",
          number: 46,
          lines: ["And if We let you see [O, Messenger]", "Some of what We Promised them [of", "The Torment] or after We take away your", "Soul to Us, they shall return to Us and Allāh", "Is Witness over what they do, [and they", "Will surely receive their due", "Recompense]."],
        },
        {
          type: "verse",
          number: 47,
          continues: true,
          lines: ["And for every people [was appointed] a", "Messenger and when their Messenger"],
        },
      ],
    },
    {
      bookPage: 366,
      blocks: [
        {
          type: "verse",
          number: 47,
          continued: true,
          lines: ["Comes and proclaims his Mission,", "The matter between them will be judged", "Based on his testimony; and they will", "Not be dealt with unjustly."],
        },
        { type: "verse", number: 48, lines: ["And they say: “When will this Promise{12}", "Come to pass, if you speak truly?”"] },
        {
          type: "verse",
          number: 49,
          lines: ["Say [O, Messenger!]: “I have no power", "Over my own harm or benefit, save what", "Allāh Wills; to every people is an", "Appointed Term; when comes their", "Term, then they shall neither retard nor", "Go before it even an hour.”"],
        },
        {
          type: "verse",
          number: 50,
          lines: ["Say [O, Messenger!]: “Have you", "Considered if Allāh’s Torment comes", "Upon you by night or by day, what", "Portion of it is that the guilty ones", "Hasten for?”"],
        },
        {
          type: "verse",
          number: 51,
          lines: ["“Is it when actually it has befallen", "That you will believe in it?” [It will be", "Stated to them:] “Now [you believe]", "After you wanted to hasten it on [out of", "Disbelief]?”"],
        },
        {
          type: "verse",
          number: 52,
          lines: ["Then it will be stated to the wrongdoers:", "“Taste the Lasting Chastisement! Are you", "Recompensed save for what you used", "To do?”"],
        },
        {
          type: "verse",
          number: 53,
          continues: true,
          lines: ["And they ask you [O, Messenger]", "To inform them [saying]: “Is it true{13}?”"],
        },
      ],
    },
    {
      bookPage: 367,
      blocks: [
        {
          type: "verse",
          number: 53,
          continued: true,
          lines: ["Say: “Yes! By my Creator&Nurturer! It", "Is the very truth and you cannot escape", "From it.”"],
        },
        {
          type: "verse",
          number: 54,
          lines: ["And if each soul that has done wrong", "Possessed all that is on the earth and he", "Would offer it for his ransom; [it will not", "Avail him from the punishment] and", "They will declare their remorse when", "They see the Torment; but it shall be", "Judged about them fairly and they shall", "Not be dealt with unjustly."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 55,
          lines: ["Surely, to Allāh belongs every thing that", "Is in the heavens and on the earth;", "Surely, Allāh’s Promise is True but most", "Of the people do not know;"],
        },
        {
          type: "verse",
          number: 56,
          lines: ["Allāh is the One Who gives life and", "Causes death and to Allāh you all shall", "Be returned."],
        },
        {
          type: "verse",
          number: 57,
          lines: ["O, people! There has come to you a", "Great Admonition from your", "Creator&Nurturer and a healing for", "The disease [of ignorance and disbelief]", "Which is in your hearts; and it is [also] a", "Guidance and a Grace for the believers.{14}"],
        },
        {
          type: "verse",
          number: 58,
          continues: true,
          lines: ["Say [O, Messenger!]: “It is only in", "The Favour and the Grace of Allāh that", "The people should rejoice; that is far"],
        },
      ],
    },
    {
      bookPage: 368,
      blocks: [
        {
          type: "verse",
          number: 58,
          continued: true,
          lines: ["Better than the wealth that they,", "[The disbelievers] gather.”"],
        },
        {
          type: "verse",
          number: 59,
          lines: ["Say [O, Messenger!]: “Do you see what", "Provision and sustenance Allāh has sent", "Down for you? But you decided some of", "It forbidden and some lawful. Say: “Has", "Allāh permitted you [to say so] or do", "You forge a lie against Allāh?”"],
        },
        {
          type: "verse",
          number: 60,
          lines: ["And what do they imagine those who", "Forge lies against Allāh about the Day", "Of Resurrection? Truly Allāh is full of", "Favour and Grace for mankind but most", "Of them do not express any", "Thankfulness."],
        },
        {
          type: "verse",
          number: 61,
          lines: ["[O, Messenger!] Whatever you may be", "Doing and whatever Sūrah you may be", "Reciting from Qur’ān and whatever", "Deed you people may be engaged in", "Allāh’s Path We are Witness over you;", "And nothing is hidden from your", "Creator&Nurturer, even as the weight of", "An atom in the earth or in the heaven", "Nor anything lesser than that nor", "Greater but all is recorded in", "The Preserved Book;"],
        },
        {
          type: "verse",
          number: 62,
          lines: ["It should be known, verily on", "The Devoted Friends of Allāh there is", "No fear, nor shall they grieve;"],
        },
        {
          type: "verse",
          number: 63,
          lines: ["[And the Devoted Friends of Allāh are:]", "Those who believe in the Oneness of", "Allāh and constantly act piously;"],
        },
      ],
    },
    {
      bookPage: 369,
      blocks: [
        {
          type: "verse",
          number: 64,
          lines: ["For them is glad-tidings in the life of", "This world and in the Hereafter. No", "Change can be there in the Words and", "Promises of Allāh; this glad-tiding is", "Indeed a Great Achievement."],
        },
        {
          type: "verse",
          number: 65,
          lines: ["And do not let their bitter speech grieves", "You [O, Messenger], since verily, honour", "Wholly belongs to Allāh [and He", "Bestows on whomsoever He Wills] Allāh", "Is the Knowing Hearer."],
        },
        {
          type: "verse",
          number: 66,
          lines: ["O, people! know that to Allāh", "Belong all creatures in the heavens and", "On the earth. Those who worship", "Besides Allāh, they do not follow but a", "Conjecture and they say nothing but lies."],
        },
        {
          type: "verse",
          number: 67,
          lines: ["Allāh is the One Who appointed for", "You the night that you may rest therein", "And the light-giving day [for your daily", "Activities]; verily, in this are Signs", "For a people who have ears [for", "The Truth]."],
        },
        {
          type: "verse",
          number: 68,
          lines: ["They say: “Allāh has taken a son to", "Himself.” Absolute Purity belongs to", "Allāh and Allāh is the Absolute", "Independent: [Free from the need of", "Having attachment to His creatures]; and", "To Him belong all that is in the heavens", "And on the earth. And you people have", "No authorised proof for what you say;", "Do you say about Allāh what you do not", "Know?"],
        },
      ],
    },
    {
      bookPage: 370,
      blocks: [
        {
          type: "verse",
          number: 69,
          lines: ["Say [O, Messenger!]: “Those who invent", "Lies against Allāh will never receive", "Salvation.”"],
        },
        {
          type: "verse",
          number: 70,
          lines: ["Some enjoyment will be for them in this", "World, then they shall return to Us and", "We shall make them taste the most", "Severe Torment for their blasphemy."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 71,
          lines: ["[O, Messenger!] Recount to them", "The story of Nūh when he said to his", "People: “O, my people! If my stay here is", "Unbearable for you as well as my", "Reminding you of the Revelations of", "Allāh, [know that] in Allāh I have put", "My trust; so consult on your plot with", "Your associates and do not let your plot", "Against me be a worry to you, so make", "Your decision about me and do not", "Respite me;"],
        },
        {
          type: "verse",
          number: 72,
          lines: ["“But if you turn away [from accepting", "The Truth] remember that no wage I", "Have asked you, my reward is only from", "Allāh and I have been Commanded", "To be one of the Muslims [submitted to", "Allāh’s Will].”"],
        },
        {
          type: "verse",
          number: 73,
          lines: ["But they belied him; so We saved Nūh", "And those with him in the ship; and We", "Appointed them sovereigns on the earth", "And We drowned those who belied Our", "Signs and Miracles; then behold, how", "Was the end of those [sinners] who were", "Warned;"],
        },
      ],
    },
    {
      bookPage: 371,
      blocks: [
        {
          type: "verse",
          number: 74,
          lines: ["Then after him{15} We sent Messengers to", "Their people, so they came to them with", "Clear Signs, but they would not believe", "In what they had denied repeatedly in", "The past: Thus We seal up the hearts of", "The transgressors."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 75,
          lines: ["Then after them We sent Mūssā and", "Hārūn to Firown and his chiefs with Our", "Signs and Miracles, but they acted", "Arrogantly because they were a sinful", "People;"],
        },
        {
          type: "verse",
          number: 76,
          lines: ["And when the Signs of Truth{16} from Our", "Presence came to them, they said: “Verily,", "This is an obvious magic.”"],
        },
        {
          type: "verse",
          number: 77,
          lines: ["Mūssā said: “Do you say this about", "The Truth when it has come to you? Is", "This magic? But the magicians [by", "Allāh’s Command] will never succeed.”"],
        },
        {
          type: "verse",
          number: 78,
          lines: ["They said: “Have you come to us to turn", "Us from the religion of our fathers, in", "Order that you two gain the domination", "In the land? But we will not believe in", "You.”"],
        },
        {
          type: "verse",
          number: 79,
          lines: ["Firown said: “Bring me all well", "Experienced and highly skilled", "Magicians.”"],
        },
      ],
    },
    {
      bookPage: 372,
      blocks: [
        {
          type: "verse",
          number: 80,
          lines: ["And when the magicians came, Mūssā", "Said to them: “Cast down what you have", "Brought to cast.”"],
        },
        {
          type: "verse",
          number: 81,
          lines: ["Then when they had cast, Mūssā said:", "“What you have exposed is but magic;", "Allāh will certainly make it vain; verily,", "Allāh does not set right the work of", "The mischief-makers;"],
        },
        {
          type: "verse",
          number: 82,
          lines: ["“And Allāh will prove the Truth by His", "Word of Command, though the sinners", "May dislike it.”"],
        },
        {
          type: "verse",
          number: 83,
          lines: ["But none believed in Mūssā save some", "Children of his people because they", "Feared Firown and his chiefs lest they", "May persecute them; and verily, Firown", "Was an arrogant transgressor on", "The earth, [to the extent that claimed", "Himself as god.]"],
        },
        {
          type: "verse",
          number: 84,
          lines: ["Mūssā said: “O, my people! If you", "Believe in Allāh and are submissive to", "Allāh’s Will put your trust in Him.”"],
        },
        {
          type: "verse",
          number: 85,
          lines: ["They said: “In Allāh we put our trust.", "O, our Creator&Nurturer! Do not", "Make us a trial for the oppressors,"],
        },
        { type: "verse", number: 86, lines: ["“And save us by Your Embracing Grace", "From the disbelieving people.”"] },
        {
          type: "verse",
          number: 87,
          continues: true,
          lines: ["And We revealed to Mūssā and his", "Brother [stating]: “Appoint houses for", "Your people in Egypt and make your"],
        },
      ],
    },
    {
      bookPage: 373,
      blocks: [
        {
          type: "verse",
          number: 87,
          continued: true,
          lines: ["Houses a place for worship; and", "Establish prayer and give glad-tidings to", "The believers.”"],
        },
        {
          type: "verse",
          number: 88,
          lines: ["Mūssā prayed: “O, our", "Creator&Nurturer! You have given to", "Firown and his chiefs luxury and wealth", "In the life of this world, so they mislead", "People from Your Path; please perish", "Their wealth and splendour and make", "Their hearts so hard that they shall not", "Believe until they encounter", "The Grievous Torment.”"],
        },
        {
          type: "verse",
          number: 89,
          lines: ["Allāh stated: “Your invocation is", "Accepted; so keep to the Straight Path", "Steadfastly and do not follow the way of", "The ignorants.”"],
        },
        {
          type: "verse",
          number: 90,
          lines: ["And We took the Children of Israīl", "Across the sea (safely); and Firown and", "His hosts followed them, out of", "Rebellion and transgression, so when", "The flood overtook them [by Allāh’s", "Command] Firown said: “I believe that", "There is no God but Allāh in Whom", "The Children of Israīl believe; and I am", "Of the Muslims [submissive to Allāh’s", "Will].”"],
        },
        {
          type: "verse",
          number: 91,
          lines: ["[It was stated to him]: “Now that you", "Are facing death you believe? And you", "Did not believe a while before; and you", "Were of the corrupt rebellious;"],
        },
        { type: "verse", number: 92, continues: true, lines: ["“So this day We shall deliver your"] },
      ],
    },
    {
      bookPage: 374,
      blocks: [
        {
          type: "verse",
          number: 92,
          continued: true,
          lines: ["Corpse [from the sea] that you and your", "Story may be a lesson to those who", "Come after you!” And verily, many", "Among mankind are heedless of Our", "Signs."],
        },
        {
          type: "verse",
          number: 93,
          lines: ["And then We settled the Children of", "Israīl in a blessed environment and We", "Provided them with good sustenance; so", "They did not differ until the knowledge", "Came to them.{17} Surely,", "[O, Messenger] your Creator&Nurturer", "Will judge between them on the Day of", "Resurrection [regarding that which", "Therein they used to differ]."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 94,
          lines: ["So [O, Messenger!] if you are in doubt", "Concerning that which We have revealed", "To you, then ask those who have been", "Reading the Scriptures{18} before you.", "Verily, the Truth has come to you from", "Your Creator&Nurturer, so do not be", "Of the doubters;"],
        },
        {
          type: "verse",
          number: 95,
          lines: ["And do not be one of those who belied", "The Signs of Allāh, for then you shall", "Be one of the losers;"],
        },
        {
          type: "verse",
          number: 96,
          lines: ["[Know that] Those against whom your", "Creator&Nurturer’s Words [regarding", "Their punishment] is verified, they will", "Not believe;"],
        },
      ],
    },
    {
      bookPage: 375,
      blocks: [
        {
          type: "verse",
          number: 97,
          lines: ["Even if comes to them every Miracle", "[They will not believe] until they see", "The Grievous Chastisement [with their", "Own eyes];"],
        },
        {
          type: "verse",
          number: 98,
          lines: ["[Before arrival of the Torment] Why", "There was not a community of", "The old people that believed and", "Benefited them their belief as did", "The folk of Yūnus{19}? When they believed", "We removed from them the Torment of", "Disgrace in the life of this world and", "Gave them comfort for a while."],
        },
        {
          type: "verse",
          number: 99,
          lines: ["And if your Creator&Nurturer had", "Willed, verily, all those who are on", "The earth would have believed; can you", "[O, Messenger] compel people against", "Their wish to become believers?"],
        },
        {
          type: "verse",
          number: 100,
          lines: ["And it is not possible for any", "[Disbelieving] person to believe except", "By Allāh’s Will; and Allāh will place", "The filth of disbelief on those who", "Do not use their reason.{20}"],
        },
        {
          type: "verse",
          number: 101,
          lines: ["Say [O, Messenger!]: “O, people!", "Observe the blessings of the heavens", "And the earth.” But neither Miracles", "Nor Warners will be effective on those", "Who do not believe;"],
        },
        { type: "verse", number: 102, continues: true, lines: ["Do these pagans wait for anything but"] },
      ],
    },
    {
      bookPage: 376,
      blocks: [
        {
          type: "verse",
          number: 102,
          continued: true,
          lines: ["The like of the doomed days of those", "Who passed away [in disbelief] before", "Them? Say [O, Messenger!]: “Wait you", "People then, verily, I too will wait with", "You the waiting ones [but for Allāh’s", "Good Promises].”"],
        },
        {
          type: "verse",
          number: 103,
          lines: ["We do always save Our Messengers and", "The believers, since We have appointed", "It an incumbent upon Us to save", "The believers."],
        },
        {
          type: "verse",
          number: 104,
          lines: ["Say [O, Messenger!]: “O, people! If", "You are in doubt as to my religion{21},", "Then know that I will never worship", "Those which you worship besides", "Allāh; and I worship Allāh the One", "Who causes you to die; and I am", "Commanded to be one of the believers.”"],
        },
        {
          type: "verse",
          number: 105,
          lines: ["[And it has been revealed to me:]", "“Direct your face [O, Messenger]", "Entirely towards the Upright Religion", "And never be one of the polytheists;"],
        },
        {
          type: "verse",
          number: 106,
          lines: ["“And do not worship instead of Allāh", "Those which neither profit you nor", "Harm you; if you do so you shall", "Certainly be of those who do wrong;"],
        },
        {
          type: "verse",
          number: 107,
          continues: true,
          lines: ["“If Allāh should afflict you with any", "Harm, then none can remove it save", "Allāh; and if He decides good for you,"],
        },
      ],
    },
    {
      bookPage: 377,
      blocks: [
        {
          type: "verse",
          number: 107,
          continued: true,
          lines: ["There is none who can repel His", "Favour; Allāh grants Grace to", "Whomsoever He Wills of His", "Worshippers and He is the Merciful-", "Forgiving.”"],
        },
        {
          type: "verse",
          number: 108,
          lines: ["Say [O, Messenger!]: “O, people!", "The Truth has come to you from your", "Creator&Nurturer: Whosoever is", "Guided is only to his own benefit and", "Whosoever goes astray, it is only to his", "Own loss; and I am not a watcher over", "You [to defend you against Allāh’s", "Wrath.]”"],
        },
        {
          type: "verse",
          number: 109,
          lines: ["And [O, Messenger!] follow what is", "Revealed to you; and be patient against", "The harm of the disbelievers until", "Allāh bestows His Judgement; verily,", "Allāh is the Supreme Judge."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "See note on: 2:1" },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "Peace and health be upon you!" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "In this Word of Revelation the word Qur’ān is not translated as a proper noun because here it originates from the infinitive and it is a verbal noun thus means,reading material: The polytheists deliberately have used the literal meaning." },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "The Holy Qur’ān" },
      ],
    },
    {
      id: 5,
      blocks: [
        { kind: "p", text: "Forty years before being raised as the Messenger of Islām" },
      ],
    },
    {
      id: 6,
      blocks: [
        { kind: "p", text: "Regarding to grant respite on the sinners" },
      ],
    },
    {
      id: 7,
      blocks: [
        { kind: "p", text: "Rain" },
      ],
    },
    {
      id: 8,
      blocks: [
        { kind: "p", text: "By similitudes and examples" },
      ],
    },
    {
      id: 9,
      blocks: [
        { kind: "p", text: "The Paradise" },
      ],
    },
    {
      id: 10,
      blocks: [
        { kind: "p", text: "The Preserved Tablet; the Book of Allāh’s Recorded Knowledge" },
      ],
    },
    {
      id: 11,
      blocks: [
        { kind: "p", text: "The Holy Qur’ān" },
      ],
    },
    {
      id: 12,
      blocks: [
        { kind: "p", text: "The Divine Torment" },
      ],
    },
    {
      id: 13,
      blocks: [
        { kind: "p", text: "The Day of Resurrection" },
      ],
    },
    {
      id: 14,
      blocks: [
        { kind: "p", text: "The Holy Qur’ān" },
      ],
    },
    {
      id: 15,
      blocks: [
        { kind: "p", text: "Nūh" },
      ],
    },
    {
      id: 16,
      blocks: [
        { kind: "p", text: "Miracles" },
      ],
    },
    {
      id: 17,
      blocks: [
        { kind: "p", text: "About the Appearance of the Messenger of Islām." },
      ],
    },
    {
      id: 18,
      blocks: [
        { kind: "p", text: "The Taurāt and the Injīl" },
      ],
    },
    {
      id: 19,
      blocks: [
        { kind: "p", text: "Jonah, the prophet" },
      ],
    },
    {
      id: 20,
      blocks: [
        { kind: "p", text: "So they are not allowed i.e., they are not helped by the Divine Will due to their ignorance." },
      ],
    },
    {
      id: 21,
      blocks: [
        { kind: "p", text: "Islām" },
      ],
    },
  ],
};

export default surah;
