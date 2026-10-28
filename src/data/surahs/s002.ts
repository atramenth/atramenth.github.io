import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 2 · Al-Baqarah — book pages 4–7 so far (verses 1–22, partial).
 * The book restarts footnote numbering on every page; here notes are numbered
 * once per sūrah in reading order (1 = Alif. Lām. Mīm., 2 = “The Muslims”).
 */
const surah: SurahData = {
  number: 2,
  partial: true,
  pages: [
    {
      bookPage: 4,
      heading: {
        title: "Al-Baqarah",
        lines: ["(The Cow)", "Revealed at Madīnah", "286 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Alif. Lām. Mīm.{1}"] },
        { type: "verse", number: 2, lines: ["This [Holy] Book which there is no", "Doubt in it [regarding its being Truth] is", "A guidance for the pious:"] },
        {
          type: "verse",
          number: 3,
          lines: ["[The pious are:] Those who believe in", "The Unseen; are steadfast in performing", "Prayers [five times daily]; and spend out", "[To the needy] of what We have provided", "For them;"],
        },
        {
          type: "verse",
          number: 4,
          lines: ["[The pious are:] Those who believe in", "The Revelations sent to you", "[O, Messenger] and sent before you to", "Other Messengers; and [in their hearts]", "They have attained the certainty of Faith", "About the Hereafter;"],
        },
      ],
    },
    {
      bookPage: 5,
      blocks: [
        { type: "verse", number: 5, lines: ["[The pious] are on the Guidance from", "Their Creator&Nurturer, and they are", "The ones who shall attain salvation."] },
        { type: "divider" },
        {
          type: "verse",
          number: 6,
          lines: ["[O, Messenger!] As to those who reject", "Faith, it is the same to them, whether", "You warn them, or do not warn them;", "They will not believe;"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["Allāh [due to their ignorance and", "Disbelief] has set a seal on their hearts", "And on their hearings; and on their eyes", "Is a veil; [so they cannot perceive, hear", "Or see the Truth]; and for them is a", "Great Chastisement awaiting."],
        },
        {
          type: "verse",
          number: 8,
          lines: ["And of the people there are some who", "Say: [By their tongues not their hearts]", "“We believe in Allāh and the Hereafter.”", "While in fact they are not believers;"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["[By saying so] They intend to deceive", "Allāh and the believers,{2} whereas they", "Deceive not but themselves, and they", "Realize it not;"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["In their hearts is a disease [of doubt", "And hypocrisy] and Allāh has increased", "Their disease [by depriving them of", "His guidance;] for them is a painful", "Chastisement, because of their lies;"],
        },
      ],
    },
    {
      bookPage: 6,
      blocks: [
        {
          type: "verse",
          number: 11,
          lines: ["And when it is said to them: “Stop", "Making mischief on the earth.” They say:", "“Verily, we are after peace and", "Improving the relation between", "The people”;"],
        },
        { type: "verse", number: 12, lines: ["[O, believers!] Know that they are", "Indeed, mischief-makers, but they do not", "Realize it;"] },
        {
          type: "verse",
          number: 13,
          lines: ["When it is said to them: “Believe [in", "Allāh and the Hereafter] as the other", "People believe.” They say: “Shall we", "Believe as the simpletons believe?”", "Know that they are indeed themselves", "The fools, but they do not know;"],
        },
        {
          type: "verse",
          number: 14,
          lines: ["When they meet with those who believe,", "They say: “We believe.” But when they", "Are alone with their evil leaders [of", "Polytheists] they say: “We are with you", "We [are] only mocking [the Muslims.]”"],
        },
        {
          type: "verse",
          number: 15,
          lines: ["[But] This is Allāh Who throws back", "Their mockery on them, and allows them", "To continue their rebellion in their", "Blindly bewilderment;"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["They, [the hypocrites] are the ones who", "Have purchased error at the price of", "Guidance,so their traffic, does not profit", "Them, neither they will be guided aright;"],
        },
        {
          type: "verse",
          number: 17,
          continues: true,
          lines: ["Their similitude is that of those who", "Kindled a fire and once it lit up all", "Around them, Allāh took away their"],
        },
      ],
    },
    {
      bookPage: 7,
      blocks: [
        { type: "verse", number: 17, continued: true, lines: ["Light and left them in the utter", "Darkness, so they could not see;"] },
        {
          type: "verse",
          number: 18,
          lines: ["[They are:] Deaf, dumb and blind, so", "They will not return [to the Path from their", "Darkness];"],
        },
        {
          type: "verse",
          number: 19,
          lines: ["Or [another similitude about them] is", "That of wayfarers caught in a rainstorm", "Which is accompanied by darkness,", "Thunder and lightning; while they are in", "The terror of death, they press their", "Fingers in their ears to keep out", "The stunning thunderbolt, but Allāh", "Encompasses the disbelievers from all", "Directions:"],
        },
        {
          type: "verse",
          number: 20,
          lines: ["The lightning almost snatches away their", "Sight; every time it gleams, they walk", "Therein, and when the darkness grows", "On them, they stand still; and had", "Allāh willed, He would have taken", "Away [by thunder and lightning] their", "Faculties of hearing and seeing; verily,", "Allāh is Powerful over all things."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 21,
          lines: ["O, you people! Worship your", "Creator&Nurturer Who created you and", "Created those who came before you,", "So that [through worshipping], you may", "Become pious;"],
        },
        { type: "verse", number: 22, continues: true, lines: ["Your Creator&Nurturer is the One Who", "Spread the earth as a carpet for your"] },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        {
          kind: "p",
          text: "Abbreviated letters (Almoqataāt) symbol the Divine Letters, the meaning of which are known only to Allāh. There are 29 Sūrahs which have abbreviated letters prefixed to them. They are regarded as part of each Sūrah; however, the imaginary interpretations of these letters is regarded forbidden.",
        },
      ],
    },
    { id: 2, blocks: [{ kind: "p", text: "The Muslims" }] },
  ],
};

export default surah;
