import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 89 · Al-Fajr — book pages 1160–1163 (verses 1–30, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 89,
  pages: [
    {
      bookPage: 1160,
      heading: {
        title: "Al-Fajr",
        lines: ["(The Dawn)", "Revealed at Makkah", "30 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["By the Dawn"] },
        { type: "verse", number: 2, lines: ["And by the Ten Nights{1}"] },
        { type: "verse", number: 3, lines: ["And by the Even and the Odd{2}"] },
        { type: "verse", number: 4, lines: ["And by the Night as it passes away;"] },
        { type: "verse", number: 5, lines: ["Are not in these oaths enough", "Evidence for men of reason?"] },
        { type: "divider" },
        {
          type: "verse",
          number: 6,
          lines: ["[O, Messenger!] Have you not observed", "How your Creator&Nurturer dealt with", "The ‘Ād people?"],
        },
        { type: "verse", number: 7, lines: ["A people who were like lofty pillars,"] },
      ],
    },
    {
      bookPage: 1161,
      blocks: [
        { type: "verse", number: 8, lines: ["And no physical statures like them were", "Created in the world;"] },
        {
          type: "verse",
          number: 9,
          lines: ["And what He did with the Thamūd", "People who hewed out rocks [to build", "Safe dwellings?]"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["And what He did with Firown,", "The Owner of Pegs who tortured and", "Nailed men with his pegs?"],
        },
        { type: "verse", number: 11, lines: ["All [the disbelievers of the old] rebelled", "In the earth,"] },
        { type: "verse", number: 12, lines: ["And made therein much mischief,"] },
        { type: "verse", number: 13, lines: ["So your Creator&Nurturer flogged them", "All with a whip of Chastisement."] },
        {
          type: "verse",
          number: 14,
          lines: ["Verily, your Creator&Nurturer is", "Watching all people from the ambush", "[Of His Embracing Knowledge.]"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 15,
          lines: ["When Allāh tries man by bestowing", "Honour and bounties on him, he relates", "That to his own capability and says", "Proudly: “I have been honoured by my", "Creator&Nurturer [because I deserved it!]”"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["But when Allāh tries him by straitening", "His livelihood, he says complaining: “It", "Is my Creator & Nurturer Who", "Humiliated me with poverty.”"],
        },
      ],
    },
    {
      bookPage: 1162,
      blocks: [
        {
          type: "verse",
          number: 17,
          lines: ["No! Allāh is not unfair to you but", "[You did wrong to yourselves by not", "Obeying His Commands:] You do not", "Treat the orphans with kindness and", "Generosity [and do not deal with their", "Inheritance fairly];{3}"],
        },
        { type: "verse", number: 18, lines: ["And you do not urge one another", "To feed the needy;"] },
        {
          type: "verse",
          number: 19,
          lines: ["And you use up the inheritance once", "You are guardian or trustee to", "The inheritors,"],
        },
        {
          type: "verse",
          number: 20,
          lines: ["And you love wealth eagerly and", "Above everything, [so by disobeying", "Allāh’s Commands in all these, you have", "Made yourselves doomed to punishment.]"],
        },
        { type: "divider" },
        { type: "verse", number: 21, lines: ["When the earth will crumble to powder,", "[On the Day of Resurrection]"] },
        { type: "verse", number: 22, lines: ["And your Creator&Nurturer’s Presence", "Appears with Angels in ranks;"] },
        {
          type: "verse",
          number: 23,
          lines: ["And on that Day Hell will be brought", "Near, [To the wrongdoers.] On that Day", "Man is reminded; but of what benefit to", "Him is that remorse and the state of", "Being reminded?"],
        },
        { type: "verse", number: 24, lines: ["The sinner will say: “If only I had", "Forwarded some good deeds in my life!”"] },
      ],
    },
    {
      bookPage: 1163,
      blocks: [
        { type: "verse", number: 25, lines: ["And on that Day none can Chastise", "The wrongdoers like Allāh,"] },
        { type: "verse", number: 26, lines: ["And none can put the wrongdoers in", "Chain, like Allāh."] },
        {
          type: "verse",
          number: 27,
          lines: ["[And Allāh will state to the righteous", "Believer:] “O, you soul who are sure of", "Allāh’s Favour and are sure [of your own", "Obedience to Allāh’s Commands!]”"],
        },
        {
          type: "verse",
          number: 28,
          lines: ["“Return to your Creator&Nurturer well", "Pleased yourself and well-pleasing to", "Allāh;"],
        },
        { type: "verse", number: 29, lines: ["“Be included among My devoted", "Worshippers;"] },
        { type: "verse", number: 30, lines: ["“And enter My Paradise!”"] },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "The first ten days of Zilhajjah the twelfth month of the lunar year preceding the Hajj pilgrimage. Some commentators believe that it refers to the last ten days of Ramazān the month of fast in which the Holy Qur’ān was revealed." },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "I believe that since Allāh due to His Absolute Independence decided to be One and Single so He created all creatures in pairs [51:49]" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "See 4:2, 3, 6" },
      ],
    },
  ],
};

export default surah;
