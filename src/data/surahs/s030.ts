import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 30 · Ar-Rūm — book pages 734–746 (verses 1–60, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 30,
  pages: [
    {
      bookPage: 734,
      heading: {
        title: "Ar-Rūm",
        lines: ["(The Romans)", "Revealed at Makkah", "60 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Alif.Lām.Mīm{1}"] },
        { type: "verse", number: 2, lines: ["The Romans were defeated,"] },
        {
          type: "verse",
          number: 3,
          lines: ["On a land near by; but they will after", "This defeat become triumphant; it will", "Be soon,"],
        },
        {
          type: "verse",
          number: 4,
          lines: ["Within a few years. The Command", "Belongs to Allāh forever, so on the", "Day of the victory to come by Allāh’s", "Aid, the believers will rejoice,{2}"],
        },
      ],
    },
    {
      bookPage: 735,
      blocks: [
        {
          type: "verse",
          number: 5,
          lines: ["Since Allāh aids whom He Wills and He", "Is the Gragcious Invincible-Mighty:", "[He is the Dominating Power against", "The disbelievers and transgressors, and", "The Supporter and the Saviour of the", "Messengers and the believers];"],
        },
        {
          type: "verse",
          number: 6,
          lines: ["Such is Allāh’s Promise, and Allāh never", "Breakes His Promise, but most of", "People do not understand this very great", "Truth."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 7,
          lines: ["The people only are knowing about", "The worldly life; and they are careless", "About the Hereafter:"],
        },
        {
          type: "verse",
          number: 8,
          lines: ["Do they not think within themselves", "That Allāh has not created the heavens", "And the earth and what is between them", "But based on the Necessity and for", "An Appointed Term which one day will", "Come to the end? The truth is that most", "Of these people do not believe in", "The Hereafter and the Meeting with", "Their Creator&Nurturer;"],
        },
        {
          type: "verse",
          number: 9,
          continues: true,
          lines: ["Do they not travel through the earth", "To see what was the end of those", "Nations before them? They were more", "Distinctive in strength and they", "Cultivated more lands and built more", "Buildings more than what this people", "Have made; their Messengers came to", "Them with Evident Signs and Miracles", "But they denied them and caused their"],
        },
      ],
    },
    {
      bookPage: 736,
      blocks: [
        {
          type: "verse",
          number: 9,
          continued: true,
          lines: ["Own perdition; Allāh did not wrong", "Them, but they wronged themselves;"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["Perdition was the end of those who", "Committed the worst things: They", "Denied the Signs and Miracles of Allāh", "And made redicule of them."],
        },
        {
          type: "verse",
          number: 11,
          lines: ["Allāh is the One Who Originates", "Creation, then brings it back to where", "He started creation, [after death]", "Then you shall all be returned to Him;"],
        },
        { type: "verse", number: 12, lines: ["On the Day of Resurrection the guilty", "Will be deeply despaired;"] },
        {
          type: "verse",
          number: 13,
          lines: ["Since those whom they considered", "Partners for Allāh will not act as", "Intercessors for them; besides they no", "Longer believe in them as partners for", "Allāh;"],
        },
        { type: "verse", number: 14, lines: ["On the Day of Resurrection people are", "Divided [according to their deeds:]"] },
        {
          type: "verse",
          number: 15,
          lines: ["Those who believed and did", "Righteous deeds they will be happy and", "Joyful in the Garden of Paradise;"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["But those who disbelieved and denied", "Our Signs and Miracles as well as", "The Hereafter, they will be brought", "Forth to the Chastisement of the Hell."],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 737,
      blocks: [
        {
          type: "verse",
          number: 17,
          lines: ["O, people! Celebrate Allāh’s Absolute", "Purity in your evening and morning", "Prayers;"],
        },
        {
          type: "verse",
          number: 18,
          lines: ["Thanksgiving and adoration of", "The creatures is due to Allāh in", "The heavens and the earth; you people", "Also express your thanksgiving and", "Adoration in your afternoon and noon", "Prayers;"],
        },
        {
          type: "verse",
          number: 19,
          lines: ["Allāh is the One Who brings out", "The living from the dead and brings out", "The dead from the living; and He is", "The One Who gives life to the earth", "After it is dry and withered; thus you", "Will be brought out of your graves in", "The Day of Resurrection;"],
        },
        {
          type: "verse",
          number: 20,
          lines: ["And of Allāh’s Signs of Power is that He", "Created your kind, [‘Ādam] from dust,", "And then [at the second stage, creation", "Was from the sperm-drop] and from that", "Creation, you people are scattered all", "Around the world;"],
        },
        {
          type: "verse",
          number: 21,
          lines: ["And of Allāh’s Signs of Power is that He", "Created mates for you from your own", "Kind, [i.e., human being] to seek peace", "And happiness from one another and", "He caused love and kindness between", "You; and in all these there are Signs of", "Allāh’s Power and Divine Wisdom for", "Men of thought;"],
        },
        { type: "verse", number: 22, continues: true, lines: ["And of Allāh’s Signs of Power is"] },
      ],
    },
    {
      bookPage: 738,
      blocks: [
        {
          type: "verse",
          number: 22,
          continued: true,
          lines: ["The creation of the heavens and", "The earth and also the variation of", "The languages and the colours of you", "People; verily, in all these are Signs for", "Men of knowledge;"],
        },
        {
          type: "verse",
          number: 23,
          lines: ["And of Allāh’s Signs of Power is", "The program that He has Ordained for", "Your day and night: You get rest at", "Night and are active in the day time", "To seek sustenance from Allāh’s", "Bounties; verily, in all these are Signs of", "Divine Wisdom for those who listen to", "The Words of Truth;"],
        },
        {
          type: "verse",
          number: 24,
          lines: ["And of Allāh’s Signs of Power is that", "He shows you the lightening which", "Causes fear for the traveller in", "The desert and which is hope for", "The farmers; by sending rain from", "The sky the dry earth revives; verily, in", "All these are Signs of the Divine", "Wisdom for men who use their reason."],
        },
        {
          type: "verse",
          number: 25,
          lines: ["And of Allāh’s Signs of Power is that", "The sky and the earth stand on their", "Places by His Command [neither the sky", "Falls nor the earth subsides] so when", "Allāh, the Almighty calls you by a Single", "Call, from the earth of the graves,", "Promptly you will come out and will", "Submit to His Presence;"],
        },
        { type: "verse", number: 26, continues: true, lines: ["And to Him belong all creatures of"] },
      ],
    },
    {
      bookPage: 739,
      blocks: [
        { type: "verse", number: 26, continued: true, lines: ["The heavens and the earth and all are", "Obedient to Him;"] },
        {
          type: "verse",
          number: 27,
          lines: ["And Allāh is the One Who originates", "The creation and returns it to the state of", "Non-existence then brings it to life [like", "Vegetations in seasons] and this which is", "An easy act for Him symbols His Power", "For Resurrection; and to Allāh belong", "The Excellent Examples of creation both", "In the heavens and on the earth{3} and He", "Is the Source-Wisdom Supremepower."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 28,
          lines: ["Allāh employs a parable about you", "Mankind to justify why partnership with", "Him is impossible: Do you choose your", "Slaves whom you own, to be your", "Partner in whatever We have bestowed", "To you such as wealth and properties?", "And do you fear not to exceed their", "Rights as if you would treat a free", "Partner? [So how do you expect that", "Allāh who has created you and is", "The Owner of your life and all that", "Belong to you accept some of you as", "His partner?] Thus We Explain", "The Words of Revelation in detail for", "Men of reason."],
        },
        { type: "verse", number: 29, continues: true, lines: ["The disbelievers out of ignorance and"] },
      ],
    },
    {
      bookPage: 740,
      blocks: [
        {
          type: "verse",
          number: 29,
          continued: true,
          lines: ["Lack of knowledge only follow their", "Own caprices; so who can bring them to", "The Right Path once Allāh has deprived", "Them of His Guidance, due to their", "Rebellion? And for them there will be", "No friends and no helpers."],
        },
        {
          type: "verse",
          number: 30,
          lines: ["[O, mankind] Set the face of your heart", "Towards the upright religion of", "The Divine Unity: Allāh has originally", "Created the nature of man’s soul with", "Full tendency and love for the Divine", "Unity; and nothing can change", "The original creation of Allāh. This", "Monotheism is the True and Lasting", "Religion, but most people do not know", "This Great Truth [and ignorance always", "Challenges the Divine nature of man’s", "Soul];"],
        },
        {
          type: "verse",
          number: 31,
          lines: ["Turn to Allāh with repentance; and", "Fear from the disobedience of Allāh’s", "Commands; and keep up prayers", "Regularly; and do not consider partners", "For Him [in oppose to the nature of", "Your soul];"],
        },
        {
          type: "verse",
          number: 32,
          lines: ["And do not be of those who divided", "The principles of their religion and", "Became sects; and also were happy and", "Content with what they had received", "From the past [which they called it", "Religion of the Ancestors] and did not", "Follow the progressive teachings of", "The last religion of Truth."],
        },
      ],
    },
    {
      bookPage: 741,
      blocks: [
        {
          type: "verse",
          number: 33,
          lines: ["When some disaster or harm falls on", "People’s life, they turn to their Creator", "Beseechingly for help, but when they are", "Tasted from Allāh’s Favour and Grace,", "Then some of them consider partners", "For their Creator&Nurturer;"],
        },
        {
          type: "verse",
          number: 34,
          lines: ["Polytheism after people have been", "Bestowed all bounties represent their", "Ingratitude. So O, you polytheists! Enjoy", "Your worldly life but you will surely", "Know the consequences of your", "Deeds;"],
        },
        {
          type: "verse",
          number: 35,
          lines: ["Have We sent down some Divine", "Emissary to justify the polytheism", "For them?"],
        },
        {
          type: "verse",
          number: 36,
          lines: ["When We decide that people taste", "Some special Favour from Us, they", "Rejoice it [without expressing their", "Gratefulness] but when some harm", "Afflicts them due to their own deeds,", "Then suddenly they become", "Disappointed [regarding Faith and", "Allāh’s Grace];"],
        },
        {
          type: "verse",
          number: 37,
          lines: ["Do they not see that Allāh expands", "Provision or restricts it [according to", "The Divine Necessity] for whom He", "Wills? and in this are Signs for men of", "Faith."],
        },
        { type: "divider" },
        { type: "verse", number: 38, continues: true, lines: ["So give what is due to your near"] },
      ],
    },
    {
      bookPage: 742,
      blocks: [
        {
          type: "verse",
          number: 38,
          continued: true,
          lines: ["Relatives and also to the needy and", "The wayfarers. This is best for those who", "Seek Allāh’s Pleasure and they shall", "Surely receive salvation."],
        },
        {
          type: "verse",
          number: 39,
          lines: ["Whatever you give with the name of", "Usury, to increase the property of", "The usurer, it has no increase in", "The Presence of Allāh; but whatever you", "Spend in alms to gain the Pleasure of", "Allāh it does attain the state of", "Becoming manifold by Allāh’s", "Favour."],
        },
        {
          type: "verse",
          number: 40,
          lines: ["Allāh is the One Who created you and", "Gave you sustenance; then He causes", "You to die; again He will bring you", "To life. Is any of the partners that you", "Consider for Allāh able to do any of", "These? Allāh is the Absolute Pure and", "He is above any partner that they", "Attribute to Him."],
        },
        {
          type: "verse",
          number: 41,
          lines: ["Corruption has been spread throughout", "The world in the sea and the land on", "The account of men’s wrong deeds.", "Allāh has let it be so in order that", "The whole society taste the", "Consequences of giving in corruption", "And wrongdoing and that they may", "Repent and amend themselves by", "Turning to the Truth."],
        },
        {
          type: "verse",
          number: 42,
          continues: true,
          lines: ["Say [O, Messenger!]: “Travel through", "The land to observe the doom end of", "Those idolaters who lived before” [so"],
        },
      ],
    },
    {
      bookPage: 743,
      blocks: [
        { type: "verse", number: 42, continued: true, lines: ["That they may learn some lessons for", "Themselves.]"] },
        {
          type: "verse",
          number: 43,
          lines: ["So set the face of your heart towards", "The Right and Lasting Religion, before", "Comes a Day from Allāh which no", "Power can avert it; on that Day, people", "Will be divided into different lines:"],
        },
        {
          type: "verse",
          number: 44,
          lines: ["Whoever is a disbeliever in this world,", "His disbelief will act against him and", "Those who do righteous deeds, they", "Prepare peace and plan security for", "Their own souls,"],
        },
        {
          type: "verse",
          number: 45,
          lines: ["Since Allāh bestows the rewards of", "The believers and the good-doers out of", "His Grace; surely Allāh does not like", "The disbelievers."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 46,
          lines: ["And of Allāh’s Signs of Power is that", "He sends the winds as heralds of rain", "And that He may make you taste of His", "Grace; and that the ships glide by His", "Command so that you may seek His", "Bounties [through overseas trading] and", "It is for you to be grateful."],
        },
        {
          type: "verse",
          number: 47,
          continues: true,
          lines: ["[O, Messenger!] We surely sent before", "You many Messengers to their people", "And they appeared among them with", "Evident Signs and Miracles and", "Convincing Arguments but because all", "Were denied We took vengeance over", "The disbelievers, since We have"],
        },
      ],
    },
    {
      bookPage: 744,
      blocks: [
        { type: "verse", number: 47, continued: true, lines: ["Ordained that to aid the believers be", "Incumbent upon Us."] },
        {
          type: "verse",
          number: 48,
          lines: ["Allāh is the One Who sends the winds", "To move the clouds, then He spreads", "The clouds in the sky the way He", "Decides; then piles up the clouds; then", "You see the rain coming forth from", "Inside them; then when He Decides, it", "Falls upon those whom He Wills [of", "Those who prayed for rain], then they do", "Rejoice,"],
        },
        {
          type: "verse",
          number: 49,
          lines: ["Although they were before falling rain", "In a state of total despair, [and prayed", "For it]"],
        },
        {
          type: "verse",
          number: 50,
          lines: ["So look at the Signs of Allāh’s Grace:", "How He bestows life to the earth after", "It is dry and withered, thus He brings", "To life the dead on the Resurrection Day", "And Allāh is Powerful over all things."],
        },
        {
          type: "verse",
          number: 51,
          lines: ["And if We send a hot wind and they see", "Their gardens and farm yellow, they lose", "Faith and turn to blasphemy [they", "Cannot stand any trial]."],
        },
        {
          type: "verse",
          number: 52,
          lines: ["[O, Messenger] so surely you cannot", "Make the dead or the deaf to hear", "The Call of Guidance once they have", "Turned away from the Truth,"],
        },
        {
          type: "verse",
          number: 53,
          continues: true,
          lines: ["Also you cannot guide the blind to", "The Right Path; you can make hear", "Only those who believe in Our"],
        },
      ],
    },
    {
      bookPage: 745,
      blocks: [
        { type: "verse", number: 53, continued: true, lines: ["Revelations and who submit", "Themselves to the Truth."] },
        { type: "divider" },
        {
          type: "verse",
          number: 54,
          lines: ["Allāh is the One Who created you from", "A state of weakness [as a baby] then He", "Gave you strength after weakness [as a", "Young] then weakness and old age", "Overtook you after the stage of strength.", "Allāh creates what He Wills and He is", "The Absolute-Knowing Ordainer."],
        },
        {
          type: "verse",
          number: 55,
          lines: ["And on the Day when the Hour of", "Resurrection comes, the guilty ones will", "Swear that they did not stay [in", "The world] but for an hour;{4} thus they", "Are turned away from realizing", "The Truth;"],
        },
        {
          type: "verse",
          number: 56,
          lines: ["And those upon whom are bestowed", "Both knowledge and Faith will say:", "“Surely you stayed [in the world]", "According to Allāh’s Book till the Day", "Of Resurrection and now this is the Day", "Of Resurrection but you did not Know", "Before this.”"],
        },
        {
          type: "verse",
          number: 57,
          lines: ["So on that Day the appology of", "The disbelievers and the transgressors", "Will not profit them and they will not be", "Given chance for repentance."],
        },
        { type: "verse", number: 58, continues: true, lines: ["And We have set forth all sorts of"] },
      ],
    },
    {
      bookPage: 746,
      blocks: [
        {
          type: "verse",
          number: 58,
          continued: true,
          lines: ["Parables in this Holy Qur’ān for man’s", "Guidance but if you bring them any", "Miracle the disbelievers will say: “You", "Do nothing but sorcery.”"],
        },
        {
          type: "verse",
          number: 59,
          lines: ["Thus does Allāh seal up the hearts of", "Those who are persisting in their", "Ignorance;"],
        },
        {
          type: "verse",
          number: 60,
          lines: ["So you [O, Messenger!] be patient in", "This situation; surely Allāh’s Promise is", "True, so do not let those who have not", "Attained certainty of Faith, cause", "Feeling of inferiority and infirmness in", "You."],
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
        { kind: "p", text: "The Divine Prophecy about the victory of the Romans over the Persians was fulfilled when the Roman Empire had lost many of its territories and Muslims were plunged into distress, because most of Persians were Magi and the Romans were Christians, therefore the pagans of Makkah were joyous and cherished the thought of uprooting the newly established community of Islām which was rather weak and not firmly equipped yet. But by Allāh’s Command within seven years, Heraclius the Roman Emperor defeated Persians; and also at the Badr Battle, Allāh, the Almighty made the Muslims victorious over the Makkan pagans, though Muslims were a small and ill-equipped group and the pagans were strong in army and war equipments. So the Divine Prophecy and the Promise of the Gracious Invincible Mighty regarding the bestowal of the Divine Aid on the believers proved absolutely True in two different lands, though the disbelievers did not like it. (Commentators)" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "The Excellent Examples of the heavens are: the Divine Throne, the sun, the moon, the stars and the Angels. And the Excellent Examples on the earth are: The nature, the Messengers and the believers." },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "See 20:103-104" },
      ],
    },
  ],
};

export default surah;
