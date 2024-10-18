const db = require('../db') // Import database
const { Tribe, Media } = require('../models') 

db.on('error', console.error.bind(console, 'MongoDB connection error:')) // Catch errors

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
  const yadakk = await Tribe.find({ name: `Yădakk` })
  const aquarion = await Tribe.find({ name: `Aquarion` })
  const elyrion = await Tribe.find({ name: `∑∫ỹriȱŋ` })
  const cymanti = await Tribe.find({ name: `Cymanti` })
  const polaris = await Tribe.find({ name: `Polaris` })

  const medias = [
    // Xin-Xi
    {
      tribe_id: xinXi[0]._id,
      tribe_name: 'Xin-Xi',

      mediaURL_2019: `https://static.wikia.nocookie.net/supertribes/images/3/3b/Xin-xi_tribe_day.png`,
      mediaURL_2020: `https://static.wikia.nocookie.net/supertribes/images/5/53/Xin-xi_tribe_moon.png`,
      mediaURL_2021: `https://static.wikia.nocookie.net/supertribes/images/b/b3/Xin-xi_Tribe_Moon_2021.jpg`,
      mediaURL_2022: `https://static.wikia.nocookie.net/supertribes/images/a/ac/Xin-xi_Tribe_Moon_2022.jpg`,
      mediaURL_2023: `https://www.youtube.com/embed/MzScShoATIM?si=5HcM_yv3N-t-IYqL`,
      mediaURL_2024: `https://static.wikia.nocookie.net/supertribes/images/2/2b/Xin-xi_Tribe_Moon_2024.png`,
    },

    // Imperius
    {
      tribe_id: imperius[0]._id,
      tribe_name: 'Imperius',

      mediaURL_2019: `https://static.wikia.nocookie.net/supertribes/images/c/ce/Imperius_tribeday.png`,
      mediaURL_2020: `https://static.wikia.nocookie.net/supertribes/images/2/22/Imperius_Tribe_Moon.png`,
      mediaURL_2021: `https://static.wikia.nocookie.net/supertribes/images/0/02/Imperius_Tribe_Moon_2021.png`,
      mediaURL_2022: `https://static.wikia.nocookie.net/supertribes/images/2/23/Imperius_Tribe_Moon_2022.png`,
      mediaURL_2023: `https://www.youtube.com/embed/kC17XlCmJaU?si=xkqureSu-ZK4y7F7`,
      mediaURL_2024: `https://static.wikia.nocookie.net/supertribes/images/1/13/Imperius_Tribe_Moon_2024.jpg`,
    },

    // Bardur
    {
      tribe_id: bardur[0]._id,
      tribe_name: 'Bardur',

      mediaURL_2019: `https://static.wikia.nocookie.net/supertribes/images/c/c1/Lux_vs_bardur.png`,
      mediaURL_2020: `https://static.wikia.nocookie.net/supertribes/images/4/41/Bardur_Tribe_Moon.png`,
      mediaURL_2021: `https://static.wikia.nocookie.net/supertribes/images/2/2f/2021_Bardur_Tribe_Moon.jpg`,
      mediaURL_2022: `https://static.wikia.nocookie.net/supertribes/images/7/79/Bardur_Tribe_Moon_2022.jpg`,
      mediaURL_2023: `https://www.youtube.com/embed/wl_9-wAHbRM?si=rYqneCuDKzdvRXMk`,
    },

    // Oumaji
    {
      tribe_id: oumaji[0]._id,
      tribe_name: 'Oumaji',

      mediaURL_2019: `https://static.wikia.nocookie.net/supertribes/images/4/45/Oumaji_tribeday.png`,
      mediaURL_2020: `https://static.wikia.nocookie.net/supertribes/images/f/fe/Oumaji_Tribe_Moon.png`,
      mediaURL_2021: `https://static.wikia.nocookie.net/supertribes/images/4/4a/2021_Oumaji_Tribe_Moon_2.jpg`,
      mediaURL_2022: `https://static.wikia.nocookie.net/supertribes/images/e/e5/Oumaji_Tribe_Moon_2022.png`,
      mediaURL_2023: `https://www.youtube.com/embed/8OTNyQDoIpQ?si=mAxWLgEZWHJKoOsr`,
      mediaURL_2024: `https://static.wikia.nocookie.net/supertribes/images/e/e7/Oumaji_Tribe_Moon_2024.jpg`,
    },

    // Kickoo
    {
      tribe_id: kickoo[0]._id,
      tribe_name: 'Kickoo',

      mediaURL_2019: `https://static.wikia.nocookie.net/supertribes/images/1/10/KickooTribeDay2019.png`,
      mediaURL_2020: `https://static.wikia.nocookie.net/supertribes/images/f/f1/Kickoo_Tribe_Moon.jpg`,
      mediaURL_2021: `https://static.wikia.nocookie.net/supertribes/images/e/e4/Kickoo_Tribe_Moon_2021.jpg`,
      mediaURL_2022: `https://static.wikia.nocookie.net/supertribes/images/d/df/Kickoo_Tribe_Moon_2022.jpg`,
      mediaURL_2023: `https://www.youtube.com/embed/D96CldGtkQs?si=iMO2Ev4MGI2wiTQD`,
      mediaURL_2024: `https://static.wikia.nocookie.net/supertribes/images/8/88/Kickoo_Tribe_Moon_2024.png`,
    },

    // Hoodrick
    {
      tribe_id: hoodrick[0]._id,
      tribe_name: 'Hoodrick',

      mediaURL_2019: `https://static.wikia.nocookie.net/supertribes/images/5/5b/Hoodrick_tribe_day.png`,
      mediaURL_2020: `https://static.wikia.nocookie.net/supertribes/images/a/ae/Hoodrick_Tribe_Moon.png`,
      mediaURL_2021: `https://static.wikia.nocookie.net/supertribes/images/7/70/Hoodrick_Tribe_Moon_2021.png`,
      mediaURL_2022: `https://static.wikia.nocookie.net/supertribes/images/7/7f/Hoodrick_Tribe_Moon_2022.jpg`,
      mediaURL_2023: `https://www.youtube.com/embed/HDy51yaqFn4?si=P-J2EXm9VGdDCe-P`,
      mediaURL_2024: `https://static.wikia.nocookie.net/supertribes/images/0/00/Hoodrick_Tribe_Moon_2024.png`,
    },

    // Luxidoor
    {
      tribe_id: luxidoor[0]._id,
      tribe_name: 'Luxidoor',

      mediaURL_2019: `https://static.wikia.nocookie.net/supertribes/images/7/70/Luxidoor_Tribe_Day.png`,
      mediaURL_2020: `https://static.wikia.nocookie.net/supertribes/images/c/c1/Luxidoor_Tribe_Moon.jpg`,
      mediaURL_2021: `https://static.wikia.nocookie.net/supertribes/images/b/b0/Luxidoor_Tribe_Moon_2021.jpeg`,
      mediaURL_2022: `https://static.wikia.nocookie.net/supertribes/images/5/54/Luxidoor_Tribe_Moon_2022.jpeg`,
      mediaURL_2023: `https://www.youtube.com/embed/trH4qEuNDBs?si=-h48sQDtq5-WhKU0`,
      mediaURL_2024: `https://static.wikia.nocookie.net/supertribes/images/6/68/Luxidoor_Tribe_Moon_2024.jpg
`,
    },

    // Vengir
    {
      tribe_id: vengir[0]._id,
      tribe_name: 'Vengir',

      mediaURL_2019: `https://static.wikia.nocookie.net/supertribes/images/3/3c/Vengir_tribe_day.png`,
      mediaURL_2020: `https://static.wikia.nocookie.net/supertribes/images/6/63/Vengir_Tribe_Moon.png`,
      mediaURL_2021: `https://static.wikia.nocookie.net/supertribes/images/1/19/Vengir_Tribe_Moon_2021.png`,
      mediaURL_2022: `https://static.wikia.nocookie.net/supertribes/images/e/e4/Vengir_Tribe_Moon_2022.jpg`,
      mediaURL_2023: `https://www.youtube.com/embed/ZQk4sPukkHE?si=JeMXxOEE9vZ8mJEr`,
    },

    // Zebasi
    {
      tribe_id: zebasi[0]._id,
      tribe_name: 'Zebasi',

      mediaURL_2019: `https://static.wikia.nocookie.net/supertribes/images/6/60/Zebasi_tribe_day.png`,
      mediaURL_2020: `https://static.wikia.nocookie.net/supertribes/images/3/34/Zebasi_Tribe_Moon.png`,
      mediaURL_2021: `https://static.wikia.nocookie.net/supertribes/images/2/23/Zebasi_Tribe_Moon_2021.jpg`,
      mediaURL_2022: `https://static.wikia.nocookie.net/supertribes/images/9/96/Zebasi_Tribe_Moon_2022.jpg`,
      mediaURL_2023: `https://www.youtube.com/embed/DvJNhd_CA7o?si=PvZ2UkmrSQdROou1`,
      mediaURL_2024: `https://static.wikia.nocookie.net/supertribes/images/a/a6/Zebasi_Tribe_Moon_2024.jpg`,
    },

    // Ai-Mo
    {
      tribe_id: aiMo[0]._id,
      tribe_name: 'Ai-Mo',

      mediaURL_2019: `https://static.wikia.nocookie.net/supertribes/images/5/52/AI-mo_tribeday.png`,
      mediaURL_2020: `https://static.wikia.nocookie.net/supertribes/images/3/34/Ai-mo_Tribe_Moon.png`,
      mediaURL_2021: `https://static.wikia.nocookie.net/supertribes/images/b/bf/Ai-Mo_Tribe_Moon_2021.png`,
      mediaURL_2022: `https://static.wikia.nocookie.net/supertribes/images/d/d1/Ai-Mo_Tribe_Moon_2022.jpg`,
      mediaURL_2023: `https://www.youtube.com/embed/Avyz7z002U0?si=wUsjDGvBogMQxGtb`,
      mediaURL_2024: `https://static.wikia.nocookie.net/supertribes/images/0/00/Ai-Mo_Tribe_Moon_2024.jpg`,
    },

    // Quetzali
    {
      tribe_id: quetzali[0]._id,
      tribe_name: 'Quetzali',

      mediaURL_2019: `https://static.wikia.nocookie.net/supertribes/images/3/35/Quetzali_tribe_day.png`,
      mediaURL_2020: `https://static.wikia.nocookie.net/supertribes/images/6/66/Quetzali_Tribe_Moon.png`,
      mediaURL_2021: `https://static.wikia.nocookie.net/supertribes/images/a/ac/2021_Quetzali_Tribe_Moon.png`,
      mediaURL_2022: `https://static.wikia.nocookie.net/supertribes/images/b/b3/Quetzali_Tribe_Moon_2022.jpg`,
      mediaURL_2023: `https://www.youtube.com/embed/hGpGWNzYiVo?si=mMo5wcYU8_VqjcV_`,
      mediaURL_2024: `https://static.wikia.nocookie.net/supertribes/images/f/fe/Quetzali_Tribe_Moon_2024.png`,
    },

    // Yadakk
    {
      tribe_id: yadakk[0]._id,
      tribe_name: 'Yadakk',

      mediaURL_2019: `https://static.wikia.nocookie.net/supertribes/images/f/f4/Yadakk_tribe_day.png`,
      mediaURL_2020: `https://static.wikia.nocookie.net/supertribes/images/e/e0/Yadakk_Tribe_Moon.png`,
      mediaURL_2021: `https://static.wikia.nocookie.net/supertribes/images/f/f1/Yadakk_Tribe_Moon_2021.png`,
      mediaURL_2022: `https://static.wikia.nocookie.net/supertribes/images/9/99/Yadakk_Tribe_Moon_2022.png`,
      mediaURL_2023: `https://www.youtube.com/embed/PppdyT0lNiY?si=UJP8oZyrGDiRmKaJ`,
      mediaURL_2024: `https://static.wikia.nocookie.net/supertribes/images/d/d6/Yadakk_Tribe_Moon_2024.jpg`,
    },

    // Aquarion
    {
      tribe_id: aquarion[0]._id,
      tribe_name: 'Aquarion',

      mediaURL_2020: `https://static.wikia.nocookie.net/supertribes/images/d/de/Aquarion_Tribe_Day.png`,
      mediaURL_2021: `https://static.wikia.nocookie.net/supertribes/images/d/de/Aquarion_Tribe_Day.png`,
      mediaURL_2022: `https://static.wikia.nocookie.net/supertribes/images/e/ef/Aquarion_Tribe_Week_2022.jpg`,
      mediaURL_2023: `https://www.youtube.com/embed/DOZ3hKbHzlE?si=8UXB5elYKK7nUX4f`,
    },

    // ∑∫ỹriȱŋ
    {
      tribe_id: elyrion[0]._id,
      tribe_name: '∑∫ỹriȱŋ',

      mediaURL_2021: `https://static.wikia.nocookie.net/supertribes/images/3/3a/Elyrion_Tribe_Week.jpg`,
      mediaURL_2022: `https://static.wikia.nocookie.net/supertribes/images/5/55/Elyrion_Tribe_Week_2022.png`,
    },

    // Cymanti
    {
      tribe_id: cymanti[0]._id,
      tribe_name: 'Cymanti',

      mediaURL_2021: `https://www.youtube.com/embed/k5n22U76VOk?si=1RM02C_xY807TYOD`,
      mediaURL_2022: `https://static.wikia.nocookie.net/supertribes/images/d/d5/Cymanti_Tribe_Moon_2022.jpg`,
      mediaURL_2023: `https://www.youtube.com/embed/aiGSIPKtK68?si=Ei7BZDJZl81f7Z4k`,
      mediaURL_2024: `https://static.wikia.nocookie.net/supertribes/images/1/1e/Cymanti_Tribe_Moon_2024.jpg`,
    },

    // Polaris
    {
      tribe_id: polaris[0]._id,
      tribe_name: 'Polaris',

      mediaURL_2021: `https://static.wikia.nocookie.net/supertribes/images/7/75/Polaris_Tribe_Week.png`,
      mediaURL_2022: `https://static.wikia.nocookie.net/supertribes/images/3/32/Polaris_Tribe_Week_2022.png`,
      mediaURL_2023: `https://www.youtube.com/embed/psbe-Ptxsmg?si=gN3OkTkjEyaEKaYd`,
      mediaURL_2024: `https://static.wikia.nocookie.net/supertribes/images/d/d0/Polaris_Tribe_Week_2024.png`,
    },
  ]

  
  await Media.insertMany(medias)
  console.log('============================')
  console.log('Tribe MEDIA has been seeded')
  console.log('============================')
}

const run = async () => {
  await main()
  db.close()
}

run()