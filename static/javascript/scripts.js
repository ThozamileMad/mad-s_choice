const statImgs = document.querySelectorAll(".stat-img");
const stats = document.querySelectorAll(".stat");
const statTexts = document.querySelectorAll(".stat-text");
const statReductionTexts = document.querySelectorAll(".stat-reduction");

const imgStoryDiv = document.querySelector(".img-story-div");
const storyImg = document.querySelector(".story-img");
const paragraphs = document.querySelectorAll(".story p"); // array of paragraph elements
const buttons = document.querySelectorAll(".buttons button"); // array of button elements
const buttonIcons = document.querySelectorAll(".button-icon"); // array of button icons
const storyImgDiv = document.querySelector(".story-img-div");

const data_dict = [
 {
   reduction_values: [0, 0, 0, 0],
   imgstorydiv_display: "block",
   img_width: "100%",
   img_height: "100%",
   img_display: "none",
   img_url: "",
   paragraphs: [
                "Oh! The Gods shall cast me into hell for recruiting this lunatic - Victor. This psychotic animal just mutilated Horin's wife and child. Currently we're attempting to loot coin from Horin's keep. So far the paralysis spell that I have been harnessing for 2 weeks has been effective. All of Horin's men lie helplessly on the ground as we seek his hold. Immediately after Horin's diabolical act Horin's men begin cursing, screaming and weeping clamorously from the floor. \"You psychotic fool, have you the slightest capacity to think! Unbelievable, with your bare hands a woman and a child! When we're finished here I'll return you to the hell you came from! Mark my words!",

"I roar with uncontrollable fury. \"You would cry for a degenerate harlot and her filthy offspring, spare me the nonsense Sigarus, now let's get to work.\" he remarks smugly with a sick smile on his face, as much as I wanted to slaughter him I couldn't. Time was against us. We had to make haste and find Horin's fortune,  lest he returns with his witch or the spell that I spent almost all my mana harnessing, dissipates. \"Have you forgotten why we're here. Search for treasure you fool! I need not remind you who this fortress belongs to.\" I remark. He laughs without a shred of concern and responds, \"Very well then conduct a search on this floor and I'll take to the stairs.\"",

		"",

		""
	       ],
    p_displays: ["block", "block", "none", "none"],
    button_displays: ["block", "", "", ""],
    button_texts: ["Continue", "", "", ""],
    button_functions: [triggerPage2, "", "", ""],
  },
 {
   reduction_values: [0, 0, 0, 0],
   imgstorydiv_display: "block",
   img_width: "100%",
   img_height: "500px",
   img_display: "inline",
   img_url: "https://th.bing.com/th/id/R.f04681f050c14fa43e269942f5b9c4cc?rik=iesS38htabYkaw&pid=ImgRaw&r=0",
   paragraphs: [
                "I step over numerous angry guards on the floor and make my way into a passage with burning lanterns, illuminating the path. Ahead I see an expensive looking door with a sophisticated design. <em>That must be an important room</em>, I think to myself as I observe it's splendor. \"Whoever you are know this, your foolishness will be your undoing, Horin shan't rest until you're dead, so breathe while you still can thief, death looms closely upon you like a shadow.\", stated fearlessly by a massive guard lying vulnerably on his back in front of the door with a large keychain, tied to his belt.",
		
		"",

		"",

		""
	       ],
    p_displays: ["block", "none", "none", "none"],
    button_displays: ["block", "block", "block", ""],
    button_texts: ["Take the keys peacefully <img class='button-icon' src='https://cdn-icons-png.flaticon.com/512/2647/2647318.png' alt=''>", "Take the keys violently <img class='button-icon' src='https://cdn-icons-png.flaticon.com/512/2099/2099808.png' alt=''>", "Take the keys dishonorably <img class='button-icon' src='https://cdn-icons-png.flaticon.com/512/9926/9926885.png' alt=''>", ""],
    button_functions: [triggerPage3, triggerPage4, triggerPage5, ""],
  },
  {
   reduction_values: [0, 0, 3, 0],
   imgstorydiv_display: "block",
   img_width: "",
   img_height: "",
   img_display: "none",
   img_url: "",
   paragraphs: [
                "\"You know I could kill you right now - Henry.\" I remark, staring at him after lowering myself to grab the keychain. He flinches in surprise and asks, \"How the hell do you know my na...\" before he can finish I interupt him, \"However I shall not, for I know your beautiful wife - Pholia prepares a delicious stew for you and your children Hagrid and Haros in the city of Ozagra, waiting ever so patiently for your return.\" he grows quiet, overwhelmed by my knowledge. \"So heed me. Renounce your service to Horin, return to your wife and savour your moments with her, because the man you speak so proudly of would not hesitate to pull out his cock and mount her at first sight, then he would slaughter your children and dispose of them in the nearest river.\" I release the keychain from his belt and make my way to the door.",
		
		"",

		"",

		""
	       ],
    p_displays: ["block", "none", "none", "none"],
    button_displays: ["block", "none", "none", "none"],
    button_texts: ["Continue"],
    button_functions: [triggerPage6, "", "", ""],
  },
  {
   reduction_values: [0, 0, -5, 0],
   imgstorydiv_display: "block",
   img_width: "",
   img_height: "",
   img_display: "none",
   img_url: "",
   paragraphs: [
                "\"I'm afraid your wrong my friend. The shadow of death looms upon you.\" I say venomously then reach for his neck as I unsheath a dagger underneath my robe. His eyes become wide with fear as he desperately tries to move, but he is unable to due to the paralysis spell. I hold the dagger against his throat and slice it open causing to blood stream out, forming a dark red pool of blood around him that stains my boots. After he stops gurgling to death I unfasten the keys from his belt with my bloody hands and proceed towards the door.",
		
		"",

		"",

		""
	       ],
    p_displays: ["block", "none", "none", "none"],
    button_displays: ["block", "none", "none", "none"],
    button_texts: ["Continue"],
    button_functions: [triggerPage6, "", "", ""],
  },
  {
   reduction_values: [0, 0, -2, 0],
   imgstorydiv_display: "block",
   img_width: "",
   img_height: "",
   img_display: "none",
   img_url: "",
   paragraphs: [
                "I smile with immense glee and position myself beside him. \"Just what are your intentions fool.\" He asks with a quivering voice. I reach into my pants and withdraw my manhood, \"Get away from me you, away I say!\" then with a long sigh I release a stream of urine upon him. \"You bastard! I shall end you - you abomination! You...\" most of his pathetic threats is garbled by my piss. After draining the dragon I wiggle a little and return it to it's lair. \"You repulsive lunatic! How dare you defile me in such a manner, your audacity is infuriating! I'll murder you! You filthy animal do you hear me you thief! I'll murder you!\" I burst out into laughter, ambling towards the door after removing the keychain from his belt.",
		
		"",

		"",

		""
	       ],
    p_displays: ["block", "none", "none", "none"],
    button_displays: ["block", "none", "none", "none"],
    button_texts: ["Continue"],
    button_functions: [triggerPage6, "", "", ""],
  },
  {
   reduction_values: [0, 0, 0, 0],
   imgstorydiv_display: "block",
   img_width: "",
   img_height: "",
   img_display: "none",
   img_url: "",
   paragraphs: [
                "I open the door and come upon the gory sight of a dead man in the middle of the room suspended in the air above a blood drawn pentagram by chains running from the ceiling, binding his wrists together. The man is naked and covered with symbols, on his left is a table with a book, parchment, a pouch and a chest on top of it. Taking full account of the room, I observe all of the perculiarities within, there are strange blood drawn symbols on the walls and horrifically long arms with black-clawed hands, clutching weapons, stick out of the ceiling. ",
		
		"These things are clustered like an upside down field of flowers and seem to be alive, swinging the weapons they wield. <em>The air inside this room is heavy with magic, this does not bode well for me, I need to be quick in this endeavor,</em> I think to myself. How should I procure the items on the table? I have two options here: should quickly dash over and grab the items or should I be cautious and move slowly which could allow me to assess the situation and cast a shield spell if need be.",

		"",

		""
	       ],
    p_displays: ["block", "block", "none", "none"],
    button_displays: ["block", "block", "none", "none"],
    button_texts: ["Move quickly <img class='button-icon' src='https://cdn-icons-png.flaticon.com/512/4357/4357645.png' alt=''>", "Move slowly (Mana -2) <img class='button-icon' src='https://cdn-icons-png.flaticon.com/512/826/826908.png' alt=''>", "", ""],
    button_functions: [triggerPage7, triggerPage8, "", ""],
  },
  {
   reduction_values: [-2, 0, 0, 0],
   imgstorydiv_display: "block",
   img_width: "",
   img_height: "",
   img_display: "none",
   img_url: "",
   paragraphs: [
                "Without a second thought I dash towards the table. The menacing hands above flinch, reacting to my presence and start hurling the weapons. A barrage of various weapons come down at me, I manage to evade some of them by sidestepping, although some of them cut me as I run. I reach the table - quivering as I gather my wits, then after regaining my composure I realise that the hands have stopped their attack and are swaying gently seemingly unaware of me.",
		
		"",

		"",

		""
	       ],
    p_displays: ["block", "none", "none", "none"],
    button_displays: ["block", "none", "none", "none"],
    button_texts: ["Continue", "", "", ""],
    button_functions: [triggerPage9, "", "", ""],
  },
  {
   reduction_values: [0, -2, 0, 0],
   imgstorydiv_display: "block",
   img_width: "",
   img_height: "",
   img_display: "none",
   img_url: "",
   paragraphs: [
                "Slowly I take cautious steps into the room, then I notice the moving arms above tensing up as if they grew aware of my presence. Instantaneously I cast a sheild a over myself as they start to hurl their weapons downwards at me. The projectiles deflect off my shield and clatter on the floor as I move towards the table. After reaching the table I realise that the hands have stopped their attack and are swaying gently seemingly unaware of me.",
		
		"",

		"",

		""
	       ],
    p_displays: ["block", "none", "none", "none"],
    button_displays: ["block", "none", "none", "none"],
    button_texts: ["Continue", "", "", ""],
    button_functions: [triggerPage9, "", "", ""],
  },
  {
   reduction_values: [0, 0, 0, 46],
   imgstorydiv_display: "block",
   img_width: "",
   img_height: "",
   img_display: "none",
   img_url: "",
   paragraphs: [
                "The area around the suspended man and the table I'm standing on seems to be a safe zone, which explains why the fiends have halted their assault. I direct my attention to the table and start rummaging through the items on top of it. I grab the pouch of coins  and place it in my satchel, then I open the strange onyx book with a blank cover, \"This is probably one of the witch's unholy spell books. It could be cursed.\" I think to myself hesitantly, but curiosity gets the best of me so I take it and stash it in my satchel.",
		
		"In addition to the coin pouch and the occulant book, there also lies parchment as well as a locked chest atop the table. I pick up the parchment and start reading it's contents. <em>\"The keys to the vessel are 'Syitos cata'.\"</em> what a short message. I deduce that to open the chest, I must utter these words. <em>\"Syitos cata!\"</em> I exclaim, directly at the chest. The chest goes through a short process, producing metallic sounds within itself as if a key was being turned inside the lock. I place the parchment back onto the table and peer into the chest.",

		"I flinch in shock and disgust upon discovering a lively head within the chest. It has a pale face without eyes and dark hair crawling with insects. <em>\"You there, take me with you if you wish to leave this room with a beating heart.\"</em> the head threathens. This is rather bizarre, I didn't notice before but the corpse suspended above the celing is in fact headless and upon closer inspection, I notice that the symbols scrawled on the head's body are runes, and not just any runes, they are distict runes used to summon power from the underworld which explains why so much dark mana is radiating from this abomination. Whoever wrote that message must have done something unspeakable - a ritual of sorts. This head or whatever it is, is oozing with dark mana I have to be careful which choice I make: I could make a break for it or burn it with an flame spell.",

		""
	       ],
    p_displays: ["block", "block", "block", "none"],
    button_displays: ["block", "block", "none", "none"],
    button_texts: ["Close the chest and get out of here! <img class='button-icon' src='https://cdn-icons-png.flaticon.com/512/4357/4357645.png' alt=''>", "Burn the damn thing! (Mana -1) <img class='button-icon' src='https://cdn-icons-png.flaticon.com/512/3898/3898712.png' alt=''>", "", ""],
    button_functions: [triggerPage10, triggerPage11, "", ""],
  },
  {
   reduction_values: [-100, 0, 0, 0],
   imgstorydiv_display: "block",
   img_width: "100%",
   img_height: "500px",
   img_display: "inline",
   img_url: "https://i.pinimg.com/originals/be/1d/01/be1d01feee38f86501ee8abac3e9d99e.jpg",
   paragraphs: [
                "I slam the chest shut and make a break for it. The head lets out a unsettling chuckle from inside the chest, then the door I came through closes and the hands above retract vanishing from the ceiling. Something behind me bites my neck, then suddenly I become breathless and my chest tightens as I start feel something within me sapping my strength. I fall to the floor writhing, then shortly after a hot-blinding pain develops in my abdomen. My vision falters, becoming blurry just as something astoundingly long bursts out of my stomach. I start to lose consciousness until, finally I succumb to my wounds.",
		
		"",

		"",

		""
	       ],
    p_displays: ["block", "none", "none", "none"],
    button_displays: ["block", "none", "none", "none"],
    button_texts: ["Restart", "", "", ""],
    button_functions: [triggerPage1, "", "", ""],
  },
  {
   reduction_values: [0, -1, 3, 0],
   imgstorydiv_display: "block",
   img_width: "70%",
   img_height: "325px",
   img_display: "inline",
   img_url: "https://i.pinimg.com/originals/e7/0f/90/e70f90478d49a88c10805e290b4f5f38.gif",
   paragraphs: [
                "\"Burn you wretched creature!\" I exclaim, releasing a burst of flames in the chest then closing it afterwards as the fiend screeches in agony. Fortunately the arms on the ceiling retract into the ceiling and vanish. Without a moment's hesitation I rush out of the room. <em>I hope Victor's finished upstairs, whoever was responsible for this ritual is not skilled at the craft. If I had to guess it's probably the witch's apprentice, Wilso did tell me that Horin's witch has someone working under her wing. I shudder to think how I would have fared against the fiend if the ritual had performed by a adept spellcaster.</em>",
		
		"",

		"",

		""
	       ],
    p_displays: ["block", "none", "none", "none"],
    button_displays: ["block", "none", "none", "none"],
    button_texts: ["Continue", "", "", ""],
    button_functions: [triggerPage12, "", "", ""],
  },
  {
   reduction_values: [0, 0, 0, 0],
   imgstorydiv_display: "block",
   img_width: "",
   img_height: "",
   img_display: "none",
   img_url: "",
   paragraphs: [
                "\I return to the main lobby to rendezvous with Victor. To find him executing the helpless guards with his sword. \"Finally you have arrived Sigarus, my hands grow tired from this mundane task so unsheathe your sword and assist me.\" he remarks, then laughs with bloody face.",
		
		"",

		"",

		""
	       ],
    p_displays: ["block", "none", "none", "none"],
    button_displays: ["block", "none", "none", "none"],
    button_texts: ["Continue", "", "", ""],
    button_functions: [triggerPage13, "", "", ""],
  },
  {
   reduction_values: [0, 0, 0, 0],
   imgstorydiv_display: "block",
   img_width: "",
   img_height: "",
   img_display: "none",
   img_url: "",
   paragraphs: [
                "\"Let's slay them all before your spell reaches it's limit.\" Victor suggests. \"What is the matter with you Victor, find your sanity! It is rumoured that Horin's witch utilizes forbidden curses to summon fiends from the underworld itself, and I'd wager that she's wicked enough to bewitch even those that lick her feet.\" Victor simply laughs after I make this assertion. \"You expect me to believe such foolish fabrications, made by the general public, that speak of pigs dancing and suns falling.\" He jests.",
		
		"\"If you slay even one of them there is a chance that you'll summon an abomination, ergo I implore you once more, to cure yourself of insanity.\" I ask him, he pauses for a second then replies. \"From my perspective mage, we have a greater chance of escaping if all these men are dead and I am willing to chance it, do you understand, if it ensures my survival then anything is necessary even murder.\" He proclaims stubbornly then he swings his long sword and positions himself, preparing to kill yet another guard as he holds it above the guard below him. Looking down at Victor's target I notice that he bears the same occulant symbols as the headless body that I had discovered moments ago and for some strange reason this guard is smiling very ominously...",

		"",

		""
	       ],
    p_displays: ["block", "block", "none", "none"],
    button_displays: ["block", "none", "none", "none"],
    button_texts: ["Continue", "", "", ""],
    button_functions: [triggerPage14, "", "", ""],
  },
  {
   reduction_values: [0, 0, 0, 0],
   imgstorydiv_display: "block",
   img_width: "",
   img_height: "",
   img_display: "none",
   img_url: "",
   paragraphs: [
                "Victor brings his sword down plunging it into the man's chest. Another puddle of blood starts to form as the man starts whispering. Victor stares at the man in confusion then shortly after the man ceases whispering. I start to feel an immense release of mana, \"Heavens no! Victor he's try to...\" but before I can warn him the man's corpse starts levitating and a powerful force repels him to the far side of the room. As I foresaw, the witch has bewitched her subordinates with necromancy.",
		
		"A curse activated the moment Victor killed the guard and the effects of the curse were starting to show. His bones started shifting and bulging within his flesh. As they rearranged themselves and disconcertingly began jutting out of him. Spurting thick-wet blood out of the his entire body which began trickling down the protruding bones. A long black slender arm, with a clawed hand bursts out of the corpse's torso, sloshing with gore as it feels the air around it, followed by another through the dead man's back. Afterwards an enormous bulge starts stretching the man's neck, ripping it slowly then forcefully a bloody-screaming head bursts from the man's mouth, shattering his jaw and tearing his neck asunder. \"Victor awaken now! the man before us transforms - into a demon.\"",

		"",

		""
	       ],
    p_displays: ["block", "block", "none", "none"],
    button_displays: ["block", "none", "none", "none"],
    button_texts: ["Continue", "", "", ""],
    button_functions: [triggerPage15, "", "", ""],
  },
  {
   reduction_values: [0, 0, 0, 0],
   imgstorydiv_display: "block",
   img_width: "100%",
   img_height: "fit-content",
   img_display: "inline",
   img_url: "https://nextluxury.com/wp-content/uploads/17-Scary-Mythical-Creatures-To-Give-You-the-Heebie-Heebies.jpg",
   paragraphs: [
                "The fiend sinks it's claws into the corpse's head and mouth. Ripping it's body apart, slowly peeling it off itself trying itself from the the flesh, then the creature starts falling from where the corpse hovers, plummeting onto the floor, along with the dead man's thick mass of blood and entrails, which dangle from the creature's slender frame as it scrambles, struggling to get onto it's clawed feet on the slippery pool of blood and flesh beneath it, then it roars in exasperation.",
		
		"The bloody-repulsive demon opens it's greatly fanged mouth, releasing it's enormous, black tongue and hastily devours all the residual flesh dangling on it. Afterwards it staggers forward and rushes towards me at a terrifying speed. I recognise this creature from encyclopedia of beasts, it's known as an Ocxue Ripper and are often described as agile. I have a two choices you could cast a firebolt or cast a shield?",

		"",

		""
	       ],
    p_displays: ["block", "block", "none", "none"],
    button_displays: ["block", "block", "none", "none"],
    button_texts: ["Cast Firebolt (Mana -2) <img class='button-icon' src='https://cdn-icons-png.flaticon.com/512/3898/3898712.png' alt=''>", "Cast Sheild (Mana -2) <img class='button-icon' src='https://cdn-icons-png.flaticon.com/512/9414/9414678.png' alt=''>", "", ""],
    button_functions: [triggerPage16, triggerPage17, "", ""],
  },
  {
   reduction_values: [-4, -2, 0, 0],
   imgstorydiv_display: "block",
   img_width: "",
   img_height: "",
   img_display: "none",
   img_url: "",
   paragraphs: [
                "I utter some incantations and hurl a firebolt at the demon, but it evades the shot with incredible agility and continues advancing towards me. I prepare another firebolt to attack, however it's too late in a flurry of slashes the demon slashes me painfully. I collapse on the floor screaming in agony.",

		"",

		"",

		""
	       ],
    p_displays: ["block", "none", "none", "none"],
    button_displays: ["block", "none", "none", "none"],
    button_texts: ["Continue", "", "", ""],
    button_functions: [triggerPage18, "", "", ""],
  },
  {
   reduction_values: [-1, -2, 0, 0],
   imgstorydiv_display: "block",
   img_width: "",
   img_height: "",
   img_display: "none",
   img_url: "",
   paragraphs: [
        "I cast a magical shield and hold my ground, however the beast slams it's right claw into my shield, instantly penetrating the shield. The powerful impact propels me backwards. I quickly recover as the demon closes the distance between us hastily and swings it's left arm, aiming for my head, I lower my head to evade the claw. Then swiftly, I unsheathe my sword and raise it deflecting another slash and swerve back to avoid a flurry of slashes, but the wretched thing manages to cut me.",

		"",

		"",

		""
	       ],
    p_displays: ["block", "none", "none", "none"],
    button_displays: ["block", "none", "none", "none"],
    button_texts: ["Continue", "", "", ""],
    button_functions: [triggerPage18, "", "", ""],
  },
  {
   reduction_values: [0, 0, 0, 0],
   imgstorydiv_display: "block",
   img_width: "",
   img_height: "",
   img_display: "none",
   img_url: "",
   paragraphs: [
        "The demon prepares to charge again but before it does Victor appears behind it, wielding his gigantic sword and hacks it down pre-emptively, smearing the demons onyx blood on his magical armour. \"That was entertaining, I should have watched it strike you dead, given how pathetic you are in combat.\" he remarks, in absolute glee. This barbaric fool how dare he jeer at me after releasing that grotesque thing. \"Now that's over finish what I started and kill them all Sigarus.\" he commands with a psychotic look in his  eye. ",

		"",

		"",

		""
	       ],
    p_displays: ["block", "none", "none", "none"],
    button_displays: ["block", "none", "none", "none"],
    button_texts: ["Continue", "", "", ""],
    button_functions: [triggerPage19, "", "", ""],
  },
  {
   reduction_values: [0, 0, 0, 0],
   imgstorydiv_display: "block",
   img_width: "",
   img_height: "",
   img_display: "none",
   img_url: "",
   paragraphs: [
        "The men on the ground are gradually starting to move. The paralysis spell must be wearing off. No time to waste, I ignore this fool's provocation and start running for the exit. I barge out of the main wooden doors and immediately mount my horse which is positioned nearby alongside Victor's horse. The horse neighs irritated that I disturbed it from eating hay inside the cart in front of it. ",

		"\"Make fast you stupid animal lest I cook you into into stew!\" I bellow imperiously, pulling the reins hard. After seizing control of the mount I rein it forth making it gallop in the direction of the gates. Victor follows behind after climbing his horse and attaching something to it's saddle. \"Oi! How dare you forsake your brother in the midst of thievery!\" The lunatic bellows maniacally, with no degree of concern about the peril he's wrought. I have grown oblivious to his bluster, there is no sense in bickering with such a deranged man.",

		"",

		""
	       ],
    p_displays: ["block", "block", "none", "none"],
    button_displays: ["block", "none", "none", "none"],
    button_texts: ["Continue", "", "", ""],
    button_functions: [triggerPage20, "", "", ""],
  },
  {
   reduction_values: [0, 0, 0, 0],
   imgstorydiv_display: "block",
   img_width: "",
   img_height: "",
   img_display: "none",
   img_url: "",
   paragraphs: [
        "Thanks to Wilso my useful informant. Victor and I targeted one of Horin's trivial strongholds, one with less guards and fortifications. Situated in a desolate forest it was supposed to be relatively easy to loot. Now because of what that fool has done I too shall suffer Horin's wrath. I'm certain he will pursue us vengefully. Victor might be a capable warrior, adept with almost any weapon he wields but he's bloodlust has no bounds. He's unpredictable like most psychopaths. Just where did Wilso find this deranged man. I'll be sure to inquire next we meet.",

		"Upon reaching the gates a guard, who seems to have recovered significant mobility, moves groggily on his knees attempting to rise to his feet in front of the gates, obstructs your path. I could simply steer my horse around him, or kill him.",

		"",

		""
	       ],
    p_displays: ["block", "block", "none", "none"],
    button_displays: ["block", "block", "none", "none"],
    button_texts: ["Avoid the guard", "Kill the guard <img class='button-icon' src='https://cdn-icons-png.flaticon.com/512/2099/2099808.png' alt=''>", "", ""],
    button_functions: ["", "", "", ""],
  },
];

const statIcons = {
  life: ["https://cdn-icons-png.flaticon.com/512/7979/7979701.png",
  "https://cdn-icons-png.flaticon.com/512/2622/2622071.png",
  "https://cdn-icons-png.flaticon.com/512/5907/5907535.png",
  "https://cdn-icons-png.flaticon.com/512/2107/2107845.png"],

  mana: ["https://cdn-icons-png.flaticon.com/512/2999/2999104.png",
  "https://cdn-icons-png.flaticon.com/512/1826/1826164.png",
  "https://cdn-icons-png.flaticon.com/512/9726/9726597.png",
  "https://cdn-icons-png.flaticon.com/512/9954/9954184.png"],

  morality: ["https://cdn-icons-png.flaticon.com/512/3639/3639945.png",
  "https://cdn-icons-png.flaticon.com/512/3639/3639947.png",
  "https://cdn-icons-png.flaticon.com/512/9192/9192532.png"],

  coin: ["https://cdn-icons-png.flaticon.com/512/550/550650.png",
  "https://cdn-icons-png.flaticon.com/512/566/566445.png",
  "https://cdn-icons-png.flaticon.com/512/2806/2806469.png",
  ]
};

function changeLifeManaStatImg(stat, statimg, icon_urls) {
  if (stat < 8 && stat > 5) {
    statimg.src = icon_urls[0];
  } else if (stat < 6 && stat > 0) {
    statimg.src = icon_urls[1];
  } else if (stat == 0 || stat < 0) {
    statimg.src = icon_urls[2];
  } else {
    statimg.src = icon_urls[3];
  }
}

function changeMoralityStatImg() {
  let stat = parseInt(stats[2].textContent);
  if (stat > 0) {
    statImgs[2].src = statIcons["morality"][0];
  } else if (stat < 0) {
    statImgs[2].src = statIcons["morality"][1];
  } else if (stat == 0) {
    statImgs[2].src = statIcons["morality"][2];
  }
}

function changeCoinStatImg() {
  let stat = parseInt(stats[3].textContent);
  if (stat > 50 && stat < 100) {
    statImgs[3].src = statIcons["coin"][0];
  } else if (stat >= 100 && stat < 200) {
    statImgs[3].src = statIcons["coin"][1];
  } else if (stat >= 200) {
    statImgs[3].src = statIcons["coin"][2];
  }
}

function changeStatText(lst, reduction_value, color, display_property, display_value) {
  lst[0].innerText = parseInt(lst[0].textContent) + reduction_value;
  lst[1].style.color = color;
  lst[2].style.color = color;
  lst[2].style.display = display_property;
  lst[2].innerText = display_value;
  
}


function displayStatIncreaseDecrease(dict) {
  for (let num = 0; num < 4; num++) {
    let stat = parseInt(stats[num].textContent);
    let reduction_value = dict["reduction_values"][num];
    if (stat + reduction_value > stat) {
      changeStatText([stats[num], statTexts[num], statReductionTexts[num]], reduction_value, "green", "inline", `(+${reduction_value})`);
    } else if (stat + reduction_value < stat) {
      changeStatText([stats[num], statTexts[num], statReductionTexts[num]], reduction_value, "red", "inline", `(${reduction_value})`);
    } else {
      changeStatText([stats[num], statTexts[num], statReductionTexts[num]], 0, "black", "none", 0);
    }
  }
}

function alterChapterImgButs(dict) {

  storyImgDiv.style.textAlign = "center";
  imgStoryDiv.style.display = dict["imgstorydiv_display"];
  storyImg.style.marginBottom = "55px";
  storyImg.style.width = dict["img_width"];
  storyImg.style.height = dict["img_height"];
  storyImg.style.display = dict["img_display"];
  storyImg.src = dict["img_url"];
  
  for (let num = 0; num < 4; num++) {
    let paragraph = paragraphs[num];
    let button = buttons[num];
    paragraph.innerHTML = dict["paragraphs"][num];
    paragraph.style.display = dict["p_displays"][num];
    button.innerHTML = dict["button_texts"][num];
    button.onclick = dict["button_functions"][num];
    button.style.display = dict["button_displays"][num];

  for (const but of buttons) {
      let button = buttons[num];
      let button_text = button.innerText;
      if (button_text.includes("(Mana -")) {
        let reduction_ind = button_text.indexOf("-") + 1;
        let reduction_val = parseInt(button_text[reduction_ind]);
        let mana_stat_val = parseInt(stats[1].innerText);

        if (mana_stat_val < reduction_val) {
          button.disabled = true;
          button.style.opacity = "0.5";
          button.style.cursor = "not-allowed";
        }
      }

    }
  }
}


function triggerPage(dict) {
  // Changes the Stats 
  displayStatIncreaseDecrease(dict);
  changeLifeManaStatImg(parseInt(stats[0].textContent), statImgs[0], statIcons.life);
  changeLifeManaStatImg(parseInt(stats[1].textContent), statImgs[1], statIcons.mana);
  changeMoralityStatImg();
  changeCoinStatImg();

  // Changes the Story, Image and Button
  alterChapterImgButs(dict);
}


function triggerSpecificPage() {
  triggerPage(data_dict[18]);
}

document.querySelector(".trig").addEventListener("click", triggerSpecificPage);

function triggerPage1() {
  // let beginning_stats = [10, 8, 0, 0];
  // for (let num = 0; num < 4; num++) {
  // stats[num].textContent = beginning_stats[num];
  // }
  triggerPage(data_dict[0]);
}


function triggerPage2() {
  triggerPage(data_dict[1]);
}


function triggerPage3() {
  triggerPage(data_dict[2]);
}


function triggerPage4() {
  triggerPage(data_dict[3]);
}


function triggerPage5() {
  triggerPage(data_dict[4]);
}


function triggerPage6() {
  triggerPage(data_dict[5]);
}


function triggerPage7() {
  triggerPage(data_dict[6]);
}


function triggerPage8() {
  triggerPage(data_dict[7]);
}


function triggerPage9() {
  triggerPage(data_dict[8]);
}


function triggerPage10() {
  triggerPage(data_dict[9]);
}


function triggerPage11() {
  triggerPage(data_dict[10]);
}


function triggerPage12() {
  triggerPage(data_dict[11]);
}


function triggerPage13() {
  triggerPage(data_dict[12]);
}


function triggerPage14() {
  triggerPage(data_dict[13]);
}


function triggerPage15() {
  triggerPage(data_dict[14]);
}

function triggerPage16() {
  triggerPage(data_dict[15]);
}

function triggerPage17() {
  triggerPage(data_dict[16]);
}

function triggerPage18() {
  triggerPage(data_dict[17]);
}

function triggerPage19() {
  triggerPage(data_dict[18]);
}

function triggerPage20() {
  triggerPage(data_dict[19]);
}



buttons[0].onclick = triggerPage1;