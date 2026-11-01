import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 51 · Az-Zāriyat — book pages 974–981 (verses 1–60, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 51,
  pages: [
    {
      bookPage: 974,
      heading: {
        title: "Az-Zāriyat",
        lines: ["(The Scattering Winds)", "Revealed at Makkah", "60 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["By the winds that scatter clouds and", "Particles,"] },
        { type: "verse", number: 2, lines: ["And by the clouds that carry heavy rains", "In them,"] },
        { type: "verse", number: 3, lines: ["And by the ships that sail on the sea", "With ease,"] },
        { type: "verse", number: 4, lines: ["And by the Angels that distribute", "The affairs, as Commanded by Allāh;"] },
        {
          type: "verse",
          number: 5,
          lines: ["[By all these oaths] Verily, that which", "You are promised is true and will", "Certainly come to pass;"],
        },
        { type: "verse", number: 6, lines: ["And the Day of Recompense will surely", "Come to pass."] },
        { type: "divider" },
        { type: "verse", number: 7, lines: ["By the sky which is full of stars,"] },
      ],
    },
    {
      bookPage: 975,
      blocks: [
        {
          type: "verse",
          number: 8,
          lines: ["That verily, you people are of different", "Opinion [regarding the Resurrection;]"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["And the one who is turned away [from", "Qur’ān and the Day of Judgement] is", "Indeed the one who has turned away", "From the Truth."],
        },
        { type: "verse", number: 10, lines: ["Down with the liars!"] },
        { type: "verse", number: 11, lines: ["Those who are plunged in negligence,"] },
        { type: "verse", number: 12, lines: ["And they keep asking [mockingly]:", "“When will be the Day of Recompense?”"] },
        { type: "verse", number: 13, lines: ["It will be the Day when they", "Will be exposed to the Fire,"] },
        {
          type: "verse",
          number: 14,
          lines: ["[And will be stated to them:] “Taste", "The Chastisement of your burning! This", "Is what you used to ask for it hastingly.”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 15,
          lines: ["[On the Day of Recompense] The pious", "Will be in the Gardens by the springs", "And streams;"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["They receive the bestowals of their", "Creator; indeed they were of", "The good-doers in their worldly life:"],
        },
        {
          type: "verse",
          number: 17,
          continues: true,
          lines: ["The pious used to sleep very little at", "Night [spending their time in praying"],
        },
      ],
    },
    {
      bookPage: 976,
      blocks: [
        { type: "verse", number: 17, continued: true, lines: ["And saying Allāh’s Remembrance];"] },
        {
          type: "verse",
          number: 18,
          lines: ["And early before the dawn [and before", "Morning-prayer] they kept asking", "Allāh’s Forgiveness;"],
        },
        {
          type: "verse",
          number: 19,
          lines: ["And they considered a due portion of", "Their wealth and property for the needy."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 20,
          lines: ["And on the earth are Signs of Allāh’s", "Power for people who believe with", "Certainty,"],
        },
        {
          type: "verse",
          number: 21,
          lines: ["And also in yourselves [your body and", "Soul] do you not observe [Signs of", "Allāh’s Power?]"],
        },
        { type: "verse", number: 22, lines: ["And in the heaven is your sustenance", "And all that you are promised.{1}"] },
        {
          type: "verse",
          number: 23,
          lines: ["By the Creator of the heaven and", "The earth it is the Truth [whatever you", "Have been promised] just as it is true", "That you own power of speech [or other", "Faculties such as sight or hearing.]"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 24,
          lines: ["[O, Messenger!] Have you heard", "The story of the honoured guests", "Of Ibrāhīm?"],
        },
      ],
    },
    {
      bookPage: 977,
      blocks: [
        {
          type: "verse",
          number: 25,
          lines: ["They entered his house and said:", "“Salute!” He said: “Salute! But you are", "Unknown to me.”"],
        },
        {
          type: "verse",
          number: 26,
          lines: ["Then he returned to his household and", "Brought them a roasted calf, a fat one,"],
        },
        {
          type: "verse",
          number: 27,
          lines: ["And placed the food before them, and", "[When he noticed that they did not", "Touch the food] said to them: “Will you", "Not eat?”"],
        },
        {
          type: "verse",
          number: 28,
          lines: ["And he felt a fear of them. They said:", "“Do not fear!” And they gave him", "Glad-tidings of a son endowed with", "The Divine knowledge [by Allāh’s", "Command];"],
        },
        {
          type: "verse",
          number: 29,
          lines: ["Then his wife came to them smiting on", "Her face said with a loud voice: “I am an", "Old barren woman, [how can I bear a", "Child?]”"],
        },
        {
          type: "verse",
          number: 30,
          lines: ["The Divine Emissaries said: “Even so,", "This is what your Creator&Nurturer has", "Stated; verily He is the Knowing", "Decreer.”"],
        },
        {
          type: "verse",
          number: 31,
          lines: ["Ibrāhīm said: [Apart from this Message]", "“After what Mission are you O, you", "Divine Emissaries?”"],
        },
        { type: "verse", number: 32, lines: ["They said: “We have been sent for", "Chastising a people who are sinners;"] },
      ],
    },
    {
      bookPage: 978,
      blocks: [
        { type: "verse", number: 33, lines: ["“To send over them stones of baked", "Clay,"] },
        {
          type: "verse",
          number: 34,
          lines: ["“Stones marked with special signs by", "Your Creator&Nurturer for those who", "Exceed the limits.”"],
        },
        { type: "verse", number: 35, lines: ["Then We brought out the believers from", "That town,"] },
        {
          type: "verse",
          number: 36,
          lines: ["But We did not find there any Muslim", "Family except one! [Lūt and his", "Children.]"],
        },
        {
          type: "verse",
          number: 37,
          lines: ["And [by destroying the city of", "The sinners] We left an admonishing", "Sign for those who fear the painful", "Torment of the Hereafter."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 38,
          lines: ["And in [the story of] Mūssā was another", "Sign; We sent him with authority and", "Evident Miracles to Firown;"],
        },
        {
          type: "verse",
          number: 39,
          lines: ["But Firown turned to his chiefs saying:", "“This man is either a magician or a", "Mad man!”"],
        },
        {
          type: "verse",
          number: 40,
          lines: ["So We seized him and his men and cast", "Them into the sea [and at the last", "Moment he blamed himself through", "Confessing his remorse.]{2}"],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 979,
      blocks: [
        {
          type: "verse",
          number: 41,
          lines: ["And in [the story of] ‘Ād was another", "Admonishing Sign: We sent against", "Them an uprooting wind;"],
        },
        { type: "verse", number: 42, lines: ["To whatever it reached turned it into", "Ruin and dust;"] },
        {
          type: "verse",
          number: 43,
          lines: ["And also in the story of Thamūd was", "Another admonishing Sign of Allāh’s", "Punishment; they were told: “Enjoy your", "Life only for a little while.”{3}"],
        },
        {
          type: "verse",
          number: 44,
          lines: ["They rebelled against the Command of", "Their Creator so the thunderbolt", "Seized them when they were looking", "Surprisingly at the event;"],
        },
        {
          type: "verse",
          number: 45,
          lines: ["They could not stand on their feet", "Because of the blow; and they could not", "Defend themselves against the Divine", "Chastisement."],
        },
        {
          type: "verse",
          number: 46,
          lines: ["So were the people of Nūh before all of", "Them; indeed they were a corrupt and", "Rebellious people."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 47,
          lines: ["And We did build the sky with", "The Embracing Power and We are", "The Supreme Expander [of the heavens", "And all existence]"],
        },
        {
          type: "verse",
          number: 48,
          continues: true,
          lines: ["And We have spread out the earth [for", "People to settle in it] and We are"],
        },
      ],
    },
    {
      bookPage: 980,
      blocks: [
        { type: "verse", number: 48, continued: true, lines: ["The Supreme Expander [of the earth];"] },
        {
          type: "verse",
          number: 49,
          lines: ["And for every creature We created its", "Mate [a pair: male and female] this is", "Something that you may think about", "The Wisdom behind it.{4}"],
        },
        {
          type: "verse",
          number: 50,
          lines: ["[Say O, Messenger!]: “Seek refuge to", "Allāh. Verily, I am a Divine Expositoring", "Warner to you from Allāh,"],
        },
        {
          type: "verse",
          number: 51,
          lines: ["“And I warn you not to consider any", "Partner with Allāh, I am a Divine", "Expositoring Warner to you from Allāh.”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 52,
          lines: ["No Messenger came to the disbelievers", "Before them, [the pagans] but they said:", "“He is either a magician or a mad man.”"],
        },
        {
          type: "verse",
          number: 53,
          lines: ["Is this speech what the disbelieving", "Nations had enjoined to one another", "[Out of conspiracy]? No, they were by", "Nature a rebellious people."],
        },
        {
          type: "verse",
          number: 54,
          lines: ["So [O, Messenger!] turn away from", "Them; you are not to be blamed for", "Their disbelief and transgression,"],
        },
        { type: "verse", number: 55, lines: ["But remind the believers; they will", "Benefit from it;"] },
      ],
    },
    {
      bookPage: 981,
      blocks: [
        {
          type: "verse",
          number: 56,
          lines: ["I created Jinns and men and Ordained", "For them to worship Me [to prove", "The Victory of the Truth over", "Falsehood i.e., the Victory of Allāh over", "Satan, through the pious and", "The righteous worshippers;]"],
        },
        {
          type: "verse",
          number: 57,
          lines: ["I do not ask sustenance from My", "Worshippers neither I require that they", "Should feed Me;"],
        },
        {
          type: "verse",
          number: 58,
          lines: ["Verily, Allāh is the One Who gives", "Sustenance to all; and He is the Owner", "Of the Enduring Might."],
        },
        {
          type: "verse",
          number: 59,
          lines: ["As for the wrongdoers their portion of", "The Divine Chastisement is like that of", "Their likes of the past generations; so", "They should not hasten on asking Me", "For the Punishment: It will come to", "Them!"],
        },
        {
          type: "verse",
          number: 60,
          lines: ["So woe to the disbelievers! From", "The Day that they have been promised,", "[The Day of Judgement, the Day of", "Recompense]"],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "By Allāh’s Favour, from the heaven man receives spiritual sustenance: Guidance, Books, Messengers and Divine Aid; and also by Allāh’s Favour rain and sun-light are descended as two main sources of material sustenance and bounties; thanks to our Creator&Nurturer, the Grace Bestower, the Source Sustainer." },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "See 10:92" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "Only three days after the she-camel was hamstrung, they were destroyed by the thunderbolt." },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "Only the Creator is One and Single." },
      ],
    },
  ],
};

export default surah;
