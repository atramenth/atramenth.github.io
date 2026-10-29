import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 2 · Al-Baqarah — book pages 4–40 so far (verses 1–151, partial).
 * The book restarts footnote numbering on every page; here notes are numbered
 * once per sūrah in reading order (1 = Alif. Lām. Mīm., 2 = “The Muslims”).
 */
const surah: SurahData = {
  number: 2,
  partial: true,
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
  ],
};

export default surah;
