import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 8 · Al-Anfāl — book pages 303–321 (verses 1–75, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 8,
  pages: [
    {
      bookPage: 303,
      heading: {
        title: "Al-Anfāl",
        lines: ["(The War Spoils)", "Revealed at Madīnah", "75 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["They ask you [O, Messenger!] about", "The spoils of war;{1} say: “The spoils", "Belong to Allāh and the Messenger. So", "Fear from the disobedience of Allāh’s", "Commands and set things straight", "Among yourselves; and obey Allāh and", "Allāh’s Messenger, if you are believers.”"],
        },
        {
          type: "verse",
          number: 2,
          lines: ["[The believers are:] Those who feel awe", "And trembling in their hearts{2} when", "Allāh’s Name is mentioned; and when", "Words of Revelation are recited to", "Them, their Faith increases; and they are", "Those who put all their trust in their", "Creator&Nurturer;"],
        },
        { type: "verse", number: 3, continues: true, lines: ["[The believers are:] Those who"] },
      ],
    },
    {
      bookPage: 304,
      blocks: [
        {
          type: "verse",
          number: 3,
          continued: true,
          lines: ["Perform prayers regularly;{3} and spend", "Out of what We have provided for", "Them, as sustenance;"],
        },
        {
          type: "verse",
          number: 4,
          lines: ["Such are the true believers and for", "Them there shall be with their", "Creator&Nurturer grades of dignity,", "Forgiveness and a graceful sustenance."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 5,
          lines: ["[Their dislike regarding the division", "Of the spoils is the same as the dislike", "Of a group of believers]: When your", "Creator&Nurturer Commanded you", "[O, Messenger] to go forth from your", "House justly but a party of the believers", "Disliked it;"],
        },
        {
          type: "verse",
          number: 6,
          lines: ["Disputed with you about the right course", "After it had been made clear; [they", "Received the decree of taking part in", "The war with utmost reluctance] as if they", "Were being driven to death and they", "Were looking at it.{4}"],
        },
        {
          type: "verse",
          number: 7,
          continues: true,
          lines: ["And [remember] when Allāh", "Promised you, [Muslims] one of the two", "Caravans of the enemy, it should be", "Yours: You desired that the unarmed", "And richly laden one [without any", "Trouble] should be yours; but Allāh", "Willed to justify the Truth by His Word"],
        },
      ],
    },
    {
      bookPage: 305,
      blocks: [
        { type: "verse", number: 7, continued: true, lines: ["Of Command and to cut off the roots of", "The disbelievers,{5}"] },
        {
          type: "verse",
          number: 8,
          lines: ["That He might prove the Truth{6} by", "What was true and show Falsehood{7} by", "What was false, though it be disliked", "By the guilty ones."],
        },
        {
          type: "verse",
          number: 9,
          lines: ["And [remember] when you invoked to", "Your Creator&Nurturer for help, so", "Allāh answered you [declaring]: “Verily,", "I will help you with a thousand of", "Angels following one another.”"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["And Allāh did not bestow it{8} but as", "Good-tidings and that your hearts be", "Assured by it. Victory comes only by", "The Aid of Allāh; and verily, Allāh is", "The Source-Wisdom Supremepower."],
        },
        {
          type: "verse",
          number: 11,
          lines: ["[O, believers! Remember] When", "Allāh covered you with a slumber", "To bestow you rest from His Presence", "And He caused rain to descend on", "You from the sky, to clean you thereby", "And to remove from you the impurity", "From Satan and to strengthen your", "Hearts and to keep your feet firm", "Therewith.{9}"],
        },
      ],
    },
    {
      bookPage: 306,
      blocks: [
        {
          type: "verse",
          number: 12,
          lines: ["And [remember O, Messenger]", "When your Creator&Nurturer revealed", "To the Angels, stating: “Verily, I am", "With you; so keep you firm the believers;", "Soon I will cast dread into the hearts of", "The disbelievers; so smite above their", "Necks and smite their fingertips!”"],
        },
        {
          type: "verse",
          number: 13,
          lines: ["This [Command] was issued", "Because they opposed and disobeyed", "Allāh and Allāh’s Messenger; and", "Whoever contends against Allāh and", "Allāh’s Messenger then [should know", "That] verily, Allāh is", "The Severe-Retributing;"],
        },
        {
          type: "verse",
          number: 14,
          lines: ["[O, you who disbelieve!] That [Torment]", "Is for this world, so taste it and know", "That for the disbelievers the Torment of", "The Fire is prepared [in the Hereafter.]"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 15,
          lines: ["O, you who believe! When you", "Encounter with an invasive group of", "The disbelievers in the battlefield, do", "Not turn your backs to them [out of", "Fear];"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["And whoever turns his back to", "The enemy on such a day, unless it is", "Within a stratagem of war, or in order", "To retreat to a troop of his own, he", "Indeed has entitled himself to Allāh’s", "Wrath; and his abode is the Hell, an", "Evil destination indeed!"],
        },
      ],
    },
    {
      bookPage: 307,
      blocks: [
        {
          type: "verse",
          number: 17,
          lines: ["So [O, believers!] you did not kill", "The disbelievers but Allāh killed them", "[By the Angels]; and [O, Messenger] you", "Did not throw an arrow or [a handful of]", "Sands when you did throw but Allāh", "Threw [by Jibrāīl], in order that Allāh", "Might try the believers by a Gracious", "Trial from His Presence. Verily, Allāh is", "The Knowing Hearer."],
        },
        {
          type: "verse",
          number: 18,
          lines: ["[This event reminds the believers", "That] Verily, Allāh weakens the plot of", "The disbelievers."],
        },
        {
          type: "verse",
          number: 19,
          lines: ["[Say O, Messenger to the disbelievers:]", "“If you are seeking victory{10} [as you", "Claimed and prayed before], it has", "Already come upon you through", "The victory of Islām, so if you give up", "[Fighting the believers], it will be better", "For you; but if you return [to attack], we", "Shall also return; and your forces will not", "Avail you, though they may be many;", "Since Allāh is the Supporter of", "The believers.”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 20,
          lines: ["O, you who believe! Obey Allāh", "And Allāh’s Messenger and do not", "Turn away from the Messenger", "While you hear his call [to guidance];"],
        },
        { type: "verse", number: 21, continues: true, lines: ["And do not be as those who said:"] },
      ],
    },
    {
      bookPage: 308,
      blocks: [
        {
          type: "verse",
          number: 21,
          continued: true,
          lines: ["“We heard.” Whereas they did not listen", "To the Divine Words;"],
        },
        {
          type: "verse",
          number: 22,
          lines: ["Verily, the worst of moving", "Creatures in the Sight of Allāh are", "Those who are deaf and dumb [from", "Hearing and telling the truth] and do not", "Use their reason;"],
        },
        {
          type: "verse",
          number: 23,
          lines: ["If Allāh had found in them any", "Good, He would have made them", "Hear; [even so], if He had made them", "Hear, they would have turned away", "While protesting against the Truth.{11}"],
        },
        {
          type: "verse",
          number: 24,
          lines: ["O, you who believe! Give your", "Response to Allāh and His Messenger", "When you are invited to that which will", "Give you life;{12} and know that Allāh", "Stands between man and his heart", "[And knows man’s intentions through", "His Embracing Knowledge]; and", "Eventually you all shall be gathered to", "His Presence;"],
        },
        {
          type: "verse",
          number: 25,
          lines: ["And fear the disaster which does", "Not particularly affect only", "The wrongdoers among you when it", "Befalls [such as flood and earthquake];", "And know that Allāh is", "The Severe-Retributing;"],
        },
        { type: "verse", number: 26, continues: true, lines: ["And remember when you were"] },
      ],
    },
    {
      bookPage: 309,
      blocks: [
        {
          type: "verse",
          number: 26,
          continued: true,
          lines: ["Few and were considered weak in", "The land{13} and were afraid that [in", "The case of leaving the city] men might", "Kidnap you by force, but Allāh provided", "A safe refuge for you, and strengthened", "You with His Aid and gave you good and", "Pure things for your sustenance, so that", "You may be grateful to your", "Creator&Nurturer."],
        },
        {
          type: "verse",
          number: 27,
          lines: ["O, you who believe! Do not betray", "Allāh and Allāh’s Messenger, nor", "Misuse knowingly properties entrusted", "To you."],
        },
        {
          type: "verse",
          number: 28,
          lines: ["And [O, you who believe!] know that", "Your wealth and your children are but a", "Trial and that with Allāh is the best", "Reward [for those who pass this trial,", "Successfully.]"],
        },
        {
          type: "verse",
          number: 29,
          lines: ["O, you who believe! If you fear Allāh", "By regarding piety, He will grant you a", "Power of Distinction [to distinguish", "Between Right and Wrong] and Allāh", "Will remove from you, your evil deeds", "And will forgive you; and Allāh is", "The Owner of the Great-Grace."],
        },
        {
          type: "verse",
          number: 30,
          continues: true,
          lines: ["[O, Messenger] And [remember] when the", "Disbelievers plotted against you, they", "Decided to confine you or to kill you,", "Or to expel you from the land;{14} they"],
        },
      ],
    },
    {
      bookPage: 310,
      blocks: [
        {
          type: "verse",
          number: 30,
          continued: true,
          lines: ["Were plotting and Allāh also was", "Planning [against their plot]; and verily,", "Allāh is the Supreme-Planner."],
        },
        {
          type: "verse",
          number: 31,
          lines: ["And when Our Words of Revelation{15}", "Are recited to them, they say: “We had", "Heard this before; if we wish we can say", "The like of these; these are nothing, but", "Fables of the ancients.”{16}"],
        },
        {
          type: "verse",
          number: 32,
          lines: ["And remember [O, Messenger]", "When they said: “O, Allāh! If this", "[Qur’ān] is indeed the Truth from you,", "Then rain down stones from the sky on", "Us, [who do not believe in it], or afflict", "Us with a painful Torment.”"],
        },
        {
          type: "verse",
          number: 33,
          lines: ["But Allāh would not send any Torment", "On them while you [O, Messenger]", "Are among them, nor will Allāh", "Chastise them while they could seek", "Forgiveness [from their Creator.]"],
        },
        {
          type: "verse",
          number: 34,
          lines: ["And why should not Allāh punish", "Them while they hinder people from", "The Sacred Mosque, whereas they are", "Not its custodians? No men could be its", "Custodians, except the pious, but most", "Of them do not understand;"],
        },
        {
          type: "verse",
          number: 35,
          continues: true,
          lines: ["Their prayer at the House{17} [of", "Allāh] was only whistling and", "Clapping of hands; therefore [it was"],
        },
      ],
    },
    {
      bookPage: 311,
      blocks: [
        { type: "verse", number: 35, continued: true, lines: ["Stated to them:] “Taste the Torment", "Due to your disbelief!”"] },
        { type: "divider" },
        {
          type: "verse",
          number: 36,
          lines: ["The disbelievers spend their", "Wealth to hinder [the people] from", "Allāh’s Path, so they will continue", "To spend it, but eventually it will", "Become a cause of regret for them; then", "They will be defeated [by the Muslims]", "And those who disbelieve will be gathered", "To the Hell;"],
        },
        {
          type: "verse",
          number: 37,
          lines: ["Allāh’s Decision is that to separate", "The impure men from the pure ones", "And put the impure, one on another,", "Pile them up together and cast them", "Into the Hell; they are indeed", "The losers;"],
        },
        {
          type: "verse",
          number: 38,
          lines: ["Say [O, Messenger!] to the disbelievers:", "“If they desist [from disbelief and", "Wickedness], their past would be", "Forgiven, but if they return to it,", "The Chastisement of those before them,", "In the previous times, will overtake them", "Too.”{18}"],
        },
        {
          type: "verse",
          number: 39,
          lines: ["And [O, Muslims!] fight them until", "There is no more disbelief or tumult", "And the Religion of Allāh prevails", "Entirely throughout the earth, but if", "They desist, then certainly Allāh is", "The Seer of what they do;"],
        },
      ],
    },
    {
      bookPage: 312,
      blocks: [
        {
          type: "verse",
          number: 40,
          lines: ["And if they turn away [do not lose", "Heart], then know that Allāh is your", "Guardian: The Supreme-Guardian and", "The Supreme-Aider [of the believers]."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 41,
          lines: ["And know that whatever of the war-", "Spoils that you [O, Muslims] may gain,", "One fifth of it is assigned to Allāh’s Way", "And to the Messenger and to the near", "Relatives{19} of the Messenger [and also]", "To the orphans, the poor who beg and", "The wayfarers, if you believe in Allāh", "And also in that which{20} We sent down", "To our obedient worshipper{21} on the Day", "Of Forqan,{22} the Day when the two", "Hosts met, [then keep respect to this", "Decree] and know that Allāh is", "Powerful over all things;"],
        },
        {
          type: "verse",
          number: 42,
          continues: true,
          lines: ["[Remember] When you, [Muslims]", "Were on the near side [of the valley]", "And the enemy were on the farthest", "Side of it, while the caravan [of", "Quraish] was in a lower ground than", "You; and if you mutually had made an", "Appointment,{23} certainly you", "Would have failed to fulfill it"],
        },
      ],
    },
    {
      bookPage: 313,
      blocks: [
        {
          type: "verse",
          number: 42,
          continued: true,
          lines: ["But [you encountered with them by", "Allāh’s Will] in order that", "Allāh might accomplish a matter which", "Had Ordained already; so that those", "Who should perish, may perish based", "On a clear proof and those who", "Should live, may live based on a clear", "Proof. And verily, Allāh is", "The Knowing Hearer, [on hearing", "The pleading of your soul, brought", "About the victory as a response.]"],
        },
        {
          type: "verse",
          number: 43,
          lines: ["[O, Messenger] Remember when Allāh", "Showed them{24} to you in your dream as a", "Small group and if Allāh had showed", "Them to you as many [as they were]", "Certainly you would have become", "Disheartened and certainly you would", "Have disputed about the matter, but", "Allāh did save you [through causing the", "Dream for you]; verily, Allāh is the", "Knower of what is in the hearts;"],
        },
        {
          type: "verse",
          number: 44,
          lines: ["And [remember] when you,", "[Muslims] met [the army of", "The disbelievers on the day of the Badr", "Battle]: Allāh made them appear to you", "As few in your eyes{25} and made you", "Appear as few in their eyes,{26} so that", "Allāh might accomplish a matter already", "Ordained{27} and to Allāh all matters are", "Referred."],
        },
      ],
    },
    {
      bookPage: 314,
      blocks: [
        {
          type: "verse",
          number: 45,
          lines: ["O, you who believe! When you meet an", "Enemy force, hold firm against them and", "Invoke severely to Allāh’s Remembrance", "And Attributes that you may succeed;"],
        },
        {
          type: "verse",
          number: 46,
          lines: ["And obey Allāh and Allāh’s", "Messenger and do not quarrel with", "One another, lest you may get", "Weak-hearted and your spiritual power", "May go away; and be patient in Allāh’s", "Way, surely Allāh is the Supporter of", "The patient;"],
        },
        {
          type: "verse",
          number: 47,
          lines: ["And do not be like those who got out", "From their homes joyfully in order", "To show off to men and to hinder", "Others from Allāh’s Way;{28} verily, Allāh’s", "Knowledge does encompass what they", "Do."],
        },
        {
          type: "verse",
          number: 48,
          lines: ["And remember [O, Messenger]", "When Satan made their evil deeds", "Fair-seeming to them and said: “None", "Of Muslims can overcome you this", "Day{29} and verily, I am near you and will", "Support you.” But when the two hosts", "Met [and Satan sensed the help of", "The Angels], he ran away while saying:", "“Verily, I am clear of you; verily, I see", "That which you cannot see;{30} I fear Allāh,", "And Allāh is the Severe-Retributing.”"],
        },
      ],
    },
    {
      bookPage: 315,
      blocks: [
        {
          type: "verse",
          number: 49,
          lines: ["Then the hypocrites and those in", "Whose hearts is a disease said:", "“These Muslims are deceived by their", "Religion.” Whoever puts his trust in", "Allāh [will find that], Allāh is", "The Source-Wisdom Supremepower."],
        },
        {
          type: "verse",
          number: 50,
          lines: ["And if only you [O, Messenger] could", "See when the Angels [of death] take", "Away the souls of the disbelievers,", "Smiting their faces and their backs", "[Saying:] “Taste you the Torment of", "The Blazing Fire!”"],
        },
        {
          type: "verse",
          number: 51,
          lines: ["[And the Angels will also tell", "Them:] “This is because of that which", "Your hands have forwarded; and verily,", "Allāh is the least unjust to His human", "Creatures.”"],
        },
        {
          type: "verse",
          number: 52,
          lines: ["Their behaviour is similar to that of", "The people of Firown and of those", "Disbelievers before them; they denied", "The Signs and Miracles of Allāh, so", "Allāh punished them for their sins.", "Verily, Allāh is the Powerful", "Severe-Retributing;"],
        },
        {
          type: "verse",
          number: 53,
          lines: ["This indicate that Allāh will never", "Change the bounty which has", "Bestowed upon a people unless they", "Change what is in themselves; [out of", "Rebellion] and verily, Allāh is", "The Knowing Hearer:"],
        },
      ],
    },
    {
      bookPage: 316,
      blocks: [
        {
          type: "verse",
          number: 54,
          lines: ["The manner of Quraish is similar to that", "Of the people of Firown and of those", "Disbelievers before them: They belied", "The Signs of their Creator, so We", "Destroyed them for their sins and We", "Drowned the people of Firown; because", "They all were self-oppressors i.e. ,", "Disbelievers;{31}"],
        },
        {
          type: "verse",
          number: 55,
          lines: ["Verily, the worst of the moving", "Creatures in the Sight of Allāh are", "Those who disbelieve and they will", "Never believe;"],
        },
        {
          type: "verse",
          number: 56,
          lines: ["[O, Messenger!] They are those", "With whom you made a covenant, but", "They broke the covenant every time", "And there is no piety in them;"],
        },
        {
          type: "verse",
          number: 57,
          lines: ["So, if you could get hold of them", "In the battlefield, punish them severely", "In order to disperse those groups behind", "Them so that they may learn a lesson."],
        },
        {
          type: "verse",
          number: 58,
          lines: ["And if you [O, Messenger] fear", "Treachery from any people, throw", "Back their covenant to them on terms", "Of mutuality, for Allāh dislikes", "The traitors."],
        },
        {
          type: "verse",
          number: 59,
          continues: true,
          lines: ["And those who disbelieved should not", "Think that they can overcome you:{32}"],
        },
      ],
    },
    {
      bookPage: 317,
      blocks: [
        { type: "verse", number: 59, continued: true, lines: ["Verily, they will never be able", "To frustrate Allāh’s Power."] },
        {
          type: "verse",
          number: 60,
          lines: ["And [to fight the enemy] prepare", "Against them to the utmost, such as", "Armed forces and strong horses and", "Provisions for fighting, in order", "To frighten the enemy of Allāh as", "Well as your own enemy and others", "Besides them, whom you do not know", "Them but Allāh knows them; and", "Whatever you spend in Allāh’s Way{33}", "Will be repaid to you and you shall not", "Be dealt with, unjustly;"],
        },
        {
          type: "verse",
          number: 61,
          lines: ["But if the enemy shows tendency", "Towards peace, you [O, Messenger]", "Also tend to it and put your trust in", "Allāh; verily, Allāh is the Knowing", "Hearer;"],
        },
        {
          type: "verse",
          number: 62,
          lines: ["And if they intend to deceive you", "[O, Messenger] verily, Allāh will", "Suffice you from their harm; Allāh is", "The One Who strengthened you with", "His Aid as well as with the help of", "The believers;"],
        },
        {
          type: "verse",
          number: 63,
          continues: true,
          lines: ["And Allāh is the One Who caused", "Unity between the hearts of", "The believers [who suffered from discord", "And dispute before]; and had you", "[O Messenger] spent all that is on", "The earth you could not have caused"],
        },
      ],
    },
    {
      bookPage: 318,
      blocks: [
        {
          type: "verse",
          number: 63,
          continued: true,
          lines: ["That unity between their hearts, but", "Allāh caused unity between them; verily,", "Allāh is the Source-Wisdom", "Supremepower."],
        },
        {
          type: "verse",
          number: 64,
          lines: ["O, Messenger! Allāh will protect you", "And those who follow you of", "The believers, [against the wickedness of", "Your enemies]:"],
        },
        {
          type: "verse",
          number: 65,
          lines: ["O, Messenger! Urge the believers", "To fight:{34} If there are twenty steadfast", "Among you, they will overcome two", "Hundred, and if there are a hundred", "Steadfast believers, they will overcome", "A thousand disbelievers, because", "The disbelievers are a people who", "Have no power of understanding;"],
        },
        {
          type: "verse",
          number: 66,
          lines: ["For the present situation, Allāh has", "Lightened your burden of task", "Knowing that in your troop there is", "Some weakness: If there are of you a", "Hundred steadfast believers, they", "Shall overcome two hundred [of", "The disbelievers], and if there are of you", "A thousand [steadfast believers], they", "Shall overcome two thousand [of", "The disbelievers] by Allāh’s Will; and", "Verily, Allāh is the Supporter of", "The patient."],
        },
      ],
    },
    {
      bookPage: 319,
      blocks: [
        {
          type: "verse",
          number: 67,
          lines: ["It is not meet for a Messenger that he", "Should have the prisoners of war [and", "Free them with ransom], unless he has", "Defeated [the disbelievers in", "The battlefield] and has triumphed in", "The land; you desire the temporal profit", "Of this world,{35} but Allāh Wills [for you]", "The Hereafter; and Allāh is", "The Invincible Mighty Decreer;"],
        },
        {
          type: "verse",
          number: 68,
          lines: ["Were it not for a previous Ordained", "Word of Allāh,{36} a Severe Torment", "Would have afflicted you for that", "Ransom you took."],
        },
        {
          type: "verse",
          number: 69,
          lines: ["Eat of what you have acquired as", "War booty, lawful and good, but fear", "From the disobedience of Allāh’s", "Commands. Verily, Allāh is the Merciful", "Forgiving."],
        },
        {
          type: "verse",
          number: 70,
          lines: ["O, Messenger! Say to the captives", "Who are in your hands: “If Allāh finds", "Good intention in your hearts,{37} He will", "Give you something better than what", "Has been taken from you, and He will", "Forgive you; for Allāh is", "The Merciful Forgiving.”"],
        },
        {
          type: "verse",
          number: 71,
          continues: true,
          lines: ["But if the disbelievers intend", "To betray you [O, Messenger] no", "Wonder, since [due to denying their"],
        },
      ],
    },
    {
      bookPage: 320,
      blocks: [
        {
          type: "verse",
          number: 71,
          continued: true,
          lines: ["Creator] they have betrayed", "Allāh too; but Allāh granted you power", "Over them. And Allāh is the Knowing", "Sovereign."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 72,
          lines: ["Verily, those who believed and", "Migrated and strove hard and fought", "With their property and their lives in", "The Path of Allāh as well as those who", "Gave refuge and gave help to them,", "These are friends and supporters of", "One another. And as to those who", "Believed but did not migrate, you have", "No duty to protect them until they", "Migrate; but if they seek your", "Help in the matter of Religion, it is your", "Responsibility to help them, except", "Against the people with whom you", "Have a covenant of mutual alliance;", "And Allāh is the Seer of what you do."],
        },
        {
          type: "verse",
          number: 73,
          lines: ["As for the disbelievers, they are", "Friends of one another, if you", "[Muslims] do not do so [and do not be", "Friends and supporters of one", "Another], there will be mischief and", "Corruption spread on the earth{38}", "[Due to the influence of", "The disbelievers.]"],
        },
        {
          type: "verse",
          number: 74,
          continues: true,
          lines: ["And those who believed and", "Migrated and strove hard in the Path"],
        },
      ],
    },
    {
      bookPage: 321,
      blocks: [
        {
          type: "verse",
          number: 74,
          continued: true,
          lines: ["Of Allāh, as well as those who gave", "Them refuge and aid, these are the true", "Believers; for them, there will", "Be Forgiveness and a generous", "Sustenance [from their", "Creator&Nurturer];"],
        },
        {
          type: "verse",
          number: 75,
          lines: ["And those who accepted Faith [in Islām]", "Afterwards, and migrated and fought for", "Their Faith along with you, they are of", "You; but relatives are nearer to each", "Other in the Book of Allāh;{39} verily,", "Allāh is the Absolute Knower of all", "Things."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "The question is raised on the booties of the Badr Battle" },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "Awe from the Grandeur of Allāh’s Presence and from one’s unintentional faults." },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "Five times daily" },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "As if they were looking at the scene of their own death." },
      ],
    },
    {
      id: 5,
      blocks: [
        { kind: "p", text: "By Allāh’s Will, Muslims were confronted with the armed ones and fought the well-equipped Quraish army with their ill-armed group, but Allāh’s Aid made them victorious." },
      ],
    },
    {
      id: 6,
      blocks: [
        { kind: "p", text: "The Religion of Islām" },
      ],
    },
    {
      id: 7,
      blocks: [
        { kind: "p", text: "The disbelief" },
      ],
    },
    {
      id: 8,
      blocks: [
        { kind: "p", text: "The glad-tidings, regarding the Aid of the Angels" },
      ],
    },
    {
      id: 9,
      blocks: [
        { kind: "p", text: "Before the rain falls, the enemy had the hold of the watering-place and the Muslims suffered from thirst in a dry and sandy desert, and could not wash and clean their body and were longing for ablution. Allāh the Grace-Bestowing sent down the rain from the sky and they felt fortified by the Divine Aid; and also the rain consolidated the loose sand and made it possible for them to plant their feet firmly." },
      ],
    },
    {
      id: 10,
      blocks: [
        { kind: "p", text: "Before Quraish left Makkah to attack the Muslims in the Badr Battle, they held on to the curtain of Ka‘bah and prayed saying: “O, Allāh, assist the best of the two forces and the most excellent of the two religions!”" },
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
        { kind: "p", text: "Islāmic Faith" },
      ],
    },
    {
      id: 13,
      blocks: [
        { kind: "p", text: "Madīnah City" },
      ],
    },
    {
      id: 14,
      blocks: [
        { kind: "p", text: "Makkah City" },
      ],
    },
    {
      id: 15,
      blocks: [
        { kind: "p", text: "From the Holy Qur’ān" },
      ],
    },
    {
      id: 16,
      blocks: [
        { kind: "p", text: "Pointing to the Taurāt and the Injīl" },
      ],
    },
    {
      id: 17,
      blocks: [
        { kind: "p", text: "The Ka‘bah" },
      ],
    },
    {
      id: 18,
      blocks: [
        { kind: "p", text: "The Divine Affliction" },
      ],
    },
    {
      id: 19,
      blocks: [
        { kind: "p", text: "According to Shīah Commentators, near relatives of the Holy prophet are the Infallible Imāms. Since they are the on Islāmic leaders of the land and they have to spend on the needy people and pay the due expenses of their offices, so they receive a share of Khomos." },
      ],
    },
    {
      id: 20,
      blocks: [
        { kind: "p", text: "The Divine Aid: Descended Angels as the hosts of the believers." },
      ],
    },
    {
      id: 21,
      blocks: [
        { kind: "p", text: "The Messenger (S.A)" },
      ],
    },
    {
      id: 22,
      blocks: [
        { kind: "p", text: "Forqān: The Distinctive Power between Truth and Falsehood; here, the Day of Forqān means when the two hosts [the believers and the disbelievers] met in the Badr Battle and Allāh’s Aid caused victory for the Muslims over the disbelievers." },
      ],
    },
    {
      id: 23,
      blocks: [
        { kind: "p", text: "About the time and the place of the war" },
      ],
    },
    {
      id: 24,
      blocks: [
        { kind: "p", text: "The enemy’s army" },
      ],
    },
    {
      id: 25,
      blocks: [
        { kind: "p", text: "To increase Muslims’ self-reliance for fight." },
      ],
    },
    {
      id: 26,
      blocks: [
        { kind: "p", text: "To decrease the seriousness of the enemies for confronting the army of the Muslims." },
      ],
    },
    {
      id: 27,
      blocks: [
        { kind: "p", text: "The victory of the Muslims" },
      ],
    },
    {
      id: 28,
      blocks: [
        { kind: "p", text: "Reference is made to the Makkan army" },
      ],
    },
    {
      id: 29,
      blocks: [
        { kind: "p", text: "The day of the Badr Battle" },
      ],
    },
    {
      id: 30,
      blocks: [
        { kind: "p", text: "The Angels" },
      ],
    },
    {
      id: 31,
      blocks: [
        { kind: "p", text: "Here Zālemīn means disbelievers, according to the context of the Revelation and in connection with Luqmān’s definition for Zulm. (31:13)" },
      ],
    },
    {
      id: 32,
      blocks: [
        { kind: "p", text: "The Muslims" },
      ],
    },
    {
      id: 33,
      blocks: [
        { kind: "p", text: "For providing war equipment against the enemy" },
      ],
    },
    {
      id: 34,
      blocks: [
        { kind: "p", text: "In a defensive position Muslims are urged to fight to save their own lives and to protect Religion of Islām: This ‘Āyat was revealed when the polytheists had taken up the sword against the believers seriously." },
      ],
    },
    {
      id: 35,
      blocks: [
        { kind: "p", text: "Taking the money of ransom for freeing the captives" },
      ],
    },
    {
      id: 36,
      blocks: [
        { kind: "p", text: "Except when the condition of taking captives with or without ransom is being fulfilled; the rule is mentioned in the previous Word of Revelation (67) as well as in (47:4)" },
      ],
    },
    {
      id: 37,
      blocks: [
        { kind: "p", text: "Tendency towards Religion of Islām." },
      ],
    },
    {
      id: 38,
      blocks: [
        { kind: "p", text: "In the Islāmic community in particular." },
      ],
    },
    {
      id: 39,
      blocks: [
        { kind: "p", text: "Regarding inheritance" },
      ],
    },
  ],
};

export default surah;
