import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 57 · Al-Hadīd — book pages 1021–1028 (verses 1–29, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 57,
  pages: [
    {
      bookPage: 1021,
      heading: {
        title: "Al-Hadīd",
        lines: ["(The Iron)", "Revealed at Madīnah", "29 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        {
          type: "verse",
          number: 1,
          lines: ["Whatever is in the heavens and on", "The earth Celebrate the Attributes and", "The Absolute Purity of Allāh; and Allāh", "Is the Supremepower Sovereign;"],
        },
        {
          type: "verse",
          number: 2,
          lines: ["To Him belongs the Dominion of", "The heavens and the earth: He is", "The One Who gives life and causes", "Death and He is Powerful over all", "Things;"],
        },
        {
          type: "verse",
          number: 3,
          lines: ["He is the First and the Last and", "The Manifest and the Hidden; and He is", "The Knower of all things;{1}"],
        },
        {
          type: "verse",
          number: 4,
          continues: true,
          lines: ["He is the One Who created the heavens", "And the earth in Six Days; then He", "Established Himself over the Divine"],
        },
      ],
    },
    {
      bookPage: 1022,
      blocks: [
        {
          type: "verse",
          number: 4,
          continued: true,
          lines: ["Throne. He knows whatever enters", "The earth and whatever comes out from", "It, [and He knows] what comes down", "From the heaven and what transcend to", "It. And He is with you wheresoever you", "May be; and Allāh is the Seer of what", "You people do;"],
        },
        {
          type: "verse",
          number: 5,
          lines: ["To Him belongs the Dominion of", "The heavens and the earth and all affairs", "Are referred to Him;"],
        },
        {
          type: "verse",
          number: 6,
          lines: ["He has Ordained the night to enter", "The day and the day to enter the night", "And He is the Knower of the secrets of", "The hearts."],
        },
        {
          type: "verse",
          number: 7,
          lines: ["[O, People!] Believe in Allāh and His", "Messenger; and spend out of what He", "Has made you inheritors: For those who", "Believe and spend in Allāh’s Way there", "Will be a great reward;"],
        },
        {
          type: "verse",
          number: 8,
          lines: ["And what is the matter with you that", "You do not believe in Allāh? [i.e. , do not", "Act upon Allāh’s Commands] while your", "Messenger invites you to believe in your", "Creator. Allāh has indeed taken your", "Covenant{2} if you are men of Faith."],
        },
        {
          type: "verse",
          number: 9,
          continues: true,
          lines: ["Allāh is the One Who sends down", "Explicit Words of Revelation to His", "Devoted worshipper{3} that he may lead"],
        },
      ],
    },
    {
      bookPage: 1023,
      blocks: [
        {
          type: "verse",
          number: 9,
          continued: true,
          lines: ["You from the darkness of disbelief and", "Polytheism into Light. And verily,", "Allāh to you is the Compassionate", "Merciful."],
        },
        {
          type: "verse",
          number: 10,
          lines: ["And why is that you do not spend in", "Allāh’s Way? Whereas to Allāh belongs", "The heritage of the heavens and", "The earth. They are not equal those", "Among you who spent in Allāh’s Way", "[For the war equipment] and took part in", "The war before the Victory of Makkah", "And those who spent in Allāh’s Way and", "Fought after that; the former are higher", "In degree, though to both of them", "Allāh has promised the best reward{4} and", "Allāh is Well Aware of what you do."],
        },
        {
          type: "verse",
          number: 11,
          lines: ["Who is going to give to Allāh a Fair", "Loan?{5} And Allāh will repay him double", "And besides he will have a good reward", "From his Creator."],
        },
        {
          type: "verse",
          number: 12,
          lines: ["On the Day of Resurrection you will see", "The believing men and women their", "Light going in front [and ahead of them]", "And also by their right hands. [It will be said", "To them:] “To day, glad-tidings for you", "Is the Gardens of Paradise, in which", "Flow streams; you will abide therein", "Forever and that is the Great", "Achievement.”"],
        },
      ],
    },
    {
      bookPage: 1024,
      blocks: [
        {
          type: "verse",
          number: 13,
          lines: ["On that Day the hypocrites men and", "Women will say to those who believe:", "“Wait for us [to reach you] that we may", "Borrow some light from you.” [It will be", "Said:] “Look back and seek some other", "Light [from your deeds of the past!]”", "Then a wall will be set between them;", "With a gate therein; one side of it [which", "Is open to the believers] shall be Grace", "And the other side [which is open to", "The disbelievers and the hypocrites] shall", "Be Chastisement;"],
        },
        {
          type: "verse",
          number: 14,
          lines: ["The wrongdoers will cry out: “Were we", "Not with you?” They shall reply: “Yes", "But you were trapped by temptations of", "Your caprices and waited our destruction;", "And you doubted the Truth; and you were", "Deceived by your vain hopes and desires", "Till Allāh’s Command overtook you.", "[Now you realize] the deceiving", "Satan has deceived you regarding", "Allāh[’s Promises];"],
        },
        {
          type: "verse",
          number: 15,
          lines: ["“So this Day no ransom shall be", "Accepted from you hypocrites nor of", "Those who disbelieved; your abode will", "Be the Fire, since Satan was your", "Guardian; and you will have the worst", "Resting place for your abode.”"],
        },
        {
          type: "verse",
          number: 16,
          continues: true,
          lines: ["Has not the time arrived yet that those", "Who believe, feel in their hearts affected", "By Allāh’s Remembrance and of", "The Truth which has been revealed to", "Them, and that they should not be like"],
        },
      ],
    },
    {
      bookPage: 1025,
      blocks: [
        {
          type: "verse",
          number: 16,
          continued: true,
          lines: ["Those who were given the Book", "[The Taurāt and the Injīl]? Since", "The term seemed prolonged to them,", "Their hearts grew hard and most of", "Them became rebellious and", "Disobedient."],
        },
        {
          type: "verse",
          number: 17,
          lines: ["You should know that Allāh gives life", "To the earth after its death [so", "Resurrection is another example of", "Allāh’s bestowing life to the dead.]", "Indeed We have explained the Words of", "Revelation clearly so that you may", "Understand them and ponder about", "Them."],
        },
        {
          type: "verse",
          number: 18,
          lines: ["Verily, those who spend in charity, men", "And women and lend to Allāh a Fair", "Loan,{6} it will be repaid to them doubled", "By Allāh and also they shall receive", "The good reward [of Paradise]."],
        },
        {
          type: "verse",
          number: 19,
          lines: ["Those who believe in Allāh and His", "Messengers they are in Allāh’s Sight as", "The Truthful and the Martyrs [4:69]", "And they will enjoy the same reward and", "Light; but those who disbelieved and", "Belied Our Signs and Miracles, they will", "Be the inhabitants of the Hell."],
        },
        {
          type: "verse",
          number: 20,
          continues: true,
          lines: ["[O People] Know that the life of this world", "Is but play and amusement, decoration", "And showing off among yourselves, and", "Greed for increasing the number of"],
        },
      ],
    },
    {
      bookPage: 1026,
      blocks: [
        {
          type: "verse",
          number: 20,
          continued: true,
          lines: ["Children and the amount of wealth; it", "Can be compared to vegetation after", "Receiving the blessing of rain; it springs", "Up and pleases the farmer, then it", "Whithers and turns into yellow; then it", "Becomes dry; then it becomes straw. So", "In the Hereafter there is a Severe", "Torment for the disbelievers [whose all", "Struggles were focussed on the worldly", "Life] and there is Forgiveness from", "Allāh and His Pleasure for those who", "Did good and were righteous. So the life", "Of this world is only a deceiving", "Perishable property;"],
        },
        {
          type: "verse",
          number: 21,
          lines: ["[O, men!] Compete one another in", "Attaining Forgiveness from your", "Creator&Nurturer and the Garden of", "Paradise whose width is equal to", "The vastness of the heavens and", "The earth altogether, and is prepared for", "Those who believe in Allāh and His", "Messengers. That is the Grace of Allāh", "Which He bestows on whom He Wills;", "And Allāh is the Owner of the Great", "Grace."],
        },
        {
          type: "verse",
          number: 22,
          lines: ["No disaster befalls on the earth and on", "You as a nation but has been inscribed", "Before in the Preserved Book, and We", "Bring it into existence and that is easy", "For Allāh;"],
        },
        {
          type: "verse",
          number: 23,
          continues: true,
          lines: ["This is to remind you that you should", "Not feel sad over what you have lost and", "You should not feel joyous over what"],
        },
      ],
    },
    {
      bookPage: 1027,
      blocks: [
        {
          type: "verse",
          number: 23,
          continued: true,
          lines: ["You have been given. And know that", "Allāh does not like the arrogant", "Boasters;"],
        },
        {
          type: "verse",
          number: 24,
          lines: ["Those who are niggardly and encourage", "Other people to niggardliness", "[Regarding spending in charity] they", "Should know that Allāh is", "The Praiseworthy Rich.{7}"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 25,
          lines: ["Indeed We sent Our Messengers with", "Signs and Miracles and revealed to them", "Books of Religion and gave them", "The Criterion for establishing justice", "Among the people. And We provided", "Iron wherein is strenght to be used in", "Making arms for the war and also there", "Are other benefits in it for the people.", "And Allāh makes known those who help", "Allāh, the Unseen and also His", "Messengers in the Path of the Truth.", "Verily, Allāh is the Invincible", "Supremepower;"],
        },
        {
          type: "verse",
          number: 26,
          lines: ["And indeed We sent Nūh and Ibrāhīm", "And We bestowed prophethood and", "Book among their offsprings; some of", "Them were guided aright, and most of", "Them were transgressors [against Allāh’s", "Limits];"],
        },
        { type: "verse", number: 27, continues: true, lines: ["And We sent Our Messengers"] },
      ],
    },
    {
      bookPage: 1028,
      blocks: [
        {
          type: "verse",
          number: 27,
          continued: true,
          lines: ["To follow their footsteps; and We sent", "Issā son of Maryam and gave him the Injīl", "And We Ordained in the hearts of his", "Followers compassion and mercy. But", "Monasticism that they invented for", "Themselves was not decreed by Us: They", "Meant to seek Allāh’s Pleasure by it, but", "They did not manage to consider that as", "It was to be considered. However We", "Did give their reward to those of them", "Who believed; but most of them are", "Transgressors and disobedient."],
        },
        {
          type: "verse",
          number: 28,
          lines: ["O, you who believe! [if you] fear from", "The disobedience of Allāh’s Commands", "And believe in His Messenger.", "Allāh will give you a double portion", "Of His Grace: He will appoint for you a", "Light by which you shall be able to walk", "Towards the Straight Path; and He will", "Also forgive your past; and Allāh is", "The Merciful Forgiving."],
        },
        {
          type: "verse",
          number: 29,
          lines: ["And the people of the Book should", "Know that they have no power of", "Possession and choice over Allāh’s", "Grace [such as prophethood] and verily,", "Allāh’s Grace is in Allāh’s Hand and He", "Gives it to whoever He Wills; and Allāh", "Is the Sublime Credit-Bestower."],
        },
      ],
    },
  ],
  footnotes: [
    {
      id: 1,
      blocks: [
        { kind: "p", text: "Allāh is the First because the Existence started with Him; He will be the Last because He is the only EternalLive;Heis the Evident, since the whole creation of Him is an evident proof of His Existence; and He is the Hidden because man’s eyes cannot grasp the interior of the Unseen World and thus the Sovereign of it." },
      ],
    },
    {
      id: 2,
      blocks: [
        { kind: "p", text: "See 7:172" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "The Holy Messenger" },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "The Paradise" },
      ],
    },
    {
      id: 5,
      blocks: [
        { kind: "p", text: "Spending in Allāh’s Way to the needy; also it means the money loaned without usury." },
      ],
    },
    {
      id: 6,
      blocks: [
        { kind: "p", text: "See note on 57:11" },
      ],
    },
    {
      id: 7,
      blocks: [
        { kind: "p", text: "Allāh is the Generous Rich; and He likes those who follow Allāh’s Attributes, i.e., the affluent should also be generous and spend in charity." },
      ],
    },
  ],
};

export default surah;
