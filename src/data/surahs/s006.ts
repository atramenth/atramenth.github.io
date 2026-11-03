import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 6 · Al-An‘ām — book pages 215–255 (verses 1–165, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 6,
  pages: [
    {
      bookPage: 215,
      heading: {
        title: "Al-An‘ām",
        lines: ["(The Cattle)", "Revealed at Makkah", "165 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["Thanksgiving and adoration is due only", "To Allāh Who created the heavens and", "The earth and made the darkness and", "The light; yet those who disbelieve", "Set up equals with their", "Creator&Nurturer;"],
        },
        {
          type: "verse",
          number: 2,
          lines: ["Allāh is the One Who created you", "Of clay,{1} then Ordained the term [of", "Your life]; and in His Presence is", "The [Knowledge] of the determined term,", "But thereafter you [people] doubt about", "The Truth;"],
        },
        {
          type: "verse",
          number: 3,
          lines: ["And Allāh is the only God both in", "The heavens and on the earth; and", "He knows what you conceal and what", "You reveal and He knows what you do,", "[Your good or bad deeds]."],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 216,
      blocks: [
        {
          type: "verse",
          number: 4,
          lines: ["There did not come to the disbelievers", "Any revelation of the revelations from their", "Creator&Nurturer that they", "Did not turn away from [accepting] it;"],
        },
        {
          type: "verse",
          number: 5,
          lines: ["These pagans [of Quraish] belied the", "Truth when it came to them; therefore", "Very soon the tidings will come to them", "About what they used to mock at;"],
        },
        {
          type: "verse",
          number: 6,
          lines: ["Have they not observed how many", "Generations before them We", "Destroyed? Generations that We had", "Established on the earth [with", "Possessions and strength], the like of", "That We have not yet given to you", "[By now]. We poured out rain for", "Them from the sky in abundance; and", "We made the streams flow in their", "Towns; but because of their sins We", "Destroyed them and created new", "Generations after them;"],
        },
        {
          type: "verse",
          number: 7,
          lines: ["And even if We [instead of Words", "Of Revelation] had sent down to you", "[O, Messenger] a Book of Message", "Written on a paper so that they could", "Touch it with their hands, surely", "The disbelievers would have said: “This", "Is nothing but obvious magic.”"],
        },
        {
          type: "verse",
          number: 8,
          continues: true,
          lines: ["And they said: “Why an Angel is not", "Sent down to him?”{2} Had We sent", "Down an Angel the matter would", "Have been determined at once"],
        },
      ],
    },
    {
      bookPage: 217,
      blocks: [
        {
          type: "verse",
          number: 8,
          continued: true,
          lines: ["[And following raising Allāh’s Wrath,]", "They would have been destroyed; and", "No respite would be given to them", "[To repent];"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["And had We appointed with", "The Messenger an Angel, We would", "Have made the Angel appear as a man", "And We would have certainly caused", "Them confusion in the matter as they", "Have already caused confusion [for", "Themselves and the others];"],
        },
        {
          type: "verse",
          number: 10,
          lines: ["[O, Messenger!] And indeed were", "Also mocked [by the disbelievers]", "Many other Messengers before you,", "But their scoffers were encompassed", "In punishment by the very thing that", "They used to mock at;"],
        },
        {
          type: "verse",
          number: 11,
          lines: ["Say [O, Messenger!]: “Travel on", "The land and see what was the end of", "Those who belied the Divine Signs.”"],
        },
        {
          type: "verse",
          number: 12,
          lines: ["Say [O, Messenger!]: “To whom", "Does belong what is in the heavens", "And on the earth?” Say: “It belongs to", "Allāh.” Allāh has prescribed Grace for", "Himself. Most certainly He will gather", "You on the Day of Resurrection, about", "Which there is no doubt; those who", "Have caused loss to themselves are", "Those who do not believe."],
        },
        {
          type: "verse",
          number: 13,
          continues: true,
          lines: ["And to Allāh belongs whatever", "Exists in the night and the day and"],
        },
      ],
    },
    {
      bookPage: 218,
      blocks: [
        { type: "verse", number: 13, continued: true, lines: ["Allāh is the Knowing Hearer."] },
        {
          type: "verse",
          number: 14,
          lines: ["Say [O, Messenger!]: “Shall I take", "For my Guardian other than Allāh,", "The Originator of the heavens and", "The earth? And Allāh is the One Who", "Feeds [the creatures] but is not fed", "[Because does not need to eat].” Say", "[O, Messenger!]: “I have been", "Commanded to be the first of", "The Muslims and I have [also] been", "Addressed: “Do not be one of", "The polytheists!”"],
        },
        {
          type: "verse",
          number: 15,
          lines: ["Say [O, Messenger!]: “Indeed I fear, if I", "Disobey My Creator&Nurturer, I shall", "Suffer the Torment of the Mighty Day;"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["“On that Day if the Torment is", "Averted from a person, Allāh’s Mercy", "Has been surely bestowed upon him", "And that would be the Great", "Achievement.”"],
        },
        {
          type: "verse",
          number: 17,
          lines: ["And if Allāh should let you", "[O, man] be touched by any harm", "None can remove that affliction but", "Allāh; and if Allāh [should let]", "Any good happens to you [nothing can", "Deprive you from it]; verily, Allāh is", "Powerful over all things;{3}"],
        },
      ],
    },
    {
      bookPage: 219,
      blocks: [
        {
          type: "verse",
          number: 18,
          lines: ["Allāh is the Omnipotent above His", "Worshippers; and Allāh is", "The Informed Sovereign."],
        },
        {
          type: "verse",
          number: 19,
          lines: ["Say [O, Messenger!]: “What is greatest", "As an evidence?” Say: “Allāh’s and", "Allāh is Witness between me and you.", "This Qur’ān has been revealed to me", "And I am to warn you and all the people", "It reaches. Do you bear witness that", "Besides Allāh there is another god?”", "Say [O, Messenger!]: “I do not bear", "Such [false] witness.” And say: “Indeed", "Allāh is the only God [and the One]", "And truly I express my disdain from", "That which you associate with Allāh.”"],
        },
        {
          type: "verse",
          number: 20,
          lines: ["Those whom We have given the Book", "Recognize the Messenger as they", "Recognize their own sons.{4} Yet those", "Who have caused loss for their own", "Souls [because of denying the Truth], do", "Not believe."],
        },
        {
          type: "verse",
          number: 21,
          lines: ["And who is more transgressing than", "He who invents lies against Allāh", "Or belies Allāh’s Signs? Verily,", "The disbelievers will never receive", "Salvation."],
        },
        {
          type: "verse",
          number: 22,
          continues: true,
          lines: ["And on the Day when We shall", "Gather them all together, then We shall", "Ask those who set up other gods"],
        },
      ],
    },
    {
      bookPage: 220,
      blocks: [
        {
          type: "verse",
          number: 22,
          continued: true,
          lines: ["With Allāh: “Where are your associates", "Whom you used to consider as your", "Supporters and intercessors?”"],
        },
        {
          type: "verse",
          number: 23,
          lines: ["Then there will be no excuse left", "For them but to say: “By Allāh, our", "Creator&Nurturer, we were not", "Polytheists.”"],
        },
        {
          type: "verse",
          number: 24,
          lines: ["Look! How they lie against", "Themselves? But the lies that they", "Forged, are all destroyed;"],
        },
        {
          type: "verse",
          number: 25,
          lines: ["[O, Messenger!] And of them there", "Are some who listen to you, [while you", "Recite the Qur’ān]; but We have set", "Veils on their hearts so that they", "Cannot understand; and We have put", "Deafness in their ears [they cannot hear", "The truth] so if they see any miracle,", "[No matter how great], they will not", "Believe therein. When the disbelievers", "Come to you, they only dispute with", "You saying: “This Qur’ān is not but", "The tales of the ancients.”"],
        },
        {
          type: "verse",
          number: 26,
          lines: ["And they, [the disbelievers]", "Prohibit others from the Qur’ān", "And they themselves keep away from", "It; and [by doing so] they only", "Destroy their own souls, yet they do", "Not perceive it."],
        },
        {
          type: "verse",
          number: 27,
          continues: true,
          lines: ["If only you [O, Messenger] could see", "The disbelievers when they are held", "Over the Fire; then they will say: “If", "Only we were sent back [to the world]"],
        },
      ],
    },
    {
      bookPage: 221,
      blocks: [
        {
          type: "verse",
          number: 27,
          continued: true,
          lines: ["Then we would not belie our", "Creator’s Words of Revelation and we", "Would be among the believers.”"],
        },
        {
          type: "verse",
          number: 28,
          lines: ["[They say so because] It has been", "Visualized to them what they", "Concealed [of their evil deeds] before;", "And if they were sent back, they would", "Certainly commit the very same things", "That they were forbidden; and most", "Certainly they are liars;"],
        },
        {
          type: "verse",
          number: 29,
          lines: ["And they used to say: “There is no", "Other life but the life of this world, and", "We shall never be raised up [after", "Death].”"],
        },
        {
          type: "verse",
          number: 30,
          lines: ["And if you could but see them [how", "Miserable they are] when they will be", "Held in front of their Creator&Nurturer!", "Allāh will state: “Is not this", "[The Resurrection and the taking of", "The accounts] the Truth?” They will say:", "“Yes, by our Creator&Nurturer!” Allāh", "Will state: “Taste you now the Torment,", "Because of your disbelief!”"],
        },
        {
          type: "verse",
          number: 31,
          lines: ["Indeed they are the losers, those", "Who denied the Meeting of Allāh.", "So when the Hour [of Resurrection]", "Comes to them suddenly, they shall", "Say: “Alas for us, that we neglected it!”", "And they shall bear their burdens [of", "Their sins] on their backs; and evil", "Indeed are the burdens that they will", "Bear!"],
        },
      ],
    },
    {
      bookPage: 222,
      blocks: [
        {
          type: "verse",
          number: 32,
          lines: ["And the life of this world is nothing", "But play and amusement. And the Last", "Home [in the Hereafter] is the best for", "The pious; will you not then use your", "Reason?"],
        },
        {
          type: "verse",
          number: 33,
          lines: ["Indeed We know that it grieves you", "[O, Messenger] what the disbelievers say,", "But verily, it is not [only] you that they", "Belie, but it is the Signs of Allāh that", "These self-oppressors deny;"],
        },
        {
          type: "verse",
          number: 34,
          lines: ["And indeed other Messengers", "Were belied before you, but they were", "Patient on their being belied and they", "Were hurt until Our Aid reached them.", "There is nothing that can alter Allāh’s", "Words of Ordainment;{5} and most", "Certainly has come to you some news", "Of the Messengers [from the past and", "How they received the Divine Aid.]"],
        },
        {
          type: "verse",
          number: 35,
          lines: ["If their aversion from the Truth,", "[O, Messenger] is hard on you [and you", "Cannot be patient against their harm],", "Then if you can, seek a tunnel to", "The ground or climb a ladder up to", "The heaven to bring a Miracle to them.", "If Allāh so Willed, He would gather", "Them all to guidance; so do not be one", "Of the ignorants.{6}"],
        },
      ],
    },
    {
      bookPage: 223,
      blocks: [
        {
          type: "verse",
          number: 36,
          lines: ["It is only those who listen [to", "The Message] that will respond: As to", "The dead [they do not listen and they do", "Not believe], Allāh will raise them up", "[From the graves], then to Allāh they", "Will be returned."],
        },
        {
          type: "verse",
          number: 37,
          lines: ["And they said: “Why has not his", "Creator&Nurturer sent a Miracle to", "Him?” Say: “Allāh is certainly Able", "To send down a Miracle.” But most of", "Them do not understand."],
        },
        {
          type: "verse",
          number: 38,
          lines: ["There is no crawling on the earth,", "Not a bird that flies with its two wings,", "But they are communities the like of", "You [mankind]; We have not neglected", "Anything in the Book.{7} Then to their", "Creator&Nurturer all [creatures] shall", "Be gathered."],
        },
        {
          type: "verse",
          number: 39,
          lines: ["And those who belie Our Words of", "Revelation are deaf and dumb [from", "Listening and telling the Truth] and they", "Dwell in utter darkness [of ignorance];", "Allāh lets whom He Wills go astray;", "And whom He Wills He sets him", "Upon the Straight Path."],
        },
        {
          type: "verse",
          number: 40,
          continues: true,
          lines: ["Say [O, Messenger!]: “Have you", "Considered if Allāh’s Torment comes", "Upon you and the Hour [of", "Resurrection] comes upon you, will", "You call upon any other for help, than"],
        },
      ],
    },
    {
      bookPage: 224,
      blocks: [
        {
          type: "verse",
          number: 40,
          continued: true,
          lines: ["Allāh, if you speak truly [that you have", "Deities who do such and such for you]?”"],
        },
        {
          type: "verse",
          number: 41,
          lines: ["But, you will call upon Allāh only.{8}", "And if He Wills He will remove that", "Problem for which you have called", "Upon Him; and you will forget those", "False gods that you set up with Allāh."],
        },
        {
          type: "verse",
          number: 42,
          lines: ["[O, Messenger] And most certainly", "We sent Messengers to peoples before", "You then [upon their disobedience]", "We seized them in distress and adversity", "In order that they might", "Submit [to the Truth] with humility;"],
        },
        {
          type: "verse",
          number: 43,
          lines: ["Yet why they did not [out of", "Remorse] humble themselves when", "Our punishment came to them? But", "[On the contrary] their hearts grew", "Hard and Satan made fair-seeming to", "Them what they were doing;"],
        },
        {
          type: "verse",
          number: 44,
          lines: ["And when they forgot the warnings that", "They had been given [by the", "Messengers], We opened for them the", "Gates of all things [of enjoyments] but in", "The middle of what they were rejoicing", "In, We seized them suddenly, and then", "They were in utter despair;"],
        },
      ],
    },
    {
      bookPage: 225,
      blocks: [
        {
          type: "verse",
          number: 45,
          lines: ["So the roots of the transgressors", "Were cut off [by Allāh’s Command].", "And thanksgiving and adoration is due", "To Allāh the Creator of the worlds."],
        },
        {
          type: "verse",
          number: 46,
          lines: ["Say [O, Messenger!]: “Have you", "Thought if Allāh takes away your", "Hearing and sight, and puts a seal", "Upon your hearts, who is then other", "Than Allāh who brings them back to", "You?” See how We explain the Words", "Of Revelation [to make them", "Understood], yet thereafter they turn", "Away from the Truth;"],
        },
        {
          type: "verse",
          number: 47,
          lines: ["Say [O, Messenger!]: “Have you", "Thought if Allāh’s Torment comes upon", "You suddenly or expectedly, will", "Any one be destroyed except", "The transgressors?”"],
        },
        {
          type: "verse",
          number: 48,
          lines: ["And We do not send the Messengers", "But as Givers of glad-tidings and as", "Warners; so those who believe and", "Amend their conduct, upon them shall", "Come no fear, nor shall they grieve,"],
        },
        {
          type: "verse",
          number: 49,
          lines: ["But those who belied Our Signs and", "Miracles, Chastisement shall afflict them", "For their disobedience."],
        },
        {
          type: "verse",
          number: 50,
          continues: true,
          lines: ["Say [O, Messenger!]: “I do not say", "That I possess the treasures of Allāh", "Nor that I know the Unseen and I do", "Not say that I am an Angel; [but I say:]", "I do not follow save what is revealed to"],
        },
      ],
    },
    {
      bookPage: 226,
      blocks: [
        {
          type: "verse",
          number: 50,
          continued: true,
          lines: ["Me.” Say [O, Messenger!]: “Are the blind", "And the seeing man equal? Why do", "Not you [people] try to think?”"],
        },
        {
          type: "verse",
          number: 51,
          lines: ["And [O, Messenger!] warn with", "The Holy Qur’ān, those who fear that", "They shall be gathered [on the Day of", "Resurrection] to their Creator&Nurturer,", "When they will have no protector and no", "Intercessor besides Allāh; they may", "[Through the teachings of the Holy", "Qur’ān] become pious."],
        },
        {
          type: "verse",
          number: 52,
          lines: ["And [O, Messenger!] do not drive away", "Those who invoke upon their", "Creator&Nurturer in the morning and in", "The evening seeking Allāh’s Pleasure;", "Nothing of their account falls upon you", "And nothing of your account falls upon", "Them, so if you drive them away, you", "Will be regarded as one of", "The oppressors;{9}"],
        },
        {
          type: "verse",
          number: 53,
          lines: ["Thus, We did try some of them by", "Others so that they should say: “Are", "These the same people upon whom", "Allāh has put His Favour from among us", "[And has appointed them as", "The Messenger’s Companions]?” Does", "Allāh not know best the grateful", "People?"],
        },
        { type: "verse", number: 54, continues: true, lines: ["And when come to you those men"] },
      ],
    },
    {
      bookPage: 227,
      blocks: [
        {
          type: "verse",
          number: 54,
          continued: true,
          lines: ["Who believe in Our Signs, say", "[O, Messenger!]: “Salamun Alaikum,”{10}", "Your Creator has prescribed Mercy on", "Himself; so if any one of you does wrong", "Out of ignorance, but turns repentant", "After that and amends [himself], then", "Verily, Allāh is the Merciful Forgiving.", "[And will accept his repentance].”"],
        },
        {
          type: "verse",
          number: 55,
          lines: ["And thus, We explain the Words of", "Revelation in detail, so that the way of", "The sinners may become distinct", "[From that of the righteous]."],
        },
        {
          type: "verse",
          number: 56,
          lines: ["Say [O, Messenger!]: “I have been", "Forbidden to worship those whom you", "Invoke instead of Allāh.” Say: “I do not", "Conform to your caprices; if I did, I", "Would go astray and I would not be", "Regarded one of the guided ones.”"],
        },
        {
          type: "verse",
          number: 57,
          lines: ["Say [O, Messenger!]: “Verily, I", "Have a manifest evidence and proof", "From my Creator&Nurturer, but you", "Belied it; there is not with me that", "[Miracle or Chastisement] which you", "Haste for; the Command belongs to", "Allāh only; Allāh will declare the Truth", "And He is the Supreme Judge.”"],
        },
        {
          type: "verse",
          number: 58,
          continues: true,
          lines: ["Say [O, Messenger!]: “If I had that", "Which you are asking for impatiently", "The matter would have been settled"],
        },
      ],
    },
    {
      bookPage: 228,
      blocks: [
        {
          type: "verse",
          number: 58,
          continued: true,
          lines: ["Immediately between me and you.{11}", "And Allāh knows the wrongdoers only", "So well.”"],
        },
        {
          type: "verse",
          number: 59,
          lines: ["And with Allāh are the keys of", "The Unseen; no one knows them but", "Allāh; and Allāh [alone] knows whatever", "Is in the land and in the sea; and nor", "Does a leaf falls [of a tree] but He knows", "It, nor a grain in the darkness of", "The deepest [parts] of the ground, nor", "Anything wet or dry{12} but [it is recorded]", "In the Expositoring Book of Truth;{13}"],
        },
        {
          type: "verse",
          number: 60,
          lines: ["Allāh is the One Who takes your", "Souls at night [when you are", "Asleep], and receives information of all", "That you have done during the day;", "Then He wakes you up again in", "The morning until the Appointed Term", "Be fulfilled, then at the end, you will", "Return to Allāh and Allāh will inform", "You of what you have been doing [in this", "World];"],
        },
        {
          type: "verse",
          number: 61,
          lines: ["Allāh is the Dominant Power", "Above His worshippers; and He sends", "The guarding Angels over you, until", "When death comes to one of you, then", "Our Emissaries [the Angel of death and", "His assistants] take his soul; and they are", "Not neglectful in doing their duty;"],
        },
      ],
    },
    {
      bookPage: 229,
      blocks: [
        {
          type: "verse",
          number: 62,
          lines: ["Then men will be sent back to", "Allāh, their True Guardian. Surely, to", "Allāh belongs the Judgement and He", "Is the Supreme Swift-Reckoner."],
        },
        {
          type: "verse",
          number: 63,
          lines: ["Say [O, Messenger!]: “Who is the One", "Who saves you from the [dread of]", "Darkness of the land and the sea? When", "You pray to Him humbly and secretly", "[Saying:] “If our Creator saves us from", "This [danger], we shall certainly become", "Of the grateful ones.”"],
        },
        {
          type: "verse",
          number: 64,
          lines: ["Say [O, Messenger!]: “Allāh is the One", "Who saves you from this [danger] and", "From every affliction, yet you set up", "Others with Allāh.”"],
        },
        {
          type: "verse",
          number: 65,
          lines: ["Say [O, Messenger!]: “Allāh has", "Power to send forth upon you a Torment", "From above you{14} or from under your", "Feet,{15} or to cover you with confusion of", "Becoming sects and to cause that you", "Taste the aggression of one another.”", "Behold! How We explain Our Words of", "Revelation so that they may understand", "[And turn to the Truth]."],
        },
        {
          type: "verse",
          number: 66,
          lines: ["And your people [O, Messenger]", "Have denied the Holy Qur’ān though it", "Is the Truth. Say: “I am not", "The defender of what you do.”"],
        },
      ],
    },
    {
      bookPage: 230,
      blocks: [
        {
          type: "verse",
          number: 67,
          lines: ["For every Divine Prophecy there is an", "Ordained Time and you will soon know", "It;"],
        },
        {
          type: "verse",
          number: 68,
          lines: ["And when in a meeting you see men", "Who engage in a false conversation", "About Our Words of Revelation, then", "Keep away from them until they turn to", "Another discourse; but if Satan causes", "You to forget, then after recollection, do", "Not sit with the disbelievers and", "The wrongdoing people;"],
        },
        {
          type: "verse",
          number: 69,
          lines: ["And nothing of the account of", "[The disbelievers] shall be upon", "The pious; but [if one sits with them] it", "Should be for admonition, so that they", "May become pious."],
        },
        {
          type: "verse",
          number: 70,
          continues: true,
          lines: ["And [O, Messenger!] leave alone", "Those who have taken their religion", "For play or amusement and", "The tentative life of this world has", "Deceived them; yet admonish them by", "[The Holy Qu’rān] and proclaim this", "Truth in order that a person does not", "Submit himself to destruction for what", "He has done, when [in the Hereafter] he", "Will not find for himself any protector", "Or intercessor besides Allāh, and if he", "Offers every ransom [to release himself]", "It will not be accepted from him; those", "Are the ones who are given up", "To destruction for what they have done;", "For them awaits a drink of boiling water"],
        },
      ],
    },
    {
      bookPage: 231,
      blocks: [
        { type: "verse", number: 70, continued: true, lines: ["And a Painful Torment because of their", "Disbelief."] },
        {
          type: "verse",
          number: 71,
          lines: ["Say [O, Messenger!]: “Shall we", "Invoke others besides Allāh [and call", "Them gods] which cannot do us good", "Or harm? And shall we turn back on our", "Heels{16} after Allāh has guided us? Like", "One whom the devils have made to go", "Astray, confused and wandering", "Through the land;{17} and his close", "Companions keep on calling him to", "Guidance [saying:] “Come to us!” Say", "[O, Messenger!]: “Allāh’s Guidance is", "Indeed the True Guidance; and we have", "Been Commanded to submit [ourselves]", "To the Will of the Creator of the worlds.”"],
        },
        {
          type: "verse",
          number: 72,
          lines: ["[And we have also been", "Commanded:] “Establish prayers and", "Fear from the disobedience of Allāh;", "And to Him you all shall be gathered.”"],
        },
        {
          type: "verse",
          number: 73,
          continues: true,
          lines: ["Allāh is the One Who created the", "Heavens and the earth based on Truth", "And when He says: “Be!” to the Day [of", "Resurrection], it comes to existence.", "Allāh’s Word of Command is the Truth;", "To Allāh belongs the Dominion on", "The Day when the Trumpet is sounded.", "Allāh is the Knower of the Unseen"],
        },
      ],
    },
    {
      bookPage: 232,
      blocks: [
        { type: "verse", number: 73, continued: true, lines: ["And the Visible; and He is the Informed", "Sovereign."] },
        { type: "divider" },
        {
          type: "verse",
          number: 74,
          lines: ["And [remind them O, Messenger]", "When Ibrāhīm said to his guardian ‘Āzar:", "“Do you take idols as gods? Verily, I", "See you and your folk in an obvious", "Error.”"],
        },
        {
          type: "verse",
          number: 75,
          lines: ["And thus, We showed Ibrāhīm", "The Dominion System of the heavens", "And the earth, so that he might attain", "Certitude [through gaining the knowledge", "Of observation];"],
        },
        {
          type: "verse",
          number: 76,
          lines: ["When the night covered him over", "With the darkness, he saw a star; he", "Said: “This is my Creator&Nurturer!”", "But when it set, he said: “I do not like", "Those that set.”"],
        },
        {
          type: "verse",
          number: 77,
          lines: ["When he saw the moon rising", "Up, he said: “This is my", "Creator&Nurturer!” But when it set, he", "Said: “Unless my Creator&Nurturer", "Guides me, I would be among those", "Gone astray.”"],
        },
        {
          type: "verse",
          number: 78,
          lines: ["When he saw the sun rising up,", "He said: “This is my Creator&Nurturer!", "This is even greater [than the others]”", "And when it set, he said: “O, my folk! I", "Am disdainful from what you consider", "Partners for Allāh;{18}"],
        },
      ],
    },
    {
      bookPage: 233,
      blocks: [
        {
          type: "verse",
          number: 79,
          lines: ["“Indeed I have turned my face", "Towards the One Who Originated", "The heavens and the earth; being", "Upright in Faith, I am not of", "The polytheists.”"],
        },
        {
          type: "verse",
          number: 80,
          lines: ["And his people disputed with Ibrāhīm;", "He said: “Do you dispute with me", "Concerning Allāh, while He has guided", "Me aright? I do not fear those whom", "You set up with Allāh, nothing can", "Happen to me unless when my", "Creator&Nurturer Wills. The Knowledge", "Of my Creator&Nurturer embraces all", "Things; will you not be reminded?"],
        },
        {
          type: "verse",
          number: 81,
          lines: ["“And how should I fear of what", "You have associated with Allāh,", "Whereas you do not fear to give", "Partners to Allāh about whom Allāh", "Has not sent down any proof? Then", "Which of the two parties", "[The believers or the disbelievers] are", "More entitled to security, if you have", "Any knowledge?"],
        },
        {
          type: "verse",
          number: 82,
          lines: ["“Those who believe and have not", "Confused their Faith with polytheism,{19}", "Security [in this world and the Hereafter]", "Belongs to them; they are rightly", "Guided.”"],
        },
        {
          type: "verse",
          number: 83,
          continues: true,
          lines: ["That was Our means of reasoning", "Which We granted Ibrāhīm [to use]"],
        },
      ],
    },
    {
      bookPage: 234,
      blocks: [
        {
          type: "verse",
          number: 83,
          continued: true,
          lines: ["Against his folk. We exalt the degrees", "Of whomsoever We Will. Certainly your", "Creator&Nurturer [O, Messenger] is", "The Absolute-Knowing Judge;"],
        },
        {
          type: "verse",
          number: 84,
          lines: ["And We bestowed upon him{20}", "Isshāq and Ya‘qūb, each of them We", "Guided; and before him, We had guided", "Nūh and among his progeny, We guided", "Dāwūd, Solaimān, Ayyūb, Yūssuf, Mūssā", "And Hārūn; and thus, We reward", "The good-doers;"],
        },
        {
          type: "verse",
          number: 85,
          lines: ["And [also] Zakariyā and Yahyā and", "‘Issā and Ilyās, all of them were of", "The righteous;"],
        },
        {
          type: "verse",
          number: 86,
          lines: ["And Ismā‘īl and Yassa, and Yūnus", "And Lūt, and each one of them We", "Favoured by priority above the people of", "The world [of their own time];"],
        },
        {
          type: "verse",
          number: 87,
          lines: ["And of their ancestors and their", "Progeny and their brothers among them", "We chose some, and We guided them to", "The Straight Path;"],
        },
        {
          type: "verse",
          number: 88,
          lines: ["This is Allāh’s Guidance with", "Which He guides whomsoever He Wills", "Of His worshippers; and if they", "Join in worship others with Allāh, all", "[Good deeds] that they have done [in", "The past] would be destroyed;"],
        },
      ],
    },
    {
      bookPage: 235,
      blocks: [
        {
          type: "verse",
          number: 89,
          lines: ["Those are the ones whom We", "Gave the Book and the Divine", "Knowledge and the Prophethood,", "So if these [people] reject", "Such divinities indeed We will", "Entrust them to a people who", "Do not disbelieve;"],
        },
        {
          type: "verse",
          number: 90,
          lines: ["Those were the ones whom Allāh", "Guided; so you too [O, Messenger]", "Follow their guidance. Say: “I do not ask", "Any reward from you [for my Mission].", "This [Holy Qur’ān] is a Reminder to", "The whole world.”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 91,
          lines: ["And they could not value the High", "Stand of Allāh with an estimation due", "To Him; when they said: “Allāh has not", "Revealed anything to a human being.”", "Say [O,Messenger!]: “Who then revealed", "The Book which Mūssā brought as a", "Light and Guidance for mankind?”", "The Book that you have turned it", "Into pamphlets, revealing some", "Of it and hiding much of its contents{21}", "And you have learned from it{22} that", "Which you did not know, neither you", "Nor your ancestors.” Say [O, Messenger!]:", "“Allāh revealed the Taurāt.” Then leave", "Them to be busy with their idle thoughts", "And talks."],
        },
      ],
    },
    {
      bookPage: 236,
      blocks: [
        {
          type: "verse",
          number: 92,
          lines: ["And this [Holy Qur’ān] is a", "Blessed Book which We have sent", "Down, confirming [the Scriptures]", "Which came before it, in order that you", "[O, Messenger] may warn [the inhabitants]", "Of the Mother of the Cities{23} and those", "Around her. And those who believe in", "The Hereafter also believe in this [Holy]", "Book; and they are constant in", "Performing their regular prayers."],
        },
        {
          type: "verse",
          number: 93,
          lines: ["And who is more unjust than he", "Who forges a lie against Allāh? Like", "The man who says: “To me Revelations", "Of Allāh have been granted.” When", "Nothing has been revealed to him; or", "He who says: “I can reveal the like", "Of what Allāh has revealed.” If only you", "Could see when the wrongdoers shall be", "In the agonies of death and the Angels", "[Of death] shall spread forth their hands", "Saying: “Submit your souls! Today you", "Will taste a disgracing Chastisement for", "What you said against Allāh other than", "The truth and because you used to rebel", "Arrogantly against Allāh’s Signs and", "Miracles.”"],
        },
        {
          type: "verse",
          number: 94,
          continues: true,
          lines: ["[Allāh will declare on the Day of", "Judgement:] “Verily, you [mankind]", "Came to Us naked and alone as We", "Created you at the first time. You have", "Left behind you, all the blessings which", "We bestowed upon you [but] We do", "Not behold with you, your intercessors"],
        },
      ],
    },
    {
      bookPage: 237,
      blocks: [
        {
          type: "verse",
          number: 94,
          continued: true,
          lines: ["Whom you claimed to be partners in", "Your affairs; now all relations between", "You and them have been cut off, and all", "That you used to imagine falsely [as your", "Gods or saviours] have been vanished.”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 95,
          lines: ["Allāh is the One Who causes", "The grain and the fruit-stone to split", "And sprout; He brings forth the living", "From the dead and brings forth", "The dead from the living; such is Allāh", "[Your Powerful Creator&Nurturer]", "Then, how are you turned away from", "The Truth?"],
        },
        {
          type: "verse",
          number: 96,
          lines: ["Allāh is the Cleaver of the Dawn", "And He has assigned the night for man’s", "Rest, and the sun and the moon for", "Reckoning time; and all these represent", "The Ordaining Power of", "The Omnipotent- Omniscient;"],
        },
        {
          type: "verse",
          number: 97,
          lines: ["And Allāh is the One Who created", "The stars for you that you may find", "Your course by their guidance in", "The darkness of the land and the sea;", "Indeed We have detailed the Words", "Of Revelation for the people who", "Have knowledge;"],
        },
        {
          type: "verse",
          number: 98,
          continues: true,
          lines: ["Allāh is the One Who created you", "[Mankind] from a single being [called", "‘Ādam] and has given you a place of", "Residing [on the earth] and a place of"],
        },
      ],
    },
    {
      bookPage: 238,
      blocks: [
        {
          type: "verse",
          number: 98,
          continued: true,
          lines: ["Repository.{24} Indeed We have explained", "In details Our Words of Revelation for", "Those people who understand;"],
        },
        {
          type: "verse",
          number: 99,
          lines: ["Allāh is the One Who sent down", "Water from the sky; and with it We", "Bring forth the shoot of every plant,", "And then We bring forth the green leaf", "Of it, from which We produce", "Closed-compounded grain; and of", "The palm-tree, from the spathe of it,", "Come forth clusters of dates close to", "The hand; and [We produce] gardens of", "Vines, olives, pomegranates like to each", "Or unlike to each. Look upon their fruits", "When it yields fruit and also", "The ripening of it; Verily, in all these", "Are Signs [of Allāh’s Power of creation]", "For those who believe."],
        },
        {
          type: "verse",
          number: 100,
          lines: ["And [yet] these pagans appoint", "The Jinns, partners for Allāh the One,", "Whereas Allāh created them;{25} and they", "[Also] without knowledge, impute to", "Allāh sons and daughters; the Absolute", "Purity belongs to Allāh; and He is", "Exalted above what they attribute to", "Him;{26}"],
        },
        {
          type: "verse",
          number: 101,
          continues: true,
          lines: ["Allāh is the Originator of the heavens", "And the earth. How can He have", "Children when He has no wife? He", "Created all things and He is"],
        },
      ],
    },
    {
      bookPage: 239,
      blocks: [
        { type: "verse", number: 101, continued: true, lines: ["The Knower of all things;"] },
        {
          type: "verse",
          number: 102,
          lines: ["That is Allāh, your Creator&Nurturer:", "There is no god but Allāh, the Creator", "Of all things: So worship Allāh [alone]", "And Allāh is the Protector over all", "Things;"],
        },
        {
          type: "verse",
          number: 103,
          lines: ["The eyes do not attain Allāh, but", "Allāh attains the eyes; Allāh is", "The Accurate Knower [of the creatures", "And their affairs]."],
        },
        {
          type: "verse",
          number: 104,
          lines: ["And Say [O, Messenger!]: “Verily,", "Evident proofs have come to you from", "Your Creator&Nurturer [to give you]", "Insight about the Truth, so whosoever", "Sees [the Truth] will do good for", "Himself and whosoever keeps his eyes", "Closed on the Truth will do harm", "Against himself; and I am not a", "Watcher over you people.”"],
        },
        {
          type: "verse",
          number: 105,
          lines: ["Thus We explain variously", "The Words of Revelation, lest they,", "[The disbelievers] may say: “You", "Have studied [the Scriptures and upon", "That have produced this Qur’ān].” So", "We make it clear for the people who", "Have knowledge."],
        },
        {
          type: "verse",
          number: 106,
          lines: ["[O, Messenger!] Do follow what", "Has been revealed to you from your", "Creator&Nurturer: There is no God", "But Allāh; and turn away from", "The polytheists;"],
        },
      ],
    },
    {
      bookPage: 240,
      blocks: [
        {
          type: "verse",
          number: 107,
          lines: ["And had Allāh Willed they would", "Not consider partners for Him in", "Worship.{27} And We have not appointed", "You [O, Messenger] a watcher over", "Them nor you are set over them", "To defend them."],
        },
        {
          type: "verse",
          number: 108,
          lines: ["And do not abuse their false gods that", "They{28} invoke besides Allāh, lest they", "May abuse Allāh in revenge and out", "Of ignorance. Thus, We have made", "Fair-seeming to every folk, their", "Deeds; and eventually to their", "Creator&Nurturer is their return, so", "He will inform them of what they used", "To do [in this world]."],
        },
        {
          type: "verse",
          number: 109,
          lines: ["And they did swear their solemn", "Oaths by Allāh that if comes to them a", "Miracle, they would surely, believe", "Therein. Say [O, Messenger!]: “Miracles", "Are in the Power of Allāh only. And", "You [Muslims] do not perceive that", "Even if a special Miracle comes, they", "Will not believe.”"],
        },
        {
          type: "verse",
          number: 110,
          lines: ["And We shall turn their hearts", "And their eyes away [from the Divine", "Signs] as they refused to believe", "therein at the beginning; and We shall", "Leave them to wander blindly in their", "Insolence;"],
        },
      ],
    },
    {
      bookPage: 241,
      blocks: [
        {
          type: "verse",
          number: 111,
          lines: ["And even if We had sent down to", "Them the Angels, and caused", "The dead speak to them, and if We had", "Gathered together before their eyes, all", "Things that they demanded they would", "Not believe, unless Allāh Wills [by", "Force] because most of them are", "Ignorant;"],
        },
        {
          type: "verse",
          number: 112,
          lines: ["So We assigned to every Messenger", "An enemy from evil ones among men", "And Jinns who inspire some of them", "To the others tempting discourses", "To deceive them; and had your", "Creator&Nurturer Willed, they would", "Not have done it, so [O, Messenger]", "Leave them and what they invent;"],
        },
        {
          type: "verse",
          number: 113,
          lines: ["And [it has been Ordained] that", "The hearts of those who do not", "Believe in the Hereafter may incline to", "The tempting and deceiving discourses", "[Of the devils], and that they may feel", "Pleased with it, and that they may go", "On doing things that they are doing."],
        },
        {
          type: "verse",
          number: 114,
          lines: ["Say [O, Messenger!]: “Shall I seek a", "Judge other than Allāh while Allāh is", "The One Who has sent down to you", "This [Holy] Book, explained in details?”", "Those to whom We gave the Scriptures,", "[The Taurāt and the Injīl] know that", "It{29} is revealed from your", "Creator&Nurturer in Truth; so", "Do not be one of the doubters."],
        },
      ],
    },
    {
      bookPage: 242,
      blocks: [
        {
          type: "verse",
          number: 115,
          lines: ["And the Word of your", "Creator&Nurturer has been", "Accomplished truly and justly. Nothing", "Can change Allāh’s Words{30} and He is", "The Knowing Hearer;"],
        },
        {
          type: "verse",
          number: 116,
          lines: ["And if you obey the majority of", "The people on earth, they will lead you", "Astray from Allāh’s Way; they do not", "Follow anything but conjecture; and", "They are not but liars;"],
        },
        {
          type: "verse",
          number: 117,
          lines: ["Verily, your Creator&Nurturer is", "The Knower of those who stray away", "From His Way, and also the Knower of", "Those who follow His Guidance."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 118,
          lines: ["So eat of that [meat] on which", "Allāh’s Name has been pronounced", "[While slaughtering the animal] if you", "Indeed believe in Allāh’s Revelations;"],
        },
        {
          type: "verse",
          number: 119,
          continues: true,
          lines: ["And why do you not eat of that [meat]", "On which Allāh’s Name has been", "Pronounced [at the time of slaughtering", "The animal?] Allāh has explained", "To you in detail those things forbidden", "To you except under the condition of", "Necessity{31} and surely, many [of", "The disbelievers] would lead people"],
        },
      ],
    },
    {
      bookPage: 243,
      blocks: [
        {
          type: "verse",
          number: 119,
          continued: true,
          lines: ["Astray by their vain desires and out of", "Ignorance; verily, your", "Creator&Nurturer fully knows those", "Who transgress [the Divine Limits]."],
        },
        {
          type: "verse",
          number: 120,
          lines: ["[O, people!] Keep away from [all", "Kinds of] sins, open or secret: Verily,", "Those who commit sin, they will soon", "Receive the due recompense for what", "They have done;"],
        },
        {
          type: "verse",
          number: 121,
          lines: ["And do not eat of that meat over", "Which Allāh’s Name has not been", "Pronounced [while slaughtering", "The animal]; it is impiety. The devils", "Provoke their friends to dispute with", "You [over the lawful and", "The forbidden]; if you [Muslims] obey", "Them, you are indeed regarded as one", "Of the polytheists."],
        },
        {
          type: "verse",
          number: 122,
          lines: ["Is he who was dead [because of", "Disbelief] and We gave him life by", "Setting for him a light of Faith", "Whereby he can walk among men,", "Equal to him who is in the darkness", "[Of disbelief] from which he can never", "Come out? Thus it is made", "Fair-seeming to the disbelievers that", "Which they do."],
        },
        {
          type: "verse",
          number: 123,
          lines: ["And thus, We appointed in every", "City the chief ones, of its wicked", "Ones, that they should plot therein and", "Deceive others; but they only plot", "Against themselves, though they", "Perceive it not;"],
        },
      ],
    },
    {
      bookPage: 244,
      blocks: [
        {
          type: "verse",
          number: 124,
          lines: ["And when comes to them a Miracle", "[From Allāh] they, [the disbelievers]", "Say: “We shall not believe until we too", "Receive the likes of what", "The Messengers of Allāh have", "Received.” Allāh knows best", "On whom to place His Mission.", "Humiliation and disgrace and a Severe", "Torment from Allāh will soon overtake", "Them for what they have cunningly", "Plotted."],
        },
        {
          type: "verse",
          number: 125,
          lines: ["And whomsoever Allāh Wills to guide,", "Expands his breast for Islām, and", "Whomsoever He Wills to be left in his", "Error, He makes his breast closed", "And narrow as if he is climbing up to", "The very sky.{32} Thus Allāh puts an", "Ignominous Chastisement on those", "Who refuse to believe;"],
        },
        {
          type: "verse",
          number: 126,
          lines: ["And [O, Messenger!] this is the Straight", "Path of your Creator&Nurturer; indeed", "We have made clear the Words of", "Revelation for those who accept", "Admonition;"],
        },
        {
          type: "verse",
          number: 127,
          lines: ["For them [who accept admonition] will", "Be the Home of Peace{33} with their", "Creator&Nurturer; and Allāh will", "Be their Guardian due to their", "Righteous deeds."],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 245,
      blocks: [
        {
          type: "verse",
          number: 128,
          lines: ["And on the Day when Allāh will", "Gather them all together, will state:", "“O, you assembly of Jinns! Many of you", "Did mislead a great number of men.”", "And some men among their{34} followers", "Will say: “O, our Creator! We", "Benefited one from the other, but now", "We have reached our Appointed Term", "Which You Ordained for us.”{35} Allāh", "Will state: “The Fire is your abode,", "To dwell therein forever, except Allāh", "Wills otherwise.”{36} Surely, your", "Creator&Nurturer is the Absolute", "Knowing Decreer;"],
        },
        {
          type: "verse",
          number: 129,
          lines: ["Thus, We let some of the evildoers be", "Under the power of others [of their", "Own kind] for what they used to do."],
        },
        {
          type: "verse",
          number: 130,
          lines: ["[Allāh will declare on the Day of", "Resurrection:] “O, you assembly of", "Jinns and mankind! Did not come to", "You Messengers from among you", "Reciting to you My Words of", "Revelation and warning you of", "The meeting of this Day of yours?”", "They will say: “We bear witness against", "Ourselves.” And it was this world’s life", "Which deceived them. And they will", "Bear witness against themselves", "[By confessing] that they were", "Disbelievers;"],
        },
      ],
    },
    {
      bookPage: 246,
      blocks: [
        {
          type: "verse",
          number: 131,
          lines: ["[O, Messenger] this,{37} proves that your", "Creator&Nurturer before sending", "The Guiding Messengers, would not", "Destroy the towns unjustly while their", "Inhabitants are unaware;"],
        },
        {
          type: "verse",
          number: 132,
          lines: ["For all people there will be ranks", "According to what they have done", "[Good or evil]; and your", "Creator&Nurturer [O, Messenger] is", "Not unaware of what they do."],
        },
        {
          type: "verse",
          number: 133,
          lines: ["And your Creator&Nurturer", "[O, Messenger] is the Independent", "Grace-Bestower; if Allāh Wills, can", "Remove you and bring in your place,", "Another generation that He Wills, as", "He raised you from some other", "Generation [of the past];"],
        },
        {
          type: "verse",
          number: 134,
          lines: ["All that you [pagans] have been", "Promised will certainly come to pass;", "You cannot frustrate what is", "Predetermined by Allāh."],
        },
        {
          type: "verse",
          number: 135,
          lines: ["Say [O, Messenger!]: “O, my people!", "Do your utmost [to oppose me]; verily,", "I too act according to my Mission; and", "Certainly you will soon know who shall", "Possess the Blessed Abode: Verily,", "The disbelievers shall not gain salvation.”"],
        },
      ],
    },
    {
      bookPage: 247,
      blocks: [
        {
          type: "verse",
          number: 136,
          lines: ["And they{38} allot to Allāh a share", "Of the tilth and the cattle which Allāh", "Himself has created, and they say", "According to their own fancies: “This is", "For Allāh and this is for our partners!”", "But the share of their partners does", "Not reach Allāh, while the share of", "Allāh reaches their partners! Evil is", "The way they pass judgement!"],
        },
        {
          type: "verse",
          number: 137,
          lines: ["And thus, to many of the pagans,", "Their partners{39} have made", "Fair-seeming the killing of their", "Children [to offer sacrifices for", "Their idols] in order to lead them to", "Destruction of themselves and bring", "Confusion in their religion. And if", "Allāh Had Willed they would not have", "Done so; therefore [O, Messenger]", "Leave alone [this ignorant and", "Superstitious people] and what they", "Fabricate;"],
        },
        {
          type: "verse",
          number: 138,
          continues: true,
          lines: ["And they, [the heads of the idol-temples]", "Say: “These animals{40} and the tilths are", "A taboo, [and are only for the idols.]", "None shall eat of them save as we", "Please.” And they say: “The cattle that", "Riding on their backs and the cattle", "That they do not mention Allāh’s"],
        },
      ],
    },
    {
      bookPage: 248,
      blocks: [
        {
          type: "verse",
          number: 138,
          continued: true,
          lines: ["Name on them [while slaughtering]", "Forbidden.”{41} All these are forging lies", "Against Allāh and Allāh will soon", "Punish them for what they have forged;"],
        },
        {
          type: "verse",
          number: 139,
          lines: ["And they{42} say: “What is in the bellies of", "Such cattle is alloted for our men and", "Is forbidden for our women, if it is", "Born alive; but if it is born dead, then", "All may have share thereof.” And Allāh", "Will recompense them for their false", "And superstitious attributions. Verily,", "Allāh is the Knowing Decreer;"],
        },
        {
          type: "verse",
          number: 140,
          lines: ["Indeed they are the losers, those", "Who slayed their children out of folly", "And without knowledge; and have", "Forbidden what Allāh has provided as", "Sustenance for them. [All these are]", "Forging falsehood against Allāh;", "Indeed they have gone astray and they", "Were not guided aright from the start."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 141,
          continues: true,
          lines: ["Allāh is the One Who produced", "Gardens (of vine) trellised, and", "Untrellised; also palm-trees, and crops", "Of which the fruits are varying; and", "Olives, and pomegranates, like to each", "Or unlike to each. Eat of the fruits [of", "The gardens] when they are ripe and"],
        },
      ],
    },
    {
      bookPage: 249,
      blocks: [
        {
          type: "verse",
          number: 141,
          continued: true,
          lines: ["Pay the due to the needy thereof, on", "The day of its reaping; and do not be", "Extravagant; verily, Allāh does not like", "The extravagants."],
        },
        {
          type: "verse",
          number: 142,
          lines: ["And of the cattle [some are] for", "Bearing burden and some are for their", "Meat. [O, people] eat of what Allāh has", "Provided for you; and do not follow", "The footsteps of Satan; surely, he is", "Your declared enemy."],
        },
        {
          type: "verse",
          number: 143,
          lines: ["[Allāh created] eight heads of cattle:", "Two of sheep [male and female] and", "Two of goats [male and female]. Ask", "Them{43} [O, Messenger!]: “Is it the two", "Males that Allāh has forbidden or", "The two females or what the wombs of", "The two females contain? Tell me with", "Knowledge if you are truthful.”"],
        },
        {
          type: "verse",
          number: 144,
          lines: ["And [Allāh created] of the camels", "Two [male and female] and of the oxen", "Two [male and female]. Ask them", "[O, Messenger!]: “Has Allāh forbidden", "The two males or the two females or", "What the wombs of the two females", "Contain? Or were you witnesses when", "Allāh passed such a Decree? Who then", "Is more unjust than the one who forges", "A lie against Allāh to lead men", "Astray without knowledge? Certainly,", "Allāh does not guide the disbelievers.”{44}"],
        },
      ],
    },
    {
      bookPage: 250,
      blocks: [
        {
          type: "verse",
          number: 145,
          lines: ["Say [O, Messenger!]: “I do not", "Find in what has been revealed to me", "Anything forbidden to an eater to eat", "Save it be the meat of a dead animal", "Or blood poured forth, or flesh of", "Swine: For it is surely impure. [Also", "The meat] of the animal on which a", "Name other than Allāh’s has been", "Invoked, but [even so] if one is forced", "By necessity{45} to eat of them, not", "Lusting nor [having intention of]", "Transgressing the limit, then verily,", "Your Creator&Nurturer is the Merciful", "Forgiving;"],
        },
        {
          type: "verse",
          number: 146,
          lines: ["And for those who followed", "The Jewish law, We forbade any animal", "Having claws, and of the oxen and", "The sheep, We forbade to them", "The fat of both, save what is adhered", "To their backs or their entrails", "Or is mixed with their bones. Thus We", "Recompensed them for their rebellion", "[Such as slaying the Messengers,", "Eating usury etc ...]. And surely,", "We [the Almighty God] are the Truthful."],
        },
        {
          type: "verse",
          number: 147,
          lines: ["If they, [the Jews] belie you,", "Say [O, Messenger!]: “Your", "Creator&Nurturer is the Owner of", "Embracing Mercy, yet His Wrath will", "Never be prevented from the guilty", "Ones.”"],
        },
      ],
    },
    {
      bookPage: 251,
      blocks: [
        {
          type: "verse",
          number: 148,
          lines: ["The idolaters will say: “Had Allāh", "Willed, we would not have been", "Idolaters, neither would our fathers,", "Nor we would have forbidden", "Anything.” The people before them", "[Also] cried lies until they tasted Our", "Torment. Say [O, Messenger!]: “Do", "You have any certain knowledge", "To bring forth for us? You follow only", "Conjecture and you utter nothing but", "Lies.”"],
        },
        {
          type: "verse",
          number: 149,
          lines: ["Say [O, Messenger!]: “With Allāh", "[Alone] is the Conclusive Argument;", "Had He so Willed He would have", "Guided you all.”"],
        },
        {
          type: "verse",
          number: 150,
          lines: ["Say [O, Messenger!]: “Bring your", "Witnesses who bear witness that Allāh", "Has forbidden certain things.” If they", "Bear witness [which is not true] you", "[O, Messenger] do not bear witness", "With them and do not conform to", "The vain desires of those who belied", "Our Words of Revelation, and who", "Do not believe in the Hereafter and", "Who hold others as equal with", "Their Creator;"],
        },
        {
          type: "verse",
          number: 151,
          continues: true,
          lines: ["Say [O, Messenger!]: “Come, I will", "Recite to you that which your", "Creator&Nurturer has made", "Forbidden to you: That you do", "Not join anything as partner to Allāh", "And that do not do but good to your", "Parents; and that do not slay your"],
        },
      ],
    },
    {
      bookPage: 252,
      blocks: [
        {
          type: "verse",
          number: 151,
          continued: true,
          lines: ["Children for fear of poverty, since We", "Provide sustenance for you and for", "Them; and that you do not draw near", "To sinful acts whether open or", "Secret; and that you do not slay", "The life that Allāh has decided sacred", "Save in the course of justice [i.e., by", "The right of retaliation]. These are", "The things that Allāh has Commanded", "You in order that you may use your", "Reason.”"],
        },
        {
          type: "verse",
          number: 152,
          lines: ["And [also Allāh Commands you", "Stating]: “Do not approach", "The property of an orphan unless it is", "In the best manner till he attains his", "Maturity; and give full measure and", "Full weight with justice; We do not", "Task any soul beyond his ability; and", "When you speak [or judge] be just,", "Though it may be against your", "Relatives’ benefit; and fulfill Allāh’s", "Covenant. Thus does Allāh enjoin you", "By those Decrees [about your duties]", "So that you may be mindful;"],
        },
        {
          type: "verse",
          number: 153,
          lines: ["“And verily, these Decrees guide", "You to My Straight Path, so follow", "The Way and do not follow other", "Paths, for those will separate you from", "Allāh’s Path. Thus, Allāh does enjoin", "You, so that you may become pious.”"],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 253,
      blocks: [
        {
          type: "verse",
          number: 154,
          lines: ["We gave Mūssā the Book to complete", "Our Favour on those who do good; [it", "Was] an explanation of all things", "As well as a Guidance and a Grace so", "That they{46} may believe in the Meeting", "Of their Creator&Nurturer [on the Day", "Of Resurrection]."],
        },
        {
          type: "verse",
          number: 155,
          lines: ["And this is a Blessed Book{47} which", "We have sent down; so [O, people]", "Follow it and be pious so that you may", "Receive Mercy [from your Creator];"],
        },
        {
          type: "verse",
          number: 156,
          lines: ["[The Holy Book was sent down]", "Lest you, [pagans] should say:", "“The Divine Book was only sent down", "To two groups before us [the Jews and", "The Christians] and for our part, we", "Were in fact unaware of [the religious", "Decrees] they studied;”"],
        },
        {
          type: "verse",
          number: 157,
          continues: true,
          lines: ["Or lest you [pagans] should say:", "“If only the Book had been sent down", "To us, we would surely, have been", "Better guided than them, [the Jews", "And the Christians].” So now has come", "To you from your Creator&Nurturer", "A Clear Proof which is also a Guide", "And a Grace.{48} Who then is more", "Unjust than he who belies Allāh’s", "Words of Revelation and turns away", "Therefrom? We shall soon punish", "Those who turn away from Our"],
        },
      ],
    },
    {
      bookPage: 254,
      blocks: [
        {
          type: "verse",
          number: 157,
          continued: true,
          lines: ["Revelations, with a Severe Torment", "Due to their turning away [from", "The Truth];"],
        },
        {
          type: "verse",
          number: 158,
          lines: ["Do they then wait [in vain] for anything", "Other than that the Angels should", "Come to them, or your", "Creator&Nurturer should come to", "Them [Himself] or some of the Miracles", "Of your Creator&Nurturer should", "Come to them? The Day that some of", "The Signs of your Creator&Nurturer", "[That they demand] should come to", "Them, no good will it do to a person", "To believe then, if he did not believe", "Before, nor he did deeds of", "Righteousness through his Faith. Say", "[O, Messenger!]: “Wait [for your vain", "Expectations]; verily, we too will be", "Waiting [for your punishment].”"],
        },
        {
          type: "verse",
          number: 159,
          lines: ["Verily, those who divided the religion", "And have become sects, [O, Messenger]", "You should have no concern in them", "In the least; their affair is only with", "Allāh Who then [on the Resurrection", "Day] will inform them about what they", "Used to do;"],
        },
        {
          type: "verse",
          number: 160,
          lines: ["[On the Resurrection Day] Whoso", "Comes with a good deed, he shall", "Have ten the like of it as his rewards;", "And whoso brings an evil deed, shall", "Only be recompensed the like of it;", "And they shall not be treated unjustly."],
        },
      ],
    },
    {
      bookPage: 255,
      blocks: [
        {
          type: "verse",
          number: 161,
          lines: ["Say [O, Messenger!]: “Verily, my", "Creator&Nurturer has guided me to", "The Straight Path, the Established", "Permanent Religion, the Faith of", "Ibrāhīm, the Upright who never", "Considered partner for Allāh."],
        },
        {
          type: "verse",
          number: 162,
          lines: ["Say [O, Messenger!]: “My prayer,", "My rituals, my life, and my death, all are", "For Allāh, the Creator of the worlds;"],
        },
        {
          type: "verse",
          number: 163,
          lines: ["“Allāh has no partner and on this", "[Islāmic Monotheism] I have been", "Commanded [to be the Messenger]", "And I am the first of the Muslims.”"],
        },
        {
          type: "verse",
          number: 164,
          lines: ["Say [O, Messenger!]: “Shall I", "Seek a god other than Allāh while", "Allāh is the Creator&Nurturer of all", "Creatures? And no soul does evil deed", "But against himself; and no one shall", "Bear the burden of another person’s", "Sin; then to your Creator&Nurturer", "Is your return, so Allāh will inform you", "Of what you used to differ about.”"],
        },
        {
          type: "verse",
          number: 165,
          lines: ["And Allāh is the One Who has", "Made you generations coming after", "Generations, replacing each other on", "The earth. And Allāh has raised you in", "Ranks, some above the others, in order", "That He may try you in what He has", "Bestowed upon you. Verily, your", "Creator&Nurturer is the Swift-", "Retributing, and yet verily, He is", "The Merciful Forgiving."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "‘Ādam, father of mankind" },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "To the Messenger" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "Allāh, the Omnipotent is the One Who Decides about harm or goodness for mankind; the false deities can do nothing, though some helpless ignorants turn to them for help." },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "Because of what they have read in the Taurāt and the Injīl regarding the Messenger’s characteristics." },
      ],
    },
    {
      id: 5,
      blocks: [
        { kind: "p", text: "In connection with Allāh’s Aid for the believers and punishment for the disbelievers." },
      ],
    },
    {
      id: 6,
      blocks: [
        { kind: "p", text: "After sending the Messengers and Books of Guidance, man can choose for himself good or evil, Paradise or Hell; and this is a trial from Allāh bestowed on man." },
      ],
    },
    {
      id: 7,
      blocks: [
        { kind: "p", text: "The Holy Qur’ān" },
      ],
    },
    {
      id: 8,
      blocks: [
        { kind: "p", text: "Since man’s nature has been created on the basis of Allāh’s Monotheism (30:30) even the polytheist when inflicted finds nobody to call upon but Allāh. This unconcious invocation takes place through the channel of man’s soul." },
      ],
    },
    {
      id: 9,
      blocks: [
        { kind: "p", text: "Some of the arrogant Quraish affluents reproached the Holy Messenger for having around him modest Companions who lacked wealth and luxury." },
      ],
    },
    {
      id: 10,
      blocks: [
        { kind: "p", text: "Peace be upon you or health be upon you." },
      ],
    },
    {
      id: 11,
      blocks: [
        { kind: "p", text: "The pagans of Quraish, mockingly and stubbornly insisted on receiving the due punishment against their disbelief and wrongdoings as they had been warned. So Allāh Commands the Messenger to tell them: “If it was my deceision I would out of fury destroy you all atonce, but the Command belongs to Allāh only.”" },
      ],
    },
    {
      id: 12,
      blocks: [
        { kind: "p", text: "In the sea or on the land." },
      ],
    },
    {
      id: 13,
      blocks: [
        { kind: "p", text: "The Preserving Tablet; the Book of Allāh’s Recorded Knowledge" },
      ],
    },
    {
      id: 14,
      blocks: [
        { kind: "p", text: "Such as storm, raining stones and thunderbolt" },
      ],
    },
    {
      id: 15,
      blocks: [
        { kind: "p", text: "Such as flood, earthquake, famine and war" },
      ],
    },
    {
      id: 16,
      blocks: [
        { kind: "p", text: "Return to idolatery." },
      ],
    },
    {
      id: 17,
      blocks: [
        { kind: "p", text: "Arabs of the Time of Ignorance believed that giants and devils which ambush to stray the travellers on the roads (Tafssīr-e-Nemūneh)" },
      ],
    },
    {
      id: 18,
      blocks: [
        { kind: "p", text: "Ibrāhīm’s people were mostly star- worshippers, so he started his warning by rejecting their positions as gods." },
      ],
    },
    {
      id: 19,
      blocks: [
        { kind: "p", text: "Zulm here signifies polytheism (31:13)" },
      ],
    },
    {
      id: 20,
      blocks: [
        { kind: "p", text: "Ibrāhīm" },
      ],
    },
    {
      id: 21,
      blocks: [
        { kind: "p", text: "Regarding the Appearance of the Messenger of Islām" },
      ],
    },
    {
      id: 22,
      blocks: [
        { kind: "p", text: "The Taurāt" },
      ],
    },
    {
      id: 23,
      blocks: [
        { kind: "p", text: "Makkah City" },
      ],
    },
    {
      id: 24,
      blocks: [
        { kind: "p", text: "Man’s grave" },
      ],
    },
    {
      id: 25,
      blocks: [
        { kind: "p", text: "The Jinns" },
      ],
    },
    {
      id: 26,
      blocks: [
        { kind: "p", text: "Such as having partners or children" },
      ],
    },
    {
      id: 27,
      blocks: [
        { kind: "p", text: "Allāh could have caused men’s hearts to submit to Faith by force, but Allāh’s plan is that man should choose between Good and Evil, after he has been guided by the Messengers and the Divine Books." },
      ],
    },
    {
      id: 28,
      blocks: [
        { kind: "p", text: "The polytheists" },
      ],
    },
    {
      id: 29,
      blocks: [
        { kind: "p", text: "The Holy Qur’ān" },
      ],
    },
    {
      id: 30,
      blocks: [
        { kind: "p", text: "Allāh’s Word means: Allāh’s Word of Command, Allāh’s Ordainment, Allāh’s Decree, Allāh’s Promise and Allāh’s Word of Revelation; and in this ‘Ayat since reference is made to the Words of the Holy Qur’ān, it means Words of Revelation." },
      ],
    },
    {
      id: 31,
      blocks: [
        { kind: "p", text: "Such as severe hunger when other food is not available and one’s life is in danger [16:115]" },
      ],
    },
    {
      id: 32,
      blocks: [
        { kind: "p", text: "An impossible act" },
      ],
    },
    {
      id: 33,
      blocks: [
        { kind: "p", text: "The Paradise" },
      ],
    },
    {
      id: 34,
      blocks: [
        { kind: "p", text: "Followers of the Jinns" },
      ],
    },
    {
      id: 35,
      blocks: [
        { kind: "p", text: "The ‘Appointed Term’ is highly essential in Allāh’s Ordainments" },
      ],
    },
    {
      id: 36,
      blocks: [
        { kind: "p", text: "About those whose sins are less and do not make them doomed to suffer in the Hell forever, Allāh the Merciful may pass another Decree." },
      ],
    },
    {
      id: 37,
      blocks: [
        { kind: "p", text: "Confession of the disbelievers" },
      ],
    },
    {
      id: 38,
      blocks: [
        { kind: "p", text: "The idolaters" },
      ],
    },
    {
      id: 39,
      blocks: [
        { kind: "p", text: "The heads of the idol-temples" },
      ],
    },
    {
      id: 40,
      blocks: [
        { kind: "p", text: "Bahīrah, Hām, Sāebah, and Wassīlah those camels which were regarded as taboos." },
      ],
    },
    {
      id: 41,
      blocks: [
        { kind: "p", text: "They mention idols names instead of Allāh’s name" },
      ],
    },
    {
      id: 42,
      blocks: [
        { kind: "p", text: "The pagans" },
      ],
    },
    {
      id: 43,
      blocks: [
        { kind: "p", text: "The idolaters" },
      ],
    },
    {
      id: 44,
      blocks: [
        { kind: "p", text: "Zālemīn in connection with the context means the disbelievers." },
      ],
    },
    {
      id: 45,
      blocks: [
        { kind: "p", text: "See note on 6:119" },
      ],
    },
    {
      id: 46,
      blocks: [
        { kind: "p", text: "The Children of Isrāīl" },
      ],
    },
    {
      id: 47,
      blocks: [
        { kind: "p", text: "The Holy Qur’ān" },
      ],
    },
    {
      id: 48,
      blocks: [
        { kind: "p", text: "The Holy Qur’ān" },
      ],
    },
  ],
};

export default surah;
