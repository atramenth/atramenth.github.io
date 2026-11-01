import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 61 · As-Saff — book pages 1047–1050 (verses 1–14, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Page 1050 opens with the last verse of this sūrah, above the heading of Sūrah 62.
 */
const surah: SurahData = {
  number: 61,
  pages: [
    {
      bookPage: 1047,
      heading: {
        title: "As-Saff",
        lines: ["(The Rank)", "Revealed at Madīnah", "14 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["Whatever is in the heavens and", "On the earth, they all Celebrate Allāh’s", "Attributes and His Absolute Purity; and", "He is the Invincible Mighty Sovereign."],
        },
        { type: "verse", number: 2, lines: ["O, you who believe! Why do you say", "That which you do not do?"] },
        { type: "verse", number: 3, lines: ["It causes Allāh’s Wrath gravely that you", "Say [and promise] something that you do", "Not fulfill.{1}"] },
        {
          type: "verse",
          number: 4,
          lines: ["Verily, Allāh appreciates the act of those", "Who fight in His Way in rank [united to", "One another] as a solid wall of a strong", "Fortress."],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 1048,
      blocks: [
        {
          type: "verse",
          number: 5,
          lines: ["And [O, Messenger!] remind them of", "Mūssā when he said to his people:", "“O, my people! Why do you harm and", "Annoy me whereas you know that I am", "The Messenger of Allāh sent to you for", "Your guidance?” So when those people", "Chose wrongdoing Allāh deprived them", "From His Guidance, since Allāh does", "Not guide the disobedient."],
        },
        {
          type: "verse",
          number: 6,
          lines: ["And also remind them [O, Messenger]", "Of Īssā, son of Maryam; he said:", "“O, Children of Isrāīl! I am", "The Messenger of Allāh sent to you", "Confirming Taurāt which came", "Before me; and I am a Bearer of", "Glad-tidings of a Messenger who comes", "After me and whose name shall be", "Ahmad.”{2} But when the Messenger of", "Islām came to them with Clear Signs", "And Miracles, they said: “This [Qur’ān] is", "An evident magic.”"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["Who is more unjust than the one who", "Forges lies against Allāh by calling His", "Words magic [and His Messenger a", "Magician] when he is being invited to", "The Religion of Islām? And Allāh", "Does not guide those who are", "Self-oppressors, [those who by rejecting", "Allāh’s Command do wrong to", "Themselves];"],
        },
      ],
    },
    {
      bookPage: 1049,
      blocks: [
        {
          type: "verse",
          number: 8,
          lines: ["They intend to extinguish Allāh’s Light", "By blowing with their mouths,{3} but", "Allāh will complete His Light openly,", "Though the disbelievers detest it;"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["Allāh is the One Who sent His", "Messenger with Guidance and the Perfect", "Religion of Truth to outshine all", "Religions, though the polytheists", "Detest it."],
        },
        {
          type: "verse",
          number: 10,
          lines: ["O, you who believe! Shall I direct you to", "A trade that as its profit you will be", "Saved from the Grievous Chastisement", "Of the Hereafter?"],
        },
        {
          type: "verse",
          number: 11,
          lines: ["[For such profit] you should believe in", "Allāh and His Messenger and strive hard", "In Allāh’s Way with your wealth and", "Your souls;{4} that will be the best for you", "If you but knew;"],
        },
        {
          type: "verse",
          number: 12,
          lines: ["Then Allāh will forgive your sins", "And middle you to the Gardens in", "The middle of which streams flow; and", "Will admit you to the pure lodgings of", "The Gardens of Eternity; and that is", "Indeed the Great Achievement;"],
        },
        {
          type: "verse",
          number: 13,
          lines: ["And also you will have another gain", "Which you are anxious to attain: Allāh’s", "Aid and a near victory,{5} so [O, Messenger]", "Give glad-tidings to the believers!"],
        },
      ],
    },
    {
      bookPage: 1050,
      blocks: [
        {
          type: "verse",
          number: 14,
          lines: ["O, you who believe! Be you the helpers", "Of the Way of Allāh and remember as", "Īssā son of Maryam said to his Disciples:", "“Who will be my helpers in the Way of", "Allāh?”{6} The Disciples said: “We are", "The helpers of Allāh’s Way.” Then a", "Group of Children of Isrāīl believed and", "A group disbelieved [and made all sorts", "Of mischief]. So We confirmed and", "Strengthened those who believed", "Against their enemies and they became", "Victorious."],
        },
      ],
    },
  ],
  footnotes: [
    { id: 1, blocks: [{ kind: "p", text: "Reference is made to those men who were disobedient at Uhud Battle, against their own promises." }] },
    { id: 2, blocks: [{ kind: "p", text: "The Messenger of Islām was known in his tribe with two names: Ahmad and Mohammad, both meaning ‘the praised one.’ (Commentators)" }] },
    { id: 3, blocks: [{ kind: "p", text: "By talking Falsehood against the Truth" }] },
    { id: 4, blocks: [{ kind: "p", text: "See 9:111" }] },
    { id: 5, blocks: [{ kind: "p", text: "The Victory of Makkah" }] },
    { id: 6, blocks: [{ kind: "p", text: "See 3:52 and 5:111" }] },
  ],
};

export default surah;
