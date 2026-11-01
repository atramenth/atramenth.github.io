import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 54 · Al-Qamar — book pages 995–1002 (verses 1–55, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 54,
  pages: [
    {
      bookPage: 995,
      heading: {
        title: "Al-Qamar",
        lines: ["(The Moon)", "Revealed at Makkah", "55 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["The Ordained Hour drew near and", "The Moon cleft asunder,{1}"] },
        {
          type: "verse",
          number: 2,
          lines: ["But whatever Miracle they see they turn", "Away and say: “This is the continuation", "Of the magic of the old.”"],
        },
        {
          type: "verse",
          number: 3,
          lines: ["They denied the Truth and followed", "Their caprices; but for the fulfillment of", "Every issue [regarding Ordainment] it", "Will have its appointed term."],
        },
        {
          type: "verse",
          number: 4,
          lines: ["And indeed [through this Qur’ān] they", "Have received the warning news of", "The doomed nations of the old [but they", "Do not learn]"],
        },
        { type: "verse", number: 5, continues: true, lines: ["This Qur’ān is a highly comprehensive"] },
      ],
    },
    {
      bookPage: 996,
      blocks: [
        {
          type: "verse",
          number: 5,
          continued: true,
          lines: ["Wisdom but the warning of the Warners", "Does not profit them [due to their", "Ignorance and obstinacy.]"],
        },
        {
          type: "verse",
          number: 6,
          lines: ["So [O, Messenger!] turn away from them", "And wait for the Day that the Divine", "Caller will inform them of the arrival of", "A terrible event;"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["They will raise from their graves with", "Humbled eyes; they run around like", "Scattered locusts,"],
        },
        {
          type: "verse",
          number: 8,
          lines: ["Hastening towards the Caller’s Voice", "The disbelievers will say: “Today is", "The hard Day, [the promised one].”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 9,
          lines: ["Before these pagans, the people of", "Nūh denied their Messenger who was", "Our obedient worshipper and they said:", "“He is a mad man!” And he was tortured", "And threatened quite a lot,"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["So he invoked to his Creator saying:", "“O, My Creator! I am defeated, help me", "And take my revenge.”"],
        },
        { type: "verse", number: 11, lines: ["So We opened the gates of the heaven", "With water pouring forth ceaselessly;"] },
        {
          type: "verse",
          number: 12,
          lines: ["And We caused the earth to bring out", "Its springs, so the waters of the heaven", "And the earth became united to carry", "Out the plan which had been Ordained,"],
        },
      ],
    },
    {
      bookPage: 997,
      blocks: [
        { type: "verse", number: 13, lines: ["Then We embarked Nūh in the Ark", "Made of planks and nails;"] },
        {
          type: "verse",
          number: 14,
          lines: ["And the Ark was floating under Our", "Supervision and it was the reward for", "The one who had been denied [by", "The disbelievers];"],
        },
        {
          type: "verse",
          number: 15,
          lines: ["And We left this [Nūh’s Ark] as a Sign", "[For the future generations;] is there", "Any one willing to receive admonition?"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["So see how severe was My Chastisement", "After My Warners were belied [by the", "Disbelievers and the transgressors]!{2}"],
        },
        {
          type: "verse",
          number: 17,
          lines: ["And We have indeed revealed the Holy", "Qur’ān easy and simple to be", "Understood and be guiding to the", "People; is there any one willing to", "Receive admonition?"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 18,
          lines: ["The ‘Ād people too belied their", "Messenger; so see how severe was My", "Chastisement after My Warners were", "Belied [by the disbelievers and", "The transgressors]:"],
        },
        { type: "verse", number: 19, continues: true, lines: ["We sent a stormy cold wind against"] },
      ],
    },
    {
      bookPage: 998,
      blocks: [
        { type: "verse", number: 19, continued: true, lines: ["Them on a lengthy day of ill-omen,"] },
        {
          type: "verse",
          number: 20,
          lines: ["The storm which plucked out men as if", "They were uprooted stems of palm-trees;"],
        },
        {
          type: "verse",
          number: 21,
          lines: ["So see how severe was My", "Chastisement after My Warners were", "Belied [by the disbelievers and the", "Transgressors]!"],
        },
        {
          type: "verse",
          number: 22,
          lines: ["And We have indeed revealed the Holy", "Qur’ān easy and simple to be", "Understood and be guiding to the", "People; is there any one willing to", "Receive admonition?"],
        },
        { type: "divider" },
        { type: "verse", number: 23, lines: ["Thamūd people also belied their", "Messenger [Sālih],"] },
        {
          type: "verse",
          number: 24,
          lines: ["And they said: “Are we supposed to obey", "An ordinary man like ourselves? In", "Which case we will be in error and", "Madness;"],
        },
        {
          type: "verse",
          number: 25,
          lines: ["“How come that among the people of", "Us, the Message has been sent to him?", "He is a big liar and an insolent man.”"],
        },
        { type: "verse", number: 26, lines: ["[And We stated to Sālih:] “Tomorrow", "They will know who is the insolent liar!"] },
        {
          type: "verse",
          number: 27,
          continues: true,
          lines: ["“For We will send a she-camel{3} by way", "Of trial to them so you wait and watch"],
        },
      ],
    },
    {
      bookPage: 999,
      blocks: [
        { type: "verse", number: 27, continued: true, lines: ["Their situation and be patient,"] },
        {
          type: "verse",
          number: 28,
          lines: ["“And tell them that the water of", "The town should be divided between", "Them and the she-camel; they should", "Keep their turn; one day for the camel", "And one day for them.”"],
        },
        { type: "verse", number: 29, lines: ["So they called one of the ringleaders", "Of the disbelief and he hamstrung her."] },
        {
          type: "verse",
          number: 30,
          lines: ["So see how severe was My", "Chastisement after My Warners were", "Belied [by the disbelievers and the", "Transgressors]!"],
        },
        {
          type: "verse",
          number: 31,
          lines: ["We sent against them only a single Blast", "And they were left as the dry stubble of", "A fold-builder."],
        },
        {
          type: "verse",
          number: 32,
          lines: ["And We have revealed the Holy Qur’ān", "In a plain and simple language to be", "Understood and be guiding to the people.", "Is there any one willing to receive", "Admonition?"],
        },
        { type: "divider" },
        { type: "verse", number: 33, lines: ["The people of Lūt belied their", "Messengers;"] },
        {
          type: "verse",
          number: 34,
          lines: ["We sent against them a stony storm", "Which destroyed them except Lūt and", "His family whom We delivered in", "The early morning,"],
        },
        { type: "verse", number: 35, lines: ["As a Grace from Us; thus We reward", "The thankful;"] },
      ],
    },
    {
      bookPage: 1000,
      blocks: [
        {
          type: "verse",
          number: 36,
          lines: ["And Lūt had warned them before about", "Our Punishment but they disputed about", "His warnings;"],
        },
        {
          type: "verse",
          number: 37,
          lines: ["And they even asked him to leave his", "Guests to them in order to commit", "The shameful act, so We blinded their", "Eyes [stating:] “Now taste My", "Chastisement for belying my", "Messengers!”"],
        },
        { type: "verse", number: 38, lines: ["And in the early morning a lasting", "Calamity fell upon them;"] },
        { type: "verse", number: 39, lines: ["[And We stated:] “Taste My", "Chastisement for belying My Warners.”"] },
        {
          type: "verse",
          number: 40,
          lines: ["And We have indeed revealed the Holy", "Qur’ān in a simple and easy language to", "Be understood by the people; is there", "Any one willing to receive admonition?"],
        },
        { type: "divider" },
        { type: "verse", number: 41, lines: ["And indeed Messengers were sent to", "Firown and his chiefs;"] },
        {
          type: "verse",
          number: 42,
          lines: ["They denied all Our Signs and Miracles,", "So We seized them with the Power of", "Allāh, the Invincible Supreme Mighty."],
        },
        {
          type: "verse",
          number: 43,
          lines: ["Are the disbelievers of Quraish better", "Or stronger than those disbelievers of", "The past? Or have We sent them an", "Immunity letter in the old scriptures", "[That they feel safe?]"],
        },
      ],
    },
    {
      bookPage: 1001,
      blocks: [
        {
          type: "verse",
          number: 44,
          lines: ["Or do they say: “We are a strong and", "United people; [and can support each", "Other against Allāh’s Chastisement and", "Take revenge]?”"],
        },
        { type: "verse", number: 45, lines: ["But soon their group will be put to", "Flight defeated and dispersed.{4}"] },
        {
          type: "verse",
          number: 46,
          lines: ["The time of their hard punishment will", "Be on the Resurrection Day and that", "Will be most grievous and most bitter:"],
        },
        { type: "verse", number: 47, lines: ["Verily, the sinners will be in error", "And madness;"] },
        {
          type: "verse",
          number: 48,
          lines: ["The Day that they will be dragged in", "The Fire on their faces, it will be stated", "To them: “Taste you now the touch of", "The Fire!”"],
        },
        { type: "verse", number: 49, lines: ["Verily, We created all things through", "Ordainment:"] },
        {
          type: "verse",
          number: 50,
          lines: ["And Our Command is uttered only once", "Within a time of twinkling of an eye:", "[Only it is stated: “Be!” And it will come", "To existence immediately whatever Allāh", "Wills to be.]"],
        },
        {
          type: "verse",
          number: 51,
          lines: ["And indeed We destroyed so many", "Disbelievers of your kind; is there", "Any one willing to receive admonition?"],
        },
      ],
    },
    {
      bookPage: 1002,
      blocks: [
        { type: "verse", number: 52, lines: ["And all that they did has been recorded", "In their Book of Deeds,"] },
        { type: "verse", number: 53, lines: ["Whether small or great all is recorded."] },
        { type: "verse", number: 54, lines: ["But the pious are in the Gardens of", "Paradise by the flowing streams;"] },
        { type: "verse", number: 55, lines: ["In the abode of Truth and in the", "Presence of the Omnipotent Sovereign."] },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "Quraish pagans asked the Holy Messenger to show them a Miracle by cleaving the moon. Upon his invocation and by Allāh’s Ordainment the moon cleft asunder within the sight of the Messenger and people in his presence." },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "Nuzor in this Word of Revelation and in 18, 21, 30 and 39 stands for plural of Nazir meaning Messenger: The Divine Chastisement according to the Divine Line of Conduct, always follows the denial of the wrongdoers against admonitions and warnings of the Warners 28:59. Thus the majority of translators who have translated: ‘See how was My Chastisement and warning’ have not regarded the nuances of the word." },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "The disbelievers had asked their Messenger to bring out a camel from the stone; Sālih invoked to Allāh and there came a she-camel by Allāh’s Command nevertheless they persisted in their disbelief and hamstrung her." },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "The Divine Prophecy about the defeat of the disbelievers in the Badr Battle." },
      ],
    },
  ],
};

export default surah;
