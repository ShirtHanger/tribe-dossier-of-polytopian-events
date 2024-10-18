const db = require(`../db`)
const { Tribe } = require(`../models`)



db.on(`error`, console.error.bind(console, `MongoDB connection error:`))

/* For all Google Drive images, you must get the IMAGE ID

https://drive.usercontent.google.com/download?id=1mTMDAF2X_WOWRFdpDaYbS1zJ7OQZ8C-a

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
      {
        name: `Xin-Xi`,
        inspirations: [`Japanese`, `Chinese`],
        description: `They start their journey in the dense mountains, surrounded by beautiful cherry blossoms.`,
        colorName: `dark red`,
        colorHex: `#cc0000`,
        headImageURL: `https://drive.usercontent.google.com/download?id=1mTMDAF2X_WOWRFdpDaYbS1zJ7OQZ8C-a`,
        unitImageURL: `https://drive.usercontent.google.com/download?id=1-M0m7c2lnB6SSAcrK45BKK-lYALe8yPs`,
        isFreeTribe: true,
        isSpecialTribe: false,
        theme: `https://static.wikia.nocookie.net/supertribes/images/2/26/Xin-xi_Theme.wav/revision/latest`,
        natureTheme: `https://static.wikia.nocookie.net/supertribes/images/1/13/Xin-xi_Nature.wav/revision/latest`,
        skins: [{
          name: `Sha-Po`,
          description: `In the misty hills around Mt. Xin-xi resides the Sha-po, a secretive legion of assassins trained in the arts of dealing a silent death to anyone who opposes the Xin-xi Empire.`,
          headImageURL: `https://drive.usercontent.google.com/download?id=1eq7XAIcziKY6wWw8So-VYVRv-gt5LlWU`,
          unitImageURL: `https://drive.usercontent.google.com/download?id=1nqafNdulJKweDEBnPu11E-SNqOl0t68u`,
          theme: `https://static.wikia.nocookie.net/supertribes/images/1/1e/Xin-xi_Skin_Theme.ogg/revision/latest`
        }]
      },

      /* Incorrect data, for convenience, correct and review later */

      { /* Corrected, add images */
        name: `Imperius`,
        inspirations: [`Roman`, `Greek`],
        description: `Huge mountains and green valleys. The Imperius climate is perfect for growing fruit.`,
        colorName: `Blue`,
        colorHex: `#0000ff`,
        headImageURL: `https://drive.usercontent.google.com/download?id=`,
        unitImageURL: `https://drive.usercontent.google.com/download?id=`,
        isFreeTribe: true,
        isSpecialTribe: false,
        theme: `https://static.wikia.nocookie.net/supertribes/images/9/9c/Imperius_Theme.wav/revision/latest`,
        natureTheme: `https://static.wikia.nocookie.net/supertribes/images/0/0b/Imperius_Nature.wav/revision/latest`,
        skins: [{
          name: `Lirepacci`,
          description: `The scholarly Lirepacci have ventured out of Imperia to gain new perspectives on life through warfare, the study of other cultures, and hours of philosophical debate.`,
          headImageURL: `https://drive.usercontent.google.com/download?id=`,
          unitImageURL: `https://drive.usercontent.google.com/download?id=`,
          theme: `https://static.wikia.nocookie.net/supertribes/images/e/ea/Imperius_Skin_Theme.ogg/revision/latest`,
        }]
      },
      { /* Done, now add images */
        name: `Bardur`,
        inspirations: [`Norse`, `Viking`, `Scandinavian`],
        description: `Surviving the harsh eternal winter of the Bardur woods is not an easy task, but Bardur seems to thrive here.`,
        colorName: `Dark Brown`,
        colorHex: `#352514`,
        headImageURL: `https://drive.usercontent.google.com/download?id=`,
        unitImageURL: `https://drive.usercontent.google.com/download?id=`,
        isFreeTribe: true,
        isSpecialTribe: false,
        theme: `https://static.wikia.nocookie.net/supertribes/images/2/21/Bardur_Theme.wav/revision/latest`,
        natureTheme: `https://static.wikia.nocookie.net/supertribes/images/1/1c/Bardur_Nature.wav/revision/latest`,
        skins: [{
          name: `Baergøff`,
          description: `The Baergøff are the Bardur's elite hunters. Clad in the sanctified pelt of their first Baerion kill, they're ready for anything!`,
          headImageURL: `https://drive.usercontent.google.com/download?id=`,
          unitImageURL: `https://drive.usercontent.google.com/download?id=`,
          theme: `https://static.wikia.nocookie.net/supertribes/images/3/37/Bardur_Skin_Theme.ogg/revision/latest`,
        }]
      },
      {
        name: `Oumaji`,
        inspirations: [`Bedouin`, `Nomadic`],
        description: `A nomadic desert tribe, Oumaji warriors ride swiftly across the sands, their knowledge of survival unmatched.`,
        colorName: `desert yellow`,
        colorHex: `#ffcc00`,
        headImageURL: `https://drive.usercontent.google.com/download?id=`,
        unitImageURL: `https://drive.usercontent.google.com/download?id=`,
        isFreeTribe: true,
        isSpecialTribe: false,
        skins: [{
          name: `Khondor`,
          description: `Elite desert riders who roam the vast dunes, known for their sharp spear skills and unrivaled agility.`,
          headImageURL: `https://drive.usercontent.google.com/download?id=`,
          unitImageURL: `https://drive.usercontent.google.com/download?id=`
        }]
      },
      {
        name: `Kickoo`,
        inspirations: [`Polynesian`, `Islanders`],
        description: `A peaceful island tribe that has mastered fishing and ocean navigation, living in harmony with the sea.`,
        colorName: `light blue`,
        colorHex: `#00ccff`,
        headImageURL: `https://drive.usercontent.google.com/download?id=`,
        unitImageURL: `https://drive.usercontent.google.com/download?id=`,
        isFreeTribe: true,
        isSpecialTribe: false,
        skins: [{
          name: `Ragoo`,
          description: `Warriors of the sea who don tribal tattoos and brightly colored feathers, fierce protectors of the Kickoo islands.`,
          headImageURL: `https://drive.usercontent.google.com/download?id=`,
          unitImageURL: `https://drive.usercontent.google.com/download?id=`
        }]
      },
      {
        name: `Hoodrick`,
        inspirations: [`Medieval Europe`, `Robin Hood`],
        description: `A tribe of skilled archers and cunning tacticians, known for their deep connection to the forests they protect.`,
        colorName: `forest green`,
        colorHex: `#228b22`,
        headImageURL: `https://drive.usercontent.google.com/download?id=`,
        unitImageURL: `https://drive.usercontent.google.com/download?id=`,
        isFreeTribe: true,
        isSpecialTribe: false,
        skins: [{
          name: `Yorthwober`,
          description: `Rangers of the deep woods, cloaked in dark green and brown, masters of the bow and experts at guerrilla warfare.`,
          headImageURL: `https://drive.usercontent.google.com/download?id=`,
          unitImageURL: `https://drive.usercontent.google.com/download?id=`
        }]
      },
      {
        name: `Luxidoor`,
        inspirations: [`French`, `Italian Renaissance`],
        description: `Luxidoor is a wealthy and extravagant empire, known for its grand architecture and immense riches.`,
        colorName: `gold`,
        colorHex: `#ffd700`,
        headImageURL: `https://drive.usercontent.google.com/download?id=`,
        unitImageURL: `https://drive.usercontent.google.com/download?id=`,
        isFreeTribe: false,
        isSpecialTribe: false,
        skins: [{
          name: `Aumux`,
          description: `Draped in jewels and luxurious attire, the Aumux warriors represent the peak of wealth and power.`,
          headImageURL: `https://drive.usercontent.google.com/download?id=`,
          unitImageURL: `https://drive.usercontent.google.com/download?id=`
        }]
      },
      {
        name: `Vengir`,
        inspirations: [`Mongolian`, `Barbarian`],
        description: `A warlike tribe known for their cruelty and strength, Vengir warriors conquer all who stand in their way.`,
        colorName: `blood red`,
        colorHex: `#8b0000`,
        headImageURL: `https://drive.usercontent.google.com/download?id=`,
        unitImageURL: `https://drive.usercontent.google.com/download?id=`,
        isFreeTribe: false,
        isSpecialTribe: false,
        skins: [{
          name: `Cultist`,
          description: `Vengir cultists, shrouded in black and crimson, are devoted to the gods of war and bloodshed.`,
          headImageURL: `https://drive.usercontent.google.com/download?id=`,
          unitImageURL: `https://drive.usercontent.google.com/download?id=`
        }]
      },
      {
        name: `Zebasi`,
        inspirations: [`African`, `Sub-Saharan`],
        description: `A tribe that thrives in the savannah, known for their strong warriors and deep spiritual connection to nature.`,
        colorName: `orange`,
        colorHex: `#ff8000`,
        headImageURL: `https://drive.usercontent.google.com/download?id=`,
        unitImageURL: `https://drive.usercontent.google.com/download?id=`,
        isFreeTribe: false,
        isSpecialTribe: false,
        skins: [{
          name: `Anzala`,
          description: `Wearing elaborate masks and flowing robes, Anzala warriors are both spiritual leaders and formidable fighters.`,
          headImageURL: `https://drive.usercontent.google.com/download?id=`,
          unitImageURL: `https://drive.usercontent.google.com/download?id=`
        }]
      },
      { /* Correct, now add images and themes */
        name: `Ai-Mo`,
        inspirations: [`Nepalese`, `Tibetan`, `Andean`],
        description: `The tranquil and wise Ai-Mo tribe inhabits the harshest, windiest, and highest mountain range of the square, where they have found inner peace by meditating in the eternal evening light.`,
        colorName: `Turquoise`,
        colorHex: `#36e2aa`,
        headImageURL: `https://drive.usercontent.google.com/download?id=`,
        unitImageURL: `https://drive.usercontent.google.com/download?id=`,
        isFreeTribe: false,
        isSpecialTribe: false,
        skins: [{
          name: `To-Lï`,
          description: `The To Lï rigorously train their bodies and minds in their sturdy Binba forests, and are here to show their strength and discipline to the Square.`,
          headImageURL: `https://drive.usercontent.google.com/download?id=`,
          unitImageURL: `https://drive.usercontent.google.com/download?id=`
        }]
      },
      {
        name: `Quetzali`,
        inspirations: [`Aztec`, `Mesoamerican`],
        description: `A fierce and proud tribe that builds towering pyramids and worships the sun, Quetzali are masters of stone and war.`,
        colorName: `turquoise`,
        colorHex: `#40e0d0`,
        headImageURL: `https://drive.usercontent.google.com/download?id=`,
        unitImageURL: `https://drive.usercontent.google.com/download?id=`,
        isFreeTribe: false,
        isSpecialTribe: false,
        skins: [{
          name: `Iquaruz`,
          description: `Warriors adorned with bright feathers and gold, Iquaruz are the elite protectors of Quetzali's ancient temples.`,
          headImageURL: `https://drive.usercontent.google.com/download?id=`,
          unitImageURL: `https://drive.usercontent.google.com/download?id=`
        }]
      },
      { /* CORRECT, now add images and themes */
        name: `Yădakk`,
        inspirations: [`Turkish`, `Mongolian`],
        description: `The Yădakk started out as a nomadic tribe in the beautiful harsh Khalee plains. Now they are the traders of the Square, connecting their empire with impressive trade routes.`,
        colorName: `Maroon`,
        colorHex: `#7d231c`,
        headImageURL: `https://drive.usercontent.google.com/download?id=`,
        unitImageURL: `https://drive.usercontent.google.com/download?id=`,
        isFreeTribe: false,
        isSpecialTribe: false,
        skins: [{
          name: `Ürkaz Skin`,
          description: `The gruff Ürkaz from the Khalee Highlands control the criminal underground of the Yădakk, and nothing is off limits are they establish economic domination of the Square!`,
          headImageURL: `https://drive.usercontent.google.com/download?id=`,
          unitImageURL: `https://drive.usercontent.google.com/download?id=`
        }]
      },
      {
        name: `Aquarion`,
        inspirations: [`Atlantean`, `Mythical Ocean`],
        description: `Aquarion is an aquatic race living in the depths of the ocean, excelling in both water-based combat and diplomacy.`,
        colorName: `deep sea blue`,
        colorHex: `#000080`,
        headImageURL: `https://drive.usercontent.google.com/download?id=`,
        unitImageURL: `https://drive.usercontent.google.com/download?id=`,
        isFreeTribe: false,
        isSpecialTribe: true
      },
      { /* Corrected, now add themes and images IDs */
        name: `∑∫ỹriȱŋ`,
        inspirations: [`Elven`],
        description: `The mysterious ∑∫ỹriȱŋ defend their woodland homes with colorful magic and the ferocity of fire-breathing dragons!`,
        colorName: `Hot Pink`,
        colorHex: `#ff0099`,
        headImageURL: `https://drive.usercontent.google.com/download?id=`,
        unitImageURL: `https://drive.usercontent.google.com/download?id=`,
        isFreeTribe: false,
        isSpecialTribe: true,
        theme: `https://static.wikia.nocookie.net/supertribes/images/0/06/%E2%88%91%E2%88%AB%E1%BB%B9ri%C8%B1%C5%8B_Theme.wav/revision/latest`,
        natureTheme: `https://static.wikia.nocookie.net/supertribes/images/d/da/%E2%88%91%E2%88%AB%E1%BB%B9ri%C8%B1%C5%8B_Nature.wav/revision/latest`,
        skins: [{
          name: `₼idŋighţ`,
          description: `The ₼idŋighţ cult has been corrupted by the Shard of D'Naeh, a mystical relic fueled by darkness. Through necromancing practices they can summon demons from graves in the dark forests.`,
          headImageURL: `https://drive.usercontent.google.com/download?id=`,
          unitImageURL: `https://drive.usercontent.google.com/download?id=`,
          theme: `https://static.wikia.nocookie.net/supertribes/images/1/1f/%E2%88%91%E2%88%AB%E1%BB%B9ri%C8%B1%C5%8B_Skin_Theme.ogg/revision/latest`,
        }]
      },
      {
        name: `Cymanti`,
        inspirations: [`Insectoid`, `Swarm`],
        description: `The Cymanti are an insectoid species that use swarms and spores to overrun their enemies, dominating the land with their hive mind.`,
        colorName: `acid green`,
        colorHex: `#66ff66`,
        headImageURL: `https://drive.usercontent.google.com/download?id=`,
        unitImageURL: `https://drive.usercontent.google.com/download?id=`,
        isFreeTribe: false,
        isSpecialTribe: true
      },
      {
        name: `Polaris`,
        inspirations: [`Ice`, `Frozen North`],
        description: `Polaris is a mysterious and cold tribe from the frozen north, capable of manipulating ice and snow to their advantage.`,
        colorName: `icy blue`,
        colorHex: `#00ffff`,
        headImageURL: `https://drive.usercontent.google.com/download?id=`,
        unitImageURL: `https://drive.usercontent.google.com/download?id=`,
        isFreeTribe: false,
        isSpecialTribe: true
      }



    ]
  
  

  await Tribe.insertMany(tribes) 

  console.log(`============================`)
  console.log(`TRIBES have been seeded!`)
  console.log(`============================`)

}

const run = async () => {

  await main()
  
  db.close()
}

run()