import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 29 · Al-Ankabūt — book pages 719–733 (verses 1–69, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 29,
  pages: [
    {
      bookPage: 719,
      heading: {
        title: "Al-Ankabūt",
        lines: ["(The Spider)", "Revealed at Makkah", "69 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Alif.Lām.Mīm{1}"] },
        {
          type: "verse",
          number: 2,
          lines: ["Do the people think that they will be", "Left alone simply because they said:", "“We believe” and that there will be no", "Trial for them?"],
        },
        {
          type: "verse",
          number: 3,
          lines: ["We did try those before them;", "So that Allāh makes known those who", "Were truthful and those who were liars."],
        },
        {
          type: "verse",
          number: 4,
          lines: ["Do the wrongdoers imagine that they", "Can overcome Our Power? Their", "Judgement is quite wrong."],
        },
        {
          type: "verse",
          number: 5,
          continues: true,
          lines: ["And those who believe in the Meeting", "With Allāh and the Day of Resurrection", "know that the term Ordained by Allāh"],
        },
      ],
    },
    {
      bookPage: 720,
      blocks: [
        {
          type: "verse",
          number: 5,
          continued: true,
          lines: ["Will come to pass; and Allāh is", "The Knowing Hearer: [He hears", "The talks and the thoughts of", "The creatures by His Embracing", "Knowledge.]"],
        },
        {
          type: "verse",
          number: 6,
          lines: ["One who strives in the Path of Allāh, he", "Does it to his own benefit [since there is", "A reward determined for the believers:]", "Verily, Allāh is Free from the need of", "Worshippers’ worship:"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["Those who believe and do righteous", "Deeds We will surely blot out their wrong", "Deeds of the past; and We will surely", "Bestow the best rewards for their good", "Deeds."],
        },
        {
          type: "verse",
          number: 8,
          lines: ["We have enjoined man to be good and", "Dutiful to his parents; but if", "They try to mislead you [O, man] from", "The Path of Allāh and make you", "To consider partner for Me, then do not", "Obey them. You people will all return", "To Me and I will let you know about", "Your deeds."],
        },
        {
          type: "verse",
          number: 9,
          lines: ["Those who believed and did righteous", "Deeds We will surely admit them to", "The Paradise along with the righteous.{2}"],
        },
        {
          type: "verse",
          number: 10,
          continues: true,
          lines: ["And there are some men who say: “We", "Believe in Allāh” but as soon as they"],
        },
      ],
    },
    {
      bookPage: 721,
      blocks: [
        {
          type: "verse",
          number: 10,
          continued: true,
          lines: ["Encounter with some annoyance from", "The enemies of Allāh in the Path of", "Religion, they take it as the Wrath of", "Allāh [and start complaining] but if aid", "And victory comes to you from your", "Creator&Nurturer they will say: “We", "Have been with you” [so they claim for", "Their share of the victory.] Is not Allāh", "The Supreme Knower of humankind’s", "Intentions and secrets of their hearts?"],
        },
        {
          type: "verse",
          number: 11,
          lines: ["And Allāh most certainly distinguishes", "Those who believe from those who are", "Hypocrites."],
        },
        {
          type: "verse",
          number: 12,
          lines: ["And the disbelievers say to the believers:", "“You follow our way if there is any sin", "Let the Divine Punishment be on us.”", "But they cannot bear their burdens; they", "Are indeed the liars;"],
        },
        {
          type: "verse",
          number: 13,
          lines: ["They will have to bear the burden of", "Their own sins and the sins of those who", "Followed them; and on the Day of", "Judgement they will be cross-examined", "For the lies that they have forged."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 14,
          lines: ["And We sent Nūh to his people for", "Their guidance and he lived and", "Preached them for nine hundred and", "Fifty years,{3} so they were destroyed by", "The flood while to the last moment they", "Insisted in disbelief and rebellion;"],
        },
      ],
    },
    {
      bookPage: 722,
      blocks: [
        {
          type: "verse",
          number: 15,
          lines: ["So We saved him and those with him in", "The Ark and We made the story of Nūh", "And his companions an admonishing", "Lesson for the people of the world."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 16,
          lines: ["And We sent Ibrāhīm as a Messenger to", "His people; he said to them: “Worship", "Allāh and beware of disobeying Him,", "This is the best if you try to know;"],
        },
        {
          type: "verse",
          number: 17,
          lines: ["“You worship in place of Allāh some", "Stony idols which you have carved them", "Yet you attribute so many credits to", "Them; these idols whom you worship", "Have no power to provide sustenance", "For you, so seek your sustenance from", "Allāh; worship Him and be grateful to", "Him; and know that eventually your", "Return will be to Him.”"],
        },
        {
          type: "verse",
          number: 18,
          lines: ["If you [pagans of Makkah] belie", "[The Messenger of Islām], this is what", "People before you did with their", "Messengers; and the responsibility of", "The Messenger is but to convey", "The Divine Message publicly;"],
        },
        {
          type: "verse",
          number: 19,
          lines: ["Have they not observed how Allāh", "Begins creation and how He returns it to", "Nothingness and then renew it? This is", "An easy act for Allāh."],
        },
        {
          type: "verse",
          number: 20,
          continues: true,
          lines: ["Say [O, Messenger!]: “Travel through", "The land and observe the creation of", "The creatures of all sorts; and think"],
        },
      ],
    },
    {
      bookPage: 723,
      blocks: [
        {
          type: "verse",
          number: 20,
          continued: true,
          lines: ["About the issue that how Allāh has", "Started creation; and thus He will create", "The Last World; verily, Allāh is", "Powerful Over all things;"],
        },
        {
          type: "verse",
          number: 21,
          lines: ["And He punishes whom He Decides is", "Doomed to punishment and He bestows", "His Mercy upon whom He Decides is", "Entitled to be forgiven; and to Him you", "All shall be returned;"],
        },
        {
          type: "verse",
          number: 22,
          lines: ["“And you will not be able neither on", "The earth nor in the heaven to overcome", "Allāh’s Will and plans; and there is no", "Guardian nor any supporter for you save", "Allāh.”"],
        },
        {
          type: "verse",
          number: 23,
          lines: ["[And Ibrāhīm also said:] Allāh states:", "“Those who denied the Signs and", "Miracles of Allāh and the Meeting with", "Him, they will be deprived of My Grace", "And for them there will be a Severe", "Torment.”"],
        },
        {
          type: "verse",
          number: 24,
          lines: ["The response to Ibrāhīm’s preachings", "Was but they said: “Kill him or burn", "Him!” But Allāh delivered him from", "The fire. Verily, in the story of", "The Divine liberation of Ibrāhīm there", "Are Signs of Allāh’s Power for", "The believers:{4}"],
        },
        {
          type: "verse",
          number: 25,
          continues: true,
          lines: ["Ibrāhīm said: “In place of Allāh, you", "Worship idols and between you idolaters"],
        },
      ],
    },
    {
      bookPage: 724,
      blocks: [
        {
          type: "verse",
          number: 25,
          continued: true,
          lines: ["Is a mutual wordly affection, but on", "The Day of Judgement you express your", "Disdain for each other and you curse", "Each other; and your abode will be", "The Hell Fire and there is none to help", "You on that Day.”"],
        },
        {
          type: "verse",
          number: 26,
          lines: ["Lūt was the first who believed in him as", "A Messenger; [he himself was a", "Messenger and a nephew of Ibrāhīm.]", "He said to Lūt: “I am going to migrate{5}", "From here upon the Command of my", "Creator&Nurturer. Verily, He is", "The Invincible-Mighty Sovereign.”"],
        },
        {
          type: "verse",
          number: 27,
          lines: ["And We gave Ibrāhīm Isshāq and Yaqūb", "And We Ordained among his progeny", "Prophethood and Scriptures; We", "Bestowed him reward in this world and", "In the Hereafter also he will be one of", "The righteous."],
        },
        {
          type: "verse",
          number: 28,
          lines: ["And We sent Lūt to his people and he", "Said: “You commit the filthiest act", "Which no one before you has done it in", "The world;"],
        },
        {
          type: "verse",
          number: 29,
          continues: true,
          lines: ["“Is it not true that you have sexual", "Relationship with men and have cut off", "The natural way of producing generation", "And also commit such dirty acts in your", "Gatherings? The only response of his", "People was this: “If you are truthful,"],
        },
      ],
    },
    {
      bookPage: 725,
      blocks: [
        {
          type: "verse",
          number: 29,
          continued: true,
          lines: ["Then bring on us Allāh’s punishment", "That you threaten us with!”"],
        },
        {
          type: "verse",
          number: 30,
          lines: ["Lūt said beseechingly: “O, my", "Creator&Nurturer! Help me against this", "Corrupt people.”"],
        },
        {
          type: "verse",
          number: 31,
          lines: ["When Our Divine Emissaries came to", "Ibrāhīm after giving him the glad-tidings", "Of a son, they told him: “We are", "Going to destroy this land since its", "People are corrupt and transgressing.”"],
        },
        {
          type: "verse",
          number: 32,
          lines: ["Ibrāhīm became worried, so he said:", "“But Lūt is one of the inhabitants of", "The town.” They said: “We know only so", "Well who lives there, but we will save", "Him and his followers and his family", "Except his wife; she is to remain behind", "With those who are to be destroyed.”"],
        },
        {
          type: "verse",
          number: 33,
          lines: ["When Our Divine Emissaries came to", "Lūt he became worried [since they", "Appeared as young men and he feared", "That the corrupt homosexuals might", "Approach his guests and cause a", "Shameful scene].{6} But the Angels of", "Chastisement said: “Do not fear and do", "Not feel worry, we will surely save you", "And your followers of your folk except", "Your wife; she is to remain behind with", "Those who are to be destroyed with the", "Rest;"],
        },
      ],
    },
    {
      bookPage: 726,
      blocks: [
        {
          type: "verse",
          number: 34,
          lines: ["“We are assigned from the heaven", "To bring down Torment on the people", "Of this town for their corruption and", "Their sinfulness.”"],
        },
        {
          type: "verse",
          number: 35,
          lines: ["So We left a Sign [of the destroyed", "Cities] in that land to be an", "Admonishing lesson for those who", "Understand.{7}"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 36,
          lines: ["And to Madyan We sent their brother", "Shuaib to guide his people; he said:", "“O, my people! Worship Allāh, and", "Believe in the Hereafter, and do not", "Make mischief on the earth.”{8}"],
        },
        {
          type: "verse",
          number: 37,
          lines: ["They denied him, so an earthquake", "Seized them; and they became", "Motionless corpses stuck to the earth of", "Their homes."],
        },
        {
          type: "verse",
          number: 38,
          lines: ["We destroyed the ‘Ād and the Thamūd", "People; you can see their doom fate", "From their destroyed habitations. Satan", "Made Fair-seeming to them their", "Wrongdoings; and hindered them from", "The Right Path while they could see", "The bounties that they were bestowed", "Such as wealth, physical strength and", "Strong dewellings."],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 727,
      blocks: [
        {
          type: "verse",
          number: 39,
          lines: ["And [O, Messenger remind the people", "Of] Qārūn, Firown and his assistant", "Hāmān. Mūssā was sent to them with", "Evident miracles but they rebelled arrogantly,", "Yet they did not manage to resist against", "Us [and they were destroyed by", "The Gracious Invincible Mighty.]"],
        },
        {
          type: "verse",
          number: 40,
          lines: ["Each of these We seized for their", "Sinfulness and transgression; and means", "Of their punishment was different: Some", "Of them We showered with stones from", "The heaven; some were destroyed by a", "Strong blast; some of them were", "Swallowed by the earth and some We", "Drowned; it was not Allāh who", "Wronged them, but they did wrong to", "Themselves.{9}"],
        },
        {
          type: "verse",
          number: 41,
          lines: ["The parable of those who chose others", "As guardians rather than Allāh is that of", "The spider whose nest is made of", "The most tender and vulnerable threads,", "If they but knew;"],
        },
        {
          type: "verse",
          number: 42,
          lines: ["Verily, Allāh knows very well those", "Things that they call upon, besides", "Allāh and He is the Source Wisdom", "Supremepower; [and He Knows that", "Spider’s nest is bound to perdition];"],
        },
      ],
    },
    {
      bookPage: 728,
      blocks: [
        {
          type: "verse",
          number: 43,
          lines: ["And these parables We put forth for", "Mankind in general, but only the learned", "Men understand their deep meanings."],
        },
        {
          type: "verse",
          number: 44,
          lines: ["Allāh created the heavens and the earth", "On the basis of the necessity [for", "The creatures as well as the whole", "Existence] and this grand creation in", "The eyes of the believers is the Sign and", "The Proof of Allāh’s Power."],
        },
        {
          type: "verse",
          number: 45,
          lines: ["Recite [O, Messenger!] of the Book as", "Much it has been revealed to you;", "Establish prayer regularly; indeed prayer", "Prevents man from shameful and", "Indecent deeds; and saying Allāh’s", "Remembrance is a great blessing", "[Whether while praying or any other", "Time] and Allāh is quite Aware of what", "You people do."],
        },
        {
          type: "verse",
          number: 46,
          lines: ["[O, Muslims!] Do not dispute with", "The people of the Book, except", "The wrongdoers of them, but with", "Proper and sound reasoning; so tell", "Them: “We believe in the Revelations", "Which have been sent down to us and to", "You; we both worship our Only God;", "And to His Will all submit our wills.”"],
        },
        {
          type: "verse",
          number: 47,
          lines: ["[O, Messenger!] And thus We revealed", "The Holy Qur’ān to you; those who were", "Given the Book before you, they also", "Believe in it; and also some people from", "Among the pagans are inclined to have", "Faith, so only the disbelievers deny", "Our Words of Revelation."],
        },
      ],
    },
    {
      bookPage: 729,
      blocks: [
        {
          type: "verse",
          number: 48,
          lines: ["[O, Messenger!] Before this you could", "Not read a Book and you had no", "Hand-writing; had it not been for", "The Blessing of the Holy Qur’ān that", "The Miracle happened and you became", "A literate man, those vain talkers [who", "Try to deny the Message] would have", "Suspected that you may fabricate", "The Words of Revelation;"],
        },
        {
          type: "verse",
          number: 49,
          lines: ["But this Book contains the Explicit", "Words of Revelation which influences", "The hearts of those endowed with", "Knowledge; and none but the disbelievers", "Deny Our Revelations;"],
        },
        {
          type: "verse",
          number: 50,
          lines: ["And the disbelievers say: “Why some", "Miracles have not been sent down to", "Him from his Creator&Nurturer?” Say", "[O, Messenger!]: “Miracles come from", "Allāh’s Will and Power; I am but a", "Divine Warning Expositor.”"],
        },
        {
          type: "verse",
          number: 51,
          lines: ["Is it not enough as a Miracle that We", "Revealed the Book to you from among", "The folk [whereas before that you were", "An illiterate man] and now you recite to", "Them the Divine Words of Revelation?", "Verily, in it{10} is the Grace and Reminder", "For the believing people;"],
        },
        {
          type: "verse",
          number: 52,
          continues: true,
          lines: ["Say [O, Messenger!]: “Allāh is enough as", "A witness between me and you since", "Allāh’s Knowledge embraces all things"],
        },
      ],
    },
    {
      bookPage: 730,
      blocks: [
        {
          type: "verse",
          number: 52,
          continued: true,
          lines: ["In the heavens and the earth; and those", "Who worship false deities and", "Disbelieve in Allāh they are indeed", "The losers.”"],
        },
        {
          type: "verse",
          number: 53,
          lines: ["The disbelievers ask you to hasten on", "The Divine Affliction for them;{11} had it", "Not been for the time Ordained before,", "Regarding respite, Affliction would have", "Been sent upon them; however it will", "Eventually fall upon them all of a", "Sudden, and when they are unaware;"],
        },
        {
          type: "verse",
          number: 54,
          lines: ["They ask you to hasten on the Divine", "Affliction; surely the Hell Fire will", "Encompass the disbelievers from all", "Directions;"],
        },
        {
          type: "verse",
          number: 55,
          lines: ["On the Day when Chastisement shall", "Encompass them from above them and", "Below them, it will be said to them:", "“Taste the Chastisement as a", "Recompense for what you did!”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 56,
          lines: ["O, my obedient believers! Indeed", "The Earth which I created is vast", "Enough [if you are under pressure by", "The disbelievers of your folk, then", "Migrate to another land] and worship", "Me only [wherever you may be]."],
        },
      ],
    },
    {
      bookPage: 731,
      blocks: [
        {
          type: "verse",
          number: 57,
          lines: ["Every creature eventually shall taste", "Death and you will come back to Us, [to", "Your Creator]."],
        },
        {
          type: "verse",
          number: 58,
          lines: ["Those who believed and did", "Righteous deeds We will lodge them", "In the lofty buildings in the Paradise", "In which streams flow. They will abide", "Therein forever; how excellent is", "The reward of the doers of Allāh’s", "Commands and Decrees!"],
        },
        {
          type: "verse",
          number: 59,
          lines: ["The doers of Allāh’s Commands are", "Patient against hardship which they", "Encounter on the Divine Path of Religion;", "And they put their trust on their", "Creator&Nurturer."],
        },
        {
          type: "verse",
          number: 60,
          lines: ["There are so many creatures who cannot", "Provide their own food; Allāh provides", "Sustenance both for you and for them;", "Allāh is the Knowing Hearer [and by", "The Power of His Embracing Knowledge", "Hears the voice of his creatures’", "Supplication.]"],
        },
        {
          type: "verse",
          number: 61,
          lines: ["If you ask them Who is the One Who", "Created the heavens and the earth and", "Who subjugated the sun and the moon,", "They will surely say: “Allāh is the One", "Who did all these.” Then why knowingly", "They turn away from the Truth?"],
        },
        {
          type: "verse",
          number: 62,
          lines: ["Allāh bestows sustenance on His", "Creatures abundantly or by strict", "Measure; verily, Allāh is the Knower of", "All things;"],
        },
      ],
    },
    {
      bookPage: 732,
      blocks: [
        {
          type: "verse",
          number: 63,
          lines: ["And if you ask them who is the One", "Who sends down water from the sky and", "Brings life to the earth after its death", "They will surely say: “Allāh is the One", "Who does these.” Say [O, Messenger!]:", "“Thanksgiving and adoration is only due", "To Allāh”, but most of them do not", "Understand."],
        },
        {
          type: "verse",
          number: 64,
          lines: ["The life of this world is but amusement", "And pastime whereas the real life is in", "The Last Home if the people but knew."],
        },
        {
          type: "verse",
          number: 65,
          lines: ["When these polytheists embark on a", "Ship [as soon as they feel some danger", "Is approaching them on the sea,] they", "Invoke to Allāh sincerely, but when they", "Are landed safely, they forget their", "Saviour and again they consider partners", "For Allāh;"],
        },
        {
          type: "verse",
          number: 66,
          lines: ["Let them be ungrateful for", "The bounties that We bestowed on them", "And let them plunge themselves in", "The worldly enjoyments but soon they", "Will know [that the Reckoning Day is", "True];"],
        },
        {
          type: "verse",
          number: 67,
          lines: ["Do they not appreciate that We have", "Made a secure sanctuary for them{12}", "Whereas people are being snatched", "Away from around them every day? Do", "They yet believe in the false deities and", "Deny the Grace of Allāh’s Religion?"],
        },
      ],
    },
    {
      bookPage: 733,
      blocks: [
        {
          type: "verse",
          number: 68,
          lines: ["Who is more wrongdoing than the one", "Who forges a lie against Allāh or denies", "The Message of the Truth after it has", "Reached him? Is not in the Hell a", "Home for the disbelievers?"],
        },
        {
          type: "verse",
          number: 69,
          lines: ["And those who strive in Our Straight", "Path sincerely and up to their abilities,", "We will surely guide them [by", "Inspirations] to Our Ways; and verily,", "Allāh is the Supreme Supporter of", "The good-doers."],
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
        { kind: "p", text: "As the Messengers and the Divine Emissaries" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "In such a long life of preaching only about eighty submitted to the Divine Unity." },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "Allāh Commanded the fire to become cool and safe for Ibrāhīm; and the fire obeyed the Command (21:69)" },
      ],
    },
    {
      id: 5,
      blocks: [
        { kind: "p", text: "They both migrated from Babel to Syria following Allāh’s Command to Ibrāhīm." },
      ],
    },
    {
      id: 6,
      blocks: [
        { kind: "p", text: "See 11:77-80" },
      ],
    },
    {
      id: 7,
      blocks: [
        { kind: "p", text: "See 15:79" },
      ],
    },
    {
      id: 8,
      blocks: [
        { kind: "p", text: "See 11:84-94" },
      ],
    },
    {
      id: 9,
      blocks: [
        { kind: "p", text: "The due punishment falls upon the wrongdoers who persist in their wrongdoing, so they make themselves doomed to punishment and thus they are self-oppressors." },
      ],
    },
    {
      id: 10,
      blocks: [
        { kind: "p", text: "The Holy Qur’ān" },
      ],
    },
    {
      id: 11,
      blocks: [
        { kind: "p", text: "To deny the Holy Messenger’s warnings, the disbelievers kept on saying: “Why the Divine Affliction does not fall on us if you are telling the truth?”" },
      ],
    },
    {
      id: 12,
      blocks: [
        { kind: "p", text: "Reference is made to Ka’bah" },
      ],
    },
  ],
};

export default surah;
