import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 80 · Abasa — book pages 1134–1138 (verses 1–42, complete). Begins at the top of page 1134 and ends partway down page 1138.
 * Markup: {n} footnote marker · [ ] translator’s insertion.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 80,
  pages: [
    {
      bookPage: 1134,
      heading: {
        title: "Abasa",
        lines: ["(He Frowned)", "Revealed at Makkah", "42 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["The Messenger frowned and turned", "Away,{1}"] },
        { type: "verse", number: 2, lines: ["Because the blind man who came to him", "[Interrupted the discourse of the meeting", "By asking him questions.]"] },
        { type: "verse", number: 3, lines: ["[O, Messenger!] How do you know, may", "Be he has the talent to progress in", "Piety?"] },
        { type: "verse", number: 4, lines: ["Or that he may be reminded and may", "Benefit from the Reminder, [the Holy", "Qur’ān]"] },
      ],
    },
    {
      bookPage: 1135,
      blocks: [
        { type: "verse", number: 5, lines: ["But to him who is wealthy and", "Therefore feels self-sufficient,"] },
        { type: "verse", number: 6, lines: ["You pay attention,"] },
        { type: "verse", number: 7, lines: ["Whereas you have no responsibility if he", "Does not become purified from the filth", "Of polytheism and disbelief,{2}"] },
        { type: "verse", number: 8, lines: ["But as to him [the blind man] who came", "To you earnestly,"] },
        { type: "verse", number: 9, lines: ["And he fears the disobedience of", "Allāh’s Commands,"] },
        { type: "verse", number: 10, lines: ["About him you are not attentive;"] },
        { type: "verse", number: 11, lines: ["Be not like this; indeed the Holy", "Qur’ān is a Reminder [for all mankind", "Without any discrimination regarding", "Their classes and nationalities],"] },
        { type: "verse", number: 12, lines: ["For he who wants to take admonition."] },
        { type: "verse", number: 13, lines: ["These Revelations are in Books held in", "Honour,"] },
        { type: "verse", number: 14, lines: ["Kept in an exalted and purified place"] },
        { type: "verse", number: 15, lines: ["Written by the hands of", "The Representative Angels,"] },
        { type: "verse", number: 16, lines: ["Who are highly virtuous and noble."] },
        { type: "divider" },
      ],
    },
    {
      bookPage: 1136,
      blocks: [
        { type: "verse", number: 17, lines: ["Down with the ungrateful disbelieving", "Man who denies the Truth!"] },
        { type: "verse", number: 18, lines: ["Of what did Allāh create him?"] },
        { type: "verse", number: 19, lines: ["Allāh created him of a sperm-drop and", "Then gave him shape and perfection and", "His life was based on Ordainment"] },
        { type: "verse", number: 20, lines: ["Then Allāh made the Path of Guidance", "Easy for him [by sending Messengers", "And Books of Religion];"] },
        { type: "verse", number: 21, lines: ["Then He causes him to die and puts him", "In his grave;"] },
        { type: "verse", number: 22, lines: ["Then whenever He Wills, He will", "Raise him up from his grave."] },
        { type: "divider" },
        { type: "verse", number: 23, lines: ["But the disbelieving man has never", "Obeyed the Commands of his Creator;"] },
        { type: "verse", number: 24, lines: ["Man should observe the food that he", "Eats and the process that Allāh has", "Determined for its provision:"] },
        { type: "verse", number: 25, lines: ["We poured down water abundantly,"] },
        { type: "verse", number: 26, lines: ["Then We split the earth in clefts,"] },
        { type: "verse", number: 27, lines: ["And We caused the grain grow in", "The earth;"] },
        { type: "verse", number: 28, lines: ["And also grapes and herbs,"] },
      ],
    },
    {
      bookPage: 1137,
      blocks: [
        { type: "verse", number: 29, lines: ["And olive and date-palms,"] },
        { type: "verse", number: 30, lines: ["And gardens dense with trees,"] },
        { type: "verse", number: 31, lines: ["And all kinds of fruits and fodder;"] },
        { type: "verse", number: 32, lines: ["[By Allāh’s Favour] All these Bounties", "Are a provision for you and your cattle", "[So that you may be thankful to your", "Creator]."] },
        { type: "verse", number: 33, lines: ["[But those who proved ingrate and", "Disbelieved should know that they will", "Be encountered with a horried Day]:", "The Day that the dreadful sound of", "The Trumpet is sounded [for the Second", "Time],"] },
        { type: "verse", number: 34, lines: ["That will be a Day that man shall flee", "From his own brother,"] },
        { type: "verse", number: 35, lines: ["And from his mother and father,"] },
        { type: "verse", number: 36, lines: ["And from his wife and children,"] },
        { type: "verse", number: 37, lines: ["Because every body is deeply involved", "With his own misery that he cannot", "Pay attention to the others."] },
        { type: "verse", number: 38, lines: ["On that Day some people have bright", "Faces,"] },
        { type: "verse", number: 39, lines: ["Laughing and rejoicing, [they are", "The pious and they will enter", "The paradise]."] },
      ],
    },
    {
      bookPage: 1138,
      blocks: [
        { type: "verse", number: 40, lines: ["And many faces on that Day shall be", "Stained with the dust [of distress,]"] },
        { type: "verse", number: 41, lines: ["And the darkness of smoke shall cover", "Them;"] },
        { type: "verse", number: 42, lines: ["Those are the wicked disbelievers."] },
      ],
    },
  ],
  footnotes: [
    { id: 1, blocks: [{ kind: "p", text: "Once the Holy Messenger was engaged explaining the Holy Qur’ān to some Quraish leaders when a blind, poor man named Abdullāh ibn Umm-i-Maktūm enetred the house of the Messenger with the aim to learn the Holy Qur’ān; so he frequently interrupted the Messenger’s discourse by his questions and the Holy Messenger disliked his interruption and also he thought it was more valid to pay attention to those leaders who could influence their people for Islām; and he also feared that they may say: ‘The Messenger’s followers are only helpless men, blind or captives.’ Upon this Allāh the Knower of the secrets of the hearts, revealed this Sūrah. After that whenever the Holy Messenger met with Abdullāh ibn Umm-i-Maktūm said: ‘you are the man for whom Allāh punished me, good for you!’ (Commentators)" }] },
    { id: 2, blocks: [{ kind: "p", text: "See: 6:107 and 42:6" }] },
  ],
};

export default surah;
