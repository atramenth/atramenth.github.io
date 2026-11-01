import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 62 · Al-Jumu‘ah — book pages 1050–1053 (verses 1–11, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Page 1050 opens with the end of Sūrah 61; page 1053 ends this sūrah above the heading of Sūrah 63.
 */
const surah: SurahData = {
  number: 62,
  pages: [
    {
      bookPage: 1050,
      heading: {
        title: "Al-Jumu‘ah",
        lines: ["(The Congregational Prayer of Friday)", "Revealed at Madīnah", "11 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["All creatures in the heavens and on", "The earth Celebrate the Attributes and", "The Absolute Purity of Allāh, a King", "Who is the Holy, the Invincible Mighty", "And the Source-Wisdom;{1}"],
        },
      ],
    },
    {
      bookPage: 1051,
      blocks: [
        {
          type: "verse",
          number: 2,
          lines: ["Allāh is the One Who sent among", "The illiterate people a Messenger from", "Among themselves to recite to them His", "Words of Revelation, in order to purify", "Them from the dirt of disbelief and", "Paganism; and to teach them the Book", "Of Truth and Wisdom, though they had", "Been before in a gross error;"],
        },
        {
          type: "verse",
          number: 3,
          lines: ["And also he is a Messenger for", "Those nations [of the world] who have", "Not yet joined the Muslims [or", "The Islāmic Monotheism] and Allāh is", "The Source-Wisdom Invincible Mighty;"],
        },
        {
          type: "verse",
          number: 4,
          lines: ["This [Prophethood] is a Grace from", "Allāh and He bestows it on whoever He", "Wills, [so jealousy about the Holy", "Messenger’s Position means disputing", "About Allāh’s will and Decision]."],
        },
        {
          type: "verse",
          number: 5,
          lines: ["The similitude of those on whom", "Learning the Taurāt was an incumbent", "And they learned it without practicing", "The Commandments, is as the likeness", "Of a donkey who is under the burden of", "Books to carry, without understanding", "One single word of them. How bad is", "The similitude of people who denied", "The Signs and Revelations of Allāh; and", "Allāh deprives the wrongdoers of His", "Guidance."],
        },
        {
          type: "verse",
          number: 6,
          lines: ["Say [O, Messenger!]: “O, you Jews! If", "You presume that you are alone", "The loved ones by Allāh rather than"],
          continues: true,
        },
      ],
    },
    {
      bookPage: 1052,
      blocks: [
        {
          type: "verse",
          number: 6,
          continued: true,
          lines: ["Other people, then invoke to Him for", "Your death if you are telling the truth, [in", "Order to attain the Paradise sooner!]{2}"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["But they will never wish for death", "Because of what their hands have", "Forwarded [for their Hereafter]", "And Allāh is Well Aware about", "The transgressors;"],
        },
        {
          type: "verse",
          number: 8,
          lines: ["And Say [O, Messenger!]: “Verily,", "The death from which you escape will", "Eventually meet you, then you will be", "Sent back to the Knower of the Unseen", "And the Visible; and He will inform", "You of what you used to do.”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 9,
          lines: ["O, you who believe! When the Call is", "Proclaimed for the Congregational prayer", "Of Friday, then hasten on to Allāh’s", "Remembrance; and quit your trade and", "Every business, for joining the assembly", "Of the prayer; that is far better for you", "If you but knew;"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["And when the prayer performance is", "Accomplished then disperse on the earth", "And seek the sustenance of Allāh’s", "Grace; and Celebrate Allāh’s Attributes", "[In your heart] frequently so that you", "May receive salvation."],
        },
        { type: "verse", number: 11, lines: ["[O, Messenger] When they hear the", "Sound of bugle of trading caravans they"], continues: true },
      ],
    },
    {
      bookPage: 1053,
      blocks: [
        {
          type: "verse",
          number: 11,
          continued: true,
          lines: ["Break away to it and leave you by", "Yourself while standing and preaching;", "Say: “What is with Allāh is better than", "Trading, since Allāh is the Source", "Sustainer.”"],
        },
        { type: "divider" },
      ],
    },
  ],
  footnotes: [
    { id: 1, blocks: [{ kind: "p", text: "Only Allāh is a king holding such attributes." }] },
    { id: 2, blocks: [{ kind: "p", text: "See 2:80 and 2:94-96" }] },
  ],
};

export default surah;
