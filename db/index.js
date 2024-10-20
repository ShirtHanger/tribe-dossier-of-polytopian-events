const mongoose = require('mongoose')
const password = require('./secret_password')

mongoose.connect( // Place YOUR connection string with the password. Before the ?, enter desired database name
  `mongodb+srv://shirt-skunk-63:${password.connectionStringPass}@ga-student-cluster.6hjot.mongodb.net/Tribe-Dossier-Website?retryWrites=true&w=majority&appName=ga-student-cluster`
)
.then(()=> {
  console.log('Successfully connected to MongoDB!') // Confirmation for us
})
.catch((e) => { // Checks for errors
  console.error('Connection error', e.message)
})
    
mongoose.set('debug', true) // This creates more bull to read when there's an error, not required, but HELPFUL

const db = mongoose.connection

module.exports = db