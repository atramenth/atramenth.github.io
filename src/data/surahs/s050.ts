import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 50 · Qāf — book pages 967–973 (verses 1–45, complete). Begins at the top of page 967 and ends partway down page 973.
 * Markup: {n} footnote marker · [ ] translator’s insertion.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 50,
  pages: [
    {
      bookPage: 967,
      heading: {
        title: "Qāf",
        lines: ["(One of the Divine Abbreviated Letters)", "Revealed at Makkah;", "45 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Qāf.{1} By the Glorious Qur’ān [that", "Mohammad is the Messenger of Allāh]"] },
        { type: "verse", number: 2, lines: ["They are surprised that a Messenger has", "Come to them from their own people", "So the disbelievers said: “This is a very", "Strange thing that he claims!"] },
        { type: "verse", number: 3, lines: ["“Once we are dead and became dust, is", "It possible to be alive again? That is an", "Impossible return!”"] },
        { type: "verse", number: 4, lines: ["We do know how much the earth [of", "Their graves] decreases from their", "Bodies; and also with Us is a Preserving", "Book which has recorded their deeds:"] },
        { type: "verse", number: 5, continues: true, lines: ["But they denied the Truth, [the Holy"] },
      ],
    },
    {
      bookPage: 968,
      blocks: [
        { type: "verse", number: 5, continued: true, lines: ["Qur’ān] when came to them and that is", "Why they are confused and lost;"] },
        { type: "verse", number: 6, lines: ["Do they not look at the sky above them,", "To see how We have created it and", "Adorned it? [With sun and moon and", "Stars] and the structure of it is flawless;"] },
        { type: "verse", number: 7, lines: ["And regarding the Earth, We", "Spread it out and set thereon strong", "Mountains to keep it firm; and", "Produced therein all kinds of greens and", "Plants;"] },
        { type: "verse", number: 8, lines: ["These are all reminders for", "The constant-invoking believers [they are", "The ones who reflect about Allāh’s", "Power of Creation.]"] },
        { type: "verse", number: 9, lines: ["And We sent down the blissful rain from", "The sky; and We produced with it", "Gardens and grains for the harvest;"] },
        { type: "verse", number: 10, lines: ["And also We grew tall palm-trees with", "Heavy clusters:"] },
        { type: "verse", number: 11, lines: ["These are all sustenance for the human", "Creatures; and these symbols of life", "Come to existence by the rain, and", "We thereby give life to the withered and", "Dry land; and such will be", "The Resurrection of the Dead."] },
        { type: "divider" },
      ],
    },
    {
      bookPage: 969,
      blocks: [
        { type: "verse", number: 12, lines: ["Before these pagans of Makkah who", "Belie you [about the Hereafter], there", "Were, the people of Nūh, the dwellers of", "Rass and the Thamūd,"] },
        { type: "verse", number: 13, lines: ["And the ‘Ād people and Firown’s men", "And the brothers of Lūt,"] },
        { type: "verse", number: 14, lines: ["And also the dwellers of Aikah, and", "The people of Tubba, all of them", "Belied the Messengers, so My threat", "Regarding the Chastisement of", "The disbelievers was fulfilled over them."] },
        { type: "verse", number: 15, lines: ["Were We weary with the first creation", "That they should be doubtful about", "Resurrection which is much easier?"] },
        { type: "verse", number: 16, lines: ["And indeed We were the One Who", "Created man and We know what does", "His passionate-self whisper to his heart", "And [through the Embracing", "Knowledge] We are nearer to him than", "His jugular vein;"] },
        { type: "verse", number: 17, lines: ["Know that there are two Angels who", "Record man’s deeds, one is sitting on", "The right [shoulder] and one on the left,"] },
        { type: "verse", number: 18, lines: ["And there is one Angel who records", "The word and the speech of him", "And not a single word is left out of what", "He utters."] },
      ],
    },
    {
      bookPage: 970,
      blocks: [
        { type: "verse", number: 19, lines: ["And eventualty the agony of death", "Which is true comes to man and he will", "Be told: “This is the thing that you tried", "To escape from, all your life.”"] },
        { type: "verse", number: 20, lines: ["And the Trumpet shall be blown and", "That is the Day of fulfillment of", "The dreadful Chastisement which has", "Been promised;"] },
        { type: "verse", number: 21, lines: ["And each person shall arrive [to", "The Scene of Taking Account] while he", "Is accompanied by an Angel who drives", "Him forth, and an Angel who bears him", "Witness;"] },
        { type: "verse", number: 22, lines: ["It will be stated to him: “You were", "Neglectful of this Day, now We have", "Removed the veil from your eyes and", "Now your sight is sharp.”"] },
        { type: "verse", number: 23, lines: ["And his guard Angel will say: “His", "Record of Deeds is ready with me.”"] },
        { type: "verse", number: 24, lines: ["[It will be stated to the guard Angels:]", "“Cast both of you into the Hell any", "Rebellious disbeliever;"] },
        { type: "verse", number: 25, lines: ["The one who hindered others from", "Doing charity; transgressed all limits and", "Cast doubt about the Truth,"] },
        { type: "verse", number: 26, lines: ["“And he who considered partners for", "Allāh; cast him into the most severe", "Chastisement.”"] },
      ],
    },
    {
      bookPage: 971,
      blocks: [
        { type: "verse", number: 27, lines: ["Now his Satanic companion will say:{2}", "“O, our Creator! I did not make him", "Rebellious but he himself was lost in a", "Severe error.”"] },
        { type: "verse", number: 28, lines: ["Allāh will state: “Do not dispute in My", "Presence; I had before promised you of", "The due Chastisement;"] },
        { type: "verse", number: 29, lines: ["“My Word of Promise does not change", "And I do not cause the least injustice to", "My creatures.”"] },
        { type: "verse", number: 30, lines: ["On that Day We will ask the Hell: “Are", "You filled completely?” It will reply:", "“Are there any more?”"] },
        { type: "divider" },
        { type: "verse", number: 31, lines: ["On that Day the Paradise will be", "Brought near to the pious and there is", "No distance in between;"] },
        { type: "verse", number: 32, lines: ["It will be stated to them: “This is what", "Was promised to you people who", "Worshipped Allāh sincerely; and", "Preserved your covenant with Him", "[Regarding obeying His Commands];"] },
        { type: "verse", number: 33, lines: ["“To those of you who feared Ar-Rahmān,", "The Unseen, and brought to", "His Presence Forgiveness-seeking", "Hearts [it will be stated:]"] },
        { type: "verse", number: 34, continues: true, lines: ["“Now enter you therein in peace and"] },
      ],
    },
    {
      bookPage: 972,
      blocks: [
        { type: "verse", number: 34, continued: true, lines: ["Security! This is the [first day] of", "The Lasting Life.”{3}"] },
        { type: "verse", number: 35, lines: ["There they will have all that they desire", "And there are other blissful things with", "Us [which is not mentioned yet]."] },
        { type: "verse", number: 36, lines: ["And how many generations We", "Destroyed who were stronger than these", "Pagans and they conquered so many", "Lands [yet when the Divine", "Chastisement overtook them, they could", "Find no refuge.] Is there any refuge for", "The wrongdoers?"] },
        { type: "verse", number: 37, lines: ["Verily, the above mentioned is a", "Reminder for he who has intellect and", "Who gives ear to the Truth and who has", "Power of analyzing the events that he", "Does witness."] },
        { type: "divider" },
        { type: "verse", number: 38, lines: ["And We did create the heavens and", "The earth and what is between them in", "Six Days, but tiresome did not touch Us."] },
        { type: "divider" },
        { type: "verse", number: 39, lines: ["So [O, Messenger!] be patient against", "What the enemies of Truth say; and", "Express your thanks to Allāh and", "Celebrate your Creator&Nurturer’s", "Absolute purity before sunrise and after", "Sunset;"] },
      ],
    },
    {
      bookPage: 973,
      blocks: [
        { type: "verse", number: 40, lines: ["And also during some parts of the night", "And apart from your regular prayers and", "Prostrations, Celebrate His Absolute", "Purity;{4}"] },
        { type: "verse", number: 41, lines: ["And listen to the Caller on the Day", "That [by Allāh’s Command] will call", "From a very near place:{5}"] },
        { type: "verse", number: 42, lines: ["The Day when all will hear the sound", "Of a strong Blast of the true event and", "Which will be the Day of coming out of", "The graves;"] },
        { type: "verse", number: 43, lines: ["Verily, We are the One Who gives life", "And causes death; and to Us is the", "Return of all;"] },
        { type: "verse", number: 44, lines: ["On that Day the earth will be rent", "Asunder and will let them come out of", "Their graves hurrying; and the gathering", "Of all will be quite easy for Us;"] },
        { type: "verse", number: 45, lines: ["We are the Supreme Knower of what", "These pagans say; and it is not for you", "[O, Messenger] to force them to have", "Faith in the Truth, so admonish with", "The Holy Qur’ān only those who fear", "My Warnings."] },
      ],
    },
  ],
  footnotes: [
    { id: 1, blocks: [{ kind: "p", text: "See note on 2:1" }] },
    { id: 2, blocks: [{ kind: "p", text: "The sinful tries to refer his sin to his Satanic companion, but he rejects the accusation. (Commentators)" }] },
    { id: 3, blocks: [{ kind: "p", text: "Until the Appointed Time decided by Allāh, the Almighty, since the Absolute Eternal Life belongs to Allāh only." }] },
    { id: 4, blocks: [{ kind: "p", text: "The optional and additional prayers known as Nawāfel are enjoined here. (Commentators)" }] },
    { id: 5, blocks: [{ kind: "p", text: "The voice of the Divine Caller is so loud that every one will presume it is near him." }] },
  ],
};

export default surah;
