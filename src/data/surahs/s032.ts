import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 32 · As-Sajdah — book pages 755–760 (verses 1–30, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * Notes are numbered once per sūrah in reading order (the book restarts them on every page).
 */
const surah: SurahData = {
  number: 32,
  pages: [
    {
      bookPage: 755,
      heading: {
        title: "As-Sajdah",
        lines: ["(The Prostration)", "Revealed at Makkah", "30 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["Alif. Lām. Mīm{1}"] },
        {
          type: "verse",
          number: 2,
          lines: ["This Book which there is no doubt", "About its state of being the Truth, is", "Descended from the Presence of the", "Creator of the worlds;"],
        },
        {
          type: "verse",
          number: 3,
          lines: ["Do they say that, Mohammad has forged", "It?{2} Never, it is the Word of Truth from", "Your Creator&Nurturer in order that", "You [O, Messenger] may warn a people", "To whom no guide has come before", "You, perchance they may be guided to", "The Straight Path."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 4,
          continues: true,
          lines: ["Allāh is the One Who created", "The heavens and the earth and what is"],
        },
      ],
    },
    {
      bookPage: 756,
      blocks: [
        {
          type: "verse",
          number: 4,
          continued: true,
          lines: ["Between them in Six Days; then He", "Established Himself on Arsh.{3} You", "People have not besides Him any", "Guardian or intercessor; will you then", "Not be reminded?"],
        },
        {
          type: "verse",
          number: 5,
          lines: ["Allāh orders and plans the affairs of", "The earth and its inhabitants from", "The heaven. Then the result of His", "Orders for mankind will ascend to Him", "On a Day{4} the duration of which is one", "Thousand years according to your", "Ordinary calendar and calculation;"],
        },
        {
          type: "verse",
          number: 6,
          lines: ["Such is the Knower of the Visible and", "The Unseen; and He is the Gracious", "Supremepower."],
        },
        {
          type: "verse",
          number: 7,
          lines: ["Allāh is the One Who gives the best", "Perfection to all that He created: He", "First created ‘Ādam from clay,"],
        },
        {
          type: "verse",
          number: 8,
          lines: ["[At the second stage] He decided", "The progeny of ‘Ādam be created from a", "Small drop of a fluid of light value;"],
        },
        {
          type: "verse",
          number: 9,
          lines: ["Then He gave form and figure to", "The embryo and bestowed upon him a", "Soul from His Own Divine Presence.", "And for you people He produced", "The faculties of hearing, sight and", "Intellect, but you people rarely express", "Your gratitude for Allāh’s Bounties."],
        },
        { type: "divider" },
      ],
    },
    {
      bookPage: 757,
      blocks: [
        {
          type: "verse",
          number: 10,
          lines: ["And the disbelievers say: “Is it possible", "To regain life after we died and became", "Lost in the earth of our graves?", "“The truth is that they deny the Meeting", "With their Creator&Nurturer;"],
        },
        {
          type: "verse",
          number: 11,
          lines: ["Say [O, Messenger!]: “The Angel of death", "Who is in charge of you, will take your", "Souls and thus you shall be brought", "Back to your Creator.”"],
        },
        {
          type: "verse",
          number: 12,
          lines: ["If only you could see how miserable they", "Feel, those sinners when on the Day of", "Judgement they are in front of their", "Creator; they say with their heads bent", "Down: “O, our Creator! We saw and", "Heard the Truth which was promised", "To us. Now please send us back to", "The world and give us chance to amend", "By doing good deeds, since now we", "Do believe in the Truth.”"],
        },
        {
          type: "verse",
          number: 13,
          lines: ["If We had so Willed We could have", "Given all men their guidance [by force", "But Allāh gave Books of Guidance and", "Sent Messengers and showed Signs and", "Miracles to help them choose the", "Straight Path; nevertheless they denied", "Them all and chose astray.] So My", "Decree for Punishment will come to pass", "And as I have promised I will fill the Hell", "With the Jinns and mankind altogether;{5}"],
        },
      ],
    },
    {
      bookPage: 758,
      blocks: [
        {
          type: "verse",
          number: 14,
          lines: ["[It will be stated to them:] “Taste", "The Torment of Hell because you forgot", "The meeting of this Day of yours and", "We too will forget you and deprive you", "From Our Mercy; taste you the Lasting", "Chastisement as a recompense of what", "You did.”"],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 15,
          lines: ["In the Sight of Allāh the believers are", "Those who when Our Words of", "Revelation is recited to them, they fall", "Down in prostration and with sincere", "Humbleness; and they Celebrate", "The Absolute Purity of their Creator", "And express their thanks and adoration;"],
        },
        {
          type: "verse",
          number: 16,
          lines: ["And they quit their beds in the middle", "Of the night to say midnight prayers;", "And they invoke to Allāh with fear and", "Hope; and they spend in Allāh’s Way", "Out of what We have bestowed them of", "Sustenance and wealth;"],
        },
        {
          type: "verse",
          number: 17,
          lines: ["And no one of the believers knows [and", "Cannot guess] what we have hidden for", "The believers as a delightful reward of", "Their deeds;"],
        },
        {
          type: "verse",
          number: 18,
          lines: ["Is a person who believes in Allāh, equal", "In Allāh’s Presence, to the one who is", "Disobedient and corrupt? Nay! They are", "Not equal:"],
        },
        {
          type: "verse",
          number: 19,
          lines: ["To those who believe and do righteous", "Deeds, Gardens of Paradise will be", "Hospitable homes, as their rewards;"],
        },
      ],
    },
    {
      bookPage: 759,
      blocks: [
        {
          type: "verse",
          number: 20,
          lines: ["But those who are disobedient and", "Corrupt their abode will be the Fire;", "Whenever they try to get away therefrom", "They will be returned to it and it will be", "Said to them: “Taste the Torment of the", "Fire which you denied it!”"],
        },
        {
          type: "verse",
          number: 21,
          lines: ["And indeed We make the disbelievers", "Taste the lighter punishment of their", "Denial in this world before the Grave", "Chastisement of the Hereafter, so that", "They may feel remorseful and repent;"],
        },
        {
          type: "verse",
          number: 22,
          lines: ["And who is more self-oppressor than", "The one who when reminded of", "The Messages of his Creator, turns away", "Therefrom? Verily, We shall take a", "Severe Retribution on the wrongdoers."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 23,
          lines: ["We did indeed give the Divine Book to", "Mūssā, and you should not have any", "Doubt about meeting him [in", "The Paradise among the Messengers];", "And We made Taurāt a Guide for", "The Children of Isrāīl;"],
        },
        {
          type: "verse",
          number: 24,
          lines: ["And We appointed from among them", "Messengers and Divine Leaders for", "The guidance of their people; and they", "Acted according to Our Command; and", "They were patient while encountering", "Difficulties along the way of their", "Mission;"],
        },
        { type: "verse", number: 25, continues: true, lines: ["Verily, your Creator&Nurturer on the Day"] },
      ],
    },
    {
      bookPage: 760,
      blocks: [
        {
          type: "verse",
          number: 25,
          continued: true,
          lines: ["Of Judgement will judge between some", "Of the people of the Book about what", "They differed in."],
        },
        { type: "divider" },
        {
          type: "verse",
          number: 26,
          lines: ["Is not this enough for the guidance of", "The pagans that We destroyed their", "Likes who lived before them and now", "They have occupied the habitations of", "Those disbelievers? Surely there are", "Signs for them to take lesson from", "The bitter end of those who passed", "Away; will they not listen and receive", "Admonition?"],
        },
        {
          type: "verse",
          number: 27,
          lines: ["Do they not see that We drive water to", "The dry and bare of herbage land; and", "Produce by it vegetations which their", "Cattle and they themselves eat from it?", "Will they not open their eyes to see", "The Truth?"],
        },
        {
          type: "verse",
          number: 28,
          lines: ["And they say: “When your victory over", "Us, [the disbelievers] will happen if you", "Are telling the truth?”"],
        },
        {
          type: "verse",
          number: 29,
          lines: ["Say [O, Messenger!]: “The Day of our", "Victory will not profit their Faith for", "Those who disbelieve now; and they will", "Not be respited then to repent.”"],
        },
        {
          type: "verse",
          number: 30,
          lines: ["So [O, Messenger!] turn away from", "These stubborn disbelievers and wait [for", "The Grace of Allāh.] They too will surely", "Be waiting [but for the Divine", "Chastisement.]"],
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
        { kind: "p", text: "The Holy Qur’ān" },
      ],
    },
    {
      id: 3,
      blocks: [
        { kind: "p", text: "Allāh’s Throne of Authority" },
      ],
    },
    {
      id: 4,
      blocks: [
        { kind: "p", text: "The Resurrection Day" },
      ],
    },
    {
      id: 5,
      blocks: [
        { kind: "p", text: "Reference is made to Allāh’s Promise of Punishment: 7:179" },
      ],
    },
  ],
};

export default surah;
