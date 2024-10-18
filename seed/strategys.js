const db = require('../db') // Import database
const { Parent, Child } = require('../models') 

db.on('error', console.error.bind(console, 'MongoDB connection error:')) // Catch errors

const main = async () => { 

  const parentOne = await Parent.find({ country: 'name' })

  const childs = [
    {
    name: 'Jane Doe',
    age: 27,
    gender: 'female',
    parent_id: parentOne[0]._id, /* If there's an error, on an id line, remove array notation */
    },
  ]

  
  await Child.insertMany(childs)
  console.log('============================')
  console.log('CHILDS have been born! Thank the parents!')
  console.log('============================')
}

const run = async () => {
  await main()
  db.close()
}

run()