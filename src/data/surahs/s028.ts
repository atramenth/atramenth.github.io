import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 28 · Al-Qassas — book pages 700–718 (verses 1–88, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 28,
  pages: [
    {
      bookPage: 700,
      heading: {
        title: "Al-Qassas",
        lines: ["(The Narratives)", "Revealed at Makkah", "88 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Tā.Sīn.Mīm{1}"] },
        { type: "verse", number: 2, lines: ["These are the Words of Revelation of", "The Divine Expositoring Book.{2}"] },
        {
          type: "verse",
          number: 3,
          lines: ["[O Messenger] We recite to you the story", "Of Mūssā and Firown from the Source of", "The Truth, so that the believers may", "Ponder about the Divine Wisdom."],
        },
        {
          type: "verse",
          number: 4,
          continues: true,
          lines: ["Indeed Firown rebelled and", "Considered himself above all in the land;", "And made its people into sects, [the", "Egyptians ruled over the Children of", "Isrāīl]; he slaughtered the sons of", "The Isrāīlites and left their", "Women alive to work as maids and"],
        },
      ],
    },
    {
      bookPage: 701,
      blocks: [
        {
          type: "verse",
          number: 4,
          continued: true,
          lines: ["Slave-girls;{3} he was indeed one of the", "Corrupt rulers of the history;"],
        },
        {
          type: "verse",
          number: 5,
          lines: ["But We Willed to bestow Our Favour", "On the oppressed Children of", "Isrāīl and make them the", "Governors and make them the heirs of", "The oppressors;"],
        },
        {
          type: "verse",
          number: 6,
          lines: ["And to grant them power in the land;", "And to make Firown, Hāmān and their", "Hosts see what they feared to happen;{4}"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["So We inspired Mūssā’s mother: “Suckle", "Him, but when you felt he is in danger", "[Put him in a chest] and cast him into", "The sea; do not fear and do not feel", "Distressed for We shall return him to", "You; and We will appoint him one of", "The Messengers of Ours.”"],
        },
        {
          type: "verse",
          number: 8,
          lines: ["Then the people of Firown took him up", "From the sea so that [by Allāh’s Will]", "To become their enemy and the source", "Of their grief. Verily, Firown, Hāmān", "And all their hosts were men given to", "Sin and guilt;"],
        },
        {
          type: "verse",
          number: 9,
          continues: true,
          lines: ["And Firown’s wife said: “He is a joy for", "My eyes and yours; do not kill him; we", "May benefit from his being with us; we", "Might as well choose him for a"],
        },
      ],
    },
    {
      bookPage: 702,
      blocks: [
        {
          type: "verse",
          number: 9,
          continued: true,
          lines: ["Step-son.” They did not know anything", "About his Ordained Fate;"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["The heart of Mūssā’s mother due", "To Allāh’s Promise became free from", "Anxiety. Had We not strengthened her", "Heart with Faith, she would have", "Disclosed the secret out of worry."],
        },
        {
          type: "verse",
          number: 11,
          lines: ["Mūssā’s mother told his sister:“Watch", "Him”, and she watched him from", "The distance and Firown’s people had", "No notion that they were being watched."],
        },
        {
          type: "verse",
          number: 12,
          lines: ["So We had Ordained forbidden{5} the milk", "Of others for him. So his sister", "Approached them{6} saying: “Do you want", "Me to introduce a caring nurse for your", "Baby?”"],
        },
        {
          type: "verse",
          number: 13,
          lines: ["So We returned him back to his mother,", "To be the joy of her eyes; and that she", "Should know that Allāh’s Promise is", "True, though most of people do not", "Know this;"],
        },
        {
          type: "verse",
          number: 14,
          lines: ["And when he attained the age of", "Maturity We bestowed on him Divine", "Wisdom and Knowledge; thus We", "Reward the good-doers!"],
        },
        { type: "verse", number: 15, continues: true, lines: ["And Mūssā entered the city at a time"] },
      ],
    },
    {
      bookPage: 703,
      blocks: [
        {
          type: "verse",
          number: 15,
          continued: true,
          lines: ["That people were busy and nobody", "Noticed his arrival, he found two men;", "One of his followers and one of his", "Enemies were quarrelling. The one who", "Was of his people cried for help; so", "Mūssā struck his foe with his fist upon", "Which he was killed. Mūssā said", "Reproaching himself: “This is on", "Account of Satan’s interference,", "Surely he is an enemy which leads man", "Astray quite openly.”"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["Mūssā prayed: “O my Creator&Nurturer! I", "Did wrong to myself, please forgive me.”", "So Allāh bestowed His Mercy upon him", "Since He is the Merciful Forgiving;"],
        },
        {
          type: "verse",
          number: 17,
          lines: ["Mūssā prayed: “O, my Creator&Nurturer!", "Since You bestowed a great favour on", "Me I will never back up the guilty ones.”"],
        },
        {
          type: "verse",
          number: 18,
          lines: ["Next day Mūssā was wandering in", "The city fearing that his murder may", "Have been disclosed when the same man", "Who had asked his help the day before", "Cried out for help against another", "Qibtīc man. Mūssā said: “You are indeed", "In an obvious error.”"],
        },
        {
          type: "verse",
          number: 19,
          continues: true,
          lines: ["So when he tried to get hold of him who", "Was an enemy to both of them, he said:", "“O, Mūssā! Do you want to kill me as", "You did kill another person yesterday?", "You only intend to be a tyrant in", "The land, and you do not intened to be"],
        },
      ],
    },
    {
      bookPage: 704,
      blocks: [
        { type: "verse", number: 19, continued: true, lines: ["One of the peacemakers among", "The community.”"] },
        {
          type: "verse",
          number: 20,
          lines: ["And a man came to him hurriedly from", "The remotest part of the city and said to", "Him: “O, Mūssā! The chiefs of Firown", "Are consulting about killing you, so", "Leave this city at your earliest; surely I", "Am a well-wisher of you.”"],
        },
        {
          type: "verse",
          number: 21,
          lines: ["So he left the city fearing that they may", "Seize him and prayed: “O, my", "Creator&Nurturer! Save me from", "The oppressive people.”"],
        },
        {
          type: "verse",
          number: 22,
          lines: ["And when he turned his face towards", "Madyan, he said: “May be my", "Creator&Nurturer will guide me to", "The Right Path.”"],
        },
        {
          type: "verse",
          number: 23,
          lines: ["And when he came to the watering", "Place of Madyan he saw a group of men", "Watering their cattle and he noticed that", "There were two women keeping back", "Their flock. He asked them: “ why are", "You keeping back?” They said: “We can", "Not water until the shepherds are out of", "Our way to the water; our father is", "An old man [so we have to do these kind", "Of affairs].”"],
        },
        {
          type: "verse",
          number: 24,
          lines: ["Mūssā watered their sheep for them and", "Then sat in a corner to the shade and", "Prayed: “O, my Creator&Nurturer! I am", "In need of whatever good you may send", "To me.”"],
        },
      ],
    },
    {
      bookPage: 705,
      blocks: [
        {
          type: "verse",
          number: 25,
          lines: ["Then one of the two women came to", "Him walking bashfully and said to him:", "“My father invites you to our house", "To pay your wage for watering our", "Sheep.”So when he came to Shuaib and", "Told him his story, he said: “Do not", "Fear! From now on you are secured", "From the tyrant people.”"],
        },
        {
          type: "verse",
          number: 26,
          lines: ["One of the girls said: “O, my father!", "Hire him; verily, the best man to be", "Hired; he is a strong and trusty man.”"],
        },
        {
          type: "verse",
          number: 27,
          lines: ["Shuaib said to Mūssā: “I intend to wed", "One of my daughters to you on", "The contract basis that you serve me for", "Eight years, but if you complete your", "Service for ten years, it will be a favour", "On your side; but know that I do not", "Intend to impose any hardship on you;", "If Allāh Wills you will find out that I am", "Of the righteous.”"],
        },
        {
          type: "verse",
          number: 28,
          lines: ["Mūssā said: “This is a contract between", "Me and you: Each of the two terms", "[Eight or ten years] that I manage to", "Complete, I will not consider it any", "Imposition on me: I do it with pleasure", "And Allāh is Witness to what we say", "Regarding this agreement.”"],
        },
        {
          type: "verse",
          number: 29,
          continues: true,
          lines: ["So when Mūssā completed his term, he", "Departed with his family from Madyan", "For Egypt. On his way he noticed a fire", "In the direction of Tūr Mount. He said"],
        },
      ],
    },
    {
      bookPage: 706,
      blocks: [
        {
          type: "verse",
          number: 29,
          continued: true,
          lines: ["To his people: “You better wait here; I", "See a fire; I go to get you some", "Information about the area or I may", "Bring you some burning fire that you", "May warm up yourselves [in this dark", "And cold night].”"],
        },
        {
          type: "verse",
          number: 30,
          lines: ["As he reached near the fire from", "The right side of the valley out of a", "Blessed tree he was addressed:", "“O, Mūssā! Verily, I am Allāh, the Creator", "Of the worlds;"],
        },
        {
          type: "verse",
          number: 31,
          lines: ["“Cast down your stick!” And", "Then it turned into a snake", "Moving quickly around, so Mūssā", "Feared and turned back in retreat and", "Even did not look back. [It was stated to", "Him:] “O, Mūssā! Come back and do not", "Fear, since you are one of those who are", "Secure."],
        },
        {
          type: "verse",
          number: 32,
          lines: ["“Now put your hand under your bosom", "And it will come forth radiant without", "Flaw{7} to the eyes of the beholders; and", "Draw your hand close to your side", "[And put your hands on your heart] to find", "Tranquility. With these two Miracles", "[Snake and the radiant hand] go to", "Firown and his chiefs. They are indeed a", "Rebellious and corrupt people.”"],
        },
        {
          type: "verse",
          number: 33,
          continues: true,
          lines: ["Mūssā said: “O, my Creator&Nurturer! I", "Have [unintentionally] killed one of"],
        },
      ],
    },
    {
      bookPage: 707,
      blocks: [
        { type: "verse", number: 33, continued: true, lines: ["Their men so I fear that they may kill", "Me;"] },
        {
          type: "verse",
          number: 34,
          lines: ["“And my brother Hārūn is more", "Eloquent in speech than me; if they", "Belie me he can argue with them", "Convincingly, so please send him along", "With me.”"],
        },
        {
          type: "verse",
          number: 35,
          lines: ["Allāh stated: “We will appoint your", "Brother as a strength of your arm and", "Will bestow such authority on both of", "You that they shall not be able to harm", "You. With Our Signs and Miracles", "Victory will be yours, you two and those", "Who follow you.”"],
        },
        {
          type: "verse",
          number: 36,
          lines: ["So when Mūssā, equipped with", "Our Signs and Miracles, came to them", "They said: “All these are magic and", "Forged lies; we have never heard such", "Things from our ancestors.”"],
        },
        {
          type: "verse",
          number: 37,
          lines: ["Mūssā said: “Verily, my", "Creator&Nurturer is the Knower of", "Those who have brought the Message of", "Guidance and Truth and only He Knows", "To whom belongs the good end: Surely", "The disbelievers and the wrongdoers will", "Not receive salvation.”"],
        },
        {
          type: "verse",
          number: 38,
          continues: true,
          lines: ["Firown said: “O, my chiefs! I do not", "Know any god for you but myself;", "However you O, Hāmān provide a", "Fire to make bricks out of clay and build", "Me a lofty tower with the bricks so that"],
        },
      ],
    },
    {
      bookPage: 708,
      blocks: [
        {
          type: "verse",
          number: 38,
          continued: true,
          lines: ["I can climb up to the heavens to get", "Some information of Mūssā’s God.", "However to Me Mūssā is but a liar.”"],
        },
        {
          type: "verse",
          number: 39,
          lines: ["Firown and his hosts were arrogantly", "Rebellious in the land; and they vainly", "Thought that they would not return to", "Us [since they did not believe in the Day", "Of Resurrection]."],
        },
        {
          type: "verse",
          number: 40,
          lines: ["So We seized Firown and his hosts", "Suddenly and drowned them in the sea.", "So see how was the end of", "The wrongdoers;"],
        },
        {
          type: "verse",
          number: 41,
          lines: ["And We appointed them ringleaders", "Inviting their own kind to the Hell", "Fire; and on the Day of Judgement they", "Shall not find any helper;"],
        },
        {
          type: "verse",
          number: 42,
          lines: ["And in this world We made a Curse", "To follow them and on the Day of", "Judgement they will be included among", "The most despised ones."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 43,
          lines: ["After We had destroyed the earlier", "Disbelieving generations We did Bestow", "To Mūssā the Book of Guidance and", "Grace to give insight to men so that they", "May be reminded;"],
        },
        {
          type: "verse",
          number: 44,
          continues: true,
          lines: ["And you [O, Messenger!] were not", "Present and witness on the west side of", "The Mount when We talked to Mūssā", "And raised him as a Messenger; and you"],
        },
      ],
    },
    {
      bookPage: 709,
      blocks: [
        { type: "verse", number: 44, continued: true, lines: ["Were not the witness of the whole", "Divine Event;"] },
        {
          type: "verse",
          number: 45,
          lines: ["We created other generations and", "They were bestowed a long life and you", "Did not live among the people of", "Madyan to recite Our Words of", "Revelation to them; We were the One", "Who kept on sending Messengers;"],
        },
        {
          type: "verse",
          number: 46,
          lines: ["And you were not on the side of Tūr", "Mount when We addressed Mūssā, but", "Now you are sent as a Grace from", "Your Creator&Nurturer to a people", "Who spent life for a long time", "Without a Messenger, so that they", "May be reminded;"],
        },
        {
          type: "verse",
          number: 47,
          lines: ["Had We not sent you to them for their", "Guidance and had We afflicted them", "With calamities for their wrongdoings", "They would have complained saying:", "“O, our Creator! Why did You not send", "Us a Messenger? Had You sent us a", "Messenger we would have followed Your", "Revelations and Decrees and we would", "Have certainly been of the believers.”"],
        },
        {
          type: "verse",
          number: 48,
          continues: true,
          lines: ["And now that the Truth [the Qur’ān", "And the Messenger] are sent to them", "From Our Presence, they say: “Why", "Signs and Miracles are not sent to him", "Like the ones which were given to", "Mūssā?” The disbelievers of the time of", "Mūssā reacted the same to the Signs and", "Miracles and called him and his brother"],
        },
      ],
    },
    {
      bookPage: 710,
      blocks: [
        {
          type: "verse",
          number: 48,
          continued: true,
          lines: ["Hārūn two magicians who assisted one", "Another to bewitch the people in order", "To possess their land and territory.” And", "Also they said: “We disbelieve in both of", "Them.”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 49,
          lines: ["Say [O, Messenger!]: “If you tell", "The truth bring a Book better than", "Those two which are from Allāh’s", "Presence so that I may follow it.”"],
        },
        {
          type: "verse",
          number: 50,
          lines: ["So if they did not accept your call", "[Which they do not], be sure that", "They only follow their own vain desires", "And who is more astray than the one", "Who in place of Allāh follows his own", "Vain desires? Verily, Allāh does not", "Guide the self-oppressing", "[i.e., disbelieving] people."],
        },
        {
          type: "verse",
          number: 51,
          lines: ["For the guidance of this people", "We bring Our Words of Revelation", "Connected to one another [meaning wise]", "That they may learn better;"],
        },
        {
          type: "verse",
          number: 52,
          lines: ["Those to whom We have given", "The Scripture before the Holy", "Qur’ān [i.e., Christians] believe in it", "[Because they recognize the Signs as", "Appeared in their own Books];"],
        },
        {
          type: "verse",
          number: 53,
          continues: true,
          lines: ["And when the Words of Revelation are", "Recited to them, they say: “We believe", "In the Holy Qur’ān. This is the Word of", "Truth from our Creator and before this"],
        },
      ],
    },
    {
      bookPage: 711,
      blocks: [
        {
          type: "verse",
          number: 53,
          continued: true,
          lines: ["Also we have been Muslims: [Submissive", "To the Will of Allāh.]”"],
        },
        {
          type: "verse",
          number: 54,
          lines: ["Such believers [of the people of", "The Book] will receive their reward", "Double, since they were patient and", "Hopeful [for the Appearance of Islām]", "And they repel evil with good and they", "Spend in charity out of what we have", "Bestowed on them as sustenance;"],
        },
        {
          type: "verse",
          number: 55,
          lines: ["And when they are in a circle and they", "Hear idle talks regarding their religion", "They either change the discourse or", "Leave the place saying: “Our deeds we", "Are responsible for and your deeds you", "Are responsible for; farewell to you! we", "Are not in any accordance with", "The ignorants.”"],
        },
        {
          type: "verse",
          number: 56,
          lines: ["Verily, you cannot [O, Messenger!]", "Guide whomever you care for but", "Allāh guides whomever He Wills, since", "He is the Supreme Knower of those", "Prone to guidance."],
        },
        {
          type: "verse",
          number: 57,
          continues: true,
          lines: ["They say: “If we were to follow your", "Guidance the enemies of Islām might", "Deprive us of our secure positions, they", "Might even kidnap us.” The answer is", "Have We not turned a bewildered desert", "Into a secure sanctuary, a city which", "From all other lands and cities receives", "Imports from all things and fruits and", "Sustenance from all kinds? These are all", "Provided from Our Presence; but verily,"],
        },
      ],
    },
    {
      bookPage: 712,
      blocks: [
        { type: "verse", number: 57, continued: true, lines: ["Most of them are ignorants;"] },
        {
          type: "verse",
          number: 58,
          lines: ["And how many inhabitants of the cities", "That We destroyed, they were proud and", "Ungodly due to their well-being and", "Over abundance of bounties; and now", "These are their deserted abodes", "Which only a few were occupied after", "Them, and We are their Heirs;"],
        },
        {
          type: "verse",
          number: 59,
          lines: ["And never your Creator&Nurturer", "Destroyed a town before raising up a", "Messenger to recite to them Our", "Revelations. And We never destroy a", "Land unless its people are", "Transgressors."],
        },
        {
          type: "verse",
          number: 60,
          lines: ["O, People! Whatever you are bestowed", "Is the material and ornament of this", "Worldly life but what is with Allāh is", "The real good and enduring; do you not", "Use your reason?"],
        },
        {
          type: "verse",
          number: 61,
          lines: ["Is the believer whom We have bestowed", "An excellent promise and who will attain", "Its fulfillment, like the one whom We", "Have given all bounties in his wordly life", "Yet he will be called for his account and", "Punishment on the Day of Judgement?"],
        },
        {
          type: "verse",
          number: 62,
          lines: ["On the Day of Judgement Allāh will call", "To them stating: “Where are those", "Whom you considered as partners", "For Me?”"],
        },
      ],
    },
    {
      bookPage: 713,
      blocks: [
        {
          type: "verse",
          number: 63,
          lines: ["Those against whom the Word of", "Punishment is fulfilled will confess:", "“O, our Creator! These are the ones", "Whom we led astray, since we were", "Astray ourselves; we detest having any", "Attachment to them; they did not", "Worship us [but they worshipped their", "Own vain desires].”"],
        },
        {
          type: "verse",
          number: 64,
          lines: ["It will be stated to them: “Now call", "Upon those whom you considered", "Partners for Allāh!” They will call upon", "Them, but they receive no response", "Whatsoever; they can only see they are", "Encircled by the Chastisement and there", "Is no help. Then they will desire if only", "They had submitted to the Divine", "Guidance;"],
        },
        {
          type: "verse",
          number: 65,
          lines: ["On that Day, it will be stated to them:", "“What was your reaction to the guidance", "Of your Messengers?”"],
        },
        {
          type: "verse",
          number: 66,
          lines: ["On that Day all the news of the events", "Is hidden from them; they receive no", "Information from any source; they do", "Not make inquiries from each other", "[Since they are all on the same boat:", "They have access to nowhere];"],
        },
        {
          type: "verse",
          number: 67,
          lines: ["But the one who has repented and", "Believed and has done the righteous", "Deeds [according to Allāh’s Promise] is", "Hopeful to be among those who receive", "Salvation."],
        },
      ],
    },
    {
      bookPage: 714,
      blocks: [
        {
          type: "verse",
          number: 68,
          lines: ["And your Creator&Nurturer creates", "Whatever He Wills and the Decision and", "Choice remains only with Him about all", "Creatures and things, but the false", "Deities have no power of choice.", "Allāh is Absolute Pure and far", "Above having any partner whatsoever."],
        },
        {
          type: "verse",
          number: 69,
          lines: ["And your Creator&Nurturer Knows of", "What they hide in their hearts and what", "They disclose."],
        },
        {
          type: "verse",
          number: 70,
          lines: ["There is no God but Allāh,", "Thanksgiving and adoration of", "The worshippers is only due to Him", "From the begining to the end both in", "This world and in the Hereafter; He is", "The Owner of the Command and to him", "You all will be returned."],
        },
        {
          type: "verse",
          number: 71,
          lines: ["Say [O, Messenger!]: “If Allāh had", "Decided to make the night enduring to", "The Day of Judgement and man’s life", "Was to be covered in the veil of night,", "Who but Allāh the Almighty could bring", "Light to your life? Will you not listen to", "The Truth?”"],
        },
        {
          type: "verse",
          number: 72,
          lines: ["Say [O, Messenger!]: “Have you ever", "Thought if Allāh had decided to make", "The day enduring to the Day of", "Judgement, who but Allāh,", "The Almighty could create for you", "The night in which you could rest? Will", "You not see?”"],
        },
      ],
    },
    {
      bookPage: 715,
      blocks: [
        {
          type: "verse",
          number: 73,
          lines: ["So it is of Allāh’s Grace and Embracing", "Knowledge that He created Night and", "Day succeeding one another, in order", "That you may rest at night and work in", "The day time to seek sustenance from", "His bounties; and it is upon you to be", "Greatful to His Favour."],
        },
        {
          type: "verse",
          number: 74,
          lines: ["On the Day of Judgement Allāh will call", "On the disbelievers stating: “Where are", "Those whom you considered as partners", "For Me?”"],
        },
        {
          type: "verse",
          number: 75,
          lines: ["And for each nation We call their", "Messenger for witness;{8} then We will", "State: “Now bring your proof in", "Defending yourselves against", "The complaint of your Messenger.” Then", "It is the time that they get to know that", "Allāh is the Absolute Truth; and all", "Their lies that they fabricated about", "The importance of their false deities", "Have been perished."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 76,
          lines: ["Qārūn was one of the wealthy men", "Among the people of Mūssā but he", "Wronged them. We had bestowed on him", "So much of wealth and treasures that", "Even carrying the keys of them were", "Hard on a group of strong porters. So", "Men of his folk reminded him repeatedly", "Saying: “Do not be so proud and do not", "Be joyous over your wealth since Allāh", "Does not like the ungodly joyous men;"],
        },
      ],
    },
    {
      bookPage: 716,
      blocks: [
        {
          type: "verse",
          number: 77,
          lines: ["[And they also admonished him saying:]", "“Use some of the wealth which Allāh has", "Bestowed on you for your Hereafter by", "Spending in charity. Do not forget that", "Your portion of wordly life have some", "Limit, you should spend the rest; and be", "Good and generous to the people as", "Allāh has been good and generous to", "You; and do not make mischief due to", "Your worldly power and wealth since", "Allāh does detest the corrupt.”"],
        },
        {
          type: "verse",
          number: 78,
          lines: ["Qārūn said to the preachers of his", "People: “This wealth of mine has been", "Provided through my knowledge,", "Intelligence and hard efforts.” Did he", "Not know that Allāh had indeed", "Destroyed before him so many", "Generations who were much more", "Distinguished than him regarding wealth", "And men? But when the Chastisement", "Befalls, the sinful have no respite", "To defend themselves because then", "The sinful will not be questioned;"],
        },
        {
          type: "verse",
          number: 79,
          lines: ["So once that Qārūn appeared in", "Front of his folk with all his glory and", "Glitter, those who loved the ornament", "Of worldly life said: “If only we had", "The like of what Qārūn has obtained of", "Wealth, for he indeed enjoys his great", "Amount of wealth and luxury.”"],
        },
        {
          type: "verse",
          number: 80,
          continues: true,
          lines: ["But the believers who had been", "Bestowed Faith and knowledge said:", "“Woe on you for these mean thoughts!"],
        },
      ],
    },
    {
      bookPage: 717,
      blocks: [
        {
          type: "verse",
          number: 80,
          continued: true,
          lines: ["The reward of Allāh is better for those", "Who have Faith and do good deeds; but", "This reward is only bestowed on those", "Who are patient and steadfast in", "The Path of their Faith.”"],
        },
        {
          type: "verse",
          number: 81,
          lines: ["Then We Commanded the earth to", "Swallow him and his palace altogether.", "And he had no host to help him against", "Allāh’s Command and he himself could", "Not take any revenge;"],
        },
        {
          type: "verse",
          number: 82,
          lines: ["Following the affliction those who", "Wished the day before to be in place of", "Qārūn said: “Indeed Allāh is the One", "Who expands the sustenance for his", "Worshippers or restricts it according to", "His Will. Had it not been for the Grace", "Of Allāh upon us, we would have also", "Been swallowed up by the earth; and", "Indeed the disbelievers will not receive", "Salvation.”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 83,
          lines: ["We have appointed Paradise as the Last", "Home for those who do not intend", "To make rebellion and corruption in", "The life of this world; and therefore", "The best end belongs to the pious;"],
        },
        {
          type: "verse",
          number: 84,
          lines: ["The one who is a good doer his reward", "From Allāh the Grace-Bestower is far", "More than he has done, but those who", "Do wrong their punishment is exactly to", "The level of their deeds."],
        },
      ],
    },
    {
      bookPage: 718,
      blocks: [
        {
          type: "verse",
          number: 85,
          lines: ["[O, Messenger!] Verily, the One Who", "Ordained for you the teaching of", "The Qur’ān to mankind, can surely", "Bring you back to the place of", "Return [i.e. , Makkah];{9} say to these", "People: “My Creator&Nurturer is", "The Supreme Knower about those who", "Are men of guidance and those who are", "Astray.”"],
        },
        {
          type: "verse",
          number: 86,
          lines: ["And you did not hope that this Book of", "The Divine Unity would be revealed to", "You, but the Grace of Allāh bestowed it", "Upon you, so never in your life be a", "Supporter of the disbelievers;"],
        },
        {
          type: "verse",
          number: 87,
          lines: ["And do not let the disbelievers hinder", "You from Allāh’s Words of Revelation", "After they are sent down to you; and", "Invite people to your Creator&Nurturer;", "And never be of those who consider", "Partners for Allāh;"],
        },
        {
          type: "verse",
          number: 88,
          lines: ["Do not worship but Allāh Who", "Is the only God. Every thing will", "Eventually be perished except the Holy", "Existence of Allāh, the Eternal Live;", "Command belongs to Him only; and to", "Him you will all be brought back."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "See note on 2:1" },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "The Preserved Book; The Book of Allāh’s Recorded Knowledge" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "Since the soothsayers had published the news that a son from among the Children of Isrāīl will destroy the dynasty of Firown" },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "The rule of the Children of Isrāīl as it had been foreseen by the fortune-tellers." },
      ],
    },
    {
      id: 5,
      blocks: [
        { kind: "p", text: "The baby refused to suck the nurses’ breasts." },
      ],
    },
    {
      id: 6,
      blocks: [
        { kind: "p", text: "Firown’s men" },
      ],
    },
    {
      id: 7,
      blocks: [
        { kind: "p", text: "Without a disease [of leprosy]" },
      ],
    },
    {
      id: 8,
      blocks: [
        { kind: "p", text: "See 4:41" },
      ],
    },
    {
      id: 9,
      blocks: [
        { kind: "p", text: "The Holy Messenger was sad at heart on his way to Madīnah in his Emigration journey when this Word of Revelation was sent down from his Grace-Bestowing Creator; it was a consolation as well as a promise which was fulfilled later by the event of Makkah Conquest." },
      ],
    },
  ],
};

export default surah;
