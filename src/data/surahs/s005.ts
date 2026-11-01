import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 5 · Al-Mā’idah — book pages 180–214 (verses 1–120, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 5,
  pages: [
    {
      bookPage: 180,
      heading: {
        title: "Al-Mā’idah",
        lines: ["(The Heavenly Food)", "Revealed at Madīnah", "120 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["O, you who believe! Fulfill the promises", "And covenants once made [by you].", "Permitted to you is [the meat of", "The grass-eating] quadrupeds except that", "Which is recited to you; forbidden is", "The game when you are performing", "The prescribed pilgrimage. Verily, Allāh", "Decrees whatever He Wills."],
        },
        {
          type: "verse",
          number: 2,
          continues: true,
          lines: ["O, you who believe! Do not step", "Over the sanctity of the Waymarks of", "Allāh,{1} nor of the Sacred Month, nor", "The animals brought for sacrifice, nor", "The garlanded animals marked by", "The garlands under their necks [for", "Safety], nor the people coming to", "The Sacred Mosque, both seeking", "The Bounty [by trading] and Pleasure of", "Their Creator&Nurturer. But when you"],
        },
      ],
    },
    {
      bookPage: 181,
      blocks: [
        {
          type: "verse",
          number: 2,
          continued: true,
          lines: ["Have completed the pilgrimage [of Hajj", "Or ‘Umrah], you may hunt. And let not", "The hatred of some people who [in", "The past] barred you from the Sacred", "Mosque, lead you to transgression.", "You should help one another in", "Righteousness and piety, but do not", "Help one another in sin and", "Transgression. And fear from", "The disobedience of Allāh’s Commands;", "Verily, Allāh is the Severe-Retributing."],
        },
        {
          type: "verse",
          number: 3,
          continues: true,
          lines: ["Forbidden to you [for food are:]", "Dead meat, blood, the flesh of swine,", "And what has been invoked on", "The name of other than Allāh;", "The animal which has been strangled;", "The animal beaten to death; the animal", "Killed by a fall; the gored animal and", "That devoured by beasts of prey, with", "The exceptions of that you have", "Slaughtered duly, [also] animals sacrificed", "On stones set up for idols; and meat", "Partitioned by dividing arrows; exceeding", "These limits is disobedience. Today,", "Those who reject Faith have given up all", "Hope [of opposing] your religion; so, do", "Not fear them, but fear Me. Today,{2} I", "Have perfected your religion for you and", "Completed My Favour upon you and", "Have chosen for you Islām as", "Religion. But, as for him [a person]", "Who is forced by severe hunger, with"],
        },
      ],
    },
    {
      bookPage: 182,
      blocks: [
        {
          type: "verse",
          number: 3,
          continued: true,
          lines: ["No inclination to sin [he can eat from", "The above mentioned meats.]", "Surely, Allāh is the Merciful Forgiving."],
        },
        {
          type: "verse",
          number: 4,
          lines: ["They ask you [O, Messenger!]", "About what is lawful for them [as", "Food]. Say: “Lawful have been made", "For you the good and pure foods", "And what those beasts and birds of", "Prey which you have trained as", "Hounds, trained and taught them", "[To catch] in the manner as directed to", "You by Allāh; so eat of what they catch", "For you, but mention the Name of", "Allāh over it, and fear from", "The disobedience of Allāh’s Commands.", "Verily, Allāh is the Swift-Reckoner.”"],
        },
        {
          type: "verse",
          number: 5,
          continues: true,
          lines: ["Today, all good things and foods", "Have been made lawful for you; and", "The food of the people of the Book", "Has been made lawful for you{3} and", "Your food is lawful for them. [Also]", "The believing [Muslim] women and", "The chaste [ones] from those who have", "Been given the Book before you, [are", "Lawful for you], when you have given", "Them their marriage-portion with", "Chaste intention [of a lawful wedlock]", "Not fornicating, nor taking them as", "Girl friends in secret.{4} And whoever", "Rejects his Faith [to Islām], all his"],
        },
      ],
    },
    {
      bookPage: 183,
      blocks: [
        {
          type: "verse",
          number: 5,
          continued: true,
          lines: ["Deeds [even good ones of the past]", "Become vain indeed; and in", "The Hereafter, he shall be among", "The losers."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 6,
          lines: ["O, you who believe! When you get", "Ready for performing prayer, wash", "Your face and your hands and arms to", "The elbows; rub the front part of your", "Head [with water] and rub your feet", "Up to the ankles. If you are polluted", "[Due to physical association with", "Women] bathe your whole body. If you", "Are ill or on a journey or come from", "Privy or you have touched women and", "You find no water, then find yourself", "Some clean soil and rub therewith", "Your face and hands.{5} Allāh does not", "Intend to put you in a difficult position,", "But He intends to purify you, and", "Complete His Favour upon you, so that", "You may be thankful."],
        },
        {
          type: "verse",
          number: 7,
          lines: ["And remember Allāh’s Favour upon", "You and His Covenant with which He", "Bounds you when you said: “We heard", "And we obeyed Your Command.”{6} And", "Fear Allāh.{7} Verily, Allāh Knows", "The secrets of the hearts [of you]."],
        },
      ],
    },
    {
      bookPage: 184,
      blocks: [
        {
          type: "verse",
          number: 8,
          lines: ["O, you who believe! Be you,", "Always securer of justice for Allāh in", "Bearing witness; and do not let your", "Hatred for a group makes you depart", "From justice. Be just; that is nearest to", "Piety; and fear [from Allāh’s", "Punishment]. Verily, Allāh is Well", "Aware of what you do."],
        },
        {
          type: "verse",
          number: 9,
          lines: ["Allāh has promised those who", "Believe [in the Oneness of Allāh] and", "Have done deeds of righteousness,", "There will be Forgiveness and a Great", "Reward for them;"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["But those who disbelieved and", "Belied Our Words of Revelation, they", "Are the inhabitants of the Hell."],
        },
        {
          type: "verse",
          number: 11,
          lines: ["O, you who believe! Remember", "The Favour of Allāh upon you: When", "Some people intended [and made a", "Plan] to stretch forth their hands", "Against you, but Allāh withheld their", "Hands from you. So, fear from", "The disobedience of Allāh’s Commands;", "And in Allāh the believers should put", "Their trust."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 12,
          continues: true,
          lines: ["And verily, Allāh took the covenant", "From the Children of Isrāil; and We", "Appointed twelve chieftains from", "Among them and Allāh stated to them:", "“I will support you if you perform", "Regular prayers, and pay alms, and"],
        },
      ],
    },
    {
      bookPage: 185,
      blocks: [
        {
          type: "verse",
          number: 12,
          continued: true,
          lines: ["Believe in my Messengers, and respect", "And assist them and lend to Allāh a", "Good loan;{8} and verily, I will remit your", "Sins and admit you to the Gardens in", "Which the streams flow. But, if any of", "You after this [covenant] disbelieves, he", "Has indeed gone astray from the Straight", "Path.”"],
        },
        {
          type: "verse",
          number: 13,
          lines: ["But for their breaking their covenant,", "We cursed them and made their hearts", "Hard; they change the words [of", "Taurāt] from their right places and", "Have forgotten a part of the Message", "That was sent to them. [O, Messenger]", "You will not cease to discover a new", "Treachery in them, except a few [the rest", "Are traitors]. So forgive them and", "Overlook [their misdeeds]. Verily, Allāh is", "Affectionate to the good-doers."],
        },
        {
          type: "verse",
          number: 14,
          lines: ["And from those who call", "Themselves “Nassārā”,{9} We took their", "Covenant,{10} but they [also] forgot", "A substantial part of the Message", "That was sent to them, so We stirred", "Up among them enmity and hatred up", "To the Day of Judgement;{11} and soon,", "Allāh will inform them of the things they", "Have done."],
        },
      ],
    },
    {
      bookPage: 186,
      blocks: [
        {
          type: "verse",
          number: 15,
          lines: ["O, people of the Book! Indeed,", "Now Our Messenger has come to you", "Making clear to you much of what you", "Have been concealing of [your] Book", "And passing over much; indeed from", "Allāh has come to you a Light and an", "Expositoring Book;{12}"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["Allāh through the Holy Qur’ān", "Guides whoever that seeks", "Allāh’s Pleasure, to the peace-giving", "Ways; and He takes them out of", "The darkness towards the Light by His", "Will and guides them to the Straight", "Path;"],
        },
        {
          type: "verse",
          number: 17,
          lines: ["Surely, they are disbelievers those", "Who said: “Massīh, son of Maryam is", "God.” Say [O, Messenger!]: ‘Who then", "Has the least power against Allāh, if He", "Intends to destroy Massīh, son of", "Maryam, [and] his mother, and all those", "Who are on the earth?’ And to Allāh", "Belongs the Dominion of the heavens", "And the earth and all that is between", "Them; Allāh creates what He Wills and", "He is Powerful over all things."],
        },
        {
          type: "verse",
          number: 18,
          continues: true,
          lines: ["And the Jews and the Christians", "[Both] say: “We are the sons of", "Allāh and His beloved ones.” Say", "[O, Messenger!]: ‘Why then does Allāh", "Punish you for your sins? Nay, you", "Are but human beings like others that"],
        },
      ],
    },
    {
      bookPage: 187,
      blocks: [
        {
          type: "verse",
          number: 18,
          continued: true,
          lines: ["He has created. Allāh forgives whom", "He Wills and punishes whom He Wills;", "And to Him belongs the Dominion of", "The heavens and the earth, and what", "Is between them; and to Him is", "The Return of all.’"],
        },
        {
          type: "verse",
          number: 19,
          lines: ["O, people of the Book! Now has", "Come to you Our Messenger to explain", "To you the Truth, after a break", "In [the series of] Messengers, lest you", "May [on the Day of Judgement excuse", "Your sins by] saying: “There did not", "Come to us any Bringer of glad-tidings", "Nor a Warner.” Now indeed, has come", "To you a Bringer of glad-tidings and a", "Warner; and Allāh is Powerful over all", "Things."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 20,
          lines: ["[O, Messenger!] Remind them of", "The time Mūssā said to his people:", "“O, my people! Remember the Favour", "Of Allāh upon you: When He appointed", "Prophets among you and set you up", "As kings, and gave you what He had", "Not given to any other among", "The people of the world;"],
        },
        {
          type: "verse",
          number: 21,
          lines: ["“O, my people! Enter the Holy", "Land{13} which Allāh has Ordained for you", "And do not turn your back in your", "Traces, for then you will return as", "Losers.”"],
        },
      ],
    },
    {
      bookPage: 188,
      blocks: [
        {
          type: "verse",
          number: 22,
          lines: ["They said: “O, Mūssā! Surely there is", "A heavy-handed folk and verily, we will", "Never enter it, until they get out of it", "And if they depart from it, certainly, we", "Will enter.”"],
        },
        {
          type: "verse",
          number: 23,
          lines: ["Then two men of those who", "Feared Allāh and upon whom Allāh", "Had bestowed His Favour, said: “Enter", "Upon them [suddenly] by the gate;", "For once you have entered it, verily, [you", "Shall see] you are victorious; and put", "You all your trust in Allāh if you are", "Believers.”"],
        },
        {
          type: "verse",
          number: 24,
          lines: ["They said: “O, Mūssā! We shall", "Never enter it as long as they are", "There; so you and your", "Creator&Nurturer go there, and fight", "You two, while we will be sitting here", "[Waiting].”"],
        },
        {
          type: "verse",
          number: 25,
          lines: ["Mūssā said: “O, my Creator&Nurturer!", "I have only power over myself and my", "Brother;{14} please, separate us from this", "Disobedient folk.”"],
        },
        {
          type: "verse",
          number: 26,
          lines: ["Allāh stated: “Therefore, this Holy Land", "Is forbidden to them{15} for forty years; in", "Distraction they will wander throughout", "The world; so, [O, Mūssā] do not be", "Sorrowful over the people who are", "Disobedient [to Allāh’s Commands].”"],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 189,
      blocks: [
        {
          type: "verse",
          number: 27,
          lines: ["And [O, Messenger!] recite to", "Them the story of the two sons of", "‘Ādam,{16} in truth; when each offered", "A sacrifice to Allāh; it was accepted", "From one of them, but not from", "The other. The latter{17} said: “I shall", "Surely kill you.” The former said:", "“Verily, Allāh accepts [sacrifice] only", "From the pious [it is not my fault];"],
        },
        {
          type: "verse",
          number: 28,
          lines: ["“If you do stretch your hand", "To kill me, I shall never stretch my", "Hand to kill you, for I fear Allāh,", "The Creator of the worlds;"],
        },
        {
          type: "verse",
          number: 29,
          lines: ["“Verily, I intend to let you draw on", "Yourself my sins as well as yours,", "Then you will be one of the inhabitants", "Of the Fire and that is the recompense", "Of the wrongdoers!”"],
        },
        {
          type: "verse",
          number: 30,
          lines: ["So the passionate-self of Qābīl", "Tempted him and made fair-seeming", "To him the murder of his brother; he", "Slew his brother and became one of", "The losers;"],
        },
        {
          type: "verse",
          number: 31,
          continues: true,
          lines: ["Then Allāh sent a crow to scratch", "The ground to show him how to bury", "The dead body of his brother. He said", "To himself: “Woe to me! Am I not", "Even like this crow to be able to scratch", "The ground and thus to cover the corpse"],
        },
      ],
    },
    {
      bookPage: 190,
      blocks: [
        {
          type: "verse",
          number: 31,
          continued: true,
          lines: ["Of my brother and to hide the shame [of", "Him]?” Then he became very remorseful;"],
        },
        {
          type: "verse",
          number: 32,
          lines: ["For this reason,{18} We decreed for", "The Children of Isrāīl{19} that if anyone", "Killed a person, unless it be for", "Retaliation of murder or because of", "Making mischief in the land, it would be", "Regarded as if he killed mankind as a", "Whole; and he who saves a man’s life", "Shall be considered as one who has", "Saved the life of mankind as a whole.", "And certainly Our Messengers came", "To them with clear evidence and yet", "Even after that many of them", "Committed transgression in the land;"],
        },
        {
          type: "verse",
          number: 33,
          lines: ["The punishment of those who", "Raise war against Allāh and His", "Messengers and do mischief in the land", "Is only that they shall be killed or", "Crucified or their hands and their feet", "Be cut off from the opposite sides or", "[They] be banished from the land. This", "Is their disgrace in this world and a", "Grave Torment for them will be in", "The Hereafter,"],
        },
        {
          type: "verse",
          number: 34,
          continues: true,
          lines: ["Except those who repent, before", "You gain power over them [by taking", "Them captives]; you should know that"],
        },
      ],
    },
    {
      bookPage: 191,
      blocks: [
        { type: "verse", number: 34, continued: true, lines: ["Allāh is the Merciful Forgiving."] },
        { type: "divider" },
        {
          type: "verse",
          number: 35,
          lines: ["O, you who believe! Fear from", "The disobedience of Allāh’s Commands", "And seek the means of getting near to", "Him; and strive hard in His Way, so that", "You may receive salvation."],
        },
        {
          type: "verse",
          number: 36,
          lines: ["Verily, those who disbelieved, if", "They owned what is on the earth", "Altogether plus the like of it with it,", "To give as ransom to save themselves", "From the Torment of the Day of", "Judgement thereby, it would not be", "Accepted from them; and for them", "Awaits a painful Chastisement;"],
        },
        {
          type: "verse",
          number: 37,
          lines: ["They, [the disbelievers] will long", "To get out of the Fire, but they can", "Never get out of it; and for them there", "Will be a Lasting Torment."],
        },
        {
          type: "verse",
          number: 38,
          lines: ["Cut off the [right] hand [four", "Fingers] of the thief, male or female, a", "Punishment as an exemplary Torment", "From Allāh for that which they", "Committed; and Allāh is the Mighty", "Decreer;"],
        },
        {
          type: "verse",
          number: 39,
          lines: ["But, if the thief repents after his/her", "Evildoing and amends his/her conduct,", "Then verily, Allāh will accept his/her", "Repentance; verily, Allāh is the Merciful", "Forgiving;"],
        },
      ],
    },
    {
      bookPage: 192,
      blocks: [
        {
          type: "verse",
          number: 40,
          lines: ["Do you not know [O, man]", "That to Allāh belongs the Dominion of", "The heavens and the earth? He", "Punishes whom He Wills and He", "Forgives whom He Wills and Allāh is", "Powerful over all things."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 41,
          lines: ["[O, Messenger!] Do not let them", "Grieve you, those who haste in", "Disbelief; some are men who say with", "Their mouths: “We believe,” whereas", "Their hearts do not believe; and some", "Are the Jews who are spies and keen", "Listeners for lies; also as spies they", "Listen to other folks who themselves", "Have not come to you; those who", "Change the words from their original", "Places and they say to the people [who", "Come to you]: “If you are given this", "[Decree by the Messenger] then take it;", "But if you are not given it, beware!”{20}", "[O, Messenger] whomsoever Allāh", "Intends to inflict because of", "Rejecting Faith, you cannot do anything", "To save him; those are the ones whom", "Allāh does not intend to purify their", "Hearts [from disbelief and hypocrisy]; for", "Them there is a disgrace in this world", "And a grave Torment in the Hereafter;"],
        },
        {
          type: "verse",
          number: 42,
          continues: true,
          lines: ["[They are] spies and keen listeners for", "Lies as well as consumers of things", "Forbidden [such as usury or bribe]. So, if"],
        },
      ],
    },
    {
      bookPage: 193,
      blocks: [
        {
          type: "verse",
          number: 42,
          continued: true,
          lines: ["They come to you [O, Messenger] either", "Judge among them or turn away from", "Them; if you turn away from them, they", "Cannot harm you in the least; and if", "You judge among them, judge with", "Equity. Verily, Allāh is Affectionate to", "Those who judge according to justice;"],
        },
        {
          type: "verse",
          number: 43,
          lines: ["But why do they come to you", "[O, Messenger] for judgement while they", "Have the Taurāt, in which there is", "Allāh’s Decree ? Yet even after that", "[Coming to you for judgement], they", "Turn away from it; because such folk do", "Not believe in Allāh;"],
        },
        {
          type: "verse",
          number: 44,
          lines: ["Verily, We sent down the Taurāt [to", "Mūssā] in which there was Guidance", "And Light, and by it the Messengers", "Who were submissive to Allāh’s Will,", "Judged among the Jews; and the rabbis", "And the masters of the Divine", "Knowledge judged for the Jews by", "The Taurāt, since to them was entrusted", "The protection of Allāh’s Book and they", "Acted as witnesses for it. Therefore, do", "Not fear the people [regarding", "The implementation of Religion’s", "Decrees], but fear the disobedience of", "Me [your Creator], and do not barter My", "Words of Revelation for a small gain;", "And whosoever [of the Rabbis] does not", "Judge by Allāh’s Words of Decrees,", "Such are the disbelievers;"],
        },
      ],
    },
    {
      bookPage: 194,
      blocks: [
        {
          type: "verse",
          number: 45,
          lines: ["And We decreed there [in the Taurāt] for", "Them: “Life for life, eye for eye, nose for", "Nose, ear for ear, tooth for tooth and", "[Also] for wounds there should be similar", "Retaliation. But if anyone remits", "The retaliation by way of charity, it shall", "Be for him an expiation [of his sin] and", "Whosoever does not judge among men", "By what Allāh has sent down as Words", "Of Decrees, such are as the", "Disbelievers.”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 46,
          lines: ["And following those Messengers", "We sent Īssā, son of Maryam,", "Confirmer of the Taurāt that had come", "Before him; and We gave him the Injīl", "In which was Guidance and Light and", "Confirming of the Taurāt that had", "Come before it, and it was a guidance", "And admonition for the pious;"],
        },
        {
          type: "verse",
          number: 47,
          lines: ["And the people of the Injīl{21}", "Should judge by the Decrees which", "Allāh has sent down [and has revealed]", "Therein; and whosoever does not judge", "According to Allāh’s Decrees, then such", "Are indeed considered the disobedients."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 48,
          continues: true,
          lines: ["And We have sent down to you", "[O, Messenger] this [Holy] Book{22}"],
        },
      ],
    },
    {
      bookPage: 195,
      blocks: [
        {
          type: "verse",
          number: 48,
          continued: true,
          lines: ["With Truth, confirming what is before it", "Of the Scriptures, and it is also a", "Guardian over all; therefore, judge", "Among them{23} according to the Decrees", "That Allāh has sent down and do not", "Conform to their caprices, diverging", "From what has come to you of", "The Truth. For each of you, We have", "Given a code of law and an open way;", "And if Allāh had Intended, He would", "Have made you one nation, but Allāh’s", "Will is to try you in what He has", "Given to each of you [of the Divine", "Books and Decrees in different eras].", "You people should compete one another", "In goodness. To Allāh is the return of", "You all; and then He shall inform you", "[On the Day of Resurrection] about", "What you disputed [regarding religions];"],
        },
        {
          type: "verse",
          number: 49,
          lines: ["And so you [O, Messenger]", "Judge among them{24} according to", "What Allāh has revealed and do not", "Conform to their caprices; and beware", "Of them lest they turn you far away from", "Some of that which Allāh has sent", "Down to you; and if they turn away,", "Then know that Allāh’s Will is to punish", "Them for some of their sins. And truly,", "Most of the people are disobedient [to", "The Divine Decrees];"],
        },
      ],
    },
    {
      bookPage: 196,
      blocks: [
        {
          type: "verse",
          number: 50,
          lines: ["Do they seek the vain decrees of", "The Time of Ignorance? And what", "Decree is better than Allāh’s for a", "People who have an assured Faith?"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 51,
          lines: ["O, you who believe! Do not take", "The Jews and the Christians as", "Friends; they are friends only to one", "Another; and if any among you takes", "Them as friends, then surely, he is", "Regarded as one of them. Verily, Allāh", "Does not guide the wrongdoers."],
        },
        {
          type: "verse",
          number: 52,
          lines: ["And you see [O, Messenger]", "Those people in whose hearts there is", "The disease [of hypocrisy], they haste", "To make friends with them,{25} saying: “We", "Fear lest some reverse of fortune brings", "A disaster to us, [and we may need their", "Help].” Perhaps Allāh may bring about", "A victory for you [Muslims] out of His", "Favour; then these [opportunist] people,", "Will become remorseful for what they", "Have been keeping as a secret within", "Themselves;"],
        },
        {
          type: "verse",
          number: 53,
          lines: ["And then those who believe, will", "Say: “Are these the ones who swore", "By Allāh, their strongest oaths that they", "Were with you?” In vain shall go all", "Their good deeds [of the past] and they", "Shall be the losers."],
        },
      ],
    },
    {
      bookPage: 197,
      blocks: [
        {
          type: "verse",
          number: 54,
          lines: ["O, you who believe! If any of", "You turns from his religion, should", "Know that Allāh will bring a people", "Whom Allāh is Affectionate towards", "Them and they love Allāh [above all].", "Humble [they are] towards the believers,", "Stern towards the disbelievers; they are", "Men who struggle in the Path of Allāh,", "And do not fear the reproach of any", "Reproacher.{26} That is the Grace of Allāh,", "He gives it to whom He Wills and Allāh", "Is the Knowing Grace-Increaser;"],
        },
        {
          type: "verse",
          number: 55,
          lines: ["Verily, your guardians [after] Allāh", "Are His Messenger [Mohammad] and", "The believers. [The believers are:] Those", "Who establish prayer and pay alms", "[Even] while they are bowing down [in", "Prayer];{27}"],
        },
        {
          type: "verse",
          number: 56,
          lines: ["And whosoever takes Allāh, as his", "Guardian, and takes Messenger", "And such believers, as his", "Guardians then [he has joined]", "The Party of Allāh; and Allāh’s", "Party will be the victorious indeed."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 57,
          continues: true,
          lines: ["O, you who believe! Do not take", "For friends those who take your", "Religion as a mockery and fun, whether", "They be the people of the Book or"],
        },
      ],
    },
    {
      bookPage: 198,
      blocks: [
        {
          type: "verse",
          number: 57,
          continued: true,
          lines: ["The disbelievers; and fear from", "The disobedience of Allāh, if you are", "True believers;"],
        },
        {
          type: "verse",
          number: 58,
          lines: ["And when you proclaim the call", "To prayer, they take it but as a mockery", "And fun; that is because they are a", "People who do not use their reason;"],
        },
        {
          type: "verse",
          number: 59,
          lines: ["Say [O, Messenger!]: “O, people of", "The Book! Do you blame us for no", "Other reason than that we believe in", "Allāh, and in that which has been sent", "Down to us and in that which had been", "Sent down before us? And this is", "Because most of you are deviated [from", "The Right Path].”"],
        },
        {
          type: "verse",
          number: 60,
          lines: ["Say [O, Messenger!]: “Shall I inform you", "Of something worse than that regarding", "The punishment from Allāh? They are", "Those{28} who incurred the Curse of Allāh", "And His Wrath, some of whom He", "Transformed into monkeys and swines.", "And [also], those who worshipped", "The false deities; such are worse in rank", "[In the Hell] since they are far more", "Astray from the Straight Path.”"],
        },
        {
          type: "verse",
          number: 61,
          lines: ["And when they come to you", "[Muslims], they say: “We believe.”", "They indeed enter with disbelief and", "They go out with disbelief; and Allāh is", "The Supreme-Knower of what they hide", "[In their hearts];"],
        },
      ],
    },
    {
      bookPage: 199,
      blocks: [
        {
          type: "verse",
          number: 62,
          lines: ["And you see many of them racing", "Each other in committing sin and", "Transgression and consuming", "Forbidden things [such as bribe and", "Usury]; evil indeed is what they do;"],
        },
        {
          type: "verse",
          number: 63,
          lines: ["Why do not the learned priests", "And the rabbis forbid them from", "Uttering sinful words and eating", "Forbidden things? Evil indeed is what", "They do."],
        },
        {
          type: "verse",
          number: 64,
          lines: ["The Jews said: “Allāh’s Hand is", "Fettered.”{29} Be their hands fettered and", "They be cursed for what they uttered!", "Nay, Allāh’s Hands are widely", "Outstretched; He spends [of His", "Bounty] as He Wills. Verily,", "The Words of Revelation that have been", "Sent down to you, [O, Messenger]", "From your Creator&Nurturer increase,", "In most of them, their rebellion and", "Disbelief. We have raised enmity and", "Hatred among them{30} till the Day of", "Judgement. Every time they kindled the", "Fire of war, Allāh extinguished it; and", "They strive to make mischief on the", "Earth; whereas Allāh does not like the", "Mischief-makers;"],
        },
        {
          type: "verse",
          number: 65,
          continues: true,
          lines: ["And if the people of the Book had", "Believed and had acted piously, We", "Should have indeed blotted out their sins"],
        },
      ],
    },
    {
      bookPage: 200,
      blocks: [
        { type: "verse", number: 65, continued: true, lines: ["And admitted them to the Gardens of", "Bliss{31}."] },
        {
          type: "verse",
          number: 66,
          lines: ["And if they had acted according", "To the Taurāt and the Injīl", "And that which{32} was sent down to them", "From their Creator&Nurturer, they", "Would have surely received sustenance", "[Of good things] from the heaven and", "The earth. Of them are a group who", "Are moderate, but many of them", "Commit evil deeds."],
        },
        {
          type: "verse",
          number: 67,
          lines: ["[O, Messenger!] Proclaim the Message", "That has been sent down to you from", "Your Creator&Nurturer! And if you do", "Not do so then you would not have conveyed", "Your duty as Allāh’s Messenger.{33} [Know", "That] Allāh will protect you from", "[The mischievous] people. Verily, Allāh", "Does not guide the disbelievers."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 68,
          continues: true,
          lines: ["Say [O, Messenger!]: “O, people", "Of the Book! You do not stand on", "Anything until you stand firm by"],
        },
      ],
    },
    {
      bookPage: 201,
      blocks: [
        {
          type: "verse",
          number: 68,
          continued: true,
          lines: ["The Taurāt and the Injīl and what has", "Been sent down{34} to you from your", "Creator.” [O, Messenger] surely, that", "Which has been sent down to you, will", "Increase in many of them transgression", "And disbelief; therefore, do not be", "Sorrowful for the deniers of the Truth."],
        },
        {
          type: "verse",
          number: 69,
          lines: ["Surely, those who believe [in Islām] and", "Those who are the Jews and the", "Sābians and the Christians and", "Whoever believes in Allāh and", "The Last Day and do good, no fear", "Shall be upon them and nor shall", "They grieve.{35}"],
        },
        {
          type: "verse",
          number: 70,
          lines: ["Verily, We took a covenant from", "The Children of Isrāīl and We sent to", "Them Messengers; [but] whenever", "There came to them a Messenger with", "That [of Decrees] which they did not", "Like, they called some of them{36} liars", "And some others, they killed;"],
        },
        {
          type: "verse",
          number: 71,
          lines: ["And they thought there would be", "No trial, so they acted blind and deaf", "[Unable to see or hear the Truth]. And", "When they repented [after being", "Afflicted with punishment], Allāh", "Accepted their repentance; but again,", "Many of them acted blind and deaf;", "And surely, Allāh is the Seer of", "The things they do."],
        },
      ],
    },
    {
      bookPage: 202,
      blocks: [
        {
          type: "verse",
          number: 72,
          lines: ["Certainly they uttered blasphemy,", "Those who said: “Surely, Allāh is", "Massīh, son of Maryam.” But Massīh", "[Himself] said: “O, Children of Isrāīl!", "Worship [only] Allāh, my", "Creator&Nurturer and your", "Creator&Nurturer; surely whoever", "Associates anything with Allāh, then", "Allāh forbids the Paradise for him and", "His abode shall be the Hell Fire; and", "There shall not be any helpers for", "The wrongdoers.”"],
        },
        {
          type: "verse",
          number: 73,
          lines: ["Surely, they are the disbelievers,", "Those who say: “Allāh is one of", "The three{37} [gods]”, since there", "Is no God but Allāh, the One. If", "They do not desist from what they say", "[They should know] those who disbelieve,", "Shall meet a painful Chastisement;"],
        },
        {
          type: "verse",
          number: 74,
          lines: ["Will they not then repent and ask", "Allāh’s Forgiveness? [Regarding their", "Blasphemy] Verily, Allāh is", "The Merciful Forgiving;"],
        },
        {
          type: "verse",
          number: 75,
          continues: true,
          lines: ["Massīh, son of Maryam,{38} was no", "More than a Messenger, like many", "Other Messengers who passed away", "Before him. His mother, [Maryam] was a", "Truthful woman; they both used to eat", "Food.{39} Look how We make Our Words", "Of Revelation clear to them, yet look"],
        },
      ],
    },
    {
      bookPage: 203,
      blocks: [
        { type: "verse", number: 75, continued: true, lines: ["How they are turned away [from", "The Truth];"] },
        {
          type: "verse",
          number: 76,
          lines: ["Say [O, Messenger!]: “O, people of", "The Book! Do you worship besides", "Allāh, something that has no power", "Either to benefit or harm you? And", "Allāh is the Knowing Hearer.”"],
        },
        {
          type: "verse",
          number: 77,
          lines: ["Say [O, Messenger!]: “O, people of", "The Book!” Do not exaggerate about", "Your religion beyond the truth; and do", "Not follow the vain desires of a folk", "Who had gone astray aforetime and", "Led many astray and now they are away", "From the Right Path.”"],
        },
        {
          type: "verse",
          number: 78,
          lines: ["Those who disbelieved among", "The Children of Isrāīl were cursed by", "The tongue of Dāwūd and of Īssā son of", "Maryam,{40} that was because they", "Disobeyed [Allāh and the Messengers]", "And used to exercise transgression;"],
        },
        {
          type: "verse",
          number: 79,
          lines: ["They did not forbid each other", "From evil things which they committed;", "Surely, evil were the things they did;"],
        },
        {
          type: "verse",
          number: 80,
          continues: true,
          lines: ["[O, Messenger!] You see many of", "Them{41} taking the disbelievers as their", "Friends and helpers; evil indeed is that"],
        },
      ],
    },
    {
      bookPage: 204,
      blocks: [
        {
          type: "verse",
          number: 80,
          continued: true,
          lines: ["Which they themselves have sent", "Forward [to the Hereafter]; so, Allāh’s", "Wrath is upon them because of their", "Evil deeds; and in the Chastisement", "They shall abide forever;"],
        },
        {
          type: "verse",
          number: 81,
          lines: ["And had they believed in Allāh,", "And in the Messenger and in what", "Has been revealed to him, never", "Would they have taken the disbelievers", "As friends; but many of them are", "Perverted [from the Right Path];"],
        },
        {
          type: "verse",
          number: 82,
          lines: ["[O, Messenger!] Verily, you will find", "The Jews and the pagans the strongest", "Among mankind in enmity to", "The believers;{42} and you will find that", "The closest to the believers in friendship", "Are those who say: “We are Nassārā.”{43}", "That is because among them are learned", "Priests and devoted monks and they", "Are not arrogant [against the Truth];"],
        },
        {
          type: "verse",
          number: 83,
          lines: ["And when they hear what has", "Been sent down to the Messenger,{44}", "You will see their eyes overflow with", "Tears on account of what they", "Recognize of the Truth and they pray:", "“O, our Creator&Nurturer! We believe,", "So write us down among the witnesses", "[Of the Truth].”"],
        },
      ],
    },
    {
      bookPage: 205,
      blocks: [
        {
          type: "verse",
          number: 84,
          lines: ["[And they say:] “Why should we", "Not believe in Allāh and what has", "Come to us of the Truth, while we wish", "That our Creator&Nurturer would", "Admit us [in the paradise] along with", "The righteous ones?”"],
        },
        {
          type: "verse",
          number: 85,
          lines: ["So, in response to this prayer, Allāh", "Rewarded them the Gardens in", "Which streams flow; they will abide", "Therein forever; and such is the reward", "Of the good-doers;"],
        },
        {
          type: "verse",
          number: 86,
          lines: ["But those who disbelieved and", "Belied Our Revelations, they shall be", "The inhabitants of the Hell."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 87,
          lines: ["O, you who believe! Do not forbid", "The good and pure things that Allāh has", "Made lawful for you, and do not", "Transgress: Verily, Allāh does not like", "The transgressors;"],
        },
        {
          type: "verse",
          number: 88,
          lines: ["And eat of the sustenance which is", "Lawful and good and Allāh has", "Provided for you; and fear from", "The disobedience of Allāh in whom you", "Believe."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 89,
          continues: true,
          lines: ["Allāh will not punish you for what", "Is unintentional in your oaths, but He", "Will punish you for your deliberate", "Oaths: Expiation is feeding ten poor", "Persons on a scale of average of"],
        },
      ],
    },
    {
      bookPage: 206,
      blocks: [
        {
          type: "verse",
          number: 89,
          continued: true,
          lines: ["The food that you feed your own", "Family or clothing ten poor persons or", "Freeing of a slave; but whosoever", "Cannot afford [any of these], then he", "Should fast for three days successively.", "That is the expiation for the oaths you", "Have sworn, so keep to your oaths. Thus", "Allāh makes clear to you His Words of", "Revelation, so that you may be", "Grateful."],
        },
        {
          type: "verse",
          number: 90,
          lines: ["O, you who believe! Intoxicants", "And gambling and sacrificing stones{45}", "And dividing by arrows for seeking luck", "Or decision are filthy and regarded some", "Of Satan’s acts, so keep away from them", "That you may receive salvation;"],
        },
        {
          type: "verse",
          number: 91,
          lines: ["Truly, Satan wants to raise enmity", "And hatred among you, [people] by", "Intoxicants and gambling and he", "[Desires] to keep you away from", "Allāh’s Remembrance and from prayer;", "Will you then desist committing [evil]", "Deeds?"],
        },
        {
          type: "verse",
          number: 92,
          lines: ["And obey Allāh and obey Allāh’s", "Messenger and keep away from", "The disobedience; but if you turn away", "[From the Truth] know that it is for Our", "Messenger only to convey the Divine", "Message publicly;"],
        },
        { type: "verse", number: 93, continues: true, lines: ["Those who believe and do righteous"] },
      ],
    },
    {
      bookPage: 207,
      blocks: [
        {
          type: "verse",
          number: 93,
          continued: true,
          lines: ["Deeds, there is no sin on them for what", "They ate [in the past], if they fear Allāh", "And believe [in Him] and do righteous", "Deeds and again, try to be pious and", "Believe, and again try to be pious and", "Do good deeds; [Know that] verily, Allāh", "Is Affectionate to the good-doers."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 94,
          lines: ["O, you who believe! Allāh will", "Surely try you [while you are in", "Pilgrim garb] with something about", "The game that your hands and your", "Lances can reach, in order that Allāh", "Might know who fears Him unseen;", "And whoever commits transgression", "[After this Decree] thereafter for him", "Shall be a painful Chastisement;"],
        },
        {
          type: "verse",
          number: 95,
          lines: ["O, you who believe! Do not kill any", "Game while you are in the pilgrim garb", "And whoever among you does so", "Intentionally, the expiation is the same", "Type of animal he killed, as judged by", "Two just men from among you and as", "An offering to be brought to Ka‘bah; or", "The expiation [of it] is the feeding", "The poor or the equivalent of it is", "Fasting, so that he may taste the penalty", "Of his act of disobedience. Allāh has", "Pardoned whatever was done in the past", "[Before this Decree]; and whoever", "Returns to it, then Allāh will take", "Revenge on anyone who does so, over", "Again. And Allāh is the Supreme", "Mighty Retributing;"],
        },
      ],
    },
    {
      bookPage: 208,
      blocks: [
        {
          type: "verse",
          number: 96,
          lines: ["Permitted to you is the sea-game", "And eating thereof, a provision for you", "And for the travellers; and forbidden to", "You is the land-game while you are in", "The pilgrim garb; and fear Allāh to", "Whom you shall be gathered [on the Day", "Of Resurrection];"],
        },
        {
          type: "verse",
          number: 97,
          lines: ["Allāh has placed Ka‘bah, the Sacred", "House a means of support for mankind;", "And also the Sacred months, [as resting", "Time from war] and the animals for", "Offerings and the garlands that mark", "Them [for their safety]; that is so since", "You should know that Allāh knows", "Whatever is in the heavens and on the", "Earth and Allāh indeed is the Knower of", "All things;"],
        },
        {
          type: "verse",
          number: 98,
          lines: ["Know that verily, Allāh is Severe in", "Punishment and yet Allāh is", "The Merciful Forgiving."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 99,
          lines: ["The Messenger’s duty is but to convey", "The Message. And Allāh is Aware of all", "That you people reveal and all that you", "Hide."],
        },
        {
          type: "verse",
          number: 100,
          lines: ["Say [O, Messenger!]: “Equal are", "Not the corrupt and the good, though", "The number of the corrupt may", "Please you.” O, you men of reason! So,", "Fear Allāh! so that you may receive", "Salvation."],
        },
      ],
    },
    {
      bookPage: 209,
      blocks: [
        {
          type: "verse",
          number: 101,
          lines: ["O, you who believe! Do not ask", "Questions about things which if made", "Plain to you, may cause you trouble;", "But if you ask about them while Qur’ān", "Is being revealed, they shall be", "Declared to you; Allāh has forgiven", "That [sort of questions you made", "Before] and Allāh is the Forbearing", "Forgiver;"],
        },
        {
          type: "verse",
          number: 102,
          lines: ["Some people, before you, asked", "Such questions and then on account", "Of them lost their Faith [since they", "Could not stand hearing the truth]."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 103,
          lines: ["Allāh has not appointed dedication for", "Camels such as Bahirah, Sāebah,", "Wassilah and Hām;{46} but the disbelievers", "Invented falsehood against Allāh; and", "Most of them do not use their reason;"],
        },
        {
          type: "verse",
          number: 104,
          lines: ["And when it is said to the pagans:", "“Come now to what Allāh has sent", "Down, and to the Messenger,” they", "Say: “Enough for us is what we found", "Our fathers believed in.” Even if", "Their fathers had no knowledge and", "Were not guided, [do they follow", "Them?]"],
        },
        {
          type: "verse",
          number: 105,
          continues: true,
          lines: ["O, you who believe! It is a duty", "On you the care of your own conduct:"],
        },
      ],
    },
    {
      bookPage: 210,
      blocks: [
        {
          type: "verse",
          number: 105,
          continued: true,
          lines: ["He who strays cannot harm you when", "You are guided on the right way; to", "Allāh is the return of you all, then [in the", "Hereafter] He shall inform you of", "That which you used to do [in this", "World]."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 106,
          lines: ["O, you who believe! When death", "Approaches one of you, call to witness", "Two just persons from among", "Yourselves, when making a bequest;", "Or two others from other than you, if", "You are travelling in the land and if", "The calamity of death approaches you;", "Detain the two [witnesses] after their", "Prayers, then if you suspect them, they", "Should both swear by Allāh, saying:", "“We will not sell this witnessing for any", "Price, though the beneficiary be a", "Kinsman, and we will not hide", "The testimony of Allāh; [if we do]", "Certainly we shall be among", "The sinners.”"],
        },
        {
          type: "verse",
          number: 107,
          lines: ["If then it gets disclosed that those", "Two [witnesses] had committed the sin", "Of perjury, let two others stand in their", "Place; [the two nearest in kin and]", "From among those who have a claim,", "And they should swear by Allāh,", "Saying: “Our testimony is truer than", "The testimony of those two; and we", "Have not exceeded the limit, in such", "Case, we would be [before Allāh]", "Among the transgressors.”"],
        },
      ],
    },
    {
      bookPage: 211,
      blocks: [
        {
          type: "verse",
          number: 108,
          lines: ["That is more appropriate and", "Closer to the fact that their testimony", "Would be in its true shape, and for", "Them to fear that you may check back", "By means of other oaths following their", "Oaths. And fear from the disobedience", "Of Allāh and listen [to Allāh’s", "Commands and know that] Allāh does", "Not guide the people who are", "Rebellious and disobedient."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 109,
          lines: ["[O, Messenger!] Be reminded of", "The Day when Allāh will gather", "The Messengers together and will ask", "Them: “What was the response you", "Received from mankind to your", "Guidance and teachings?” They will", "Say: “We have no knowledge; you are", "The Absolute Knower of the hidden", "Secrets.”"],
        },
        {
          type: "verse",
          number: 110,
          continues: true,
          lines: ["Then Allāh will state: “O, Īssā, son of", "Maryam! Recount My Favour to you", "And to your mother when I confirmed", "You with Jibrāīl so that you could", "Speak to the people in the cradle and", "In maturity [as a Messenger]; and when", "I taught you the Book and Wisdom,", "The Taurāt and the Injīl; and when", "You made out of clay the figure of", "The bird by My Leave, you breathed", "Into it and it became a bird by My", "Leave; and you healed those born-blind", "And the lepers by My Leave and when", "You brought the dead to life by My"],
        },
      ],
    },
    {
      bookPage: 212,
      blocks: [
        {
          type: "verse",
          number: 110,
          continued: true,
          lines: ["Leave. And also when I withheld", "The Children of Isrāīl from harming", "You and when you came to them with", "Evident Signs and Miracles and", "The disbelievers among them said:", "“This is nothing but obvious magic.”"],
        },
        {
          type: "verse",
          number: 111,
          lines: ["And [O, Messenger! be reminded] when", "I inspired the Disciples [of Īssā]", "To believe in Me and My Messenger,{47}", "They said: [O, our Creator&Nurturer]", "“We believe and bear witness upon our", "Submission to Allāh as Muslims.”"],
        },
        {
          type: "verse",
          number: 112,
          lines: ["And the Disciples said: “O, Īssā, son of", "Maryam! Can your Creator&Nurturer", "Send down to us a Heavenly Food", "From the heaven?” Īssā said: “Fear", "Allāh if you are true believers.”{48}"],
        },
        {
          type: "verse",
          number: 113,
          lines: ["They{49} said: “We wish to eat from", "It and that our hearts be at rest and", "That we may know that you have", "Spoken the truth to us and we", "Ourselves, be the witnesses upon it.”{50}"],
        },
        {
          type: "verse",
          number: 114,
          continues: true,
          lines: ["[Then] Īssā, son of Maryam, said:", "“O, Allāh, our Creator & Nurturer!", "Send us some Heavenly Food that it", "May be a festival and a Sign from You", "For us, for the first and the last"],
        },
      ],
    },
    {
      bookPage: 213,
      blocks: [
        {
          type: "verse",
          number: 114,
          continued: true,
          lines: ["Of us. [O, our Creator&Nurturer!]", "Provide us sustenance and You are", "The Source-Sustainer.”"],
        },
        {
          type: "verse",
          number: 115,
          lines: ["Allāh stated: “I will send it down", "To you, but whoever shall disbelieve", "Thereafter among you, verily, I will", "Chastise him with a Chastisement which", "I have not inflicted anyone in", "The world, before.”"],
        },
        {
          type: "verse",
          number: 116,
          lines: ["And [also] on that Day Allāh will state:", "“O, Īssā, son of Maryam! Did you say", "To men take me and my mother for two", "Gods apart from Allāh?” He will say: “You", "Are Pure and Exalted from having", "Partners! It is not for me to say what", "Is not right. If I had said it", "You would have known it, since You", "Know what is in my soul, but I do not", "Know what is in You. You are", "The Absolute Knower of the hidden", "Secrets.”"],
        },
        {
          type: "verse",
          number: 117,
          lines: ["[Īssā also will say:] “I did not say to", "Them anything except what You did", "Command me; [I said:] “Worship", "Allāh, my Creator&Nurturer and", "Your Creator&Nurturer.” And I was", "A witness over them as long as I was", "Among them; when You took me up,", "You Yourself were the Watcher over", "Them, and You are the Witness over", "All things.”"],
        },
      ],
    },
    {
      bookPage: 214,
      blocks: [
        {
          type: "verse",
          number: 118,
          lines: ["[Īssā also will say:] “If You decide", "To chastise them; verily, they are Your", "Own creatures [and You have the right", "To do so] and if You forgive them,", "Verily, You are the Source-Wisdom", "Supremepower [and no one can", "Protest].”"],
        },
        {
          type: "verse",
          number: 119,
          lines: ["Allāh will state: “This is the Day on", "Which the truthful will benefit from", "Their truth: For them shall be", "The Gardens in which streams flow;", "They will abide therein forever; Allāh", "Well-Pleased with them and they", "Well-pleased with Allāh; and that is", "Indeed the Great Achievement.”"],
        },
        {
          type: "verse",
          number: 120,
          lines: ["To Allāh belongs the Dominion of", "The heavens and the earth and all that", "Is in them; and Allāh is Powerful over", "All things."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "Rites and ceremonies in connection with the pilgrimage and places where these ceremonies are performed are also known by this name. (M.M)" },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "According to majority of the Commentators Allāh’s Words concerning perfection of religion and completion of His Favour was revealed after Holy Messenger’s last pilgrimage when by Allāh’s Command he appointed Imām Ali (A.S) as his successor. (See note on 5:67)" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "The meat of the animal slaughtered by the people of the Book is excluded, unless the slaughterer mentions Allāh’s Name while slaughtering the animal." },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "Official marriage with Muslim women and temporary marriage with the chaste women of the people of the Book" },
      ],
    },
    {
      id: 5,
      blocks: [
        { kind: "p", text: "Washing with untouched clean or soil where water is not available is named Tayammom and it is a substitute for ablution." },
      ],
    },
    {
      id: 6,
      blocks: [
        { kind: "p", text: "The evidence of the human nature through the covenant taken by Allāh from the children of ‘Ādam (7:172).Another covenant which can be referred to is in 3:193." },
      ],
    },
    {
      id: 7,
      blocks: [
        { kind: "p", text: "From the disobedience of Allāh’s Commands" },
      ],
    },
    {
      id: 8,
      blocks: [
        { kind: "p", text: "Helping the poor financially for Allāh’s Sake; also free loan (without taking usury)" },
      ],
    },
    {
      id: 9,
      blocks: [
        { kind: "p", text: "Christians" },
      ],
    },
    {
      id: 10,
      blocks: [
        { kind: "p", text: "Not to deviate from Monotheism" },
      ],
    },
    {
      id: 11,
      blocks: [
        { kind: "p", text: "They became divided into sects and controvertial religious groups by Allāh’s Command." },
      ],
    },
    {
      id: 12,
      blocks: [
        { kind: "p", text: "The Holy Qur’ān" },
      ],
    },
    {
      id: 13,
      blocks: [
        { kind: "p", text: "Jerusalem" },
      ],
    },
    {
      id: 14,
      blocks: [
        { kind: "p", text: "Hārūn" },
      ],
    },
    {
      id: 15,
      blocks: [
        { kind: "p", text: "The Jews" },
      ],
    },
    {
      id: 16,
      blocks: [
        { kind: "p", text: "Hābīl and Qābīl" },
      ],
    },
    {
      id: 17,
      blocks: [
        { kind: "p", text: "Qābīl" },
      ],
    },
    {
      id: 18,
      blocks: [
        { kind: "p", text: "To stop man-slaughtering among the society" },
      ],
    },
    {
      id: 19,
      blocks: [
        { kind: "p", text: "Reference is made to the Isrāīliets, because man slaughtering out of envy and racism and killing Allāh’s Messengers was very common among the Jewish people. (Tafssire Nemūneh)" },
      ],
    },
    {
      id: 20,
      blocks: [
        { kind: "p", text: "Reference is made to the Jewish Rabbis" },
      ],
    },
    {
      id: 21,
      blocks: [
        { kind: "p", text: "The priests" },
      ],
    },
    {
      id: 22,
      blocks: [
        { kind: "p", text: "The Holy Qur’ān" },
      ],
    },
    {
      id: 23,
      blocks: [
        { kind: "p", text: "People of the Book" },
      ],
    },
    {
      id: 24,
      blocks: [
        { kind: "p", text: "People of the Book" },
      ],
    },
    {
      id: 25,
      blocks: [
        { kind: "p", text: "With the Jews and the Christians" },
      ],
    },
    {
      id: 26,
      blocks: [
        { kind: "p", text: "Commentators have reported that the reference is made to Salmān Fārsī and his people i.e., the people of Iran." },
      ],
    },
    {
      id: 27,
      blocks: [
        { kind: "p", text: "Ali (A.S) gave his ring to a poor when he was bowing down in prayer" },
      ],
    },
    {
      id: 28,
      blocks: [
        { kind: "p", text: "See note on 2:65" },
      ],
    },
    {
      id: 29,
      blocks: [
        { kind: "p", text: "See note on 3:181" },
      ],
    },
    {
      id: 30,
      blocks: [
        { kind: "p", text: "Between the Christians and the Jews" },
      ],
    },
    {
      id: 31,
      blocks: [
        { kind: "p", text: "The Paradise" },
      ],
    },
    {
      id: 32,
      blocks: [
        { kind: "p", text: "The Holy Qur’ān" },
      ],
    },
    {
      id: 33,
      blocks: [
        { kind: "p", text: "This Word of Revelation was sent down from Allāh to the Holy Messenger, on returning from his last pilgrimage which is known as ‘The Farewell Pilgrimage’. It was upon this Divine Command that the Holy prophet appointed Ali (AS)as his successor, in a place called Ghadīr-e-Khom. To introduce him to the people of the caravans who had performed their pilgrimage along with the Messenger, he said: ‘Ali is the master and the leader of those whose master and leader I am.’ And then he prayed: ‘O, Allāh! Please be Favouring to those who are his friends, and be against those who are his enemies.’ And the Messenger ordered the assembly to make allegiance with him. Umar-ibn-e-Khattāb later the 2nd Khalīf was the first one who made allegiance with Ali (AS) and congratulated him by saying: ‘O, son of Abu Tālib!you are my master and every believer’s master. ’(Commentators)" },
      ],
    },
    {
      id: 34,
      blocks: [
        { kind: "p", text: "The Holy Qur’ān" },
      ],
    },
    {
      id: 35,
      blocks: [
        { kind: "p", text: "This ‘Āyat was abrogated by 3:85 (Commentators)" },
      ],
    },
    {
      id: 36,
      blocks: [
        { kind: "p", text: "The Messengers" },
      ],
    },
    {
      id: 37,
      blocks: [
        { kind: "p", text: "Those who believed in Trinity" },
      ],
    },
    {
      id: 38,
      blocks: [
        { kind: "p", text: "Jesus son of Mary" },
      ],
    },
    {
      id: 39,
      blocks: [
        { kind: "p", text: "They used to eat food as other human beings, whereas Allāh, the Exalted, does not eat." },
      ],
    },
    {
      id: 40,
      blocks: [
        { kind: "p", text: "By Allāh’s Command, Dāwūd cursed the Sabath- breakers and Īssā Massīh cursed those who after receiving ‘the Heavenly Food’, nevertheless they persisted in their denial and disbelief." },
      ],
    },
    {
      id: 41,
      blocks: [
        { kind: "p", text: "The Jews professed belief in the Unity of Allāh, yet they made a common cause with the idolaters of Quraish to uproot Islām which was a religion of pure Monotheism (M.M)" },
      ],
    },
    {
      id: 42,
      blocks: [
        { kind: "p", text: "The Muslims" },
      ],
    },
    {
      id: 43,
      blocks: [
        { kind: "p", text: "Christians" },
      ],
    },
    {
      id: 44,
      blocks: [
        { kind: "p", text: "The Holy Qur’ān" },
      ],
    },
    {
      id: 45,
      blocks: [
        { kind: "p", text: "Stones on which the idolaters sacrificed animals for their idols and were considered sacred." },
      ],
    },
    {
      id: 46,
      blocks: [
        { kind: "p", text: "Four camels which eating their meat was considered forbidden in the Time of Ignorance." },
      ],
    },
    {
      id: 47,
      blocks: [
        { kind: "p", text: "Jesus Christ" },
      ],
    },
    {
      id: 48,
      blocks: [
        { kind: "p", text: "Implying you should not mistrust Allāh’s Power by making such demand" },
      ],
    },
    {
      id: 49,
      blocks: [
        { kind: "p", text: "The Disciples of Jesus Christ" },
      ],
    },
    {
      id: 50,
      blocks: [
        { kind: "p", text: "The Miracle" },
      ],
    },
  ],
};

export default surah;
