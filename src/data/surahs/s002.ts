import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 2 · Al-Baqarah — book pages 4–84 (verses 1–286, complete).
 * The book restarts footnote numbering on every page; here notes are numbered
 * once per sūrah in reading order (1 = Alif. Lām. Mīm., 2 = “The Muslims”).
 */
const surah: SurahData = {
  number: 2,
  pages: [
    {
      bookPage: 4,
      heading: {
        title: "Al-Baqarah",
        lines: ["(The Cow)", "Revealed at Madīnah", "286 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Alif. Lām. Mīm.{1}"] },
        { type: "verse", number: 2, lines: ["This [Holy] Book which there is no", "Doubt in it [regarding its being Truth] is", "A guidance for the pious:"] },
        {
          type: "verse",
          number: 3,
          lines: ["[The pious are:] Those who believe in", "The Unseen; are steadfast in performing", "Prayers [five times daily]; and spend out", "[To the needy] of what We have provided", "For them;"],
        },
        {
          type: "verse",
          number: 4,
          lines: ["[The pious are:] Those who believe in", "The Revelations sent to you", "[O, Messenger] and sent before you to", "Other Messengers; and [in their hearts]", "They have attained the certainty of Faith", "About the Hereafter;"],
        },
      ],
    },
    {
      bookPage: 5,
      blocks: [
        { type: "verse", number: 5, lines: ["[The pious] are on the Guidance from", "Their Creator&Nurturer, and they are", "The ones who shall attain salvation."] },
        { type: "divider" },
        {
          type: "verse",
          number: 6,
          lines: ["[O, Messenger!] As to those who reject", "Faith, it is the same to them, whether", "You warn them, or do not warn them;", "They will not believe;"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["Allāh [due to their ignorance and", "Disbelief] has set a seal on their hearts", "And on their hearings; and on their eyes", "Is a veil; [so they cannot perceive, hear", "Or see the Truth]; and for them is a", "Great Chastisement awaiting."],
        },
        {
          type: "verse",
          number: 8,
          lines: ["And of the people there are some who", "Say: [By their tongues not their hearts]", "“We believe in Allāh and the Hereafter.”", "While in fact they are not believers;"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["[By saying so] They intend to deceive", "Allāh and the believers,{2} whereas they", "Deceive not but themselves, and they", "Realize it not;"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["In their hearts is a disease [of doubt", "And hypocrisy] and Allāh has increased", "Their disease [by depriving them of", "His guidance;] for them is a painful", "Chastisement, because of their lies;"],
        },
      ],
    },
    {
      bookPage: 6,
      blocks: [
        {
          type: "verse",
          number: 11,
          lines: ["And when it is said to them: “Stop", "Making mischief on the earth.” They say:", "“Verily, we are after peace and", "Improving the relation between", "The people”;"],
        },
        { type: "verse", number: 12, lines: ["[O, believers!] Know that they are", "Indeed, mischief-makers, but they do not", "Realize it;"] },
        {
          type: "verse",
          number: 13,
          lines: ["When it is said to them: “Believe [in", "Allāh and the Hereafter] as the other", "People believe.” They say: “Shall we", "Believe as the simpletons believe?”", "Know that they are indeed themselves", "The fools, but they do not know;"],
        },
        {
          type: "verse",
          number: 14,
          lines: ["When they meet with those who believe,", "They say: “We believe.” But when they", "Are alone with their evil leaders [of", "Polytheists] they say: “We are with you", "We [are] only mocking [the Muslims.]”"],
        },
        {
          type: "verse",
          number: 15,
          lines: ["[But] This is Allāh Who throws back", "Their mockery on them, and allows them", "To continue their rebellion in their", "Blindly bewilderment;"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["They, [the hypocrites] are the ones who", "Have purchased error at the price of", "Guidance,so their traffic, does not profit", "Them, neither they will be guided aright;"],
        },
        {
          type: "verse",
          number: 17,
          continues: true,
          lines: ["Their similitude is that of those who", "Kindled a fire and once it lit up all", "Around them, Allāh took away their"],
        },
      ],
    },
    {
      bookPage: 7,
      blocks: [
        { type: "verse", number: 17, continued: true, lines: ["Light and left them in the utter", "Darkness, so they could not see;"] },
        {
          type: "verse",
          number: 18,
          lines: ["[They are:] Deaf, dumb and blind, so", "They will not return [to the Path from their", "Darkness];"],
        },
        {
          type: "verse",
          number: 19,
          lines: ["Or [another similitude about them] is", "That of wayfarers caught in a rainstorm", "Which is accompanied by darkness,", "Thunder and lightning; while they are in", "The terror of death, they press their", "Fingers in their ears to keep out", "The stunning thunderbolt, but Allāh", "Encompasses the disbelievers from all", "Directions:"],
        },
        {
          type: "verse",
          number: 20,
          lines: ["The lightning almost snatches away their", "Sight; every time it gleams, they walk", "Therein, and when the darkness grows", "On them, they stand still; and had", "Allāh willed, He would have taken", "Away [by thunder and lightning] their", "Faculties of hearing and seeing; verily,", "Allāh is Powerful over all things."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 21,
          lines: ["O, you people! Worship your", "Creator&Nurturer Who created you and", "Created those who came before you,", "So that [through worshipping], you may", "Become pious;"],
        },
        { type: "verse", number: 22, continues: true, lines: ["Your Creator&Nurturer is the One Who", "Spread the earth as a carpet for your"] },
      ],
    },
    {
      bookPage: 8,
      blocks: [
        { type: "verse", number: 22, continued: true, lines: ["Rest and has built the sky above you as", "A ceiling; and sent down the rain from", "The sky and thereby produces fruits for", "Your sustenance; then do not set equals", "To Allāh the One [and the Creator of all", "These blessings] when you know [about", "The uselessness of your stony idols;]"] },
        { type: "verse", number: 23, lines: ["And if you are in doubt [regarding", "The Truth] as to what We have revealed", "To Our obedient worshipper", "[Mohammad the Messenger of Allāh],", "Then produce a Sūrah similar [to that", "Of the Qur’ān] and call your witnesses", "Apart from Allāh, [Who is powerful", "And Able to create everything], if you", "Are telling the truth;"] },
        { type: "verse", number: 24, lines: ["But if you cannot do it and for sure you", "Cannot do it, then fear the Fire that its", "Fuel is men and stones{3} [already]", "Prepared for the disbelievers."] },
        { type: "divider" },
        { type: "verse", number: 25, continues: true, lines: ["And [O, Messenger!] give glad-tidings", "To those who believe and do good", "Deeds, that for them [by Allāh’s Favour]", "Await Gardens, through which streams", "Flow. Every time they are given fruits", "Therefrom for their sustenance they", "Say: “This is what we were fed with", "Before [in the other world]” and they"] },
      ],
    },
    {
      bookPage: 9,
      blocks: [
        { type: "verse", number: 25, continued: true, lines: ["Are given other things in perfect", "Similarity;-and therein they shall have", "Pure mates; and therein they shall abide", "Forever."] },
        { type: "verse", number: 26, lines: ["Verily,Allāh is not ashamed to set forth a", "Parable of mosquito or even lesser than", "That, [as means of explanation", "It does not belittle Allāh’s Exalted", "Stand.] Those who believe, know", "That it is the Truth from their", "Creator&Nurturer; but those who", "Disbelieve would say: “What does Allāh", "Mean by this parable?” By it Allāh leads", "Many to astray, and by it He leads many", "To the Right Path; but He does not", "Cause mankind to astray from the Right", "Path, [except] the disobedients:"] },
        { type: "verse", number: 27, lines: ["[The disobedients are:] Those who", "Violate the covenant of Allāh after it", "Is being covenanted; and who asunder", "What Allāh has Commanded to be", "Joined; and do mischief on the earth;", "They indeed are the losers."] },
        { type: "verse", number: 28, lines: ["[O, people!] How can you disbelieve in", "Allāh? Whereas you were without life", "[In your mothers’ wombs] and He gave", "You life [by envoying soul into your", "Body]; then He will cause you to die", "And He will again bring you to life; and", "Eventually to Him you will be returned."] },
        { type: "verse", number: 29, continues: true, lines: ["He is the One Who created for you all"] },
      ],
    },
    {
      bookPage: 10,
      blocks: [
        { type: "verse", number: 29, continued: true, lines: ["Things that are on the earth [as means", "Of provision and comfort]; then He", "Intended the heaven and He gave order", "And perfection to the Seven Heavens;", "He is the Knower of all things and beings."] },
        { type: "verse", number: 30, lines: ["[O, Messenger] And when your", "Creator&Nurturer stated to the Angels:", "“I will appoint a Divine Governor{4} on", "The earth;” they said: “[O, our", "Creator&Nurturer!] Do you appoint", "The kind of creature who will make", "Mischief therein and will shed blood?", "While We repeat the Remembrance of", "Thanksgiving due to your Absolute", "Purity and we Celebrate Your Holiness.”", "Allāh stated: “Indeed I know what you", "Do not know.”"] },
        { type: "verse", number: 31, lines: ["And He taught, ‘Ādam all of the names", "[Of beings and things existing in", "The whole universe] and then He set", "Them before the Angels and stated:", "“Tell Me the nature of the name-", "Holders, if you speak truly.”"] },
        { type: "verse", number: 32, lines: ["They, [the Angels] said: “You are", "The Absolute Pure [O, our", "Creator&Nurturer!] We have no", "Knowledge save what You have taught", "Us; verily, You are the Source-Wisdom", "Knower.”"] },
      ],
    },
    {
      bookPage: 11,
      blocks: [
        { type: "verse", number: 33, lines: ["Allāh stated: “O, Ādam! Inform them{5} of", "The names [of all existing things.]” When", "He informed them about the names of", "The things, Allāh stated: “Did I not tell", "You that I know the secrets of", "The heavens and the earth and know", "That which you reveal and that which", "You conceal?”"] },
        { type: "verse", number: 34, lines: ["And when We stated to the Angels:", "“Bow down{6} to ‘Ādam!” So they all", "Bowed down save Iblīs; he refused and", "Acted arrogantly and became one of", "The disbelievers."] },
        { type: "verse", number: 35, lines: ["We stated: “O, ‘Ādam! Dwell you and", "Your wife in the Garden{7} and either of", "You eat of the bountiful things from it", "As much as you may desire, but do not", "Approach “this” Tree, in which case, you", "Two will be of those who do injustice to", "Themselves.”"] },
        { type: "verse", number: 36, continues: true, lines: ["[After hearing the Command] did Satan", "Cause them slip from the Garden, and", "Drove them out of [the state of Divine", "Happiness] that they were in; [after they", "Failed the trial] We stated: “Get you", "Down, [from the Exalted Paradise] all of", "You with enmity between yourselves;{8}", "On the earth shall be an abode for you"] },
      ],
    },
    {
      bookPage: 12,
      blocks: [
        { type: "verse", number: 36, continued: true, lines: ["And a provision for a fixed time [before", "You die].”"] },
        { type: "verse", number: 37, lines: ["Then ‘Ādam [following his beseech]", "Received from his Creator&Nurturer", "Words of inspiration, by which he", "Repented to Him and Allāh pardoned", "Him; verily, Allāh is the Merciful-", "Repentance-Accepter."] },
        { type: "verse", number: 38, lines: ["We stated: “Get you down all from", "The Paradise; and whenever there", "Comes from me onto you a Guidance,", "[Know that] those who follow My", "Guidance, neither fear shall come on", "Them nor they shall grieve;"] },
        { type: "verse", number: 39, lines: ["[But] Those who reject Faith and belie", "Our Signs, they shall be the inhabitants", "Of the Fire and they shall abide therein", "Forever.”"] },
        { type: "divider" },
        { type: "verse", number: 40, lines: ["O, Children of Isrāīl! Remember", "The blessings which I bestowed upon", "You, and if you fulfill your covenant", "With Me I shall fulfill My Covenant with", "You; and fear Me alone;"] },
        { type: "verse", number: 41, continues: true, lines: ["And believe in what I have sent down", "Confirming that which you have with", "You [of the Scripture] and do not be", "The first to disbelieve therein{9} and do"] },
      ],
    },
    {
      bookPage: 13,
      blocks: [
        { type: "verse", number: 41, continued: true, lines: ["Not barter my ‘Āyat{10} with a mean price;", "And fear Me and Me Alone;"] },
        { type: "verse", number: 42, lines: ["And do not cloack the Truth with", "Falsehood, nor conceal the Truth{11} when", "You know it well;"] },
        { type: "verse", number: 43, lines: ["And establish prayers and pay", "The alms and bow down with those who", "Bow down [when praying].{12}"] },
        { type: "verse", number: 44, lines: ["Do you [Jewish religious leaders] enjoin", "Right conduct and piety on the people,", "And forget [to practice it] yourselves,", "And yet you recite the Scripture? Will", "You not use your reason?"] },
        { type: "verse", number: 45, lines: ["And seek help [from Allāh when facing", "Difficulties] through patience and prayer;", "This seems a hard task indeed, except to", "The humble and submissive believers in", "Allāh:"] },
        { type: "verse", number: 46, lines: ["[The humble and submissive believers", "Are:] Those who in certainty believe", "That they will surely meet their", "Creator&Nurturer, [in the Hereafter]", "And that verily, to Him they shall", "Return."] },
      ],
    },
    {
      bookPage: 14,
      blocks: [
        { type: "verse", number: 47, lines: ["O, Children of Isrāīl! Remember My", "Favour and Bounties which I bestowed", "Upon you, and that I gave you", "Preference over the people of the world", "[At a time in the past];"] },
        { type: "verse", number: 48, lines: ["And fear the Day when no soul shall", "Be recompensed for another soul; and", "No intercession shall be accepted; nor", "Any ransom shall be taken from", "Anyone [against  wrongdoings] and nor", "Shall anyone be helped and supported."] },
        { type: "verse", number: 49, lines: ["And remember [O, Children of Isrāīl!]", "When We saved you from Firown’s", "People who afflicted you with grievous", "Torment, slaying your sons [to cut off", "The generation] whereas letting your", "Women alive, [to serve as maids] and in", "That was a mighty trial from  your", "Creator&Nurturer for you."] },
        { type: "verse", number: 50, lines: ["And remember when We did split", "The sea for you [by the Embracing", "Power then a road appeared] and We", "Rescued you, and drowned Firown’s", "People [who were chasing you] while you", "Were looking at the scene and saw that", "The sea-water covered them [following", "Allāh’s Wrath upon the oppressors.]"] },
        { type: "verse", number: 51, continues: true, lines: ["And remember when We appointed forty", "Nights for Mūssā [to be granted", "The Commandments and the Tablets]"] },
      ],
    },
    {
      bookPage: 15,
      blocks: [
        { type: "verse", number: 51, continued: true, lines: ["And in his absence you took the calf", "[For worship] and thus, you did injustice", "To yourselves.{13}"] },
        { type: "verse", number: 52, lines: ["Yet after that We forgave you, so that", "You may become grateful;"] },
        { type: "verse", number: 53, lines: ["And remember when We gave Mūssā", "The Scripture and the Forqān{14} so that", "You may be guided [by him];"] },
        { type: "verse", number: 54, lines: ["And remember when Mūssā said to his", "People: “O, my people! You have indeed", "Wronged yourselves by worshipping", "The calf, [since the disbelievers receive", "A Severe Chastisement] so repent to", "Your Creator and slay you, yourselves", "[Slay the wrongdoers as your expiation", "For calf-worshipping], that will be better", "For you with your Creator&Nurturer.”", "And Allāh granted Forgiveness upon", "You, since indeed He is the Merciful", "Repentance-Accepter."] },
        { type: "verse", number: 55, lines: ["And also remember when some of you", "[Out of ignorance] said: “O, Mūssā!", "We will never believe in you until we", "See Allāh manifestly.” Then", "The thunderbolt seized you [by Allāh’s", "Command] while you were beholding", "[And waiting for some response];"] },
      ],
    },
    {
      bookPage: 16,
      blocks: [
        { type: "verse", number: 56, lines: ["Then, We raised you to life after you", "Were dead, so that [you may come to", "Your senses] and become thankful;"] },
        { type: "verse", number: 57, lines: ["And We caused the clouds to shadow", "Over you, and We sent down to you", "Manna and quails, stating: “Eat of", "The good and clean things We have", "Provided for you.” [Yet your folk", "Rebelled] but by their ingratitude, they", "Did not harm Us, they only did injustice", "To themselves.{15}"] },
        { type: "verse", number: 58, lines: ["And remember when We stated: “Enter", "This city,{16} and eat of the plenty", "Sustenance therein as you wish; but", "Enter the gate of the temple prostrating,", "[Walking on your knees with humility]", "And say: “O, our Creator&Nurturer!", "Forgive our sins.” And [then] We shall", "Forgive your sins and increase to", "The reward of the good-doers.”"] },
        { type: "verse", number: 59, lines: ["[But] The evildoers changed the word", "[And substituted an irrelevant word] for", "That which had been spoken to them.{17}", "So We sent down upon the evildoers a", "Plague from the heaven, due to their", "Rebellion against Allāh’s Command."] },
        { type: "divider" },
      ],
    },
    {
      bookPage: 17,
      blocks: [
        { type: "verse", number: 60, lines: ["And remember when Mūssā seeking", "Water for his people, prayed [to Allāh],", "We stated: “Strike the rock with", "Your staff!” Then gushed forth", "Therefrom twelve springs; each group", "[Of people] knew their drinking-place.", "[They were told:] “Eat and drink", "Of the sustenance provided by Allāh;", "But do no evil nor mischief on", "The earth.”"] },
        { type: "verse", number: 61, lines: ["And remember when you said:", "“O, Mūssā! We cannot endure only one", "Kind of food, so beseech your", "Creator&Nurturer to produce for us of", "What the earth grows such as green", "Herbs, cucumbers, garlic, lentils and", "Onions.” He said: “Do you seek", "To exchange the thing which is superior", "For the thing which is inferior? Go", "You down [to settle] in the city, [in", "Misr wherein you, the Jews, suffered]", "And there you shall find what you", "Desire!” So humiliation and misery was", "Destined upon them; they were", "Encompassed by the Wrath of Allāh", "Because they kept on rejecting His Signs", "And Miracles and slaying His", "Messengers unjustly; they were", "Transgressors and a rebellious people", "By nature."] },
        { type: "divider" },
        { type: "verse", number: 62, continues: true, lines: ["Verily, those who believe [in the Qur’ān]", "Or those who are the Jews,"] },
      ],
    },
    {
      bookPage: 18,
      blocks: [
        { type: "verse", number: 62, continued: true, lines: ["The Christians and the  Sabians,{18} and", "Those who believe in Allāh and the Day", "Of Judgement, and do righteous deeds", "Shall have their reward with their", "Creator&Nurturer, and there shall be", "No fear for them, nor they shall grieve.{19}"] },
        { type: "verse", number: 63, lines: ["And [O, Children of Isrāīl!] remember", "When We took your covenant and", "Roused above you the Tūr Mount{20}", "[Stating:] “Take seriously the Scripture", "That We have bestowed upon you{21} and", "Be remindful of what is therein so that", "You may become pious.”"] },
        { type: "verse", number: 64, lines: ["[But] You turned back thereafter. Had it", "Not been for the Favour and Mercy of", "Allāh on you, you would have surely", "Been of the losers;"] },
        { type: "verse", number: 65, lines: ["And verily, you have heard the story", "About those among your [predecessors]", "Who transgressed in the matter of", "The Sabbath;{22} We stated to them: “Be", "You apes, despised and rejected!”{23}"] },
        { type: "verse", number: 66, continues: true, lines: ["So We made it an exemplary punishment", "To them and to their succeeding", "Generations; and also an admonition to"] },
      ],
    },
    {
      bookPage: 19,
      blocks: [
        { type: "verse", number: 66, continued: true, lines: ["The pious."] },
        { type: "verse", number: 67, lines: ["And another time [regarding a murder", "Which had happened], Mūssā said to his", "People: “Allāh Commands you to", "Slaughter a cow.” They said: “Do you", "Make fun of us?” He said: “I take refuge", "In Allāh from being an ignorant.”{24}"] },
        { type: "verse", number: 68, lines: ["They said: “Beseech your", "Creator&Nurturer on our behalf to make", "Plain to us what kind [of cow] it", "Should be?” He said: “Allāh states: A", "Heifer which is neither too old nor too", "Young, but of middling age; now do", "What you are Commanded!”"] },
        { type: "verse", number: 69, lines: ["They said: “Beseech your", "Creator&Nurturer on our behalf,", "To make plain to us what colour she", "Should have?” He said: “Allāh states:", "Her colour is intensely yellow, a colour", "Which delights the beholders.”"] },
        { type: "verse", number: 70, lines: ["They said: “Beseech your", "Creator&Nurturer on our behalf", "To make plain to us what kind of heifer", "She is? To us all heifers are alike and we", "Shall then be guided, if Allāh Wills.”"] },
        { type: "verse", number: 71, continues: true, lines: ["He said:“Allāh states: A heifer not made", "[Yet] submissive and trained to till", "The soil or irrigate the tillage and", "The skin is sound and without blemish.”"] },
      ],
    },
    {
      bookPage: 20,
      blocks: [
        { type: "verse", number: 71, continued: true, lines: ["They said: “Now you have brought", "The truth!” Then they offered a heifer", "In sacrifice, though they had not mind", "To do it."] },
        { type: "verse", number: 72, lines: ["And remember when you [Children of", "Isrāīl] slew a man and fell into a dispute", "Among yourselves about the crime; but", "Allāh disclosed what you were hiding:"] },
        { type: "verse", number: 73, lines: ["So We stated: “Strike the dead body", "With a piece of the slaughtered cow [so", "That he comes to life to introduce", "The killer.]” Thus, Allāh brings the dead", "To life, [on the Day of Resurrection] and", "Shows you His Miracles so that you may", "Use your reason;"] },
        { type: "verse", number: 74, lines: ["Then after that, your hearts hardened", "Like stones and even harder [since", "Stones have certain good qualities:]", "Verily, there are stones from which gush", "Forth springs; and there are stones", "Which split asunder, so that water comes", "Out from them; and there are stones", "Which crash down in the fear of Allāh.", "And Allāh is not heedless of what you", "Do;"] },
        { type: "verse", number: 75, continues: true, lines: ["Do you [O, Muslims]  hope that they,", "[The Jews] accept your religion and", "Believe in you? Whereas a party of them", "[Their rabbis] heard the Words of Allāh,", "[About the Messenger in the Taurāt] and", "Altered it knowingly after they realized"] },
      ],
    },
    {
      bookPage: 21,
      blocks: [
        { type: "verse", number: 75, continued: true, lines: ["It;"] },
        { type: "verse", number: 76, lines: ["And when they, [the Jews] meet with", "The believers,{25} they say: “We believe.”", "But when they meet one another in", "Private, they say: “Why do you tell", "Them what Allāh has disclosed to you", "[In Taurāt about the descriptions and", "Characteristics of Mohammad] that they,", "[The Muslims] may argue with you", "[The Jews] about it, before your", "Creator&Nurturer? Do you not use your", "Reason?”"] },
        { type: "verse", number: 77, lines: ["Do they not know that Allāh is", "Well-Aware of what they keep secret", "And what they reveal?"] },
        { type: "verse", number: 78, lines: ["And there are among them unlettered", "And common folks, not knowing", "The Book,{26} so they hold only to their", "Own desires, [from what  they have", "Learned by hearsay] and they do only", "Conjecture;"] },
        { type: "verse", number: 79, lines: ["Then woe to those who write the Book", "With their own hands, and then they [to", "The people] say: “This is from Allāh,” in", "Order to sell it for a mean price. So woe", "To them for what their hands have", "Written and woe to them for what", "They earn thereby;"] },
      ],
    },
    {
      bookPage: 22,
      blocks: [
        { type: "verse", number: 80, lines: ["And they say: “The Fire{27} shall not touch", "Us, [the Jews] save for a few", "Numbered days.” Say [O, Messenger!]:", "“Have you taken a promise from Allāh", "[Concerning your preference]  and since", "Allāh does not break His Promise you", "Are so sure? Or is it that you say of", "Allāh what you do not know?”"] },
        { type: "verse", number: 81, lines: ["Not so [what they fancy]; indeed those", "Who do evil and are encompassed by", "Their sins, those are the inhabitants of", "The Fire and they shall abide therein", "Forever;"] },
        { type: "verse", number: 82, lines: ["[But] Those who believe and do deeds of", "Righteousness, they are the inhabitants", "Of the Paradise; therein they shall abide", "Forever."] },
        { type: "divider" },
        { type: "verse", number: 83, lines: ["And [O, Messenger!] remind them when", "We took a covenant from the Children", "Of Isrāīl [stating]: Worship none but", "Allāh; treat with kindness your parents", "And kindred, and orphans and those in", "Need; speak nicely to the people;", "Perform prayer regularly and pay alms.”", "Then you [Jewish people] did turn back,", "Except a few among you, protesting", "[Against Allāh’s Commands];"] },
        { type: "verse", number: 84, continues: true, lines: ["And remember when We took your", "Covenant [stating]: “Shed no blood of"] },
      ],
    },
    {
      bookPage: 23,
      blocks: [
        { type: "verse", number: 84, continued: true, lines: ["Your people, nor expel one another", "From your homeland.” And this you", "Solemnly ratified, and to this you bore", "Witness,"] },
        { type: "verse", number: 85, lines: ["[But] After that [covenant], it is you,", "Who kill one another, and expel a party", "Of your people from their homes; and", "Assist each other in sin and", "Transgression against them; and if they", "Are brought to you as captives you free", "Them by taking ransom,  although their", "Expulsion [to start with] was forbidden", "To you, [in the Taurāt.] Do you", "Believe in part of the Scripture and", "Disbelieve in the other part? So what", "Shall be the recompense of those", "Among you who behave like this, except", "Disgrace in this life and in the Hereafter?", "They shall be consigned to the most", "Grievous Chastisement, for Allāh is not", "Heedless of what you [people] do;"] },
        { type: "verse", number: 86, lines: ["These [disobedient] people are those", "Who buy the life of this world at", "The price of the Hereafter, so their", "Chastisement shall not be lightened nor", "Shall they be helped;"] },
        { type: "verse", number: 87, continues: true, lines: ["And most certainly We gave Mūssā the", "Scripture and after him sent succeeding", "Messengers; and We gave Īssā, son of", "Maryam, Evident Signs, and confirmed", "Him with the Holy Spirit, [Jibrāīl].", "But why whenever there came to you", "[Jewish people] a Messenger with what"] },
      ],
    },
    {
      bookPage: 24,
      blocks: [
        { type: "verse", number: 87, continued: true, lines: ["[Of guidance] you  found it against your", "Desires, you showed arrogance? Some", "Of them, you called liars, and some", "Others, you slayed."] },
        { type: "verse", number: 88, lines: ["And they said: “Our hearts are covered", "Over.”{28} Nay,  Allāh has cursed them for", "Their disbelief, so  only a few of them", "Believe;"] },
        { type: "verse", number: 89, lines: ["And when there came to them, a Book{29}", "From Allāh, confirming what is with", "Them,{30} although aforetime they had", "Invoked Allāh [for the Appearance of", "Mohammad, S.A] in order to gain", "Victory over the pagans, then when", "There came to them, he whom they had", "Recognized, [through characteristics", "Written in the Taurāt] they disbelieved", "In him. Therefore the Curse of Allāh be", "On the disbelievers!"] },
        { type: "verse", number: 90, continues: true, lines: ["How mean is that price for which they", "Have sold themselves by disbelieving in", "That which Allāh has sent down{31} due to", "Feeling envy that why Allāh out of", "His Grace sends His Revelations to", "Whomsoever He Wills among His", "Obedient believers? [And why", "The Messenger was not an Isrāīlite?]", "Thus they have drawn on themselves", "Wrath upon Wrath from Allāh; and"] },
      ],
    },
    {
      bookPage: 25,
      blocks: [
        { type: "verse", number: 90, continued: true, lines: ["For the disbelievers awaits a", "Humiliating Chastisement;"] },
        { type: "verse", number: 91, lines: ["And when it is said to them: “Believe in", "What Allāh has sent down!” They say:", "“We believe in what was sent down to", "Us [through our own Messenger]” and", "They deny all besides, though it is", "The Truth confirming what is with", "Them. Say [O, Messenger!]: “Why then", "Did you kill the Messengers of Allāh", "Aforetime,{32} if you indeed were", "Believers?"] },
        { type: "verse", number: 92, lines: ["“Verily, there came to you Mūssā with", "Clear Miracles; yet you worshipped", "The calf in his absence. Thus you", "Became of “the self-oppressors.”"] },
        { type: "verse", number: 93, lines: ["And [remember] when We took your", "Covenant and raised above you the Tūr", "Mount and Commanded you stating:", "“Take seriously the Book{33} that We have", "Given you, and listen to Allāh’s Words.”", "They said: “We  heard and disobeyed.”", "And their hearts absorbed the love of", "Worshipping the calf because of their", "Disbelief. Say [O, Messenger!]: “Worst", "Indeed is that which your Faith enjoins", "On you, if you have any Faith!”{34}"] },
        { type: "verse", number: 94, continues: true, lines: ["Say [O, Messenger!]: “If the home of"] },
      ],
    },
    {
      bookPage: 26,
      blocks: [
        { type: "verse", number: 94, continued: true, lines: ["The Hereafter with Allāh is indeed for you", "Exclusively, [as you claim] and not for", "Others of mankind, then [in order", "To attain the Garden] invoke for your", "Death, if you speak truly!”"] },
        { type: "verse", number: 95, lines: ["But they will never long for death,", "Because of what their hands have sent", "Before them [to the other world]; and", "Allāh is Well-Aware of the deeds and", "Intentions of the wrongdoers;"] },
        { type: "verse", number: 96, lines: ["And [O, Messenger!] verily, you will find", "The Jews, the greediest for life and", "Even greedier than the idolaters; every", "One of them wishes that he could be", "Given a life of a thousand years; but", "Granting such a life will not save them,", "Even a little, from the due", "Chastisement, and Allāh is the Seer of", "What they do."] },
        { type: "verse", number: 97, lines: ["Say [O, Messenger!]: “Whoever is", "The enemy of Jibrāīl [is Allāh’s enemy]", "For he brings down the Revelations to", "Your heart by Allāh’s Leave, confirming", "What was sent before the Holy", "Qur’ān which is a Guidance and", "Glad-tidings for those who believe.”{35}"] },
        { type: "verse", number: 98, continues: true, lines: ["And whoever is the enemy of Allāh and", "His Angels and His Messengers and", "Jibrāīl and Mīkāīl [should know that", "He is regarded a disbeliever], then verily,"] },
      ],
    },
    {
      bookPage: 27,
      blocks: [
        { type: "verse", number: 98, continued: true, lines: ["Allāh is an enemy to the disbelievers;"] },
        { type: "verse", number: 99, lines: ["Verily, We have sent down to you", "[O, Messenger] Explicit Words of", "Revelation, and none disbelieve in", "Them but the wrongdoers."] },
        { type: "verse", number: 100, lines: ["Is it not that whenever they made a", "Covenant [with Allāh and the believers],", "Some party among them cast it aside?", "Nay, [the truth is that] most of them", "Have no Faith;"] },
        { type: "verse", number: 101, lines: ["And when there came to them a", "Messenger from Allāh confirming what", "Was with them, a party of those who", "Were given the Scripture neglected", "The Book of Allāh{36} [pretending] as if", "They did not know it [and had not", "Heard about the prophethood of", "Mohammad, S.A]"] },
        { type: "verse", number: 102, continues: true, lines: ["And they, [the Jews] followed what", "The devils recited during Solaimān’s", "Kingdom, [to effect magic for their evil", "Purposes] Solaimān did not", "Disbelieve, but [it was] the devils that", "Disbelieved, teaching men magic, and", "What was revealed to the two Angels,", "Hārūt and Mārūt at Bābil. But neither", "Of them taught anyone magic without", "Saying: “We are only for trial; so do", "Not disbelieve [in Allāh by learning this"] },
      ],
    },
    {
      bookPage: 28,
      blocks: [
        { type: "verse", number: 102, continued: true, lines: ["Magic  from us]” but people learned", "From them that which caused", "Separation between man and his wife,", "Though they could not thus harm any", "One except by Allāh’s Leave. And they", "Learned what harmed them, rather", "Than what profited them [despite", "The Angels’ remarks] and they certainly", "Knew that the buyers of magic would", "Have no share in the happiness of", "The Hereafter; and evil was the price", "For which they sold their souls, if they", "Had but knew;"] },
        { type: "verse", number: 103, lines: ["And if they had believed in Allāh, and", "Kept themselves away from evil, far", "Better had been the reward from their", "Creator&Nurturer, if they but knew", "This."] },
        { type: "divider" },
        { type: "verse", number: 104, lines: ["O, you who believe! Do not say:", "“Rāenā”{37} to the Messenger, but say:", "“Unzurnā” listen to this admonition", "And [know that] for the disbelievers", "There is a painful Torment."] },
        { type: "verse", number: 105, continues: true, lines: ["It is not the wish of the disbelievers", "Among the people of the Book or", "The pagans that anything good should", "Come down to you, [Muslims] from"] },
      ],
    },
    {
      bookPage: 29,
      blocks: [
        { type: "verse", number: 105, continued: true, lines: ["Your Creator&Nurturer; but Allāh", "Chooses for His exclusive Grace", "Whomsoever He Wills; and Allāh is", "The Owner of the Great Grace."] },
        { type: "verse", number: 106, lines: ["None of Our Decrees do We abrogate", "Or cause to be forgotten, unless We", "Substitute something better or similar;{38}", "[O, man] do you not know that Allāh", "Is Powerful over all things?"] },
        { type: "verse", number: 107, lines: ["[O, man!] Do you not know that to", "Allāh belongs the Dominion of", "The heavens and the earth; and", "That apart from Allāh you [people]", "Have neither any guardian nor any", "protector?"] },
        { type: "verse", number: 108, lines: ["Or do you desire to question your", "Messenger as Mūssā was questioned", "[By his people] in aforetime? Whoso", "Exchanges belief for disbelief, has", "Surely strayed from the Right Path."] },
        { type: "verse", number: 109, continues: true, lines: ["Many of the people of the Scripture", "[Mainly the Jews], after the Truth", "Has become clear to them,{39} wish that", "They, out of their inner envy, could", "Turn you [Muslims] back to disbelief", "After you have believed. Yet, forgive"] },
      ],
    },
    {
      bookPage: 30,
      blocks: [
        { type: "verse", number: 109, continued: true, lines: ["Them and overlook [their ignorance]", "Till Allāh brings His Command; verily,", "Allāh is Powerful over all things;"] },
        { type: "verse", number: 110, lines: ["So establish prayers regularly, [five", "Times a day] and pay alms; and", "Whatever of good deeds you [people]", "Send forth for yourselves [to the other", "World], you shall find it with Allāh;", "Verily, Allāh is the Seer of what you", "Do."] },
        { type: "verse", number: 111, lines: ["And they say: “None shall enter", "The Paradise unless he be a Jew or", "Christian.” Such are their fancies", "[Showing their tendencies towards", "Racism.] Say [O, Messenger!]: “Present", "Your proof if you speak truly.”"] },
        { type: "verse", number: 112, lines: ["Yes, whoever submits himself", "Wholeheartedly to Allāh and performs", "Good deeds [totally for Allāh’s Sake],", "Then his reward, he will find with his", "Creator&Nurturer; on such shall be no", "Fear nor shall they grieve."] },
        { type: "divider" },
        { type: "verse", number: 113, continues: true, lines: ["The Jews say: “The Christians stand", "On nothing” and the Christians say:", "“The Jews stand on nothing.”{40}", "Though they both recite the Scripture", "Their word is similar to that of", "The pagans who knew not [and had no", "Book] Allāh will judge among them on"] },
      ],
    },
    {
      bookPage: 31,
      blocks: [
        { type: "verse", number: 113, continued: true, lines: ["The Day of Judgement about that", "Wherein they have been differing."] },
        { type: "verse", number: 114, lines: ["And who is more unjust than he who", "Forbids that Allāh’s Name be glorified", "And mentioned in Allāh’s mosques and", "Strives for their ruin? Such men do not", "Have the right to enter Allāh’s mosques", "Save in fear; for them there is disgrace", "In this world and they will receive a", "Grave Torment in the Hereafter."] },
        { type: "verse", number: 115, lines: ["And to Allāh belong the East and", "The West [thus the whole directions", "Of the universe]; so wherever you", "[Muslims], turn your faces, there is", "The Presence of Allāh. Verily, Allāh is", "The Knowing Space-Expander."] },
        { type: "verse", number: 116, lines: ["And they, [the Jews, the Christians and", "The pagans] said: “Allāh Has adopted a", "Son.” Allāh is Exalted above such", "Attributions;to Allāh belongs all that", "Is in the heavens and on the earth; and", "All creatures surrender with obedience", "To Him;"] },
        { type: "verse", number: 117, lines: ["Allāh is the Originator of the heavens", "And the earth; when He Wills", "The existence of something or", "Somebeing He only states to it: “Be!”", "And it comes to existence."] },
        { type: "verse", number: 118, continues: true, lines: ["And those who have no knowledge say:", "“Why Allāh does not speak to us", "[Instead of the Messenger] or why"] },
      ],
    },
    {
      bookPage: 32,
      blocks: [
        { type: "verse", number: 118, continued: true, lines: ["Allāh does not send a Miracle for us?”", "So said the people before them,words", "Of similar contents; their hearts are", "Much alike. We have indeed", "Expounded Our Words of Revelation", "For the people who believe with", "Certainty."] },
        { type: "verse", number: 119, lines: ["Verily, We have sent you", "[O, Messenger] in truth as a Bringer", "Of glad-tidings [for the believers] and a", "Warner [for the disbelievers]; and you", "Will not be questioned about", "The inhabitants of the Hell;"] },
        { type: "verse", number: 120, lines: ["Never will the Jews or the Christians", "Be pleased with you [O, Messenger!]", "Till you follow their religion. Say:", "“Verily, Allāh’s Guidance is the True", "Guidance” [bestowed upon someone", "Through Allāh’s Favour] and if you", "Conform to their caprices after what", "You have received of the Divine", "Knowledge, there will be no", "Guardianship nor help for you from", "Allāh."] },
        { type: "verse", number: 121, lines: ["Those to whom We have sent", "The Scripture, and they recite it as it", "Should be recited, they believe [in", "The Qur’ān] but those who disbelieve,", "They are indeed the losers."] },
        { type: "verse", number: 122, continues: true, lines: ["O, Children of Isrāīl, remember My", "Favour bestowed upon you, and that I", "Preferred you to all others in the world"] },
      ],
    },
    {
      bookPage: 33,
      blocks: [
        { type: "verse", number: 122, continued: true, lines: ["[Of your time, in the past];"] },
        { type: "verse", number: 123, lines: ["And fear the Day when no person", "Shall be recompensed for another, and", "No ransom shall be accepted, nor shall", "Intercession be of any use to", "The sinners, nor shall they be helped."] },
        { type: "divider" },
        { type: "verse", number: 124, lines: ["When the Creator&Nurturer of", "Ibrāhīm tried him with certain Words", "Of Commands, which he fulfilled{41}", "Allāh stated to him: “Verily, I will,", "Appoint you a Divine Leader for", "Mankind.” Ibrāhīm said: “And also", "From my offsprings?” Allāh stated:", "“My Covenant{42} does not reach", "The polytheists and the wrongdoers.”{43}"] },
        { type: "verse", number: 125, lines: ["And when We made the House{44} a place", "Of assembly for mankind and a place", "Of safety, We stated: “Take you", "[People] the Station of Ibrāhīm as a", "Place for prayer.” And We Commanded", "Ibrāhīm and Ismāīl: “You should", "Sanctify My House for those who", "Compass it round, or use it as a place", "For Divine retreat, or bow or", "Prostrate [in prayer].”"] },
      ],
    },
    {
      bookPage: 34,
      blocks: [
        { type: "verse", number: 126, lines: ["And when Ibrāhīm said: “O, my", "Creator&Nurturer! Make this City{45} a", "Place of security, and provide its", "People who believe in Allāh and the Day", "Of Judgement, with fruits, food and", "Sustenance of every kind.” Allāh", "Stated: “Even for him who disbelieves,", "I shall let him enjoy [bounties of] life", "For a while, then I shall drive him", "To the Torment of the Fire; and worst", "Indeed is that destination!”"] },
        { type: "verse", number: 127, lines: ["And when Ibrāhīm and Ismāīl raised", "The foundations of the House [they", "Beseeched:] “O, our Creator&Nurturer!", "Accept this [service] from us; verily,", "You are the Knowing Hearer;"] },
        { type: "verse", number: 128, lines: ["“O, our Creator&Nurturer! Make", "The two of us obedient and submissive", "To your Will; and of our progeny a", "Nation submitted to Your Will; and", "Show us our ways of worshipping and", "Rituals; and accept our repentance;", "Truly, you are the Merciful-", "Repentance-Accepter;"] },
        { type: "verse", number: 129, lines: ["“O, our Creator&Nurturer! Raise up", "Among our offsprings a Messenger of", "Their own, who shall recite to them", "Your Words of Revelation; and", "Instruct them the Book and Wisdom", "And sanctify them [from polytheism];", "Verily, you are the Source-Wisdom", "Supremepower.”"] },
      ],
    },
    {
      bookPage: 35,
      blocks: [
        { type: "verse", number: 130, lines: ["And who turns away from the Religion", "Of Ibrāhīm,{46} but the one who befools", "Himself? Truly, we chose Him in this", "World [as a Messenger to", "The Monotheists] and verily, in", "The Hereafter he shall be among", "The Leading Divine Righteous;"] },
        { type: "verse", number: 131, lines: ["When his Creator&Nurturer stated to", "Him: [O, Ibrāhīm!] “Submit!” He said:", "“I have submitted my will to", "The Creator&Nurturer of the worlds.”"] },
        { type: "verse", number: 132, lines: ["And [submission to Allāh] was enjoined", "By Ibrāhīm upon his sons; and so did", "Ya’qūb [to his sons] saying: “O, my", "Sons! Allāh has chosen the Religion [of", "Monotheism] for you, then do not [live", "And] die but as Muslims.”"] },
        { type: "verse", number: 133, lines: ["Were you witnesses when death", "Approached Ya’qūb? He said to his", "Sons: “What will you worship after", "Me?” They said: “We shall worship", "Your Creator&Nurturer,", "The Creator&Nurturer of your fathers,", "Ibrāhīm, Ismāīl and Isshāq, Who is", "The one, and to Him do we submit.”"] },
        { type: "verse", number: 134, continues: true, lines: ["They were a nation who passed away;", "They shall receive the reward of what", "They did, and you of what you did; and"] },
      ],
    },
    {
      bookPage: 36,
      blocks: [
        { type: "verse", number: 134, continued: true, lines: ["You shall not be questioned of what", "They did."] },
        { type: "divider" },
        { type: "verse", number: 135, lines: ["And they{47} said: “Become Jew or", "Christian in order to be guided.” Say", "[O, Messenger!]: “We [only] follow", "The Religion of Ibrāhīm which is", "Monotheism, and he was not from", "Those who consider partners for", "Allāh.”"] },
        { type: "verse", number: 136, lines: ["[O, Muslims!] Say: “We believe in Allāh", "And that which has been sent down to", "Us and that which has been sent down", "To Ibrāhīm, Ismāīl, Isshāq, Ya’qūb", "And twelve grand sons of Ya’qūb and", "That which has been given to Mūssā", "And to Īssā, and that which has been", "Given to the  Messengers, from their", "Creator&Nurturer; and we [due to", "Our belief in their prophethood]", "Consider no separation between any", "Of them, and we submit ourselves to", "Allāh.”"] },
        { type: "verse", number: 137, lines: ["So if they believe in what you", "Believe in, then they are rightly guided;", "But if they turn away, then they are", "Badly in schism, so Allāh will Suffice", "You against them [by His Embracing", "Power] and Allāh is the Knowing", "Hearer."] },
      ],
    },
    {
      bookPage: 37,
      blocks: [
        { type: "verse", number: 138, lines: ["[Those who announce their religion", "Through symbols of baptism and colour,", "Should know:] The best is to accept", "The colour of Allāh’s Monotheism", "And what colour is better than", "Allāh’s Monotheism? And [you", "Muslims say:] “We are Allāh’s", "Worshippers, only.”"] },
        { type: "verse", number: 139, lines: ["Say [O, Messenger!]: “Do you dispute", "With us about Allāh, knowing that He", "Is our Creator&Nurturer and your", "Creator&Nurturer as well? And we are", "Responsible for our deeds and you are", "Responsible for your deeds; and we", "[Muslims] worship Allāh sincerely.”"] },
        { type: "verse", number: 140, lines: ["Do you say that Ibrāhīm, Ismāīl,", "Isshāq, Ya’qūb and twelve grand sons", "Of Ya’qūb were either Jews or", "Christians? Say [O, Messenger!]: “Do", "You know better or  does  Allāh?” And", "Who is more unjust than he who", "Conceals the testimony he has received", "From Allāh?{48} And Allāh is not", "Neglectful of what you do;"] },
        { type: "verse", number: 141, lines: ["They were a nation who passed away;", "They shall receive the reward of what", "They did and you of what you did; and", "You will not be questioned of what", "They did."] },
        { type: "divider" },
      ],
    },
    {
      bookPage: 38,
      blocks: [
        { type: "verse", number: 142, lines: ["The fools among the people will say:", "“What has turned them from their", "Qiblah towards which they performed", "Prayers before? Say [O, Messenger!]:", "“To Allāh belongs the East and", "The West and Allāh guides", "Whomsoever He Wills to the Straight", "Path.”"] },
        { type: "verse", number: 143, lines: ["And thus, We have made you", "[Muslims] a nation of middling stand{49}", "So that you be witness over mankind", "And the Messenger be witness over", "You. And We did not change", "The Qiblah{50} to which you turned", "Your face while praying, save that We", "Might distinguish those who followed", "The Messenger from those who turned", "Back upon their heels.{51} And this", "[Change of habit] was surely a grave", "Thing for any one, except for those", "Whom Allāh has guided. And Allāh", "Would not make futile your prayers of", "The past;{52} verily, Allāh is the Merciful", "Affectionate towards mankind."] },
        { type: "verse", number: 144, continues: true, lines: ["Verily, We see the turning of your face", "[O, Messenger] towards the sky", "[Waiting to receive Revelation about", "Qiblah]. Surely, We shall turn you to a", "Qiblah that shall please you; so turn", "Your face in the direction of the Sacred"] },
      ],
    },
    {
      bookPage: 39,
      blocks: [
        { type: "verse", number: 144, continued: true, lines: ["Mosque. And wherever you [Muslims]", "Are, turn your faces [in prayer] in that", "Direction. Certainly the people who", "Were given the Scriptures know", "Well that [your turning towards", "The direction of Ka’bah] is the Truth", "From their Creator&Nurturer{53} and", "Allāh is not unaware of what they do;"] },
        { type: "verse", number: 145, lines: ["[O, Messenger!] If you bring to", "The people of the Book every Miracle,", "They would not follow your Qiblah nor", "Will you adopt their Qiblah", "And they, either [the Jews or", "The Christians] will not adopt each", "Other’s Qiblah. Verily, if you follow", "Their desires after that which you", "Have received of knowledge [from", "Allāh] then, indeed you are one of", "The wrongdoers."] },
        { type: "verse", number: 146, lines: ["Those to whom We gave the Scriptures", "Recognize him{54} as they recognize their", "Sons [since they have read about", "Messenger’s characteristics in Taurāt", "And Injīl]. But verily, a party of", "Them conceal the Truth stubbornly", "While they know it only so well."] },
        { type: "verse", number: 147, continues: true, lines: ["[This is] The Truth [that you receive]", "From your Creator&Nurturer, so do"] },
      ],
    },
    {
      bookPage: 40,
      blocks: [
        { type: "verse", number: 147, continued: true, lines: ["Not be one of those who doubt [about", "The Truth]"] },
        { type: "verse", number: 148, lines: ["And for every nation there is a Qiblah", "Prescribed by Allāh and to which they", "Turn their faces [in their prayers]; but", "What matters is to be ahead of others", "In good deeds. Wheresoever you may", "Be, Allāh will bring you together [on", "The Day of Resurrection.] Truly, Allāh", "Is Powerful over all things."] },
        { type: "verse", number: 149, lines: ["[O, Messenger!] And from wheresoever", "You go forth, turn your face [while in", "Prayer] towards the Sacred Mosque{55}", "And verily, that is the Truth from your", "Creator&Nurturer. And Allāh is not", "Heedless of what you do;"] },
        { type: "verse", number: 150, lines: ["And from wheresoever you go forth,", "[O, Messenger] turn your face [in", "Prayer] towards the Sacred Mosque and", "Wheresoever you [Muslims] are, turn", "Your faces towards it [when you pray]", "So that people shall have no plea", "Against you, save those of them who", "Are wrongdoers.{56} [O, Muslims] do", "Not fear them, but fear Me, that I", "May complete My Blessings on you so", "That you may be guided aright;"] },
        { type: "verse", number: 151, continues: true, lines: ["Similarly [for your guidance] We"] },
      ],
    },
    {
      bookPage: 41,
      blocks: [
        { type: "verse", number: 151, continued: true, lines: ["Sent among you a Messenger from", "Yourselves for reciting to you Our", "Words of Revelation and purifying you", "[From the filth of disbelief and", "Polytheism] and teaching you the Book", "And the Wisdom, and teaching you that", "Which you did not know;"] },
        { type: "verse", number: 152, lines: ["Therefore [constantly] remember Me", "[By praying, and doing good deeds],", "Then I will remember you; and express", "Your thanks for all the Bounties and", "Do not be ingratitude to Me;"] },
        { type: "verse", number: 153, lines: ["O, you who believe! Seek help [from", "Allāh] through patience and prayer;", "Verily, Allāh is the Supporter of", "The patients;"] },
        { type: "verse", number: 154, lines: ["And do not say of those who are", "Martyred in the Path of Allāh that they", "Are “dead”; nay, they are living but,", "You do not perceive;{57}"] },
        { type: "verse", number: 155, lines: ["We will surely test you [all] with", "Something of fear and hunger and", "Loss of wealth and lives and fruits.", "[O, Messenger] so give glad tidings to", "The patients!"] },
        { type: "verse", number: 156, lines: ["[The patients are:] Those who when", "Afflicted with calamity they say:", "“Verily, to Allāh we belong and to Him", "We shall return.”"] },
      ],
    },
    {
      bookPage: 42,
      blocks: [
        { type: "verse", number: 157, lines: ["[These patients are:] Those for whom", "Are the Blessings and Grace from their", "Creator&Nurturer; and they are", "The guided ones indeed."] },
        { type: "divider" },
        { type: "verse", number: 158, lines: ["Verily, Safā and Marvah{58} are some of", "Allāh’s Waymarks; whoever, therefore", "Makes a pilgrimage to Ka’bah or", "Performs Umrah there shall be no", "Blame on him to go round them. And", "Whoever does good deed voluntarily,", "[Apart from religious obligations,", "Allāh will be bountiful in rewarding", "Him] verily, Allāh is the Source-", "Knowledge Appreciative."] },
        { type: "verse", number: 159, lines: ["Verily, those who conceal the Evident", "Proofs, and the Guidance, which We", "Have sent down after We have made it", "Clear for the People of the Book,", "[About the Messenger and his Mission]", "They are the ones who will be cursed", "By Allāh and by the cursers, [the Angels", "And the believers],"] },
      ],
    },
    {
      bookPage: 43,
      blocks: [
        { type: "verse", number: 160, lines: ["Except those who turn repentant and", "Amend themselves and manifest", "The Truth [which they have concealed],", "It is to them that I relent since I am", "The Merciful-Repentance-Accepter."] },
        { type: "verse", number: 161, lines: ["Verily, those who disbelieve and die", "While they are disbelievers, on them is", "The Curse of Allāh and the curse of", "The Angels and [the believers] of", "Mankind altogether;"] },
        { type: "verse", number: 162, lines: ["They will abide therein [in the Hell", "Following the Curse], their punishment", "Will neither be lightened nor will they", "Be respited."] },
        { type: "divider" },
        { type: "verse", number: 163, lines: ["And your God is the One only;", "There is no God but Allāh,", "The Merciful Beneficent."] },
        { type: "verse", number: 164, continues: true, lines: ["Verily, in the creation of the heavens", "And the earth; and in the difference", "Between the night and the day", "[Regarding light and darkness,", "Sleep and motion etc...]; and", "The ships which sail through sea with", "Goods which is of use to mankind;", "And the rain which Allāh sends down", "From the sky and makes the earth", "Alive therewith, after its death, and", "The moving [living] creatures of all", "Kinds that He has scattered therein;"] },
      ],
    },
    {
      bookPage: 44,
      blocks: [
        { type: "verse", number: 164, continued: true, lines: ["And in the whirling of the winds and", "The clouds which are held between", "The sky and the earth, [in all these] are", "Indeed Signs for those people who", "Ponder and use their reason."] },
        { type: "verse", number: 165, lines: ["And of mankind are some who take", "[For worship] others instead of Allāh", "As rivals [to Him]; they love them as", "Allāh should be loved. But those who", "Believe in Allāh, love Allāh above all", "In the world. Those who  do wrong to", "Themselves [by worshipping idols] when", "They see the Torment, they will realize", "That all Power belongs to Allāh, and", "That Allāh is Severe in punishing;"] },
        { type: "verse", number: 166, lines: ["[On the Day of Resurrection] Those", "Who were followed{59} renounce those", "Who followed them [in disbelief]", "When they practically see the Torment;", "And all the ties between them will be cut", "Asunder;"] },
        { type: "verse", number: 167, lines: ["And the [deceived] followers will say:", "“If only we had one more chance", "To return [to the worldly life], we would", "Disown them [by declaring ourselves", "Detached from them] as they have", "Disowned us.” Thus, Allāh will show", "Them their deeds which shall be", "The cause of regrets for them, and they", "Can never get out of the Fire, [there", "Is no way out]"] },
        { type: "divider" },
      ],
    },
    {
      bookPage: 45,
      blocks: [
        { type: "verse", number: 168, lines: ["O, you people! Eat of that which is", "Lawful and good on the earth; and do", "Not follow the footsteps of Satan,", "Verily, he is to you an obvious enemy;"] },
        { type: "verse", number: 169, lines: ["For, he orders you to do only what", "Is evil and sinful and [makes you] say", "Against Allāh what you have no", "Knowledge of."] },
        { type: "verse", number: 170, lines: ["And when it is said to them{60}: “Follow", "What Allāh has sent down” They say:", "“No! We will follow only the ways of our", "Fathers.” Even though their forefathers", "Were void of wisdom, nor were they", "Guided aright?"] },
        { type: "verse", number: 171, lines: ["The parable of guiding the disbelievers", "Can be compared to him who shouts to", "An animal that hears nothing but calls", "And cries: They are deaf, dumb, and", "Blind; thus, they do not understand", "Anything, due to their shortage of", "Wisdom."] },
        { type: "verse", number: 172, lines: ["O, you who believe! Eat of the lawful", "Things that We have provided for you", "And be grateful to Allāh, if you indeed", "Are Monotheists and worship Him", "Only;"] },
        { type: "verse", number: 173, continues: true, lines: ["Allāh has only forbidden to you flesh of", "Dead animals and blood and flesh"] },
      ],
    },
    {
      bookPage: 46,
      blocks: [
        { type: "verse", number: 173, continued: true, lines: ["Of the swine, and that which is", "Slaughtered without mentioning", "Allāh’s Name while slaughtering; but", "If one is forced by necessity{61} without", "Willful disobedience or intention of", "Transgressing the due limits, there is", "No sin on him. Truly, Allāh is", "The Merciful Forgiving."] },
        { type: "verse", number: 174, lines: ["Verily, those who conceal part of what", "Allāh has sent down of the Scripture,{62}", "And purchase a small gain [of worldly", "Things] therewith, they send into their", "Bellies nothing but fire; Allāh will not", "Speak to them on the Day of", "Resurrection; nor purify them [by His", "Forgiveness]; and theirs will be a", "Painful Torment;"] },
        { type: "verse", number: 175, lines: ["They are the ones who have purchased", "Wrongdoing at the price of Guidance", "And [have purchased] Torment at", "The price of Forgiveness; so how", "Daring they are in bearing the Fire!"] },
        { type: "verse", number: 176, lines: ["That is because Allāh has sent down", "The [Holy] Book in Truth; and verily,", "Those who dispute as regards", "The Book, they are in a wide schism,", "Far from the Truth."] },
        { type: "divider" },
      ],
    },
    {
      bookPage: 47,
      blocks: [
        { type: "verse", number: 177, lines: ["It is not [the only symbol of]", "Righteousness that you turn your faces", "Towards the East or to the West [in", "Prayer] but true righteousness is", "To believe in Allāh, and the Day of", "Judgement, and the Angels and", "The Book and the Messengers and", "Also to spend one’s wealth [in the Way", "Of Allāh], despite of love for it, [by", "Giving it] to the kinsmen, to", "The orphans, and to the needy, and to", "The wayfarers, and to the poor who", "Beg, and to ransom the slaves, and", "To perform prayers, to pay alms; and", "Those who fulfill their promises when", "They make them and those who are", "Patient in extreme poverty and ailment", "And at the time of war, such are", "The people who are truthful [in their", "Claims regarding their belief in Allāh", "And obeying His Commands] and they", "Are indeed the pious."] },
        { type: "verse", number: 178, continues: true, lines: ["O, you who believe! The law of", "Retaliation in punishment is", "Prescribed for you in cases of murder:", "The freeman for the freeman, the slave", "For the slave and the female for", "The female. But if the heirs of", "The killed person forgive the killer,{63}", "Then the relatives [of the killed person]", "Should demand blood-money in a", "Reasonable manner, and the killer", "Must pay with handsome gratitude; this"] },
      ],
    },
    {
      bookPage: 48,
      blocks: [
        { type: "verse", number: 178, continued: true, lines: ["Is a lightening [in punishment] as", "Well as a Mercy from your", "Creator&Nurturer; so after this,", "Whoever transgresses the limits,", "[Makes new claims or attempts the life", "Of the killer], he shall have a painful", "Torment;"] },
        { type: "verse", number: 179, lines: ["O, you men of reason! In the law of", "Retaliation,{64} there is [security of] life", "For you [as a member of society] so", "That you may become pious."] },
        { type: "divider" },
        { type: "verse", number: 180, lines: ["When death approaches any of you [and", "The symptoms are observed] if he is", "Wealthy and leaves behind some goods,", "He should draw up a will to parents", "And his close relatives in their", "Favour [or for any charity usage] this is", "A duty upon the pious;"] },
        { type: "verse", number: 181, lines: ["So whosoever alters the will after he", "Has heard it, the guilt shall be on him", "Who made the change. Truly, Allāh is", "The Knowing Hearer;"] },
        { type: "verse", number: 182, continues: true, lines: ["But, if anyone fears partiality or", "Wrongdoing on the part of", "The testator, and makes peace between"] },
      ],
    },
    {
      bookPage: 49,
      blocks: [
        { type: "verse", number: 182, continued: true, lines: ["[The parties concerned], there is no", "Blame on him. Truly, Allāh is", "The Merciful Forgiving;"] },
        { type: "divider" },
        { type: "verse", number: 183, lines: ["O, you who believe! Fasting", "Is Decreed for you as it was Decreed", "For those before you, so that you may", "Become pious [through self-restraint];"] },
        { type: "verse", number: 184, lines: ["You should fast for a fixed number of", "Days;{65} but if any of you is ill or on a", "Journey, the same number [he should", "Fast] from other days; and those who", "Are hardly able to fast [due to old age", "Or illness] they may effect a", "Redemption by feeding a poor person.", "And whoever of his own free will", "Performs a good deed, it is better", "For him; and [of course] fasting is", "Better for you if you but knew,", "[The benefit of fasting]"] },
        { type: "verse", number: 185, continues: true, lines: ["Ramezān is the month in which", "Was revealed the Holy Qur’ān,", "Which is a Guidance for mankind and", "Which bears Clear proofs and", "Explanations for the Guidance and", "Which stands as Forqān, [i.e., a", "Criterion between Truth and", "Falsehood]; so whoever of you who is", "Present at his home, he should fast"] },
      ],
    },
    {
      bookPage: 50,
      blocks: [
        { type: "verse", number: 185, continued: true, lines: ["Therein and whosoever on a journey", "Or ill, he should fast the same", "Number of other days; Allāh intends", "For you ease, He does not intend", "For you hardship. You must complete", "The prescribed number of days; and", "Glorify Allāh’s Greatness for His", "Having guided you and you should be", "Thankful to Allāh for His Favour."] },
        { type: "verse", number: 186, lines: ["And when My obedient worshippers", "Ask you [O, Messenger!], concerning", "Me, then [answer them on My behalf]:", "“I [the Owner of Glory] am indeed near", "To them; I respond to the invocation", "Of the supplicant when he calls on Me,", "So they should obey My Call and", "Believe in Me, so that they may be led", "Aright.”"] },
        { type: "verse", number: 187, continues: true, lines: ["It is lawful for you to have physical", "Relations with your wives on the night", "Of the fasts; they are your garments and", "You are their garments: [Being close", "To each other as well as covering up", "Each other’s faults.] Allāh did know", "That you were betraying yourselves,{66} so", "He accepted your repentance and", "Forgave you. From now, you can", "Associate with them and seek what", "Allāh has prescribed for you. And [also]", "Eat and drink until the white thread of", "The light of the dawn appears to you", "Distinct from the black thread of", "The night; then complete your fast till"] },
      ],
    },
    {
      bookPage: 51,
      blocks: [
        { type: "verse", number: 187, continued: true, lines: ["The nightfall. And do not associate", "With your wives while you are", "Confining yourselves in a mosque [for", "Prayers and invocations]; these are", "The limits Ordained by Allāh, so even", "Do not draw near [the thought of]", "Violating them. Thus, does Allāh", "Make His Words of Revelation clear to", "Mankind, [detailed and well explained],", "So that they may become pious."] },
        { type: "verse", number: 188, lines: ["Do not consume one another’s property", "Unjustly{67} nor use it as bribe to", "The judges that you may consume a", "Part of the property of others", "Wrongfully while knowingly."] },
        { type: "divider" },
        { type: "verse", number: 189, lines: ["They ask you [O, Messenger!]", "Concerning the phases of the new", "Moons. Say: “They are calendars", "To show fixed periods of time for", "[The daily life of] the people and for", "The Hajj pilgrimage as well.” It is not", "Proper and virtue that you should", "Enter your houses through the back-", "Doors,{68} but the righteous  are those", "Who enter the houses through", "The front doors. And fear from", "The disobedience of Allāh’s Commands", "So that you may attain salvation."] },
      ],
    },
    {
      bookPage: 52,
      blocks: [
        { type: "verse", number: 190, lines: ["And fight in the Way of Allāh [against]", "Those who fight you, but do not", "Exceed the limits; for verily, Allāh", "Does not like the transgressors;"] },
        { type: "verse", number: 191, lines: ["And kill them wherever you get hold of", "Them{69} and drive them out from where", "They have driven you out; since the evil", "Of disbelief and polytheism is more", "Grievous than killing;{70} but do not", "Fight them at the Sacred Mosque", "Unless they fight with you therein,", "[And you be in a defence position], so", "If they fight with you there, kill", "Them; such is the recompense of", "The disbelievers;"] },
        { type: "verse", number: 192, lines: ["But if they stop, then [forgive them]", "Verily, Allāh is the Merciful Forgiving;"] },
        { type: "verse", number: 193, lines: ["And fight them until the evil of", "Disbelief and polytheism is rooted up", "And Allāh’s Religion governs over all,", "But if they desist, then there should", "Be no aggression, save against", "The aggressors."] },
        { type: "verse", number: 194, continues: true, lines: ["The Sacred Month for the Sacred", "Month, and for the prohibited things,", "There is a law of retaliation: Then,", "Whoever commits aggression against", "You, react you likewise against him"] },
      ],
    },
    {
      bookPage: 53,
      blocks: [
        { type: "verse", number: 194, continued: true, lines: ["[Retaliate in the same manner], and", "Fear from the disobedience of Allāh’s", "Commands, and know that Allāh is", "The Supporter of the pious."] },
        { type: "verse", number: 195, lines: ["And spend in the Way of Allāh [for", "Providing war equipment] and do not", "Throw yourselves into destruction [by", "Not spending your wealth in the Path", "Of Allāh.] And do good; truly, Allāh", "Is Affectionate to the good-doers."] },
        { type: "divider" },
        { type: "verse", number: 196, continues: true, lines: ["And complete the pilgrimage of Hajj", "And ‘Umrah as the Rituals of Allāh’s", "Way. If you are prevented from", "Completing them [fearing the enemy", "Or illness], then send an offering for", "Sacrifice: [a sheep, a cow or a camel]", "Such as you can afford [or find]", "And do not shave your head until your", "Offering reaches its place. And if any", "Of you is ill, or has an ailment in his", "Scalp [which shaving is prescribed] he", "Should in compensation either fast, or", "Feed the poor, or offer sacrifice. But", "When the Pilgrim is secure [from", "The enemy or illness], then whoever", "Performs Hajj following ‘Umrah, he", "Must make an offering easily available", "[To him], but he who is not able to find", "Any offering, he should fast three", "Days during the Hajj and seven days,", "After his return [to his home], making", "Ten days complete. This is for him"] },
      ],
    },
    {
      bookPage: 54,
      blocks: [
        { type: "verse", number: 196, continued: true, lines: ["Whose household does not live near", "The Sacred Mosque.{71} Fear from", "The disobedience of Allāh’s Commands", "And know that Allāh is the Severe", "Retributing."] },
        { type: "verse", number: 197, lines: ["The Hajj [pilgrimage] is being", "Performed in the months known to all", "Whosoever then intends to perform", "The pilgrimage, then he should not", "Have sexual relations nor commit sin,", "Nor quarrelling during the pilgrimage,", "And whatever good you do, [be sure]", "Allāh knows it; so take a provision", "[With you] and verily, the best", "Provision is piety, so fear from", "The disobedience of Me, [your Creator]", "O, you men of wisdom!"] },
        { type: "verse", number: 198, lines: ["It shall be no guilt on your part,", "If you seek bounty{72} from your", "Creator&Nurture; then when you leave", "‘Arafāt,{73} remember Allāh [by repeating", "The Remembrance of thanksgiving] at", "Mash’ar- Al-Harām,{74} as He has guided", "You, though you were of those who", "Had gone astray before;"] },
      ],
    },
    {
      bookPage: 55,
      blocks: [
        { type: "verse", number: 199, lines: ["Then when you hurry down from", "‘Arafāt, depart from the same place", "Where all the people depart [without", "Any distinction regarding your rank],{75}", "And beg Allāh for His Forgiveness.", "Truly, Allāh is the Merciful Forgiving;"] },
        { type: "verse", number: 200, lines: ["So when you have performed your rites,", "Remember Allāh as you used to", "Remember your forefathers{76} rather with a", "More intense Remembrance [thanking", "Allāh for the blessing of His Guidance].", "Of men are those who say: “O, our", "Creator&Nurturer! Give us of Your", "Bounty in this world” and such people", "Will have no portion in the Hereafter;"] },
        { type: "verse", number: 201, lines: ["And among them, there are some who", "Say: “O, our Creator&Nurturer! Grant", "Us good in this world and in", "The Hereafter; and [out of Your Favour", "And by Your Guidance] save us from", "The Torment of the Fire.”"] },
        { type: "verse", number: 202, lines: ["For them, there will be alloted a", "Portion of what they have earned. [So", "They benefit from their intelligent", "Invocations]; verily, Allāh is", "The Supreme-Swift Reckoner."] },
      ],
    },
    {
      bookPage: 56,
      blocks: [
        { type: "verse", number: 203, lines: ["And invoke to Allāh’s Remembrance", "During the appointed days,{77} but", "Whosoever hastens to leave in two", "Days, there is no sin on him and", "Whosoever delays, there is no sin on", "Him [either], provided that he does his", "Duty and he is pious. And fear from", "The disobedience of Allāh’s", "Commands; and know that you", "[People] will be surely gathered to", "Him."] },
        { type: "divider" },
        { type: "verse", number: 204, lines: ["[O, Messenger!] And of men, there", "Is he whose speech may amaze  you", "Concerning the life of this world; and", "He takes Allāh to witness as what is in", "His heart; but [despite his pretentions]", "He is the most contentious of", "The opponents [of you and Islām];"] },
        { type: "verse", number: 205, lines: ["And if he holds authority, his effort", "In the land is but to make corruption", "Therein and to destroy the tilth and", "The cattle [of the Muslims]. And [since]", "Allāh dislikes corruption, [he will not", "Succeed];"] },
        { type: "verse", number: 206, continues: true, lines: ["And when it is said to him: “Fear", "Allāh!” This increases his stubbornness,", "And his vainful pride drives him to"] },
      ],
    },
    {
      bookPage: 57,
      blocks: [
        { type: "verse", number: 206, continued: true, lines: ["More sinful deeds; so enough for him", "Is the Hell; and worst indeed is that", "Place to rest in it!"] },
        { type: "verse", number: 207, lines: ["And from among men there is one{78} who", "Sells his life, seeking the Pleasure of", "Allāh; and verily, Allāh is kind and", "Compassionate to His obedient", "Worshippers."] },
        { type: "verse", number: 208, lines: ["O, you who believe! Enter you all into", "Submission to Allāh [in peace and", "Without dispute] and do not follow", "The footsteps of Satan; for verily, he", "Is to you an evident enemy;"] },
        { type: "verse", number: 209, lines: ["But, if you slide back, after all that", "Has come to you of the Explicit", "Revelations and Signs, then know that", "Allāh is the Invincible Mighty Decreer."] },
        { type: "verse", number: 210, lines: ["Do the disbelievers expect anything", "Other than that, Allāh should come to", "Them in the canopies of clouds and", "Also the Angels, in which case", "The matter is decreed away?{79} And to", "Allāh all matters are returned."] },
        { type: "verse", number: 211, continues: true, lines: ["[O, Messenger!] Ask the Children of"] },
      ],
    },
    {
      bookPage: 58,
      blocks: [
        { type: "verse", number: 211, continued: true, lines: ["Isrāīl how many of Clear Signs and", "Miracles We bestowed upon them?", "And whosoever changes the blessings", "Of Allāh for the opposite after it has", "Come to him, then [he will receive", "Torment due to raising Allāh’s Wrath]", "Verily, Allāh is the Severe-Retributing."] },
        { type: "verse", number: 212, lines: ["The life of this world has appeared", "Attractive to the eyes of those who", "Disbelieve and so they mock at", "The [needy] believers. But those who", "Strive for being pious will be above", "The disbelievers on the Day of", "Judgement; and verily, Allāh bestows", "Sustenance for whom He Wills,", "Without any limit."] },
        { type: "verse", number: 213, continues: true, lines: ["At the begining,{80} people were one", "Nation; then Allāh sent Messengers", "As Givers of glad-tidings and Warners;", "And sent down [with them] the Book", "With the Truth to judge between men", "In whatever they differed. But", "Those to whom the Scripture was", "Given, after clear proofs had come to", "Them, they differed,{81} out of envy and", "Aggression among themselves. Then", "Allāh by His Will guided those who", "Believed the Truth about which there", "Was dispute. And Allāh does guide,"] },
      ],
    },
    {
      bookPage: 59,
      blocks: [
        { type: "verse", number: 213, continued: true, lines: ["Those whom He Wills, to the Straight", "Path."] },
        { type: "divider" },
        { type: "verse", number: 214, lines: ["Do you think that you will enter", "The Paradise without such trials", "[Regarding hardship] as came to those", "Who passed away before you? They", "Were afflicted with severe poverty and", "Ailments; and were so convulsed that", "[Even] the Messenger and those who", "Believed along with him said: “When", "Will come the Aid of Allāh?” [They", "Were stated:] “Surely, Allāh’s Aid", "Is near.”"] },
        { type: "divider" },
        { type: "verse", number: 215, lines: ["They ask you [O, Messenger!]", "Concerning what they should spend [in", "The Way of Allāh], say: “It is good", "Whatever of wealth and properties", "You spend for parents and relatives", "[Who are in need] and orphans and", "The poor who beg and the wayfarers.", "And whatever you do of good deeds", "Verily, Allāh is the Knower of it.”"] },
        { type: "verse", number: 216, lines: ["Fighting is Ordained upon you though", "It is resented by you; but, [it happens", "That] you resent a thing whereas it is", "Good for you, and perhaps you like", "Something whereas it is evil for you,", "And verily, Allāh knows [what is best]", "While you do not know. [Since Allāh’s", "Knowledge is infinite, but man’s is", "Limited]"] },
      ],
    },
    {
      bookPage: 60,
      blocks: [
        { type: "verse", number: 217, lines: ["They ask you [O, Messenger!] concerning", "Fighting in the Sacred Month. Say:", "“Fighting therein, is a grave sin, but it", "Is a graver sin in Allāh’s Sight", "To prevent mankind from following", "The Path of Allāh; to disbelieving Him;", "To prevent access to the Sacred", "Mosque; and to drive out its", "Inhabitants; and [above all] polytheism", "Is worse than killing. And", "The disbelievers will never cease", "Fighting you, until they turn you", "Back from your religion,{82} if they can.", "And whosoever of you turns back from", "His Faith and dies while disbelieving,", "Then his good deeds [he has done in", "The past] will yield no fruit in this", "World and in the Hereafter, and they", "Will be the inhabitants of the Fire, and", "They will abide therein forever;"] },
        { type: "verse", number: 218, lines: ["But verily, those who have believed and", "Those who have migrated and have", "Fought and striven hard in the Path of", "Allāh, all these [people] hope for", "Allāh’s Mercy [regarding their past].", "And Allāh is the Merciful", "Forgiving."] },
        { type: "verse", number: 219, continues: true, lines: ["They ask you [O, Messenger!] concerning", "Intoxicants and gambling, say: “In both", "Of them is a grave sin, although there", "Is some profit for some men in them,", "But the sin of them is graver than their"] },
      ],
    },
    {
      bookPage: 61,
      blocks: [
        { type: "verse", number: 219, continued: true, lines: ["Profit.” And they ask you how much", "They should spend [in charity] say:", "“Whatsoever can be spared and that", "Which is beyond one’s needs.” Thus", "Allāh makes clear to you people", "The Words of Decrees in order", "That you may ponder concerning this", "World and the Hereafter;"] },
        { type: "verse", number: 220, lines: ["They ask you [O, Messenger!]", "Concerning the orphans, say: “The best", "Thing is to set their affairs right for", "Them; but if you mix your affairs with", "Theirs, then they are your brothers [in", "Religion] and Allāh knows the corrupt", "From the good-doer. And if Allāh had", "Willed he could have surely made it", "Hard for you since verily, Allāh is", "The Invincible Mighty Decreer.”"] },
        { type: "verse", number: 221, lines: ["And do not marry the idolater women", "Until they believe; a believer slave-", "Woman is definitely better than an", "Idolater woman even though she", "Appeals to you. And do not give [your", "Daughters or relatives under your", "Guardianship] in marriage to", "The idolaters till they believe; a", "Believer slave-man is better than an", "Idolater [free] man even if he pleases", "You; such people invite you to the Fire,", "But Allāh invites you to", "The Paradise and Forgiveness by His", "Leave. And Allāh makes His Words of", "Revelation clear to mankind that they", "May be mindful about the Truth."] },
      ],
    },
    {
      bookPage: 62,
      blocks: [
        { type: "verse", number: 222, lines: ["And they ask you concerning", "Women’s courses, say: “It is a nuisance", "Pollution.” So, keep away from women", "In their courses, and do not approach", "Them until they are clean; but when", "They have purified themselves,you may", "Approach them in a lawful manner.", "Verily, Allāh bestows affection to", "Those who turn to Him in repentance", "And those who purify themselves."] },
        { type: "verse", number: 223, lines: ["Your wives are as a tilth for you, so", "Come unto your tilth any time you", "Wish [as long as it is an act of natural", "And for preserving generation]; and", "Forward for your souls good deeds,", "[Through good offsprings]. And fear", "From the disobedience of Allāh’s", "Commands and know that you are", "To meet Him [eventually] and", "[O, Messenger] give glad-tidings to", "The believers."] },
        { type: "divider" },
        { type: "verse", number: 224, lines: ["[O, you who believe!] Do not make", "Allāh’s [Name] an excuse in your oaths", "For not doing good and acting piously", "Or making peace among mankind.", "Verily, Allāh is the Knowing Hearer;"] },
        { type: "verse", number: 225, continues: true, lines: ["Allāh will not call you to account for", "That which is not intentional in your", "Oaths, but He will call you to account", "For that which your hearts have", "Intended and Allāh is the Tolerant"] },
      ],
    },
    {
      bookPage: 63,
      blocks: [
        { type: "verse", number: 225, continued: true, lines: ["Forgiving;"] },
        { type: "verse", number: 226, lines: ["For those who swear to abstain", "From their wives [not to have sexual", "Relation]{83} is Ordained a waiting for", "Four months, then if they return and", "[Change their mind in this period],", "Verily, Allāh is the Merciful Forgiving;"] },
        { type: "verse", number: 227, lines: ["And if they decide upon divorce [there", "Is no blame on them], then verily,", "Allāh is the Knowing Hearer."] },
        { type: "verse", number: 228, lines: ["The divorced women should wait [not", "Wedding another man] until three", "Monthly courses, if they believe in", "Allāh and in the Hereafter. It is not", "Lawful for them to conceal what Allāh", "Has created in their wombs [i.e., being", "Pregnant]. And their husbands have", "The greater right to take them back", "During this period, if they wish for", "Reconciliation. And for the women", "Shall be similar rights [over men] in", "Fairness, and men have a grade above", "Women; and Allāh is the Supreme", "Mighty Decreer;"] },
        { type: "verse", number: 229, continues: true, lines: ["The divorce [shall be lawful] only twice.", "Then you, [the husband] should either", "Keep the wife on reasonable terms or"] },
      ],
    },
    {
      bookPage: 64,
      blocks: [
        { type: "verse", number: 229, continued: true, lines: ["Release her with kindness. And it is not", "Lawful for you to take back marriage-", "Portion or gifts [given by the husband", "To his wife at the time of marriage]", "Except when both fear that they", "Would be unable to keep the limits", "Ordained by Allāh [not to deal with", "Each other on a truthful basis], then", "There is no blame on either of them", "If she gives something to get herself", "Freed [from the wedlock.] These are", "The limits Ordained by Allāh, so do not", "Exceed them and those who exceed the limits,", "Ordained by Allāh, then such are indeed", "The transgressors;"] },
        { type: "verse", number: 230, lines: ["So if a husband divorces his wife [for", "The third time] he cannot, after that", "Remarry her until she has married", "Another man and has got a divorce", "From him. In that case, there is no", "Blame on either of them if they return", "To each other, provided that they feel", "They can keep the limits Ordained by", "Allāh. Such are the limits that Allāh", "Makes them clear to the men of", "Knowledge and understanding;"] },
        { type: "verse", number: 231, continues: true, lines: ["And when you have divorced [your]", "Wife and she has fulfilled her", "Prescribed period, either take her back", "On reasonable basis or set her free", "With fairness. But do not retain", "The women to hurt them, or to take", "Steps towards causing loss  or"] },
      ],
    },
    {
      bookPage: 65,
      blocks: [
        { type: "verse", number: 231, continued: true, lines: ["Transgressing against them; and", "Whoever does this, then he has indeed", "Wronged himself. And do not treat", "Allāh’s Words of Revelation as a jest", "[In no ways]; and remember the Grace", "Of Allāh upon you and [remember]", "What He has sent down from", "The Book and Wisdom to admonish", "You thereby. Then fear from", "The disobedience of Allāh’s Commands", "And know that Allāh is the Absolute-", "Knower of all things;"] },
        { type: "verse", number: 232, lines: ["And when the woman is divorced and", "She has fulfilled her prescribed period", "[Of waiting], do not prevent her [as", "Parents or her guardian] from marrying", "Her [former] husband when they agree", "Among themselves in fairness; this is", "A Decree by which only those among", "You who believe in Allāh and in", "The Hereafter will be admonished by;", "It secures happiness and bars", "The family from corruption. That is", "More virtuous and purer for you;", "Verily, Allāh knows [what is to your", "Advantage], but you do not know."] },
        { type: "verse", number: 233, continues: true, lines: ["And the mothers shall suckle their", "Children two complete years; if", "The mother desires to complete", "The term of suckling herself, on", "The father shall be her sustenance and", "Her clothing in fairness. No person", "Shall have a burden laid on him", "Greater than he can bear. No mother"] },
      ],
    },
    {
      bookPage: 66,
      blocks: [
        { type: "verse", number: 233, continued: true, lines: ["Shall be treated unfairly on account of", "Her child nor father on account of", "His child. On the father’s heir is", "Incumbent the like of that [which was a", "Duty on the father]; if they both decide", "On weaning [before the due time] by", "Mutual consent, and after", "Consultation, there is no sin on them.", "If you [parents] decide on a foster", "Suckling-mother for your children,", "There is no sin on you, provided that", "You pay her what you agreed on a", "Reasonable basis. And fear from", "The disobedience of Allāh’s Command", "And know that Allāh is the Seer of", "What you do."] },
        { type: "verse", number: 234, lines: ["And if any of you dies and leaves", "Widows behind, the widows shall wait", "[As regards another marriage] for four", "Months and ten days, then when they", "Have fulfilled their term, there is no", "Sin on you [as fathers or guardians] in", "What they may do with themselves, in a", "Proper way;{84} and verily, Allāh is [fully]", "Aware of whatever you do."] },
        { type: "verse", number: 235, continues: true, lines: ["And there is no sin on you in indirect", "Proposal of marriage to the widows{85}", "that you may make to women or keep", "[The proposal] concealed within", "Yourselves. Allāh knows what you are", "Going to tell them; but do not make"] },
      ],
    },
    {
      bookPage: 67,
      blocks: [
        { type: "verse", number: 235, continued: true, lines: ["A promise secretly except you speak", "Allusively; and do not resolve on a", "Wedlock until the prescribed term is", "Completed. And know that Allāh", "Knows what is in your hearts, so fear", "From the disobedience of Allāh’s", "Commands; and know that Allāh is", "The Tolerant Forgiving."] },
        { type: "verse", number: 236, lines: ["There is no sin on you if you divorce a", "Woman while yet you have not", "Touched her nor settled any", "Marriage-portion on her, but present", "Her a suitable gift: The wealthy", "According to his means, and the poor", "According to his means; a gift of a", "Reasonable value is a duty on", "The good-doers;"] },
        { type: "verse", number: 237, lines: ["And if you divorce [the woman] before", "You have touched her and after you", "Have appointed the marriage-portion,", "Then pay half of that, unless she agrees", "To remit it; or he [the guardian], in", "Whose hands is the marriage tie, agrees", "To remit; and to remit is nearer to", "Piety. And do not forget generosity and", "Grace among yourselves; truly, Allāh is", "The Acute Observer of what you do."] },
        { type: "divider" },
        { type: "verse", number: 238, continues: true, lines: ["Be strict in performing prayers,", "[Regularly] and particularly the middle", "Prayer{86}. And stand before Allāh with"] },
      ],
    },
    {
      bookPage: 68,
      blocks: [
        { type: "verse", number: 238, continued: true, lines: ["Complete humbleness and full", "Attention."] },
        { type: "verse", number: 239, lines: ["And if you fear [an enemy or some", "Danger], then pray on foot or", "Riding, but when you are safe, perform", "The prayer in the manner prescribed", "And remember Allāh [thankfully] as", "He taught you [through the Holy", "Qur’ān and His Messenger] what you", "Did not know."] },
        { type: "verse", number: 240, lines: ["And those of you who die, leaving", "Behind widows, the Decree is that for", "The widows a year’s maintenance and", "Residence should be provided without", "Turning them out; but if the widows,", "Of their own accord, quit their homes", "There shall be no sin on you,", "[The inheritors] in what they may do", "For themselves in a lawful manner;", "And Allāh is the Supreme Mighty", "Decreer."] },
        { type: "verse", number: 241, lines: ["And for the divorced women [too]", "Should be means of comfort or a gift", "In fairness, this is a duty on the pious;"] },
        { type: "verse", number: 242, lines: ["Thus, does Allāh make clear His Words", "Of Revelation to you [for your", "Guidance] in order that you may think", "[Of their importance]"] },
        { type: "divider" },
      ],
    },
    {
      bookPage: 69,
      blocks: [
        { type: "verse", number: 243, lines: ["[O, Messenger!] Have you considered", "Those who went out from their homes", "For fear of death?{87} And they were in", "Thousands, then Allāh stated to", "Them: “Die you!” [And they died.]", "And thereafter He restored them to", "Life [as an admonitory lesson] verily,", "Allāh is Gracious towards mankind but", "Most of people are not thankful;"] },
        { type: "verse", number: 244, lines: ["And [O, Muslims!] fight in the Path", "Of Allāh and know that Allāh is", "The Knowing Hearer."] },
        { type: "verse", number: 245, lines: ["Who is he that will lend Allāh a", "Fair Loan, [by spending in Allāh’s Way", "Out of what He has bestowed on him]", "So that He will multiply it for him", "Many times? Since it is Allāh that", "Restricts or outspreads [the sustenance]", "And to Him you people shall return."] },
        { type: "divider" },
        { type: "verse", number: 246, continues: true, lines: ["[O, Messenger!] Have you not thought", "About the dignitaries of the Children of", "Isrāīl after the time of Mūssā? They said", "To their Messenger: “Appoint for us a", "king that under him we may fight", "In Allāh’s Path.” He said: “May it not be", "That if fighting were Ordained on you,", "You would not fight?” They said:", "“How could we refuse to fight in", "The Path of Allāh, while we have"] },
      ],
    },
    {
      bookPage: 70,
      blocks: [
        { type: "verse", number: 246, continued: true, lines: ["Indeed been driven out from our", "Homes and taken away from our", "Children [since they are taken", "Captives]?” But when fighting", "Was Ordained on them, they turned", "Their backs except a few of them; and", "Verily, Allāh knows the transgressors", "Only so well;"] },
        { type: "verse", number: 247, lines: ["And their Prophet said to them: “Allāh", "Has appointed Tālūt as king over you.”", "They said: “How can he exercise", "Authority over us whereas we are more", "Rightful for it than him since he is not", "Gifted with abundance of wealth", "Either?” He said: “Verily, Allāh has", "Chosen him over you and has increased", "Him abundantly in knowledge and", "Physical strength; and verily, Allāh", "Grants His kingdom to whomever He", "Wills and Allāh is the Knowing-", "Dominion-Bestower.”"] },
        { type: "verse", number: 248, lines: ["And then their Messenger said to them:", "“Verily, the sign of Tālūt’s kingship", "Shall be the Ark{88} carried by the Angels", "Of Allāh and in which shall be", "The Divine Tranquility from your", "Creator&Nurturer and the remnant of", "What the family of Mūssā and", "The family of Hārūn left behind;", "Verily, therein shall be a sign for you", "If you are [true] believers.”"] },
      ],
    },
    {
      bookPage: 71,
      blocks: [
        { type: "verse", number: 249, lines: ["When Tālūt set out with his army, he", "Said: “Verily, Allāh will try you by a", "Stream: Whoever [of you] drinks from", "It, then he is not of me and whoever", "Does not drink, he is of me save he", "Who drinks a draught with a hollow", "Of his hand.” But they drank from it", "Save a few of them. So when he and", "The believers who were with him", "Crossed the stream, they said: “We", "Have no power against Jālūt and his", "Hosts, this day.” But those who were", "Certain that they shall meet Allāh,{89}", "They said: “How often a small group", "Overcame a big host by Allāh’s", "Command and Allāh is the Supporter", "Of the steadfast and the patient.”"] },
        { type: "verse", number: 250, lines: ["And when they encountered with Jālūt", "And his hosts, they prayed: “O, our", "Creator&Nurturer! Bestow on us", "Endurance and set our feet firm and", "Help us against the disbelieving", "People!”"] },
        { type: "verse", number: 251, continues: true, lines: ["Following [their pray] they defeated", "Them by Allāh’s Leave and Dāwūd", "[Who was one of Tālūt’s men] killed", "Jālūt and Allāh gave him,{90}", "The Kingdom and Wisdom and taught", "Him of that which He Willed. And if", "Allāh had not repelled some [corrupt and", "Disobedient people] by others,"] },
      ],
    },
    {
      bookPage: 72,
      blocks: [
        { type: "verse", number: 251, continued: true, lines: ["The earth would have been full of", "Mischief; but Allāh is Gracious to His", "Worshippers."] },
        { type: "verse", number: 252, lines: ["[O, Messenger!] These Revelations are", "Allāh’s Signs of Power that We recite", "To you in truth; and verily, you are one", "Of Our Messengers;"] },
        { type: "verse", number: 253, lines: ["Some of these Messengers, We have", "Exalted above the others: Of them are", "Some to whom Allāh spoke directly{91}", "And some He has raised in degrees{92}", "And We gave Īssā, son of Maryam,", "Evident Miracles and confirmed Him", "With the Holy Spirit{93} and if Allāh had so", "Willed, those generations succeeding", "Them would not fight among", "Themselves after [so much] of Signs and", "Miracles that had come to them; but", "They differed and of them there were", "Some who believed and some who", "Disbelieved, and had Allāh so Willed,", "They would not have fought; but Allāh", "Does whatever He Wills."] },
        { type: "divider" },
        { type: "verse", number: 254, continues: true, lines: ["O, you who believe! Spend out [to", "The needy], of the Bounty We have", "Provided as sustenance for you", "Before the Day comes wherein there", "Shall be no bargaining nor friendship,"] },
      ],
    },
    {
      bookPage: 73,
      blocks: [
        { type: "verse", number: 254, continued: true, lines: ["Nor intercession. And those who", "Disbelieve they are the self-oppressors", "Indeed."] },
        { type: "verse", number: 255, lines: ["There is no God but Allāh, the Eternal-", "Live; slumber does not overtake", "Allāh, nor does sleep. To Allāh", "Belongs whatever is in the heavens and", "On the earth. Who dares to intercede", "In Allāh’s Presence without His", "Leave?{94} Allāh Knows what happens to", "The people now and what happens to", "Them in the future; and none of", "Them will ever encompass anything of", "Allāh’s Knowledge except as much", "Allāh Wills. Allāh’s Throne is", "Extended over the heavens and", "The earth; but preserving both of", "Them [at the same time] does not", "Trouble Allāh. And Allāh is", "The Supreme-Exalted Great;"] },
        { type: "verse", number: 256, lines: ["There is no compulsion in accepting", "Religion, [since] Truth has verily", "Become distinct from Falsehood [in", "The Qur’ān and through", "The Messenger and Miracles]; whoever", "Rejects Satan and believes in Allāh,", "Then indeed he has grasped the firmest", "Handle that will never break off. And", "Allāh is the Knowing Hearer;"] },
        { type: "verse", number: 257, continues: true, lines: ["Allāh is the Guardian of those who"] },
      ],
    },
    {
      bookPage: 74,
      blocks: [
        { type: "verse", number: 257, continued: true, lines: ["Believe; He takes them out from", "The darkness into the Light; and", "Those who reject Faith, their", "Guardians are the rebels{95} who take", "Them out from the Light into", "The darkness and they will be", "The dwellers of the Hell, therein they", "Shall abide forever."] },
        { type: "divider" },
        { type: "verse", number: 258, lines: ["[O, Messenger!] Have you thought", "About him{96} who disputed [out of pride]", "With Ibrāhīm about his", "Creator&Nurturer, though he owned", "Kingdom which had been granted", "To him by Allāh? When Ibrāhīm said:", "“My Creator&Nurturer, is the One", "Who gives life and causes death,” he", "Said: “I [too] give life and cause death.”{97}", "Ibrāhīm said: “Verily, Allāh causes", "The sun to rise from the East; then you", "Cause it to rise from the West.” So", "The disbeliever was utterly", "Confounded. Thus Allāh does not", "Guide the disbelievers;"] },
        { type: "verse", number: 259, continues: true, lines: ["Or [take] the similitude of the man who", "Passed by a town and it had fallen on", "Its roofs. He pondered: “Oh! How", "Would Allāh ever bring them", "[The people of the town] to life once", "They are dead?” Allāh [the Knowing", "Hearer] caused him to die for a"] },
      ],
    },
    {
      bookPage: 75,
      blocks: [
        { type: "verse", number: 259, continued: true, lines: ["Hundred years; then raised him [again]", "To life. Allāh asked him: “How long", "Did you remain dead?” He said:", "“Perhaps I remained dead a day or part", "Of a day.” Allāh stated: “Nay, you", "Remained dead for a hundred years;", "Look at your food and your drink, they", "Show no change; and look at your", "Donkey! [How it has been decomposed]", "And thus, We have made of you an", "Example of Our Power for the people", "[In order to make them believe in", "The Resurrection Day]; look at", "The bones, [of your donkey!] How We", "bring them together and clothe them", "With flesh.” When the truth was", "Made clear to him, he said [then]:", "“Now I know that Allāh is Powerful", "Over all things.”"] },
        { type: "verse", number: 260, lines: ["And remind them [O, Messenger!]", "When Ibrāhīm said: “O, my", "Creator&Nurturer! Show me how You", "Give life to the dead?” Allāh stated:", "“What! Do you not [then] believe?” He", "Said: “Yes, but only my heart may be", "at rest.” Allāh stated: “Take four", "Birds, [slaughter them] and cut them", "Into pieces and put a portion of them", "On every mountain; then summon", "Them, and they will [in their original", "Form] come to you in haste.” And", "Know that verily, Allāh is the", "Source-Wisdom Supremepower."] },
        { type: "divider" },
      ],
    },
    {
      bookPage: 76,
      blocks: [
        { type: "verse", number: 261, lines: ["The similitude of those who spend their", "Wealth in the Path of Allāh is", "The similitude of a grain of corn that", "Grows seven ears, and each ear has a", "Hundred grains. Allāh gives manifold", "Increase to whom He Wills; and", "Allāh is the Knowing-Bounty-", "Increaser;"] },
        { type: "verse", number: 262, lines: ["Those who spend their wealth in", "The Path of Allāh, and thereafter do", "Not follow it with reproach or injury,", "For them there is the reward with", "Their Creator&Nurturer; and neither", "They shall have any fear, nor they shall", "Grieve;"] },
        { type: "verse", number: 263, lines: ["A kind word [with the needy] and", "Forgiveness are better than charity that", "Is followed by annoying; [and we should", "Know:] Verily, Allāh is the Forbearing", "Rich [Who bestows bounty with", "Consent to His creatures and Who", "Does not expect any return from", "Them];"] },
        { type: "verse", number: 264, continues: true, lines: ["O, you who believe! Do not render in", "Vain your charities by reminders of", "Your generosity or by annoying; like a", "Man who spends his wealth to show off", "To people whereas he does not believe", "In Allāh nor in the Last Day; the", "Similitude of such men’s charity is like", "That of a smooth hard rock on which is", "A little dust; as a heavy shower falls", "Upon it, then leaves it just a bare stone,"] },
      ],
    },
    {
      bookPage: 77,
      blocks: [
        { type: "verse", number: 264, continued: true, lines: ["[No use in sowing the seed.] They shall", "Not gain anything of what they have", "Earned [in this world and sow no seed", "For their Hereafter] and Allāh does", "Not guide the disbelieving people;"] },
        { type: "verse", number: 265, lines: ["And the similitude of those who spend", "Their wealth seeking Allāh’s Pleasure", "And strengthening their own souls", "Is as the similitude of a garden on a", "Height: Heavy rain falls on it and it", "Doubles its yield of harvest; and if", "Heavy rain does not fall upon it, then a", "Gentle rain is [also] sufficient. And", "Allāh is the Seer of all that you people", "Do;"] },
        { type: "verse", number: 266, lines: ["Would anyone of you wish to have a", "Garden of date-palms and vines with", "Streams flowing in it{98} and all", "Kinds of fruits grow therein. But he", "Is stricken with old age and his", "Children are weak [not able to look", "After themselves]; then suddenly", "The garden is stricken down by a fiery", "Whirlwind, and gets burnt up?{99} Thus,", "Does Allāh make clear to you His Words", "Of Revelation, so that you may ponder;"] },
        { type: "verse", number: 267, continues: true, lines: ["O, you who believe! Spend out [in", "The Way of Allāh] of the good and"] },
      ],
    },
    {
      bookPage: 78,
      blocks: [
        { type: "verse", number: 267, continued: true, lines: ["Pure things which you have earned", "[Lawfully], and from which We have", "Brought out for you from the earth.", "And do not aim to spend from that", "Which is bad and worthless, whereas", "You would not accept it [yourself],", "Unless you overlook it; and know", "That Allāh is the Praiseworthy Rich;{100}"] },
        { type: "verse", number: 268, lines: ["Satan threatens you with poverty", "[To prevent you from spending in", "Charity]; and orders you to commit sin;", "Whereas Allāh promises you His", "Bounty and Forgiveness, [by enjoining", "To spend in charity]; and Allāh is", "The Knowing-Bounty-Increaser."] },
        { type: "verse", number: 269, lines: ["[So] Allāh grants [the blessing of]", "Wisdom to whomsoever He Wills.", "Indeed he who has been granted", "Wisdom, has been granted blessing in", "Abundance; but none is reminded, save", "Those men of wisdom."] },
        { type: "verse", number: 270, lines: ["And whatever you spend in charity, or", "Whatever vow you make, surely Allāh", "Knows it; but for the wrongdoers [who", "Avoid spending in Allāh’s Way] there", "Shall be no helpers for them [against", "Allāh’s Punishment];"] },
        { type: "verse", number: 271, continues: true, lines: ["And if you spend [in charity] openly,"] },
      ],
    },
    {
      bookPage: 79,
      blocks: [
        { type: "verse", number: 271, continued: true, lines: ["[Even so] it is good; but if you conceal", "It when you give it to the poor, that is", "Better for you; [by this manner] some of", "Your sins will be forgiven [since] Allāh", "Is the Well-Aware of all that you do;"] },
        { type: "verse", number: 272, lines: ["[O, Messenger!] You are not", "Responsible for their guidance;{101} but", "Allāh guides aright whomsoever He", "Wills. And whatever good things you", "Spend [in charity] it shall be for your", "Own souls; but do not spend in", "Charity except for seeking the Pleasure", "Of Allāh. And whatever good you", "Spend shall be repaid to you in full", "[Here and in the other world]; and you", "Shall not be treated unjustly [and shall", "Suffer no loss];"] },
        { type: "verse", number: 273, lines: ["[Charity is] For those poor who are", "Besieged in the Path of Allāh and", "Thereby prevented from travelling and", "Cannot move about in the land [for", "Trade or work.] The one who does not", "Know them, considers them to be rich", "For their self-control [from begging;]", "You can recognize them by their", "Behaviour: They do not beg of men", "Importunately [despite their need.]", "And whatever of good things you", "Give in charity, verily, Allāh is", "The Knower of it;"] },
      ],
    },
    {
      bookPage: 80,
      blocks: [
        { type: "verse", number: 274, lines: ["Those who spend [in charity] of their", "Wealth by night and [by] day, secretly", "And openly, for them shall be their", "Reward with their Creator&Nurturer;", "On them shall be no fear, nor shall", "They grieve."] },
        { type: "divider" },
        { type: "verse", number: 275, lines: ["Those who swallow usury will not stand", "[On the Day of Resurrection] except", "Like the standing of a person touched", "By Satan, therefore led to insanity and", "Panic; that is because they used", "To say: “Usury, is only like trading.”", "Whereas Allāh has permitted trading", "And forbidden usury; so whosoever", "Receives admonition from his", "Creator&Nurturer, and stops", "Swallowing usury shall not be punished", "For the past{102} and his case is with", "Allāh [to judge.] But whoever", "Returns to usury after this Decree,", "Such are the dwellers of the Fire; they", "Will abide therein forever;"] },
        { type: "verse", number: 276, lines: ["Allāh will deprive usury of any blessing", "And will increase blessing for deeds of", "Charity; and Allāh does not like any", "Ungrateful sinner;"] },
        { type: "verse", number: 277, continues: true, lines: ["Verily, those who believed and did", "Righteous deeds and performed their", "Prayers regularly and paid the alms,", "They will have their reward with their"] },
      ],
    },
    {
      bookPage: 81,
      blocks: [
        { type: "verse", number: 277, continued: true, lines: ["Creator&Nurturer; neither shall they", "Have any fear nor they shall grieve."] },
        { type: "verse", number: 278, lines: ["O, you who believe! Fear from", "The disobedience of Allāh’s Command", "And give up what remains [due to you]", "From usury, if you are believers;"] },
        { type: "verse", number: 279, lines: ["If you do not give up, then you have", "Involved yourselves in a war against", "Allāh and His Messenger; but if you", "Repent, you shall have your capital;", "Neither you deal unjustly [with others]", "And nor will you be dealt with unjustly;"] },
        { type: "verse", number: 280, lines: ["And if the debtor is in straitness, then", "Grant him time till it is easy for him", "To repay; but if he has no money you", "Remit it by way of charity; that is", "Better for you if you only knew;"] },
        { type: "verse", number: 281, lines: ["And be afraid of the Day when you", "Shall be brought back to Allāh; then", "Every person shall be paid in full what", "He has earned, and none shall be", "Dealt with unjustly."] },
        { type: "divider" },
        { type: "verse", number: 282, continues: true, lines: ["O, you who believe! When you contract", "A debt for a fixed term, then write it", "Down and let a scribe write it down", "Between you justly. And the scribe", "Should not refuse to write, as to what"] },
      ],
    },
    {
      bookPage: 82,
      blocks: [
        { type: "verse", number: 282, continued: true, continues: true, lines: ["Allāh has taught him. So let him{103} write", "And let the debtor dictate; and he must", "Fear Allāh, his Creator&Nurturer; and", "Diminish not anything of what he", "Owes. If he who owes, suffers from", "Mental problem or he is weak or", "Unable to dictate himself, then let his", "Guardian dictate justly. And call", "To witness, two witnesses from among", "Your men and if there is not two men,", "Then call a man and two women of", "Those you approve of as witnesses, so", "That if one of the two women forgets,", "The second one of the two may remind", "The other; and the witnesses should", "Not refuse to witness when they are", "Called on [for evidence.] You should", "Not become weary of writing it down,", "Whether small transaction or big, with", "Its fixed term; this procedure is", "The most equitable with Allāh, more", "Solid as evidence, and more convenient", "To prevent doubt among yourselves. In", "Case it is a present transaction of", "Trade in which you give and take", "Between yourselves there is no blame", "On you if you do not write it down,", "Nevertheless, take witnesses when you", "Make a commercial contract, but do", "Not let either the scribe or the witness", "Be pressed or threatened; and if you do", "[So] verily, it will be regarded as", "Disobedience [from Allāh’s Cammand]", "From your side; and fear from"] },
      ],
    },
    {
      bookPage: 83,
      blocks: [
        { type: "verse", number: 282, continued: true, lines: ["The disobedience of Allāh’s Commands.", "Allāh is the One Who teaches you all;", "And Allāh is the Absolute Knower of", "Everything;"] },
        { type: "verse", number: 283, lines: ["And if you are on a journey and cannot", "Find a scribe, then take a pledge with", "Possession; but if one of you trusts", "The other [can do without taking", "Pledge], then the trustee should fulfill", "His trust and return the entrusted", "Faithfully; and he should fear", "Allāh, his Creator&Nurturer. And [you", "People] do not conceal testimony; and", "Whosoever conceals it, then surely his", "Heart is sinful. And Allāh is", "Well Aware of all that you do;"] },
        { type: "verse", number: 284, lines: ["To Allāh belongs all that is in", "The heavens and on the earth. And", "Whether you make known what is in", "Your hearts or hide it, Allāh will call", "You to account for it and then He", "Will forgive whomsoever He Wills", "And He will punish whomsoever He", "Wills.{104} And verily, Allāh is Powerful", "Over all things."] },
        { type: "divider" },
        { type: "verse", number: 285, continues: true, lines: ["The Messenger believes in what has", "Come down to him from his", "Creator&Nurturer and so do", "The believers; all of them believe"] },
      ],
    },
    {
      bookPage: 84,
      blocks: [
        { type: "verse", number: 285, continued: true, lines: ["In Allāh, in His Angels, in His", "Books and in His Messengers, [and", "They say:] “We consider no", "Separation between one another of", "Allāh’s Messengers.” [They said]:“[O, our", "Creator&Nurturer!] We heard [Your", "Commandment] and we obeyed. O, our", "Creator&Nurturer! We beg Your", "Forgiveness and [we know that] to You", "Is the return of us.”"] },
        { type: "verse", number: 286, lines: ["Allāh does not put a task on a", "Person beyond his ability. Man gets", "Reward for that [good] which he has", "Done and he is punished for that [evil]", "Which he has done. [The believers", "Pray:] “O, our Creator&Nurturer!", "Punish us not if we forget or fall into", "Error. O, our Creator&Nurturer! Lay", "Not on us a burden like that which", "You did lay on those before us{105}", "[Due to their disobedience]. O, our", "Creator&Nurturer! Lay not on us a", "Burden greater than we have strength", "To bear; pardon us and grant us", "Forgiveness. O, our Creator&Nurturer!", "Have Mercy on us; You are our", "Guardian; so render us victorious over", "The disbelievers.”"] },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        {
          kind: "p",
          text: "Abbreviated letters (Almoqataāt) symbol the Divine Letters, the meaning of which are known only to Allāh. There are 29 Sūrahs which have abbreviated letters prefixed to them. They are regarded as part of each Sūrah; however, the imaginary interpretations of these letters is regarded forbidden.",
        },
      ],
    },
    { id: 2, blocks: [{ kind: "p", text: "The Muslims" }] },
    { id: 3, blocks: [{ kind: "p", text: "Idolaters and their stony idols" }] },
    { id: 4, blocks: [{ kind: "p", text: "Khalīfah means a Divine Governor not a substitute for Allāh, as has appeared in several English translations, since God is far above having a substitute." }] },
    { id: 5, blocks: [{ kind: "p", text: "The Angels" }] },
    { id: 6, blocks: [{ kind: "p", text: "Sajdah here means bowing down since prostration is only due to Allāh." }] },
    { id: 7, blocks: [{ kind: "p", text: "The Paradise" }] },
    { id: 8, blocks: [{ kind: "p", text: "Enmity between Satan and mankind and also between Children of ‘Ādam as started with their immediate ones Qābīl and Hābīl." }] },
    { id: 9, blocks: [{ kind: "p", text: "The Holy Qur’ān" }] },
    { id: 10, blocks: [{ kind: "p", text: "‘Āyāt: (pl. of ‘Āyat), a Qur’ānic unit, in long or short lines meaning: Word of Revelation. ‘Āyat also signifies: Miracle; Divine Decree; token; Divine Sign; and admonishing lesson. All these ideas can be indicated according to the context." }] },
    { id: 11, blocks: [{ kind: "p", text: "The Prophethood of Mohammad (SA) and his characteristics as written in the Scriptures, the Taurāt and the Injīl." }] },
    { id: 12, blocks: [{ kind: "p", text: "The Jews did not bow down in their prayers." }] },
    { id: 13, blocks: [{ kind: "p", text: "Since the disbelievers do the worst injustice to themselves by asking for the due punishment, i. e., the Hell." }] },
    { id: 14, blocks: [{ kind: "p", text: "The Divine Power of Distinction between Truth and Falsehood." }] },
    { id: 15, blocks: [{ kind: "p", text: "See: note on 2:51" }] },
    { id: 16, blocks: [{ kind: "p", text: "Jerusālem" }] },
    { id: 17, blocks: [{ kind: "p", text: "Instead of saying Hettah, meaning: “Fall down our sins”, they said: “Hentah” meaning: “Wheat”; and thus they showed their disobedience. (Majma)" }] },
    { id: 18, blocks: [{ kind: "p", text: "Most of Commentators agree that Sabians are a small community who believe in the Unity of God; and from Judaism and Christianity they only accept certain aspects of these two religions." }] },
    { id: 19, blocks: [{ kind: "p", text: "This Word of Revelation was abrogated by 3:79 (Commentators)" }] },
    { id: 20, blocks: [{ kind: "p", text: "To cause them fear from its collapse" }] },
    { id: 21, blocks: [{ kind: "p", text: "The Taurāt" }] },
    { id: 22, blocks: [{ kind: "p", text: "Saturday" }] },
    { id: 23, blocks: [{ kind: "p", text: "And following the Divine Command, they became apes.(Commentators)" }] },
    { id: 24, blocks: [{ kind: "p", text: "Implying that only the ignorants make fun of the others." }] },
    { id: 25, blocks: [{ kind: "p", text: "The Muslims" }] },
    { id: 26, blocks: [{ kind: "p", text: "The Taurāt" }] },
    { id: 27, blocks: [{ kind: "p", text: "The Hell Fire" }] },
    { id: 28, blocks: [{ kind: "p", text: "Implying that they could not understand the words of the Holy Messenger." }] },
    { id: 29, blocks: [{ kind: "p", text: "The Holy Qur’ān" }] },
    { id: 30, blocks: [{ kind: "p", text: "The Taurāt" }] },
    { id: 31, blocks: [{ kind: "p", text: "The Holy Qur’ān" }] },
    { id: 32, blocks: [{ kind: "p", text: "Against the Decree which forbids man- slaughtering in the Taurāt" }] },
    { id: 33, blocks: [{ kind: "p", text: "The Taurāt" }] },
    { id: 34, blocks: [{ kind: "p", text: "Such as slaying the Messengers; worshipping the calf and other disobediences against Allāh’s Commands." }] },
    { id: 35, blocks: [{ kind: "p", text: "The Jews expressed their dislike towards Jibrāīl, since he brought the Revelations to the Messenger (S.A)" }] },
    { id: 36, blocks: [{ kind: "p", text: "Here reference is made to Taurāt." }] },
    { id: 37, blocks: [{ kind: "p", text: "‘Rāenā’ in Arabic means ‘have care for us’ or ‘have consideration for us’ whereas, in Hebrew it means an insult and the Jews used to say it to the Prophet, S.A with Hebrew accent when they could not follow his words. So the believers were Commanded by Allāh to say ‘unzurnā’ instead of ‘rāenā’, implying: ‘Grant us a delay.’" }] },
    { id: 38, blocks: [{ kind: "p", text: "Though the principles of the Monotheistic Religions are established permanent by Allāh’s Command, yet some Decrees according to the time, the Messengers and their communities have been abrogated and replaced by another one, as required by the situation. The Divine Decree in 2:144 which Commands the Muslims to change their Qiblah i.e., prayer direction from Jerusalem to Ka’bah in the Sacred Mosque, is as an example for the subject matter of abrogation of the Divine Decrees." }] },
    { id: 39, blocks: [{ kind: "p", text: "See note on 2:42." }] },
    { id: 40, blocks: [{ kind: "p", text: "Implying that they are not on the Right Religion." }] },
    { id: 41, blocks: [{ kind: "p", text: "Such as breaking the stony idols, trying to sacrifice his son and promoting Monotheism." }] },
    { id: 42, blocks: [{ kind: "p", text: "Regarding prophethood" }] },
    { id: 43, blocks: [{ kind: "p", text: "Implying they should be righteous and well- qualified for the position." }] },
    { id: 44, blocks: [{ kind: "p", text: "Ka’bah in Makkah City" }] },
    { id: 45, blocks: [{ kind: "p", text: "Makkah City" }] },
    { id: 46, blocks: [{ kind: "p", text: "Islāmic Monotheism" }] },
    { id: 47, blocks: [{ kind: "p", text: "The people of the Book" }] },
    { id: 48, blocks: [{ kind: "p", text: "News regarding the Appearance of the Messenger (S.A) as written in the Scripture" }] },
    { id: 49, blocks: [{ kind: "p", text: "Neither materialistic minded like the Jews, nor life-escaping like the Christian monks." }] },
    { id: 50, blocks: [{ kind: "p", text: "The direction towards which Muslims turn in prayer" }] },
    { id: 51, blocks: [{ kind: "p", text: "Returning to idolatry" }] },
    { id: 52, blocks: [{ kind: "p", text: "Their previous prayers performed towards Jerusalem" }] },
    { id: 53, blocks: [{ kind: "p", text: "They had learned from the Scriptures that the Messenger of Islām would perform prayers towards two Qiblahs." }] },
    { id: 54, blocks: [{ kind: "p", text: "The Messenger (S.A)" }] },
    { id: 55, blocks: [{ kind: "p", text: "Masjed-al-Harām" }] },
    { id: 56, blocks: [{ kind: "p", text: "Some people of the Scripture, before the change of the Qiblah kept saying: “If Muslims’ religion is above ours, why should they perform prayers towards our Qiblah?”" }] },
    { id: 57, blocks: [{ kind: "p", text: "Because man’s mind is not capable to perceive the Unseen and the spiritual life in the Paradise." }] },
    { id: 58, blocks: [{ kind: "p", text: "Ibrāhīm, though in his old age was bestowed a son by Allāh’s Will. Since his older wife, Sārah could not stand the baby and his mother, Ibrāhīm took them to Makkah, then a bewildered desert; and prayed for them to Allāh for granting them of His Bounties [14:37]. After they were left alone, Hājjar fell sick and had no milk to suckle her baby,they were thirsty; in order to abate their thirst, she started running to and fro between Safā and Marwah. When they were about to lose their lives a spring, now known, Zamzam Spring, appeared from under her foot and saved the life of Hājjar and her son who was to be a Messenger of Allāh. Since in the Time of Ignorance, two idols named Usāf and Nā-ellah were put on the two low mountains of Safā and Marwah, the Muslims resented to get near them, so this Word of Revelation was sent down to the Messenger to state there is “no blame” to go to Safā and Marwah and also to remind the pilgrims of the event of purification of that erea through creation of “Zamzam Spring” by Allāh, the Merciful Beneficent." }] },
    { id: 59, blocks: [{ kind: "p", text: "The ringleaders of the disbelief" }] },
    { id: 60, blocks: [{ kind: "p", text: "The pagans" }] },
    { id: 61, blocks: [{ kind: "p", text: "Hunger" }] },
    { id: 62, blocks: [{ kind: "p", text: "Regarding the Appearance of the Messenger (S.A) as written in the Taurāt" }] },
    { id: 63, blocks: [{ kind: "p", text: "By accepting the blood-money in an intentional murder" }] },
    { id: 64, blocks: [{ kind: "p", text: "In the Decree of Retaliation, individual and social security has been devised by Allāh, the Source Wisdom Mighty; for unless those who are guilty of homicide are doomed to punishment no one can live safely. In the Time of Ignorance, on one hand, man-slaughtering did not receive recompense by law, and on the other hand, against one intentional murder, several lives of the relatives or the whole family of the killer had to pay for the revenge." }] },
    { id: 65, blocks: [{ kind: "p", text: "The whole month of Ramezān" }] },
    { id: 66, blocks: [{ kind: "p", text: "Holding physical association was forbidden before this Decree and therefore it was considered as a sin, for those who did it." }] },
    { id: 67, blocks: [{ kind: "p", text: "In any illegal way" }] },
    { id: 68, blocks: [{ kind: "p", text: "Following the old manner, Arabs out of superstition used to enter their houses through the back-door while in pilgrim garment." }] },
    { id: 69, blocks: [{ kind: "p", text: "The polytheists and the armed idolators" }] },
    { id: 70, blocks: [{ kind: "p", text: "Fitnah means mischief-making; here it signifies disbelief and polytheism, since this Word of Revelation ends stating: “Such is the recompense of the disbelievers!”" }] },
    { id: 71, blocks: [{ kind: "p", text: "None resident of Makkah City" }] },
    { id: 72, blocks: [{ kind: "p", text: "Trading during the pilgrimage" }] },
    { id: 73, blocks: [{ kind: "p", text: "A place near Makkah City" }] },
    { id: 74, blocks: [{ kind: "p", text: "A place known as Mozdalefah near Makkah City, where pilgrims have to stop and stay one night on return from ‘Arafāt." }] },
    { id: 75, blocks: [{ kind: "p", text: "The affluent of the Quraish, out of arrogance, used to stay at Muzdalefah, to avoid mixing with the crowd by going to the plain of ‘Arafāt. They are reminded of the ‘Āyat 49:13 which Allāh, the Almighty states: “The most honourable of you are the most pious of you.”" }] },
    { id: 76, blocks: [{ kind: "p", text: "At the Time of Ignorance, Arabs used to honour their ancestors at the end of their pilgrimage." }] },
    { id: 77, blocks: [{ kind: "p", text: "11th, 12th and 13th of Zelhajjah, following the Day of Sacrifice are called the Days of Tashrīqh, when the pilgrims stay on in the valley of Minā for prayer and praise; it is optional for them to perform the due rituals in two days rather than three days." }] },
    { id: 78, blocks: [{ kind: "p", text: "Reference is to Imām Ali (A.S) who risked his life to save the Holy Messenger’s life on the night of Migration from Makkah City, by sleeping in the Holy Messenger’s bed. So the conspiracy of the pagans of Makkah who had planned to kill the Messenger of Islām by sowrds-men of different tribes failed by Allāh’s Will." }] },
    { id: 79, blocks: [{ kind: "p", text: "Like the pagans and the Jews of the past who asked for visiting Allāh manifestly and they were destroyed, thereupon." }] },
    { id: 80, blocks: [{ kind: "p", text: "In the primitive communities, following ‘Ādam’s creation, people were directed by their inner nature. Due to the growth of population, laws and regulations were demanded to settle the dispute raised among men, so Allāh sent down Messengers and Books of Religion." }] },
    { id: 81, blocks: [{ kind: "p", text: "Some of Jewish rabbis" }] },
    { id: 82, blocks: [{ kind: "p", text: "Islāmic Monotheism" }] },
    { id: 83, blocks: [{ kind: "p", text: "In the Time of Ignorance, if a man did not like his wife, he would swear that he would not have any physical relation with her; upon this custom which was called Īelāa, the wife was held in suspense: She neither had a husband nor could get a divorce and marry some one else. By this Decree of Islamic law an end was put to such unfair selfishness towards women." }] },
    { id: 84, blocks: [{ kind: "p", text: "Regarding new marriage" }] },
    { id: 85, blocks: [{ kind: "p", text: "Before completion of the waiting term" }] },
    { id: 86, blocks: [{ kind: "p", text: "The Middle Prayer, according to the majority of authorities is Noon prayer, which is usualy neglected because of men’s occupations and daily affairs." }] },
    { id: 87, blocks: [{ kind: "p", text: "Some illness was spread among the people of the city which was regarded as their Divine Punishment, because they had refused to fight in the Path of Allāh." }] },
    { id: 88, blocks: [{ kind: "p", text: "The Ark was remnant of the wooden box which Mūssā’s mother, by Allāh’s Command, put him inside it and threw it to the sea. After Mūssā was raised up as Prophet, he deposited the Tablets which Allāh had bestowed to him, in the wooden box." }] },
    { id: 89, blocks: [{ kind: "p", text: "Those who believed in the Hereafter." }] },
    { id: 90, blocks: [{ kind: "p", text: "Dāwūd" }] },
    { id: 91, blocks: [{ kind: "p", text: "Mūssā" }] },
    { id: 92, blocks: [{ kind: "p", text: "The Messenger of Islām was not sent only to a particular folk or group but he was bestowed to the nations of the world as a Grace from Allāh (21:107)" }] },
    { id: 93, blocks: [{ kind: "p", text: "Jibrāīl" }] },
    { id: 94, blocks: [{ kind: "p", text: "Even the Prophets are not allowed to intercede save by Allāh’s Permission, whereas the idolaters believed that their idols can intercede for them." }] },
    { id: 95, blocks: [{ kind: "p", text: "Satan and false deities" }] },
    { id: 96, blocks: [{ kind: "p", text: "Namroud, the ruler of Ibrāhīm’s time" }] },
    { id: 97, blocks: [{ kind: "p", text: "To prove his claim he sent for two prisoners, ordered one to be killed and freed the other one." }] },
    { id: 98, blocks: [{ kind: "p", text: "The first meaning of Taht is under but it also means: in, on, down, downstairs; yet almost all translators have chosen beneath or underneath, whereas a stream running underneath of a garden may ruin the whole land!" }] },
    { id: 99, blocks: [{ kind: "p", text: "Such is the similitude of those who are not willing to spend in Allāh’s Path." }] },
    { id: 100, blocks: [{ kind: "p", text: "And man has to follow Allāh’s Will and Allāh’s Divine Attributes as primary models in his own self- cultivation: Thus a rich person gains Allāh’s Pleasure if moral wise he is praiseworthy, since Allāh is the Praiseworthy Rich. (For further explanation, see introduction)" }] },
    { id: 101, blocks: [{ kind: "p", text: "Guiding the disbelievers" }] },
    { id: 102, blocks: [{ kind: "p", text: "Before receiving this Decree" }] },
    { id: 103, blocks: [{ kind: "p", text: "The scribe" }] },
    { id: 104, blocks: [{ kind: "p", text: "Apart from man’s deeds the Criterion for Forgiveness or Punishment is decided by Allāh’s Embracing Knowledge about people, their intentions and their hearts." }] },
    { id: 105, blocks: [{ kind: "p", text: "Reference is made to those who worshipped calf by the order of Sāmerī and for the expiation had to kill themselves the wrongdoers. (2:54)" }] },
  ],
};

export default surah;
