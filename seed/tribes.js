const db = require(`../db`)
const { Tribe } = require(`../models`)



db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

/* For all Google Drive images, you must get the IMAGE ID

https://drive.google.com/file/d/1mTMDAF2X_WOWRFdpDaYbS1zJ7OQZ8C-a/view

https://drive.google.com/file/d/1mTMDAF2X_WOWRFdpDaYbS1zJ7OQZ8C-a/preview

ID: 1mTMDAF2X_WOWRFdpDaYbS1zJ7OQZ8C-a

And place it in here: 

https://drive.usercontent.google.com/download?id=(ID HERE)

https://drive.usercontent.google.com/download?id=1mTMDAF2X_WOWRFdpDaYbS1zJ7OQZ8C-a 

https://stackoverflow.com/questions/10311092/displaying-files-e-g-images-stored-in-google-drive-on-a-website

*/


/* Polytopia HEADS - https://drive.google.com/drive/folders/1SuNRypYvdQ63D28moo8cTEFgwi-sG8NW
Polytopia UNITS - https://drive.google.com/drive/folders/1LcAI2Kny2V47WxPXR8uLo3SPTEy-rmYa */

const main = async () => {
    const tribes = [
      // Xin-Xi
      {
        name: `Xin-Xi`,
        inspirations: [`Japanese`, `Chinese`],
        leader: `Shayoszu`,
        description: `They start their journey in the dense mountains, surrounded by beautiful cherry blossoms.`,
        colorName: `Dark red`,
        colorHex: `#cc0000`,
        headImageURL: `https://static.wikia.nocookie.net/supertribes/images/a/a9/Xin-Xi.png`,
        unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/1/11/WarriorX.png`,
        buildingImageURL: `https://files.catbox.moe/qi20yh.png`,
        isFreeTribe: true,
        isSpecialTribe: false,
        theme: `https://static.wikia.nocookie.net/supertribes/images/2/26/Xin-xi_Theme.wav`,
        natureAmbience: `https://static.wikia.nocookie.net/supertribes/images/1/13/Xin-xi_Nature.wav`,
        skins: [{
          name: `Sha-Po`,
          description: `In the misty hills around Mt. Xin-xi resides the Sha-po, a secretive legion of assassins trained in the arts of dealing a silent death to anyone who opposes the Xin-xi Empire.`,
          headImageURL: `https://static.wikia.nocookie.net/supertribes/images/0/07/Sha-po.png`,
          unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/6/66/Sha-Po_Archer.png`,
          buildingImageURL: `https://files.catbox.moe/3938c7.png`,
          theme: `https://static.wikia.nocookie.net/supertribes/images/1/1e/Xin-xi_Skin_Theme.ogg`
        }]
      },

      // Imperius
      {
        name: `Imperius`,
        inspirations: [`Roman`, `Greek`],
        leader: `Dopilus`,
        description: `Huge mountains and green valleys. The Imperius climate is perfect for growing fruit.`,
        colorName: `Blue`,
        colorHex: `#0000ff`,
        headImageURL: `https://static.wikia.nocookie.net/supertribes/images/d/d9/Imperius_2018.png`,
        unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/4/47/WarriorI.png`,
        buildingImageURL: `https://files.catbox.moe/3t2csw.png`,
        isFreeTribe: true,
        isSpecialTribe: false,
        theme: `https://static.wikia.nocookie.net/supertribes/images/9/9c/Imperius_Theme.wav`,
        natureAmbience: `https://static.wikia.nocookie.net/supertribes/images/0/0b/Imperius_Nature.wav`,
        skins: [{
          name: `Lirepacci`,
          description: `The scholarly Lirepacci have ventured out of Imperia to gain new perspectives on life through warfare, the study of other cultures, and hours of philosophical debate.`,
          headImageURL: `https://static.wikia.nocookie.net/supertribes/images/a/ae/Lirepacci.png`,
          unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/9/93/Lirepacci_Warrior.png`,
          buildingImageURL: `https://files.catbox.moe/kr5lpb.png`,
          theme: `https://static.wikia.nocookie.net/supertribes/images/e/ea/Imperius_Skin_Theme.ogg`,
        }]
      },

      // Bardur
      {
        name: `Bardur`,
        inspirations: [`Norse`, `Viking`, `Scandinavian`],
        leader: `Linlin`,
        description: `Surviving the harsh eternal winter of the Bardur woods is not an easy task, but Bardur seems to thrive here.`,
        colorName: `Dark Brown`,
        colorHex: `#352514`,
        headImageURL: `https://static.wikia.nocookie.net/supertribes/images/1/14/Bardur.png`,
        unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/7/7d/WarriorB.png`,
        buildingImageURL: `https://files.catbox.moe/h18we0.png`,
        isFreeTribe: true,
        isSpecialTribe: false,
        theme: `https://static.wikia.nocookie.net/supertribes/images/2/21/Bardur_Theme.wav`,
        natureAmbience: `https://static.wikia.nocookie.net/supertribes/images/1/1c/Bardur_Nature.wav`,
        skins: [{
          name: `Baergøff`,
          description: `The Baergøff are the Bardur's elite hunters. Clad in the sanctified pelt of their first Baerion kill, they're ready for anything!`,
          headImageURL: `https://static.wikia.nocookie.net/supertribes/images/4/42/Baergoff.png`,
          unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/d/d4/Baergoff_Archer.png`,
          buildingImageURL: `https://files.catbox.moe/xxy0x3.png`,
          theme: `https://static.wikia.nocookie.net/supertribes/images/3/37/Bardur_Skin_Theme.ogg`,
        }]
      },

      // Oumaji
      {
        name: `Oumaji`,
        inspirations: [`Arabian`, `Nomadic`, `North African`, `Middle East`],
        leader: `Yelake`,
        description: `The seemingly endless, sun-blessed desert is the home of the Oumaji tribe.`,
        colorName: `Yellow`,
        colorHex: `#ffff00`,
        headImageURL: `https://static.wikia.nocookie.net/supertribes/images/a/a7/Oumaji_2021.png`,
        unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/2/20/RiderO.png`,
        buildingImageURL: `https://files.catbox.moe/gowzl9.png`,
        isFreeTribe: true,
        isSpecialTribe: false,
        theme: `https://static.wikia.nocookie.net/supertribes/images/9/91/Oumaji_Theme.wav`,
        natureAmbience: `https://static.wikia.nocookie.net/supertribes/images/c/c7/Oumaji_Nature.wav`,
        skins: [{
          name: `Khondor`,
          description: `This ancient order of Khondor Honor Guards has been around for ages, and they're here to return the Oumaji to a more "civilized" time.`,
          headImageURL: `https://static.wikia.nocookie.net/supertribes/images/f/f4/Khondor.png`,
          unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/d/d2/Khondor_Mind_Bender.png`,
          buildingImageURL: `https://files.catbox.moe/2lq60g.png`,
          theme: `https://static.wikia.nocookie.net/supertribes/images/b/b9/Oumaji_Skin_Theme.ogg`,
        }]
      },

      // Kickoo
      {
        name: `Kickoo`,
        inspirations: [`Polynesian`, `Pacific Islanders`, `Carribean`],
        leader: `Nuko`,
        description: `White sandy beaches with coconut palms. Abundance of fruit and fish. Welcome to the home of the Kickoo.`,
        colorName: `Green`,
        colorHex: `#00ff00`,
        headImageURL: `https://static.wikia.nocookie.net/supertribes/images/6/67/Kickoo.png`,
        unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/3/3a/WarriorK.png`,
        buildingImageURL: `https://files.catbox.moe/50fawq.png`,
        isFreeTribe: false,
        isSpecialTribe: false,
        theme: `https://static.wikia.nocookie.net/supertribes/images/e/ef/Kickoo_Theme.wav`,
        natureAmbience: `https://static.wikia.nocookie.net/supertribes/images/e/e3/Kickoo_Nature.wav`,
        skins: [{
          name: `Ragoo`,
          description: `The scourge of the waters, the bane of navies, the serpents of the seas - The Ragoo Pirates! Their fleets of ships and lust for plunder are ready to expand their operations from the Kickoo Isles to the rest of the Square!`,
          headImageURL: `https://static.wikia.nocookie.net/supertribes/images/4/48/Ragoo.png`,
          unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/c/c2/Ragoo_Swordsman.png`,
          buildingImageURL: `https://files.catbox.moe/ti6v1n.png`,
          theme: `https://static.wikia.nocookie.net/supertribes/images/d/d7/Kickoo_Skin_Theme.ogg`,
        }]
      },

      // Hoodrick
      {
        name: `Hoodrick`,
        inspirations: [`Medieval Europe`, `Robin Hood`, `English`],
        leader: `Rydon`,
        description: `The yellow autumn leaves of the Hoodrick woods are perfect hideouts for its peculiar mushroom stuffing inhabitants.`,
        colorName: `Golden Brown`,
        colorHex: `#996600`,
        headImageURL: `https://static.wikia.nocookie.net/supertribes/images/2/28/Hoodrick.png`,
        unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/b/bc/ArcherH.png`,
        buildingImageURL: `https://files.catbox.moe/5gqhbm.png`,
        isFreeTribe: false,
        isSpecialTribe: false,
        theme: `https://static.wikia.nocookie.net/supertribes/images/5/51/Hoodrick_Theme.wav`,
        natureAmbience: `https://static.wikia.nocookie.net/supertribes/images/b/b6/Hoodrick_Nature.wav`,
        skins: [{
          name: `Yorthwober`,
          description: `Bands of the Hoodrick's finest sharpshooters and survivalists, the Yorthwober know their way around combat just as well as they do the hills and forests.`,
          headImageURL: `https://static.wikia.nocookie.net/supertribes/images/5/5a/Yorthwober.png`,
          unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/3/31/Yorthwober_Archer.png`,
          buildingImageURL: `https://files.catbox.moe/rgxc7q.png`,
          theme: `https://static.wikia.nocookie.net/supertribes/images/3/33/Hoodrick_Skin_Theme.ogg`,
        }]
      },

      // Luxidoor
      {
        name: `Luxidoor`,
        inspirations: [`Indian`],
        leader: `Lönliss`,
        description: `The Luxidoor love expensive things, jewels, rare spices and exclusive ornaments. That is also why they are the most expensive tribe in Polytopia!
The Luxidoor citizens lead very comfortable lives, draped in the finest purple silk. But will they survive outside of their beloved capital?`,
        colorName: `purple`,
        colorHex: `#ab3bd6`,
        headImageURL: `https://static.wikia.nocookie.net/supertribes/images/1/14/Luxidoor.png`,
        unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/0/03/WarriorL.png`,
        buildingImageURL: `https://files.catbox.moe/pbb4ef.png`,
        isFreeTribe: false,
        isSpecialTribe: false,
        theme: `https://static.wikia.nocookie.net/supertribes/images/5/56/Luxidoor_Theme.wav`,
        natureAmbience: `https://static.wikia.nocookie.net/supertribes/images/5/5f/Luxidoor_Nature.wav`,
        skins: [{
          name: `Aumux`,
          description: `The Aumux Mercenaries are ruthless, effective, and more willing to destroy their foes, desolate the land, and empty the treasury of their employers in their insatiable, all-consuming greed.`,
          headImageURL: `https://static.wikia.nocookie.net/supertribes/images/2/23/Aumux.png`,
          unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/f/fa/Aumux_Swordsman.png`,
          buildingImageURL: `https://files.catbox.moe/w9y73k.png`,
          theme: `https://static.wikia.nocookie.net/supertribes/images/c/c4/Luxidoor_Skin_Theme.ogg`,
        }]
      },

      // Vengir
      {
        name: `Vengir`,
        inspirations: [`Gothic`, `Slavic`, `Mordor`],
        leader: `Thxas`,
        description: `Frowned upon by the other tribes and pushed into the unpleasant wastelands. Will they tolerate this injustice or rise to fight back?`,
        colorName: `White`,
        colorHex: `#ffffff`,
        headImageURL: `https://static.wikia.nocookie.net/supertribes/images/4/41/Vengir_Head_Moonrise.png`,
        unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/9/9f/SwordsmanV.png`,
        buildingImageURL: `https://files.catbox.moe/q9p6rz.png`,
        isFreeTribe: false,
        isSpecialTribe: false,
        theme: `https://static.wikia.nocookie.net/supertribes/images/3/36/Vengir_Theme.wav`,
        natureAmbience: `https://static.wikia.nocookie.net/supertribes/images/3/3f/Vengir_Nature.wav`,
        skins: [{
          name: `Cultist`,
          description: `Fanatical Vengir Cultists devoted to Burzgor shrug off their flesh in the harrowing Thdkrkr Ritual to show their dedication to revenge.`,
          headImageURL: `https://static.wikia.nocookie.net/supertribes/images/b/bd/Cultist.png`,
          unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/2/25/Cultist_Swordsman.png`,
          buildingImageURL: `https://files.catbox.moe/rvet41.png`,
          theme: `https://static.wikia.nocookie.net/supertribes/images/5/5d/Vengir_Skin_Theme.ogg`,
        }]
      },

      // Zebasi
      {
        name: `Zebasi`,
        inspirations: [`South African`, `Sub-Saharan`],
        leader: `Bozu`,
        description: `Zebasi thrive on the warm savannah, cultivating the rich soil to provide food for their mighty population.`,
        colorName: `Orange`,
        colorHex: `#ff9900`,
        headImageURL: `https://static.wikia.nocookie.net/supertribes/images/a/ae/Zebasi.png`,
        unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/b/bb/WarriorZ.png`,
        buildingImageURL: `https://files.catbox.moe/8e6t3n.png`,
        isFreeTribe: false,
        isSpecialTribe: false,
        theme: `https://static.wikia.nocookie.net/supertribes/images/6/65/Zebasi_Theme.wav`,
        natureAmbience: `https://static.wikia.nocookie.net/supertribes/images/9/93/Zebasi_Nature.wav`,
        skins: [{
          name: `Anzala`,
          description: `The disciples of Anzala prefer the ways of art and expression over the scientific curiosity of their Zebasi siblings, and now they're here, with the Square as their canvas!`,
          headImageURL: `https://static.wikia.nocookie.net/supertribes/images/8/8a/Anzala.png`,
          unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/7/76/Anzala_Warrior.png`,
          buildingImageURL: `https://files.catbox.moe/rs30bu.png`,
          theme: `https://static.wikia.nocookie.net/supertribes/images/4/4d/Zebasi_Skin_Theme.ogg`,
  
        }]
      },

      // Ai-Mo
      { 
        name: `Ai-Mo`,
        inspirations: [`Nepalese`, `Tibetan`, `Andean`],
        leader: `Lifidee`,
        description: `The tranquil and wise Ai-Mo tribe inhabits the harshest, windiest, and highest mountain range of the square, where they have found inner peace by meditating in the eternal evening light.`,
        colorName: `Turquoise`,
        colorHex: `#36e2aa`,
        headImageURL: `https://static.wikia.nocookie.net/supertribes/images/5/59/Ai-Mo.png`,
        unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/3/31/WarriorA.png`,
        buildingImageURL: `https://files.catbox.moe/puuwmi.png`,
        isFreeTribe: false,
        isSpecialTribe: false,
        theme: `https://static.wikia.nocookie.net/supertribes/images/f/f0/Ai-Mo_Theme.wav`,
        natureAmbience: `https://static.wikia.nocookie.net/supertribes/images/1/1c/Ai-Mo_Nature.wav`,
        skins: [{
          name: `To-Lï`,
          description: `The To Lï rigorously train their bodies and minds in their sturdy Binba forests, and are here to show their strength and discipline to the Square.`,
          headImageURL: `https://static.wikia.nocookie.net/supertribes/images/e/ea/To_L%C3%AF.png`,
          unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/1/19/To-Li_Warrior.png`,
          buildingImageURL: `https://files.catbox.moe/qpk3ng.png`,
          theme: `https://static.wikia.nocookie.net/supertribes/images/0/0f/Ai-Mo_Skin_Theme.ogg`,
        }]
      },

      // Quetzali
      {
        name: `Quetzali`,
        inspirations: [`Aztec`, `Mesoamerican`, `Olmec`, `Mayan`, `Toltec`],
        leader: `Chotek`,
        description: `The Quetzali tribe worship the Bird Gods of the red soil and live in harmony with the natural symmetry of their cubistic jungles. They are commonly seen riding giant flightless birds.`,
        colorName: `Pine Green`,
        colorHex: `#275c4a`,
        headImageURL: `https://static.wikia.nocookie.net/supertribes/images/0/06/Quetzali.png`,
        unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/4/4c/DefenderQ.png`,
        buildingImageURL: `https://files.catbox.moe/swxxxx.png`,
        isFreeTribe: false,
        isSpecialTribe: false,
        theme: `https://static.wikia.nocookie.net/supertribes/images/b/b4/Quetzali_Theme.wav`,
        natureAmbience: `https://static.wikia.nocookie.net/supertribes/images/9/9b/Quetzali_Nature.wav`,
        skins: [{
          name: `Iquaruz`,
          description: `Some Quetzali have taken their devotion to the Bird Gods to new heights as they try to transform themselves into actual birds. They look pretty but unfortunately they cannot fly.`,
          headImageURL: `https://static.wikia.nocookie.net/supertribes/images/9/9d/Iqaruz.png`,
          unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/5/54/Iqaruz_Defender.png`,
          buildingImageURL: `https://files.catbox.moe/e9pgwo.png`,
          theme: `https://static.wikia.nocookie.net/supertribes/images/a/a8/Quetzali_Skin_Theme.ogg`,
        }]
      },

      // Yadakk
      {
        name: `Yadakk`,
        inspirations: [`Turkish`, `Mongolian`],
        leader: `Azurkaz`,
        description: `The Yădakk started out as a nomadic tribe in the beautiful harsh Khalee plains. Now they are the traders of the Square, connecting their empire with impressive trade routes.`,
        colorName: `Maroon`,
        colorHex: `#7d231c`,
        headImageURL: `https://static.wikia.nocookie.net/supertribes/images/7/79/Yadakk.png`,
        unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/5/53/RiderY.png`,
        buildingImageURL: `https://files.catbox.moe/o6a3eo.png`,
        isFreeTribe: false,
        isSpecialTribe: false,
        theme: `https://static.wikia.nocookie.net/supertribes/images/d/d8/Y%C4%83dakk_Theme.wav`,
        natureAmbience: `https://static.wikia.nocookie.net/supertribes/images/3/39/Y%C4%83dakk_Nature.wav`,
        skins: [{
          name: `Urkaz`,
          description: `The gruff Ürkaz from the Khalee Highlands control the criminal underground of the Yădakk, and nothing is off limits are they establish economic domination of the Square!`,
          headImageURL: `https://static.wikia.nocookie.net/supertribes/images/b/bf/%C3%9Crkaz.png`,
          unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/2/2c/Urkaz_Rider.png`,
          buildingImageURL: `https://files.catbox.moe/9zzaca.png`,
          theme: `https://static.wikia.nocookie.net/supertribes/images/8/82/Y%C4%83dakk_Skin_Theme.ogg`,
        }]
      },

      // Aquarion
      {
        name: `Aquarion`,
        inspirations: [`Atlantean`],
        leader: `Nepico`,
        description: `From the deep oceans a long lost civilization appears! During their time in isolation they have developed mermaid tails that makes it possible for them to move freely in water.`,
        colorName: `light coral`,
        colorHex: `#f38381`,
        headImageURL: `https://static.wikia.nocookie.net/supertribes/images/0/0e/Aquarion.png`,
        unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/c/c1/MermaidAq.png`,
        buildingImageURL: `https://files.catbox.moe/b5ffb1.png`,
        isFreeTribe: false,
        isSpecialTribe: true,
        theme: `https://static.wikia.nocookie.net/supertribes/images/3/35/Aquarion_Theme.wav`,
        natureAmbience: `https://static.wikia.nocookie.net/supertribes/images/c/c2/Aquarion_Nature.wav`,
      },

      // Elyrion
      {
        name: `∑∫ỹriȱŋ`,
        inspirations: [`Elven`],
        leader: `totorö`,
        description: `The mysterious ∑∫ỹriȱŋ defend their woodland homes with colorful magic and the ferocity of fire-breathing dragons!`,
        colorName: `Hot Pink`,
        colorHex: `#ff0099`,
        headImageURL: `https://static.wikia.nocookie.net/supertribes/images/b/b2/Elyrion.png`,
        unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/f/fb/WarriorE.png`,
        buildingImageURL: `https://files.catbox.moe/yrxz7s.png`,
        isFreeTribe: false,
        isSpecialTribe: true,
        theme: `https://static.wikia.nocookie.net/supertribes/images/0/06/%E2%88%91%E2%88%AB%E1%BB%B9ri%C8%B1%C5%8B_Theme.wav`,
        natureAmbience: `https://static.wikia.nocookie.net/supertribes/images/d/da/%E2%88%91%E2%88%AB%E1%BB%B9ri%C8%B1%C5%8B_Nature.wav`,
        skins: [{
          name: `₼idŋighţ`,
          description: `The ₼idŋighţ cult has been corrupted by the Shard of D'Naeh, a mystical relic fueled by darkness. Through necromancing practices they can summon demons from graves in the dark forests.`,
          headImageURL: `https://static.wikia.nocookie.net/supertribes/images/f/fe/Midnight.png`,
          unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/f/fb/Midnight_Warrior.png`,
          buildingImageURL: `https://files.catbox.moe/x5xyea.png`,
          theme: `https://static.wikia.nocookie.net/supertribes/images/1/1f/%E2%88%91%E2%88%AB%E1%BB%B9ri%C8%B1%C5%8B_Skin_Theme.ogg`,
        }]
      },

      // Cymanti 
      {
        name: `Cymanti`,
        inspirations: [`Insectoid`, `Old-Growth Forests`, `Redwood Forests`],
        leader: `Mylozi`,
        description: `The Cymanti are a breakout group of Polytopians who moved to the swampy forests and learned to live with the Ciru Bug, which attaches to their faces and merges with their brains.`,
        colorName: `Lime`,
        colorHex: `#c2fd00`,
        headImageURL: `https://static.wikia.nocookie.net/supertribes/images/a/ae/Cymanti.png`,
        unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/2/26/WarriorC.png`,
        buildingImageURL: `https://files.catbox.moe/830ozo.png`,
        theme: `https://static.wikia.nocookie.net/supertribes/images/8/8a/Cymanti_Theme.wav`,
        natureAmbience: `https://static.wikia.nocookie.net/supertribes/images/6/68/Cymanti_Nature.wav`,
        isFreeTribe: false,
        isSpecialTribe: true
      },

      // Polaris
      {
        name: `Polaris`,
        inspirations: [`Indigenous Siberia`, `Inuit`, `Canadian Aboriginal`],
        leader: `Nuupi`,
        description: `The Polaris have lain trapped in the far reaches of the freezing tundra for eons, but were blessed by the unknowable Gaami with the power to expand their unnatural icy terrain farther than the weather permits.`,
        colorName: `Light Tan`,
        colorHex: `#b6a185`,
        headImageURL: `https://static.wikia.nocookie.net/supertribes/images/a/a2/Polaris.png`,
        unitImageURL: `https://static.wikia.nocookie.net/supertribes/images/1/13/WarriorP.png`,
        buildingImageURL: `https://files.catbox.moe/pxx5iv.png`,
        theme: `https://static.wikia.nocookie.net/supertribes/images/d/d0/Polaris_Theme.wav`,
        natureAmbience: `https://static.wikia.nocookie.net/supertribes/images/7/72/Polaris_Nature.wav`,
        isFreeTribe: false,
        isSpecialTribe: true
      }

    ]
  
  

  await Tribe.insertMany(tribes) 

  console.log(`============================`)
  console.log(`TRIBES have been discovered!`)
  console.log(`============================`)

}

const run = async () => {

  await main()
  
  db.close()
}

run()