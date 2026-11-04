import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 33 · Al-Ahzāb — book pages 761–778 (verses 1–73, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 33,
  pages: [
    {
      bookPage: 761,
      heading: {
        title: "Al-Ahzāb",
        lines: ["(The Confederates or the Parties)", "Revealed at Madīnah", "73 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["O, Messenger! Fear from", "The disobedience of Allāh and do not", "Conform to the devilish suggestions", "Offered by the disbelievers and", "The hypocrites; verily, Allāh is", "The Absolute Knowing Decreer;"],
        },
        {
          type: "verse",
          number: 2,
          lines: ["And only follow what is revealed to you", "From your Creator&Nurturer; verily,", "Allāh through His Embracing", "Knowledge is Aware of all that you do;"],
        },
        {
          type: "verse",
          number: 3,
          lines: ["And put your trust in Allāh while", "Encountering problems raised in the way", "Of your Mission; His Support and", "Guardianship will suffice the worshippers."],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 762,
      blocks: [
        {
          type: "verse",
          number: 4,
          lines: ["Allāh has not put two hearts in one", "Chest of any man;{1} nor He has", "Appointed your wives whom you quit", "On the basis of Zehār,{2} as your mothers;", "And also Allāh has not appointed your", "Adopted sons as your real sons. These", "Are superstitions uttered by your", "Tongues, nothing valid about them.", "Allāh speaks the Truth and He guides", "You to the Straight Path."],
        },
        {
          type: "verse",
          number: 5,
          lines: ["Call your step-son by the name of his", "Father; this is only fair and just", "According to Allāh’s Sight; but in case", "You do not know the father of the son,", "Then they are your brothers in Faith", "And your friends. There is no blame on", "You if you did not call them by the name", "Of their father out of mistake, but if you", "Did it purposely you will be questioned.", "And Allāh is the Merciful Forgiving", "[Forgives mistakes which is not done", "Deliberately]."],
        },
        {
          type: "verse",
          number: 6,
          continues: true,
          lines: ["The Messenger is closer to the believers", "Than their relatives and more entitled", "To respect; and his wives are the mothers", "Of the Believers. And the relatives are", "More privileged regarding the inheritance", "Than the Assisters and the Mohājers,{3}"],
        },
      ],
    },
    {
      bookPage: 763,
      blocks: [
        {
          type: "verse",
          number: 6,
          continued: true,
          lines: ["According to Allāh’s Decree in", "The Book unless some of you want", "To do some good to a friend [so it", "May be mentioned in the deceased’s will]", "Such is written in the Book of Allāh."],
        },
        {
          type: "verse",
          number: 7,
          lines: ["And [O, Messenger remind them] when", "We took a covenant from the", "Messengers and from you and Nūh and", "Ibrāhīm and Mūssā and Īssa son of", "Maryam; and indeed We took a solemn", "Covenant from all of them,"],
        },
        {
          type: "verse",
          number: 8,
          lines: ["So that He may question the truthful", "[Messengers] about the truthfulness", "Of their followers; and Allāh has", "Prepared for the disbelievers a painful", "Torment."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 9,
          lines: ["O, you who believe! Remember", "The Favour of Allāh upon you when you", "Were attacked by a horrible host [of", "The disbelievers] but We sent against", "Them a stormy wind and the Invisible", "Host [of the Angels]; and Allāh is the Seer", "Of all that you do;"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["And remember when the host of", "The enemy surrounded you from above", "You and from below you; and when your", "Eyes were fixed and the hearts rose up", "To the throats out of terror and you", "Started thinking false thoughts about", "Allāh’s Promises;"],
        },
      ],
    },
    {
      bookPage: 764,
      blocks: [
        {
          type: "verse",
          number: 11,
          lines: ["That was the time that the believers", "Were tried; and they were shaken to", "Their utmost shaking;"],
        },
        {
          type: "verse",
          number: 12,
          lines: ["And in that situation the hypocrites and", "Those in whose hearts is a disease said:", "“The Promise of Allāh and His", "Messenger was nothing but deceit.”"],
        },
        {
          type: "verse",
          number: 13,
          lines: ["Also a group of them said: “O, people", "Of Madīnah! It is not for you to get", "Involved in this war, go back.” And", "Another party of them asked permission", "From the Messenger saying: “Our", "Houses are void of any fence [and are", "Exposed to the danger of theft.]” It was", "Not true, all these were excuses for", "Running away from the war;"],
        },
        {
          type: "verse",
          number: 14,
          lines: ["They were mentally in a situation that if", "The enemies had come to them from the", "Sides of the city and had incited them to", "Return to paganism they would have", "Certainly received them with a positive", "Response and without any delay."],
        },
        {
          type: "verse",
          number: 15,
          lines: ["And indeed they had before made a", "Covenant with Allāh that they would", "Never turn their backs while", "Encountering the enemies; and a", "Covenant with Allāh will surely be", "Questioned;"],
        },
        {
          type: "verse",
          number: 16,
          continues: true,
          lines: ["Say [O, Messenger!]: “If you are running", "Away from death or being killed, you", "Will have a very little time to enjoy life"],
        },
      ],
    },
    {
      bookPage: 765,
      blocks: [
        {
          type: "verse",
          number: 16,
          continued: true,
          lines: ["[Because Allāh’s Wrath even in this", "World will fall upon the traitors].”"],
        },
        {
          type: "verse",
          number: 17,
          lines: ["Say [O, Messenger!]: “Who can shelter", "You against Allāh’s Wrath? If it be", "Allāh’s Will to punish you or to bestow", "Grace upon you nothing can bar His", "Command to be fulfilled; and they,", "The people cannot find any Guardian", "And Supporter but Allāh.”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 18,
          lines: ["Verily, Allāh knows those among you", "Who hinder others from taking part in", "The war and those who say to their", "Brothers and kinsmen: “Come along to", "Us and do not get involved in", "The war.” And also He knows those who", "Do not come to the fight except for", "A short while;"],
        },
        {
          type: "verse",
          number: 19,
          lines: ["They are jealous of you believers, yet", "When a danger comes to them, you will", "See them looking to you [O, Messenger]", "For help with revolving eyes like", "One who is being approached by death;", "And when the fear of the danger abates", "They start smiting you, [the believers]", "With bitter words. They are greedy", "About wealth. They are the ones who", "Have not real Faith, [though they call", "Themselves Muslims] so Allāh shall", "Make their deeds [even the good ones] of", "No effect and that is quite easy for", "Allāh;"],
        },
      ],
    },
    {
      bookPage: 766,
      blocks: [
        {
          type: "verse",
          number: 20,
          lines: ["They think the parties have not gone", "Away yet, so they are in awe and if", "The parties should come back again,", "They would wish they were in the desert", "Among the desert dweller Arabs; and", "They could ask news about you from far", "Away; even if these lowly people, were", "Among you, they would not fight but a", "Little."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 21,
          lines: ["Indeed the Messenger of Allāh is an", "Outstanding Exemplar for those who", "Have hope in Allāh’s Grace and in", "The Last Day and who keep on", "Saying Allāh’s Remembrance:"],
        },
        {
          type: "verse",
          number: 22,
          lines: ["As soon as the believers saw the forces", "Of the parties, with full assurance they", "Said: “This is what Allāh and His", "Messenger had warned us before, and", "Allāh and His Messenger told us", "The truth.” And the fulfillment of", "The Divine Prophecy only added to their", "Faith and added to their submission to", "Allāh’s Will."],
        },
        {
          type: "verse",
          number: 23,
          lines: ["There are among the believers many", "Men who have been true to the covenant", "They made with Allāh; of them some", "Have submitted their souls in", "Martyrdom; and there are some who are", "Waiting to join their brothers in", "Paradise and they have not in the least", "Changed their mind about their", "Covenant;"],
        },
      ],
    },
    {
      bookPage: 767,
      blocks: [
        {
          type: "verse",
          number: 24,
          lines: ["Allāh’s Will is to reward the truthful", "For their truthfulness and punishes", "The hypocrites if He decides so, or He", "May accept their repentance. Verily,", "Allāh is the Merciful Forgiving."],
        },
        {
          type: "verse",
          number: 25,
          lines: ["And Allāh turned back the disbelievers", "With their bitter anger since they gained", "Nothing and Allāh secured the believers", "From the hardship of fighting{4} and", "Allāh is the Invincible Supremepower", "[Who overcomes all powers.]"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 26,
          lines: ["And Allāh did take down those of", "People of the Book who supported", "The disbelievers from their strong", "Fortresses and He also cast awe in", "The hearts of them; so you believers", "Killed some of them and took captives", "Some others;"],
        },
        {
          type: "verse",
          number: 27,
          lines: ["And He appointed you heirs to their", "Land and their dwellings and their", "Properties and even to the land that you", "Had never walked in. And Allāh is", "Powerful over all things."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 28,
          continues: true,
          lines: ["O, Messenger! Proclaim to your wives:", "“If you prefer the life of this world", "And its luxury then I will", "Provide valuable gifts and let you free"],
        },
      ],
    },
    {
      bookPage: 768,
      blocks: [
        { type: "verse", number: 28, continued: true, lines: ["[From the marriage bond] in a fair", "Manner;"] },
        {
          type: "verse",
          number: 29,
          lines: ["“But if you seek Allāh’s Way", "And the Messenger’s pleasure and", "The Abode of the Hereafter, in that", "Case, be sure that Allāh has prepared", "For the good-doers of you a great", "Reward.”"],
        },
        {
          type: "verse",
          number: 30,
          lines: ["O, wives of the Messenger! Whoever", "Of you who commits improper and", "Shameful acts, the punishment will be", "Doubled for her; and this is easy for", "Allāh;"],
        },
        {
          type: "verse",
          number: 31,
          lines: ["But whoever of you who is a", "Humble believer of Allāh and obeys", "His Messenger and does righteous", "Deeds, to her We shall bestow her", "Reward doubled and We have prepared", "For her a worthy sustenance [in", "The Paradise];"],
        },
        {
          type: "verse",
          number: 32,
          lines: ["O, wives of the Messenger! You are not", "Like an ordinary woman: You are to be", "An example of piety, so do not speak", "With a soft voice while speaking to a", "Man, lest one in whose heart is a disease", "May feel tempted for you; and speak in", "The manner of enjoining good;"],
        },
        {
          type: "verse",
          number: 33,
          continues: true,
          lines: ["And stay very often in your houses; and", "Do not exhibit your beauty and", "Ornaments as the manner of", "The women of the Time of Ignorance;"],
        },
      ],
    },
    {
      bookPage: 769,
      blocks: [
        {
          type: "verse",
          number: 33,
          continued: true,
          lines: ["Establish prayer, and pay alms and obey", "Allāh and His Messenger. Verily, Allāh’s", "Will is to remove away impurity from", "You, the people of the Messenger’s", "Household and to purify you throughly;"],
        },
        {
          type: "verse",
          number: 34,
          lines: ["And [you wives of the Messenger]", "Should rehearse and publish what", "Is recited in your homes, of Allāh’s", "Words of Revelation and of", "The Divine Wisdom. Verily, Allāh is", "The Aware Owner of precision."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 35,
          lines: ["For Muslim men and women, for", "Believing men and women, for obedient", "Worshippers men and women, for", "Patient and steadfast men and women,", "For humble men and women, for men", "And women who spend in Allāh’s Way", "To the needy, for men and women who", "Fast, for men and women who have", "Control over their passion, and for men", "And women who are preoccupied with", "Allāh’s Remembrance, for all of them", "Allāh has prepared Absolvement as well", "As a Grand Reward."],
        },
        {
          type: "verse",
          number: 36,
          lines: ["When a matter has been resolved for a", "Believing man or woman by Allāh and", "His Messenger, they are not supposed", "To prefer their own choice about that", "Decision and whoever disobeys Allāh", "And His Messenger he is surely involved", "In an evident astray."],
        },
      ],
    },
    {
      bookPage: 770,
      blocks: [
        {
          type: "verse",
          number: 37,
          lines: ["[O, Messenger!] Remember when you", "Kept telling Zaid who had been", "Bestowed the Grace of Allāh’s Guidance", "As well as the favour of you [by freeing", "Him from slavery]: “Maintain your", "Relation with your wife and fear from", "The disobedience of Allāh.” And indeed", "You concealed in your heart that which", "Allāh had decided to disclose.{5}", "You did fear the people whereas it is", "Correct to fear Allāh. When Zaid{6} gave", "Her a divorce We joined her in", "Marriage to you. This was for the very", "Reason that there should be no problem", "To the believers to marry with", "The divorced wife of their stepsons. And", "Surely Allāh’s Command will be", "Fulfilled;"],
        },
        {
          type: "verse",
          number: 38,
          lines: ["There is no blame on the Messenger in", "That which Allāh has Commanded him", "To do. Such has been Allāh’s rule to be", "Obeyed among those who have passed", "Away; and Allāh’s Command is an", "Ordained matter;"],
        },
        {
          type: "verse",
          number: 39,
          lines: ["This is a rule for those who deliver", "The Messages of Allāh and who fear", "Him and none but Allāh; and Allāh’s", "Taking account is only what matters;"],
        },
      ],
    },
    {
      bookPage: 771,
      blocks: [
        {
          type: "verse",
          number: 40,
          lines: ["Mohammad is not the father of any of", "Your men; he is the Messenger of Allāh", "And the last of the group of the", "Messengers. And Allāh is the Knower of", "All things."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 41,
          lines: ["O, you who believe in the Unity of", "Allāh! Say Allāh’s Remembrance", "Very often [with your hearts, and your", "Tongues];"],
        },
        { type: "verse", number: 42, lines: ["And glorify Him in the early", "Morning and evening;"] },
        {
          type: "verse",
          number: 43,
          lines: ["Allāh is the One Who sends you Grace", "And geetings as do His Angels, that He", "May bring you out from the darkness of", "[Ignorance and polytheism] into the Light", "Of guidance since He is", "Grace-Bestowing to the believers;"],
        },
        {
          type: "verse",
          number: 44,
          lines: ["The believers’ salutation on the Day", "That they Meet with Allāh will be", "“Salām”; and He has prepared for them", "A valuable reward."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 45,
          lines: ["O, Messenger! Verily We have sent you", "[To the human society] as a Witness, a", "Bearer of glad-tidings and a Warner,"],
        },
        {
          type: "verse",
          number: 46,
          lines: ["And also as a Caller to Allāh’s Path by", "His Command, and as a Light-spreading", "Lamp;"],
        },
      ],
    },
    {
      bookPage: 772,
      blocks: [
        {
          type: "verse",
          number: 47,
          lines: ["So give glad-tidings to the believers that", "They will have a Great Grace from", "Allāh;"],
        },
        {
          type: "verse",
          number: 48,
          lines: ["Do not conform to the caprices of", "The disbelievers and the hypocrites; and", "Disregard their annoying words, and put", "All your trust in Allāh; and His Support", "And Guardianship will suffice you", "Against your enemies."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 49,
          lines: ["O, you who believe! When you marry a", "Believing woman and then divorce her", "Before you touch her, no period of", "Iddah{7} is she due to consider; so give", "Her a good gift and release her in an", "Honourable manner."],
        },
        {
          type: "verse",
          number: 50,
          continues: true,
          lines: ["O, Messenger! We have made lawful to", "You, your wives to whom you have paid", "Marriage-portion and those slave women", "Whom you have possessed as the war", "Captives whom Allāh has given you; and", "Also are lawful to marry with", "The daughters of your paternal uncles,", "And aunts and daughters of your", "Maternal uncles and aunts who out of", "Belief migrated with you; and any", "Believing woman who offers to be", "The Messenger’s without asking", "Marriage portion provided that the", "Messenger wants to marry her: This"],
        },
      ],
    },
    {
      bookPage: 773,
      blocks: [
        {
          type: "verse",
          number: 50,
          continued: true,
          lines: ["Particular case [a marriage without", "Marriage-portion] is only for you, the", "Messenger but not for the believing men", "In general; We know what We have", "Decreed about their wives and the slave", "Women they possess; this is to prevent", "Any difficulty for you; and Allāh is the", "Merciful Forgiving;"],
        },
        {
          type: "verse",
          number: 51,
          lines: ["[O, Messenger! Due to the responsibility", "Of your Mission and your limited time", "You cannot observe the rotation of your", "Wives regularly, so] you may defer or", "Postpone the turn of each of them", "To suit your situation and program so if", "One of them is deprived from her turn", "You can compensate in your earliest", "Convenient. This Decree from Allāh", "Makes them feel happy and consent with", "What you give them [concerning your", "Time, your supervision and expenditure;]", "And Allāh knows the intentions of your", "Hearts, and Allāh is the Knowing-", "Respite-Bestower."],
        },
        {
          type: "verse",
          number: 52,
          lines: ["It is not lawful for you to marry other", "Women from now on; nor to replace", "One by another, though their beauty be", "Pleasing to you, except that you possess", "As slave [and regarded as war booty] and", "Allāh is the Overseer over all things."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 53,
          continues: true,
          lines: ["O, you who believe! Do not enter the", "Messenger’s houses unless you are", "Permitted or invited for a meal; and do"],
        },
      ],
    },
    {
      bookPage: 774,
      blocks: [
        {
          type: "verse",
          number: 53,
          continued: true,
          lines: ["Not go there so early as to wait for", "The meal to be prepared; and after you", "Finished with eating, leave the place", "And do not hang around to seek a", "Discussion; this kind of behaviour", "Disturbs the Messenger, at the same", "Time he feels embarrassed to mention", "It, but there is no embarrassment for", "Allāh to tell you the truth. And when", "You ask the Messenger’s wives what", "You need, talk to them from behind a", "Screen; that is good for the purity of", "Your hearts as well as theirs. You have", "No right to marry his wives after him", "Under no circumstances; this Forbidding", "Decree is very important in Allāh’s", "Sight;{8}"],
        },
        { type: "verse", number: 54, lines: ["Whether you do things openly or", "Secretly it is known to Allāh;"] },
        {
          type: "verse",
          number: 55,
          lines: ["There is no blame on the wives of", "The Messenger, if without veiling and", "Screening they appear before their", "Father, their brothers, their brothers’", "Sons and their sisters’ sons or their", "Slave women. [O, you wives of", "The Messenger!] be pious, verily, Allāh", "Is Witness over all things."],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 775,
      blocks: [
        {
          type: "verse",
          number: 56,
          lines: ["Verily, Allāh bestows Grace and", "Greetings on the Messenger, and so do", "His Angels. O, you who believe!", "Pray that Allāh’s Grace be on", "The Messenger and salute him", "Wholeheartedly and with full respect;"],
        },
        {
          type: "verse",
          number: 57,
          lines: ["Those who raise Allāh’s Wrath and", "Annoy Allāh’s Messenger for them will", "Be the Curse and Wrath of Allāh both", "In this world and in the Hereafter."],
        },
        {
          type: "verse",
          number: 58,
          lines: ["And those who annoy believing men", "And women for the wrong that they", "Have not done [by spreading rumours", "About them] they will bear on", "Themselves the burden of a slander and", "An obvious sin;"],
        },
        {
          type: "verse",
          number: 59,
          lines: ["O, Messenger! Advise your wives, your", "Daughters and the believing women", "To let down their jilābīb,{9} this will cause", "Them to be distinguished from those", "Women who do not cover their heads", "And thus will bar the vulgar men from", "Making trouble for them. And Allāh is", "The Merciful Forgiving [He will out of", "His Mercy bestow Forgiveness on those", "Who did not respect the matter before", "This];"],
        },
        {
          type: "verse",
          number: 60,
          continues: true,
          lines: ["If the hypocrites and those in whose", "Hearts is a disease and those agitators"],
        },
      ],
    },
    {
      bookPage: 776,
      blocks: [
        {
          type: "verse",
          number: 60,
          continued: true,
          lines: ["In Madīnah City who make mischief by", "Spreading rumours do not desist, We", "Will give you authority against", "Them, then they shall not last as your", "Neighbours in the city but for a short", "Time;"],
        },
        {
          type: "verse",
          number: 61,
          lines: ["They are the accursed ones and should", "Be seized and killed wherever they are", "Found;"],
        },
        {
          type: "verse",
          number: 62,
          lines: ["This Punishment is of Allāh’s Line of", "Conduct{10} among the wrongdoers of", "The past; and Allāh’s Line of Conduct", "Shall not undergo any changes in", "The least."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 63,
          lines: ["O, Messenger! The hypocrites ask you", "[Mockingly] about the exact Hour of", "Resurrection. Say: “The knowledge of it", "Is with Allāh alone.” And how do", "You know, maybe it is very near;"],
        },
        {
          type: "verse",
          number: 64,
          lines: ["Surely Allāh has cursed the disbelievers", "And has prepared for them a Blazing", "Fire;"],
        },
        {
          type: "verse",
          number: 65,
          lines: ["In which they will abide forever", "And they will not find any guardian or", "Protector;"],
        },
        {
          type: "verse",
          number: 66,
          continues: true,
          lines: ["And on the Day when their faces will be", "Turned over in the Fire, they will say:"],
        },
      ],
    },
    {
      bookPage: 777,
      blocks: [
        {
          type: "verse",
          number: 66,
          continued: true,
          lines: ["“Woe to us! If only we had obeyed", "Allāh and had obeyed the Messenger.”"],
        },
        {
          type: "verse",
          number: 67,
          lines: ["And they will also say: “O, our Creator!", "We only obeyed our chiefs and our", "Leaders, so they did lead us astray from", "The Right Path;"],
        },
        {
          type: "verse",
          number: 68,
          lines: ["“O, our Creator! Chastise them twice as", "Much, and afflict them with a mighty", "Curse.”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 69,
          lines: ["O, you who believe! Do not be like", "Those who rebelled against Mūssā [by", "Their tongues] but Allāh cleaned him of", "The accusations and he was worthy of", "The Divine Providence.{11}"],
        },
        {
          type: "verse",
          number: 70,
          lines: ["O, you who believe! Fear from", "The disobedience of Allāh’s Command", "And speak straight and true words,"],
        },
        {
          type: "verse",
          number: 71,
          lines: ["That Allāh may make your conduct", "Correct and sound; and may bestow", "Forgiveness upon you regarding your", "Sins. The one who obeys Allāh and His", "Messenger has indeed attained a Great", "Achievement."],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 778,
      blocks: [
        {
          type: "verse",
          number: 72,
          lines: ["We did indeed offer the Trust to", "The heavens and the earth and", "The mountains, but they fearing that", "May not be able to meet the due", "Responsibility, did not undertake it, but", "Man undertook the task though", "[The majority of its kind] turned out to", "Be wrongdoer and ignorant;{12}"],
        },
        {
          type: "verse",
          number: 73,
          lines: ["[So Allāh will consider a distinction:]", "He will punish the hypocrites, men and", "Women and the disbelieving, men and", "Women; and Allāh will accept", "The repentance from the believing men", "And women, since Allāh is the Merciful", "Forgiving."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "In connection with polygamy there is a rule: “If you can regard Justice” [4:129]. And here is a confirmation that a man cannot emotionally consider justice among two women as his wives." },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "In the Time of Ignorance, if a man disliked his wife he would quit her and left her life in suspense by saying: “You are to me as the back of my mother.” This Word of Revelation abolished that inhuman custom." },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "In the early Madīnah period there was a bond of brotherhood between its inhabitants and the Muslims who migrated; and this was the reason for mutual inheritance between them. Once the stability of Muslim Ummah was established the law of inheritance according to blood relationship was revealed and abrogated the earlier one (Y.A)" },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "See 33.9: “We sent against them the stormy wind and the invincible host [of the Angels]”. Also they broke mentally when their hero Amr-ibne-Abdovad was easily slain by the sword of Imām Ali (AS), so they lost hope and gave up resisting the army of Islām." },
      ],
    },
    {
      id: 5,
      blocks: [
        { kind: "p", text: "What the Holy Messenger concealed in his heart was the fear from people’s backbiting and relating his marriage with the divorced wife of his stepson, a personal desire rather than obeying Allāh’s Command." },
      ],
    },
    {
      id: 6,
      blocks: [
        { kind: "p", text: "Zaid son of Hāritha was a freed man and he became such a devoted Muslim that was cherished by the Messenger of Islām; and received the honour of being his stepson; Zaid married Zainab the Holy Messenger’s cousin but the marriage did not turn out to be a happy one, so Zaid gave her a divorce. After the due duration, the Messenger married her by Allāh’s Command because among the pagans it was a taboo about the adopted son; and Allāh had Willed to abrogate that superstitious rule so it was fulfilled by this marriage. (Commentators)" },
      ],
    },
    {
      id: 7,
      blocks: [
        { kind: "p", text: "Period during which a widow or a divorcee may not remarry." },
      ],
    },
    {
      id: 8,
      blocks: [
        { kind: "p", text: "This Forbidding Decree barred the hypocrites and the enemies of Islām to conspire about fabricating stories and narrations regarding the Holy Qur’ān by some of the wives of the Holy Messenger who had witnessed the Descending of the Revelations." },
      ],
    },
    {
      id: 9,
      blocks: [
        { kind: "p", text: "Jilābīb plural of Jilbāb meaning: A scarf covering the head, the neck and the bosom; also a loose garment which covers the whole body." },
      ],
    },
    {
      id: 10,
      blocks: [
        { kind: "p", text: "Sunnat Allāh signifies: Allāh’s Line of Conduct or Allāh’s Way" },
      ],
    },
    {
      id: 11,
      blocks: [
        { kind: "p", text: "Mūssā was extremely shy and did not expose his body fully even when he took a bath. One of his enemies spread the rumour that he was afflicted by leprosy. One day he kept his clothes on a stone; and took a bath in a stream far away from the sight of the people; and when returned to take his clothes, he realized that by Allāh’s Command the stone had been moved away, so he started running after the stone and people saw him naked and acknowledged that the sickness of leprosy was but a false rumour. (Commentators)" },
      ],
    },
    {
      id: 12,
      blocks: [
        { kind: "p", text: "The Trust which Allāh, the Almighty observed through His Embracing Knowledge that even the mountains will be crashed by accepting its responsibility, is the Holy Qur’ān: [59:21]: If man submits his will to Allāh’s Will and obeys His Commands reflected as admonitions and Decrees in the Divine Book; and passes the trial by the best deeds successfully [67:2], then he will find it a Grace and Healing [17:82], in this world and in the Hereafter: Since he will return to his Creator&Nurturer well pleased himself and well pleasing to Him: [89:28] But in the case of the majority of men who are self-oppressing and ignorant and who have betrayed their Divine Nature which is enthusiastic about the Divine Unity and the Divine Words [30:30] will be setenced to ever-abiding in the Hell, while notorious with such titles as the disbeliever, the polytheist, the hypocrite and the transgressor as mentioned in [33:73] and many other āyāt (verses). So the ignorant man is the unjust to himself and the betrayer to Allāh’s Trust and also to Allāh’s Covenant: [7:172]" },
      ],
    },
  ],
};

export default surah;
