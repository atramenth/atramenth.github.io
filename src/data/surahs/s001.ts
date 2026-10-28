import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 1 · Fātiha — book pages 1–3.
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Footnotes that run across two printed pages are stored once, in full.
 */
const surah: SurahData = {
  number: 1,
  pages: [
    {
      bookPage: 1,
      heading: {
        title: "Fātiha{1}",
        lines: ["(The Opening Sūrah{2} of the Holy Book)", "Revealed at Makkah", "7 Words of Revelation{3} (āyāt)"],
      },
      blocks: [
        { type: "verse", number: 1, lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 2, lines: ["The worshippers’ thanksgiving and"], continues: true },
      ],
    },
    {
      bookPage: 2,
      blocks: [
        {
          type: "verse",
          number: 2,
          continued: true,
          lines: ["Adoration is due only to Allāh:", "The Creator&Nurturer{4} of the worlds", "[And their inhabitants];"],
        },
        { type: "verse", number: 3, lines: ["The Merciful Beneficent;"] },
        { type: "verse", number: 4, lines: ["[And] The Absolute Sovereign of", "The Day of Judgement."] },
        { type: "divider" },
        {
          type: "verse",
          number: 5,
          lines: ["[O, our Creator&Nurturer!] You alone", "Do we worship, and Your Aid alone do", "We seek;"],
        },
      ],
    },
    {
      bookPage: 3,
      blocks: [
        { type: "verse", number: 6, lines: ["Please do guide us to the Straight Path:"] },
        {
          type: "verse",
          number: 7,
          lines: [
            "The path of those upon whom you",
            "Bestowed the blessing{5} [of salvation], not",
            "[The path] of those [who due to their",
            "Denial of the Truth] were inflicted by",
            "Your Wrath{6}, nor those gone astray.{7}",
          ],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        {
          kind: "p",
          text: "This Sūrah is known as Ummul-Qūr’an i.e., the foundation of the Holy Qur’ān, since it comprises the Divine Attributes which are the essential links between the Creator and the created ones: ‘The Creator&Nurturer’, ‘the Merciful Beneficent’ and ‘the Absolute Sovereign of the Judgement Day’.",
        },
        {
          kind: "p",
          text: "It also contains the most vital pray and invocation of the worshippers; and the prescribed prayers cannot be complete without reciting this Sūrah.",
        },
      ],
    },
    {
      id: 2,
      blocks: [
        {
          kind: "p",
          text: "Sūrah is a Qur’ānic section which contains at least three ‘Āyats; the Holy Qur’ān includes one hundred and fourteen Sūrahs; as the word ‘Sūrah’ means ‘the wall of a fortress’ or ‘a city of refuge’, this metaphorical allusion finds convincing proof that Allāh’s Words of Revelation (‘Āyat) are enclosed within the strong walls of 114 Sūrahs. The longest Sūrah of the Holy Qur’ān (Al-Baqarah) contains 286 ‘Āyats and the shortest (Al-Kauthar) contains three ‘Āyats.",
        },
      ],
    },
    {
      id: 3,
      blocks: [
        {
          kind: "p",
          text: "Word of Revelation, in this translation replaces verse since by Qurānic standard, verse is not a correct equivalent for ‘Āyat i.e., Divine Revelation. Verse has been defined in various English dictionaries as follows:",
        },
        {
          kind: "definition",
          term: "Verse",
          senses: [
            "one of the lines of a poem.",
            "a particular type of metrical line.",
            "a poem, or piece of poetry.",
            "a short division of a chapter in the Bible, usually consisting of one sentence or part of a long sentence.",
            "Music, that part of a song following the introduction and preceding the chorus.",
          ],
        },
        {
          kind: "p",
          text: "I believe the reason that a division of a chapter in the Bible has been called verse is because the Psalms of Dāwūd (David) are written in the song form and also there has not been any Divine Forbidding, whereas the Holy Qur’an rejects the idea of having any connection with poetry by stating: ‘We have not taught him, [the Messenger] poetry, nor it is suitable for him; this Book is but a Reminder and a Divine qur’ān [religious text], in order to warn him who is alive [in spiritual sense] and also the charge may be proved against the disbelievers [who are spiritually regarded dead]’ (36:69-70).",
        },
        {
          kind: "p",
          text: "The very reason that the enemies of the Holy Messenger, called him a poet and regarded the Holy Qur’ān, a collection of poems, can be traced in the fascination which recitation of the Words of Allāh had created among the community of Arabia and had stirred people enter into the realm of the religion. Surely the rhyming sound which was used by the Holy Messenger mostly in the Makkan Sūrahs, had been wrongly taken for the Divine effect of the revolutionary meanings of Allāh’s Words and therefore had some share in providing accusations which were spread by the ringleaders of the disbelief in order to hinder people from around the Holy Messenger who by Allāh’s Command had brought the Truth. (37:37) whereas poetry, mostly deals with imaginary and obscure descriptions partly known to the poet himself as personal experience.",
        },
        {
          kind: "p",
          text: "So by Allāh’s Permission, in place of verse which is used almost in all English translations of the Holy Qur’ān, I have chosen Word of Revelation for ‘Āyat and Words of Revelation for ‘āyāt, respectively, when the Divine Message is implied. But ‘Āyat also means: Miracle, Divine Sign, token, proof, decree and admonishing lesson.",
        },
      ],
    },
    {
      id: 4,
      blocks: [
        {
          kind: "p",
          text: "Creator&Nurturer, replaces Lord since it is not the right equivalent for Ar-rabb, which in the Holy Qur’ān has been defined by Allāh as the Creator: ‘O, people! Worship your Rabb who created you and those before you.’ (2:21) And also Allāh introduces Ar-Rabb by stating: ‘O, Mūssā, I am Allāh, the Rabb of the worlds.’ (28:30) furthermore by the tongue of Ibrāhīm (Abraham) Ar-Rabb is defined as the Creator and then he adds other positions of Ar-Rabb which function in the life of mankind after the Divine Act of Creation respectively: The Guide, the Nourisher, the Guardian, the Cherisher and the Merciful Sovereign of the Day of Judgement. (26:78-82)",
        },
        {
          kind: "p",
          text: "Nurturer is the only word that I have found equivalent for most of those positions excluding ‘the Creator’; the word ‘nurture’ signifies: fostering, training, educating and nourishing. Therefore Creator & Nurturer can collectively convey Ibrāhīm’s description of the Divine functions of Ar-Rabb. But Ar-Rabb is not only the Creator of mankind but also the Creator of the Mighty Throne, (9:129), the Creator of the Seven Heavens (23:86), the Creator of the heavens and the earth and what is between them (19:65) and the Creator of the Dawn (113:1) as well; thus Ar-Rabb is the most comprehensive substitute for Allāh among at least 99 Allāh’s Names of Outstanding Excellence which a worshipper is enjoined to invoke to Allāh through these divinities. (7:180)",
        },
        {
          kind: "p",
          text: "So, for brevity sake we can say ‘the Creator’ but never the Sustainer’ or ‘the Cherisher’ since each one is only one of the positions of the Creator. Also Ar-Rabb cannot be recognized as a correct equivalent due to its dissimilarity with the word Lord which various dictionaries have agreed upon its meanings as follows:",
        },
        {
          kind: "definition",
          term: "Lord",
          senses: [
            "a person who has dominion over others; a master, chief, or ruler.",
            "a person who exercises authority from property rights; an owner or possessor of land, houses, etc.",
            "a person who is a leader or has great influence in his chosen profession: the Lords of the theatrical world; one of the great Lords of banking.",
            "a titled nobleman or peer; a person whose ordinary appellation contains by courtesy the title Lord or some higher title.",
            "Lords, the Lords spiritual and Lords Temporal comprising the House of Lords.",
            "Brit. a: the title of certain high officials (used with some other title or the like): Lord Mayor of London. b: the title informally substituted for marquis, earl, viscount, etc., as in the use of Lord kitchener for Earl kitchener.",
            "the supreme Being; God; Jehova.",
            "the saviour, Jesus Christ.",
          ],
        },
        {
          kind: "p",
          text: "The above mentioned diverse meanings can only through misunderstanding stand as an equivalent for Ar-Rabb. So in translation of the Holy Qur’ān which should necessarily be contextual-cultural, we can only rely on the Qur’ān’s inner dictionary which lies within the context, created by Allāh the Almighty, the Creator of all things including men and meanings.",
        },
      ],
    },
    {
      id: 5,
      blocks: [{ kind: "p", text: "The Divine believers, the righteous, the guided ones and those who strive in Allāh’s Path: (2:5), (47:17), (29:69)." }],
    },
    {
      id: 6,
      blocks: [{ kind: "p", text: "Those who raised Allāh’s Wrath and therefore were inflicted by it: (2:61, 65, 90)" }],
    },
    {
      id: 7,
      blocks: [{ kind: "p", text: "Those who chose the disbelief over the Divine Faith (2:108)" }],
    },
  ],
};

export default surah;
