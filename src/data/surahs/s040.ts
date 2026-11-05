import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 40 · Ghāfir — book pages 865–882 (verses 1–85, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 40,
  pages: [
    {
      bookPage: 865,
      heading: {
        title: "Ghāfir",
        lines: ["(The Forgiver) or Al-Mu’min (The Believer)", "Revealed at Makkah", "85 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Hā. Mīm{1}"] },
        { type: "verse", number: 2, lines: ["The Descending of this Holy Book is by", "Allāh, the Omniscient Omnipotent,"] },
        {
          type: "verse",
          number: 3,
          lines: ["The One Who is the Forgiver of sin,", "The Accepter of Repentance, the Severe", "In Retribution and the Owner of all", "Bounties. There is no God but Allāh", "And to Him is the return of all."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 4,
          lines: ["[O, Messenger!] No one disputes about", "Allāh’s Words of Revelation but", "The disbelievers. So their excitement", "About their coming and going in", "The land and their pretence of power", "And happiness should not deceive you;"],
        },
      ],
    },
    {
      bookPage: 866,
      blocks: [
        {
          type: "verse",
          number: 5,
          lines: ["The people of Nūh and those parties", "After them also denied their Messengers", "And every of them plotted to dispute,", "To torture [and even to kill] their", "Messengers; thus they meant", "To obliterate the Truth by Falsehood;", "But I [Allāh, the Almighty] seized all of", "Them [in various eras] by the Divine", "Chastisement; and see how dreadful was", "My Punishment;"],
        },
        {
          type: "verse",
          number: 6,
          lines: ["Thus the Ordainment of your", "Creator&Nurturer has been passed so", "That the disbelievers will surely be", "The inhabitants of the Hell Fire."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 7,
          lines: ["Those Angels who bear the Divine", "Throne of Arsh and those Angels who", "Turn round in circle, Celebrate the", "Attributes of their Creator; and they", "Believe in him; and they ask Forgiveness", "For those who believe in the Oneness of", "Allāh. They say: “O, our Creator! Your", "Grace and Knowledge has embraced all", "Things, so bestow your Forgiveness on", "Those who have repented from", "Wrongdoing and disbelief and now are", "Following your Straight Path; and please", "Keep them away from the Torment of", "The Blazing Fire;"],
        },
        {
          type: "verse",
          number: 8,
          continues: true,
          lines: ["“O our Creator! “Please let them enter", "The Lasting Gardens which You have", "Promised them and also let them enter", "The Gardens, those of their family, their"],
        },
      ],
    },
    {
      bookPage: 867,
      blocks: [
        {
          type: "verse",
          number: 8,
          continued: true,
          lines: ["Parents their wives and their offsprings", "The ones among them who have", "Become righteous. Verily, You are", "The Source-Wisdom Supremepower;"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["“And please protect them from the evil", "Consequences of their deeds which they", "Did out of ignorance and anyone whom", "You preserve and protect against", "The Torment of the Resurrection Day,", "You have indeed bestowed Your Mercy", "Upon him and that is the Great", "Achievement indeed.”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 10,
          lines: ["On the Resurrection Day", "The disbelievers will be addressed:", "“Allāh’s Detest for you was greater than", "Your detest and fury that you feel now", "Towards yourselves, because you were", "Called to Faith but you persisted on", "Disbelief and denial.”"],
        },
        {
          type: "verse",
          number: 11,
          lines: ["The disbelievers will say: “O, our", "Creator! You have caused us die twice", "And You have given us life twice! Now", "We confess our sins: Is there any way", "To get out of here?”"],
        },
        {
          type: "verse",
          number: 12,
          continues: true,
          lines: ["It will be said to them: “This Torment is", "Because whenever you were invited to", "The recognition of the Unity of Allāh", "You denied the guide but when some", "Misleaders preached you about", "Considering partners for Him, you", "Believed in what they said. So [today]"],
        },
      ],
    },
    {
      bookPage: 868,
      blocks: [
        { type: "verse", number: 12, continued: true, lines: ["The Command is with Allāh, the Exalted", "Supreme Great”"] },
        { type: "divider" },
        {
          type: "verse",
          number: 13,
          lines: ["Allāh is the One Who shows you His", "Signs and Miracles and sends down", "From the sky rain which is the source of", "Producing sustenance for you. But these", "Are the things that only men of", "Faith and invocation understand;"],
        },
        {
          type: "verse",
          number: 14,
          lines: ["So [O, men!] Invoke to Allāh and make", "Your religion pure and free from doubt", "For Him, even though the disbelievers", "Blame you and dislike your sincerity to", "Allāh and your Faith to Islām."],
        },
        {
          type: "verse",
          number: 15,
          lines: ["Allāh, the Owner of the Supreme Stand", "And the Divine Throne of Arsh, sends by", "His Command a spirit on any of His", "Obedient worshippers that He Wills in", "Order that he may [as a Messenger] warn", "People of the Day of Meeting;"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["The Day in which all men and their", "Deeds will appear to the Divine", "Presence; not a single thing of their life", "And conduct is hidden from Allāh.", "Whose is the Dominion of the existence", "On that Day? It does belong to Allāh, the", "One yet the Dominant over all things and", "Beings."],
        },
        {
          type: "verse",
          number: 17,
          continues: true,
          lines: ["On that Day every one will be requited", "For what he did in this world; there will", "Be no injustice on that Day; verily, Allāh"],
        },
      ],
    },
    {
      bookPage: 869,
      blocks: [
        { type: "verse", number: 17, continued: true, lines: ["Is the Supreme Swift-Reckoner."] },
        { type: "divider" },
        {
          type: "verse",
          number: 18,
          lines: ["[O, Messenger!] Warn this people, of", "The Day which is “near”, the Day in", "Which hearts reach the throats out of", "Fear. The disbelievers swallow their", "Anger since there is no intimate friend", "To talk to about their distress and no", "Intercessor whose intercession could be", "Accepted."],
        },
        {
          type: "verse",
          number: 19,
          lines: ["Allāh knows the eyes which betray:", "[Those who see the bounties of their", "Creator yet they deny them]; and He", "Knows the concealed secrets of", "The hearts;"],
        },
        {
          type: "verse",
          number: 20,
          lines: ["And Allāh’s Judgement is based on", "Truth, but the false deities that", "The disbelievers invoke to, cannot judge", "At all [because they cannot see with", "Stony eyes and hear with stony ears.]", "[Whereas] verily, Allāh is the Seeing", "Hearer [He hears by His Embracing", "Knowledge]"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 21,
          continues: true,
          lines: ["Do these pagans not travel", "Through the earth and see what was", "The doom of the disbelievers who lived", "Before them? They were stronger than", "Them and they left more buildings and", "Prominant monuments behind [and", "Caused more historical changes among", "Generations of each time]. But"],
        },
      ],
    },
    {
      bookPage: 870,
      blocks: [
        {
          type: "verse",
          number: 21,
          continued: true,
          lines: ["Allāh punished them due to their", "Disbelief and wrongdoings and they had", "No one to protect them against Allāh’s", "Divine Chastisement;"],
        },
        {
          type: "verse",
          number: 22,
          lines: ["The punishment afflicted them because", "Their Messengers came to them with", "Evident Signs and Miracles but they", "Persistently denied them; so Allāh seized", "Them for their sins; verily, Allāh is", "The Severe-Retributing Mighty."],
        },
        {
          type: "verse",
          number: 23,
          lines: ["[Mūssā was one of the denied", "Messengers] We sent Mūssā with Evident", "Signs and Miracles and a special", "Authority,"],
        },
        { type: "verse", number: 24, lines: ["To Firown, Hāmān and Qārūn, but they", "Called him: “A liar magician”;"] },
        {
          type: "verse",
          number: 25,
          lines: ["So when Mūssā exposed certain", "Miracles by Our Leave; and they realized", "That he was standing on a true position", "Supported by Us, they said: “Kill", "The sons of Mūssā’s followers to cut off", "Their generation and leave their women", "Alive to work as maids.” But the plot of", "The disbelievers encounters with", "The Supreme Plan from Allāh and ends", "Up in failure;"],
        },
        {
          type: "verse",
          number: 26,
          continues: true,
          lines: ["Firown suggested: “Leave me to kill", "Mūssā and let him invoke to his", "Creator! What I fear is that he may", "Upset the religion and rituals of you"],
        },
      ],
    },
    {
      bookPage: 871,
      blocks: [
        {
          type: "verse",
          number: 26,
          continued: true,
          lines: ["People and bring about changes among", "The community that may end up in a", "Chaos in the land.”"],
        },
        {
          type: "verse",
          number: 27,
          lines: ["Mūssā said: “I invoke to my", "Creator and your Creator for helping me", "Against the mischief of any arrogant", "Rebellious who does not believe in", "The Day of Account.”"],
        },
        {
          type: "verse",
          number: 28,
          lines: ["Meanwhile a believing man of Firown’s", "Family who used to hide his Faith out of", "Fear intervened saying: “Will you slay a", "Man with the charge that he says: “My", "Creator is Allāh, the One,” though he", "Has brought you Signs and Miracles", "From your Creator? So if he is a liar on", "Him will be the burden of his lies as a", "Sin but if he is truthful, then will fall on", "You some of the Chastisement that he", "Promises you. Verily, Allāh does not", "Guide the transgressing liars;"],
        },
        {
          type: "verse",
          number: 29,
          lines: ["“O, my people! Today you own", "The dominion in this land but if", "The Wrath of Allāh afflicts us who is", "There to help us against it?” Firown", "Said: “I enjoin you what I, myself realize", "That it is the best; and I only lead you", "To the right path.”{2}"],
        },
        {
          type: "verse",
          number: 30,
          lines: ["The Believer said: “O my people! I fear", "For you of the Day of Misfortune which", "Happened to many parties of", "The disbelieving people of the old,"],
        },
      ],
    },
    {
      bookPage: 872,
      blocks: [
        {
          type: "verse",
          number: 31,
          lines: ["“The same doom which inflicted", "The people of Nūh and ‘Ād and Thamūd", "And those disbelievers after them. Allāh", "Does not intend to do injustice to His", "Human creatures but they do wrong to", "Themselves;"],
        },
        {
          type: "verse",
          number: 32,
          lines: ["“O, my people! I fear for you of the Day", "Which there is no reply to any call,", "Though people may wail and call to", "Each other;"],
        },
        {
          type: "verse",
          number: 33,
          lines: ["“A Day which you shall turn your", "Backs and flee. You shall have", "No protection from Allāh; and", "The one whom Allāh deprives from His", "Guidance there will be no guide for him;"],
        },
        {
          type: "verse",
          number: 34,
          lines: ["“And to you came Yūsuf for guidance", "Times ago but you suspected his", "Mission though he had brought you", "Evident Signs and Miracles but when he", "Died you said: “Allāh will not send any", "Other Messenger after him [but here you", "Are with another Messenger!]” Thus", "Does Allāh leave in error those who", "Transgress and bring about doubts", "Regarding Allāh’s Unity;"],
        },
        {
          type: "verse",
          number: 35,
          continues: true,
          lines: ["“So those who dispute about Allāh’s", "Messages and Miracles without any solid", "Proof they will raise the Wrath", "Of Allāh and the detest of the believers;", "Thus does Allāh seal up the hearts of", "The arrogant oppressors [so that they"],
        },
      ],
    },
    {
      bookPage: 873,
      blocks: [
        { type: "verse", number: 35, continued: true, lines: ["Cannot perceive the Truth].”"] },
        {
          type: "verse",
          number: 36,
          lines: ["Firown said: “O, Hāmān! Build up a", "Lofty tower by which I may attain", "The heights,"],
        },
        {
          type: "verse",
          number: 37,
          lines: ["“The heights of the heavens, that I may", "Look upon the God of Mūssā and be", "Informed of His situation; but I indeed", "Consider Mūssā a liar.” Thus it was", "Made [by Satan] the evil deeds and", "The manner of Firown fair-seeming in", "His eyes, so he was hindered from", "The Right Way; however Firown’s plot", "Led only to perdition;"],
        },
        {
          type: "verse",
          number: 38,
          lines: ["And the Believer said: “O, my people!", "Follow me, I will lead you to the Right", "Path:"],
        },
        {
          type: "verse",
          number: 39,
          lines: ["“O, my people! This present life is a", "Temporal enjoyment but the Home of", "The Hereafter is a Lasting Home;"],
        },
        {
          type: "verse",
          number: 40,
          lines: ["“For the one who does evil the requital", "Shall be its like; and the one who does", "Righteous deeds whether male or female", "While is a believer such will enter", "The Garden of Paradise and will receive", "Hospitality with abundant and", "Permanent sustenance;"],
        },
        {
          type: "verse",
          number: 41,
          lines: ["“O, my people! How is it that I invite", "You to salvation but you invite me to", "The Hell Fire?"],
        },
      ],
    },
    {
      bookPage: 874,
      blocks: [
        {
          type: "verse",
          number: 42,
          lines: ["“You invite me to deny Allāh and", "To consider partners for Him of which I", "Have no knowledge, whereas I invite", "You to the Highly Forgiving", "Supremepower;"],
        },
        {
          type: "verse",
          number: 43,
          lines: ["“For sure what you invite me to", "Has no right or power to be", "Called to, neither in this world nor in", "The Hereafter; and indeed our return", "Will be to Allāh; and the transgressors", "Will be the inhabitants of the Fire;"],
        },
        {
          type: "verse",
          number: 44,
          lines: ["“You will soon realize the truth of what", "I said to you; as for my own affair I", "Entrust all to the Will of Allāh, since", "Allāh is the Supreme Seer of His", "Worshippers.”"],
        },
        {
          type: "verse",
          number: 45,
          lines: ["So Allāh rescued the Believer from", "The evil plots that they had made", "Against him; and the evil of", "The Chastisement surrounded the people", "Of Firown from all sides;"],
        },
        {
          type: "verse",
          number: 46,
          lines: ["To the Fire they shall be exposed", "Morning and evening; and when", "The Hour of the Resurrection arrives it", "Will be stated: “Cast the people of", "Firown into the most severe burning", "Fire!”"],
        },
        {
          type: "verse",
          number: 47,
          continues: true,
          lines: ["And they will dispute in the severe Fire:", "The weak followers will say to", "The arrogant ringleaders of the disbelief:", "“We followed your orders, now can you"],
        },
      ],
    },
    {
      bookPage: 875,
      blocks: [
        { type: "verse", number: 47, continued: true, lines: ["Remove some of the Fire from us?”"] },
        {
          type: "verse",
          number: 48,
          lines: ["They will answer them saying: “We are all", "On the same boat: All of us are in the", "Fire. Indeed Allāh has passed a just", "Decree against His human creatures.”"],
        },
        {
          type: "verse",
          number: 49,
          lines: ["Those in the Fire will say to the guards", "Of the Hell: “Pray to your Creator", "To lighten our Torment for one day.”"],
        },
        {
          type: "verse",
          number: 50,
          lines: ["They will answer: “Did not your", "Messengers come to you with clear", "Signs and Miracles?” They say: “Yes,", "They did” They will say: “So you pray for", "Yourselves [as much as you wish]", "Because the invocation of the", "Disbelievers will get nowhere!”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 51,
          lines: ["We will surely bestow Our Aid to Our", "Messengers and those who believe, both", "In this world and in the Hereafter when", "The witnesses stand in the Presence of", "Allāh;"],
        },
        {
          type: "verse",
          number: 52,
          lines: ["But on that Day the excuse of", "The wrongdoers will provide them no", "Benefit and for them will be the Curse", "And the Home of Disaster."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 53,
          lines: ["And We did bestow Mūssā the Guidance", "And We gave Taurāt to the Children of", "Isrāīl as inheritance;"],
        },
      ],
    },
    {
      bookPage: 876,
      blocks: [
        { type: "verse", number: 54, lines: ["A Book which was a guide and", "Admonition to men of reason."] },
        {
          type: "verse",
          number: 55,
          lines: ["So [O, Messenger!] you too be patient", "And steadfast since the Promise of Allāh", "[Regarding Allāh’s Support for", "The Messengers against the wrongdoers]", "Is True; ask Allāh’s Forgiveness for your", "Faults; and Celebrate Allāh’s Purity and", "Say the Remembrance of thanksgiving to", "Your Creator&Nurturer, in the evening", "And in the morning."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 56,
          lines: ["[O, Messenger!] Verily, those who", "Dispute about Allāh’s Words of", "Revelation without any solid proof or", "Reason, they are filled with pride and", "Envious ambitions to which they will", "Never attain.{3} So seek shelter in Allāh;", "Verily, Allāh is the Hearing Seer [and He", "Knows the intentions of the enemies of", "The Messenger]"],
        },
        {
          type: "verse",
          number: 57,
          lines: ["Certainly the creation of the heavens", "And the earth is greater and more", "Complicated than the creation of", "The people but most of people do not", "Understand;"],
        },
        {
          type: "verse",
          number: 58,
          continues: true,
          lines: ["Not equal is the blind and the one who", "Sees; nor are equal the believers who do", "Righteous deeds and those who", "Disbelieve and are wrongdoers. But you"],
        },
      ],
    },
    {
      bookPage: 877,
      blocks: [
        { type: "verse", number: 58, continued: true, lines: ["People learn very little by admonition;"] },
        {
          type: "verse",
          number: 59,
          lines: ["The Day of Judgement will certainly", "Come and there is no doubt about its", "Happening, yet most people do not", "Believe."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 60,
          lines: ["And your Creator&Nurturer has", "Stated: “Invoke to Me! I will answer", "Your invocation by fulfilling what you", "Have prayed for. But those who out of", "Vain arrogance avoid worshipping Me,", "They will surely enter the Hell while", "They are disgraced.”"],
        },
        {
          type: "verse",
          number: 61,
          lines: ["Allāh is the One Who has created", "The Night for you to have rest and", "Repose in it; and the Day to give you", "Light for work and activities therein.", "Verily, Allāh is Graceful and Forgiving", "To mankind but the majority of", "The people do not express their thanks", "To their Creator."],
        },
        {
          type: "verse",
          number: 62,
          lines: ["Such is Allāh, your Creator and", "The Creator of all things and beings.", "There is no God but He; then how you", "Are turned away from the Truth?"],
        },
        {
          type: "verse",
          number: 63,
          lines: ["Thus were turned away from the Truth", "Those who denied Allāh’s Signs and", "Miracles in the past."],
        },
        { type: "verse", number: 64, continues: true, lines: ["Allāh is the One Who has made"] },
      ],
    },
    {
      bookPage: 878,
      blocks: [
        {
          type: "verse",
          number: 64,
          continued: true,
          lines: ["The earth a resting place for you and", "The sky as a ceiling; and has given you", "Mankind beautiful shapes and has", "Provided edibles for you of pure and", "Good things. Such is Allāh your Creator.", "So Allāh is the Source of Blessings,", "The Creator of the worlds;"],
        },
        {
          type: "verse",
          number: 65,
          lines: ["He is the Eternal Live, there is no God", "But He; so invoke to Him and make", "Your religion sincere for Him only:", "Thanksgiving and adoration is due only", "To Allāh the Creator of the worlds and", "Their inhabitants."],
        },
        {
          type: "verse",
          number: 66,
          lines: ["Say [O, Messenger!]: “I have been", "Forbidden to worship those whom you", "Invoke to instead of Allāh, once", "The Evident Signs and Miracles have", "Come to me from my Creator&Nurturer;", "And I have been Commanded to submit", "My will to the Will of the Creator of", "The worlds.”"],
        },
        {
          type: "verse",
          number: 67,
          continues: true,
          lines: ["Allāh is the One Who created you", "From dust{4} and then from a sperm-drop,", "Then from blood-clot, then He brings", "You out of your mothers’ wombs as a", "Baby, then you reach your youth, the", "Age of full strength, then you reach your", "Old age. There are some of you who die", "Before reaching the old age; but", "Allāh lets most of you reach", "The appointed term that you may use"],
        },
      ],
    },
    {
      bookPage: 879,
      blocks: [
        {
          type: "verse",
          number: 67,
          continued: true,
          lines: ["Your mind and reason [about Allāh’s", "Power within your time of maturity];"],
        },
        {
          type: "verse",
          number: 68,
          lines: ["Allāh is the One Who gives life and", "Causes death; and when He Decides", "Upon some creation or existence or", "Some event He only states to it: “Be!”", "And it comes to existence immediately."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 69,
          lines: ["[O, Messenger!] Have you not observed", "That those who dispute about Our", "Words of Revelation to what extent they", "Are deviated from the Truth?"],
        },
        {
          type: "verse",
          number: 70,
          lines: ["Those who belie the Book and what We", "Have sent by Our Messengers, they shall", "See the consequences of their", "Behaviour;"],
        },
        {
          type: "verse",
          number: 71,
          lines: ["[And that will be] when the fetters and", "Chains are put around their necks and", "Are dragged by them,"],
        },
        { type: "verse", number: 72, lines: ["Into the boiling fetid water and then", "They are exposed to the Fire;"] },
        { type: "verse", number: 73, lines: ["Then they will be asked: “Where are", "Those whom you considered partners,"] },
        {
          type: "verse",
          number: 74,
          continues: true,
          lines: ["“For Allāh?” They shall reply: “We have", "Lost them, perhaps we did not worship", "Before anything at all.” Thus does Allāh", "Leave the disbelievers to their error [and"],
        },
      ],
    },
    {
      bookPage: 880,
      blocks: [
        { type: "verse", number: 74, continued: true, lines: ["A severe confusion];"] },
        {
          type: "verse",
          number: 75,
          lines: ["It will be said to them: “You are doomed", "To this Chastisement because you had", "Been busy merry-making and exulting in", "The earth unrightly and because of your", "Insolence;"],
        },
        {
          type: "verse",
          number: 76,
          lines: ["“Now enter the gates of the Hell", "To abide therein forever; and it is", "The worst abode for the arrogant!”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 77,
          lines: ["[O, Messenger!] Be patient; verily,", "The Promise of Allāh is True; and", "Whether We show you some of", "The Torment We have promised them", "While you are living among them or", "After you are taken to Us, in any case", "They all shall return to Us."],
        },
        {
          type: "verse",
          number: 78,
          lines: ["And indeed We have sent Messengers", "Before you; the story of some of them", "We have related to you and the story of", "Some of them We have not yet related to", "You. It was not for any Messenger", "To bring any Miracle save by Allāh’s", "Command so when the Commandment", "Of Allāh comes to pass [at the Time of", "Resurrection] it will be judged", "Between them justly; and the followers", "Of Falsehood will be the losers indeed."],
        },
        { type: "divider" },
        { type: "verse", number: 79, continues: true, lines: ["Allāh is the One Who created for you"] },
      ],
    },
    {
      bookPage: 881,
      blocks: [
        {
          type: "verse",
          number: 79,
          continued: true,
          lines: ["The cattle; and you ride on some of", "Them and some of them you eat of their", "Meat;"],
        },
        {
          type: "verse",
          number: 80,
          lines: ["And for you in them are some other", "Benefits [such as milk, wool and skin]", "They may reach you [and your load and", "Baggage] to where you wish; you are", "Carried on them as you are carried", "On ship;"],
        },
        {
          type: "verse",
          number: 81,
          lines: ["Allāh shows you and reminds you of His", "Signs and Bounties in all these; now", "Which of His Signs do you deny?"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 82,
          lines: ["Do they not travel through the earth", "To see what was the doom of those", "Wrongdoers before them? They were", "More numerous than these; and they", "Were stronger and they owned more", "Power and wealth and they have left", "Behind more traces [monuments, palaces", "And luxurious buildings] yet all they", "Earned did not avail them against", "The Divine Chastisement;"],
        },
        {
          type: "verse",
          number: 83,
          lines: ["And when their Messengers came to", "Them with Signs and Explicit", "Revelations they pretended they were", "Happy with what they had [i.e. ,", "The religion and rites of their ancestors]", "But the Divine Chastisement which they", "Mocked at encompassed them severely;"],
        },
      ],
    },
    {
      bookPage: 882,
      blocks: [
        {
          type: "verse",
          number: 84,
          lines: ["But when actually they saw the Sign of", "Our Torment they would say: “Now we", "Believe in Allāh, the only God; and we", "Deny those we considered partners for", "Him.”"],
        },
        {
          type: "verse",
          number: 85,
          lines: ["But their Faith will be of no use", "To the disbelievers after they see", "Our Torment. This has been Allāh’s", "Divine Line of Conduct in dealing with", "The wrongdoers of the past; once their", "Respited term is over it will be too late", "For repentance; and the disbelievers are", "Utterly the losers."],
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
        { kind: "p", text: "Implying that they should kill Mūssā and get rid of him" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "They envied the Holy Messenger for his Divine Position" },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "According to the Holy Qur’ān, ‘Ādam father of mankind was created from clay." },
      ],
    },
  ],
};

export default surah;
