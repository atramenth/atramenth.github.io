import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 41 · Fussilat — book pages 883–894 (verses 1–54, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 41,
  pages: [
    {
      bookPage: 883,
      heading: {
        title: "Fussilat",
        lines: ["(Explained in Detail)", "Revealed at Makkah", "54 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Hā. Mīm.{1}"] },
        { type: "verse", number: 2, lines: ["The Descending of this Book is by Allāh", "The Merciful Beneficent,"] },
        {
          type: "verse",
          number: 3,
          lines: ["The Words of Revelation of this Book", "Are explained in detail; a Qur’ān{2} in", "Arabic language for people who", "Understand;"],
        },
        {
          type: "verse",
          number: 4,
          lines: ["It is a Bearer of glad-tidings for", "The believers and a Warner for", "The disbelievers and wrongdoers but", "Most of people turn away from it and", "Do not listen to its Admonitions;"],
        },
        {
          type: "verse",
          number: 5,
          continues: true,
          lines: ["[O, Messenger!] The disbelievers told", "you: “Our hearts are under coverings that"],
        },
      ],
    },
    {
      bookPage: 884,
      blocks: [
        {
          type: "verse",
          number: 5,
          continued: true,
          lines: ["Your preachings cannot penetrate in", "Them; and in our ears is deafness and", "Between us and you is a barrier, so you", "Do what you wish and we do what we", "Wish.”"],
        },
        {
          type: "verse",
          number: 6,
          lines: ["Say [O, Messenger!]: “I am also a human", "Being like you, [the exception is that I", "Receive Revelation from my Creator]", "And to me has been revealed that your", "God is but One, then be steadfast in", "Worshipping Him only, and seek His", "Forgiveness; and woe to the polytheists;"],
        },
        { type: "verse", number: 7, lines: ["“Those who do not pay alms and", "Disbelieve in the Hereafter.”"] },
        {
          type: "verse",
          number: 8,
          lines: ["Verily, those who believe in the Oneness", "Of Allāh and do righteous deeds, for", "Them will be a Lasting Reward."],
        },
        {
          type: "verse",
          number: 9,
          lines: ["Say [O, Messenger!]: “Do you indeed", "Deny the One Who created the earth", "Only in Two Days; and do you consider", "For him equals? Allāh is the Creator of", "The worlds and their inhabitants;"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["“He is the One Who placed firm and", "Fixed mountains on the earth to keep it", "And its inhabitants secure from quakes", "And tremblings; and He Ordained", "Sustenance for the people according to", "Their needs, all in four days;"],
        },
        { type: "verse", number: 11, continues: true, lines: ["“Then He decided for creating the sky;"] },
      ],
    },
    {
      bookPage: 885,
      blocks: [
        {
          type: "verse",
          number: 11,
          continued: true,
          lines: ["And it was but some gaseous smoke;", "And stated to it and to the earth: “Submit", "Both of you willingly or unwillingly.”", "They both said: “We submit [to our", "Creator] obediently.”"],
        },
        {
          type: "verse",
          number: 12,
          lines: ["“Then He divided and shaped", "The gaseous smoke into seven heavens", "Within Two Days; and He revealed to each", "Heaven its function and duty; and We", "Adorned the nearest heaven to the earth", "Of the world with lamps: [Sun, Moon", "And stars] and made it guarded with", "Shooting-stars: Such is the Ordaining", "Power of the Omnipotent-Omniscient.”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 13,
          lines: ["But if the pagans persist in turning away", "From the Truth, then say [O, Messenger!]:", "“I warn you of a thunderbolt like", "The one that destroyed the ‘Ād and", "Thamūd people.”"],
        },
        {
          type: "verse",
          number: 14,
          lines: ["When the Messengers came to them", "From every side for guiding them saying:", "“Do not worship but Allāh, the One and", "The only God”, they said: “If Allāh had", "Willed to guide us, he would have sent", "Down Angels for this purpose; so we", "Disbelieve in the Message for which you", "Have been sent.”"],
        },
        {
          type: "verse",
          number: 15,
          continues: true,
          lines: ["As for ‘Ād they were arrogant for", "The vain reason that they had been", "Bestowed extra ordinary physical figures", "And strength; and they said: “Who is", "Stornger than us?” Did they not see that"],
        },
      ],
    },
    {
      bookPage: 886,
      blocks: [
        {
          type: "verse",
          number: 15,
          continued: true,
          lines: ["Allāh Who created them was mightier in", "Strength than them? And they kept on", "Denying Our Signs and Miracles;"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["So We sent upon them a violent cold", "Wind which made their days evil omen", "Days, so that We might give them a", "Taste of disgracing Torment in this", "World; and surely the Chastisement of", "The Hereafter will be more disgracing;", "And they will have no help against", "The situation."],
        },
        {
          type: "verse",
          number: 17,
          lines: ["As to the Thamūd, We did send", "Messengers for their Guidance to", "The Truth, but they chose blindness over", "Being guided to the light of the Straight", "Path, so a thunderbolt of a disgracing", "Torment overtook them as a", "Recompense for what they used to do;"],
        },
        { type: "verse", number: 18, lines: ["And We delivered those who believed", "And were pious among them."] },
        { type: "divider" },
        {
          type: "verse",
          number: 19,
          lines: ["On the Day when all enemies of Allāh", "Are gathered, they will be kept in ranks", "All towards the Hell;"],
        },
        {
          type: "verse",
          number: 20,
          lines: ["When they reach the Fire, their ears,", "Their eyes and their skins will bear", "Witness against them regarding their", "Wrongdoings;"],
        },
        {
          type: "verse",
          number: 21,
          continues: true,
          lines: ["And they protest against their skins", "Saying: “Why did you testify against us?”", "They will reply: “Allāh the One Who"],
        },
      ],
    },
    {
      bookPage: 887,
      blocks: [
        {
          type: "verse",
          number: 21,
          continued: true,
          lines: ["Caused all things to speak has also", "Given us power of speech. And He", "Created you the first time and to Him", "You all will be returned;"],
        },
        {
          type: "verse",
          number: 22,
          lines: ["“If you kept your deeds a secret it was", "Not that you feared the witness of your", "Ears, your eyes and your skins [because", "You could not imagine that they can", "Speak] but you thought that Allāh", "Did not know most of what you did;"],
        },
        {
          type: "verse",
          number: 23,
          lines: ["“And that evil conjecture that you had", "About your Creator [i.e. , suspecting His", "Knowledge which embraces all things]", "Caused your destruction and you", "Became of the losers.”"],
        },
        {
          type: "verse",
          number: 24,
          lines: ["So if they endure the Fire or if they do", "Not, it will be an abode for them", "Forever; and if they insist for their", "Forgiveness and for accepting their", "Repentance that would be an impossible", "Wish [because the Decree of their", "Chastisement has come to pass]"],
        },
        {
          type: "verse",
          number: 25,
          continues: true,
          lines: ["And We have appointed deceiving", "Intimate friends for the disbelievers in", "The world, those who made", "Fair-seeming to them the evil", "Deeds of their past and their present;", "And encouraged them to continue their", "Wrongdoings so that the Word of", "Chastisement becomes justified against", "Them as it was justified against", "The former generations of Jinns and men"],
        },
      ],
    },
    {
      bookPage: 888,
      blocks: [
        { type: "verse", number: 25, continued: true, lines: ["Who were the losers indeed."] },
        { type: "divider" },
        {
          type: "verse",
          number: 26,
          lines: ["And the chiefs of the disblievers said to", "The people: “Do not listen to Qur’ān", "And in the middle of its recitation make", "Noise in order to hinder others from", "Listening to it; and by this you may", "Overcome [the Muslims]”"],
        },
        {
          type: "verse",
          number: 27,
          lines: ["So We will make the disbelievers taste a", "Severe Torment and surely We shall", "Recompense them according to", "The worst of their deeds;"],
        },
        {
          type: "verse",
          number: 28,
          lines: ["And the recompense of the enemies of", "Allāh is the Fire which is their", "Permanent home, a recompense for their", "Denial of Our Signs and Miracles;"],
        },
        {
          type: "verse",
          number: 29,
          lines: ["And the disbelievers [while burning]", "Will say: “Our Creator! Show us those", "Among Jinns and men who led us astray", "From the Right Way in order that we", "Trample them under our feet, thus", "The arrogant ringleaders of the disbelief", "Will feel the lowest [once punished by", "Their subordinates.]”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 30,
          continues: true,
          lines: ["Verily, those who said: “Allāh the One", "Is our Creator” and then they were", "Steadfast against the hardship of Allāh’s", "Path, on such believers the Angels will", "Descend [by Allāh’s Command] and will", "Say: “Do not fear, nor feel grieved and"],
        },
      ],
    },
    {
      bookPage: 889,
      blocks: [
        {
          type: "verse",
          number: 30,
          continued: true,
          lines: ["We have for you the glad-tidings of", "The Garden which you were promised;"],
        },
        {
          type: "verse",
          number: 31,
          lines: ["“We are your helping friends in this", "World and in the Hereafter; and in", "The Paradise for you is prepared all you", "Wish and you shall have", "Whatever you ask for;"],
        },
        { type: "verse", number: 32, lines: ["“And this is a generous reception from", "Allāh the Merciful Forgiving.”"] },
        { type: "divider" },
        {
          type: "verse",
          number: 33,
          lines: ["And who is more excellent in speech", "Than he who invites people to Allāh’s", "Path and does righteous deeds and", "Says: “I am one of the Muslims”?{3}"],
        },
        {
          type: "verse",
          number: 34,
          lines: ["The good and the evil are not equal, so", "Repel the wrongdoing of men with", "Good treatment instead, then your", "Enemies will turn into intimate friends,"],
        },
        {
          type: "verse",
          number: 35,
          lines: ["And no one will receive this", "Achievement save those who have been", "Patient and those who own a great", "Portion of Faith."],
        },
        {
          type: "verse",
          number: 36,
          lines: ["And if some temptation from Satan", "Reaches you then seek shelter in Allāh", "Since He is the Knowing Hearer [He", "Hears the invocation and will rescue", "The invoker from doing wrong.]"],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 890,
      blocks: [
        {
          type: "verse",
          number: 37,
          lines: ["And of Allāh’s Signs of Power are", "The creation of the Night and the Day", "And the Sun and the Moon: Do not", "Prostrate to the Sun and to the Moon", "But prostrate to Allāh Who created", "Them, if [as a monotheist] you worship", "Him only;"],
        },
        {
          type: "verse",
          number: 38,
          lines: ["And if men turn away from worshipping", "Allāh out of arrogance they should know", "That there are so many Angels and", "Divine Spirits in Allāh’s Presence who", "Celebrate Allāh’s Attributes night", "And day and never feel fatigue."],
        },
        {
          type: "verse",
          number: 39,
          lines: ["And of Allāh’s Signs of Power is that", "You see the earth dry and barren but", "After We send down rain to it, then it", "Becomes fresh and green and yields", "Vegetations and fruits. Indeed the One", "Who is Able to give life to the dry and", "Withered land is then Able to give life", "To the dead on the Resurrection Day;", "Verily, Allāh is Powerful over all things."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 40,
          lines: ["Verily, those who distort Our Words of", "Revelation are not hidden from Us. Is", "A person who is cast into the Fire better", "Or he who enters the Day of Judgement", "Feeling security and peace in his mind", "[About the result of taking account]?", "O, People! Now do whatever you wish;", "Verily, Allāh is the Seer of what you do."],
        },
      ],
    },
    {
      bookPage: 891,
      blocks: [
        {
          type: "verse",
          number: 41,
          lines: ["Those who reject the Reminder,", "[The Holy Qur’ān] when it came to", "Them they should know that it is", "The Book of Exalted Power in", "Knowledge and Wisdom:"],
        },
        {
          type: "verse",
          number: 42,
          lines: ["No falsehood finds way to it neither in", "Present nor in future; the Descending of", "It is by the Source-Wisdom Commender", "Of goodness.{4}"],
        },
        {
          type: "verse",
          number: 43,
          lines: ["[O, Messenger!] What the disbelievers [of", "Quraish] ascribe to you is the same", "That the disbelievers of the old did", "Ascribe to their Messengers,{5} but verily,", "Your Creator is the Bestower of", "Forgiveness as well as the Severe", "Retributing."],
        },
        {
          type: "verse",
          number: 44,
          lines: ["If We had revealed the Holy Qur’ān in a", "Foreign language, they would have said:", "“Why are not its Words of Revelation", "Well explained and easy? A none Arabic", "Book by an Arab Messenger?” Say", "[O, Messenger!]: “For those who believe in", "The Oneness of Allāh, Qur’ān is a", "Guide and a healing, but as regards to", "Those who disbelieve, there is deafness", "In their ears and they are blind before", "The Truth; they are so remote from it as", "If some one is calling them from a long", "Distant [they cannot hear the voice of", "The Truth].”"],
        },
      ],
    },
    {
      bookPage: 892,
      blocks: [
        {
          type: "verse",
          number: 45,
          lines: ["Indeed We bestowed the Book{6} to", "Mūssā but they disputed about it; had it", "Not been for the Word that had already", "Been Ordained [regarding respite] they", "Would have been perished. But they still", "Have certain doubts about it;"],
        },
        {
          type: "verse",
          number: 46,
          lines: ["Whoever does righteous deeds, it is for", "His own benefit and whoever does evil,", "It is against himself; your", "Creator&Nurturer is never unjust to His", "Human creatures."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 47,
          lines: ["The knowledge of the Resurrection", "Hour is with Allāh only. No fruit", "Comes out of its sheath, nor does a", "Female conceive within her womb nor", "Delivers the burden, but it is known to", "Him. On the Day that Allāh will put", "Question to them stating: “Where", "Are those whom you considered", "Partners for Me?” They will say: “Surely", "We confess that we cannot bring any", "Proof for what we claimed.”"],
        },
        {
          type: "verse",
          number: 48,
          lines: ["And the false deities that they used to", "Invoke to, will disappear from their sight", "And they will know that there is no way", "Of escape for them."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 49,
          continues: true,
          lines: ["Man does not get tired from invoking", "To Allāh for receiving good things"],
        },
      ],
    },
    {
      bookPage: 893,
      blocks: [
        {
          type: "verse",
          number: 49,
          continued: true,
          lines: ["But as soon as a slight evil touches him,", "He becomes lost in despair;"],
        },
        {
          type: "verse",
          number: 50,
          lines: ["And if We let him taste of Our Own", "Grace after his disaster [and feels calm", "Enjoying peace of mind] then he relates", "It to his own merits and he starts saying:", "“This is due to my own merits and I doubt", "About the Resurrection Hour; and even if", "Am returned to my Creator for me will", "Be a better bounty with Him” So We", "Will inform the disbelievers of what they", "Did and We shall make them taste a", "Severe Chastisement;"],
        },
        {
          type: "verse",
          number: 51,
          lines: ["And when We bestow some Favour on", "Man, he turns away and keeps a", "Distance with the Source of Favour and", "When some evil touches him he keeps", "On invoking to Us desperately [to", "Remove his problem.]"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 52,
          lines: ["Say [O, Messenger!]: “If Qur’ān is from", "Allāh, and you knowingly deny it, then", "Tell me who is more astray than", "The one who exercises a grave schism", "Against the Truth?”"],
        },
        {
          type: "verse",
          number: 53,
          lines: ["In the near future We will show them", "Our Signs throughout the universe as", "Well as in their own souls to prove that", "This Qur’ān is the Truth. Is it not", "Sufficient that Allāh is the Witness over", "All things?"],
        },
      ],
    },
    {
      bookPage: 894,
      blocks: [
        {
          type: "verse",
          number: 54,
          lines: ["Know that, the disbelievers are in doubt", "Regarding the Meeting with their", "Creator{7} and know that Allāh is the One", "Whose Knowledge encompasses all", "Things."],
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
        { kind: "p", text: "‘a Qur’ān’ here signifies a Divine reading material, thus translated as a verbal noun not a proper noun." },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "The hypocrites fearing the pagans, avoided to introduce their religion publicly." },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "For Hamīd, I believe ‘the Commender of Goodness’ is the better equivalent." },
      ],
    },
    {
      id: 5,
      blocks: [
        { kind: "p", text: "They also called their Messengers: Bewitched, mad and liar" },
      ],
    },
    {
      id: 6,
      blocks: [
        { kind: "p", text: "The Taurāt" },
      ],
    },
    {
      id: 7,
      blocks: [
        { kind: "p", text: "Regarding the Appearance of the Resurrection Day" },
      ],
    },
  ],
};

export default surah;
