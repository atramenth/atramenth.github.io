import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 36 · Yā. Sīn — book pages 803–814 (verses 1–83, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 36,
  pages: [
    {
      bookPage: 803,
      heading: {
        title: "Yā. Sīn",
        lines: ["(Two of the Divine Abbreviated Letters)", "Revealed at Makkah", "83 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Yā. Sīn.{1}"] },
        { type: "verse", number: 2, lines: ["By the Qur’ān, the Wisdom-teaching", "Book,"] },
        { type: "verse", number: 3, lines: ["Verily, you [O, Mohammad] are one of", "The Divine Messengers,"] },
        { type: "verse", number: 4, lines: ["[Who guide mankind] to the Straight", "Path;"] },
        { type: "verse", number: 5, lines: ["This Qur’ān is revealed to you by Allāh,", "The Grace-Bestowing Supremepower,"] },
        {
          type: "verse",
          number: 6,
          lines: ["In order that you warn a people whose", "Fathers did not receive the blessings of", "Warning so they are unaware of", "The Truth."],
        },
      ],
    },
    {
      bookPage: 804,
      blocks: [
        {
          type: "verse",
          number: 7,
          lines: ["Verily, the Word of Punishment has", "Been fulfilled against the majority of", "The disbelievers{2} so they do not believe."],
        },
        {
          type: "verse",
          number: 8,
          lines: ["[In the Hereafter] We will put yokes", "Around the necks of the disbelievers", "Which also involve their chins, so", "They cannot move their heads to", "Any direction [of right or left]", "But towards up;"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["And We will place a barrier before them", "And a barrier behind them so that they", "Will not be able to move forward or", "Backward and We will cover their eyes", "So they cannot see anything."],
        },
        {
          type: "verse",
          number: 10,
          lines: ["[O, Messenger!] It is the same to", "The pagans whether you warn", "Them or do not warn them; they", "Obstinately turn away from the Truth", "And do not believe;"],
        },
        {
          type: "verse",
          number: 11,
          lines: ["[O, Messenger!] You can only admonish", "A person who is the follower of Qur’ān", "And fears from disobeying Ar-Rahmān,", "The Unseen God, so give to such men", "Glad-tidings of Absolvement and also a", "Great reward;"],
        },
        {
          type: "verse",
          number: 12,
          continues: true,
          lines: ["Indeed We are the One Who gives life to", "The dead and We make a record of", "What they have sent ahead of them"],
        },
      ],
    },
    {
      bookPage: 805,
      blocks: [
        {
          type: "verse",
          number: 12,
          continued: true,
          lines: ["Regarding their deeds and of what", "They have left behind, of the trace", "Of their deeds. And of all things", "We have taken account in the Expositoring", "Book of Guidance."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 13,
          lines: ["[O, Messenger!] Cite an example of", "The inhabitants of a town when there", "Came to them Messengers:"],
        },
        {
          type: "verse",
          number: 14,
          lines: ["We first sent two Messengers [for", "Guiding the people]; they belied", "Them, so We supported them with", "The third; then the three of them", "Proclaimed: “Verily, we are sent to you", "By Allāh as Messengers.”"],
        },
        {
          type: "verse",
          number: 15,
          lines: ["The disbelievers said: “You are ordinary", "Men like us; and Ar-Rahmān has not", "Sent any Message through you and you", "Are telling lies.”"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["They said: “Our Creator&Nurturer", "Knows well that we are the Messengers", "[Since He Himself has sent us];"],
        },
        { type: "verse", number: 17, lines: ["“And our duty is only to deliver", "The Divine Message publicly.”"] },
        {
          type: "verse",
          number: 18,
          lines: ["They said: “We take you as evil omen", "For the city; and if you do not stop", "Preaching, we will surely stone you and", "That would be a painful torture that we", "Will inflict on you.”"],
        },
      ],
    },
    {
      bookPage: 806,
      blocks: [
        {
          type: "verse",
          number: 19,
          lines: ["The Messengers said: “The evil omen is", "In you yourselves [due to your disbelief", "And ignorance, you guard against", "Admonition when you are admonished;]", "The truth is that you are a transgressing", "People.”"],
        },
        {
          type: "verse",
          number: 20,
          lines: ["And there came hurriedly a believing", "Man from the remote part of the city, and", "Addressed the people saying: “O, my", "People! Obey the Messengers of Allāh,"],
        },
        {
          type: "verse",
          number: 21,
          lines: ["“Obey the ones who ask no wage from", "You for their preachings and they", "Themselves are guided to the Right", "Path;"],
        },
        {
          type: "verse",
          number: 22,
          lines: ["“And why should I not worship the One", "Who created me? And to Him you shall", "All be brought back;"],
        },
        {
          type: "verse",
          number: 23,
          lines: ["“Shall I take instead of Allāh, those", "Gods whose intercession will be of no", "Use to me, if Ar-Rahmān should intend", "To afflict me with a harsh punishment?"],
        },
        { type: "verse", number: 24, lines: ["“If I did so, I shall surely fall into an", "Evident error;"] },
        { type: "verse", number: 25, lines: ["“Indeed I believe in your", "Creator&Nurturer of you, so listen", "To me!”"] },
        { type: "verse", number: 26, continues: true, lines: ["[He was martyred by the disbelieving"] },
      ],
    },
    {
      bookPage: 807,
      blocks: [
        {
          type: "verse",
          number: 26,
          continued: true,
          lines: ["Folk] It was stated to him: “Enter", "The Paradise!” The martyr’s soul said: “If", "Only my people knew,"],
        },
        {
          type: "verse",
          number: 27,
          lines: ["“That my Creator&Nurturer has", "Bestowed me Forgiveness and has", "Included me among the honoured ones.”"],
        },
        {
          type: "verse",
          number: 28,
          lines: ["And We did not send upon his people", "A host from the heaven, nor We", "Needed to do so:"],
        },
        {
          type: "verse",
          number: 29,
          lines: ["It was only a single and sudden Divine", "Outcry and they all became silent and", "Motionless corpses."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 30,
          lines: ["Woe to mankind! There did not come a", "Messenger to them but they made a", "Redicule of him [and his Message];"],
        },
        {
          type: "verse",
          number: 31,
          lines: ["Do they not see how many generations", "Before them We destroyed for their", "Disbelief? Verily, to them the destroyed", "Ones will not return;"],
        },
        { type: "verse", number: 32, lines: ["But all of them will be brought in Our", "Presence on the Resurrection Day."] },
        { type: "divider" },
        {
          type: "verse",
          number: 33,
          lines: ["And the Sign of Our Power [to", "The disbelievers of Resurrection] should", "Be the dead land: We gave life to it and", "Brought out from it grains and fruits of", "Which they eat;"],
        },
      ],
    },
    {
      bookPage: 808,
      blocks: [
        {
          type: "verse",
          number: 34,
          lines: ["And We made in the earth vine-yards", "And palm-groves; and We caused", "Fountains to gush forth therein,"],
        },
        {
          type: "verse",
          number: 35,
          lines: ["That they may eat the fruits of it though", "Their hands had no share in producing", "Them. Are not they supposed to express", "Their gratitude for the Bounties of", "Allāh?"],
        },
        {
          type: "verse",
          number: 36,
          lines: ["The Absolute Pure is Allāh Who [is", "Himself the One and the Single, but He]", "Created in pairs all things that", "The earth produces as well as", "People themselves and other things", "Which is not known to mankind yet;"],
        },
        {
          type: "verse",
          number: 37,
          lines: ["And a Sign of Allāh’s Power [for", "The disbelievers of the Resurrection] is", "The Night: We draw forth from it", "The light-giving Day and then they fall", "Into a deep darkness;"],
        },
        {
          type: "verse",
          number: 38,
          lines: ["And the Sun moves towards its destined", "Place: Such is the Ordaining Power of", "The Omniscient-Omnipotent;"],
        },
        {
          type: "verse",
          number: 39,
          lines: ["And for the Moon We have Ordained", "Stations to travel; and towards its last", "Station it resembles the old and frail", "Palm-stalk;"],
        },
        {
          type: "verse",
          number: 40,
          lines: ["[According to the Divine Ordainment]", "It is not right for the Sun to overtake", "The Moon, nor can the Night out-strip", "The Day, and each moves in its orbit."],
        },
      ],
    },
    {
      bookPage: 809,
      blocks: [
        {
          type: "verse",
          number: 41,
          lines: ["And another Sign of Allāh’s Power for", "Them is that We bore their", "Fellow-creatures in the loaded ship,"],
        },
        {
          type: "verse",
          number: 42,
          lines: ["And We have [after Nūh’s Ark]", "Provided them with other means like it", "That they ride on,"],
        },
        {
          type: "verse",
          number: 43,
          lines: ["And if We Decide We can drown them;", "And there would be no helper for them", "Nor could they be delivered;"],
        },
        {
          type: "verse",
          number: 44,
          lines: ["It is only Our Grace that makes life", "Continue for them until an Appointed", "Term."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 45,
          lines: ["And when it is said to the disbelievers:", "“Fear Allāh’s Chastisement for your", "Present in this world and for", "The Hereafter in the future, in order", "That you may receive Allāh’s Mercy,”", "[They turn away paying no attention to", "The admonition]"],
        },
        {
          type: "verse",
          number: 46,
          lines: ["[And this is their way:] There is not a", "Single Revelation descended from their", "Creator that they have not turned away", "From it;"],
        },
        {
          type: "verse",
          number: 47,
          continues: true,
          lines: ["And when it is said to them: “Spend", "Out of what Allāh has provided for you", "As sustenance”, those who disbelieve", "Say to those who believe: “Shall we feed", "Those whom if Allāh had so Willed, He", "Could Himself feed them?” This proves"],
        },
      ],
    },
    {
      bookPage: 810,
      blocks: [
        { type: "verse", number: 47, continued: true, lines: ["That you, the disbelievers are in a", "Serious error."] },
        { type: "divider" },
        {
          type: "verse",
          number: 48,
          lines: ["And the disbelievers say: “When will this", "Promise of Resurrection and Taking", "Account take place, if you are truthful?”"],
        },
        {
          type: "verse",
          number: 49,
          lines: ["They do not have to wait for any lengthy", "Process: It is only a single Outcry from", "The heaven; it will capture them when", "They are quarrelling with each other;"],
        },
        {
          type: "verse",
          number: 50,
          lines: ["They will not even have the chance of", "Writing down a will, nor they can", "Join their family again;"],
        },
        {
          type: "verse",
          number: 51,
          lines: ["As the Trumpet is blown, they will", "Hasten on from their graves to their", "Creator,"],
        },
        {
          type: "verse",
          number: 52,
          lines: ["And they will say: “Woe to us! Who has", "Raised us up from our graves? This", "Is exactly what Ar-Rahmān promised;", "And the Messengers told us the truth.”"],
        },
        {
          type: "verse",
          number: 53,
          lines: ["So it is only another single Outcry and", "They all will be brought in Our Presence."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 54,
          lines: ["[It will be stated to them:] “Today no one", "Will be treated unjustly and you", "Shall only receive the reward of your", "Past deeds.”"],
        },
      ],
    },
    {
      bookPage: 811,
      blocks: [
        {
          type: "verse",
          number: 55,
          lines: ["On that Day the inhabitants of", "The Paradise, shall have happiness in", "Everything that they do:"],
        },
        { type: "verse", number: 56, lines: ["Men and their wives are in shades", "Leaning on the raised sofas;"] },
        { type: "verse", number: 57, lines: ["All sorts of fruits will be there for them", "And whatever else they desire;"] },
        {
          type: "verse",
          number: 58,
          lines: ["[This greeting of] Salām conveys health,", "Peace and security as a Promise from", "The Grace-Bestowing Creator for", "The inhabitants of the Paradise."],
        },
        { type: "divider" },
        { type: "verse", number: 59, lines: ["[And it will be stated:] “O, you guilty", "Ones! Get you apart today!"] },
        {
          type: "verse",
          number: 60,
          lines: ["“O, Children of ‘Adām! Did I not", "Admonish you, that you should not", "Worship Satan who surely is an open", "Enemy to you?"],
        },
        { type: "verse", number: 61, lines: ["“And that you should worship Me", "To attain the Right Path?"] },
        {
          type: "verse",
          number: 62,
          lines: ["“And indeed Satan led astray a great", "Majority of you people, did you not", "Then think about it?"],
        },
        { type: "verse", number: 63, lines: ["“This is the Hell that you were", "Promised;"] },
        { type: "verse", number: 64, lines: ["“Today join the Fire that you kept on", "Denying it.”"] },
      ],
    },
    {
      bookPage: 812,
      blocks: [
        {
          type: "verse",
          number: 65,
          lines: ["That Day We shall put a seal on", "The mouths of the rejecters of Faith;", "And will have their hands to speak with", "Us instead of their tongues; and We will", "Make their feet bear witness as to all", "Wrongs that they did;"],
        },
        {
          type: "verse",
          number: 66,
          lines: ["And if We Will, We can remove their", "Eyes, then when they want to move on", "The path, but how could they see", "The way?"],
        },
        {
          type: "verse",
          number: 67,
          lines: ["And if We Will We can nail them in", "Their places; then they would not be", "Able to move onwards nor to return."],
        },
        {
          type: "verse",
          number: 68,
          lines: ["And whomsoever We Decide to give a", "Long life We cause him to be reversed", "In creation [to return to the weakness of", "His childhood mentally and physically];", "Do they not use their reason?"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 69,
          lines: ["We have not taught the Messenger", "Writing poetry, nor it is meet for him:", "This is but a Reminder and an", "Expositoring material of the Divine", "Text,{3}"],
        },
        {
          type: "verse",
          number: 70,
          lines: ["That it may give admonition to those", "Who are spiritually alive; and the Word", "Of Chastisement may be proved against", "The disbelievers [who are spiritually", "Dead].{4}"],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 813,
      blocks: [
        { type: "verse", number: 71, lines: ["Do they not see that these cattle which", "They own are created by Our Power?"] },
        {
          type: "verse",
          number: 72,
          lines: ["And We have subjected them for their", "Use: They can ride on them and can eat", "Of their meat;"],
        },
        {
          type: "verse",
          number: 73,
          lines: ["And the cattle have other profits for", "Them; [their milk and their wool]; will", "They not express their thanks?"],
        },
        {
          type: "verse",
          number: 74,
          lines: ["Nevertheless they take deities for", "Worship other than Allāh with the hope", "That they might receive some help from", "Them,"],
        },
        {
          type: "verse",
          number: 75,
          lines: ["But they lack the power to help them", "And the followers will be called to", "The Hell as the troops of the false", "Deities;"],
        },
        {
          type: "verse",
          number: 76,
          lines: ["So [O, Messenger!] do not let the vain", "Talks of the disbelievers grieve you:", "Verily, We know what they hide and", "What they disclose."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 77,
          lines: ["Does not man see that We have created", "Him from a small sperm-drop? And", "Then he became publicly a disputant", "About his Creator;"],
        },
        {
          type: "verse",
          number: 78,
          lines: ["And forgetting his own creation he put", "Question about Our Power saying: “Who", "Is able to give life to the bones", "After it is turned into dust?”"],
        },
      ],
    },
    {
      bookPage: 814,
      blocks: [
        {
          type: "verse",
          number: 79,
          lines: ["Say [O, Messenger!]: “The One Who", "Created them the first time, will give", "Them life again since He Owns", "The Embracing Knowledge for all sorts", "Of creation;"],
        },
        {
          type: "verse",
          number: 80,
          lines: ["“The One Who provided fire for you", "Out of the green tree, then by it you", "Produce your fire and warmth.”{5}"],
        },
        {
          type: "verse",
          number: 81,
          lines: ["Is not the One Who created the heavens", "And the earth able to create the like of", "These men? Yes indeed He is Able and", "He is the Knowing Creator of all things", "In abundance and variety;"],
        },
        {
          type: "verse",
          number: 82,
          lines: ["Verily, when He Decides to create", "Somebody, something or some event,", "He only Commands to it stating: “Be!”", "And immediately it comes to existence.{6}"],
        },
        {
          type: "verse",
          number: 83,
          lines: ["So Absolute Pure is Allāh the One in", "Whose Hand of Power is the Dominion", "Of all things; and to Him you all will be", "Returned."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "See note on 2:1" },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "See 39:71" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "Here Qur’ān is a verbal noun not a proper noun, so I have translated the meaning of it." },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "See 8:42" },
      ],
    },
    {
      id: 5,
      blocks: [
        { kind: "p", text: "Referrence is made to wood which is taken from the tree." },
      ],
    },
    {
      id: 6,
      blocks: [
        { kind: "p", text: "I believe that the very reason that Yā. Sīn. Sūrah is known as “the heart of the Glorious Qur’ān” is due to this Word of Revelation: Since the whole existence depend on the two Divine Powers of Allāh i.e., the Powers of “Command” and “Creation” 7:54, the two Powers that belong to Allāh only." },
      ],
    },
  ],
};

export default surah;
