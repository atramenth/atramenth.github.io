import type { SurahData } from "../../domain/types.ts";

/**
 * Sūrah 4 · An-Nissāa — book pages 133–179 (verses 1–176, complete).
 * Markup: {n} footnote marker · [ ] translator’s insertion · \n printed line break.
 * The book restarts footnote numbering on every page; here notes are numbered
 * once per sūrah in reading order.
 * Part 5 begins on page 140 (verse 24) and Part 6 on page 172 (verse 148).
 */
const surah: SurahData = {
  number: 4,
  pages: [
    {
      bookPage: 133,
      heading: {
        title: "An-Nissāa",
        lines: ["(The Women)", "Revealed at Madīnah", "176 Words of Revelation (āyāt)"],
      },
      blocks: [
        { type: "bismillah", lines: ["In the Name of Allāh", "The Merciful Beneficent"] },
        { type: "verse", number: 1, lines: ["O, people! Fear from the consequences", "Of the disobedience of your", "Creator&Nurturer Who created you", "From a single soul{1} and from his kind", "Created his mate{2} and from the two of", "Them created many men and women", "Scattered all about; and fear from", "The consequences of disobeying Allāh", "That by swearing to His Name you make", "Compacts and demand what you need", "From each other; and be mindful about", "The wombs.{3} Surely Allāh is", "The Ever-Watcher over your deeds."] },
        { type: "verse", number: 2, lines: ["And [as a guardian] render to", "The orphans their property; and do not", "Exchange your worthless property for", "Their good ones; and do not consume"], continues: true },
      ],
    },
    {
      bookPage: 134,
      blocks: [
        { type: "verse", number: 2, lines: ["Their property along with your own; for", "Verily, it is a grave sin;"], continued: true },
        { type: "verse", number: 3, lines: ["And if [as a guardian] you fear that", "You may not be able to deal with", "The orphan [girls] justly, then marry", "Other women of your choice, two or", "Three or four; but if you fear that you", "May not be able to deal justly [with", "Them] then only marry one free woman", "Or choose from among the captives and", "Slave girls that you own; that is more", "Possible to prevent you from doing", "Injustice;"] },
        { type: "verse", number: 4, lines: ["Give women their marriage-portion", "Freely, [without any restraint], but if", "They themselves, [voluntarily] remit to", "You anything thereof, then you may", "Consume it with pleasure;"] },
        { type: "verse", number: 5, lines: ["And do not give to the feeble-minded", "Your property{4} which Allāh has made", "Means of support for you; but feed and", "Clothe them out of it and speak to them", "With nice and decent words;"] },
        { type: "verse", number: 6, lines: ["And test orphans, [regarding their", "Intelligence and maturity] until they", "Reach the age of marriage; then if you", "Find sound judgement in them, deliver", "Their heritage to them, but do not", "Consume it wastefully and hastily,"], continues: true },
      ],
    },
    {
      bookPage: 135,
      blocks: [
        { type: "verse", number: 6, lines: ["[Fearing that they may grow up and", "Make a claim for the return of their", "Property.] And whoever among", "The guardians is rich, may take no", "Wages [for his services], but if he is", "Poor, he could have for himself what is", "Just and reasonable [as compensation", "To his labour.] And when you deliver", "Their property to them, let it be in", "Presence of the witnesses; [although]", "Allāh is Sufficient as the Reckoner."], continued: true },
        { type: "verse", number: 7, lines: ["There is a share for men and a", "Share for women from what is left by", "Parents and their relatives as", "Heritage whether the property be", "Small or large, it is a Decreed share;"] },
        { type: "verse", number: 8, lines: ["And if at the time of dividing", "Inheritance, kinsmen and orphans and", "The poor are present, provide them", "With something out of it and speak to", "Them with kind words;"] },
        { type: "verse", number: 9, lines: ["Those who would have worry to leave", "Helpless children behind,{5} they", "Should fear Allāh: [Treat other people’s", "Orphans justly] and speak with proper", "Words to them;"] },
        { type: "verse", number: 10, lines: ["Verily, those who consume", "Properties of the orphans unjustly,", "They [only] send fire into their", "Bellies; and they shall soon enter", "The Blazing Fire."] },
      ],
    },
    {
      bookPage: 136,
      blocks: [
        { type: "verse", number: 11, lines: ["Allāh Commands you, with regards", "To your children’s inheritance: To", "The male a portion equal to that of two", "Females; if all are daughters and more", "Than two, their share is two thirds of", "The inheritance; if only one, her share", "Is half. For parents, a sixth of share of", "Inheritance if the deceased left", "Children; if no children and", "The parents are the only heirs,", "The mother has a third; if the deceased", "Left brothers or sisters, the mother has a", "Sixth. All this procedure is after", "The payment of legacies he may have", "Bequested or debts. You do not know", "Which of them, your parents or your", "Children, will be more useful to you;", "These fixed shares are Decreed by", "Allāh; and Allāh is the Absolute", "Knowing Decreer."] },
        { type: "verse", number: 12, lines: ["In that which your wife leaves [as", "Inheritance], your share is a half if she", "Has no children, but if she leaves a", "Child, you get a fourth of that she", "Leaves, after paying legacies that she", "May have bequested or debts [to be", "Paid]. In that which you leave, her", "Share is a fourth if you leave no", "Children; but if you leave a child, she", "Gets an eighth of that which you left,", "After paying the legacies that you may", "Have bequested or debts [to be paid].", "If the man or woman whose", "Inheritance is in question has left", "Neither ascendants nor descendants,"], continues: true },
      ],
    },
    {
      bookPage: 137,
      blocks: [
        { type: "verse", number: 12, lines: ["But has left a brother or sister, each", "One of the two gets a sixth, but if", "More than one, they share a third,", "After paying the legacies he or", "She may have bequested or debts [to be", "Paid], provided that no loss is caused", "To anyone; this is a Decree issued by", "Allāh and Allāh is the Respite-", "Bestowing Knower;"], continued: true },
        { type: "verse", number: 13, lines: ["Those [above-mentioned Decrees]", "Are the limits set by Allāh; and", "Whosoever obeys Allāh and His", "Messenger, he will be admitted to", "Gardens in which streams flow; and will", "Abide therein forever; and this is", "The Great Achievement;"] },
        { type: "verse", number: 14, lines: ["But whosoever disobeys Allāh and", "His Messenger and transgresses", "The limits set by Allāh, he will be cast", "Into the Fire, to abide therein; and he", "Shall have a humiliating Punishment."] },
        { type: "divider" },
        { type: "verse", number: 15, lines: ["And if your wife is guilty of", "Adultery, take the evidence of four", "Witnesses against her from among", "Yourselves; and if they bear witness", "[To the fact], confine her to stay at", "Home, till death takes her away or", "Allāh makes some other way for her", "[By another Decree];"] },
        { type: "verse", number: 16, lines: ["And the two bachlors [man and", "Woman] among you who have"], continues: true },
      ],
    },
    {
      bookPage: 138,
      blocks: [
        { type: "verse", number: 16, lines: ["Committed adultery, chastise them", "Both; if they repent and amend, then", "Leave them alone. Verily, Allāh is", "The Merciful Repentance-Accepter;"], continued: true },
        { type: "verse", number: 17, lines: ["Allāh accepts only the repentance", "Of those who do evil out of ignorance", "And repent soon afterwards. Allāh will", "Forgive them and Allāh is", "The Absolute-Knowing Decreer;"] },
        { type: "verse", number: 18, lines: ["And repentance is not accepted of", "Those who do evil until death comes", "To them, and then they say: “Now I", "Repent.” Also repentance is of no", "Benefit for those who die disbelieving;", "For such people, We have prepared a", "Painful Chastisement."] },
        { type: "divider" },
        { type: "verse", number: 19, lines: ["O, you who believe! You are", "Forbidden to inherit women.{6} And you", "Should not treat them with harshness,", "That you may take away part of", "The gifts, you have given them, unless", "They are found guilty of adultery. And", "You should treat women honourably. If", "You dislike them, [be mindful that] you", "May dislike something and Allāh brings", "Through it a great deal of good;"] },
        { type: "verse", number: 20, lines: ["But if you intend to substitute your", "Wife by another and you have given"], continues: true },
      ],
    },
    {
      bookPage: 139,
      blocks: [
        { type: "verse", number: 20, lines: ["The former a large amount of wealth", "For marriage-portion, do not take a bit", "Of it back; would you take it by", "Slandering her which is an obvious", "Sin?"], continued: true },
        { type: "verse", number: 21, lines: ["And how could you take it{7} back", "While you have enjoyed private", "Association from one another and", "The wife has taken from you a firm", "And solemn promise?"] },
        { type: "verse", number: 22, lines: ["And do not marry any woman", "Whom your father has married{8} unless", "This marriage has happened before", "[This Decree] for it is shameful and", "Indecent and an abominable custom", "Indeed."] },
        { type: "verse", number: 23, lines: ["Forbidden to you [for marriage]", "Are: Your mother, your daughters,", "Your sisters, your father’s sisters, your", "Mother’s sisters, your brother’s", "Daughters, your sister’s daughters,", "Your foster mother who gave you", "Suck, your foster milk-suckling", "Sisters, your wives’ mothers,", "Your step-daughters under your", "Guardianship, born of your wives with", "Whom you have had private", "Association, but there is no sin if you", "Have not had that association", "[To divorce her and marry her daughter]"], continues: true },
      ],
    },
    {
      bookPage: 140,
      blocks: [
        { type: "verse", number: 23, lines: ["And [also is forbidden] the wives", "Of your sons who are of your loins, [not", "Step-son]; and forbidden is two sisters in", "Wedlock at the same time, except for", "What is past [and before this decree];", "Verily, Allāh is the Merciful Forgiving;"], continued: true },
        { type: "verse", number: 24, lines: ["[Also] Forbidden are wedded", "Women except those captives and", "Slaves whom you owned, [in the war", "Against the idolaters] thus Allāh has", "Ordained for you [regarding those", "Forbidden marriages]. All others are", "Lawful, provided that you seek", "Marriage with them and offer", "Marriage-portion from your property", "And desiring chastity, not lust. So with", "Those whom you have enjoyed", "Tentative marriage, give them their", "Marriage-portion as prescribed; if you", "Agree mutually [to change the amount]", "There is no sin on you; surely, Allāh is", "The Absolute-Knowing Decreer."] },
        { type: "verse", number: 25, lines: ["And whosoever of you who has", "Not the means to marry free-believing", "Women, may marry believing girls", "From among those [captives and", "Slaves] whom you own; and Allāh is", "The Knower of your Faith; you are", "Fellow-creatures; then, wed them with", "The permission of their own folk", "[Guardians or masters] and give them", "Their marriage-portion according"], continues: true },
      ],
    },
    {
      bookPage: 141,
      blocks: [
        { type: "verse", number: 25, lines: ["To what is reasonable, provided", "That they are chaste, not adulterous", "Nor taking boyfriends; and after they", "Have been taken in wedlock, if they", "Commit adultery, their punishment is", "Half of that for a free woman. This [type", "Of marriage] is for those men among you", "Who are afraid of committing sin of", "Adultery [due to physical need], but it is", "Better for you to practice self-restraint,", "And Allāh is the Merciful Forgiving;"], continued: true },
        { type: "verse", number: 26, lines: ["Allāh Wills to make clear [what is", "Lawful and what is unlawful] to you,", "[Muslims] and to inform you about", "The ways of those who have passed", "Away [before Islām]; and by His Mercy", "Accepts your repentance; and Allāh is", "The Absolute-Knowing Decreer;"] },
        { type: "verse", number: 27, lines: ["Allāh Wills to accept your", "Repentance by His Mercy, but those", "Who follow their lusts, wish that", "You, [believers] should deviate a great", "Deal [from the Right Path];"] },
        { type: "verse", number: 28, lines: ["Allāh Wills to lighten the burdens", "[Of punishment] for you; for man was", "Created weak [in resolution]."] },
        { type: "divider" },
        { type: "verse", number: 29, lines: ["O, you who believe! Do not devour", "Each other’s wealth in vanity and illegal", "Way: The profit obtained should be", "From trading based on mutual consent.", "And do not kill yourself [and your fellow", "Creatures] since, Allāh is highly"], continues: true },
      ],
    },
    {
      bookPage: 142,
      blocks: [
        { type: "verse", number: 29, lines: ["Merciful{9} towards you, people;"], continued: true },
        { type: "verse", number: 30, lines: ["And whoever does that, out of", "Aggression and injustice, We shall cast", "Him into the Hell Fire and that is", "An easy matter for Allāh."] },
        { type: "verse", number: 31, lines: ["If you avoid the grave sins which", "You are forbidden to do, We will remit", "From you, your small misdeeds and", "Admit you to the Glorious Gate."] },
        { type: "verse", number: 32, lines: ["And do not wish the bounty which", "Allāh by bestowing it, has raised some", "Of you above others: To the men a", "Share from what they have earned and", "To the women a share from what they", "Have earned; and ask Allāh [Himself]", "Of His Bounty [whatever you wish and", "Need]. Verily, Allāh is the Knower of all", "Things."] },
        { type: "verse", number: 33, lines: ["To everyone We have appointed", "Heirs to property left by parents and", "Relatives. And [also] with whom you", "Have made a covenant, give to them", "Their portion. Verily, Allāh is", "Ever-Witness over all things."] },
        { type: "verse", number: 34, lines: ["Men are overseers and maintainers of", "Women because Allāh has made one of", "Them excel to the other, and because", "They, [the husbands] provide the"], continues: true },
      ],
    },
    {
      bookPage: 143,
      blocks: [
        { type: "verse", number: 34, lines: ["Livelihood of the family. Therefore,", "Righteous women are obedient and", "Guard in the husband’s absence", "What Allāh orders them to guard.{10}", "As to those women on whose part you", "See ill-conduct, admonish them", "[First], [next] refuse to share their beds,", "[And last] beat them lightly,{11} but if they", "Return to obedience, do not seek", "Against them means of annoyance;", "Verily, Allāh is the Sublime Great;"], continued: true },
        { type: "verse", number: 35, lines: ["And if [as a guardian] you fear a breach", "Between the couple, then appoint an", "Arbitrator [chosen] from his family and an", "Arbitrator [chosen] from her family; if", "They both desire to refine their", "Relationship, Allāh will effect harmony", "Between the couple. Verily, Allāh is", "The Informed Knowing."] },
        { type: "divider" },
        { type: "verse", number: 36, lines: ["[O, men!] Worship Allāh and do not join", "Partner with Him; and do good to your", "Parents, relatives, orphans, the needy,", "The neighbour who is a near relative,", "The neighbour who is a stranger, the very", "Close friend, the wayfarers and to those", "Slaves whom you own: Verily, Allāh", "Does not like the conceited arrogants;"] },
      ],
    },
    {
      bookPage: 144,
      blocks: [
        { type: "verse", number: 37, lines: ["[And also Allāh does not like]", "Those who are tight-fisted and enjoin", "Niggardliness on other people{12} and", "Hide away what Allāh out of His", "Bounty has bestowed upon them [lest", "They may ask some of it]. We have", "Prepared for the disbelievers a", "Humiliating Torment;"] },
        { type: "verse", number: 38, lines: ["[And also Allāh does not like]", "Those who spend their property [in", "Charity] to show off to people; whereas", "They do not believe in Allāh and in", "The Last Day; [they are the friends of", "Satan] and whosoever takes Satan", "As an intimate friend, [should know", "That] he is a dreadful intimate;"] },
        { type: "verse", number: 39, lines: ["And what sort of loss would they", "Suffer if they believed in Allāh and in", "The Last Day and if they had spent out", "[To the needy] of what Allāh has given", "Them for sustenance? And Allāh has", "Full knowledge of their intentions;"] },
        { type: "verse", number: 40, lines: ["Verily, Allāh does not do injustice", "In the least [to His worshippers], and if", "There be any good deed [done], He", "Doubles it in reckoning and gives out of", "His Own Grace a Great Reward [to", "The good-doers]."] },
        { type: "verse", number: 41, lines: ["How will it be then [for these", "People] when We bring from each"], continues: true },
      ],
    },
    {
      bookPage: 145,
      blocks: [
        { type: "verse", number: 41, lines: ["Nation a witness and We bring you", "[O, Messenger] as witness against these", "People?"], continued: true },
        { type: "verse", number: 42, lines: ["On that Day [of witnessing] those", "Who disbelieved and disobeyed", "The Messenger, will wish that they were", "Levelled with the earth, [in order not", "To be seen and questioned]; and they", "Will not be able to conceal a single word", "From Allāh."] },
        { type: "divider" },
        { type: "verse", number: 43, lines: ["O, you who believe! Do not go", "About performing prayers when you", "Are in a drunken state, [wait] until you", "Feel sober and know the meaning of", "What you utter [as words of praying]", "[Also] do not approach praying when", "You are in a state of sexual impurity", "And [have not yet taken a bath] except", "When travelling on road without", "Enough water to wash your whole", "Body; [also] if you are ill or on a", "Journey or have come from the privy", "Or you have been in contact with", "Women [by sexual relation] and you", "Find no water, then [in such cases] take", "For yourselves some clean and pure", "Soil and rub therewith your face and", "Hands.{13} Verily, Allāh is", "The Absolver-Forgiving."] },
        { type: "divider" },
      ],
    },
    {
      bookPage: 146,
      blocks: [
        { type: "verse", number: 44, lines: ["[O, Messenger!] Have you not", "Regarded those who have been given", "A portion of the Book?{14} They purchase", "Error for themselves and wish that you", "Too go astray from the Right Path;"] },
        { type: "verse", number: 45, lines: ["Allāh knows your enemies, [much", "Better than you do] and Allāh is", "Sufficient as a Protector, and as a", "Helper."] },
        { type: "verse", number: 46, lines: ["Some of Yahūdīs [the Jews]", "Deliberately displace words from their", "Original places [to alter the meaning]", "And [for example] they say [to", "The Messenger]: “We heard your word", "And we disobeyed” [or they say:] “Hear", "And let you hear nothing!” Or they say:", "“Raenā”{15} with a twist of their tongues", "And a taunt to Islām; and if [instead]", "Only they had said: “We hear and obey”,", "And [had said:] “Do have consideration", "For us to understand what you recite”, it", "Would have been better for them and", "More proper; Allāh has cursed", "Them for their disbelief; so they will", "Not believe except a few of them."] },
        { type: "verse", number: 47, lines: ["O you who have been given", "The Scripture! Believe in what We have", "Revealed now [to Our Messenger]", "Confirming what is in the Scripture", "With you, before We efface the faces by"], continues: true },
      ],
    },
    {
      bookPage: 147,
      blocks: [
        { type: "verse", number: 47, lines: ["Setting them backwards, or curse you", "As we cursed the Sabbath-breakers.{16}", "And verily, Allāh’s Ordainment is always", "Carried out:"], continued: true },
        { type: "verse", number: 48, lines: ["Verily, Allāh does not forgive those", "Who set up partners with Him", "Excluding this [grave sin], He forgives", "Except that to whom He Wills,", "And whoever sets up partner with Allāh", "In worship, he has forged a lie which is", "The gravest and unforgivable sin."] },
        { type: "verse", number: 49, lines: ["[O, Messenger!] Have you not", "Regarded those who claim sanctity for", "Themselves? Nay, only Allāh is the One", "Who sanctifies whomsoever He Wills;", "And the people will never be dealt with", "Injustice even in the least;"] },
        { type: "verse", number: 50, lines: ["[O, Messenger!] Behold! How they", "Forge a lie against Allāh and that itself", "Is enough as an obvious sin [for", "Punishing them;]"] },
        { type: "verse", number: 51, lines: ["Have you not observed those who", "Have been given a portion of", "The Scripture, how they believe in", "The idols and Satan? When they say", "About the idolaters: “These people are", "Far better guided than those who believe", "In Islām.”"] },
      ],
    },
    {
      bookPage: 148,
      blocks: [
        { type: "verse", number: 52, lines: ["Those [who utter this kind of", "Shameful words] are the ones whom", "Allāh has cursed; and those whom", "Allāh has cursed, you shall not find any", "Helper for them at all;"] },
        { type: "verse", number: 53, lines: ["Or have they, [the Jews] a share in", "The kingdom of the world? But then [if", "They had] they would not give to", "The people even as the speck in", "The date-stone;"] },
        { type: "verse", number: 54, lines: ["Or are they jealous of the honoured", "People [such as the Messenger of Islām", "And his family] for the Grace that Allāh", "Has bestowed upon them? We [also]", "Bestowed upon the people of Ibrāhīm", "The Book and the Wisdom and We gave", "Them a mighty kingdom [as well];"] },
        { type: "verse", number: 55, lines: ["Some of them believed in him and", "Some of them have caused bar against", "Him [and his Mission];{17} and sufficient", "For the disbelievers is the Blazing Fire", "Of the Hell;"] },
        { type: "verse", number: 56, lines: ["Surely those who disbelieved in", "Our Signs and Miracles, We shall cast", "Them into the Fire. As often as their", "Skins are roasted wholly, We shall", "Change them for other skins that they", "May taste the punishment. Verily, Allāh", "Is the Invincible-Mighty Decreer;"] },
      ],
    },
    {
      bookPage: 149,
      blocks: [
        { type: "verse", number: 57, lines: ["But those who believe [in", "The Oneness of Allāh] and have done", "Deeds of righteousness, We shall soon", "Admit them to the Gardens in which", "Streams flow; they abide therein forever.", "Therein they shall have pure wives [free", "From mental and physical pollution] and", "We shall admit them into the permanent", "And cool shades."] },
        { type: "verse", number: 58, lines: ["Verily, Allāh does command you:", "To deliver back the trusts to their", "Owners and when you judge among", "People, you should judge with justice;", "How excellent is the admonition that", "Allāh gives you! Verily, Allāh is", "The Seeing Hearer."] },
        { type: "verse", number: 59, lines: ["O, you who believe [in Allāh’s", "Oneness]! Obey Allāh and obey", "The Messenger and those governors", "Among you who have received Divine", "Authorities.{18} If you differ in anything", "Among yourselves, refer it to Allāh and", "His Messenger, if you believe in Allāh", "And in the Last Day, this is better and", "More suitable for final conclusion."] },
        { type: "verse", number: 60, lines: ["[O, Messenger!] Have you not", "Observed those who claim that they", "Believe in the Revelations", "Which have been sent down to you", "And was sent down before you, and", "They wish [in their deep down] to go"], continues: true },
      ],
    },
    {
      bookPage: 150,
      blocks: [
        { type: "verse", number: 60, lines: ["For judgement [in their disputes] to", "The Satanic judges though they have", "Been ordered to reject them? But", "Satan wishes to lead them far astray.", "[So they are disobedient];"], continued: true },
        { type: "verse", number: 61, lines: ["And when it is said to them:", "“Come to what Allāh has sent down", "And to the Messenger!” You see that", "The hypocrites turn away from you", "With total aversion;"] },
        { type: "verse", number: 62, lines: ["But how is it when some misfortune", "Befalls them on the account of", "Their own misdeeds, then they", "Come to you swearing by Allāh,", "Saying: “We did not mean but", "Good-will and concord?”"] },
        { type: "verse", number: 63, lines: ["Those [hypocrites] are the ones", "Whom only Allāh knows what is in their", "Hearts; so turn aside from them but", "Admonish them and speak to them", "With penetrating words to reach their", "Hearts."] },
        { type: "divider" },
        { type: "verse", number: 64, lines: ["We did not send any Messenger,", "But to be obeyed by Allāh’s Leave. If", "They{19} had come to you [O, Messenger]", "When they had wronged themselves and", "Had begged Allāh’s Forgiveness [through", "You] and the Messenger had begged"], continues: true },
      ],
    },
    {
      bookPage: 151,
      blocks: [
        { type: "verse", number: 64, lines: ["Forgiveness for them, indeed they would", "Have found that Allāh is the Merciful", "Repentance-Accepter;"], continued: true },
        { type: "verse", number: 65, lines: ["No, by your Creator&Nurturer! They", "Will not be considered believers, unless", "They accept you as their judge in all that", "They dispute among themselves; and", "[Also] if they do not find in their souls", "Any resistance against what you", "Decide, and submit [themselves] with", "Total submission [to your judgement;]"] },
        { type: "verse", number: 66, lines: ["And if We had Commanded them [as", "We did before to other disobedient", "Generations, stating]: “Kill yourselves”{20}", "Or “abandon your homes”, very few of", "Them would have done it; but if they", "Had done what they were admonished,", "It would have been better for them, and", "Would have strengthened their Faith;"] },
        { type: "verse", number: 67, lines: ["And then We would certainly have", "Given them, of Our Own Presence, a", "Great reward;"] },
        { type: "verse", number: 68, lines: ["And indeed We would have guided", "Them to the Straight Path."] },
        { type: "verse", number: 69, lines: ["And whoever obeys Allāh and", "The Messenger, he [on the Day of", "Resurrection] shall stand by those", "Upon whom Allāh has perfectly", "Bestowed His Grace; such as"], continues: true },
      ],
    },
    {
      bookPage: 152,
      blocks: [
        { type: "verse", number: 69, lines: ["The Prophets, the truthful, the martyrs", "And the righteous; and how excellent", "Are these companions;"], continued: true },
        { type: "verse", number: 70, lines: ["This reward [of having such", "Excellent companions] is a Favour from", "Allāh; and Allāh’s Absolute Knowledge", "About the believers is sufficient for them."] },
        { type: "divider" },
        { type: "verse", number: 71, lines: ["O, you who believe! Be prepared", "And precautious [for encountering", "Your enemies] and take your arms,", "Then go forward in small parties or go", "Forth all together;"] },
        { type: "verse", number: 72, lines: ["And there is certainly among you", "Someone who would linger behind [from", "Fighting in Allāh’s Path]; if a misfortune", "Befalls you, he would say: “Indeed", "Allāh has blessed me that I was not", "Present among them!”"] },
        { type: "verse", number: 73, lines: ["But if a bounty{21} comes to you", "From Allāh, as if no affection has", "Existed between you and him, he would", "Say: “O, I wish I had been with them, in", "Such case, a great wealth I would have", "Attained.”"] },
        { type: "verse", number: 74, lines: ["Let only those who wish to sell", "The life of this world for the Hereafter", "Fight in the Path of Allāh; and whoso"], continues: true },
      ],
    },
    {
      bookPage: 153,
      blocks: [
        { type: "verse", number: 74, lines: ["Fights in the Path of Allāh and is killed", "Or attains victory, We shall bestow upon", "Him a great reward;"], continued: true },
        { type: "verse", number: 75, lines: ["And what is it with you that you do", "Not fight in the Path of Allāh? And for", "Those who being weak and oppressed", "Among men, women and children who", "Cry: “O, our Creator&Nurturer! Rescue", "Us from this town{22} whose people are", "Evildoers and oppressors; and appoint", "For us from Your Presence, a guardian", "And a protector.”"] },
        { type: "verse", number: 76, lines: ["Those who believe, fight in", "The Path of Allāh and those who", "Disbelieve fight in the way of Satan [and", "His followers.] So you should fight", "Against the friends of Satan; feeble", "Indeed is Satan’s plot;"] },
        { type: "verse", number: 77, lines: ["Have you not regarded those to", "Whom it was said: “Restrain your", "Hands [from war] and perform prayers", "And pay alms”, but they insisted on", "Fighting? Then, as soon as fighting", "Was Ordained for them, a section of", "Them who feared men as they should", "Fear Allāh or even more, said: “O, our", "Creator&Nurturer! Why have you", "Ordained for us fighting? Why did you", "Not grant us respite for a short period", "Of natural term?” Say [O, Messenger!]:", "“The enjoyment of this world is scant"], continues: true },
      ],
    },
    {
      bookPage: 154,
      blocks: [
        { type: "verse", number: 77, lines: ["[Comparing to the other world]; and", "The Hereafter is far better for him who", "Is pious; and you shall not be wronged", "The least [before the Divine Court];"], continued: true },
        { type: "verse", number: 78, lines: ["“Wherever you people may be, death will", "Overtake you, even if you are in", "The well-built fortresses.” And if some", "Good reaches them,{23} they say: “This is", "From Allāh.” But if some evil befalls", "Them, they say: “This is from", "You.”{24} Say [O, Messenger!]: “All things", "[Fortune or misfortune] come from", "Allāh’s Will.” So, what is wrong with this", "People that they fail to understand a", "Single word of the Truth?"] },
        { type: "verse", number: 79, lines: ["Whatever of good reaches you", "[O, man] it is from Allāh, but whatever", "Of evil befalls you, it is from yourself.", "And [O, Messenger] We have sent you", "As a Messenger to mankind [all] and", "Allāh is Sufficient as a Witness over this", "Highly important issue;"] },
        { type: "verse", number: 80, lines: ["Whosoever obeys the Messenger,", "Thereby, obeys Allāh; and those who", "Turn away [from the Right Path, they", "Should know] We have not sent you", "[O, Messenger] to be a watcher over", "Them;"] },
        { type: "divider" },
      ],
    },
    {
      bookPage: 155,
      blocks: [
        { type: "verse", number: 81, lines: ["And when they are with you", "[O, Messenger], they say: “We are", "Obedient.” But when they leave your", "Presence, a section of them ponder all", "Night plannig other than what you have", "Told them; and Allāh records their", "Nightly plots; so turn away from them", "And put all your trust in Allāh; and", "Allāh is Sufficient as a Protector;"] },
        { type: "verse", number: 82, lines: ["Do they not ponder about the Qur’ān?", "Had it been from other than Allāh,", "Surely they would have found therein so", "Many contradictions."] },
        { type: "verse", number: 83, lines: ["When there comes to them{25} news", "Regarding public safety or fear [in", "The time of war], they spread it abroad", "[And cause panic], but if they had", "Referred it to the Messenger and to", "Those in authority from among them", "Who could draw the truth in it, they", "Would have explained the matter. And", "Were it not for the Favour and Grace of", "Allāh upon you [people], you would have", "Certainly followed Satan, save a few."] },
        { type: "verse", number: 84, lines: ["Then, fight [O, Messenger] in the Path of", "Allāh. You are not charged responsible", "Except for yourself; and encourage", "The believers [to fight along with you.] It", "May be that Allāh will restrain from you", "The evil might of the disbelievers; for", "Allāh is the Supreme-Powerful and", "The Supreme-Retributing."] },
      ],
    },
    {
      bookPage: 156,
      blocks: [
        { type: "verse", number: 85, lines: ["Whosoever intercedes for a good", "Cause, will have the reward thereof,", "And whosoever intercedes for an evil", "Cause, will have a share in its burden.", "And Allāh is the Overseer of", "Everything."] },
        { type: "verse", number: 86, lines: ["When you are greeted with a nice", "Greeting, greet in return, with a better", "One or return it [at least] with equal", "Courtesy. Surely, Allāh takes account of", "Everything."] },
        { type: "verse", number: 87, lines: ["There is no God but Allāh, and He will", "Surely gather you on the Day of", "Judgement, about which there is no", "Doubt. [This is Allāh’s Promise]", "And whose word is truer than", "Allāh’s?"] },
        { type: "verse", number: 88, lines: ["What has happened to you that", "You are two parties about", "The hypocrites?{26} Whereas, Allāh has", "Overthrown them for their evil deeds", "Do you intend to guide those whom", "Allāh [because of their disobedience] has", "Deprived from His Guidance? Those", "Whom Allāh has left in their astray, you", "[O, Messenger] shall never find for them", "A way [of guidance];"] },
        { type: "verse", number: 89, lines: ["They{27} wish that you should disbelieve as", "They disbelieved, so that you may be [all]"], continues: true },
      ],
    },
    {
      bookPage: 157,
      blocks: [
        { type: "verse", number: 89, lines: ["Alike. Therefore do not take friends", "From among them until they migrate in", "Allāh’s Way, but if they refused,", "Then seize them and slay them", "Wherever you find them and take none", "Of them as friend and helper;"], continued: true },
        { type: "verse", number: 90, lines: ["Except those who join a group, that", "Between you and them there is a", "Treaty [of peace] or those who", "Approach you with their hearts", "Restraining from fighting you, as well as", "Fighting their own folk; and if Allāh", "Had Willed, He would have given them", "Power over you, so certainly they", "Would have fought you; then if they", "Withdraw from you and do not fight", "Against you and offer you peace, then", "Allāh has not given you any reason", "[To fight] against them."] },
        { type: "verse", number: 91, lines: ["Soon you will find some others", "Who desire security from you as well as", "Security from their own people, [but]", "Every time they are called back", "To mischief they plunge into it; therefore", "If they do not withdraw from you and", "Not surrender seeking peace and nor", "Restrain their hands, then seize them", "And slay them wherever you find them;", "And [it is] against this type of people", "That We have given you an evident", "Authority."] },
        { type: "divider" },
      ],
    },
    {
      bookPage: 158,
      blocks: [
        { type: "verse", number: 92, lines: ["A believer should never kill a", "Believer unless it is by mistake; and", "Whosoever kills a believer by mistake", "Must set free a believing slave and", "Blood-wite should be paid to the family", "Of the killed person unless they remit it", "As a free-will offering. If the killed", "Person belongs to a people at war with", "You and he is a believer, then setting", "Free a believing slave is a duty. And if", "The killed person belongs to a people", "With whom you have a treaty, then", "Blood-wite is to be paid to his family", "And the slayer shall set free a believing", "Slave. And whoso finds this [freeing a", "Slave] beyond his ability, two months", "Fasting successively by way of", "Repentance to Allāh [is Ordained]; for", "Allāh is the Absolute Knowing Decreer;"] },
        { type: "verse", number: 93, lines: ["And whoever kills a believer", "Intentionally, his recompense is", "The Hell Fire, therein he will abide", "Forever, and the Wrath and Curse of", "Allāh shall be on him; and a Grave", "Chastisement is prepared for him [in", "The Hell.]"] },
        { type: "divider" },
        { type: "verse", number: 94, lines: ["O, you who believe! When you march", "Forth to fight in the Way of Allāh,", "Verify the truth and do not say to", "Anyone who offers you salutation: “You", "Are not a believer!” Seeking [by this,", "To possess] the perishable goods of"], continues: true },
      ],
    },
    {
      bookPage: 159,
      blocks: [
        { type: "verse", number: 94, lines: ["The worldly life; [if you look for wealth", "And booty], then with Allāh are more", "Treasures and booties. Even as he is", "Now [a new Muslim], you were", "Yourselves before; and Allāh bestowed", "On you His Favour.{28} Therefore discern", "You carefully [and treat people out of", "Knowledge]; verily, Allāh is", "The Aware of what you do."], continued: true },
        { type: "verse", number: 95, lines: ["Those of the Muslims who sat at home,", "Without any excuse or disablement, are", "Not equal with the believers who strive", "Hard and fight in the Path of Allāh with", "Their possessions and their lives. Allāh", "Has raised the grade of those who strive", "With their wealth and their lives, above", "Those sitting at home. To each one", "Allāh has promised the best,{29} but Allāh", "Has preferred those who strive and", "Fight by a great reward, above", "Those who sit at home and hold back;"] },
        { type: "verse", number: 96, lines: ["[For those who strive in the Path", "Of Allāh] degrees of higher grades and", "Forgiveness and Grace are bestowed", "From Allāh, and Allāh is the Merciful", "Forgiving."] },
        { type: "divider" },
      ],
    },
    {
      bookPage: 160,
      blocks: [
        { type: "verse", number: 97, lines: ["Verily, while the Angels [of death]", "Take away the soul of those who did", "Wrong to themselves, they [the Angels]", "Ask them:{30} “In what state were you in", "The world?” They shall reply: “We were", "Weakened and oppressed on the earth.”", "The Angels will say: “Was not the land", "Of Allāh vast enough for you to migrate", "Therein?” For such people their abode is", "The Hell; and what an evil destination!"] },
        { type: "verse", number: 98, lines: ["The exempted [regarding punishment]", "Are those who are really weak ones", "Among men, women and children and", "Who cannot devise a plan [and who have", "Not the means to run away from", "The disbelievers]; nor are they able to", "Direct their way;"] },
        { type: "verse", number: 99, lines: ["So, for these, there is hope that", "Allāh will forgive their sins and Allāh is", "The Absolving - Forgiver;"] },
        { type: "verse", number: 100, lines: ["He who migrates [from his home]", "In the Way of Allāh will find on", "The earth many dwelling places and", "Asylums, wide and spacious to live in.", "And whosoever leaves his home as an", "Emigrant to Allāh and His Messenger,", "And death overtakes him, then his", "Reward is surely with Allāh and", "Allāh is the Merciful Forgiving;"] },
      ],
    },
    {
      bookPage: 161,
      blocks: [
        { type: "verse", number: 101, lines: ["And when you, [Muslims] travel in", "The land, there is no sin on you, if you", "Shorten your prayers while you fear", "That the disbelievers may attack you;{31}", "Verily, the disbelievers are your open", "Enemies."] },
        { type: "verse", number: 102, lines: ["When you [O, Messenger] are", "Among your troops and lead", "Them in congregational prayer,{32} let", "One party of them stand up with you", "[In prayer] while taking their weapons", "With them; when they finish their", "Prostration, let them take their", "Positions in the rear and let", "The other party which has not yet", "Prayed, come up and pray with you,", "[They too] taking all the precautions", "And bearing arms. Those who", "Disbelieve, desire very much that you", "Be negligent of your arms and", "Baggages; thus they could attack you", "In a single rush. And there is no sin on", "You, [Muslims] if you put away your", "Arms because of the inconveniences", "Such as rain or illness, but take every", "Precaution. Surely, Allāh has prepared", "A humiliating Torment for", "The disbelievers;"] },
        { type: "verse", number: 103, lines: ["When you have finished", "[The congregational] prayer, [with due"], continues: true },
      ],
    },
    {
      bookPage: 162,
      blocks: [
        { type: "verse", number: 103, lines: ["Precautions in the battlefield]", "Celebrate Allāh’s Remembrance", "Standing, sitting or lying down on your", "Sides, but when you are free from", "Danger, offer regular prayers perfectly.", "Verily, the prayer is enjoined", "A timed prescription on the believers."], continued: true },
        { type: "verse", number: 104, lines: ["And do not slack in pursuit of", "Enemy; if you have suffered hardship", "Or pain, they, [the enemy] are suffering", "Too, but you have hope from Allāh", "Whereas they have not [because of", "Ignorance and lack of Faith] and Allāh", "Is the Knowing Decreer."] },
        { type: "divider" },
        { type: "verse", number: 105, lines: ["Verily, We have sent down to you", "[O, Messenger] this [Holy] Book in", "Truth, so that you may judge among", "Mankind by means of what Allāh has", "Guided and taught you; so do not be a", "Pleader for the treacherous ones;{33}"] },
        { type: "verse", number: 106, lines: ["And [O, Messenger!] seek forgiveness of", "Allāh; verily, Allāh is the Merciful", "Forgiving;"] },
        { type: "verse", number: 107, lines: ["And do not plead on behalf of"], continues: true },
      ],
    },
    {
      bookPage: 163,
      blocks: [
        { type: "verse", number: 107, lines: ["Those who betray themselves; verily,", "Allāh does not like any sinful traitor;"], continued: true },
        { type: "verse", number: 108, lines: ["They, [the sinful traitors] can hide", "Themselves from people, but they", "Cannot hide [their intentions] from", "Allāh: For Allāh, [the Knowing Hearer]", "Is with them while they hold nightly", "Discourses which displeases Him,", "Since Allāh’s Knowledge does", "Encompass all that they do;"] },
        { type: "verse", number: 109, lines: ["Behold! You are those who may", "Argue for these men in the life of this", "World, but who will contend with", "Allāh for them on the Day of", "Judgement, or who will then be", "Their defender [against the Divine", "Punishment?]"] },
        { type: "verse", number: 110, lines: ["And whoever does evil [i.e.,] wrongs", "Himself, but afterwards seeks Allāh’s", "Forgiveness, he will find that Allāh is", "The Merciful Forgiving;"] },
        { type: "verse", number: 111, lines: ["And whoever commits a sin,", "Commits it against himself and Allāh is", "The Knowing Judge;"] },
        { type: "verse", number: 112, lines: ["And whoever commits a fault or a", "Sin and casts [the blame] upon", "Some innocent person, he indeed", "Burdens himself with [both] a", "Falsehood and a flagrant sin;"] },
      ],
    },
    {
      bookPage: 164,
      blocks: [
        { type: "verse", number: 113, lines: ["Had it not been a Favour of Allāh", "And His Grace upon you", "[O, Messenger] a party among them", "Would certainly have decided to lead", "You astray [by causing you to defend", "The traitors], but they mislead none", "Except themselves; and no harm can", "They do to you in the least. Since", "Allāh has sent down to you the Book", "And the Divine Wisdom and has", "Taught you what you did not know;", "And Allāh’s Exclusive Favour on you is", "Highly great."] },
        { type: "divider" },
        { type: "verse", number: 114, lines: ["No good is in most of their", "Whisperings and secret talks; it is good", "If by this a person bids charity or", "Righteous deeds or reconciliation among", "People; and he who does this, seeking", "Allāh’s Pleasure, We shall soon give", "Him a great reward."] },
        { type: "verse", number: 115, lines: ["And whoever contradicts and", "Opposes the Messenger after", "The Right Path has been distinguished", "Clearly to him, and follows a way other", "Than the believers follow, We shall", "Keep him in the path he has chosen", "And send him to the Hell, and what an", "Evil place of return!"] },
        { type: "verse", number: 116, lines: ["Verily, Allāh does not forgive", "The sin of setting a partner with Him,", "But He forgives sins other than that", "For whom He Wills. And whoever sets"], continues: true },
      ],
    },
    {
      bookPage: 165,
      blocks: [
        { type: "verse", number: 116, lines: ["Up partners with Allāh, has indeed", "Strayed far away [from the Right Path];"], continued: true },
        { type: "verse", number: 117, lines: ["The pagans invoke in place of", "Allāh to nothing but female deities and", "They invoke to nothing but Satan,", "The persistent rebel;"] },
        { type: "verse", number: 118, lines: ["Allāh did curse Satan and he said: “I", "Will certainly make a good deal of", "Your believers follow me;"] },
        { type: "verse", number: 119, lines: ["“And Surely, I will mislead them and", "I will excite in them false desires;", "And certainly, I will order them", "To slit the ears of the cattle{34} and", "Indeed I will order them to change", "The nice nature created by Allāh.” So", "Whoever takes Satan as protector", "Instead of Allāh, he will surely suffer", "A severe loss;"] },
        { type: "verse", number: 120, lines: ["[Satan] Gives [the people]", "False promises and he excites vain", "Desires in them, but Satan’s promises", "Are nothing but delusion;"] },
        { type: "verse", number: 121, lines: ["The abode of Satan’s dupes", "Shall be the Hell and they shall have", "No way of escape from it."] },
        { type: "divider" },
        { type: "verse", number: 122, lines: ["Those who believe [in the Oneness of"], continues: true },
      ],
    },
    {
      bookPage: 166,
      blocks: [
        { type: "verse", number: 122, lines: ["Allāh] and do deeds of righteousness,", "We shall soon admit them to", "The Gardens, in which streams flow,", "To dwell therein forever. Allāh’s", "Promise is true, and whose word is", "Truer than Allāh’s?"], continued: true },
        { type: "verse", number: 123, lines: ["The Divine recompense will not be in", "Accordance with the desires of you,", "[Muslims], nor the desires of the people", "Of the Book: Whosoever does evil will", "Have the recompense accordingly and", "He will not find any protector or helper", "Besides Allāh;"] },
        { type: "verse", number: 124, lines: ["And whoever does deeds of", "Righteousness, whether male or female", "And is a true believer in the Oneness", "Of Allāh, such people will enter", "The Paradise; and not the least", "Injustice will be done to them."] },
        { type: "verse", number: 125, lines: ["And who is better in religion than", "The one who submits his heart totally", "To Allāh and he is also a good-doer", "And follows the Religion of Ibrāhīm,", "The True in Faith? And Ibrāhīm is", "The one whom Allāh did take as a", "Sincere friend."] },
        { type: "verse", number: 126, lines: ["And to Allāh belong all that is in", "The heavens and all that is on", "The earth; and Allāh’s Knowledge", "Encompasses all creatures and things."] },
        { type: "divider" },
      ],
    },
    {
      bookPage: 167,
      blocks: [
        { type: "verse", number: 127, lines: ["They ask your advice [O, Messenger!]", "Regarding the women. Say: “Allāh does", "Enjoin you about them; and remember", "What has been pronounced to you in", "The Book{35} regarding female orphans", "To whom you [men] do not give", "The portion prescribed for them{36} and", "Desire to marry them. And also Allāh", "Enjoins you concerning the weak and", "The oppressed children, and that you", "Should stand firm for securing justice", "To orphans. Whatever good deeds you", "Do, Allāh is the Well-Aware of it.”"] },
        { type: "verse", number: 128, lines: ["And if a wife fears cruelty or", "Desertion from her husband, there is", "No sin on them [both] if they decide", "Upon friendly settlement between", "Themselves [by overlooking some of", "Their rights], since making peace is", "Better. Human mind is captured", "By greed, but you [Muslims] should do", "Good and keep away from evil. Verily,", "Allāh is the Well-Aware of what you", "Do;"] },
        { type: "verse", number: 129, lines: ["You will never be able to regard", "Perfect justice [concerning love and", "Affection] among your wives even if it", "Be your serious desire; so do not", "Incline too much to one of them,", "So as to leave her [the other one]", "Hanging;{37} and if you establish peaceful"], continues: true },
      ],
    },
    {
      bookPage: 168,
      blocks: [
        { type: "verse", number: 129, lines: ["Relationship and employ piety", "[Know that] verily, Allāh is", "The Merciful Forgiving;"], continued: true },
        { type: "verse", number: 130, lines: ["But if they separate [by divorce],", "Allāh will provide abundance for each", "Of them from His unbounded Bounty;", "Since Allāh is the Source-Wisdom", "Bounteous."] },
        { type: "divider" },
        { type: "verse", number: 131, lines: ["And to Allāh belong all that is in", "The heavens and all that is on", "The earth. And We did enjoy to", "Those who were given the Scriptures", "Before you, as We did to you, [Muslims]", "That you all fear Allāh, and keep your", "Duty to Him, but if you disbelieve", "[Know that] Allāh is Free from the need", "Of man’s worship, since to Allāh", "Belong all that is in the heavens and", "All that is on the earth, and Allāh is", "The Independent Commender [Free from", "Any attachment];"] },
        { type: "verse", number: 132, lines: ["And Allāh’s is whatever in the heavens", "And whatever on the earth; and Allāh’s", "Protection is sufficient [for all", "Creatures];"] },
        { type: "verse", number: 133, lines: ["O, People! If Allāh Wills, He can", "Destroy you, and create another", "Generation in place of you; and for", "This Allāh has the Power."] },
        { type: "divider" },
      ],
    },
    {
      bookPage: 169,
      blocks: [
        { type: "verse", number: 134, lines: ["Whoever desires reward in the life of", "This world, then [he should know] with", "Allāh is the reward of this life as well", "As that of the Hereafter and Allāh is", "The Seeing Hearer."] },
        { type: "verse", number: 135, lines: ["O, you who believe! Be you securers of", "Justice, for Allāh’s Sake{38} even though", "It be against yourselves or your", "Parents or your kinsmen and whether", "The person be rich or poor; for Allāh is", "Closer to them [than you]; so do", "Not follow your hearts’ inclinations,", "Lest you may deviate from the Truth;", "So if you distort your witness or", "Refuse to give it, verily, Allāh is", "The Well-Informed of what you do. [So", "You will receive the due punishment]"] },
        { type: "verse", number: 136, lines: ["O, you Muslims! Believe in Allāh and", "His Messenger and the [Holy] Book", "Which He has sent down to His", "Messenger and the Scriptures which", "He sent down before [the Holy Qur’ān]", "And whosoever disbelieves in Allāh", "And His Angels and His Books and", "His Messengers and the Day of", "Resurrection, he has indeed gone", "Astray, far away from the Right Path.{39}"] },
      ],
    },
    {
      bookPage: 170,
      blocks: [
        { type: "verse", number: 137, lines: ["Verily, those who believed", "Thereafter disbelieved and again", "Believed and then increased their", "Disbelief, surely Allāh will not", "Forgive them, nor will guide them to", "The Right Way."] },
        { type: "verse", number: 138, lines: ["[O, Messenger!] Give glad-tidings", "To the hypocrites that for them there", "Shall be a Painful Torment;"] },
        { type: "verse", number: 139, lines: ["Those [hypocrites] who take", "Disbelievers for friends instead of", "Believers, do they seek honour{40}", "With them? Whereas indeed, to Allāh", "Belongs all the Honour;"] },
        { type: "verse", number: 140, lines: ["And it has already been revealed", "To you in the [Holy] Book{41} when", "You hear that Allāh’s Words of", "Revelation are being denied and", "Mocked at, then do not sit with them", "Unless they engage in another talk", "Than that, [but if you stayed with", "Them], you would certainly be", "Regarded like them. Verily, Allāh will", "Gather the hypocrites and", "The disbelievers in the Hell all", "Together;"] },
        { type: "verse", number: 141, lines: ["The [hypocrites] watch upon", "You: Then if there is a victory for you", "From Allāh, they say: “Were we not"], continues: true },
      ],
    },
    {
      bookPage: 171,
      blocks: [
        { type: "verse", number: 141, lines: ["With you?” [They demand their share]", "But if the disbelievers gain a victory,", "They say [to them]: “Did we not", "Acquire mastery for you by supporting", "You against the believers and did", "We not guard you against their", "Dominance?” Allāh will judge among", "You [and the hypocrites] on the Day of", "Resurrection; and Allāh will never", "Grant a way to the disbelievers [to", "Triumph] over the believers;"], continued: true },
        { type: "verse", number: 142, lines: ["Verily, the hypocrites seek", "To deceive Allāh, but Allāh throws", "Back their deceit to themselves. And", "When they stand up to prayer, they", "Stand with lousiness and [only] to be", "Seen by the people; and they are not", "Engaged in Allāh’s Remembrance save", "A little;"] },
        { type: "verse", number: 143, lines: ["They, [the hypocrites] are swaying", "Between this and that{42} belonging", "Neither to these nor to those; and he", "Whom Allāh leaves straying [because", "Of his wrongdoing], you [O, Messenger]", "Can never find a way for him."] },
        { type: "verse", number: 144, lines: ["O, you who believe! Do not take", "The disbelievers for friends rather than", "Believers; do you desire to give Allāh", "A clear proof against yourselves?"] },
      ],
    },
    {
      bookPage: 172,
      blocks: [
        { type: "verse", number: 145, lines: ["[O, Messenger!] Verily, the hypocrites", "Will be in the lowest stage of the Hell", "And you shall never find a helper for", "Them;"] },
        { type: "verse", number: 146, lines: ["Except those who repent and", "Amend themselves and hold fast to", "Allāh and purify their religion totally", "For Allāh, then they shall stand", "Alongside with the believers; and", "Allāh will grant the believers a", "Great reward."] },
        { type: "divider" },
        { type: "verse", number: 147, lines: ["Why should Allāh punish you if", "You are thankful [to Him] and you are", "A believer? And Allāh is", "The Knowing Appreciative."] },
        { type: "verse", number: 148, lines: ["Allāh does not like the shouting", "Of evil words except by one who has", "Been oppressed [and raises his voice", "Out of fury]; and Allāh is", "The Knowing Hearer."] },
        { type: "verse", number: 149, lines: ["If you do good openly or conceal", "It or if you pardon an evil act [you", "Will gain Allāh’s pleasure] verily, Allāh is", "The Powerful Forgiving: [He forgives", "Though He has power to take the utmost", "Revenge]"] },
        { type: "verse", number: 150, lines: ["Verily, those who disbelieve in", "Allāh and His Messengers and wish", "To consider separation among Allāh’s", "Messengers, saying: “We believe in"], continues: true },
      ],
    },
    {
      bookPage: 173,
      blocks: [
        { type: "verse", number: 150, lines: ["Some of them and disbelieve in", "Others,” intending to adopt a way in", "Between,"], continued: true },
        { type: "verse", number: 151, lines: ["Such are truly disbelievers, and We", "Have prepared for the disbelievers a", "Disgraceful Torment;"] },
        { type: "verse", number: 152, lines: ["But those who believe in Allāh", "And His Messengers and consider no", "Separation between the Messengers,", "Allāh shall soon give them", "Their rewards and Allāh is", "The Merciful Forgiving."] },
        { type: "divider" },
        { type: "verse", number: 153, lines: ["[O, Messenger!] The people of", "The Scripture ask you to get", "Descended a Book upon them from", "The sky; indeed they demanded of", "Mūssā a greater Miracle than that, for", "They said: “Show us Allāh manifestly,”", "[So that we can see Him with our own", "Eyes] whereupon they were struck", "With a thunderbolt for their", "Wickedness. Then they worshipped", "The calf, even after Clear Signs had", "Come to them; [nevertheless] We", "Forgave them and We bestowed upon", "Mūssā manifest proof of authority;"] },
        { type: "verse", number: 154, lines: ["And We lifted up the Tūr Mount", "Over them [to cause them fear", "From its collapse] while taking their", "Covenant and stated to them: “Enter", "The gate humbly” and We stated to"], continues: true },
      ],
    },
    {
      bookPage: 174,
      blocks: [
        { type: "verse", number: 154, lines: ["Them: “Do not violate the limits of", "The Sabbath”{43} and We took from them", "A firm covenant [regarding those", "Commandments];"], continued: true },
        { type: "verse", number: 155, lines: ["Then for their breaking the covenant", "And their disbelieving in the Signs and", "Miracles of Allāh and their slaying", "The prophets unjustly; and for their", "Saying: “Our hearts are wrapped with", "Coverings.”{44} [They were punished] and", "Allāh set a seal upon their hearts", "Because of their disbelief, so they do", "Not believe except a few of them;"] },
        { type: "verse", number: 156, lines: ["And this [setting a seal upon", "Their hearts] was due to their disbelief", "And for their uttering a grave slander", "Against Maryam;"] },
        { type: "verse", number: 157, lines: ["And this [setting a seal upon", "Their hearts] was because of their", "Saying braggingly: “We are those", "Who killed Īssā Massīh, son of Maryam,", "The Messenger of Allāh!” Whereas", "They neither killed him nor crucified", "Him; but the matter became dubious", "To them,{45} and those who differ therein,", "Are full of doubts; they have no", "Knowledge; they follow nothing but", "Conjecture; and certainly they did not", "Slay him,"] },
      ],
    },
    {
      bookPage: 175,
      blocks: [
        { type: "verse", number: 158, lines: ["But Allāh raised him up to Himself, and", "Allāh is the Source Wisdom", "Supremepower;"] },
        { type: "verse", number: 159, lines: ["And there shall not be any one of", "The people of the Scripture, but must", "Certainly believe in him{46} before they", "Meet their death; and on the Day of", "Resurrection, he will be a witness", "Against them [as their Prophet];"] },
        { type: "verse", number: 160, lines: ["For the wrongdoing of the Jews", "And their barring many people from", "Allāh’s Way, We made forbidden to", "Them certain good foods [such as flesh", "Of the camel and rabbit] which had", "Been lawful to them before;"] },
        { type: "verse", number: 161, lines: ["[Also the punishment was due", "To] their taking usury, though they", "Were forbidden; and for their", "Consuming people’s wealth and", "Property wrongfully; and We have", "Prepared for the disbelievers among", "Them a painful Torment;"] },
        { type: "verse", number: 162, lines: ["But those among them who are", "Firmly rooted in the Divine Knowledge", "And believe in what has been sent", "Down to you [O, Messenger] and what", "Was sent down before you; and those", "Who perform prayers regularly", "And pay alms and believe in Allāh and in", "The Day of Resurrection, to all of them,"], continues: true },
      ],
    },
    {
      bookPage: 176,
      blocks: [
        { type: "verse", number: 162, lines: ["We shall surely give a great reward."], continued: true },
        { type: "divider" },
        { type: "verse", number: 163, lines: ["[O, Messenger!] We revealed to you as", "We did reveal to Nūh and Messengers", "After him; We revealed to Ibrāhīm", "And Ismāīl and Isshāq and Ya‘qūb, and", "The Tribes and Īssā and Ayyūb and", "Yūnus and Hārūn, and Solaimān, and", "We gave Dāwūd the Psalms;"] },
        { type: "verse", number: 164, lines: ["And some Messengers We have", "Mentioned to you before and some of", "Them We have not mentioned to you", "Yet, and to Mūssā Allāh spoke", "Directly;"] },
        { type: "verse", number: 165, lines: ["Messengers were as bearers of glad", "Tidings [for the believers] as well as", "Warners [for the disbelievers] in order", "That mankind should not have", "Argument against Allāh [concerning", "Their lack of knowledge] after sending", "The Messengers; and Allāh is", "The Source-Wisdom Supremepower;"] },
        { type: "verse", number: 166, lines: ["But Allāh bears witness that what He", "Has sent down{47} to you [O, Messenger],", "Has revealed it from His Own", "Absolute Knowledge, and the Angels", "Bear witness [to this Truth] though", "Allāh’s Witness is sufficient."] },
        { type: "divider" },
      ],
    },
    {
      bookPage: 177,
      blocks: [
        { type: "verse", number: 167, lines: ["Verily, those who disbelieved and", "Barred people from Allāh’s Way, they", "Have certainly strayed far away from", "The Right Path;"] },
        { type: "verse", number: 168, lines: ["Verily, those who disbelieved and", "Did wrong, Allāh will not forgive them,", "Nor will He guide them to any way,"] },
        { type: "verse", number: 169, lines: ["Except the way to the Hell, to stay", "Therein forever; and this is easy", "To Allāh."] },
        { type: "divider" },
        { type: "verse", number: 170, lines: ["O, people! Verily, there has come to", "You the [promised] Messenger with", "The Truth from your Creator&Nurturer, so", "Believe in him [and] it is better for", "You if you did, but if you disbelieve,", "[It makes no difference], since", "Certainly to Allāh belong all that", "Is in the heavens and on the earth;", "And Allāh is the Absolute Knowing", "Sovereign."] },
        { type: "verse", number: 171, lines: ["O, people of the Scripture! Do not", "Exaggerate about your religion and do", "Not say about Allāh except the Truth:", "Verily, Īssā Massīh, son of Maryam, is", "Only a Messenger of Allāh and was", "Created by Allāh’s Word of", "Command,{48} which He conveyed to", "Maryam, and he was a spirit"], continues: true },
      ],
    },
    {
      bookPage: 178,
      blocks: [
        { type: "verse", number: 171, lines: ["Proceeding from Allāh; believe", "Therefore in Allāh and His Messengers", "And do not say: “There are three", "Gods.” Desist! It is good for you. [If", "You stop saying so]; verily, Allāh is", "The One and the only God; He is", "Exalted above having a son [as", "The disbelievers claim.] To Allāh", "Belong whatever is in the heavens and", "Whatever is on the earth. Allāh is", "Sufficient as the Guardian [for all", "Creatures]."], continued: true },
        { type: "verse", number: 172, lines: ["Massīh does not disdain to be an", "Obedient worshipper to Allāh, nor do", "The Angels who are close to Allāh;", "And whosoever rejects worshipping of", "Allāh and shows arrogance, [he should", "Know that] Allāh will gather them [on", "The Resurrection Day], all together;"] },
        { type: "verse", number: 173, lines: ["But for those who believed [in", "The Oneness of Allāh] and did deeds of", "Righteousness, He will give their due", "Rewards and even more, out of His", "Favour; but as for those who refused", "His worshipping and showed", "Arrogance, Allāh will punish them with", "A painful Torment; and they will not", "Find besides Allāh any Guardian or", "Helper."] },
        { type: "verse", number: 174, lines: ["O, people! Verily, there has come", "To you a Decisive Proof from your", "Creator&Nurturer and We sent down"], continues: true },
      ],
    },
    {
      bookPage: 179,
      blocks: [
        { type: "verse", number: 174, lines: ["To you a Light which is manifest.{49}"], continued: true },
        { type: "verse", number: 175, lines: ["So as for those who believed in", "Allāh and held fast to Him, Allāh will", "Soon admit them to His Grace and", "Favour and will guide them to Himself", "Through the Straight Path."] },
        { type: "divider" },
        { type: "verse", number: 176, lines: ["They will ask you [O, Messenger!] for a", "Decree about Kalālah,{50} say to them:", "“Allāh directs you about a man who", "Dies and there is no offspring for him", "And for him is a sister, for her shall be", "Half of what he leaves; and if", "The deceased was a woman, then her", "Brother shall be her heir, if there is", "Not a son for her; and if there are two", "Sisters, then for each of them shall be", "Two thirds of what he leaves; and if", "There are brothers and sisters,", "The male will have twice the share of", "The female.” Thus does Allāh make", "Clear to you His Words of Decrees", "To prevent you from going astray. And", "Allāh is The Absolute Knower of all", "Things."] },
      ],
    },
  ],
  footnotes: [
    { id: 1, blocks: [{ kind: "p", text: "‘Ādam" }] },
    { id: 2, blocks: [{ kind: "p", text: "Hav‘vā (Eve)" }] },
    { id: 3, blocks: [{ kind: "p", text: "To maintain respect with the relatives and to attend to the affairs of the needy ones of them." }] },
    { id: 4, blocks: [{ kind: "p", text: "Reference is to the property of the feeble-minded orphans which is under the control of the guardian; thus he is allowed to trade with it in order to increase the capital. (Commentators)" }] },
    { id: 5, blocks: [{ kind: "p", text: "Disabled, mentally retarded or ill" }] },
    { id: 6, blocks: [{ kind: "p", text: "A custom of the Time of Ignorance according to which a step-son could take possession of a dead man’s widow or widows along with his properties; and their marriage was without any marriage-portion." }] },
    { id: 7, blocks: [{ kind: "p", text: "Marriage-portion" }] },
    { id: 8, blocks: [{ kind: "p", text: "A custom of the Time of Ignorance" }] },
    { id: 9, blocks: [{ kind: "p", text: "Some of Allāh’s Attributes stand as example for man’s self-cultivation; hence, Merciful stands against, harsh, cruel and injust." }] },
    { id: 10, blocks: [{ kind: "p", text: "Chastity, husband’s property and honour" }] },
    { id: 11, blocks: [{ kind: "p", text: "As lightly as ‘Ayūb was Commanded: to punish his wife only with a delicate grass or plant: 38:44" }] },
    { id: 12, blocks: [{ kind: "p", text: "Mainly those who do not pay alms and also hinder other people from paying it." }] },
    { id: 13, blocks: [{ kind: "p", text: "This ceremony is called Tayammom; when water is not found or likely to do harm [in the case of being ill] Tayammom stands instead of ablution before prayer." }] },
    { id: 14, blocks: [{ kind: "p", text: "Taurāt and Injīl are referred to as ‘portion of the Book’ because the Perfect and Final Book of Religion in Allāh’s Sight is the Holy Qur’ān which is for all ages and for mankind throughout the world." }] },
    { id: 15, blocks: [{ kind: "p", text: "By using Hebrew accent, it means: ‘Make fool of us!’" }] },
    { id: 16, blocks: [{ kind: "p", text: "And they became monkies 2:65" }] },
    { id: 17, blocks: [{ kind: "p", text: "The Holy Messenger and his Mission" }] },
    { id: 18, blocks: [{ kind: "p", text: "The Shīah Commentators agree upon the Infallible Imāms as the Divine Authorities of whom, Ali (A.S), the Successor of the Holy Messenger by Allāh’s Command is regarded the first." }] },
    { id: 19, blocks: [{ kind: "p", text: "The hypocrites" }] },
    { id: 20, blocks: [{ kind: "p", text: "Reference is made to the story of calf-worshipping of the Jews at the Time of Mūssā. 2:54" }] },
    { id: 21, blocks: [{ kind: "p", text: "Victory or war spoils" }] },
    { id: 22, blocks: [{ kind: "p", text: "Makkah City" }] },
    { id: 23, blocks: [{ kind: "p", text: "The hypocrites" }] },
    { id: 24, blocks: [{ kind: "p", text: "Like Mūssā’s folk, whatever misfortune came to them they ascribed it to him (7:131)" }] },
    { id: 25, blocks: [{ kind: "p", text: "The hypocrites" }] },
    { id: 26, blocks: [{ kind: "p", text: "Due to the desertation of the hypocrites at Uhud there was a great feeling of Muslims of Madīnah against them. One party wanted to put them to the sword and another wanted to leave them alone. (A.Y)" }] },
    { id: 27, blocks: [{ kind: "p", text: "The hypocrites" }] },
    { id: 28, blocks: [{ kind: "p", text: "Before being guided to Islām by Allāh" }] },
    { id: 29, blocks: [{ kind: "p", text: "Paradise is bestowed to every righteous believer, but a believer who takes part in the war against the enemies of Allāh’s Path, he will receive a special reward apart from being admitted to the Gardens of Paradise." }] },
    { id: 30, blocks: [{ kind: "p", text: "Those who refused to migrate and to take part in fighting against the enemies of Allāh’s Way." }] },
    { id: 31, blocks: [{ kind: "p", text: "At the beginning, shortening of the prayer, following the Divine Decree, was due to the attack of the disbelievers on the Muslims; later the Holy Messenger practiced the shortened prayers while in a journey." }] },
    { id: 32, blocks: [{ kind: "p", text: "Performance of the congregational prayer under fear, in face of the enemy as revealed to the Messenger (S.A) from Allāh the Grace-Bestower." }] },
    { id: 33, blocks: [{ kind: "p", text: "Tāmat-ibn-e-Ubairaq a Muslim, yet hypocrite and corrupt stole a set of armour and entrusted the stolen property in the house of a Jew where it was found. Tāmah accused the Jew of the theft. The case was taken to the Holy Messenger. The tribe of the thief introduced many witnesses against the Jew to remove the scandal from their tribal honour. The Holy Messenger was about to be convinced by so many evidence as well as his sympathy for a Muslim, when this Word of Revelation was sent down from Allāh, The Supreme Judge." }] },
    { id: 34, blocks: [{ kind: "p", text: "To cause the lawful become forbidden, according to the pagans’ custom." }] },
    { id: 35, blocks: [{ kind: "p", text: "The Holy Qur’ān" }] },
    { id: 36, blocks: [{ kind: "p", text: "Their heritage; in the Time of Ignorance women and children were deprived of any heritage." }] },
    { id: 37, blocks: [{ kind: "p", text: "Neither divorced nor married" }] },
    { id: 38, blocks: [{ kind: "p", text: "Be bearer of witness according to Allāh’s Decrees" }] },
    { id: 39, blocks: [{ kind: "p", text: "Those who have chosen Islām over the disbelief are reminded of the comprehensive meaning of Faith which is close to the heart before expressed by the tongue." }] },
    { id: 40, blocks: [{ kind: "p", text: "Power or glory" }] },
    { id: 41, blocks: [{ kind: "p", text: "See 6:68" }] },
    { id: 42, blocks: [{ kind: "p", text: "Between the believers and the disbelievers" }] },
    { id: 43, blocks: [{ kind: "p", text: "Saturday" }] },
    { id: 44, blocks: [{ kind: "p", text: "Implying that they could not understand the words of the Truth, uttered by the Holy Messenger." }] },
    { id: 45, blocks: [{ kind: "p", text: "By Allāh’s Command the resemblance of Īssā was put over another man and they killed that man." }] },
    { id: 46, blocks: [{ kind: "p", text: "Īssā Massīh (Jesus Christ)" }] },
    { id: 47, blocks: [{ kind: "p", text: "The Holy Qur’ān" }] },
    { id: 48, blocks: [{ kind: "p", text: "Kalemat Allāh means: A Creature of Allāh’s Word of Command, i.e., ‘Be!’. Massīh son of Maryam, without having a father came to existence by Allāh’s Word of Command: When Allāh Decides something to be, He only states to it: ‘Be!’ and then it comes to existence. (36:82)" }] },
    { id: 49, blocks: [{ kind: "p", text: "The Holy Qur’ān" }] },
    { id: 50, blocks: [{ kind: "p", text: "A deceased person who has neither offspring nor parents." }] },
  ],
};

export default surah;
