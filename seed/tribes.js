const db = require('../db')
const { Parent } = require('../models')



db.on('error', console.error.bind(console, 'MongoDB connection error:'))



const main = async () => {
    const parents = [
      {
        country: 'name',
        religion: 'Pickle Religion',
        isMoral: false,
      },
      {
        country: 'name',
        religion: 'Pickle Religion',
        isMoral: false,
      },
      {
        country: 'name',
        religion: 'Pickle Religion',
        isMoral: false,
      },
    ]
  
  

  await Parent.insertMany(parents) 

  console.log('============================')
  console.log('PARENTS have been seeded!')
  console.log('============================')

}

const run = async () => {

  await main()
  
  db.close()
}

run()