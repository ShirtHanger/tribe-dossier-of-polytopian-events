const db = require('../db') // Import database
const { Tribe, Media } = require('../models') 

db.on('error', console.error.bind(console, 'MongoDB connection error:')) // Catch errors

const main = async () => { 

  const xinXi = await Tribe.find({ name: 'Xin-Xi' })

  const medias = [
    {
      tribe_id: xinXi[0]._id,
      tribe_name: 'Xin-Xi',
  
      mediaURL_2019: `https://static.wikia.nocookie.net/supertribes/images/3/3b/Xin-xi_tribe_day.png/revision/latest`,
      mediaURL_2020: `https://static.wikia.nocookie.net/supertribes/images/5/53/Xin-xi_tribe_moon.png/revision/latest`,
      mediaURL_2021: `https://static.wikia.nocookie.net/supertribes/images/b/b3/Xin-xi_Tribe_Moon_2021.jpg/revision/latest`,
      mediaURL_2022: `https://static.wikia.nocookie.net/supertribes/images/a/ac/Xin-xi_Tribe_Moon_2022.jpg/revision/latest`,
      mediaURL_2023: `https://www.youtube.com/embed/MzScShoATIM?si=5HcM_yv3N-t-IYqL`,
      mediaURL_2024: `https://static.wikia.nocookie.net/supertribes/images/2/2b/Xin-xi_Tribe_Moon_2024.png/revision/latest`,
    },
  ]

  
  await Media.insertMany(medias)
  console.log('============================')
  console.log('MEDIAS have been born! Thank the tribes!')
  console.log('============================')
}

const run = async () => {
  await main()
  db.close()
}

run()