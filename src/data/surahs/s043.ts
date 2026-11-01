import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 43 · Az-Zukhruf — book pages 907–920 (verses 1–89, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 43,
  pages: [
    {
      bookPage: 907,
      heading: {
        title: "Az-Zukhruf",
        lines: ["(The Ornaments)", "Revealed at Makkah", "89 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Hā. Mīm{1}"] },
        { type: "verse", number: 2, lines: ["By the Expositoring Book of the Divine", "Truth"] },
        {
          type: "verse",
          number: 3,
          lines: ["That We did send this Qur’ān in Arabic", "Language in order that you be able", "To understand it and therefore ponder", "About its meanings;"],
        },
        {
          type: "verse",
          number: 4,
          lines: ["And verily, Qur’ān is taken from", "The Mother of the Book which is with", "Us, and it is the Exalted Wisdom-", "Teaching Book.{2}"],
        },
        {
          type: "verse",
          number: 5,
          lines: ["Shall We then disregard to send down", "The Reminder which is for all mankind", "Just because you are an extremely", "Transgressing people?"],
        },
      ],
    },
    {
      bookPage: 908,
      blocks: [
        { type: "verse", number: 6, lines: ["We did send so many Messengers to", "The people of the old,"] },
        { type: "verse", number: 7, lines: ["And they mocked at every of them", "Without any exception,"] },
        {
          type: "verse",
          number: 8,
          lines: ["So We did destroy those disbelievers", "Who were much stronger than these", "Pagans of Quraish; and their stories", "Have been stated in the former", "Revelations."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 9,
          lines: ["If you [O, Messenger] ask them “Who is", "The Creator of the heavens and", "The earth?” They will surely say: “These", "Were created by the Knowing Invincible", "Mighty;”"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["The One Who has made the earth a", "Resting place for you; and He has", "Devised for you roads through which", "You can reach the destinations that you", "Aim;"],
        },
        {
          type: "verse",
          number: 11,
          lines: ["And He is the One Who sends down", "Rain from the sky sufficiently; and raises", "To life the dead and lack of herbage", "Lands; and such is the way that you will", "Be raised from your graves [in", "The Hereafter];"],
        },
        {
          type: "verse",
          number: 12,
          lines: ["And Allāh is the One Who created all", "Creatures in pairs; and has made for you", "Ships and cattle on which you ride,"],
        },
      ],
    },
    {
      bookPage: 909,
      blocks: [
        {
          type: "verse",
          number: 13,
          lines: ["And when you are riding on their backs", "Firm and settled, then you may", "Remember the Favour of your", "Creator&Nurturer by saying: “Absolute", "Pure is the One Who subjected this for", "Us, since We ourselves could never do", "That,"],
        },
        { type: "verse", number: 14, lines: ["“And to our Creator&Nurturer surely", "We return.”"] },
        { type: "divider" },
        {
          type: "verse",
          number: 15,
          lines: ["And these pagans have allocated some", "Portion for Allāh from among His", "Creatures: [And they say Angels", "Are His daughters]. Verily, man is an", "Ingrateful creature;"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["Has Allāh chosen daughters for Himself", "Out of what He has created and has", "Chosen sons for you?"],
        },
        {
          type: "verse",
          number: 17,
          lines: ["And when any of them who pronounces", "That Angels are Ar-Rahmān’s", "Daughters is informed of the birth of a", "Daughter, his face darkens out of fury", "And tries to hide his grief;"],
        },
        {
          type: "verse",
          number: 18,
          lines: ["Do they consider a child for Allāh from", "Among those who are brought up", "Among nice dresses and ornaments and", "Do not show up in the scenes of wars", "And quarrels?"],
        },
        { type: "verse", number: 19, continues: true, lines: ["And they believe that all Angels,"] },
      ],
    },
    {
      bookPage: 910,
      blocks: [
        {
          type: "verse",
          number: 19,
          continued: true,
          lines: ["The obedient creatures of Allāh, are", "Female. Were they present at the time of", "Their creation? Their evidence will be", "Recorded and they will be questioned", "Regarding their claim."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 20,
          lines: ["And these pagans have said: “If it had", "Not been the Will of Ar-Rahmān we", "Would not have worshipped these idols.", "They say these out of ignorance; they", "Say nothing but lies;"],
        },
        { type: "verse", number: 21, lines: ["Have We given them any Book before,", "To which they refer now?"] },
        {
          type: "verse",
          number: 22,
          lines: ["The Truth is that they say: “We follow", "The footsteps of our forefathers in", "The religion which they practiced.”"],
        },
        {
          type: "verse",
          number: 23,
          lines: ["And before you [O, Messenger]", "The wealthy disbelievers used to say", "To their Messengers: “We only believe", "In the religion which our ancestors", "Believed in and we surely follow their", "Footsteps”"],
        },
        {
          type: "verse",
          number: 24,
          lines: ["And every one of the Messenger would", "Answer them: “Even if I have brought", "You a better guidance than what your", "Ancestors believed in?” They would", "Reply: “Even so we deny any Message", "That you be the Messenger of it.”"],
        },
        { type: "verse", number: 25, continues: true, lines: ["So [through the Divine Chastisement]"] },
      ],
    },
    {
      bookPage: 911,
      blocks: [
        {
          type: "verse",
          number: 25,
          continued: true,
          lines: ["We took a severe revenge on them; so", "See what was the doom of those who", "Denied the Truth!"],
        },
        {
          type: "verse",
          number: 26,
          lines: ["Once Ibrāhīm said to his father and his", "People: “I do realy detest what you", "Worship,"],
        },
        {
          type: "verse",
          number: 27,
          lines: ["“I only worship Allāh, the One Who", "Created me and He will certainly guide", "Me Himself.”"],
        },
        {
          type: "verse",
          number: 28,
          lines: ["And he left his creed of Monotheism", "Among those who came after him, so", "That they may return to it from idolatry."],
        },
        {
          type: "verse",
          number: 29,
          lines: ["I have given indeed all good things of", "This life to this people as I did give to", "Their ancestors [and they enjoyed their", "Worldly life] until the Truth of Qur’ān", "And its Expositoring Messenger came to", "Them,"],
        },
        {
          type: "verse",
          number: 30,
          lines: ["Then they turned away from the Truth{3}", "Saying: “This is but magic and we", "Disbelieve in it”"],
        },
        {
          type: "verse",
          number: 31,
          lines: ["And they also said: “Why among", "The affluent men of the two cities", "[Makkah and Tāef] Qur’ān should be", "Sent down on Mohammad?”"],
        },
        { type: "verse", number: 32, continues: true, lines: ["Are they supposed to distribute"] },
      ],
    },
    {
      bookPage: 912,
      blocks: [
        {
          type: "verse",
          number: 32,
          continued: true,
          lines: ["The Grace [of Messengership] of your", "Creator&Nurture? Whereas We are", "The One Who distributed their", "Sustenance between them in the life of", "This world and raised some of them in", "Ranks above others, so that they may", "Hire them for work; but the Grace of your", "Creator&Nurturer is far better than", "What they collect of worldly wealth;"],
        },
        {
          type: "verse",
          number: 33,
          lines: ["And if there was not the probabilty that", "All may become one community{4} We", "Would provide for all the disbelievers of", "Ar-Rahmān silver roofs for their", "Buildings and stair-ways by which they", "Can ascend,"],
        },
        {
          type: "verse",
          number: 34,
          lines: ["And several doors to their houses", "And couches on which they can", "Lean, arrogantly;"],
        },
        {
          type: "verse",
          number: 35,
          lines: ["And every ornament could be", "Provided for them; but all these luxury", "Means nothing compared to the Good", "End which is with your Creator&Nurturer", "For the pious."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 36,
          lines: ["If someone turns away from", "The Reminder of Ar-Rahmān We shall", "Appoint for him a devil to be his", "Intimate friend [and to show fair-", "Seeming to him his wrong deeds];"],
        },
      ],
    },
    {
      bookPage: 913,
      blocks: [
        {
          type: "verse",
          number: 37,
          lines: ["Such devils bar them from the Straight", "Path while they think they are indeed", "Guided to the right way;"],
        },
        {
          type: "verse",
          number: 38,
          lines: ["But when such person comes at the end", "To Our Presence he will say [to", "The devilish companion of him]: “If only", "Between me and you were the distance", "Of the east and the west; indeed you", "Were the worst companion.”"],
        },
        {
          type: "verse",
          number: 39,
          lines: ["It will be stated to them: “Once you", "Have done wrong, today nothing will", "Avail you against the due punishment; it", "Is just too late to feel remorseful, both", "Of you wronged yourselves and you will", "Share the same punishment.”"],
        },
        {
          type: "verse",
          number: 40,
          lines: ["[O, Messenger] Can you make the deaf", "To hear or can you guide the blind and", "The erring one to the Right Path?"],
        },
        {
          type: "verse",
          number: 41,
          lines: ["[O, Messenger] However even if We take", "You to Us We shall surely take revenge", "On them,"],
        },
        {
          type: "verse",
          number: 42,
          lines: ["Or while you are still in this world We", "Shall show you that which We have", "Promised them of Chastisement. For", "Verily, We have Full Might over them;"],
        },
        {
          type: "verse",
          number: 43,
          lines: ["So take what is revealed to you seriously", "Be sure that you are on the Straight", "Path;"],
        },
        { type: "verse", number: 44, continues: true, lines: ["And indeed this Qur’ān is a Reminder"] },
      ],
    },
    {
      bookPage: 914,
      blocks: [
        {
          type: "verse",
          number: 44,
          continued: true,
          lines: ["For you and your people; and soon you", "Shall be questioned about it;"],
        },
        {
          type: "verse",
          number: 45,
          lines: ["And [in the Paradise] ask the Messengers", "That We sent before you: Did We", "Introduce any god but Ar-Rahmān to be", "Worshipped?"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 46,
          lines: ["And We did send Mūssā with Our Signs", "To Firown and his chiefs for their", "Guidance; and he said: “I am a", "Messenger sent to you from the Creator", "Of the worlds.”"],
        },
        { type: "verse", number: 47, lines: ["But when he exposed Our Signs and", "Miracles, they just laughed at them;"] },
        {
          type: "verse",
          number: 48,
          lines: ["And any Miracle We showed them was", "Greater than the former one; and We", "Seized them with punishment so that", "They may repent and return to Allāh;"],
        },
        {
          type: "verse",
          number: 49,
          lines: ["And when they were caught in affliction", "They said to Mūssā: “O, you magician!", "Invoke your Creator for us according to", "What He has promised you [regarding", "Intercession for the people,] verily, we", "Shall amend ourselves and receive", "Guidance from now on.”"],
        },
        {
          type: "verse",
          number: 50,
          lines: ["But as soon as We removed the Torment", "From them, they would break their", "Covenant."],
        },
        { type: "verse", number: 51, continues: true, lines: ["And Firown proclaimed among his"] },
      ],
    },
    {
      bookPage: 915,
      blocks: [
        {
          type: "verse",
          number: 51,
          continued: true,
          lines: ["People saying: “O, my people! Does it", "Not belong to me the kingdom of Egypt", "And these streams flowing in front of my", "Palace? Do you not think about it?"],
        },
        {
          type: "verse",
          number: 52,
          lines: ["“Am I not better than this man who is a", "Miserable guy and who cannot even", "Express himself in speech clearly?"],
        },
        {
          type: "verse",
          number: 53,
          lines: ["“Then why he has not been bestowed", "Golden bracelets or why he is not", "Accompanied by the Angels?”"],
        },
        {
          type: "verse",
          number: 54,
          lines: ["Thus Firown made fool of his people", "And they obeyed him, since they were", "A rebellious people;"],
        },
        {
          type: "verse",
          number: 55,
          lines: ["So because they raised Our Wrath, We", "Took revenge on them by drowning", "Them all in the sea;"],
        },
        {
          type: "verse",
          number: 56,
          lines: ["And We made the ringleaders of", "Disbelief of the past an example for", "The future generations."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 57,
          lines: ["[O Messenger!] And when Massīh son of", "Maryam was mentioned as a Sign of", "Allāh’s Power, [regarding his birth] your", "People laughed at it;"],
        },
        {
          type: "verse",
          number: 58,
          continues: true,
          lines: ["And they said: “Are our gods better or", "He?” This they said just in order to raise", "A dispute with you, indeed they are a"],
        },
      ],
    },
    {
      bookPage: 916,
      blocks: [
        { type: "verse", number: 58, continued: true, lines: ["Contentious people;{5}"] },
        {
          type: "verse",
          number: 59,
          lines: ["But Massīh was not more than an", "Obedient worshipper on whom We", "Bestowed Our Favour and appointed him", "An example for the Children of Isrāīl;"],
        },
        {
          type: "verse",
          number: 60,
          lines: ["And if We had Willed We could make", "Angels in the land to succeed you [as", "Messengers]."],
        },
        {
          type: "verse",
          number: 61,
          lines: ["And indeed his coming to existence", "[Without having a father] is a Sign of", "Allāh’s Power; the same way We shall", "Raise up the dead on the Resurrection", "Day. Do not doubt about the Hour and", "Obey Me: This is the Straight Path."],
        },
        {
          type: "verse",
          number: 62,
          lines: ["Do not let Satan hinder you [O, men]", "From Allāh’s Way, since he is to you an", "Open enemy."],
        },
        {
          type: "verse",
          number: 63,
          lines: ["When Īssā came with Evident", "Miracles to them, he said: “I have come", "To you with the Divine Knowledge from", "Allāh in order to make clear to you", "Things that you differ in and you have", "Raised dispute over them, so fear from", "The Disobedience of Allāh’s Commands", "And obey me,"],
        },
        { type: "verse", number: 64, continues: true, lines: ["“Verily, Allāh is my Creator and your"] },
      ],
    },
    {
      bookPage: 917,
      blocks: [
        {
          type: "verse",
          number: 64,
          continued: true,
          lines: ["Creator, so worship Him and worshipping", "Him alone is the Straight Path.”"],
        },
        {
          type: "verse",
          number: 65,
          lines: ["But [after Massīh] the parties fell into", "Dispute among themselves. So Woe to", "The polytheists from the Chastisement", "Of the Day of Distress!"],
        },
        {
          type: "verse",
          number: 66,
          lines: ["Do they but wait the Hour of", "Resurrection which comes on them", "Suddenly while they perceive not?"],
        },
        {
          type: "verse",
          number: 67,
          lines: ["On that Day friends [among", "The disbelievers] become foes to each", "Other, but for the pious there will be", "A blessed situation:"],
        },
        {
          type: "verse",
          number: 68,
          lines: ["[To the pious will be stated:] “O, My", "Sincere worshippers! Today no fear", "Shall be on you, nor shall you grieve”,"],
        },
        { type: "verse", number: 69, lines: ["To those who believed in Our Signs", "And were real Muslims will be stated:"] },
        { type: "verse", number: 70, lines: ["“Now enter the Garden of Paradise you", "And your wives with happiness.”"] },
        {
          type: "verse",
          number: 71,
          lines: ["To them food and pure drink will be", "Served in golden plates and cups; there", "Will be all that one may desire and all", "That the eyes enjoy looking at them, and", "You shall abide in the Garden forever;"],
        },
        { type: "verse", number: 72, continues: true, lines: ["[It will be stated to them:] “And this"] },
      ],
    },
    {
      bookPage: 918,
      blocks: [
        { type: "verse", number: 72, continued: true, lines: ["Garden was made heritage to your", "Righteous deeds;"] },
        {
          type: "verse",
          number: 73,
          lines: ["“There will be abundant fruits in", "The Garden for you to eat as much as", "You desire.”"],
        },
        { type: "divider" },
        { type: "verse", number: 74, lines: ["Verily, the sinners will be in", "The Chastisement of the Hell forever,"] },
        {
          type: "verse",
          number: 75,
          lines: ["Their punishment will not be lightened", "For them; and there they will be in utter", "Despair;"],
        },
        { type: "verse", number: 76, lines: ["We did not wrong them but they did", "Wrong to themselves;"] },
        {
          type: "verse",
          number: 77,
          lines: ["They cry out “O, Mālik!{6} If only your", "Creator would let us die!” Mālik will say:", "“No! you shall remain here [to suffer].”"],
        },
        {
          type: "verse",
          number: 78,
          lines: ["[Allāh will state to them:] “We did bring", "The Truth to you, but most of you were", "Reluctant about the Truth.”"],
        },
        {
          type: "verse",
          number: 79,
          lines: ["Were the disbelievers decisive about", "Denying the Truth? We too were", "Determined for their punishment;"],
        },
        { type: "verse", number: 80, continues: true, lines: ["Or do they think that We do not hear"] },
      ],
    },
    {
      bookPage: 919,
      blocks: [
        {
          type: "verse",
          number: 80,
          continued: true,
          lines: ["Their secret talks and plans? We do", "Indeed know all their secret talks", "Because Our angels are with them to", "Record what they say;"],
        },
        {
          type: "verse",
          number: 81,
          lines: ["Say [O, Messenger!]: “If there was a son", "For Ar-Rahmān, I would be the first", "To worship him.”"],
        },
        {
          type: "verse",
          number: 82,
          lines: ["Absolute pure is the Creator of", "The heavens and the earth, the Creator", "Of the lofty Throne and He is Free from", "What they attribute to Him;"],
        },
        {
          type: "verse",
          number: 83,
          lines: ["So let them plunge into their vain ideas", "And their vanities until they meet", "Their Day which they are promised."],
        },
        {
          type: "verse",
          number: 84,
          lines: ["And Allāh is the One Who is God in", "The heavens and on the earth and He is", "The Knowing Sovereign;"],
        },
        {
          type: "verse",
          number: 85,
          lines: ["And He is the Owner of all Blessings", "And to Him belongs the Dominion of", "The heavens and the earth and what is", "Between them; and with Him is", "The Knowledge of the Hour of", "Resurrection and to Him shall you", "People be brought back."],
        },
        {
          type: "verse",
          number: 86,
          continues: true,
          lines: ["And those{7} whom they invoke besides", "Allāh have no right for intercession; only", "Those who bear witness to the Truth", "And possess the required Knowledge [for"],
        },
      ],
    },
    {
      bookPage: 920,
      blocks: [
        { type: "verse", number: 86, continued: true, lines: ["Witnessing,] have the right to intercede."] },
        {
          type: "verse",
          number: 87,
          lines: ["And if you ask them who created them,", "They will surely say: “Allāh” how then", "Are they turned away from the Truth?"],
        },
        {
          type: "verse",
          number: 88,
          lines: ["And the Messenger complained to Him", "Saying: “O, my Creator&Nurturer! These", "Are a people who do not believe.”"],
        },
        {
          type: "verse",
          number: 89,
          lines: ["[O, Messenger] So leave them, and say:", "“Good by!” Soon they will see", "The consequences of their deeds."],
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
        { kind: "p", text: "The Preserved Tablet" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "The Holy Qur’ān" },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "Which is against the Divine Will 5:48" },
      ],
    },
    {
      id: 5,
      blocks: [
        { kind: "p", text: "Some of Massīh’s followers, later known as Trinitarian, consider him son of god; so with reference to 21:98 the pagans said mockingly: “If Massīh and his followers will be sent to Hell according to this Revelation, we do not mind to be along with him in the Fire!” (Commentators)" },
      ],
    },
    {
      id: 6,
      blocks: [
        { kind: "p", text: "The Angel in charge of the Hell" },
      ],
    },
    {
      id: 7,
      blocks: [
        { kind: "p", text: "False deities" },
      ],
    },
  ],
};

export default surah;
