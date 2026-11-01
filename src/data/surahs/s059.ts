import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 59 · Al-Hashr — book pages 1035–1041 (verses 1–24, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Page 1035 opens with the end of Sūrah 58, above the heading of this sūrah.
 */
const surah: SurahData = {
  number: 59,
  pages: [
    {
      bookPage: 1035,
      heading: {
        title: "Al-Hashr",
        lines: ["(The Promised Gathering)", "Revealed at Madīnah", "24 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["Whatever is in the heavens and", "On the earth, they all Celebrate", "The Attributes and the Absoulute Purity", "Of Allāh; and He is the Source-Wisdom", "Supremepower [in the whole Existence;]"],
        },
        {
          type: "verse",
          number: 2,
          lines: ["He is the One Who drove out", "The disbelievers of the people of", "The Book from their homeland at their", "First encounter [with the Muslims]; you", "Did not think that you could expel them", "And also thought that their strong", "Fortresses would defend them against", "Allāh’s Wrath, but Allāh’s Chastisement", "Befell upon them from where they did", "Not expect; and He cast terror into"],
          continues: true,
        },
      ],
    },
    {
      bookPage: 1036,
      blocks: [
        {
          type: "verse",
          number: 2,
          continued: true,
          lines: ["Their hearts to the extent that they", "Destroyed their houses with their own", "Hands and with the hands of", "The believers; so O, you men of insight!", "Take admonition from this event;"],
        },
        {
          type: "verse",
          number: 3,
          lines: ["Had it not been that Allāh had", "Ordained exile for them as a", "Punishment, He would have surely", "Punished them in this world; and in", "The Hereafter for them will be", "The Chastisement of the Fire;"],
        },
        {
          type: "verse",
          number: 4,
          lines: ["That is so because they did oppose", "Allāh and His Messenger; and whoever", "Opposes Allāh should know that Allāh", "Is the Severe Retributing;"],
        },
        {
          type: "verse",
          number: 5,
          lines: ["It was by Allāh’s Command what you", "Cut down of the palm-trees [of", "The gardens of the Jews] or what you left", "standing on their roots; you did that", "Because Allāh had Intended to disgrace", "The disobedients."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 6,
          lines: ["[O, you Muslims!] Whatever Allāh gave", "As booties to His Messenger was some", "Property for which [you made no special", "Effort and did not go through any", "Hardship and] you made no expedition", "With either cavallery or mounting on", "The camels. The truth is that according", "To the Divine Line of Conduct, Allāh by", "The Divine Ordainment causes His"],
          continues: true,
        },
      ],
    },
    {
      bookPage: 1037,
      blocks: [
        { type: "verse", number: 6, continued: true, lines: ["Messengers to overcome anyone He", "Wills; and Allāh is Powerful over all", "Things;"] },
        {
          type: "verse",
          number: 7,
          lines: ["What Allāh has put at the disposal of", "His Messenger, taken from the people of", "The townships, belongs to Allāh, to His", "Messenger and his relatives{1} and", "Orphans and to the poor and to", "The wayfarers; since these booties", "Should not fall in the hands of", "The wealthy men among you; so take", "What your Messenger gives you, and", "Whatever he forbids you, abstain from", "It; and fear from the disobedience of", "Allāh’s Commands; verily, Allāh is", "The Severe Retributing;"],
        },
        {
          type: "verse",
          number: 8,
          lines: ["Some of the booties [taken from", "The Banī Nazīr Jews] should be given to", "The needy of the Emigrants (Mohājerīn)", "Who were driven out from their homes", "And property; and who are seeking", "Allāh’s Grace and Pleasure; and they do", "Help Allāh and His Messenger in", "Allāh’s Path; and they are indeed sincere", "In their deeds;"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["And [these booties are also for] those", "Who before them had home in “the", "Home of Migration and Faith”;{2} they love", "Those who came to them as Emigrants;", "And they do not envy them for what they"],
          continues: true,
        },
      ],
    },
    {
      bookPage: 1038,
      blocks: [
        {
          type: "verse",
          number: 9,
          continued: true,
          lines: ["Are given and they prefer them over", "Themselves even if they need the same", "Things; and those who are secure from", "The greed of their own souls, [like these", "Assisters] they have indeed attained", "Salvation;"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["And those who came to Madīnah after", "Them as Emigrants pray: “O, our", "Creator&Nurturer! Forgive us and our", "Brothers who were ahead of us in", "Entering into the Faith; and please", "Remove from our hearts envy and", "Jealousy against those who have", "Attained Faith before us; O, our", "Creator&Nurturer! Indeed You are", "The Merciful Compassionate.”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 11,
          lines: ["[O, Messenger] Have you not observed", "Those hypocrites who say to their", "Fellows of the disbelieving people of", "The Book:{3} “If these Muslims expel you,", "We will certainly go out with you and we", "Shall never obey people [such as", "Mohammad] against you; and if they", "Start a fight against you we will surely", "Help you.” But Allāh is the Witness that", "They are liars:"],
        },
        {
          type: "verse",
          number: 12,
          lines: ["Since if the Jews are expelled never will", "The hypocrites go out with them; and if", "They are invaded in fight they will not", "Give them any help; and if they start", "Helping them, soon they will turn their"],
          continues: true,
        },
      ],
    },
    {
      bookPage: 1039,
      blocks: [
        { type: "verse", number: 12, continued: true, lines: ["Backs, so they will not be of any help", "For the jews;"] },
        {
          type: "verse",
          number: 13,
          lines: ["Verily, these Jews [and hypocrites] feel", "More fear of you than Allāh and that is", "Due to their ignorance [since they do not", "Understand that your power stems from", "Your Faith in Allāh];"],
        },
        {
          type: "verse",
          number: 14,
          lines: ["They do not fight with you unless in", "The cities with strong fortresses [that", "They can flee in them] or from behind", "The walls of their homes [that they can", "Cast stones while you do not see them;]", "Their power of fighting among", "Themselves is strong, but they cannot", "Resist you Muslims; you may consider", "Them a united group but there hearts", "Towards one another is divided and this", "Is because they are a folk who lack", "Wisdom;"],
        },
        {
          type: "verse",
          number: 15,
          lines: ["They are like the Jews of Bani Qainuqāa", "Who were before them [and also were", "Turned out of Madīnah]; they tasted", "The evil doom of their deeds; and for", "Them will also be the painful", "Chastisement in the Hereafter."],
        },
        {
          type: "verse",
          number: 16,
          lines: ["And the case of the hypocrites is like", "That of Satan when he tempts man", "Saying: “Disbelieve in Allāh” but in", "The Hereafter he will say to those who", "Disbelieved: “I am free of you, I fear", "Allāh, the Creator of the worlds.”{4}"],
        },
      ],
    },
    {
      bookPage: 1040,
      blocks: [
        {
          type: "verse",
          number: 17,
          lines: ["And the end of all of them, Satan and", "The deceived ones will be that they both", "Will burn in the Fire and shall abide", "Therein forever; and such is the", "Recompense of the disbelievers!"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 18,
          lines: ["O, you who believe! Fear from", "The disobedience of Allāh’s Commands;", "And it is for any man to see what he has", "Forwarded for his tomorrow, for", "The Reckoning Day; so fear from", "The disobedience of Allāh’s Commands;", "Verily, Allāh is Aware of whatever you", "Do;"],
        },
        {
          type: "verse",
          number: 19,
          lines: ["And do not be like those who forgot", "Allāh’s Remembrance, so Allāh caused", "Them to forget themselves [and thus", "They did not care about their conduct so", "They ruined themselves]; such are", "Indeed the rebellious transgressors."],
        },
        {
          type: "verse",
          number: 20,
          lines: ["They are not equal the inhabitants of", "The Fire and the inhabitants of", "The Paradise: The inhabitants of", "The Paradise are indeed the fortunate", "Ones."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 21,
          lines: ["Had We sent down this Qur’ān on a", "Mountain you would have surely seen it", "Cleft asunder and crashed due to", "The Highness of the Divine Statement", "And from fear of Allāh; We explain", "The Words of Revelation by such"],
          continues: true,
        },
      ],
    },
    {
      bookPage: 1041,
      blocks: [
        { type: "verse", number: 21, continued: true, lines: ["Similitudes for the people, in order that", "They may understand and reflect about", "Them."] },
        {
          type: "verse",
          number: 22,
          lines: ["There is no God but Allāh; and He is", "The Knower of the Unseen and", "The Visible; and He is the Merciful", "Beneficent;"],
        },
        {
          type: "verse",
          number: 23,
          lines: ["There is no God but Allāh; He is", "A King to whom belong these Attributes:", "The Holy, the Bestower of Health,", "The Bestower of Security, the Guardian", "Of the creatures, the Supreme Mighty,", "The Owner of the Cellestial Kingdom", "And Grandeur. [Does any one know of", "Such a King in the whole world?] To", "Him belongs the Absolute Purity and He", "Is above having any partner;"],
        },
        {
          type: "verse",
          number: 24,
          lines: ["Allāh is the Inventor-Fashioner Creator", "Of the creatures. To Allāh belong", "The Names of Outstanding Excellence;", "Whatever is in the heavens and on", "The earth, they all Celebrate", "Allāh’s Attributes and His Absolute", "Purity; and He is the Source-Wisdom", "Supremepower."],
        },
      ],
    },
  ],
  footnotes: [
    { id: 1, blocks: [{ kind: "p", text: "Those relatives in charge of administration of the Islāmic offices." }] },
    { id: 2, blocks: [{ kind: "p", text: "Madīnah City" }] },
    { id: 3, blocks: [{ kind: "p", text: "Reference is made to the Jews of Banī Nazīr." }] },
    { id: 4, blocks: [{ kind: "p", text: "See 8:48" }] },
  ],
};

export default surah;
