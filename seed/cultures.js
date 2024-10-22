const db = require(`../db`) // Import database
const { Tribe, Culture } = require(`../models`) 

db.on(`error`, console.error.bind(console, `MongoDB connection error:`)) // Catch errors

const main = async () => { 

  const xinXi = await Tribe.find({ name: `Xin-Xi` })
  const imperius = await Tribe.find({ name: `Imperius` })
  const bardur = await Tribe.find({ name: `Bardur` })
  const oumaji = await Tribe.find({ name: `Oumaji` })
  const kickoo = await Tribe.find({ name: `Kickoo` })
  const hoodrick = await Tribe.find({ name: `Hoodrick` })
  const luxidoor = await Tribe.find({ name: `Luxidoor` })
  const vengir = await Tribe.find({ name: `Vengir` })
  const zebasi = await Tribe.find({ name: `Zebasi` })
  const aiMo = await Tribe.find({ name: `Ai-Mo` })
  const quetzali = await Tribe.find({ name: `Quetzali` })
  const yadakk = await Tribe.find({ name: `Yadakk` })
  const aquarion = await Tribe.find({ name: `Aquarion` })
  const elyrion = await Tribe.find({ name: `∑∫ỹriȱŋ` })
  const cymanti = await Tribe.find({ name: `Cymanti` })
  const polaris = await Tribe.find({ name: `Polaris` })

  const cultures = [
    // Xin-Xi
    {
      tribe_id: xinXi[0]._id,
      tribe_name: `Xin-Xi`,
      lore: {
      blurb_2019: `Did you know that the Xin-Xi named themselves after Mt. Xin-Xi, the tallest and most sacred mountain on the Square? With the help of their mounts, a brave few climb the summit to prove themselves worthy of the Xini-Kai Spirit’s blessing, which lets them prepare the amazing Xini blossom tea.`,
      blurb_2020: `While every tribe has their own rituals surrounding the laying of an egg, the Xin-Xi are well known for their elaborate performances. At dawn, recently laid Xin-Xi eggs are painted with bright, vibrant colors and mesmerizing patterns, all while a troupe of village musicians play a song to ward off evil spirits.`,
      blurb_2021: `Tangy, refreshing, and fits in your hand, the plump Ixi fruit is a delightfully versatile fruit that can be found all throughout the lands of the Xin-Xi. The Ixi fruits are considered a token of good fortune, and are often handed to traveling parties to bestow them luck on their adventures.`,
      blurb_2022: `Climbing a big rock isn't hard, can't anyone do that? Yes, maybe a small band of people, but what about an army of people? The Xin-Xi don't just climb mountains for fun, but have perfected the science of managing troop formations, defense, logistics, and supplies around these steep summits.`,
      blurb_2023: `Xin-Xi buildings are primarily made from the bark of Xini trees - a sturdy, durable plant that can resist the frequent windstorms they encounter. The Xin-Xi have a strong communal tradition of helping each other build and rebuild houses, shops, and other buildings in preparation for natural disasters.`,
      blurb_2024: `Despite being a rather reserved people, the Xin-Xi are avid hikers and outdoorsfolk, known for their interest in mountaineering, camping, and tent-making. All these skills are needed by the Emperor and their entourage as they make their annual pilgrimage to the top of Mt. Xin-Xi.`,
    }
    },

    // Imperius
    {
      tribe_id: imperius[0]._id,
      tribe_name: `Imperius`,
      lore: {
      blurb_2019: `Always ready for battle, all Imperius wear their helmets at all times. It is a momentous occasion when Imperius youth receive their first helmet, which is held in high esteem.`,
      blurb_2020: `The highly efficient society of the Imperius has inspired them to build grand libraries, write breathtaking stage plays, erect mighty monuments, mix delicious drinks, and maintain a multitude of beautiful gardens! You'll never find a more organized or more fun place on the Square!`,
      blurb_2021: `The Square's first musical superstars were the Imperius Philharmonic Orchestra, who quickly attracted Imperius citizens from all over the Empire! Remember, any rumors that the Imperius government is using the shows to hypnotize their citizens into obedience are nonsense.`,
      blurb_2022: `The Imperius Empire unified not through weapons, but through propaganda. It was the city-state of Sumtemus that led a clever campaign of inciting rebellions among their fellow Imperius with the help of their cabal of Cloaks, which pressured them into surrendering. May the Empire stand for many years!`,
      blurb_2023: `Winemaking in Imperia is serious business, with there being numerous rules, regulations, and agencies around the growing and processing of Lumaepeles. After all, the creation of wine was instrumental in forming the Imperius as they are now, serving as the basis of the many laws they abide by today.`,
      blurb_2024: ` Before you can enjoy the glory and splendor of Imperia, make sure you've filled out the proper forms in triplicate, mailed a signed Imperius Book of Laws, and applied for a 5-day Imperia Tourism Pass™️. If you're approved, we look forward to seeing you!`,
    }
    },

    // Bardur
    {
      tribe_id: bardur[0]._id,
      tribe_name: `Bardur`,
      lore: {
      blurb_2019: `End of January is the Bardur Tribe Day, but Luxidoor has challenged the Bardur in a test of superiority, and they need your help! Jump onto Discord.gg/Polytopia, choose a side, fight for either the Luxidoor or the Bardur, and decide which tribe deserves to be “Tribe of the Month".`,
      blurb_2020: `The process of choosing the next Bardur Jarl is simple, they choose candidates and roll a dice. Bardurians believe the will of the gods is best found in circumstances of chance and chaos, such as the heat of battle.`,
      blurb_2021: `Killing a Baerion is already difficult, but what about the crazy souls who dress up like one, sneak into their lairs, and attempt to kill them with their "bear" hands? This, and other impossible challenges, make up the initiation into the Baergøffoz, the Bardur's elite fighting force.`,
      blurb_2022: `Living in Barduria is hard, with constant blizzards and Baerion attacks a regular occurrence, but that doesn't mean it's devoid of luxuries. This harsh tundra is home to a chain of hot springs that the Bardur like to use to unwind after a long day of braving the perils of their snowy home.`,
      blurb_2023: `Blizzard season is right around the corner, and the small Bardurian village of Gruark is preparing to usher in the brutal cold with their Førgul Festival! There will be singing, dancing, and plenty of Ulefurgh before everyone's stuck inside for a while.`,
    }
    },

    // Oumaji
    {
      tribe_id: oumaji[0]._id,
      tribe_name: `Oumaji`,
      lore: {
      blurb_2019: `While most cacti are inedible, the Sajaa is an exception. While not as iconic as their Shebron, it is full of water and nutrients, and what makes the Oumaji way of life possible in the desert.`,
      blurb_2020: `The Mausoleum at Ojibake is the final resting place of Mubehasi the Undefeated, the legendary leader of the Oumaji hordes and unifier of the Seven Oumaji Clans. The tower holds the records of their mighty reign and ensures that the memory of Mubehasi lives on in the hearts of all Oumaji!`,
      blurb_2021: ` The lands of the Oumaji are home to the Onjimu Riders, an order of Shebron-back town criers who inform the townsfolk of the news through poetry! Now a crucial part of Oumaji culture, poetic delivery of the news has become a competitive sport, with rules, competitions, and even creative regional styles!`,
      blurb_2022: `Other tribes may have been blessed with fertile land, abundant resources, or a warrior culture, but the Oumaji have something the others do not - speed. The legendary Shebron can quickly dash over dunes, hills, and plains, and are why the Oumaji excel at hit-and-run raids.`,
      blurb_2023: `A lifetime of wandering the desert awaits the Oumaji. What are they searching for? What do they hope to find? How will they know when they find it? Maybe the desert has a deeper meaning beyond what the average Oumaji can see, and maybe they can find the meaning in their dreams...`,
      blurb_2024: `An oasis in the Suui Desert is a rare find, and herds of Shebron often congregate around these watering holes looking for a drink. The annual "Sia Lu" ceremony needs an ample selection of healthy mounts to choose from, so the Oumaji send scouts to these oases hoping to find Shebrons fit to ride.`,
    }
    },

    // Kickoo
    {
      tribe_id: kickoo[0]._id,
      tribe_name: `Kickoo`,
      lore: {
      blurb_2019: `Have you heard the story of the famed Kickoo ship, the Innikuli? Its crew were the first Polytopians to sail to each of the four corners of the Square!`,
      blurb_2020: `When Kickoo sailors aren't sailing, they prefer to play sports! Footraces, wrestling, and canoeing are common, but the most popular sport is Hak'ilani, which is similar to tennis but played by 4 players on a specially-made floating platform. Don't fall off!`,
      blurb_2021: `When you live in an archipelago, fish tend to be your primary food source. The Kickoo believe that the elaborate system of movements and rhythms of the mystical "Pelona Fish Ceremony” encourages schools of fish to enter their waters for easy harvesting.`,
      blurb_2022: `Have you heard the stories of Po Iu, the legendary warrior? Kickoo myth is often based on their exploits, with classic stories such as "Po Iu Creates Fish," "Po Iu and the 7-Headed Beast," and "Po Iu Goes to Kaa Pu". Visit a Kickoo storyteller if you want to hear more!`,
      blurb_2023: `This is Ikilu. This model Kickoo citizen knows that no day is complete without a little dip in the ocean for a bit of swimming. The average Kickoo day is often full of gathering seashells, greeting friends, riding leoons, and...encountering the malicious Ragoo Pirates?!`,
      blurb_2024: `The many islands of the Kickoo Isles are connected by a wide array of maritime trade routes. While banoo, pelts, and other such things are commonly traded, the Kickoo rely on the Konka Nut as both a food source and de facto trade currency! It's even why they adopted green as their national color!`,
    }
    },

    // Hoodrick
    {
      tribe_id: hoodrick[0]._id,
      tribe_name: `Hoodrick`,
      lore: {
      blurb_2019: `The Helarda Pillars were built to commemorate the unity of the Hoodrick people after a period of turmoil. Each of the 4 arms represents a core ideal in Hoodrick society: Justice, Kindness, Nature, and Accuracy.`,
      blurb_2020: `The Hoodrick are known throughout the Square for their baked goods. Quissberries can be made into pies, cobblers, tarts, fritters, breads, jams, and a multitude of other delightful confections, and even their enemies have to agree that no one can bake like the Hoodrick.`,
      blurb_2021: `No one really remembers why the Hoodrick and the Bardur split apart so long ago, but this split formed one of the Square's most special and bitter inter-tribal rivalries. Ranging from brutal raids to petty displays of superiority, the Hood-Bard Rivalry shows no signs of stopping any time soon.`,
      blurb_2022: `Can you hit a BuzzFly with an arrow from 2 tiles away? Then you might be ready for the Hoodrick Yorthwober. These expert sharpshooters have been personally trained in combat and survival by Yorth, the legendary archer, and comprise the most elite force the Hoodrick can muster.`,
      blurb_2023: `Did you know that some Quissberries can grow to the size of a Polytopian? Did you know that the average Hooxe has been known to snack on the occasional Hoodrick lost in the woods? Brodry Lookhone has discovered both of these facts on their little adventure in the Hoodrick Woods.`,
      blurb_2024: `The Sacred Spear of Gredon, Belor's Holy Scroll, and many other valuable relics are held and cataloged by monks in a location known to the Hoodrick as "The Vault." From here, relics are loaned to local temples where they inspire fervor and piety in the hearts of the Hoodrick populace.`,
    }
    },

    // Luxidoor
    {
      tribe_id: luxidoor[0]._id,
      tribe_name: `Luxidoor`,
      lore: {
      blurb_2019: ` “The price shows the quality,” the shrewd Luxidoorian Emperor states a price increase for their tribe on December 2nd. "It's insultingly low, and we're worth so much more!"`,
      blurb_2020: `Carts full of gold, jewels, fabrics, and incense flow out of the temple of Exigeluss, the God of Wealth, blessing even the poorest of Luxidoor with a life of extravagance. Of course, nothing is free, and the Emperor wonders what Exigeluss will ask for in return...`,
      blurb_2021: `Unlike other tribes, the Luxidoor democratically elect their Emperor. Of course, the richest candidate always succeeds, because Luxidoorians always vote for the wealthiest. The campaign trail is littered with promises of riches and displays of power to sway potential voters.`,
      blurb_2022: `The Luxidoorian Emperor always sets the “hottest fashion” which all Luxidoorians try to emulate, even if it’s impractical in the hot sun. The current Emperor prefers turbans, but the last one loved shawls.`,
      blurb_2023: `Always feels good when you're spring cleaning and you find some money in the couch, right? Well, these Luxidoor are having a similar experience during their yearly Kiem, a tradition dedicated to sorting and organizing their wealth to make room for all the new stuff they'll be getting!`,
      blurb_2024: `The magnificent and wealthy Luxidoor are often regarded as stingy, but that's not always the case. Every Luxidoor city has a Naauou, or "Lucky Shelter", where patrons can offer some of their riches to help feed and care for their local animals, such as the mighty Phantrix.`,
    }
    },

    // Vengir
    {
      tribe_id: vengir[0]._id,
      tribe_name: `Vengir`,
      lore: {
      blurb_2019: `Celebrations in Vengir cities aren’t much like the other tribes. Instead of parties and parades, the Vengir see it as a time to mourn by singing dirges, adorning their faces with sorrow paint, and performing elaborate tragic plays.`,
      blurb_2020: `Where do Polytopians go when they die? No one knows, but the Vengir believe that souls of the dead pass through the Gate of Power to Hirkthr, the Underworld. In remembrance, the Vengir celebrate the "Skull Party" here, where they pray, send offerings, and wear the skull of their favorite relative.`,
      blurb_2021: `When Vengir families aren’t pillaging some city or sharpening their swords, they like to spend time vacationing. A common tourist attraction is the misty Kithkga Boneyards, a Rhino-Pig preserve where Vengirian citizens can feed the animals and learn more about the history of the mighty Rhino-Pig.`,
      blurb_2022: `While most would see the banishment of the Vengir as a bleak tragedy, the hunt for retribution did push them into becoming master metallurgists. The highest role in Vengir society below “Monarch” is “Blacksmith,” and that tends to happen when you need a steady stream of swords and armor.`,
      blurb_2023: `War is a way of life for the Vengir. From the moment they're hatched, Vengir children are trained in the arts of combat, ready to fight the Vengir's many foes. Some, like R'Xoc, have shrugged off their indoctrination and fled mid-battle, but sadly, the Vengir don't treat deserters well...`,
    }
    },

    // Zebasi
    {
      tribe_id: zebasi[0]._id,
      tribe_name: `Zebasi`,
      lore: {
      blurb_2019: `The wily Leoon, often seen in Kickoo lands, were native to the Zebasi savannahs before the Zebasi hunted them to near extinction for their pelts. Most modern Zebasi have never seen a Leoon, so they use their textile skills to manufacture replicas to honor their ancestors.`,
      blurb_2020: `M'basana Jerozi, aka the "Geroffy," was the first of many animals to be cataloged by Zebasi scholars in the Zuzanna Yaya, the Square's largest compendium of flora and fauna. Horticulture, zoology, botany, and biology are all fields of study for the curious inhabitants of Zeboya.`,
      blurb_2021: `Zebasi architecture may seem simple, but is a perfect fit for the hot climate. Inspired by the mounds of Bolaza bugs, the ventilation in Zebasi structures was originally designed to keep the Royal Waongii Juice Storage cold, but now everyone can live in a naturally air-conditioned home!`,
      blurb_2022: `Farming in Zeboya is made much easier with the myriad of irrigation channels built by the Zebasi. Windmills use the power of the wind to power lifts that pull water from Lake Mozimwa into the irrigation network, keeping Waongii, Uzu, Z'nula, and other crops growing all year long!`,
      blurb_2023: `It's no secret that Geroffy love Waongii fruit, and this particular Geroffy is no exception. The poor Zebasi worker knew that their delicious treat was gone forever the moment it was picked up by the tall fruit bandit. Thankfully, there's plenty more Waongii out there for our little friend to snack on.`,
      blurb_2024: `Many years of selective breeding have brought us the mighty Boacacias that dot the Zeboyan landscape. While they originally provided a reasonable fertilizing effect to nearby crops, the Zebasi have engineered their leaves to be as nutritious as possible, leading to unprecedented yields every harvest.`,
    }
    },

    // Ai-Mo
    {
      tribe_id: aiMo[0]._id,
      tribe_name: `Ai-Mo`,
      lore: {
      blurb_2019: `Despite their stoic appearance, the Ai-Mo love to party! One of their largest festivals is the “Ai-Yaca,” where the citizens celebrate with parades, llamo races, poetry recital, and dancing!`,
      blurb_2020: `The iconic strips on the foreheads of the Ai-Mo are made from the dye of the Issi flower, which is believed to improve mental clarity. Originally a focus to aid monks in meditation, the strips became a symbol of serenity and community, and are a staple of Ai-Moyan culture to this day.`,
      blurb_2021: `"They haunt these mountains, throwing rocks and pushing unsuspecting pilgrims to their doom!", the storyteller tells the children about the mighty Oo-Li, "But don't fret, little ones, the mighty Oo-Li in these hills provide blessings to our cities when we give them offerings of Llamo meat and tasty fruit... The "Oo-Li" shown in the Tribe Moon poster is a Polytopian in a costume. The "real" Oo-Li tower over the Ai-Mo.`,
      blurb_2022: `The Moon may be special to most Polytopians, but it's the Ai-Mo who have a special respect for the Sun. Unlike other tribes, the Ai-Moyan calendar is based on the Sun, which is tracked and revered by a prestigious sect of astronomers, cosmologists, and priests known as the 'Sun Speakers'.`,
      blurb_2023: ` Ai-Mo society is isolationist and tends to prefer keeping to itself, preferring minimal contact with the other tribes if they can help it. Regular Ai-Moyan border patrols keep the land safe from invaders, like this band of Bardur raiders, who didn't stand a chance!`,
      blurb_2024: ` "Pe Lo Chili" serves as the signature dish of the Ai-Mo and is usually made with Lï-Po Peppers and Llamo meat. Some Ai-Mo claim that the spiciest dishes of Pe Lo can cure sickness, increase your strength, and lead to the deepest of trances, but no one knows for certain.`,
    }
    },

    // Quetzali
    {
      tribe_id: quetzali[0]._id,
      tribe_name: `Quetzali`,
      lore: {
      blurb_2019: `The Quetzali found a special kinship with the birds of the jungle, since both Polytopians and their feathered friends are genderless, egg-laying, bipedal creatures.`,
      blurb_2020: `When the reigning Quetzali 'All-Feather' dies or resigns, a successor is chosen through the Tichitelxi Ceremony. With offerings of food in hand, Quetzali children hope for selection by the Bird Gods - a shimmer of light from the Pillar of Ixquezel at the Temple of Ixte'wop.`,
      blurb_2021: `The arrival of Quetzali diplomats is heralded by the blowing of horns, rattling of maracas, and the calls of a menagerie of birds! The Quetzali believe this awe-inspiring display will make diplomatic talks easier, but nothing can make up for the impending wave of their insufferable bird-related puns.`,
      blurb_2022: `Quetzali often hone their combat skills through a rousing game of Techi'wop'yali! The objective is to bounce a wooden bird off a bird-shaped shield into a moving hoop, which, of course, is also shaped like a bird.`,
      blurb_2023: `This aspiring athlete is Q'ich'ki, they're practicing for the "Wetek Ultal," a 5-day competition of speed, endurance, and devotion. Rigorous feats of sprinting, swimming, climbing, and competitive performance of religious rites are to be expected of all participants. Go, Q'ich'ki, go!`,
      blurb_2024: `"Ca Jel" is a core part of Quetzali culture, and roughly means "rushing to the defense of someone in need." The Quetzali are known for these acts of kindness, even for strangers, and they've gained a reputation for being good friends, strong allies, and some of the nicest folks you'll ever meet.`,
    }
    },

    // Yadakk
    {
      tribe_id: yadakk[0]._id,
      tribe_name: `Yadakk`,
      lore: {
      blurb_2019: `Most Yădakk merchants do business under the banner of the Horn Trading Company, the Square’s largest trade guild. Some like to say that the HTC is the real Yădakk government, since it even has a military!`,
      blurb_2020: `Despite usually being written off as simple merchants, the Yadakk invest plenty into both art and education, often building museums and schools in their trade hubs. Of course, most art and education revolve around bartering skills, desert survival, and Khamelk husbandry.`,
      blurb_2021: `The Yădakk are best known for their extensive and elaborate network of roads for their many travelers. Often beginning as well-tread routes for merchant caravans and religious pilgrims, all roads are paved over by a team of road builders and every brick is blessed by a Tizjhan priest.`,
      blurb_2022: `Tribe Moon: Treks across the harsh Khalee Plains are both dangerous and fairly boring. To keep their minds sharp, Yădakk caravans pass the time with a rousing game called 'Jikhij', a board game that forces players to use knowledge of their surroundings and encourages them to be aware of nearby food, water, and shade.`,
      blurb_2023: `It's not uncommon to see Yădakk merchant caravans roaming the Khalee Plains looking for customers. It's also not uncommon for most caravans to be comprised of the same family of Yădakk. What is uncommon is finding a lone Kickoo warrior out here, pretty far from home.`,
      blurb_2024: `After a long day traveling the roads of their beloved lands, every Yădakk loves to enjoy a cup of hot Khăl-iz around the stove in their yurt. This potion slightly pitches your voice in a way that makes it possible to sing the traditional chants that have been sung by their ancestors since the beginning of turns.`,
    }
    },

    // Aquarion
    {
      tribe_id: aquarion[0]._id,
      tribe_name: `Aquarion`,
      lore: {
      blurb_2020: `The Aquarion empire is vigilantly defended by the mighty behemoths, the Crabs. It was a pact long ago that brought the Crabs and the Aquarion together, and this pact will remain until peace is brought to the Square once again. `,
      blurb_2021: `Atop the Icopo Reefs are where the Aquarion built their seaside settlements, which are cozily nestled between the cracks of bright pink coral islets. At home on the coast, the amphibious Aquarion prefer to live where they can see both the majesty of the clear skies and the beauty of the placid seas.`,
      blurb_2022: `The majestic Turmelon is the main source of inspiration for Aquarion artisans. Children play with Turmelon toys, merchants push their wares from Turmelon-shaped carts, and even the Aquarion monarch sits on a Turmelon-shaped throne.`,
      blurb_2023: `Modern life is busy, and the Aquarion understand the importance of getting some rest in today's tiring world. They made this video to help all of you get some good sleep, no matter what life throws your way.`,
      
    }
    },

    // Elyrion
    {
      tribe_id: elyrion[0]._id,
      tribe_name: `∑∫ỹriȱŋ`,
      lore: {
      blurb_2021: `Tending to the forest isn't just a hobby for ∑∫ỹriȱŋ citizens, but a way of life.`,
      blurb_2022: `“I have no friends, so I’ll have to make my own!” thought a lonely ∑∫ỹriȱŋ citizen to themself before enchanting a unicorn into the first Polytaur. Ever since, Polytaurs have been a beloved part of ∑∫ỹriȱŋ society, often as cuddly companions, cheap labor, or steadfast soldiers.`,
  
    }
    },

    // Cymanti
    {
      tribe_id: cymanti[0]._id,
      tribe_name: `Cymanti`,
      lore: {
      blurb_2021: `No one could have expected what happened on that fateful day as a band of Polytopians ventured into the Cymantini Forest, forever to be changed by their encounter with the Ciru Bug. Normally parasites, the Ciru Bugs now live in mutualism with their new hosts, lending their enhanced senses for food and protection.`,
      blurb_2022: `Lytheti Grubs serve as the pack animal for the Cymanti, as they're strong, docile, and as large as a horse. Of course, that changes when they pupate into the mighty Lytheti Beetle, which is far too dangerous to be used as a mount, so it's a good thing they're also tasty!`,
      blurb_2023: `Hexapods usually feed on Fungi nectar, but if they find a trembling Polytopian lost in the woods it might be transformed into a afternoon snack..`,
      blurb_2024: `The giant bugs of the Cymantini Forest would be dangerous to everyone if it weren't for the diligent work of their handlers. Particular Cymanti are chosen to lead packs of Hexapods, Kitons, Phychi, and so forth, using the telepathic abilities of their Ciru Bug to issue their pack commands.`,
    }
    },

    // Polaris
    {
      tribe_id: polaris[0]._id,
      tribe_name: `Polaris`,
      lore: {
      blurb_2021: `The Polaris Ice Bank serves as a grand display of what the Gaami are capable of. Built at the site where the Polaris first made contact with the Gaami, the rewards which flow out of it remind Polaris citizens of what they owe to their subzero saviors.`,
      blurb_2022: `As mysterious as they are majestic, the Gaami are beings from an alien world of eternal permafrost, and the source of the ice magic that the Polaris society relies on. While the Polaris might see them as benevolent saviors, many believe that the Gaami have ulterior motives...`,
      blurb_2023: `A happy relationship exists between the Polaris and the Gaami - the Gaami rule and the Polaris enact their will to freeze over the Square. But, of course, there's bound to be some of those who aren't always the happiest with this arrangement, such as this Polaran dissident trying to flee...`,
      blurb_2024: `Few things can live out in the utterly inhospitably frozen land of the Polaris, but the Polaris have adapted. Warm igloos, resilient Mamoos, parkas made with Inqi fur, and magical blessings by the Gaami all help provide the Polaris with the strength to freeze the Square.`,
    }
    },
  ]

  
  await Culture.insertMany(cultures)
  console.log(`============================`)
  console.log(`CULTURES have been documented! What wonderful tribes!`)
  console.log(`============================`)
}

const run = async () => {
  await main()
  db.close()
}

run()