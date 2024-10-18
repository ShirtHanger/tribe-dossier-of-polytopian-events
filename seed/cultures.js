const db = require(`../db`) // Import database
const { Tribe, Culture } = require(`../models`) 

db.on(`error`, console.error.bind(console, `MongoDB connection error:`)) // Catch errors

const main = async () => { 

  const xinXi = await Tribe.find({ name: `Xin-Xi` })

  const cultures = [
    {
      tribe_id: xinXi[0]._id,
      tribe_name: `Xin-Xi`,
      
      lore_2019: `Did you know that the Xin-Xi named themselves after Mt. Xin-Xi, the tallest and most sacred mountain on the Square? With the help of their mounts, a brave few climb the summit to prove themselves worthy of the Xini-Kai Spirit’s blessing, which lets them prepare the amazing Xini blossom tea.`,
      lore_2020: `While every tribe has their own rituals surrounding the laying of an egg, the Xin-Xi are well known for their elaborate performances. At dawn, recently laid Xin-Xi eggs are painted with bright, vibrant colors and mesmerizing patterns, all while a troupe of village musicians play a song to ward off evil spirits.`,
      lore_2021: `Tangy, refreshing, and fits in your hand, the plump Ixi fruit is a delightfully versatile fruit that can be found all throughout the lands of the Xin-Xi. The Ixi fruits are considered a token of good fortune, and are often handed to traveling parties to bestow them luck on their adventures.`,
      lore_2022: `Climbing a big rock isn't hard, can't anyone do that?" Yes, maybe a small band of people, but what about an army of people? The Xin-Xi don't just climb mountains for fun, but have perfected the science of managing troop formations, defense, logistics, and supplies around these steep summits.`,
      lore_2023: `Xin-xi buildings are primarily made from the bark of Xini trees - a sturdy, durable plant that can resist the frequent windstorms they encounter. The Xin-xi have a strong communal tradition of helping each other build and rebuild houses, shops, and other buildings in preparation for natural disasters.`,
      lore_2024: `Despite being a rather reserved people, the Xin-xi are avid hikers and outdoorsfolk, known for their interest in mountaineering, camping, and tent-making. All these skills are needed by the Emperor and their entourage as they make their annual pilgrimage to the top of Mt. Xin-Xi.`,
    },
  ]

  
  await Culture.insertMany(cultures)
  console.log(`============================`)
  console.log(`CULTURES have been born! Thank the tribes!`)
  console.log(`============================`)
}

const run = async () => {
  await main()
  db.close()
}

run()