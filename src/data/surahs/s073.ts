import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 73 · Al-Muzzammil — book pages 1100–1103 (verses 1–20, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 73,
  pages: [
    {
      bookPage: 1100,
      heading: {
        title: "Al-Muzzammil",
        lines: ["(The One Folded up in a Wrap)", "Revealed at Makkah", "20 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["O, you folded up in a wrap!"] },
        {
          type: "verse",
          number: 2,
          lines: ["Stand up for the night prayers save a", "Small portion of the night [which you", "Rest]:"],
        },
        { type: "verse", number: 3, lines: ["Half of it or a little more; [spend for", "The midnight prayer]"] },
        { type: "verse", number: 4, lines: ["Or a little more; and recite the Qur’ān", "Slow and in a clear tone;"] },
        { type: "verse", number: 5, continues: true, lines: ["Soon We shall send down to you Words"] },
      ],
    },
    {
      bookPage: 1101,
      blocks: [
        { type: "verse", number: 5, continued: true, lines: ["Of weighty value.{1}"] },
        {
          type: "verse",
          number: 6,
          lines: ["Verily, the rising by night [and leaving", "The bed is hard but it] is more suitable", "For uttering Words of Invocation and", "Adoration [and receiving inspiration", "From the Divine Presence,]"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["Because in day time you are busy", "Attending to responsibilities charged on", "You,"],
        },
        {
          type: "verse",
          number: 8,
          lines: ["So at night Celebrate your Creator’s", "Name and Attributes while devoting", "Yourself to Him completely."],
        },
        {
          type: "verse",
          number: 9,
          lines: ["Allāh is the Creator of the East and", "The West and there is no God but Him,", "So take Him as your only Protector and", "Supporter;"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["And be patient [O, Mohammad] against", "What they say against you; and keep", "Away from them in a sound manner;"],
        },
        {
          type: "verse",
          number: 11,
          lines: ["And leave these affluent and proud", "Beliers to Me; and give them a little", "Respite for a while;"],
        },
      ],
    },
    {
      bookPage: 1102,
      blocks: [
        { type: "verse", number: 12, lines: ["Since verily, with Us are: Fetters to bind", "Them and a Blazing Fire,"] },
        { type: "verse", number: 13, lines: ["And also a food that chokes and a", "Painful Chastisement;"] },
        {
          type: "verse",
          number: 14,
          lines: ["And all these [for the disbelievers] shall", "Be on the Day when the earth and", "The mountains will be in a wild shake", "And mountains will become heaps of", "Sands."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 15,
          lines: ["O, people! We have sent to you a", "Messenger, to be a witness over you as", "We did send a Messenger to Firown;"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["But Firown rebelled against", "The Messenger, so We seized him with a", "Destructive calamity;"],
        },
        {
          type: "verse",
          number: 17,
          lines: ["So if you disbelieve today, how can you", "Be secure of the punishment of", "The Terrifying Day that will make", "The children old and grey-headed?"],
        },
        {
          type: "verse",
          number: 18,
          lines: ["The Day on which the sky will be cleft", "Asunder; and Allāh’s Promise is", "Certainly to be fulfilled;"],
        },
        {
          type: "verse",
          number: 19,
          lines: ["Verily, this description [of", "The Resurrection Day] is an admonition", "For the one who wants to take a path to", "His Creator&Nurturer."],
        },
      ],
    },
    {
      bookPage: 1103,
      blocks: [
        {
          type: "verse",
          number: 20,
          lines: ["[O, Messenger!] Verily, your", "Creator&Nurturer knows that you and", "Those who follow you stand to prayer at", "Night, near two thirds of the night or", "Half or one third of the night; and so do", "A party of those with you and only Allāh", "Is Able to keep the due measure for", "The night and the day knowing that you", "Can never keep exact measure of time.", "Allāh Knows that some of you are sick;", "Some travelling in the land seeking", "Allāh’s bounty through trade; and", "Another group are busy fighting in", "Allāh’s Path [so all of you will not be", "Able to perform the night-prayer", "Regularly]; then recite of the Qur’ān as", "Much it is possible and easy for you;", "And establish prayers regularly; and pay", "Alms and lend to Allāh a Fair Loan [by", "Lending money to the needy]; and", "Whatever good you send ahead of", "Yourself, you will find it with Allāh.", "Seek all of you the Forgiveness of Allāh:", "Verily, Allāh is the Merciful Forgiving."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "In this Sūrah which was reaveld after Al-Alaq, the first Sūrah of the Holy Qur’ān, the Holy Messenger receives the preparatory Divine Instructions from Allāh’s Presence. Here he is enjoined to spend most of the night in praying and invocation in order to become prepared for the Mission and for receiving “the words of the weigty value”,so the newly appointed Messenger is Commanded to stay up half of the night or even more; later it is pronounced that night-prayer is obligatory for the Holy Messenger, though optional for the Muslims in general (17:79) but majority of the translators of the English translations of the Holy Qur’ān have read the ‘Āyat with the opposite meaning such as: stand to prayer by night but not all of the night, half of it or a little less (see 2&3)." },
      ],
    },
  ],
};

export default surah;
