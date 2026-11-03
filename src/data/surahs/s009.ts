import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 9 · At-Taubah — book pages 322–354 (verses 1–129, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 9,
  pages: [
    {
      bookPage: 322,
      heading: {
        title: "At-Taubah{1}",
        lines: ["(Repentance) or Baraāt (The Dissolve of Obligations with the Treaty-Breakers)", "Revealed at Madīnah", "129 Words of Revelation (āyāt)"],
      },
      blocks: [
        {
          type: "verse",
          number: 1,
          lines: ["[By this Decree] Disdain and freedom", "From obligation is proclaimed from", "Allāh and His Messenger towards", "The idolaters with whom you, [Muslims]", "Have made a covenant,[and they have", "Frequently violated the covenants]"],
        },
        {
          type: "verse",
          number: 2,
          lines: ["So you, [pagans] go about on the earth", "For four months{2} and know that you are", "Not able to weaken and frustrate Allāh’s", "Power, and that Allāh is the One Who", "Causes disgrace to the disbelievers."],
        },
        {
          type: "verse",
          number: 3,
          continues: true,
          lines: ["And this is a proclamation from", "Allāh and His Messenger to all people"],
        },
      ],
    },
    {
      bookPage: 323,
      blocks: [
        {
          type: "verse",
          number: 3,
          continued: true,
          lines: ["On the Day of the Greater Pilgrimage:{3}", "Allāh and His Messenger dissolve", "Treaty obligations with the idolaters; so", "If you, [idolaters] repent, it will be", "Better for you, but if you turn away", "From Faith, then know that you cannot", "Weaken and frustrate Allāh’s Power, and", "[O, Messenger] give tidings of a painful", "Chastisement to those who disbelieved;"],
        },
        {
          type: "verse",
          number: 4,
          lines: ["Except are those idolaters, with whom you", "Have a treaty; and who have not failed", "You in any way, nor have supported any", "One against you, so fulfill their treaty to", "The end of their term; verily, Allāh is", "Affectionate to the pious."],
        },
        {
          type: "verse",
          number: 5,
          lines: ["So when the Sacred Months are", "Passed, then slay the idolaters", "Wherever you find them, and seize", "Them and besiege them and wait for", "Them to capture them in every corner,{4}", "But if they repent and establish prayer", "And pay alms to the poor, then leave", "Them free in their affairs; verily, Allāh", "Is the Merciful Forgiving."],
        },
      ],
    },
    {
      bookPage: 324,
      blocks: [
        {
          type: "verse",
          number: 6,
          lines: ["And if any one of the idolaters", "Seeks refuge in you, [O, Messenger]", "Grant him, so that he may hear", "The Word of Allāh{5} and then escort him", "To where he can be secured, that is", "Because they are a people who lack", "Knowledge [and their disbelief is due to", "Their ignorance]"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["How can the pagans have a covenant", "With Allāh and Allāh’s Messenger?", "Those with whom you made a covenant", "Near the Sacred Mosque [at Makkah] so", "Long as they are faithful to their", "Covenant, you too be faithful to your", "Covenant; verily, Allāh does like", "The pious;"],
        },
        {
          type: "verse",
          number: 8,
          lines: ["How [can there be a covenant", "With them] whereas when you are", "Overpowered by them, they do not", "Regard the ties, either of kinship or of", "Covenant with you? They only please", "You with nice words with their mouths,", "But their hearts are aversed from you;", "And most of them are rebellious and", "Corrupt;"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["They have sold Allāh’s Words of", "Revelation for a mean price and they", "Hindered men from Allāh’s Way; evil", "Indeed is what they have done;"],
        },
        { type: "verse", number: 10, continues: true, lines: ["They do not pay any respect in the case"] },
      ],
    },
    {
      bookPage: 325,
      blocks: [
        {
          type: "verse",
          number: 10,
          continued: true,
          lines: ["They do not pay any respect in the case", "Of a believer, neither the ties nor", "The covenants; and these are indeed", "The transgressors;"],
        },
        {
          type: "verse",
          number: 11,
          lines: ["But if they repent, and perform prayers", "Regularly and pay alms, then they are", "Your brothers in religion. Thus, We", "Explain the Words of Revelation in", "Detail for those who know;"],
        },
        {
          type: "verse",
          number: 12,
          lines: ["But if they break their oaths after", "Their covenant and treat your religion", "With taunt, then fight the chiefs of", "The disbelievers who have no respect for", "Their oaths, so that they may desist", "[Breaking their oaths and agreements];"],
        },
        {
          type: "verse",
          number: 13,
          lines: ["Why do you not fight a people", "Who broke their oaths and intended", "To expel the Messenger from the land", "And the ones who attacked you first?", "Do you fear them? Whereas fearing", "From Allāh is what matters, if you are", "Believers indeed;"],
        },
        {
          type: "verse",
          number: 14,
          lines: ["Fight them,{6} and Allāh will chastise", "Them by your hands, and will cause", "Disgrace to them, and will help you", "To overcome them, and will relieve", "The hearts of the believers [by defeating", "The disbelievers];"],
        },
      ],
    },
    {
      bookPage: 326,
      blocks: [
        {
          type: "verse",
          number: 15,
          lines: ["And will remove the rage of", "The [believers’] hearts. And Allāh", "Accepts repentance from whomsoever", "He Wills; since verily, Allāh is", "The Knowing Judge and Decreer;"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["Do you think that you will be left away,", "While Allāh has not made known those", "Of you who strove hard and did not take", "Any one as an intimate friend besides", "Allāh and Allāh’s Messenger and", "The believers? And [know that] Allāh is", "Informed of what you do."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 17,
          lines: ["The idolaters have no right", "To maintain the mosques of Allāh, while", "Bearing witness against themselves", "Regarding their disbelief; as for such,", "Their deeds are vain and in the Fire they", "Shall abide;"],
        },
        {
          type: "verse",
          number: 18,
          lines: ["The mosques of Allāh should be", "Maintained only by those who believe", "In Allāh and the Last Day; those who", "Perform their prayers regularly and pay", "Alms and fear none but Allāh", "The Almighty; they are the ones who", "Expect to be on the true guidance;"],
        },
        {
          type: "verse",
          number: 19,
          continues: true,
          lines: ["Do you consider providing drinking", "Water for the pilgrims and", "The maintenance of the Sacred Mosque", "As equal to the efforts of those who", "Believe in Allāh and the Last Day, and", "Strive hard and fight in the Path of"],
        },
      ],
    },
    {
      bookPage: 327,
      blocks: [
        {
          type: "verse",
          number: 19,
          continued: true,
          lines: ["Allāh? They are not equal in the Sight", "Of Allāh and Allāh does not guide", "The self-oppressing people;{7}"],
        },
        {
          type: "verse",
          number: 20,
          lines: ["Those who believed and migrated", "And strove hard and fought in Allāh’s", "Way with their properties and their", "Lives, have the highest degree in", "Allāh’s Sight; they are indeed the ones", "Who will receive salvation;"],
        },
        {
          type: "verse",
          number: 21,
          lines: ["Their Creator&Nurturer grants [to such", "Believers] glad-tidings of a Grace and", "Pleasure from His Presence, and of", "The Gardens{8} with the Lasting Blessings", "Which will be theirs;"],
        },
        {
          type: "verse",
          number: 22,
          lines: ["[Such believers] will abide therein", "Forever. Verily, in Allāh’s Presence is", "The Great Reward."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 23,
          lines: ["O, you who believe! Do not take", "For supporters, your father and your", "Brothers if they prefer disbelief to", "Belief; if any of you does so, then he is", "Also regarded as one of the disbelievers;"],
        },
        {
          type: "verse",
          number: 24,
          continues: true,
          lines: ["Say [O, Messenger!]: “If your", "Father and your sons and your", "Brothers and your spouses and your", "Kinsmen and the wealth which you"],
        },
      ],
    },
    {
      bookPage: 328,
      blocks: [
        {
          type: "verse",
          number: 24,
          continued: true,
          lines: ["Have gathered and the trade that its", "Decline fears you and the buildings", "In which you feel delighted and", "Comfortable, are to you dearer than", "Allāh and His Messenger and fighting", "In Allāh’s Way, then wait until Allāh", "Brings about His Command; and verily,", "Allāh does not guide the disobedient", "People.”"],
        },
        {
          type: "verse",
          number: 25,
          lines: ["Truly, Allāh granted you Aid in", "Many battlefields; and on the day of", "Hunain [battle] when you rejoiced your", "Great number; but it did not avail you", "At all and the earth, despite its", "Vastness, seemed straitened for you,", "Then you turned back in flight;"],
        },
        {
          type: "verse",
          number: 26,
          lines: ["Then, Allāh sent down His Divine", "Tranquility on the Messenger and on", "The believers and sent down forces{9}", "Which you could not see them, [being", "Invisible]; and Allāh punished", "The disbelievers severely; and such is", "The recompense for the disbelievers;"],
        },
        {
          type: "verse",
          number: 27,
          lines: ["Yet, after that Allāh will again accept", "Repentance from whom He Wills; and", "Allāh is the Merciful Forgiving."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 28,
          continues: true,
          lines: ["O, you who believe! Verily,", "The idolaters are impure and filthy, so", "They should not approach the Sacred"],
        },
      ],
    },
    {
      bookPage: 329,
      blocks: [
        {
          type: "verse",
          number: 28,
          continued: true,
          lines: ["Mosque after this year; and if you fear", "Poverty [due to cutting off trade with", "Them], know that Allāh will enrich you", "Out of His Bounty, if He Wills; verily,", "Allāh is the Knowing Decreer."],
        },
        {
          type: "verse",
          number: 29,
          lines: ["[O, you Muslims!] Fight those", "From among the people of the Book,", "Who do not believe in Allāh and nor in", "The Last Day and those who do not", "Prohibit what Allāh and His Messenger", "Have prohibited and those who do not", "Follow the Religion of Truth,{10}", "Until they pay tributary tax{11} with their", "Own hands, while feeling subjected", "And disgraced."],
        },
        {
          type: "verse",
          number: 30,
          lines: ["And the Jews say: “Ozair is the son", "Of Allāh.” The Christians say: “Massih", "Is the son of Allāh.” These words", "That they utter by their mouths are", "Very similar to what the disbelievers", "Before them used to say; be they", "Killed by Allāh, how they are", "Perverse from the Truth?"],
        },
        {
          type: "verse",
          number: 31,
          lines: ["They{12} took their rabbis and their", "Monks as their gods besides Allāh and", "Also Īssā, son of Maryam, while they", "Were Commanded [in the Taurāt and", "The Injīl] to worship none but Allāh", "The One. Allāh is the Absolute pure", "And Exalted from having any partner;"],
        },
      ],
    },
    {
      bookPage: 330,
      blocks: [
        {
          type: "verse",
          number: 32,
          lines: ["They desire to blow Allāh’s Great", "Light with their mouths,{13} but Allāh’s", "Will is to let His Light be manifest", "Perfectly, no matter how much", "The disbelievers may dislike it;"],
        },
        {
          type: "verse",
          number: 33,
          lines: ["Allāh is the One Who has sent His", "Messenger with Guidance and", "The Religion of Truth{14} to overshine all", "Religions by it,{15} though the polytheists", "May dislike it."],
        },
        {
          type: "verse",
          number: 34,
          lines: ["O, believers! Many of the rabbis", "And the priests consume the properties", "Of the people in vanity and hinder", "Them from Allāh’s Way. [O, Messenger],", "Give good tidings of a painful", "Chastisement to those who pile up gold", "And silver and do not spend them in", "Allāh’s Way;"],
        },
        {
          type: "verse",
          number: 35,
          lines: ["On the Day when that gold and", "Silver will be heated in the Fire and", "With them, will be branded their", "Foreheads, their sides, and their backs", "[And will be said to them:] “This is", "The treasure which you piled up for", "Yourselves; now taste of what you", "Were piling up!”"],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 331,
      blocks: [
        {
          type: "verse",
          number: 36,
          lines: ["Verily, the number of months in", "Allāh’s Book of Knowledge is", "Twelve [in a year], it was so", "Ordained by Allāh on the Day when He", "Created the heavens and the earth;", "Four of these months are Sacred;", "That is the established rite; so do not", "Wrong yourselves therein.{16} And fight", "Against the disbelievers collectively, as", "They fight against you collectively; and", "Know that Allāh is the Supporter of", "The pious."],
        },
        {
          type: "verse",
          number: 37,
          lines: ["Verily, the transposition of a Sacred", "Month adds indeed to disbelief:", "Thereby the disbelievers are led to", "More astray, for they consider it lawful", "One year and forbidden another year", "In order to adjust the number of", "Months forbidden by Allāh and make", "The forbidden ones lawful.", "Their evil deeds have been made", "Fair-seeming to them, [by Satan]", "And Allāh does not guide", "The disbelievers."],
        },
        {
          type: "verse",
          number: 38,
          continues: true,
          lines: ["O, you who believe! What is wrong", "With you that when you are asked", "To march forth for fighting in Allāh’s", "Way, you cling heavily to the earth?", "Have you chosen the life of this world", "Rather than the Hereafter? Whereas the", "Enjoyment of the life of this world is"],
        },
      ],
    },
    {
      bookPage: 332,
      blocks: [
        { type: "verse", number: 38, continued: true, lines: ["Little as compared with the Hereafter;{17}"] },
        {
          type: "verse",
          number: 39,
          lines: ["If you do not march forth, Allāh will", "Punish you with a painful Torment and", "Will replace you with another people", "And you cannot harm Allāh at all; and", "Allāh has Power over all things;"],
        },
        {
          type: "verse",
          number: 40,
          lines: ["If you do not help the Messenger", "[It does not matter], for Allāh did", "Indeed help him when the disbelievers", "Expelled him; and he was one of", "The two when they were in the cave, and", "He{18} said to his companion:{19} “Do not be", "Afraid; surely, Allāh is with us.” Then", "Allāh sent down His Divine Tranquility", "Upon him and strengthened him with", "Forces{20} which you could not see them", "And made the word of the disbelievers", "The lowermost, while Allāh’s Word", "Became the uppermost; and Allāh is", "The Source Wisdom Supremepower.{21}"],
        },
      ],
    },
    {
      bookPage: 333,
      blocks: [
        {
          type: "verse",
          number: 41,
          lines: ["[O, Muslims!] Go forth with light", "And heavy war equipment and fight", "With your wealth and lives in Allāh’s", "Way; that is best for you, if you but", "Knew [the benefits of obeying Allāh’s", "Commands]."],
        },
        {
          type: "verse",
          number: 42,
          lines: ["Had it been an easy gain and a short", "And easy journey, they would have", "Certainly followed you [O, Messenger],", "But the distance was long and seemed", "Uneasy for them; and they would swear", "By Allāh: “If we were able, we would", "Have certainly taken part in the war{22}", "Along with you.” [By such excuses] they", "Cause their own soul to be perished,", "Since Allāh knows that they are indeed", "The liars."],
        },
        {
          type: "verse",
          number: 43,
          lines: ["[O, Messenger!] Allāh forgives", "You! Why did you give them leave, [not", "To take part in fight,] before it was", "Known to you which of them spoke", "The truth and [before] you had known", "Who were the liars?"],
        },
        {
          type: "verse",
          number: 44,
          lines: ["Those who believe in Allāh and", "The Last Day would not ask your", "Permission to be exempted from", "Fighting with their properties and their", "Lives in Allāh’s Way, and Allāh Knows", "Well those who are pious;"],
        },
        { type: "verse", number: 45, continues: true, lines: ["It is only those who do not believe"] },
      ],
    },
    {
      bookPage: 334,
      blocks: [
        {
          type: "verse",
          number: 45,
          continued: true,
          lines: ["In Allāh and the Last Day and whose", "Hearts are in doubts that ask your", "Leave [to be exempted from fighting],", "So in their doubts they waver;"],
        },
        {
          type: "verse",
          number: 46,
          lines: ["And had they intended to go", "Forth [for fight in the Path of Allāh],", "They would certainly have prepared", "Some equipment, but Allāh did detest", "Their being sent forth [with", "The believers] and held them back and it", "Was said to them: “Do sit among those", "Tarries and disabled ones!”"],
        },
        {
          type: "verse",
          number: 47,
          lines: ["Had they taken part in the Holy", "War, they would not have added to", "Your strength; [on the contrary] they", "Would have caused mischief and", "Sowing sedition among you. And there", "Are some among you who listen to", "Them [and act as spies for them]; and", "Allāh is the Knower of the wrongdoers;"],
        },
        {
          type: "verse",
          number: 48,
          lines: ["Indeed, they had sought to stir up", "Sedition before; and raised difficulties", "For you [O, Messenger] till the Truth,", "Appeared and Allāh’s Command", "Prevailed, though they disliked it;"],
        },
        {
          type: "verse",
          number: 49,
          continues: true,
          lines: ["And among them is someone", "Who says: “Give me leave to be", "Exempted from taking part in the fight", "And do not put me into trial.”{23} Know,"],
        },
      ],
    },
    {
      bookPage: 335,
      blocks: [
        {
          type: "verse",
          number: 49,
          continued: true,
          lines: ["That they have already fallen into", "Trial due to their disobedience and", "The Hell will surround the disbelievers;"],
        },
        {
          type: "verse",
          number: 50,
          lines: ["If any good fortune happens to", "You [O, Messenger], it grieves them", "But if a misfortune befalls you, they", "Say: “We took precaution beforehand", "And made proper decision not to be", "With them.” And they turn away joyfully;"],
        },
        {
          type: "verse",
          number: 51,
          lines: ["Say [O, Messenger!]: “Nothing shall", "Happen to us save what Allāh has", "Ordained for us; Allāh is our Guardian", "And in Allāh should the believers put", "Their trust.”"],
        },
        {
          type: "verse",
          number: 52,
          lines: ["Say [O, Messenger!]: “Do you wait for", "Us any fate except one of the two", "Blessings?{24} Whereas we wait for you", "Either that Allāh will send His Torment", "On you from Himself or punish you by", "Our hands; so you wait, we too are", "Waiting.”"],
        },
        {
          type: "verse",
          number: 53,
          lines: ["Say [O, Messenger!]: “Whatever", "You spend as offerings willingly or", "Unwillingly, it will not be accepted from", "You; since you are indeed a corrupt and", "Disobedient people.”"],
        },
        { type: "verse", number: 54, continues: true, lines: ["The very reason that their offerings"] },
      ],
    },
    {
      bookPage: 336,
      blocks: [
        {
          type: "verse",
          number: 54,
          continued: true,
          lines: ["Were not accepted, was that they", "Denied Allāh and His Messenger; and", "They do not come to prayer but with", "Lousiness; and they do not offer", "Contributions but unwillingly;"],
        },
        {
          type: "verse",
          number: 55,
          lines: ["So do not let [O, Messenger]", "Their wealth or their children amaze", "You: Allāh intends thereby to try and", "Punish them in the life of this world and", "That their souls shall pass away while", "They are disbelievers;{25}"],
        },
        {
          type: "verse",
          number: 56,
          lines: ["And they swear by Allāh that they", "Are surely of you, while they are not of", "You, but they are afraid of you;", "[Regarding your Islāmic Faith]"],
        },
        {
          type: "verse",
          number: 57,
          lines: ["If they could find a refuge, or", "Caves or a place to flee into, they", "Would turn straightway to it with a", "Quick rush;"],
        },
        {
          type: "verse",
          number: 58,
          lines: ["And of them are some who", "Accuse you [O, Messenger] in", "The matter of [distributing] the alms:", "If they are given some part, they are", "Pleased, but if they are not given", "Thereof, they become furious;"],
        },
        {
          type: "verse",
          number: 59,
          continues: true,
          lines: ["And if they were pleased with", "What Allāh and His Messenger had", "Granted them, saying: “Sufficient for us", "Is Allāh [’s Favour]; soon Allāh will", "Give us of Bounty and also His"],
        },
      ],
    },
    {
      bookPage: 337,
      blocks: [
        {
          type: "verse",
          number: 59,
          continued: true,
          lines: ["Messenger; and to Allāh we all are", "Hopeful for our needs,” [that would have", "Indeed been better for them]"],
        },
        {
          type: "verse",
          number: 60,
          lines: ["Verily, alms are only for the poor", "And the needy and the workers [who are", "Engaged in the administration of it]; and", "For those whose hearts should be", "Attracted to Islām and for the ransoming", "Of the slaves and for those in debt and", "In the Way of Allāh and for", "The wayfarers; thus it is decreed by", "Allāh; and Allāh is the Knowing", "Decreer."],
        },
        {
          type: "verse",
          number: 61,
          lines: ["And some of them annoy the", "Messenger, saying: “He is only an ear.”", "Say [O, Messenger!]: “An ear which is", "Good for you; he [listens to Allāh’s", "Revelations] and believes in Allāh and", "Trusts what the believers [tell him]; and", "He is a Grace for those of you who", "Believe in Allāh. Those who annoy", "Allāh’s Messenger, for them there will", "Be a painful Torment.”"],
        },
        {
          type: "verse",
          number: 62,
          lines: ["They swear by Allāh to you,{26}", "In order to please you, whereas it is", "More rightful that they should please", "Allāh and [after Allāh] His Messenger", "Above the people, if they are believers;"],
        },
        { type: "verse", number: 63, continues: true, lines: ["Do they not know that whosoever"] },
      ],
    },
    {
      bookPage: 338,
      blocks: [
        {
          type: "verse",
          number: 63,
          continued: true,
          lines: ["Opposes Allāh and His Messenger", "Verily, for him is the Fire of the Hell", "To abide therein forever? That is", "The grievous disgrace."],
        },
        {
          type: "verse",
          number: 64,
          lines: ["The hypocrites are afraid lest a", "Sūrah should be sent down concerning", "Them, disclosing what is in their hearts.", "Say [O, Messenger!]: “Go on mocking:", "Verily, Allāh will bring to light what you", "Fear to be discovered.”"],
        },
        {
          type: "verse",
          number: 65,
          lines: ["If you question them on the matter,", "Surely they will say: “We were only", "Talking and jesting.” Say", "[O, Messenger!]: “Were you mocking at", "Allāh and His Words of Revelation", "And His Messenger?”"],
        },
        {
          type: "verse",
          number: 66,
          lines: ["Say [O, Messenger!]: “Do not", "Make any excuse; you disbelieved", "After you had believed [and Allāh", "States:] If We forgive a party of you,", "Due to their ignorance We shall punish", "Another group of you [who make", "Mischief knowingly], because they are", "Indeed the guilty ones.”"],
        },
        {
          type: "verse",
          number: 67,
          lines: ["The hypocrites, men and women,", "Are all alike [character wise]:", "They enjoin evil and forbid good; and", "Withhold their hands from spending in", "Allāh’s Way; they have forsaken Allāh’s", "Commands, so Allāh too has forsaken", "Them; verily, the hypocrites are indeed", "Disobedient and rebellious;"],
        },
      ],
    },
    {
      bookPage: 339,
      blocks: [
        {
          type: "verse",
          number: 68,
          lines: ["Allāh has promised the hypocrites", "Men and women and the disbelievers", "To enter them in the Hell Fire; therein", "They shall abide forever. This will", "Be sufficient for them; for them will be", "The Curse of Allāh and an Enduring", "Torment;"],
        },
        {
          type: "verse",
          number: 69,
          lines: ["Those [disbelievers and hypocrites] who", "Lived before you were even stronger", "Than you in might and more affluent", "Than you in wealth and they had more", "Children. They enjoyed their portion", "[A while], so you enjoy your portion", "[A while] as those before you who", "Enjoyed their portion a while; and you", "Are indulged in idle talks as they did;", "Their efforts were fruitless in this world", "And in the Hereafter, so they were", "Indeed the losers;"],
        },
        {
          type: "verse",
          number: 70,
          lines: ["Has not the story of those disbelievers", "Before them reached these pagans?", "The people of Nūh, and ‘Ād, and", "Thamūd and the people of Ibrāhīm,", "The dwellers of Madyan and", "The Overthrown Cities. Their", "Messengers came to them with", "Evident Signs and Miracles [but they", "Denied them, so disasters befell them", "All]; surely, Allāh did not treat them", "Unjustly, but they did unjust to", "Themselves."],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 340,
      blocks: [
        {
          type: "verse",
          number: 71,
          lines: ["And the believers, men and women", "Are supporters and helpers of one", "Another; they enjoin good and forbid", "Evil, and they perform regular", "Prayers, and pay alms and obey Allāh", "And His Messenger; Allāh will bestow", "His Grace upon such; verily, Allāh is", "The Source-Wisdom Supremepower;"],
        },
        {
          type: "verse",
          number: 72,
          lines: ["Allāh has promised the believers", "Men and women, Gardens in which", "Streams flow, forever they will dwell", "Therein and in the excellent mansions,", "In the Gardens of Adn,{27} but Allāh’s", "Pleasure [which they will be granted] is", "Above all and it is the Greater", "Achievement."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 73,
          lines: ["O, Messenger! Fight against", "The disbelievers and the hypocrites", "And be harsh with them; their ultimate", "Abode is Hell, an evil destination", "Indeed!"],
        },
        {
          type: "verse",
          number: 74,
          continues: true,
          lines: ["They swear by Allāh that they said", "Nothing wrong, yet they did utter", "Blasphemy; and they disbelieved after", "They had accepted Islām; they plotted", "What they never attained to;{28} and they", "Sought revenge as their return for", "Allāh’s Bounty which had enriched", "Them as well as for the grace of"],
        },
      ],
    },
    {
      bookPage: 341,
      blocks: [
        {
          type: "verse",
          number: 74,
          continued: true,
          lines: ["Allāh’s Messenger. Yet if they", "Repent, it will be better for them, but if", "They turn away, Allāh will punish them", "In this world and in the Hereafter; and", "They will have no protecting friend and", "Helper on the earth;"],
        },
        {
          type: "verse",
          number: 75,
          lines: ["And of them are those who made", "A covenant with Allāh, saying: “If Allāh", "Gives us out of His Bounty, we will", "Certainly spend in charity and we will", "Certainly become of the righteous", "Ones.”"],
        },
        {
          type: "verse",
          number: 76,
          lines: ["But when Allāh gave them out of", "His Bounty, they became niggardly", "[And refused to pay alms and", "The poor-rate] and they turned away", "From their covenant;"],
        },
        {
          type: "verse",
          number: 77,
          lines: ["So Allāh punished them by leaving", "Hypocrisy into their hearts till", "The Day whereon they shall meet Allāh;", "Because they broke the covenant with", "Allāh and what they had promised and", "Because they used to tell lie;"],
        },
        {
          type: "verse",
          number: 78,
          lines: ["Do they not know that Allāh knows", "Their secret thoughts and their secret", "Talks, and that Allāh is the Supreme", "Knower of the secrets of the Unseen?"],
        },
        {
          type: "verse",
          number: 79,
          continues: true,
          lines: ["Those who find fault with the believers", "Who give voluntarily, alms and charity;", "And also make redicule of those"],
        },
      ],
    },
    {
      bookPage: 342,
      blocks: [
        {
          type: "verse",
          number: 79,
          continued: true,
          lines: ["Who have nothing much to offer but up", "To the limited income of their labour,", "Should know that Allāh will throw back", "Their mockery on them and they shall", "Have a Grievous Torment;"],
        },
        {
          type: "verse",
          number: 80,
          lines: ["Whether you [O, Messenger] ask", "Forgiveness for them or not [it is all", "The same]; if you ask Allāh seventy", "Times for His Forgiveness, Allāh will", "Not forgive them, because they have", "Denied Allāh and His Messenger; and", "Allāh does not guide the corrupt and", "Disobedient people;"],
        },
        {
          type: "verse",
          number: 81,
          lines: ["They felt joyous, for their", "Staying away [from Tabūk expedition]", "And opposing the Messenger’s order,", "Because they disliked to strive and", "Fight with their wealth and their lives in", "The Path of Allāh; and to the others", "Also said: “Do not go forth in the heat.”", "Say: [O, Messenger!]: “The Hell Fire is", "Worse in heat.” If only they could", "Understand;"],
        },
        {
          type: "verse",
          number: 82,
          lines: ["Therefore [by Allāh’s Command]", "They shall laugh little and weep much", "As a recompense for what they used", "To do;"],
        },
        {
          type: "verse",
          number: 83,
          continues: true,
          lines: ["If Allāh brings you back to a party", "Of the hypocrites and they ask your", "Leave to go out [to fight], say", "[O, Messenger!]: “Never you shall go out", "With me, nor you shall fight an enemy"],
        },
      ],
    },
    {
      bookPage: 343,
      blocks: [
        {
          type: "verse",
          number: 83,
          continued: true,
          lines: ["With me; you chose to sit inactive at", "The first time, so now sit idle with", "Those who stay behind.”"],
        },
        {
          type: "verse",
          number: 84,
          lines: ["And [O, Messenger!] do not perform", "Prayer over any of them that dies, nor", "Stand at his grave [in the burial", "Ceremony]; since they disbelieved in", "Allāh and His Messenger and they died", "While they were disobedient and corrupt;"],
        },
        {
          type: "verse",
          number: 85,
          lines: ["And do not let [O, Messenger] their", "Wealth or their children amaze you:", "Allāh intends to punish them with these", "Things in this world and that their souls", "Shall pass away while they are", "Disbelievers.{29}"],
        },
        {
          type: "verse",
          number: 86,
          lines: ["And when a Sūrah is revealed", "Enjoining that they should believe in", "Allāh and fight along with Allāh’s", "Messenger, the affluent ones among", "Them ask your permission saying:", "“Let us stay behind with those who", "Sit at home.”"],
        },
        {
          type: "verse",
          number: 87,
          lines: ["They preferred [to preserve their", "Wealth and their children] to be", "Included among those exempted from", "The war and those who sat at home;{30}", "Their hearts are sealed, so they", "Do not understand,"],
        },
      ],
    },
    {
      bookPage: 344,
      blocks: [
        {
          type: "verse",
          number: 88,
          lines: ["But the Messenger and", "The believers with him, strove hard and", "Fought with their wealth and their lives", "In Allāh’s Way; so for them will be all", "Good things and they are the ones", "Who will attain salvation;"],
        },
        {
          type: "verse",
          number: 89,
          lines: ["For them Allāh has prepared", "Gardens in which streams flow, to dwell", "Therein forever; that is the Great", "Achievement."],
        },
        {
          type: "verse",
          number: 90,
          lines: ["[O, Messenger!] And those among the", "Desert dwellers of Arabs came to you", "With their excuses, to ask for leave.{31}", "And also there were those who lied to", "Allāh and Allāh’s Messenger, and they", "Had no excuse; they sat at home", "[Without any excuse but selfishness].", "To those who disbelieved among them,", "Shall soon befall a painful Torment;"],
        },
        {
          type: "verse",
          number: 91,
          lines: ["There is no sin on those who", "Are weak or ill or who cannot find", "Anything to spend in Allāh’s Way,", "[To stay behind], if they are true to Allāh", "And His Messenger; since there is no", "Sin on the good-doers; verily, Allāh", "Is the Merciful Forgiving;"],
        },
        {
          type: "verse",
          number: 92,
          continues: true,
          lines: ["[Also] There is no sin on those", "Who came to you [O, Messenger] to", "Provide for them some mounts,{32} and"],
        },
      ],
    },
    {
      bookPage: 345,
      blocks: [
        {
          type: "verse",
          number: 92,
          continued: true,
          lines: ["You said: “I can find no mounts for", "You.” They turned back, their eyes filled", "With tears of grief, because they could", "Not find any resources by which", "To provide the means;"],
        },
        {
          type: "verse",
          number: 93,
          lines: ["The sin is only upon those who", "Ask your leave [O, Messenger] to stay", "Behind, while they are affluent; Allāh", "Has set a seal on their hearts, so they do", "Not perceive [and they are heedless", "About the consequences of their deeds];"],
        },
        {
          type: "verse",
          number: 94,
          lines: ["They will make excuses to you", "When you return to them from", "The battlefield; say [O, Messenger!]:", "“Make no excuse, for we do not", "Believe you; Allāh has informed us", "Of the news [concerning your intentions", "And plots]. Allāh and His Messenger", "Will observe your conduct; and at", "The end you will be brought back to", "The Knower of the Unseen and", "The Visible; and then Allāh will inform", "You about what you used to do.”"],
        },
        {
          type: "verse",
          number: 95,
          lines: ["They will swear by Allāh to you", "When you return to them, so that you", "May leave them alone; so leave them", "Alone [for good]. Surely, they are filthy", "And impure because of their evil deeds", "And the Hell will be their dwelling place", "As a recompense for the evil that they", "Did;"],
        },
      ],
    },
    {
      bookPage: 346,
      blocks: [
        {
          type: "verse",
          number: 96,
          lines: ["They will swear to you that you", "May be pleased with them but [even] if", "You be pleased with them, Allāh is not", "Pleased with the disobedient people."],
        },
        {
          type: "verse",
          number: 97,
          lines: ["The desert-dweller Arabs are", "The worst in disbelief and", "Hypocrisy, therefore most entitled", "To be ignorant about the limits", "Of Allāh’s Decrees and Laws which", "Allāh has revealed to His Messenger;", "And Allāh is the Knowing Decreer;"],
        },
        {
          type: "verse",
          number: 98,
          lines: ["Some of the desert dwellers", "Arabs look upon what they spend in", "Allāh’s Way, as a fine; and they wish", "Calamities for you; on them be", "The calamities of evil! And Allāh is", "The Knowing Hearer [so He does not", "Comply with what they wish against", "You];"],
        },
        {
          type: "verse",
          number: 99,
          lines: ["And some of the desert dweller Arabs", "Believe in Allāh and the Last Day and", "Look on what they spend in Allāh’s", "Way, as offerings which bring them", "Nearer to Allāh and cause to obtain", "The well-wishing prayers of", "The Messenger for them. Yes, indeed", "What they pay as offerings bring them", "Nearer to Allāh; Allāh will admit", "Them to His Grace; for Allāh is", "The Merciful Forgiving."],
        },
      ],
    },
    {
      bookPage: 347,
      blocks: [
        {
          type: "verse",
          number: 100,
          lines: ["And the forerunners of Mohājerīn{33} and", "Ansār{34} and also those who followed", "Them in good deeds are those who are", "Well-pleased by Allāh and they are", "Pleased with Him and He has", "Prepared for them Gardens in which", "Streams flow, to abide therein forever;", "And that is the Great Achievement."],
        },
        {
          type: "verse",
          number: 101,
          lines: ["Some of the desert - dweller", "Arabs around you are hypocrites and", "Some of the people of Madinah City", "Are those who persist in hypocrisy; you", "[O, Messenger] do not know them,", "We Know them; and We shall punish", "Them twice, [both in this world and in", "The Hereafter] and also they shall be", "Sent to [the Hell to receive] a Grave", "Torment;"],
        },
        {
          type: "verse",
          number: 102,
          lines: ["And there are others who have", "Confessed their sins: They have", "Mixed their good deeds with evil ones; it", "Maybe that Allāh will forgive them;", "Verily, Allāh is the Merciful Forgiving;"],
        },
        {
          type: "verse",
          number: 103,
          lines: ["[O, Messenger!] Take alms from", "Their wealth in order to purify and", "Sanctify them by it; and pray for them", "To Allāh; verily, your invocations are a", "Source of tranquility for them; and", "Allāh is the Knowing Hearer."],
        },
      ],
    },
    {
      bookPage: 348,
      blocks: [
        {
          type: "verse",
          number: 104,
          lines: ["Do they not know that Allāh is", "The One Who accepts repentance from", "His worshippers and receives alms", "And that Allāh is the Merciful", "Repentance-Accepter?"],
        },
        {
          type: "verse",
          number: 105,
          lines: ["And say [O, Messenger!]: “Act", "As much as you can; soon Allāh will", "Observe your deeds and so will His", "Messenger and the believers; and you", "Will be brought back to the Knower of", "The Unseen and the Visible; then Allāh", "Will inform you of what you used to do.”"],
        },
        {
          type: "verse",
          number: 106,
          lines: ["And some others are those who", "Wait for Allāh’s Decree, whether He is", "Going to punish them or will He", "Forgive them; and Allāh is", "The Knowing Decreer."],
        },
        {
          type: "verse",
          number: 107,
          continues: true,
          lines: ["And those who built a mosque{35}", "To do harm [to Islām and", "The Muslims] and to spread disbelief", "And cause disunion among", "The believers; and also to provide a", "Refuge to him who warred against", "Allāh and His Messenger before; and", "Yet they surely swear, saying: “We"],
        },
      ],
    },
    {
      bookPage: 349,
      blocks: [
        {
          type: "verse",
          number: 107,
          continued: true,
          lines: ["Only intended good.” And Allāh bears", "Witness that indeed they are liars;"],
        },
        {
          type: "verse",
          number: 108,
          lines: ["[O, Messenger!] Never stand", "There [to perform prayer.] A place of", "Worship which was founded upon", "Piety{36} from the beginning is much", "Worthier for you to stand in it [for", "Performing prayer]. In it, there are men", "Who love to purify themselves", "[From disbelief, hypocrisy and", "Sin]; and Allāh is Affectionate to", "The purifiers;"],
        },
        {
          type: "verse",
          number: 109,
          lines: ["Is it then he who laid", "The foundation of his building on duty", "To Allāh and for obtaining Allāh’s", "Pleasure better, or he who laid", "The foundation of his building on", "The brink of the bank prone", "To cramble down and it does cramble", "To pieces with him into the Hell Fire?", "And Allāh does not guide", "The self-oppressors;"],
        },
        {
          type: "verse",
          number: 110,
          lines: ["The building they have built will", "Not cease to be a source of doubt", "Within their hearts, until their hearts", "Are cut into pieces; and Allāh is", "The Knowing Decreer.{37}"],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 350,
      blocks: [
        {
          type: "verse",
          number: 111,
          lines: ["Allāh has bought from", "The believers their lives and their", "Possessions against the blessing of", "The Paradise; they fight in", "The Way of Allāh; they slay and are", "Slain: Paradise is a Promise binding on", "Allāh in the Taurāt and the Injīl and", "The Qur’ān; and who fulfills his", "Covenant better than Allāh? So rejoice", "The bargain that you, believers have", "Made with Allāh; and that is indeed", "The Great Achievement;"],
        },
        {
          type: "verse",
          number: 112,
          lines: ["[The believers are:] Those who", "Repent to Allāh, who worship Allāh,", "Who praise Allāh, who fast, who bow", "Down and prostrate themselves [in", "Prayer], who enjoin people for good", "Deeds and forbid people from evil", "Deeds and who respect the limits set", "By Allāh. And [O, Messenger] give", "Glad-tidings to [such] believers."],
        },
        {
          type: "verse",
          number: 113,
          lines: ["It is not proper for the Messenger", "And the believers to ask Allāh’s", "Forgiveness for the polytheists, even", "Though they be their near relatives,", "After it became clear to them that they", "Are the inhabitants of the Fire;"],
        },
        {
          type: "verse",
          number: 114,
          continues: true,
          lines: ["And Ibrāhīm did not pray for", "The Forgiveness of his father but for a", "Promise that he had given him before;{38}", "And when it became clear to him that"],
        },
      ],
    },
    {
      bookPage: 351,
      blocks: [
        {
          type: "verse",
          number: 114,
          continued: true,
          lines: ["His father was an enemy to Allāh, he", "Disowned him. Ibrāhīm was indeed a", "Forbearing soul and a constant-invoker", "To Allāh."],
        },
        {
          type: "verse",
          number: 115,
          lines: ["And Allāh would never leave a", "People in error after that He has", "Guided them, in order that He again", "Makes clear to them as to what they", "Should abstain from; verily, Allāh is", "The Absolute Knower of all things."],
        },
        {
          type: "verse",
          number: 116,
          lines: ["Verily, to Allāh belongs", "The Dominion of the heavens and", "The earth. Allāh is the One Who gives", "Life and causes death; and besides", "Allāh you have neither any guardian", "Nor any supporter."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 117,
          lines: ["Surely, Allāh paid attention out of", "Grace to the Messenger, to", "The Emigrants and to the Assisters", "Who followed the Messenger in", "The hour of hardship, after the hearts", "Of a group of them had almost turned", "Aside; then Allāh paid Attention to", "Them out of Mercy: Verily, Allāh was to", "Them{39} the Merciful Relenting."],
        },
        {
          type: "verse",
          number: 118,
          continues: true,
          lines: ["And also Allāh turned in Mercy to", "The three{40} of them who were left"],
        },
      ],
    },
    {
      bookPage: 352,
      blocks: [
        {
          type: "verse",
          number: 118,
          continued: true,
          lines: ["Behind until when the earth, despite all", "Its vastness became strait for them, and", "Their own souls were straitened for", "Them and they thought there was no", "Shelter against Allāh’s Wrath; then", "Allāh out of Mercy paid attention", "Towards them that they might repent.", "Indeed, Allāh is the Merciful", "Repentance-Accepter."],
        },
        {
          type: "verse",
          number: 119,
          lines: ["O, you who believe! Fear from", "The disobedience of Allāh’s Commands", "And be with the truthful;"],
        },
        {
          type: "verse",
          number: 120,
          lines: ["It is not proper for the townsfolk", "Of Madinah City and for those", "Around them of the desert - dweller", "Arabs to disobey the Messenger of", "Allāh and prefer their own lives to his", "Life. That is because neither thirst not", "Labour nor hunger afflicts them in", "Allāh’s Way nor they take any step", "That enrages the disbelievers nor any", "Gain they catch from the enemy, but", "[For any of these] a good deed is", "Recorded for them; verily, Allāh does", "Not spare the reward of", "The good-doers;"],
        },
        {
          type: "verse",
          number: 121,
          lines: ["[And also] nor they spend", "Anything [in Allāh’s Way] nor they cut", "Across a valley, but it is recorded to", "Their account that Allāh may", "Recompense them more than what", "They have done of good deeds."],
        },
      ],
    },
    {
      bookPage: 353,
      blocks: [
        {
          type: "verse",
          number: 122,
          lines: ["And the believers should not all", "Collectively go out to fight; of every", "Group of them why should not a", "Number stay to acquire and study", "The Knowledge of Religion [at", "The Messenger’s presence?] So that", "They may warn their people when they", "Return to them from the war; perhaps", "They become aware of their duty to", "Allāh and abstain from the disobedience", "Of Allāh’s Commands.{41}"],
        },
        {
          type: "verse",
          number: 123,
          lines: ["O, you who believe! Fight those", "Of the disbelievers who are near to", "You and let them find sternness in", "You; and know that Allāh is", "The Supporter of the pious."],
        },
        {
          type: "verse",
          number: 124,
          lines: ["Whenever a Sūrah is revealed to", "The Messenger there are some", "Of the [the hypocrites] who ask others:", "“Which of you feels that his Faith is", "Increased by this?” As to those who", "Believe, it has increased them in Faith", "And they rejoice over the blessing of it;"],
        },
        {
          type: "verse",
          number: 125,
          lines: ["But those in whose hearts is a", "Disease [of disbelief and hypocrisy],", "It will add to their impurity; and", "They die while they are disbelievers;"],
        },
      ],
    },
    {
      bookPage: 354,
      blocks: [
        {
          type: "verse",
          number: 126,
          lines: ["Do they not see that they are", "Tried once or twice every year [with", "Different kinds of calamities]? Yet,", "They do not repent nor they do learn a", "Lesson [from the trials];{42}"],
        },
        {
          type: "verse",
          number: 127,
          lines: ["And whenever there comes down", "A Sūrah [with some hints about them],", "They look at one another, implying:", "“Does any one see you?” Then they", "Leave the place. Allāh has turned their", "Hearts [from the Truth]; because they", "Are a people who do not understand."],
        },
        {
          type: "verse",
          number: 128,
          lines: ["[O, people!] There has come to", "You a Messenger from among", "Yourselves; your suffering grieves him;", "He is full of concern for your guidance", "And he is kind and compassionate to", "The believers;"],
        },
        {
          type: "verse",
          number: 129,
          lines: ["So if they turn away [from", "The Truth], say [O, Messenger!]:", "“Allāh’s Support is sufficient for me.", "There is no God but Allāh; in Allāh I", "Have put my trust and Allāh is", "The Creator of the Mighty Throne of", "Arsh.”"],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "This is the only Sūrah of the Holy Qur’ān which does not begin with Bismellāh, because according to Imām Ali (AS), Bismellāh, i.e., In the Name of Allāh is security-bestower whereas this Sūrah proclaims the Divine Wrath against the disbelievers." },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "The Sacred Months wherein fighting is forbidden and they are: The first, the seventh, the eleventh and the twelfth months of the Islāmic calendar." },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "The pagan tribes of Arabia broke their peace treaties with the Muslims frequently to the extent that the believers found it impossible to go on having covenant of peace with those who took advantage of their Islāmic peaceful manner and violated their treaties any time they fancied or had power to attack. Allāh, the Knowing Hearer, responded to the petition of the believers by Al-Baraāt which was recited by Ali (AS) to the people, on the Day of Greater Pilgrimage or the Day of Sacrifice. By the order of the Holy Messenger, Ali (AS) also made it clear through his further announcement that apart from cancellation of treaties with the idolater tribes by the Muslims, the idolaters were forbidden from then on to approach the Sacred Mosque as well as to take part in the Hajj Pilgrimage, also they were forbidden to circumambulate round the Ka’bah while naked." },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "By idolaters here is meant, those idolaterous tribes of Arabia who had first made agreements with the Muslims and then violated them. (M.M)" },
      ],
    },
    {
      id: 5,
      blocks: [
        { kind: "p", text: "The Holy Qur’ān" },
      ],
    },
    {
      id: 6,
      blocks: [
        { kind: "p", text: "The disbelievers" },
      ],
    },
    {
      id: 7,
      blocks: [
        { kind: "p", text: "Here, Zālemīn means the disbelievers because by denying the Truth and doing wrong they make themselves entitled to receive the Divine Chastisement and thus they do wrong to themselves." },
      ],
    },
    {
      id: 8,
      blocks: [
        { kind: "p", text: "The Paradise" },
      ],
    },
    {
      id: 9,
      blocks: [
        { kind: "p", text: "The Angels" },
      ],
    },
    {
      id: 10,
      blocks: [
        { kind: "p", text: "Islām" },
      ],
    },
    {
      id: 11,
      blocks: [
        { kind: "p", text: "The non-Muslim subjects had to pay Jezyah i.e., tributary tax as a token of their submission to the Islāmic government; the amount of the tax was insignificant and what counted was the symbolic aspect of it." },
      ],
    },
    {
      id: 12,
      blocks: [
        { kind: "p", text: "The Jews and the Christians" },
      ],
    },
    {
      id: 13,
      blocks: [
        { kind: "p", text: "To distort the Message of Allāh by the false words of their mouths." },
      ],
    },
    {
      id: 14,
      blocks: [
        { kind: "p", text: "The Religion of Islām" },
      ],
    },
    {
      id: 15,
      blocks: [
        { kind: "p", text: "Regarding the splendour of its perfection" },
      ],
    },
    {
      id: 16,
      blocks: [
        { kind: "p", text: "See 2:217-218 on the Forbidden Months" },
      ],
    },
    {
      id: 17,
      blocks: [
        { kind: "p", text: "Reference is made to the people who were reluctant to obey the call to Tabūk Expedition which had to be undertaken to the threatening of the Roman Empire. Their reluctance as enumerated by the commentators was due to: (1)the intensity of the heat of the summer (2)the length of the journey (3)the ripening of the fruits and arriving the time of their harvest (4)fear from the strength of the Roman’s war-force." },
      ],
    },
    {
      id: 18,
      blocks: [
        { kind: "p", text: "The Messenger" },
      ],
    },
    {
      id: 19,
      blocks: [
        { kind: "p", text: "Abū Bakr" },
      ],
    },
    {
      id: 20,
      blocks: [
        { kind: "p", text: "The Angels" },
      ],
    },
    {
      id: 21,
      blocks: [
        { kind: "p", text: "Reference is made to the start of the historical event of the Holy Messenger’s Migration from Makkah to Madīnah [in A.D 622] which took place after the plan of the conspiracy against his life was revealed to him through his Merciful Creator. The chiefs of the Quraish idolaters at their final meeting in Dārulnedvah had decided that the Messenger of Islām should be killed by the swords of the young men from different tribes so that not any particular person have the charge laid against him. So the Holy Messenger by Allāh’s Command left the city for the Thaur Cave where stayed with Abū Bakr one of his Companions for three days; and he was protected by the Divine hosts of his Merciful Guardian. Ali (AS) stayed in the Holy Messenger’s bed at the night of the plot, thereby swords men were astonished the morning of the next day when they realized the one who left the house was Ali (AS) not the Holy Messenger." },
      ],
    },
    {
      id: 22,
      blocks: [
        { kind: "p", text: "Tabūk Expedition" },
      ],
    },
    {
      id: 23,
      blocks: [
        { kind: "p", text: "Some hypocrite named Jadd-ibn-Qaice excused himself from taking part in the Tabūk Expedition saying: “I cannot stand the charm of Roman women so I may fall into trial.” (Commentators)" },
      ],
    },
    {
      id: 24,
      blocks: [
        { kind: "p", text: "Martyrdom or victory" },
      ],
    },
    {
      id: 25,
      blocks: [
        { kind: "p", text: "See 8:28" },
      ],
    },
    {
      id: 26,
      blocks: [
        { kind: "p", text: "The Muslims" },
      ],
    },
    {
      id: 27,
      blocks: [
        { kind: "p", text: "Gardens of Perpetual Bliss" },
      ],
    },
    {
      id: 28,
      blocks: [
        { kind: "p", text: "The attempt on the Messenger’s life" },
      ],
    },
    {
      id: 29,
      blocks: [
        { kind: "p", text: "Due to spending their wealth in a forbidden way and bringing up offspring of unrighteous character. This Word of Revelation repeats 9:55" },
      ],
    },
    {
      id: 30,
      blocks: [
        { kind: "p", text: "Such as women, children, and the sick" },
      ],
    },
    {
      id: 31,
      blocks: [
        { kind: "p", text: "To be exempted from taking part in the war." },
      ],
    },
    {
      id: 32,
      blocks: [
        { kind: "p", text: "An animal for ride such as horse, camel, etc." },
      ],
    },
    {
      id: 33,
      blocks: [
        { kind: "p", text: "The Emigrants who followed the Messenger to emigrate from Makkah to Madīnah." },
      ],
    },
    {
      id: 34,
      blocks: [
        { kind: "p", text: "The Assisters were the citizens of Madīnah City who helped and gave refuge to the Emigrants." },
      ],
    },
    {
      id: 35,
      blocks: [
        { kind: "p", text: "A group of hypocrites from the tribe of Bani Ghanam built a mosque with the intention to cause loss to Islām: A center for gatherings of the enemies of Islām to do mischief and sow sedition between the Muslims to uproot Islām. They made publicity that it was a mosque for the poor, the old and the disabled; and they invited the Holy Messenger to bless it by performing the inauguration prayer therein; but the Absolute Observer sent these Words of Revelation (107- 110) to forbid His Messenger from praying in that mosque; upon this Command the Holy Messenger ordered the believers to destroy the place and they even burnt it down." },
      ],
    },
    {
      id: 36,
      blocks: [
        { kind: "p", text: "Reference is made to the Mosque of Qubā which is the first mosque of Islām, built by the order of the Holy Messenger and that was located at Qubā 3 miles from Madīnah City." },
      ],
    },
    {
      id: 37,
      blocks: [
        { kind: "p", text: "Since Allāh’s Curse and Allāh’s Wrath are of the Divine determining elements and act as Allāh’s Decree, I have translated the Knowing Decreer for Alīmon Hakīm." },
      ],
    },
    {
      id: 38,
      blocks: [
        { kind: "p", text: "See 19:47" },
      ],
    },
    {
      id: 39,
      blocks: [
        { kind: "p", text: "Towards those who were reluctant about taking part in the Tabūk Expedition." },
      ],
    },
    {
      id: 40,
      blocks: [
        { kind: "p", text: "Those three men out of human weakness not out of hypocrisy failed to be active in the Tabūk expedition, and as the people and even their wives quitted them following the Messenger’s order, they repented earnestly to Allāh, the Merciful and Allāh paid attention to their repentance and forgave them." },
      ],
    },
    {
      id: 41,
      blocks: [
        { kind: "p", text: "According to Maulāna Mohammad Ali, the introduction of the subject of the study of the religion shows the aim which the Holy Qur’ān has in view: In the midst of the Commands relating to fighting, it introduces the importance of training theologians for the community; the believers are enjoined to keep the Holy Messenger’s company and learn from him the knowledge of religion when he stays alone and does not take part in the small wars or Sarrīyahs." },
      ],
    },
    {
      id: 42,
      blocks: [
        { kind: "p", text: "Inflicted by the Divine Afflictions; disgraced for being disclosed as hypocrites and expelled from their land, were trials that they were punished by. (Majma-ul-Baiān)" },
      ],
    },
  ],
};

export default surah;
