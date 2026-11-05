import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 37 · As-Sāffāt — book pages 815–833 (verses 1–182, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 37,
  pages: [
    {
      bookPage: 815,
      heading: {
        title: "As-Sāffāt",
        lines: ["(Those Angels Ranged in Ranks)", "Revealed at Makkah", "182 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["By the Angels who range in ranks", "[To carry out Allāh’s Commands]"] },
        { type: "verse", number: 2, lines: ["And by the Angels who are severe in", "Repelling every evil and devil"] },
        {
          type: "verse",
          number: 3,
          lines: ["And by the Angels who recite Allāh’s", "Remembrances and reach Divine", "Messages to the Messengers,"],
        },
        { type: "verse", number: 4, lines: ["[By all these oaths that] Verily, your God", "Is One;"] },
        {
          type: "verse",
          number: 5,
          lines: ["And He is the Creator of the heavens", "And the earth and all between them and", "He is the Creator of the rising-places of", "The sun."],
        },
        { type: "divider" },
        { type: "verse", number: 6, continues: true, lines: ["We decked the sky, the nearest heaven"] },
      ],
    },
    {
      bookPage: 816,
      blocks: [
        { type: "verse", number: 6, continued: true, lines: ["To the earth, with shining stars,"] },
        { type: "verse", number: 7, lines: ["And We preserved it against all", "Rebellious satans,"] },
        {
          type: "verse",
          number: 8,
          lines: ["The Satan’s spies cannot listen to", "The discourse of the Supreme Assembly", "Of the Angels; and they are driven away", "From every direction, [by", "The shooting-stars],"],
        },
        { type: "verse", number: 9, lines: ["They are repulsed and for them is", "The Lasting Torment,"] },
        {
          type: "verse",
          number: 10,
          lines: ["In case one of them snatches away", "Some news by stealing, then such will be", "Pursued by the shooting-stars."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 11,
          lines: ["So ask them [O, Messenger] whether", "Creation of these men [and raising them", "Up] is more difficult or the creation of", "The heavens and the earth and", "The celestial bodies? Whereas indeed", "We created man of a sticky clay;"],
        },
        {
          type: "verse",
          number: 12,
          lines: ["You marvel at the greatness of these", "Creations whereas they redicule", "The whole subject;"],
        },
        { type: "verse", number: 13, lines: ["And when they are admonished they do", "Not mind;"] },
        {
          type: "verse",
          number: 14,
          lines: ["And when they see a Divine Sign or a", "Miracle they try to turn it to a subject", "For mockery;"],
        },
      ],
    },
    {
      bookPage: 817,
      blocks: [
        {
          type: "verse",
          number: 15,
          lines: ["And [like the disbelievers of the old,]", "They say: “This is but an evident magic.”"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["[They say:] “When we are dead and have", "Become dust and bones in our graves", "Shall we then be given life again?"],
        },
        { type: "verse", number: 17, lines: ["“Or our ancestors be raised up", "Again?”"] },
        {
          type: "verse",
          number: 18,
          lines: ["Say [O, Messenger!]: “Yes, indeed you all", "Will be raised up but with humiliation", "And disgrace.”"],
        },
        {
          type: "verse",
          number: 19,
          lines: ["There will be only one Outcry and then", "The dead open their eyes and start", "Looking around them,"],
        },
        { type: "verse", number: 20, lines: ["And they will say: “Woe to us! This is", "The Day of Judgement.”"] },
        {
          type: "verse",
          number: 21,
          lines: ["[It will be stated to them: “This is", "The Day of separation of Truth from", "Falsehood, the Day that you used", "To deny it.”"],
        },
        {
          type: "verse",
          number: 22,
          lines: ["[Then it will be stated to the Angels in", "Charge:] “Gather them together,", "The wrongdoers and their wives and", "Those things that they worshipped,"],
        },
        {
          type: "verse",
          number: 23,
          lines: ["“Those things they worshipped instead", "Of Allāh, and direct them all to", "The Blazing Fire.”"],
        },
      ],
    },
    {
      bookPage: 818,
      blocks: [
        {
          type: "verse",
          number: 24,
          lines: ["[And then will be stated]: “Now stop", "Them for certain questions to be", "Asked.”"],
        },
        {
          type: "verse",
          number: 25,
          lines: ["[The first question will be]: “What is it", "That you do not ask each other for", "Help? [You who so much depended on", "Each other’s help and relationship].”"],
        },
        { type: "verse", number: 26, lines: ["But on that Day they all will be", "Submissive:"] },
        { type: "verse", number: 27, lines: ["They will turn to one another and", "Question one another,"] },
        {
          type: "verse",
          number: 28,
          lines: ["The followers will say to the ringleaders", "Of the disbelief: “It was you who", "Exercised your authority to influence us", "To your way.”"],
        },
        { type: "verse", number: 29, lines: ["They will reply: “Nay, you yourselves had", "No Faith,"] },
        {
          type: "verse",
          number: 30,
          lines: ["“We possessed no authority to influence", "You, in fact you were a rebellious", "People;"],
        },
        {
          type: "verse",
          number: 31,
          lines: ["“Now the Word of Punishment of our", "Creator has proved true against us and", "We all have to taste the Chastisement;"],
        },
        { type: "verse", number: 32, lines: ["“We did lead you astray for we ourselves", "Had gone astray.”"] },
        { type: "verse", number: 33, continues: true, lines: ["The truth is that the followers and"] },
      ],
    },
    {
      bookPage: 819,
      blocks: [
        {
          type: "verse",
          number: 33,
          continued: true,
          lines: ["The misleaders will both receive their", "Share of Punishment on that Day."],
        },
        { type: "verse", number: 34, lines: ["And thus We deal with the wrongdoers,"] },
        {
          type: "verse",
          number: 35,
          lines: ["Because when they were invited to", "The Call of the Divine Unity and they", "Were taught to say: “There is no God", "But Allāh”, they used to turn away", "Arrogantly;"],
        },
        {
          type: "verse",
          number: 36,
          lines: ["And they used to say: “Shall we give up", "Worshipping our gods following", "The preachings of a mad poet?”"],
        },
        {
          type: "verse",
          number: 37,
          lines: ["Whereas he, [the one whom they call a", "Mad poet] has brought them the Message", "Of Truth; and he confirms", "The Messengers of the past."],
        },
        { type: "verse", number: 38, lines: ["You disbelievers [of Quraish] surely shall", "Taste the Painful Chastisement,"] },
        { type: "verse", number: 39, lines: ["And you will be recompensed exactly for", "What you did."] },
        { type: "divider" },
        { type: "verse", number: 40, lines: ["But for the devoted worshippers of", "Allāh is a different condition:"] },
        { type: "verse", number: 41, lines: ["For them a special sustenance is", "Ordained;"] },
        { type: "verse", number: 42, continues: true, lines: ["All kinds of fruit is available for them"] },
      ],
    },
    {
      bookPage: 820,
      blocks: [
        { type: "verse", number: 42, continued: true, lines: ["And they are also highly honoured,"] },
        { type: "verse", number: 43, lines: ["In the Blissful Gardens,"] },
        { type: "verse", number: 44, lines: ["They lean on sofas facing each other,"] },
        { type: "verse", number: 45, lines: ["Cups of pure drinks will be passed to", "Them,"] },
        { type: "verse", number: 46, lines: ["Luminous-white of a delicious taste to", "Those who drink,"] },
        {
          type: "verse",
          number: 47,
          lines: ["It does not distort man’s reason nor will", "It cause intoxication for the drinkers,"],
        },
        {
          type: "verse",
          number: 48,
          lines: ["And with them are wives who only", "Behold their husbands, with their", "Beautiful eyes,"],
        },
        { type: "verse", number: 49, lines: ["Eyes like eggs without shell covered with", "The eyelashes."] },
        {
          type: "verse",
          number: 50,
          lines: ["They [the inhabitants of the Paradise]", "Will turn to one another and make", "Questions from one another [regarding", "Their past]:"],
        },
        { type: "verse", number: 51, lines: ["One of them will say: “I had a friend in", "The world,"] },
        { type: "verse", number: 52, lines: ["“Who used to say: ‘Do you really", "Believe,"] },
        { type: "verse", number: 53, continues: true, lines: ["“That after we are dead and turned into"] },
      ],
    },
    {
      bookPage: 821,
      blocks: [
        {
          type: "verse",
          number: 53,
          continued: true,
          lines: ["Dust and bones, then we shall be raised", "Up and receive compensation for our", "Deeds?”"],
        },
        { type: "verse", number: 54, lines: ["His companion will say: “Would you like", "To get some information about him?”"] },
        { type: "verse", number: 55, lines: ["He looks down and finds him in", "The middle of the Hell;"] },
        {
          type: "verse",
          number: 56,
          lines: ["Then he addresses him: “By Allāh you", "Were about to bring me to your own", "Doom by your suspicious suggestions,"],
        },
        {
          type: "verse",
          number: 57,
          lines: ["“Had it not been for the Favour of my", "Creator I would have surely been among", "Those brought into the Fire.”"],
        },
        { type: "verse", number: 58, lines: ["Then he [expressing his thanks to Allāh]", "Says to others: “Are we not to die,"] },
        { type: "verse", number: 59, lines: ["“After our previous death? And are we", "Not to be chastised?"] },
        { type: "verse", number: 60, lines: ["“Surely, this is a great achievement;"] },
        { type: "verse", number: 61, lines: ["“To attain to this success, all must strive", "And do the righteous deeds.”"] },
        { type: "verse", number: 62, lines: ["[O, people!] Is that a better welcome or", "The Zaqqūm tree? [which is bitter]"] },
        { type: "verse", number: 63, lines: ["We have caused it to be means of", "Torture for the disbelievers:"] },
      ],
    },
    {
      bookPage: 822,
      blocks: [
        { type: "verse", number: 64, lines: ["It is a tree that springs out of", "The bottom of the Hell,"] },
        { type: "verse", number: 65, lines: ["Its fruit resembles the heads of", "The devils;"] },
        { type: "verse", number: 66, lines: ["The disbelievers will eat of it and", "Fill their bellies with,"] },
        { type: "verse", number: 67, lines: ["Then on top of it they will have a drink", "Of boiling water which stinks,"] },
        { type: "verse", number: 68, lines: ["Then they will surely return again to", "The Blazing Fire;"] },
        { type: "verse", number: 69, lines: ["Though they found their ancestors on", "The wrong way,"] },
        { type: "verse", number: 70, lines: ["Nevertheless they rushed to follow", "Them;"] },
        { type: "verse", number: 71, lines: ["Indeed before them the majority of", "The ancient ones also had gone astray;"] },
        { type: "verse", number: 72, lines: ["And indeed We had sent among them", "Expositoring Warners;"] },
        { type: "verse", number: 73, lines: ["Then see what was the end of the", "Warned ones!"] },
        { type: "verse", number: 74, lines: ["Only the devoted worshippers of Allāh", "Were secure regarding punishment."] },
        { type: "divider" },
        { type: "verse", number: 75, continues: true, lines: ["Verily, Nūh invoked to Us and We are"] },
      ],
    },
    {
      bookPage: 823,
      blocks: [
        { type: "verse", number: 75, continued: true, lines: ["The One Who receives invocations with", "Favour:"] },
        { type: "verse", number: 76, lines: ["So We saved Nūh and his people from", "The grave calamity;"] },
        { type: "verse", number: 77, lines: ["And We made his progeny the survivors", "[To continue his way];"] },
        { type: "verse", number: 78, lines: ["And We Ordained a good name for him", "Among the later generations;"] },
        { type: "verse", number: 79, lines: ["Our Salutation is to Nūh, among", "The people of the universe!"] },
        { type: "verse", number: 80, lines: ["Thus We do reward the doers of good;"] },
        { type: "verse", number: 81, lines: ["Indeed he was one of Our devoted", "Believing worshippers,"] },
        { type: "verse", number: 82, lines: ["[We delivered him] and drowned his", "Enemies."] },
        { type: "divider" },
        { type: "verse", number: 83, lines: ["And verily, Ibrāhīm was a true follower", "Of Nūh;"] },
        { type: "verse", number: 84, lines: ["He came towards his Creator&Nurturer", "With a pure heart;"] },
        {
          type: "verse",
          number: 85,
          lines: ["And he disputed with his father and his", "People saying: “What are these that you", "Worship?"],
        },
        { type: "verse", number: 86, continues: true, lines: ["“Do you worship false deities instead of"] },
      ],
    },
    {
      bookPage: 824,
      blocks: [
        { type: "verse", number: 86, continued: true, lines: ["Allāh?"] },
        { type: "verse", number: 87, lines: ["“What is your idea about the Creator of", "The worlds?”"] },
        { type: "verse", number: 88, lines: ["Then he looked at the stars,"] },
        { type: "verse", number: 89, lines: ["And said “I feel sick and disgusted.”{1}"] },
        { type: "verse", number: 90, lines: ["So [on hearing his comment] they", "Turned away and departed."] },
        {
          type: "verse",
          number: 91,
          lines: ["Then he approached their gods and", "Said: “Will you not eat of your followers’", "Offerings?"],
        },
        { type: "verse", number: 92, lines: ["“What is it that you do not speak?”"] },
        { type: "verse", number: 93, lines: ["Then he turned upon them and stroke", "Them [with a hatcher],"] },
        { type: "verse", number: 94, lines: ["Then the idolaters came back to him", "Hurriedly;"] },
        { type: "verse", number: 95, lines: ["He said: “Do you worship things that you", "Have carved [with your own hands?]"] },
        {
          type: "verse",
          number: 96,
          lines: ["“But Allāh is the One Who has created", "You and the material of which you make", "Your gods.”"],
        },
        { type: "verse", number: 97, continues: true, lines: ["The chiefs of the people said: “Build up"] },
      ],
    },
    {
      bookPage: 825,
      blocks: [
        { type: "verse", number: 97, continued: true, lines: ["A furnace like a tower and cast him into", "The burning fire.”"] },
        {
          type: "verse",
          number: 98,
          lines: ["They plotted such a dreadful plot", "Against him, but We made them feel", "Most disgraced.{2}"],
        },
        {
          type: "verse",
          number: 99,
          lines: ["And he said: “I put my face towards", "The Way of my Creator&Nurturer; and", "He will surely guide me.”"],
        },
        {
          type: "verse",
          number: 100,
          lines: ["And [one day] he prayed: “O, my", "Creator&Nurturer! Bestow me", "Righteous sons.”"],
        },
        { type: "verse", number: 101, lines: ["So We granted Ibrāhīm the good news", "Of a patient and dignified son;"] },
        {
          type: "verse",
          number: 102,
          lines: ["But when he reached the age that he", "Assisted his father in his affairs [a", "Dream was caused for Ibrāhīm] and he", "Said to his son: “O, my son! I have", "Seen in a dream that I am Commanded", "To slaughter you as a sacrifice, now", "What do you think about it? Ismāīl", "Said: “O, my father! Do what you are", "Commanded to do; you will find me by", "Allāh’s Will one of the patients.”"],
        },
        {
          type: "verse",
          number: 103,
          lines: ["So when both of them felt submissive", "To Allāh; and he had him laid his", "Forehead on the earth, prostrating,"],
        },
        { type: "verse", number: 104, lines: ["We called out to him: “O, Ibrāhīm!"] },
      ],
    },
    {
      bookPage: 826,
      blocks: [
        { type: "verse", number: 105, lines: ["“You have fulfilled the dream; and thus", "We reward the doers of good;"] },
        {
          type: "verse",
          number: 106,
          lines: ["“Since this trial made clear the grade", "Of your submission to your", "Creator&Nurturer.”"],
        },
        { type: "verse", number: 107, lines: ["To ransom his son We sent down a", "Huge ram, [through the Angel Jibrāīl]"] },
        { type: "verse", number: 108, lines: ["And We made his good name enduring", "Among the later generations;"] },
        { type: "verse", number: 109, lines: ["Salutation to Ibrāhīm!"] },
        { type: "verse", number: 110, lines: ["Thus We do reward the doers of good:"] },
        { type: "verse", number: 111, lines: ["For he was indeed one of Our sincere", "Worshippers;"] },
        { type: "verse", number: 112, lines: ["And also We gave him glad-tidings of", "Isshāq a righteous Messenger;"] },
        {
          type: "verse",
          number: 113,
          lines: ["And We blessed him and Isshāq; and", "Of their offsprings some are the doers", "Of good but some of them became", "Self-oppressors due to their", "Disobedience."],
        },
        { type: "divider" },
        { type: "verse", number: 114, continues: true, lines: ["[Also] We bestowed Our Favour on"] },
      ],
    },
    {
      bookPage: 827,
      blocks: [
        { type: "verse", number: 114, continued: true, lines: ["Mūssā and Hārūn:"] },
        { type: "verse", number: 115, lines: ["And We saved them and their people", "From a tremendous suffering;"] },
        {
          type: "verse",
          number: 116,
          lines: ["And We aided them [by giving them", "Power of exhibiting miraculous acts]", "Over their enemies, so they became", "Victorious;"],
        },
        { type: "verse", number: 117, lines: ["And We gave them Expositoring Book", "Of Guidance;"] },
        { type: "verse", number: 118, lines: ["And We guided them both to", "The Straight path;"] },
        { type: "verse", number: 119, lines: ["And granted them good and enduring", "Name among the later generations;"] },
        { type: "verse", number: 120, lines: ["Salutation on Mūssā and Hārūn!"] },
        { type: "verse", number: 121, lines: ["Thus We reward the doers of good;"] },
        { type: "verse", number: 122, lines: ["Indeed both of them were of Our", "Sincere and righteous worshippers."] },
        { type: "divider" },
        { type: "verse", number: 123, lines: ["And Eliās was surely one of Our", "Messengers,"] },
        { type: "verse", number: 124, lines: ["And he admonished his people saying:", "“Will you not try to be righteous?"] },
        { type: "verse", number: 125, continues: true, lines: ["“Do you worship Ba’al{3} instead of"] },
      ],
    },
    {
      bookPage: 828,
      blocks: [
        { type: "verse", number: 125, continued: true, lines: ["Allāh, the only Creator of the best?"] },
        { type: "verse", number: 126, lines: ["“Allāh has created you and your", "Ancestors.”"] },
        {
          type: "verse",
          number: 127,
          lines: ["But they rejected him, so they will", "Surely be called up to Hell, [as other", "Disbelievers]"],
        },
        { type: "verse", number: 128, lines: ["The sincere worshippers among them", "Are excluded;"] },
        { type: "verse", number: 129, lines: ["And We Ordained a good name for", "Eliās among the later generations;"] },
        { type: "verse", number: 130, lines: ["Salutation on Eliāss and those who", "Followed him!"] },
        { type: "verse", number: 131, lines: ["Thus We reward the doers of good;"] },
        { type: "verse", number: 132, lines: ["For he was indeed one of Our sincere", "Worshippers."] },
        { type: "divider" },
        { type: "verse", number: 133, lines: ["Also Lūt was one of Our Messengers:"] },
        { type: "verse", number: 134, lines: ["We delivered him and his people,"] },
        { type: "verse", number: 135, lines: ["Except his wife, the old woman who", "Remained with the corrupt people;"] },
        { type: "verse", number: 136, lines: ["Then We destroyed the others by", "Sending the Divine Chastisement;"] },
        { type: "verse", number: 137, lines: ["And surely you pass by their destroyed", "City every morning;"] },
      ],
    },
    {
      bookPage: 829,
      blocks: [
        { type: "verse", number: 138, lines: ["And also at night; do you not think", "About the lesson of their doom?"] },
        { type: "divider" },
        { type: "verse", number: 139, lines: ["Also Yūnus was one of the Messengers:"] },
        { type: "verse", number: 140, lines: ["[Who after cursing his people] ran away", "Towards the laden ship;"] },
        {
          type: "verse",
          number: 141,
          lines: ["[The storm was heavy and the ship was", "Laden] so they decided to cast off one", "Of the passengers by casting lots; and", "Yūnus, as a result was cast in the sea:"],
        },
        { type: "verse", number: 142, lines: ["Then a corocodile swallowed him and", "He was to be blamed.{4}"] },
        { type: "verse", number: 143, lines: ["Had it not been that he invoked to", "Allāh for accepting his repentance,"] },
        {
          type: "verse",
          number: 144,
          lines: ["He would have surely remained in", "The belly of the corocodile up to", "The Day of Judgement;"],
        },
        { type: "verse", number: 145, lines: ["Then We cast him on the dry land near", "The sea; and he was quite sick;"] },
        {
          type: "verse",
          number: 146,
          lines: ["And We caused a bush of a pumpkin to", "Grow over him to give him a spreading", "Shade,"],
        },
      ],
    },
    {
      bookPage: 830,
      blocks: [
        {
          type: "verse",
          number: 147,
          lines: ["Then We sent him back to his people,", "They were hundred thousand men or", "More;"],
        },
        {
          type: "verse",
          number: 148,
          lines: ["Then they believed and obeyed him, so", "We let them benefit their worldly life", "To an appointed time."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 149,
          lines: ["[O, Messenger!] Ask these pagans", "Whether your Creator&Nurturer has", "Created daughters for Himself and", "Sons for them?"],
        },
        { type: "verse", number: 150, lines: ["Or did We create the Angels female,", "And they witnessed it?"] },
        { type: "verse", number: 151, lines: ["O, believers! Know that they have", "Forged lies and they say:"] },
        { type: "verse", number: 152, lines: ["“Allāh has created children for", "Himself.” And they are indeed the liars!"] },
        { type: "verse", number: 153, lines: ["Did He prefer daughters over sons?"] },
        { type: "verse", number: 154, lines: ["What is the matter with you that you", "Judge this way?"] },
        { type: "verse", number: 155, lines: ["Will you not be reminded?"] },
        { type: "verse", number: 156, lines: ["Do you have any sound and solid proof", "For what you claim?"] },
        {
          type: "verse",
          number: 157,
          lines: ["If you have any Book then bring it", "Forth as your proof, if you are truthful;"],
        },
      ],
    },
    {
      bookPage: 831,
      blocks: [
        {
          type: "verse",
          number: 158,
          lines: ["And they have considered some sort of", "Kinship between Allāh and the Jinns,", "But the Jinns are quite aware that they", "Will be called up to Allāh’s Presence", "[On the Day of Resurrection]."],
        },
        { type: "verse", number: 159, lines: ["Allāh is the Absolute Pure and above", "What they ascribe to Him;"] },
        {
          type: "verse",
          number: 160,
          lines: ["Only the sincere and selected obedient", "Worshippers of Allāh avoid such vain", "Talks."],
        },
        { type: "verse", number: 161, lines: ["Say [O, Messenger!]: “You and what", "You worship,"] },
        { type: "verse", number: 162, lines: ["“Cannot mislead the believers against", "Allāh;"] },
        { type: "verse", number: 163, lines: ["“Save those who have chosen to attain", "The Hell Fire.”"] },
        {
          type: "verse",
          number: 164,
          lines: ["[The Angels say: we are not Allāh’s", "Daughters] “For every of us there is a", "Determined place and position;"],
        },
        { type: "verse", number: 165, lines: ["“And verily, we are all ranged in ranks", "To carry out Allāh’s Commands;"] },
        { type: "verse", number: 166, lines: ["“And verily, we are those who", "Perpetually Celebrate Allāh’s", "Attributes!”"] },
        { type: "divider" },
        { type: "verse", number: 167, lines: ["These Quraish pagans used to say:"] },
      ],
    },
    {
      bookPage: 832,
      blocks: [
        { type: "verse", number: 168, lines: ["“If a Divine Book of the old had been", "Sent down to us,"] },
        { type: "verse", number: 169, lines: ["“We would have surely become of Allāh’s", "Sincere obedient worshippers.”"] },
        {
          type: "verse",
          number: 170,
          lines: ["But now that the Holy Qur’ān is sent", "To them they reject it; so they will", "Soon know [the consequences of their", "Denial]."],
        },
        {
          type: "verse",
          number: 171,
          lines: ["[O, Messenger! Do not grieve due to", "Their disbelief since] Our Ordainment", "Has already been Decided for Our", "Messengers and the Divine Emissaries:"],
        },
        {
          type: "verse",
          number: 172,
          lines: ["That they will certainly succeed since", "They are Aided from the Divine", "Presence;"],
        },
        { type: "verse", number: 173, lines: ["And Our hosts, surely will overcome", "[The disbelievers and the wrongdoers];"] },
        { type: "verse", number: 174, lines: ["So turn away from them for a while,"] },
        { type: "verse", number: 175, lines: ["Just watch them now; and soon they", "Will see the recompense of their deeds;"] },
        { type: "verse", number: 176, lines: ["Do they really wish you to hasten on", "Our Punishment?"] },
        {
          type: "verse",
          number: 177,
          lines: ["But when the Calamity falls on their", "Courtyards, terrible will be", "The morning of the warned ones!"],
        },
      ],
    },
    {
      bookPage: 833,
      blocks: [
        { type: "verse", number: 178, lines: ["So turn away from them till a time;"] },
        { type: "verse", number: 179, lines: ["Just watch them now; and soon they", "Shall see the recompense of their deeds."] },
        {
          type: "verse",
          number: 180,
          lines: ["Absolute Pure is your Creator&Nurturer", "Who is the Creator of His Invincible", "Might and He is above what they ascribe", "To Him."],
        },
        { type: "verse", number: 181, lines: ["And salutation be to all the Messengers", "Of Allāh!"] },
        {
          type: "verse",
          number: 182,
          lines: ["And thanksgiving and adoration of", "The worshippers is only due to Allāh", "The Creator of the worlds and their", "Inhabitants."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "Since a group of Ibrāhīm’s people were star- worshippers, he first raised the question on their idea about Allāh, then looking at the stars said: “I feel sick [or] disgusted.” And thus he showed his detest against their ignorance and superstition." },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "Since by Allāh’s Command the fire turned cool and Ibrāhīm was saved 21:69" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "Ba’al, the sun-god, worshipped in syria" },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "Because he had cursed his people, but he himself wanted to get away from the scene of their punishment, and he did not wait for Allāh’s Leave via Revelation." },
      ],
    },
  ],
};

export default surah;
