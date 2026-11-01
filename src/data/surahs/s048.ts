import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 48 · Al-Fath — book pages 954–961 (verses 1–29, complete). Begins at the top of page 954 and ends partway down page 961.
 * Markup: {n} footnote marker · [ ] translator’s insertion.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 48,
  pages: [
    {
      bookPage: 954,
      heading: {
        title: "Al-Fath",
        lines: ["(The Victory)", "Revealed at Madīnah", "29 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["[O, Messenger] Verily, We Ordained for", "You a manifest Victory:"] },
        { type: "verse", number: 2, lines: ["Following{1} that [blissful Ordained Victory]", "Allāh will forgive your faults of the past", "And those faults which may happen in", "The future; and He will complete His", "Favour upon you and will keep you", "Firmly on the Straight Way;"] },
        { type: "verse", number: 3, lines: ["And Allāh will aid you by a mighty Aid."] },
        { type: "verse", number: 4, lines: ["Allāh is the One Who sent down", "The Divine Tranquility into the hearts of", "The believers so that to add Faith", "To their Faith; and to Allāh belong", "The hosts of the heavens and the earth", "And Allāh is the Knowing Sovereign;"] },
      ],
    },
    {
      bookPage: 955,
      blocks: [
        { type: "verse", number: 5, lines: ["This Victory will cause the believers who", "Assisted the Messenger, to enter", "The Everlasting Gardens in which flow", "Streams; and also Allāh will blot out", "Their evil deeds of the past and this in", "Allāh’s Sight is a Great Achievement [for", "The believers]."] },
        { type: "verse", number: 6, lines: ["And the hypocrites men and women, and", "The polytheists men and women who", "Thought evil{2} of Allāh will be punished:", "They will be encompassed in evil and", "Also Allāh’s Wrath will fall upon them.", "Allāh has cursed them and has prepared", "For them the Hell which indeed is", "The worst place and destination."] },
        { type: "verse", number: 7, lines: ["To Allāh belong the hosts of", "The heavens and the earth; and Allāh is", "The Invincible Mighty Sovereign."] },
        { type: "verse", number: 8, lines: ["[O, Messenger!] Verily, We have sent", "You as a Witness over the people and", "Also as a Bringer of glad-tidings and", "As a Warner;"] },
        { type: "verse", number: 9, lines: ["So you [people of Islām] should believe", "In Allāh and obey His Messenger, assist", "And honour him; and Celebrate Allāh’s", "Attributes morning and evening."] },
        { type: "verse", number: 10, continues: true, lines: ["Verily, those who swear allegiance with"] },
      ],
    },
    {
      bookPage: 956,
      blocks: [
        { type: "verse", number: 10, continued: true, lines: ["You [O, Messenger] in fact they swear", "Allegiance with Allāh: Allāh’s Hand is", "Over their hands, so one who breaks his", "Oath he does harm to his own soul; and", "Any one who fulfills his oath with Allāh,", "Allāh will bestow on him a great reward."] },
        { type: "divider" },
        { type: "verse", number: 11, lines: ["The desert dweller Arabs who lagged", "Behind will soon say to you: “We were", "Involved in looking after our properties", "And our families, so please ask Allāh’s", "Forgiveness for us.” They say what they", "Do not mean in their hearts. Say", "[O, Messenger!]: “Who has any power", "To intercede on your behalf with Allāh, if", "His Will be to cause some loss on you", "Or to give you some benefit? But Allāh is", "The Absolute Aware about what you", "People do;"] },
        { type: "verse", number: 12, lines: ["“And you thought the Messenger and", "The believers will never return to their", "Families [you thought they will be", "Killed] and you enjoyed it in your hearts;", "And you conceived an evil thought [that", "Allāh will not support His Messenger", "And the believers] and thus you became", "A people doomed to perdition.”{3}"] },
        { type: "verse", number: 13, continues: true, lines: ["And the one who does not believe in", "Allāh’s Unity and in the Mission of His", "Messenger [should know that] We have"] },
      ],
    },
    {
      bookPage: 957,
      blocks: [
        { type: "verse", number: 13, continued: true, lines: ["Prepared for the disbelievers a Blazing", "Fire."] },
        { type: "verse", number: 14, lines: ["To Allāh belongs the Dominion of", "The heavens and the earth, so He", "Forgives whom He Wills [according to", "Their merits] and He punishes whom He", "Decides is doomed to punishment", "And Allāh is the Merciful Forgiving."] },
        { type: "divider" },
        { type: "verse", number: 15, lines: ["When you set forth towards the war [of", "Khaibar] in which they have cherished", "Hopes for booties, then those who hung", "Back before, will say: “Let us follow", "You”. They wish to change Allāh’s Word", "Of Ordainment.{4} Say [O, Messenger!]:", "“You will have no chance to follow us as", "Allāh has Commanded so.” They will", "Say: “You are jealous of us. ”The truth", "Is that they do not understand [such", "Matters as Allāh’s Ordainment.]"] },
        { type: "verse", number: 16, continues: true, lines: ["Say [O, Messenger!] to the desert", "Dweller Arabs who lagged back: “You", "Will soon be ordered to fight against a", "People who are known as Fighters; and", "Fight them until they submit themselves", "To Islām; then if you obey the duty", "Exposed to you, Allāh will bestow upon", "You a goodly reward but if you turn", "Back as you did before, He will punish"] },
      ],
    },
    {
      bookPage: 958,
      blocks: [
        { type: "verse", number: 16, continued: true, lines: ["You with a painful Torment.”"] },
        { type: "verse", number: 17, lines: ["There is no sin on the blind, nor on", "The lame, nor on the sick if they do not", "Take part in the war. And he who obeys", "Allāh and His Messenger, Allāh will", "Permit him to enter the Gardens in", "Which streams flow; and he who turns", "Back, Allāh will punish him with a", "Painful Torment."] },
        { type: "divider" },
        { type: "verse", number: 18, lines: ["Allāh’s Pleasure was on those believers", "Who swore allegiance with you under", "The tree [in the plain of Hudaibīyah];", "And He knew what was in their hearts", "And He sent down on them the Divine", "Tranquility; and He granted them", "The Near Victory [of Khaibar];"] },
        { type: "verse", number: 19, lines: ["And also many booties they", "Will gain. Verily, Allāh is", "The Source-Wisdom Supremepower;"] },
        { type: "verse", number: 20, lines: ["And Allāh [based on His Ordainment]", "Has promised you gains that you will", "Acquire, but He has hastened on", "Giving you this one; and Allāh", "Restrained the hands of your enemies", "From you, that it may be a Sign of", "Allāh’s Favour to the believers so that He", "May guide you on the Straight Path;"] },
        { type: "verse", number: 21, continues: true, lines: ["And there are other booties and", "Valuable things that are not accessible", "For you, but under Allāh’s Power you"] },
      ],
    },
    {
      bookPage: 959,
      blocks: [
        { type: "verse", number: 21, continued: true, lines: ["Can obtain them; and verily, Allāh has", "Power over all things;"] },
        { type: "verse", number: 22, lines: ["And if the disbelievers fight against you,", "They would certainly turn their backs to", "The battle-field; and they would not", "Find any protector and helper against", "You;"] },
        { type: "verse", number: 23, lines: ["That has always been the Divine Way", "Of Allāh with the disbelievers of", "The past and it will be so forever; you", "Will never find any change in Allāh’s", "Divine Way."] },
        { type: "verse", number: 24, lines: ["And Allāh was the One Who restrained", "Their hands from you and your hands", "From them in the Valley of Makkah", "After He caused you to overcome them", "[Without any blood-shed]; and Allāh is", "The Seer of what you people do;"] },
        { type: "verse", number: 25, continues: true, lines: ["They are the same disbelievers who", "Hindered you from the Sacred Mosque", "And did not let the sacrificials reach", "The place of sacrifice. Had it not been", "For the believing men and women whom", "You did not know and you might have", "Killed them and it would bring", "The burden of committing a sin on you", "Unknowingly, [Allāh would not have", "Prevented the war to happen,]", "Furthermore He held you back from", "Entering the war that He may bestow", "His Mercy on the believers who were", "Mixed with the disbelievers; if"] },
      ],
    },
    {
      bookPage: 960,
      blocks: [
        { type: "verse", number: 25, continued: true, lines: ["They were separate We would certainly", "Have chastised the disbelievers with a", "Severe war against them;"] },
        { type: "verse", number: 26, lines: ["When the disbelievers were filled", "With prejudice, that of the Time of", "Ignorance, Allāh sent down the Divine", "Tranquility upon His Messenger and", "Upon the believers; and made them to", "Be attributed and obligated by the word", "“Piety” which was indeed fit for them", "And they were most entitled to it; and", "Allāh is the Absolute Knower about", "Everything."] },
        { type: "verse", number: 27, lines: ["Verily, Allāh has fulfilled the dream of", "His Messenger: You all shall enter", "The Sacred Mosque, by Allāh’s Will,", "Feeling secured inside and with shaved", "Heads and nails cut short. Allāh knew", "What you did not know and He also", "Granted you by Ordainment a Near", "Victory."] },
        { type: "verse", number: 28, lines: ["Allāh is the One Who has sent His", "Messenger with Guidance and", "The Religion of Truth to outshine all", "Religions, and Allāh is Sufficient as a", "Witness [over this Truth]."] },
        { type: "verse", number: 29, continues: true, lines: ["Mohammad is the Messenger of Allāh", "And his followers are stern and hard", "Against the disbelievers but kind and", "Compassionate to each other. You see", "Them bowing down and prostrating in", "Prayers seeking Allāh’s Favour and"] },
      ],
    },
    {
      bookPage: 961,
      blocks: [
        { type: "verse", number: 29, continued: true, lines: ["Pleasure. According to Taurāt their", "Mark is the trace of their prostration on", "Their foreheads; and their similitude in", "The Injīl is like a seed which sends forth", "Its shoot, then it grows and becomes", "Thick and stands firmly on its stem;", "The farmer is delighted{5} and by that", "The anger of the disbelievers will be", "Raised. Allāh Has promised those", "Among Muslims who believe and do", "Righteous deeds, Forgiveness and a", "Splendid Reward."] },
      ],
    },
  ],
  footnotes: [
    { id: 1, blocks: [{ kind: "p", text: "Lām in لِيَغْفِرَ means: Following; then; after, thus it is not causeative as has been read by some translators." }] },
    { id: 2, blocks: [{ kind: "p", text: "They had expressed their doubts about the bestowal of Allāh’s Aid on the Holy Messenger and the believers." }] },
    { id: 3, blocks: [{ kind: "p", text: "See note on 48:6" }] },
    { id: 4, blocks: [{ kind: "p", text: "Allāh, the Almighty Commanded the Holy Messenger to give glad-tidings of the Ordained Khaibar Victory to those Muslims who had taken part in Hudaibīyah Expedition; and Commanded that the same people should only take part in the Khaibar Expedition to share happiness of the Victory and to gain the booties; thus those who lagged behind before, were doomed to be deprived of the two bounties." }] },
    { id: 5, blocks: [{ kind: "p", text: "It is like the scene of growing Faith in the young Muslim community which delights Allāh, the Creator of the Religion and mankind and also His Messenger who is the teacher of mankind to the Straight Path." }] },
  ],
};

export default surah;
