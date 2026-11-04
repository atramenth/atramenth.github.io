import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 31 · Luqmān — book pages 747–754 (verses 1–34, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 31,
  pages: [
    {
      bookPage: 747,
      heading: {
        title: "Luqmān",
        lines: ["(Luqmān, the Sage)", "Revealed at Makkah", "34 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Alif. Lām. Mīm{1}"] },
        { type: "verse", number: 2, lines: ["These Words of Revelation of the Book", "Of Wisdom,"] },
        { type: "verse", number: 3, lines: ["Are Guidance and Grace for", "The good-doers:"] },
        {
          type: "verse",
          number: 4,
          lines: ["The good-doers are those who perform", "Prayers regularly, pay alms and believe", "With certainty in the Hereafter;"],
        },
        {
          type: "verse",
          number: 5,
          lines: ["Such people act upon their", "Creator&Nurturer’s Guidance and they", "Are indeed those who attain salvation."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 6,
          continues: true,
          lines: ["And of men is one who buys legends", "To hinder the unaware people from"],
        },
      ],
    },
    {
      bookPage: 748,
      blocks: [
        {
          type: "verse",
          number: 6,
          continued: true,
          lines: ["Allāh’s Way; and also make mockery of", "Allāh’s Words of Revelation; for such is", "A disgraceful Chastisement;{2}"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["And when Our Words of Revelation are", "Recited to him, he turns his back", "Arrogantly as if he has not heard them,", "As if he is deaf, so [O, Messenger] give", "Him tidings of a painful Torment!"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 8,
          lines: ["Verily, those who believe and do", "Righteous deeds for them will be", "The Gardens of Bliss;"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["Therein they will abide forever; Allāh’s", "Promise is True [since He has never", "Failed His Promise] and He is", "The Supreme-Mighty Decreer [He has", "Power to execute His Decrees]"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["Allāh is the One Who created heavens", "Without any pillars that you can see;", "And He has set up mountains on", "The earth as its pegs lest it may shake", "With you, the inhabitants; and He", "Scattered on it all kinds of moving", "Creatures. And We sent down rain from", "The sky by which We produced all kinds", "Of fruitful vegetations;"],
        },
      ],
    },
    {
      bookPage: 749,
      blocks: [
        {
          type: "verse",
          number: 11,
          lines: ["These are all Allāh’s Creation; now show", "Me one single thing that these false", "Deities have created! So the disbelievers", "Are in an obvious aberration."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 12,
          lines: ["We bestowed Divine Wisdom on", "Luqmān and stated to him: “Be grateful", "To your Creator&Nurturer; one who", "Expresses his gratitude, it is to his own", "Benefit, but one who is ungrateful,", "It is to his own loss] since Allāh is", "Indeed the Independent Commender of", "Goodness.” [Free from the need of His", "Creatures’ worship]"],
        },
        {
          type: "verse",
          number: 13,
          lines: ["While admonishing his son, Luqmān", "Said to him: “O, my son! Ascribe no", "Partner to Allāh, considering partner to", "Allāh is the gravest injustice.”{3}"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 14,
          lines: ["And We did enjoin man to be dutiful", "And kind to his parents; since his", "Mother bears him with extreme", "Feebleness and she bears weaning him", "For two years, so [it was stated to him:]", "“Express your gratitude to Me and to", "Your parents; to Me will be your return;"],
        },
        {
          type: "verse",
          number: 15,
          continues: true,
          lines: ["“But if your parents try to make you", "Consider partners for Me of things"],
        },
      ],
    },
    {
      bookPage: 750,
      blocks: [
        {
          type: "verse",
          number: 15,
          continued: true,
          lines: ["Which you have no knowledge about", "Them, then do not obey them, yet keep", "Them company in this wordly life with", "Care and nicety; but only follow the way", "Of those who turn to Allāh; eventually", "The return of you all will be to Me and I", "Will inform you of your deeds.”"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["Luqmān admonished his son saying:", "“O, my son! If your deed [good or bad]", "Be the weight of mustard-seed and it be", "In the rock or somewhere in the heavens", "And the earth, Allāh will bring it forth", "[On the Day of Account]; verily, Allāh is", "The Aware Owner of Precision;"],
        },
        {
          type: "verse",
          number: 17,
          lines: ["“O, my son! Keep up your prayers", "Regularly and enjoin good and forbid", "Evil; and be patient while encountering", "Hardship and disaster; surely", "Steadfastness is a matter of great", "Resolution;"],
        },
        {
          type: "verse",
          number: 18,
          lines: ["“And [O, my son] do not turn your face", "Away from people out of arrogance; nor", "Walk in the street exultingly; verily,", "Allāh does not like any self-conceited", "Boaster;"],
        },
        {
          type: "verse",
          number: 19,
          lines: ["“And be moderate in your walking", "[Neither slow nor hastily] and keep your", "Voice low [when talking to someone],", "Surely the harshest of sounds is", "The braying of the ass.”"],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 751,
      blocks: [
        {
          type: "verse",
          number: 20,
          lines: ["Have you people not noticed that", "Allāh has subjugated so many means", "To your use in the heavens and the", "Earth to reach you His Bounties of", "The material and the spiritual nature?", "And there are men [such as Quraish", "Pagans] who keep on disputing about", "Allāh due to their lack of knowledge,", "Guidance and a Light-giving Book of", "Religion;"],
        },
        {
          type: "verse",
          number: 21,
          lines: ["And when it is said to them: “Follow", "The Revelations that Allāh has sent", "Down!” They say: “We only follow what", "Our ancestors followed.” Even if Satan", "Had called their ancestors to the Blazing", "Fire, do they follow them?"],
        },
        {
          type: "verse",
          number: 22,
          lines: ["And whoever submits his will to", "The Will of Allāh and also does good", "Deeds, he has indeed grasped the", "Firmest unbreakable handle. And to Allāh", "Returns the final of all affairs;"],
        },
        {
          type: "verse",
          number: 23,
          lines: ["So whoever rejects Faith, it should not", "Grieve you [O, Messenger]; to Us is their", "Return and We shall inform them of", "What they did. Verily, Allāh is", "The Knower of what is in men’s hearts;"],
        },
        {
          type: "verse",
          number: 24,
          lines: ["We let them{4} enjoy life for a short", "Period of time in this world, then We", "Shall make them feel miserable in a", "Severe Chastisement;"],
        },
      ],
    },
    {
      bookPage: 752,
      blocks: [
        {
          type: "verse",
          number: 25,
          lines: ["If you ask them, [the polytheists] who", "Is the One Who created the heavens", "And the earth? They will surely say:", "“Allāh did it.” Say [O, Messenger!]:", "“Thanksgiving and adoration of", "The worshippers is due only to Allāh”", "[Who did all these through His", "Embracing Power.] But most of them do", "Not understand."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 26,
          lines: ["To Allāh belong all things in", "The heavens and on the earth; verily,", "Allāh is the Praiseworthy Owner of", "The whole existence;"],
        },
        {
          type: "verse",
          number: 27,
          lines: ["And if all the trees on the earth were", "Pens and the seas were ink with seven", "More seas, yet the Words of Allāh", "Exceeds the stationery and would not", "Exhaust; verily, Allāh is", "The Supreme Power in Knowledge and", "Wisdom."],
        },
        {
          type: "verse",
          number: 28,
          lines: ["The Creation and the Resurrection of", "You people to Allāh, due to His", "Embracing Power is like that of creation", "And raising up of one person. Verily,", "Allāh is the Seeing Hearer: [He", "Through His Embracing Knowledge", "Hears your talks regarding your disbelief", "About the Resurrection Day.]"],
        },
        {
          type: "verse",
          number: 29,
          continues: true,
          lines: ["Do you not observe that Allāh merges", "Night into Day and merges Day into", "Night? And He has subjugated for your"],
        },
      ],
    },
    {
      bookPage: 753,
      blocks: [
        {
          type: "verse",
          number: 29,
          continued: true,
          lines: ["Benefit Sun and Moon, each travelling", "Its course within an Appointed Term.", "And verily, Allāh is Aware of what you", "People do;"],
        },
        {
          type: "verse",
          number: 30,
          lines: ["This is because Allāh is the Absolute", "Truth and what the disbelievers worship", "In place of Him is but Falsehood; and", "Verily, Allāh is the Supreme-Exalted", "Great."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 31,
          lines: ["Do you not observe that ships sail", "Through the seas by Allāh’s Will and", "Grace that He may let you see", "The Grandeur of His Power? For", "The highly patient and grateful believers", "There are many Signs of Allāh’s Power", "In all these."],
        },
        {
          type: "verse",
          number: 32,
          lines: ["When people encounter a danger while", "Sailing in the ship, they invoke to Allāh", "Sincerely, but when they are saved only", "A group of them remain faithful{5} with", "Their promises and vows; those who", "Deny Our Signs and Miracles [after", "Being delivered from danger] are but", "The ungrateful traitors."],
        },
        {
          type: "verse",
          number: 33,
          continues: true,
          lines: ["O, people! Fear from the disobedience", "Of Allāh’s Commands; and fear from", "The Day that no father is permitted", "To avail for his son and no son can avail"],
        },
      ],
    },
    {
      bookPage: 754,
      blocks: [
        {
          type: "verse",
          number: 33,
          continued: true,
          lines: ["For his father at all. Verily, Allāh’s", "Promise is true, so do not let the wordly", "Life deceive you and do not let Satan", "Deceive you about Allāh [regarding His", "Promise Of Resurrection];"],
        },
        {
          type: "verse",
          number: 34,
          lines: ["Verily, the knowledge of the Hour of", "Resurrection is only with Allāh; and", "Allāh is the One Who sends down rain", "And He is the One Who knows what", "Wombs bear. Not any one knows what", "Will happen to him tomorrow, nor does", "Anyone know in what land he is to die.", "Verily, Allāh is the Informed Knower of", "All things and affairs."],
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
        { kind: "p", text: "One of Quraish pagans, named Nazr ibn-e-Hāreth used to travel to Persia on trade, and he also tried to collect certain legends about monarchs from there to recount to his people in order to hinder them from the Holy Messenger and thus from listening to the Words of Revelation; and he also claimed that his collected legends were equal to the allegorical stories of the Holy Qur’ān, recited by the Holy Messenger! (Commentators)" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "Since it is the gravest injustic that man should consider partners for his own Creator and the Creator of all bounties." },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "The polytheists" },
      ],
    },
    {
      id: 5,
      blocks: [
        { kind: "p", text: "One of the meanings of Moghtassed as here is a person who remains steadfast and faithful, but almost all translators have adopted the common meaning of it which is: The moderate man." },
      ],
    },
  ],
};

export default surah;
