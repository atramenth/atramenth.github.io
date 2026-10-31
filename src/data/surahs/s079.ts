import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 79 · An-Nāzi’āt — book pages 1128–1133 (verses 1–46, complete). Begins halfway down page 1128; verse 1 opens page 1129.
 * Markup: {n} footnote marker · [ ] translator’s insertion.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 79,
  pages: [
    {
      bookPage: 1128,
      heading: {
        title: "An-Nāzi’āt",
        lines: ["(The Draggers of the Souls of the Wicked)", "Revealed at Makkah", "46 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
      ],
    },
    {
      bookPage: 1129,
      blocks: [
        { type: "verse", number: 1, lines: ["By the Angels{1} who pull out the souls of", "The sinners violently;"] },
        { type: "verse", number: 2, lines: ["By the Angels{2} who draw out the souls", "Of the believers gently and with ease;"] },
        { type: "verse", number: 3, lines: ["By the Angels who fly swiftly in", "The space to do the Commands of their", "Creator,"] },
        { type: "verse", number: 4, lines: ["And who race one another in rendering", "Services;"] },
        { type: "verse", number: 5, lines: ["By the Angels who make plans and", "Regulate the affairs of the world;"] },
        { type: "verse", number: 6, lines: ["[By all these Divine Emissaries] That", "The Day of Resurrection, is when", "The earth will shake drastically", "Following the First sound of", "The Trumpet;"] },
        { type: "verse", number: 7, lines: ["And when the Second blowing of", "The Trumpet is done [people will", "Raise up];"] },
        { type: "verse", number: 8, lines: ["[On that Day] Some hearts are trembling;"] },
        { type: "verse", number: 9, lines: ["And their eyes are cast down out of fear", "And shame."] },
        { type: "divider" },
        { type: "verse", number: 10, continues: true, lines: ["The disbelieving people of"] },
      ],
    },
    {
      bookPage: 1130,
      blocks: [
        { type: "verse", number: 10, continued: true, lines: ["The world [who are neglectful about", "The Day of Judgement] say to one", "Another: “Shall we be brought back", "To the prime of our life,"] },
        { type: "verse", number: 11, lines: ["“After our bones are turned into dust?”"] },
        { type: "verse", number: 12, lines: ["And they say: “If this turns to be true", "Our return will be hardship and total", "Loss.”"] },
        { type: "verse", number: 13, lines: ["But their return will happen following a", "Single Outcry,"] },
        { type: "verse", number: 14, lines: ["And all of a sudden they will be wakeful", "And will be brought on the scene of", "The earth."] },
        { type: "divider" },
        { type: "verse", number: 15, lines: ["[O, Messenger!] Have you heard", "The story of Mūssā?"] },
        { type: "verse", number: 16, lines: ["When his Creator&Nurturer called to", "Him in the Holy Land of Tuwā,"] },
        { type: "verse", number: 17, lines: ["[And stated to him:] “Go to Firown", "Since he has indeed rebelled in the land,"] },
        { type: "verse", number: 18, lines: ["“And tell him: “Do you want to become", "Pure from the filth of disbelief and", "Transgression?"] },
        { type: "verse", number: 19, continues: true, lines: ["“And I can guide you to your Creator so", "That you may become a person who"] },
      ],
    },
    {
      bookPage: 1131,
      blocks: [
        { type: "verse", number: 19, continued: true, lines: ["Fears his Creator.”"] },
        { type: "verse", number: 20, lines: ["Then Mūssā made a performance of", "The Great Miracle;{3}"] },
        { type: "verse", number: 21, lines: ["But Firown denied the Truth [and called", "Mūssā a magician]"] },
        { type: "verse", number: 22, lines: ["He turned away and started plotting", "Against Mūssā,"] },
        { type: "verse", number: 23, lines: ["Then he collected his chiefs and", "Announced:"] },
        { type: "verse", number: 24, lines: ["“I am your exalted god!”"] },
        { type: "verse", number: 25, lines: ["So Allāh seized him with", "The punishment in the Hereafter and in", "This world due to his grave sins.{4}"] },
        { type: "verse", number: 26, lines: ["Verily, in this story is an admonishing", "Lesson for whom that fears from", "The disobedience of Allāh’s Commands."] },
        { type: "divider" },
        { type: "verse", number: 27, lines: ["[O, men!] Which one do you consider", "more difficult, the creation of you and", "Your raising up or the creation of", "The sky above you?"] },
        { type: "verse", number: 28, continues: true, lines: ["Allāh is the One Who raised the ceiling"] },
      ],
    },
    {
      bookPage: 1132,
      blocks: [
        { type: "verse", number: 28, continued: true, lines: ["Of the sky and gave it shape and order;"] },
        { type: "verse", number: 29, lines: ["He gave darkness to its Night and light", "To its Day;"] },
        { type: "verse", number: 30, lines: ["And then He expanded the Earth,"] },
        { type: "verse", number: 31, lines: ["And from the earth He brought out its", "Water [of fountains and streams] and", "Also its pasture,"] },
        { type: "verse", number: 32, lines: ["And He placed firm mountains on", "The earth;"] },
        { type: "verse", number: 33, lines: ["All these are means of livelihood and", "Provision for you people and your cattle."] },
        { type: "divider" },
        { type: "verse", number: 34, lines: ["But when the Grave Event takes place:"] },
        { type: "verse", number: 35, lines: ["On that Day man shall recollect all", "His struggles for the worldly life;"] },
        { type: "verse", number: 36, lines: ["And the Hell shall be shown to those", "Who should see it,"] },
        { type: "verse", number: 37, lines: ["But the one who has rebelled against", "Allāh,"] },
        { type: "verse", number: 38, lines: ["And has preferred the life of this world", "To the Hereafter,"] },
        { type: "verse", number: 39, continues: true, lines: ["Then indeed the Hell will be the right"] },
      ],
    },
    {
      bookPage: 1133,
      blocks: [
        { type: "verse", number: 39, continued: true, lines: ["Abode for him."] },
        { type: "verse", number: 40, lines: ["But the one who fears to stand in", "Allāh’s Presence on the Day of", "Judgement and has forbidden himself", "From any vain desire,"] },
        { type: "verse", number: 41, lines: ["Then indeed the Garden of Paradise will", "Be the right abode for him."] },
        { type: "divider" },
        { type: "verse", number: 42, lines: ["[O, Messenger!] They ask you when will", "Be the Appointed Hour of the Judgement", "Day?"] },
        { type: "verse", number: 43, lines: ["But what knowledge do you have about", "It to say anything?"] },
        { type: "verse", number: 44, lines: ["Only your Creator has the knowledge of", "The final destination."] },
        { type: "verse", number: 45, lines: ["[O, Messenger!] You are a Warner", "Only for those who fear the Day of", "Resurrection."] },
        { type: "verse", number: 46, lines: ["When the disbelievers see the Day of", "Judgement, it will seem to them that", "They have not stayed in this world, but", "Only a night or a night and the following", "Morning of it, [because the painful time", "Of Chastisement passes so slowly.]"] },
      ],
    },
  ],
  footnotes: [
    { id: 1, blocks: [{ kind: "p", text: "The Angels in charge of taking the soul of man at the time of his death." }] },
    { id: 2, blocks: [{ kind: "p", text: "The Angels in charge of taking the soul of man at the time of his death." }] },
    { id: 3, blocks: [{ kind: "p", text: "The stick became a dragon and swallowed up the ropes and the rods of the magicians." }] },
    { id: 4, blocks: [{ kind: "p", text: "Firown was drowned in the sea for his wordly punishment (20:78) and on the Day of Judgement he will enter the Hell followed by his men (11:98)" }] },
  ],
};

export default surah;
