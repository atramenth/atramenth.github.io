import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 81 · At-Takwīr — book pages 1138–1141 (verses 1–29, complete). Begins halfway down page 1138 and ends partway down page 1141.
 * Markup: {n} footnote marker · [ ] translator’s insertion.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 81,
  pages: [
    {
      bookPage: 1138,
      heading: {
        title: "At-Takwīr",
        lines: ["(The Folding up)", "Revealed at Makkah", "29 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["When the shining sun is folded up;"] },
        { type: "verse", number: 2, lines: ["And when the stars lose their lights;"] },
        { type: "verse", number: 3, lines: ["And when the mountains are removed", "And set in motion and sweep away like", "Mirage;"] },
        { type: "verse", number: 4, lines: ["And when the she-camels [just about", "To deliver their young] are abandoned;{1}"] },
        { type: "verse", number: 5, lines: ["And when the wild beasts are gathered", "Together;"] },
      ],
    },
    {
      bookPage: 1139,
      blocks: [
        { type: "verse", number: 6, lines: ["And when the seas boil over;"] },
        { type: "verse", number: 7, lines: ["And when the souls are united with", "Their bodies;"] },
        { type: "verse", number: 8, lines: ["And when the female infant, burried alive,", "Shall be questioned:"] },
        { type: "verse", number: 9, lines: ["“For what sin was she put to death?”"] },
        { type: "verse", number: 10, lines: ["And when the Book of Deeds shall be", "Laid open;"] },
        { type: "verse", number: 11, lines: ["And when the veil of the sky is", "Removed;"] },
        { type: "verse", number: 12, lines: ["And when the Hell is kindled to", "Flaming Fire;"] },
        { type: "verse", number: 13, lines: ["And when the Paradise shall be brought", "Near for the believers;"] },
        { type: "verse", number: 14, lines: ["Then every soul will know what has he", "Provided for his Hereafter, [good or", "Evil.]"] },
        { type: "divider" },
        { type: "verse", number: 15, lines: ["So by the stars that disappear during", "The day;"] },
        { type: "verse", number: 16, lines: ["Those that move swiftly and hide from", "The eye sight;"] },
        { type: "verse", number: 17, lines: ["And by the night when it departs;"] },
        { type: "verse", number: 18, continues: true, lines: ["And by the dawn as it breaths with"] },
      ],
    },
    {
      bookPage: 1140,
      blocks: [
        { type: "verse", number: 18, continued: true, lines: ["Light;"] },
        { type: "verse", number: 19, lines: ["[By all these oaths that] Verily, this", "Qur’ān is the Divine Word that the most", "Honourable Angel Emissary has brought", "From Allāh to His Messenger,"] },
        { type: "verse", number: 20, lines: ["A mighty Angel who is of a high rank in", "The Presence of Allāh, the Owner of", "Arsh [the Throne of Authority],"] },
        { type: "verse", number: 21, lines: ["This Angel Emissary{2} is obeyed by", "The Angels and also is trustworthy in", "Conveying Allāh’s Words of Revelation."] },
        { type: "divider" },
        { type: "verse", number: 22, lines: ["O, you people! Know that your", "Supervisor is not a mad man [as", "The disbelievers accuse him],"] },
        { type: "verse", number: 23, lines: ["And indeed he has met the Angel Jibrāīl", "Near the horizon quite clearly;"] },
        { type: "verse", number: 24, lines: ["And he{3} does not withhold out of envy", "And niggardliness what is revealed to", "Him from the Unseen;"] },
        { type: "verse", number: 25, lines: ["And this Qur’ān is not at all mingled", "With the words of the accursed Satan;"] },
        { type: "verse", number: 26, lines: ["Then [O, mankind] where are you going?"] },
      ],
    },
    {
      bookPage: 1141,
      blocks: [
        { type: "verse", number: 27, lines: ["Verily, this Qur’ān is a Reminder", "For mankind throughout the world,"] },
        { type: "verse", number: 28, lines: ["A Reminder to whoever who is", "In search of the Truth and who wishes to", "Be on the Straight Path,"] },
        { type: "verse", number: 29, lines: ["And [you who are in search of the Truth]", "Shall not wish anything unless it be", "The Will of Allāh, the Creator of", "The worlds."] },
      ],
    },
  ],
  footnotes: [
    { id: 1, blocks: [{ kind: "p", text: "The most precious property to the Arabs was the she-camel around the time of delivering her young." }] },
    { id: 2, blocks: [{ kind: "p", text: "Jebrāīl (Gabriel)" }] },
    { id: 3, blocks: [{ kind: "p", text: "The Holy Messenger" }] },
  ],
};

export default surah;
