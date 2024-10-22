const db = require(`../db`) // Import database
const { Tribe, Comment } = require(`../models`) 

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

  const comments = [
    // Xin-Xi
    {
      tribe_id: xinXi[0]._id,
      tribe_name: `Xin-Xi`,
      comments_section: [
        { userName: 'ZenMaster42', comment: `Patience is OP.` },
        { userName: 'Warlord_Wu', comment: `Strategy > numbers.` },
      ],
    },
    // Imperius
    {
      tribe_id: imperius[0]._id,
      tribe_name: `Imperius`,
      comments_section: [
        { userName: 'RoyalistRex', comment: `All hail the crown.` },
        { userName: 'EmperorX', comment: `Imperius? More like Imperi-us.` },
      ],
    },
    // Bardur
    {
      tribe_id: bardur[0]._id,
      tribe_name: `Bardur`,
      comments_section: [
        { userName: 'WildAxe', comment: `Lumber huts solve everything.` },
        { userName: 'FrostGiant', comment: `Lumber huts are overpowered` },
      ],
    },
    // Oumaji
    {
      tribe_id: oumaji[0]._id,
      tribe_name: `Oumaji`,
      comments_section: [
        { userName: 'SandSurfer', comment: `No water, no problem.` },
        { userName: 'DesertGhost', comment: `Trash tier` },
      ],
    },
    // Kickoo
    {
      tribe_id: kickoo[0]._id,
      tribe_name: `Kickoo`,
      comments_section: [
        { userName: 'JungleKing', comment: `Love the pirate skin! Keep it up Midjiwan!` },
        { userName: 'TreeHugger', comment: `Living the green life.` },
      ],
    },
    // Hoodrick
    {
      tribe_id: hoodrick[0]._id,
      tribe_name: `Hoodrick`,
      comments_section: [
        { userName: 'SharpShooter', comment: `All people ever do is archer spam` },
        { userName: 'RobinWho', comment: `I steal hearts, not just gold.` },
      ],
    },
    // Luxidoor
    {
      tribe_id: luxidoor[0]._id,
      tribe_name: `Luxidoor`,
      comments_section: [
        { userName: 'MoneyBags', comment: `More gold, more power.` },
        { userName: 'GildedGiant', comment: `Luxury never goes out of style.` },
      ],
    },
    // Vengir
    {
      tribe_id: vengir[0]._id,
      tribe_name: `Vengir`,
      comments_section: [
        { userName: 'IronFist', comment: `Might makes right.` },
        { userName: 'GrudgeKeeper', comment: `Vengeance is a dish best served daily.` },
      ],
    },
    // Zebasi
    {
      tribe_id: zebasi[0]._id,
      tribe_name: `Zebasi`,
      comments_section: [
        { userName: 'SavannaKing', comment: `Strong roots, high hopes.` },
        { userName: 'PrideLeader', comment: `The herd protects its own.` },
      ],
    },
    // Ai-Mo
    {
      tribe_id: aiMo[0]._id,
      tribe_name: `Ai-Mo`,
      comments_section: [
        { userName: 'SilentWhisper', comment: `Ya'll notice the To-Li fight with their fists? OP` },
        { userName: 'LotusBloom', comment: `Peace is the true path.` },
        { userName: 'AvatarFan', comment: `They look like Airbenders` },
      ],
    },
    // Quetzali
    {
      tribe_id: quetzali[0]._id,
      tribe_name: `Quetzali`,
      comments_section: [
        { userName: 'StormCaller', comment: `Thunderous applause!` },
        { userName: 'FeatheredFury', comment: `Flying high, striking fast.` },
        { userName: 'BratWurst', comment: `Everybody gangsta till the Aquarion crab army shows up` },
        { userName: 'FeatheredFury', comment: `@BratWurst Shut up` },
      ],
    },
    // Yadakk
    {
      tribe_id: yadakk[0]._id,
      tribe_name: `Yadakk`,
      comments_section: [
        { userName: 'RoadRunner', comment: `All hail Genghis Khan!` },
        { userName: 'RoadRunner', comment: `All hail Genghis Khan!` },
        { userName: 'TradeMaster', comment: `@RoadRunner You commented that twice` },
      ],
    },
    // Aquarion
    {
      tribe_id: aquarion[0]._id,
      tribe_name: `Aquarion`,
      comments_section: [
        { userName: 'TideTamer', comment: `The Jellyfish are hella OP` },
        { userName: 'DeepDiver', comment: `The ocean is my playground.` },
      ],
    },
    // Elyrion
    {
      tribe_id: elyrion[0]._id,
      tribe_name: `∑∫ỹriȱŋ`,
      comments_section: [
        { userName: 'MysticMage', comment: `Dragon Spam all the way` },
        { userName: 'StarSeeker', comment: `Why do they have archers if they cut down forests? Are they stupid?` },
      ],
    },
    // Cymanti
    {
      tribe_id: cymanti[0]._id,
      tribe_name: `Cymanti`,
      comments_section: [
        { userName: 'HiveMind', comment: `Only noobs use this tribe` },
        { userName: 'BugLord', comment: `Creepy crawlies everywhere!` },
      ],
    },
    // Polaris
    {
      tribe_id: polaris[0]._id,
      tribe_name: `Polaris`,
      comments_section: [
        { userName: 'FrostBite', comment: `Everybody Gangsta till the Polaris player puts down the Ice Bank` },
        { userName: 'CajunSamurai', comment: `I HATE THE ICE ARCHERS!!!!!` },
      ],
    },
  ]

  
  await Comment.insertMany(comments)
  console.log(`============================`)
  console.log(`COMMENTS have been documented! What wonderful tribes!`)
  console.log(`============================`)
}

const run = async () => {
  await main()
  db.close()
}

run()