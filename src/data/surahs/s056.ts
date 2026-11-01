import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 56 · Al-Wāqi’ah — book pages 1011–1020 (verses 1–96, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 56,
  pages: [
    {
      bookPage: 1011,
      heading: {
        title: "Al-Wāqi’ah",
        lines: ["(The Event of the Resurrection Day)", "Revealed at Makkah", "96 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["When the event of Resurrection comes", "To pass;"] },
        { type: "verse", number: 2, lines: ["The event about which there is no lie;"] },
        {
          type: "verse",
          number: 3,
          lines: ["It is the Day that will cause some people", "To be disgraced and some to be exalted."],
        },
        { type: "verse", number: 4, lines: ["The earth will be shaken by the most", "Severe shake,"] },
        { type: "verse", number: 5, lines: ["And mountains will be crashed and", "Turned into dust;"] },
        { type: "verse", number: 6, lines: ["And the dust will become scattered", "Particles [in the air];"] },
        { type: "verse", number: 7, lines: ["And you [mankind] will be grouped into", "Three classes:"] },
      ],
    },
    {
      bookPage: 1012,
      blocks: [
        {
          type: "verse",
          number: 8,
          lines: ["The first group are the Companions of", "The Right Hand; how Fortunate they", "Are! [Their Record of Deeds is in their", "Right Hand and they enter the Paradise.]"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["The second group are the Companions", "Of the Left Hand; how misfortunate", "They are! [Their Record of Deeds is in", "Their left hand, and they enter the Hell.]"],
        },
        { type: "verse", number: 10, lines: ["And those Foremost in Faith will be", "Foremost and ahead of others:"] },
        { type: "verse", number: 11, lines: ["This group will be the Nearest to", "Allāh;"] },
        { type: "verse", number: 12, lines: ["They will abide in the exclusive Blissful", "Garden,"] },
        { type: "verse", number: 13, lines: ["Many of them are from the old,"] },
        { type: "verse", number: 14, lines: ["And a few from the later{1}"] },
        { type: "verse", number: 15, lines: ["On couches encrusted with gold and", "Precious stones"] },
        { type: "verse", number: 16, lines: ["Which are placed face to face, they will", "Be reclining;"] },
        { type: "verse", number: 17, lines: ["The boys of perpetual youth will serve", "Them:"] },
      ],
    },
    {
      bookPage: 1013,
      blocks: [
        { type: "verse", number: 18, lines: ["With goblets, jars and cups filled with", "Pure drink;"] },
        { type: "verse", number: 19, lines: ["A drink which will neither cause", "Headache nor intoxication;"] },
        { type: "verse", number: 20, lines: ["And all fruits that they choose is", "Available for them,"] },
        { type: "verse", number: 21, lines: ["And also flesh of the fowls that they", "Desire."] },
        { type: "verse", number: 22, lines: ["And there will be maidens with large", "Black eyes [to be their wives],"] },
        { type: "verse", number: 23, lines: ["They are like pearls preserved", "In shells;"] },
        { type: "verse", number: 24, lines: ["A reward for the good deeds of their", "Past;"] },
        { type: "verse", number: 25, lines: ["In the Paradise they will not hear any", "Vulgar or sinful talks:"] },
        { type: "verse", number: 26, lines: ["Only the word Salām{2} is exchanged", "Between them repeatedly."] },
        { type: "divider" },
        { type: "verse", number: 27, lines: ["Regarding the Companions of the Right", "Hand, how are they?"] },
        { type: "verse", number: 28, lines: ["They are sitting under free-thorn", "Lote-trees,"] },
      ],
    },
    {
      bookPage: 1014,
      blocks: [
        { type: "verse", number: 29, lines: ["And under the Acacia trees which their", "Flowers are piled upon one another,"] },
        { type: "verse", number: 30, lines: ["Also under the trees of expanded", "Shades,"] },
        { type: "verse", number: 31, lines: ["And by the ever flowing streams."] },
        { type: "verse", number: 32, lines: ["And fruit is in abundance,"] },
        { type: "verse", number: 33, lines: ["Fruits are in all seasons; and they are", "Not forbidden to eat,"] },
        { type: "verse", number: 34, lines: ["Men are with honourable wives;"] },
        { type: "verse", number: 35, lines: ["We have created them of a special", "Creation:"] },
        { type: "verse", number: 36, lines: ["They are all made virgins,"] },
        { type: "verse", number: 37, lines: ["Pretty and of the same age,"] },
        { type: "verse", number: 38, lines: ["All these blessings are for", "The Companions of the Right Hand;"] },
        { type: "verse", number: 39, lines: ["A good number of them are from", "The old [nations before Islām]"] },
        { type: "verse", number: 40, lines: ["And a good number from the later", "Generations of the Last Religion."] },
        { type: "verse", number: 41, lines: ["And those Companions of the Left", "Hand; how will be their condition?"] },
        { type: "verse", number: 42, lines: ["They will be in the middle of a hot wind", "Of the Fire and boiling fluid,"] },
      ],
    },
    {
      bookPage: 1015,
      blocks: [
        { type: "verse", number: 43, lines: ["And under the shade of black smoke,"] },
        { type: "verse", number: 44, lines: ["Neither refreshing nor pleasant;"] },
        { type: "verse", number: 45, lines: ["In the world indeed they were leading a", "Pleasure-seeking life among luxury;"] },
        { type: "verse", number: 46, lines: ["And they were persistent in committing", "The Grave Sin of polytheism;"] },
        {
          type: "verse",
          number: 47,
          lines: ["And they used to say: “Shall we be", "Resurrected after we die and our", "Bones turn into dust?"],
        },
        { type: "verse", number: 48, lines: ["“Also our ancestors?”"] },
        {
          type: "verse",
          number: 49,
          lines: ["Say [O, Messenger!]: “Yes! Verily, those", "Of the first generation and those of", "The later,"],
        },
        { type: "verse", number: 50, lines: ["“All of them will surely be gathered", "Together on the Appointed Day;"] },
        {
          type: "verse",
          number: 51,
          lines: ["“And O, you the disbelievers and beliers", "Of the Truth! [You, Quraish pagans, will", "Be also included among the Companions", "Of the Left Hand]:"],
        },
        { type: "verse", number: 52, lines: ["“You will surely taste of the Zaqqūm", "Tree;"] },
        { type: "verse", number: 53, lines: ["“And will fill up your belies with it;"] },
        { type: "verse", number: 54, lines: ["“And you will drink of the stinky boiling", "Water on top of it;"] },
      ],
    },
    {
      bookPage: 1016,
      blocks: [
        { type: "verse", number: 55, lines: ["“You shall drink like the camels who", "Suffer the sickness of thirst.”"] },
        {
          type: "verse",
          number: 56,
          lines: ["And this is the Ordained reception", "For the Companions of the Left Hand", "On the Resurrection Day."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 57,
          lines: ["O, mankind! We [Allāh, the Almighty]", "Are the One Who Created you, then", "Why do you not accept that it is easy for", "Us the recreation of you?"],
        },
        { type: "verse", number: 58, lines: ["Have you observed the sperm-drop that", "You pour in the womb of your wife?"] },
        { type: "verse", number: 59, lines: ["Are you the one who created the sperm", "And the child or are We the Creator?"] },
        { type: "verse", number: 60, lines: ["We have Ordained death among", "The human community and no power", "Can bar Us,"] },
        {
          type: "verse",
          number: 61,
          lines: ["From bringing another", "Nation in your place and creating you", "Again in the form of those you do not", "Know;"],
        },
        {
          type: "verse",
          number: 62,
          lines: ["And you have known and experienced", "The first life of yours, then why do you", "Not take heed? [That the Creator of this", "World is Able to create the Resurrection]"],
        },
        { type: "verse", number: 63, lines: ["Have you observed your farm and", "The seed that you sow in the ground?"] },
      ],
    },
    {
      bookPage: 1017,
      blocks: [
        { type: "verse", number: 64, lines: ["Do you cause it to yield production or", "Are We the Producer?"] },
        {
          type: "verse",
          number: 65,
          lines: ["If it be Our Will We can turn your", "Green and productive farm into dry", "Grass and straw; and you would", "Be left in a sorrowful surprise,"],
        },
        { type: "verse", number: 66, lines: ["Saying: “We have fallen into a great", "Loss!"] },
        { type: "verse", number: 67, lines: ["“We are indeed deprived of any", "Product.”"] },
        { type: "verse", number: 68, lines: ["Have you [O, people] observed your", "Drinking-water?"] },
        { type: "verse", number: 69, lines: ["Do you send rain from the clouds or do", "We?"] },
        {
          type: "verse",
          number: 70,
          lines: ["If it were Our Will, We could turn it", "Into salt-water, then why do you not", "Express your thanks?"],
        },
        { type: "verse", number: 71, lines: ["Have you observed the fire which you", "Make out of wood?"] },
        { type: "verse", number: 72, lines: ["Is it you who grew the tree which wood", "Is taken from it or did We grow it?"] },
        {
          type: "verse",
          number: 73,
          lines: ["We have made the fire a reminder of", "The Hell-Fire; and it also has other", "Benefits for the people’s daily life, in", "The cities and for the deserts dwellers;"],
        },
      ],
    },
    {
      bookPage: 1018,
      blocks: [
        {
          type: "verse",
          number: 74,
          lines: ["So [O, man! Be thankful for all these", "Bounties] and Celebrate the Name and", "The Attributes of your Creator&Nurturer,", "The Supreme Great."],
        },
        { type: "divider" },
        { type: "verse", number: 75, lines: ["So I swear by the rising and setting", "Places of the stars,"] },
        { type: "verse", number: 76, lines: ["Which is indeed a great oath if you", "But knew,"] },
        { type: "verse", number: 77, lines: ["That this is indeed the most honourable", "Divine Text,{3}"] },
        { type: "verse", number: 78, lines: ["[Taken] From the Preserved Tablet,"] },
        { type: "verse", number: 79, lines: ["And that no one should touch it but", "The pure ones;"] },
        {
          type: "verse",
          number: 80,
          lines: ["The Descending of it is from the Creator", "Of the worlds and their inhabitants;"],
        },
        {
          type: "verse",
          number: 81,
          lines: ["Do you consider such a Word of", "Message a matter for disputation and", "Denial?"],
        },
        {
          type: "verse",
          number: 82,
          lines: ["And do you [hypocrites] make your", "Sustenance through opposing and", "Denying it? [Just to please the enemies", "Of Islām]"],
        },
      ],
    },
    {
      bookPage: 1019,
      blocks: [
        { type: "verse", number: 83, lines: ["But when a fellow of you is dying and", "His heart reaches his throat,"] },
        { type: "verse", number: 84, lines: ["Why do you only watch him?"] },
        {
          type: "verse",
          number: 85,
          lines: ["But We [through our Angels who take", "His soul] are nearer to him than you, but", "You cannot see;"],
        },
        { type: "verse", number: 86, lines: ["Then if you are exempted from", "The reckoning [as you claim],"] },
        {
          type: "verse",
          number: 87,
          lines: ["[And you are so powerful to resist", "Allāh’s Retribution] Why then do you not", "Bring back the soul of the man", "[Whom you witness his death?]"],
        },
        { type: "verse", number: 88, lines: ["If the man who is in the state of dying", "Be of those Nearest to Allāh,"] },
        { type: "verse", number: 89, lines: ["For him there will be comfort and", "Flowers in the Garden of Bliss;"] },
        { type: "verse", number: 90, lines: ["And if he be of the Companions of", "The Right Hand,"] },
        {
          type: "verse",
          number: 91,
          lines: ["[It will be said to him:] “Salutation to", "You who are one of the Companions of", "The Right Hand.”"],
        },
        {
          type: "verse",
          number: 92,
          lines: ["And if he be of the beliers of", "The Truth, [i.e. ,the Companions of", "The Left Hand],"],
        },
        { type: "verse", number: 93, lines: ["For him will be the entertainment with", "The boiling water,"] },
      ],
    },
    {
      bookPage: 1020,
      blocks: [
        { type: "verse", number: 94, lines: ["And will burn in the Hell Fire;"] },
        {
          type: "verse",
          number: 95,
          lines: ["Verily, this fulfillment of", "The Truth [against those who denied", "The Hereafter] is of assured Certainty."],
        },
        {
          type: "verse",
          number: 96,
          lines: ["So [O, Messenger!] Celebrate", "The Absolute Purity of the Name of", "Your Creator&Nurturer, the Supreme", "Great."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "I believe, the Foremosts are the Messengers of Allāh not their followers: Word of Revelation 10:27 discriminates them from the Companions of the Right Hand, so they are the Messengers. For earlier generations several Messengers were sent; and then it was limited to one Messenger like Christianity and Islām." },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "Salute! Hello; good morning; good day. Salām is also one of Allāh’s Names of Outstanding Excellence." },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "The non-active Lām such as in لقرآن which usually emphasises the meaning, here stands as the definite article “the” in the case of introducing some outstanding position; so the word Qur’ān should be treated as a verbal noun rather than proper noun i.e. , it is about the Holy Book not the Holy Book itself. Thus translations such as “a Qur’ān most honourable” (A.Y) or “a bountous Qur’ān” (M.M) are not correct." },
      ],
    },
  ],
};

export default surah;
