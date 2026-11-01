import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 47 · Mohammad — book pages 946–953 (verses 1–38, complete). Begins at the top of page 946 and ends partway down page 953.
 * Markup: {n} footnote marker · [ ] translator’s insertion.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 47,
  pages: [
    {
      bookPage: 946,
      heading: {
        title: "Mohammad",
        lines: ["(Mohammad, the Messenger of Islām)", "Revealed at Madīnah", "38 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Those who disbelieved and hindered", "Men from Allāh’s Path, all their deeds", "Will be frustrated [and even their good", "Deeds like helping the poor will not", "Be accepted from them, since it has not", "Been done out of Faith in Allāh and", "The Day of Judgement];"] },
        { type: "verse", number: 2, lines: ["But those who believe and do", "Righteous deeds and believe that", "The Holy Qur’ān which is sent down to", "Mohammad is the Truth from their", "Creator&Nurturer, [they are lucky] since", "Allāh will forgive their evil deeds of", "The past and will put their affairs in", "The right condition;"] },
        { type: "verse", number: 3, continues: true, lines: ["[The difference stems from the very", "Reason that] Those who disbelieve they", "Follow Falsehood while those who"] },
      ],
    },
    {
      bookPage: 947,
      blocks: [
        { type: "verse", number: 3, continued: true, lines: ["Believe in Allāh they follow", "The Truth [i.e. , the Holy Qur’ān] which", "Is sent down by their Creator&Nurturer;", "Thus does Allāh explain matters by", "Similitudes, so that people may", "Understand better."] },
        { type: "verse", number: 4, lines: ["[O, you Muslims!] When you meet with", "The disbelievers in the battlefield smite", "At their necks and when you have", "Overcome them through fighting, then", "Bind the captives together not to have", "Any chance for escaping; then you might", "As well let them free or ask for ransom", "Until the war is subdued. This is Allāh’s", "Command to you. If Allāh had Willed", "He would have exacted retribution from", "Them [by sending a Divine Chastisement", "On them.] But He decided that you", "Should fight in order to test some of you", "By others. And those who are", "Martyred in Allāh’s Path, He will not let", "Their deeds without reward:"] },
        { type: "verse", number: 5, lines: ["He will guide them, [the martyrs] to their", "Blessed places and will provide for them", "A good condition,"] },
        { type: "verse", number: 6, lines: ["And will admit them to the Garden", "Which He has already introduced to", "Them and has caused them to know it."] },
        { type: "divider" },
        { type: "verse", number: 7, continues: true, lines: ["O, you who believe! If you make efforts", "In Allāh’s Way He will help you and", "Makes your feet firm and secures you"] },
      ],
    },
    {
      bookPage: 948,
      blocks: [
        { type: "verse", number: 7, continued: true, lines: ["From being shaky along His Path;"] },
        { type: "verse", number: 8, lines: ["But those who disbelieved, for them will", "Be destruction and their deeds will fall", "In vain [by Allāh’s Will],"] },
        { type: "verse", number: 9, lines: ["That is because they resent Qur’ān", "Which has been sent by Allāh, so He", "Makes their deeds vain and fruitless."] },
        { type: "verse", number: 10, lines: ["Have they not travelled through", "The land to see the doom of those", "Before them? Allāh caused utter", "Affliction to fall upon them; and for", "The disbelievers [of Makkah] the same", "Fate will come to pass;"] },
        { type: "verse", number: 11, lines: ["That is so because Allāh is", "The Guardian of the believers whereas", "The disbelievers have no guardian and", "Supporter."] },
        { type: "divider" },
        { type: "verse", number: 12, lines: ["Verily, Allāh will admit those who", "Believe and do righteous deeds to", "The Gardens of Paradise in which flow", "Streams. Those who disbelieve though", "They enjoy the temporal enjoyment of", "This life and eat like the cattle but their", "Permanent abode will be the Hell Fire."] },
        { type: "verse", number: 13, lines: ["And many inhabitants of the towns that", "We destroyed [due to their disbelief],", "Were more powerful than the people of", "The city that have driven you out; and", "They had none to help them against Us."] },
      ],
    },
    {
      bookPage: 949,
      blocks: [
        { type: "verse", number: 14, lines: ["Is he who has an evident proof of his", "Creator like the one whose evil deeds", "Have been made fair-seeming to him", "And he follows only his own caprices?"] },
        { type: "verse", number: 15, lines: ["The Garden of Paradise which has been", "Promised to the pious is a Garden in", "Which flow streams of sweet and", "Unstaling water, and streams of milk", "The taste of which never changes, and", "Streams of joyful drinks, and streams of", "Pure and clear honey. And in it there", "Are all kinds of fruits and [above all]", "Allāh’s Forgiveness is bestowed on", "The inhabitants of the Paradise. Is", "The situation of these people", "Comparable to those who are to remain", "Forever in the Fire and are made", "To drink stinky boiling water which", "Cuts up their bowels into pieces?"] },
        { type: "divider" },
        { type: "verse", number: 16, lines: ["[O, Messenger!] There are some", "[Hypocrites] who pretend that they listen", "To you, but when they go out they turn", "To some learned believers and ironically", "Say: “What did he say exactly just now?”", "Such are those whose hearts, Allāh has", "Sealed, and they do not understand", "The Truth and they only follow their", "Own caprices;"] },
        { type: "verse", number: 17, lines: ["But those who have received Guidance", "Allāh increases their portion of Guidance", "And Bestows on them the power of piety", "In order to guard against evil;"] },
      ],
    },
    {
      bookPage: 950,
      blocks: [
        { type: "verse", number: 18, lines: ["Do they wait for anything but the Hour", "Of Resurrection that should come upon", "Them suddenly? But when its signs", "Appear, they cannot benefit from", "Admonition."] },
        { type: "verse", number: 19, lines: ["So [O, Messenger!] know that there is", "No God but Allāh; then ask Allāh’s", "Forgiveness for your faults{1} and also for", "The believing men and women; and", "Allāh knows the centers of the moving", "About and the homes of you people."] },
        { type: "divider" },
        { type: "verse", number: 20, lines: ["Those who believe say: “Why a Sūrah is", "Not revealed? [concerning the Command", "Of fight against the disbelievers.] But", "When a Sūrah with the Decree of", "Fighting is sent down, you will see", "The people in whose hearts is a disease", "[Of doubt and hypocrisy] looking at you", "With a look of one whose death is", "Approaching him, so death is better for", "Such people!"] },
        { type: "verse", number: 21, lines: ["Obedience to Allāh and fair words is", "Better for them. And when the matter of", "War is decided, if they be truthful with", "Allāh [and do not bring false excuses for", "Not taking part in the war] it would be", "Best for them; [because Allāh", "Knows the secrets of the hearts];"] },
        { type: "verse", number: 22, continues: true, lines: ["Say [O, Messenger!]: “Is it not", "To be expected that if you were given", "The power and authority, all you would"] },
      ],
    },
    {
      bookPage: 951,
      blocks: [
        { type: "verse", number: 22, continued: true, lines: ["Do is but mischief-making and", "Cutting off your ties with your kinsmen?”"] },
        { type: "verse", number: 23, lines: ["They are the ones whom Allāh has", "Made inflicted with His Curse, so He", "Has made them deaf and blind;"] },
        { type: "verse", number: 24, lines: ["Do they not ponder about the Words of", "Revelation of the Holy Qur’ān? Or are", "Their hearts locked up and the Truth", "Does not reach them?"] },
        { type: "divider" },
        { type: "verse", number: 25, lines: ["Those who have turned back and", "Became apostates after the Guidance", "Had become evident to them, they are", "The ones whose deeds have been made", "Fair-seeming to them by satan who", "Deceived them with unaccessible and", "Prolonged hopes;"] },
        { type: "verse", number: 26, lines: ["These hypocrites said to those who", "Detest what Allāh reveals: “We will obey", "You in some aspect of the matter.” But", "Allāh knows their hidden intentions and", "Secret talks."] },
        { type: "verse", number: 27, lines: ["So how will they feel when the Angels", "In charge of death, smite their faces and", "Their backs when taking their souls?"] },
        { type: "verse", number: 28, lines: ["This punishment is due to the fact that", "They followed what caused Allāh’s Wrath", "And detested what caused Allāh’s", "Pleasure; so Allāh made their plans and", "Deeds fruitless;"] },
      ],
    },
    {
      bookPage: 952,
      blocks: [
        { type: "verse", number: 29, lines: ["Did those in whose hearts is a disease", "[Of doubt and disbelief] think that Allāh", "Will not bring to light their rancour?"] },
        { type: "verse", number: 30, lines: ["[O, Messenger!] If We Will We could", "Show them to you through specific", "Marks; however you will surely", "know them by the line of their speech", "And Allāh is Aware of all that you", "People do;"] },
        { type: "verse", number: 31, lines: ["And surely We shall try you until We", "Make known those among you who", "Strive hard in Allāh’s Way and also", "Those who are patient; and", "We shall also bring to the test all", "The news regarding the attributes that", "You are known with [such as patience", "And steadfastness]."] },
        { type: "divider" },
        { type: "verse", number: 32, lines: ["Those who chose disbelief and hindered", "People from Allāh’s Straight Path, after", "Guidance had been explained to them", "Clearly, they will not harm Allāh in", "The least, but Allāh will surely make", "Their plots and deeds frustrated."] },
        { type: "verse", number: 33, lines: ["O, you who believe! Obey Allāh and", "Allāh’s Messenger and do not cause", "your deeds to become fruitless."] },
        { type: "verse", number: 34, lines: ["Verily, those who chose disbelief and", "Hindered people from Allāh’s Way by", "Evil talks and then died while they were", "Disbelievers, they will be deprived", "From Allāh’s Forgiveness."] },
        { type: "divider" },
      ],
    },
    {
      bookPage: 953,
      blocks: [
        { type: "verse", number: 35, lines: ["[O, you Muslims!] Do not feel weak and", "Do not appeal for peace from", "The enemies of Islām while you are", "The upermost since Allāh supports you", "And will not decrease the reward of your", "Efforts and good deeds along His Path;"] },
        { type: "verse", number: 36, lines: ["The life of this world is but sport and", "Amusement; and if you believe and be", "Pious, Allāh will bestow you, your", "Reward; and He will not demand you", "To spend your wealth and property in", "His Way [if it is not given voluntarily", "And with pleasure of the heart];"] },
        { type: "verse", number: 37, lines: ["If Allāh asks you to spend all you own,", "It will raise your anger and you would", "Niggardly withhold, and thus He would", "Bring out all your ill-feeling;"] },
        { type: "verse", number: 38, lines: ["You are the ones who are asked", "To spend your wealth on Allāh’s Way,", "But among you are some people who", "Are niggardly; and whoever is miser is", "Against himself.{2} However Allāh is", "The Absolute Independent but you", "[Whether poor or wealthy] are in need of", "Allāh’s Favours and Bounties. If you turn", "Back from Allāh’s Way He will", "Bring another nation in place of you,", "A people who are not like you,", "[Niggardly and disobedient]"] },
      ],
    },
  ],
  footnotes: [
    { id: 1, blocks: [{ kind: "p", text: "Zanb for the Messenger who is an infallible soul does not mean sin: It means small faults or considering priority for doing ordinary affairs rather than what is a religious incumbent." }] },
    { id: 2, blocks: [{ kind: "p", text: "Reference is made to the niggardliness of those who withhold to spend in Allāh’s Way: ‘whatever they have withheld, it will be tied to their necks like a twisted collar, on the Day of Judgement 3:180.’" }] },
  ],
};

export default surah;
