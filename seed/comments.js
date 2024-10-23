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

  /* Here just incase I mess up and need to roll back */
  const comments = [
    // Xin-Xi
    {
      tribe_id: xinXi[0]._id,
      tribe_name: `Xin-Xi`,
      comments_section: [
        { userName: 'ZenMaster42', postTime: new Date("October 13, 2024 11:13:00"), comment:`Patience is OP.` },
        { userName: 'Warlord_Wu', postTime: new Date("October 17, 2024 10:21:00"), comment:`Strategy > numbers.` },
        { userName: 'Anonymous', postTime: new Date("October 20, 2024 10:11:00"), comment:`Love the Samurai Helmet!` },
        { userName: '愤怒的老虎', postTime: new Date("October 20, 2024 10:21:00"), comment:`沙约斯祖万岁！` },
        { userName: 'Monk', postTime: new Date("October 20, 2024 10:43:00"), comment:`Climbing's gotta be the worst starting tech` },
      ],
    },
    // Imperius
    {
      tribe_id: imperius[0]._id,
      tribe_name: `Imperius`,
      comments_section: [
        { userName: 'RoyalistRex', postTime: new Date("October 13, 2024 11:13:00"), comment:`All hail the crown.` },
        { userName: 'EmperorX', postTime: new Date("October 17, 2024 10:21:00"), comment:`Imperius? More like Imperi-us.` },
      ],
    },
    // Bardur
    {
      tribe_id: bardur[0]._id,
      tribe_name: `Bardur`,
      comments_section: [
        { userName: 'WildAxe', postTime: new Date("October 13, 2024 11:13:00"), comment:`Lumber huts solve everything.` },
        { userName: 'FrostGiant', postTime: new Date("October 17, 2024 10:21:00"), comment:`Lumber huts are overpowered` },
      ],
    },
    // Oumaji
    {
      tribe_id: oumaji[0]._id,
      tribe_name: `Oumaji`,
      comments_section: [
        { userName: 'SandSurfer', postTime: new Date("October 13, 2024 11:13:00"), comment:`No water, no problem.` },
        { userName: 'DesertGhost', postTime: new Date("October 17, 2024 10:21:00"), comment:`Trash tier` },
      ],
    },
    // Kickoo
    {
      tribe_id: kickoo[0]._id,
      tribe_name: `Kickoo`,
      comments_section: [
        { userName: 'JungleKing', postTime: new Date("October 13, 2024 11:13:00"), comment:`Love the pirate skin! Keep it up Midjiwan!` },
        { userName: 'TreeHugger', postTime: new Date("October 17, 2024 10:21:00"), comment:`Living the green life.` },
      ],
    },
    // Hoodrick
    {
      tribe_id: hoodrick[0]._id,
      tribe_name: `Hoodrick`,
      comments_section: [
        { userName: 'SharpShooter', postTime: new Date("October 13, 2024 11:13:00"), comment:`All people ever do is archer spam` },
        { userName: 'RobinWho', postTime: new Date("October 17, 2024 10:21:00"), comment:`I steal hearts, not just gold.` },
        { userName: 'RobinDaBank', postTime: new Date("October 19, 2024 11:01:00"), comment:`The base skin is so bland, Yorthwober is where it's at!` },
      ],
    },
    // Luxidoor
    {
      tribe_id: luxidoor[0]._id,
      tribe_name: `Luxidoor`,
      comments_section: [
        { userName: 'MoneyBags', postTime: new Date("October 13, 2024 11:13:00"), comment:`More gold, more power.` },
        { userName: 'GildedGiant', postTime: new Date("October 17, 2024 10:21:00"), comment:`Luxury never goes out of style.` },
      ],
    },
    // Vengir
    {
      tribe_id: vengir[0]._id,
      tribe_name: `Vengir`,
      comments_section: [
        { userName: 'IronFist', postTime: new Date("October 13, 2024 11:13:00"), comment:`Might makes right.` },
        { userName: 'GrudgeKeeper', postTime: new Date("October 17, 2024 10:21:00"), comment:`Vengeance is a dish best served daily.` },
      ],
    },
    // Zebasi
    {
      tribe_id: zebasi[0]._id,
      tribe_name: `Zebasi`,
      comments_section: [
        { userName: 'SavannaKing', postTime: new Date("October 13, 2024 11:13:00"), comment:`Strong roots, high hopes.` },
        { userName: 'PrideLeader', postTime: new Date("October 17, 2024 10:21:00"), comment:`The herd protects its own.` },
      ],
    },
    // Ai-Mo
    {
      tribe_id: aiMo[0]._id,
      tribe_name: `Ai-Mo`,
      comments_section: [
        { userName: 'SilentWhisper', postTime: new Date("October 13, 2024 11:13:00"), comment:`Ya'll notice the To-Li fight with their fists? OP` },
        { userName: 'LotusBloom', postTime: new Date("October 17, 2024 10:21:00"), comment:`Peace is the true path.` },
        { userName: 'AvatarFan', postTime: new Date("October 20, 2024 11:51:00"), comment:`They look like Airbenders` },
      ],
    },
    // Quetzali
    {
      tribe_id: quetzali[0]._id,
      tribe_name: `Quetzali`,
      comments_section: [
        { userName: 'StormCaller', postTime: new Date("October 13, 2024 11:13:00"), comment:`Thunderous applause!` },
        { userName: 'FeatheredFury', postTime: new Date("October 17, 2024 10:21:00"), comment:`Flying high, striking fast.` },
        { userName: 'BratWurst', postTime: new Date("October 19, 2024 11:53:00"), comment:`Everybody gangsta till the Aquarion crab army shows up` },
        { userName: 'FeatheredFury', postTime: new Date("October 21, 2024 10:00:00"), comment:`@BratWurst Shut up` },
      ],
    },
    // Yadakk
    {
      tribe_id: yadakk[0]._id,
      tribe_name: `Yadakk`,
      comments_section: [
        { userName: 'RoadRunner', postTime: new Date("October 13, 2024 11:13:00"), comment:`All hail Genghis Khan!` },
        { userName: 'RoadRunner', postTime: new Date("October 13, 2024 11:14:00"), comment:`All hail Genghis Khan!` },
        { userName: 'TradeMaster', postTime: new Date("October 14, 2024 10:21:00"), comment:`@RoadRunner You commented that twice` },
      ],
    },
    // Aquarion
    {
      tribe_id: aquarion[0]._id,
      tribe_name: `Aquarion`,
      comments_section: [
        { userName: 'TideTamer', postTime: new Date("October 13, 2024 11:13:00"), comment:`The Jellyfish are hella OP` },
        { userName: 'DeepDiver', postTime: new Date("October 17, 2024 10:21:00"), comment:`The ocean is my playground.` },
      ],
    },
    // Elyrion
    {
      tribe_id: elyrion[0]._id,
      tribe_name: `∑∫ỹriȱŋ`,
      comments_section: [
        { userName: 'MysticMage', postTime: new Date("October 13, 2024 11:13:00"), comment:`Dragon Spam all the way` },
        { userName: 'StarSeeker', postTime: new Date("October 17, 2024 10:21:00"), comment:`Why do they have archers if they cut down forests? Are they stupid?` },
      ],
    },
    // Cymanti
    {
      tribe_id: cymanti[0]._id,
      tribe_name: `Cymanti`,
      comments_section: [
        { userName: 'HiveMind', postTime: new Date("October 13, 2024 11:13:00"), comment:`Only noobs use this tribe` },
        { userName: 'BugLord', postTime: new Date("October 17, 2024 10:21:00"), comment:`Creepy crawlies everywhere!` },
      ],
    },
    // Polaris
    {
      tribe_id: polaris[0]._id,
      tribe_name: `Polaris`,
      comments_section: [
        { userName: 'FrostBite', postTime: new Date("October 13, 2024 11:13:00"), comment:`Everybody Gangsta till the Polaris player puts down the Ice Bank` },
        { userName: 'CajunSamurai', postTime: new Date("October 17, 2024 10:21:00"), comment:`I HATE THE ICE ARCHERS!!!!!` },
      ],
    },
  ] 

  

  
  await Comment.insertMany(comments)
  console.log(`============================`)
  console.log(`COMMENTS have written! See what everyone thinks about these wonderful tribes!`)
  console.log(`============================`)
}

const run = async () => {
  await main()
  db.close()
}

run()