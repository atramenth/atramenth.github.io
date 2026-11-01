import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 58 · Al-Mujādilah — book pages 1029–1035 (verses 1–22, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Page 1035 opens with the end of verse 22, above the heading of Sūrah 59.
 */
const surah: SurahData = {
  number: 58,
  pages: [
    {
      bookPage: 1029,
      heading: {
        title: "Al-Mujādilah",
        lines: ["(She who Pleaded)", "Revealed at Madīnah", "22 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["Allāh has surely heard the woman who", "Pleaded to you [O, Messenger]", "Regarding her husband; and she", "Complained to Allāh invokingly. Allāh", "Hears the dialogue of you two; verily,", "Allāh [due to His Embracing Knowledge]", "Is the Hearing Seer;"],
        },
        {
          type: "verse",
          number: 2,
          lines: ["Those men who do Zehār{1} with their", "Wives, should know that those women", "Cannot be their mothers; none can be", "Their mothers except those who gave", "Birth to them. And indeed they utter", "An evil word and a lie. And verily, Allāh", "Is the Absolving Forgiver, [so such men", "Can repent to Him and attain Allāh’s", "Absolvement for their Hereafter];"],
        },
      ],
    },
    {
      bookPage: 1030,
      blocks: [
        {
          type: "verse",
          number: 3,
          lines: ["And those who do Zehār to their", "Wives but then change their mind about", "What they uttered by their tongues, they", "Are liable to expiation of freeing a slave", "Before they approach the wife physically;", "This is a religious admonition to you [for", "Releasing women from that unfair", "Custom] and Allāh is Well Informed", "About what you do;"],
        },
        {
          type: "verse",
          number: 4,
          lines: ["And a person who cannot afford to free", "A slave must go on fast for two months", "Successively before they touch each", "Other, but if a person is sick and", "Cannot fast he should feed sixty of", "The poor; this is in order that you may", "Find Faith for Allāh and His Messenger", "And get rid of these customs of", "The Time of Ignorance. These are", "Allāh’s Limits; and for the disbelievers", "There is a painful Torment."],
        },
        {
          type: "verse",
          number: 5,
          lines: ["Verily, those who oppose Allāh and His", "Messenger they will be thrown down with", "Disgrace as those before them who were", "Thrown down with disgrace; and We have", "Sent down Explicit Words of Revelation", "Regarding them, so there will be", "A disgracing Torment for the disbelievers;"],
        },
        {
          type: "verse",
          number: 6,
          lines: ["On the Day when Allāh will Resurrect", "Them all, He will inform them of their", "Deeds which Allāh has computed; and", "Which they have forgotten; and Allāh is", "Witness over all things;"],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 1031,
      blocks: [
        {
          type: "verse",
          number: 7,
          lines: ["Have you not noticed [O, Man] that", "Allāh knows whatever is in the heavens", "And whatever is on the earth? [Due to", "His Embracing Knowledge] There is no", "Secret discourse of three persons but", "Allāh is their fourth nor of five but He", "Is their sixth, nor less or more than that", "But He shall be with them, wheresoever", "They may be. And eventually on the Day", "Of Judgement He will inform them of", "What they did; verily Allāh has Full", "Knowledge of all things."],
        },
        {
          type: "verse",
          number: 8,
          lines: ["[O, Messenger!] Have you not observed", "Those who were forbidden of whispering", "Yet they returned to that which they had", "Been forbidden? And they only do secret", "Talks just to show their hostility and", "Disobedience towards the Messenger;", "And when they come to you, they salute", "You not with the meaning that Allāh", "Has Decided for it;{2} and then they say to", "Themselves: “Why Allāh does not punish", "Us for our words?” Hell will suffice", "Them in which they will enter and it is", "The worst destination!"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["O, you who believe! When you approach", "Secret discourses do not do it out of", "Hostility and disobedience to", "The Messenger but do it for righteous", "Purposes and piety; and fear from", "The disobedience of Allāh’s Command", "To whom you all shall be gathered;"],
        },
      ],
    },
    {
      bookPage: 1032,
      blocks: [
        {
          type: "verse",
          number: 10,
          lines: ["Secret talks are tempted by Satan in", "Order that he may cause grief to", "The believers, but he cannot harm them", "At all except by Allāh’s Will; and in", "Allāh should all the believers put their", "Trust."],
        },
        {
          type: "verse",
          number: 11,
          lines: ["O, you who believe! When in a gathering", "[Which people are more than the space]", "You are asked to make room, do it;", "Allāh will give you more room in", "The Paradise instead. And when the time", "Of the meeting is over and you are asked", "To rise up and leave the place, do it.", "Allāh will promote the degrees of", "The believers and those who have been", "Bestowed knowledge; and Allāh is", "Aware of what you do."],
        },
        {
          type: "verse",
          number: 12,
          lines: ["O, you who believe! When you intend", "To have a private consultation with", "The Messenger, spend something in", "Charity{3} [for the benefit of the poor]", "Before your private consultation; this is", "Fairer and purer for yourself, but if you", "Cannot afford then know that Allāh", "Is the Merciful Forgiving; [and will not", "Take it as a sin upon you]"],
        },
        {
          type: "verse",
          number: 13,
          lines: ["Is it that you were afraid of spending", "In charity that you barred yourselves", "From private consultation with"],
          continues: true,
        },
      ],
    },
    {
      bookPage: 1033,
      blocks: [
        {
          type: "verse",
          number: 13,
          continued: true,
          lines: ["The Messenger? Now that you have not", "Done it and Allāh has accepted your", "Repentance, then establish your regular", "Prayers and pay alms and obey Allāh", "And His Messenger; and Allāh is", "Informed of what you do."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 14,
          lines: ["[O, Messenger!] Have you observed", "Those who made friends with a people", "On whom is Allāh’s Wrath? The", "Hypocrites are neither with you nor with", "The Jews and they swear to Allāh [that", "They are with you] but they lie", "Knowingly;{4}"],
        },
        { type: "verse", number: 15, lines: ["Allāh has prepared for them a Severe", "Chastisement: Indeed it is evil what they", "Do;"] },
        {
          type: "verse",
          number: 16,
          lines: ["Their oaths to Allāh is but a pretext", "In order to acquire people’s trust by", "Which they may hinder men from Allāh’s", "Way; so for them will be a disgracing", "Chastisement;"],
        },
        {
          type: "verse",
          number: 17,
          lines: ["Their wealth and children will not avail", "Them from Allāh’s Punishment at all:", "They will be the inhabitants of the Hell", "To abide therein forever;"],
        },
        { type: "verse", number: 18, lines: ["On the Resurrection Day, that Allāh", "Will raise up all of them, the hypocrites"], continues: true },
      ],
    },
    {
      bookPage: 1034,
      blocks: [
        {
          type: "verse",
          number: 18,
          continued: true,
          lines: ["Will swear to Allāh as they swear to you", "Muslims all in falsehood; and they think", "They are getting somewhere, but know", "That, they are all liars;"],
        },
        {
          type: "verse",
          number: 19,
          lines: ["Satan has influenced them, so he has", "Made them to forget Allāh’s", "Remembrance; they are the members of", "Satan’s party; verily, Satan’s party", "Shall be indeed the losers;"],
        },
        { type: "verse", number: 20, lines: ["Those who oppose Allāh and His", "Messenger, they will be included as", "The most disgraced."] },
        {
          type: "verse",
          number: 21,
          lines: ["Based on His Embracing Knowledge", "Allāh has stated: “I and My Messengers", "Shall be surely the Victorious forever.”", "Verily, Allāh is the Invincible", "Supremepower, [so due to the Divine", "Might and Ordainment, victory is an", "Assured event;]"],
        },
        {
          type: "verse",
          number: 22,
          lines: ["[O, Messenger!] You will not find any", "People who believe in Allāh and the Day", "Of Resurrection yet establish", "Friendship with those who oppose", "Allāh and His Messenger, even if they", "Be their fathers or their sons or their", "Brothers or their relatives. Allāh has", "Written Faith in the hearts of the sincere", "Believers and has fortified them with a", "Spirit from His presence. And He will", "Admit them to the Gardens in which", "Streams flow to dwell therein forever.", "Allāh will be well pleased with them;"],
          continues: true,
        },
      ],
    },
    {
      bookPage: 1035,
      blocks: [
        {
          type: "verse",
          number: 22,
          continued: true,
          lines: ["And they will be grateful and well", "Pleased with Him: They are the members", "Of the Party of Allāh; know that", "The party of Allāh shall surely succeed."],
        },
      ],
    },
  ],
  footnotes: [
    { id: 1, blocks: [{ kind: "p", text: "In the Time of Ignorance a man could say to his wife: ‘You are to me like the back of my mother’ and this was regarded as a divorce." }] },
    { id: 2, blocks: [{ kind: "p", text: "Instead of saying: Salām, meaning: Salute and peace, they used to say: ‘Sām, meaning: Death and destruction be upon you!’" }] },
    {
      id: 3,
      blocks: [
        {
          kind: "p",
          text: "Some people out of personal motives used to occupy the Holy Messenger’s time for personal and private consultations. Since the Messenger’s time belongs to Allāh and for public affairs of the Muslims, so they were Commanded by Allāh to spend something in charity for the benefit of the needy, before their private consultation in order to put an end to that selfish demand.",
        },
      ],
    },
    { id: 4, blocks: [{ kind: "p", text: "Reference is made to the Hypocrites of Madīnah who found unity with the Jews against the Messenger of Islām while pretending to be Muslims." }] },
  ],
};

export default surah;
