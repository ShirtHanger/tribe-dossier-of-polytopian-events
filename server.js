
const express = require('express') 
const PORT = process.env.PORT || 3001
const cors = require('cors')
const db = require('./db')
// Insert your database schema files here (??)
const { Uncle, Child, Parent } = require('./models')

/* Optional (?), for logging functionality */
const bodyParser = require('body-parser')
const logger = require('morgan')

const parentController = require('./controllers/parentController')
const childController = require('./controllers/childController')
const uncleController = require('./controllers/uncleController')
// require() imports and middleware here ^ ///////

const app = express() 

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

/* Optional (?), for logging functionality */
app.use(logger('dev'))
app.use(bodyParser.json())
// app.use() middleware here ^ ///////////////////

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
})

app.get('/', (req, res)=> { // request and response arguements
    res.send('Hello there! Welcome to my website!')
})













// INDEX - app.get
app.get('/parents', parentController.getAllParents)
// SHOW - app.get
app.get('/parents/:id', parentController.getParentById)
// CREATE - app.post
/* POST Goes to INDEX route because we are creating something new */
app.post('/parents', parentController.createParent) // .post will create stuff!
/* UPDATE and DELETE must go in show route since we are updating a specific item */
// UPDATE - app.put
app.put('/parents/:id', parentController.updateParent)
// DELETE - app.delete
app.delete('/parents/:id', parentController.deleteParent)

/* body-parser is needed for CRUD stuff (?) */
/* Browser can only GET, we need tools to do full CRUD */
/* Create stuff with ThunderClient or something similar */

// INDEX - app.get
app.get('/childs', childController.getAllChilds)
// SHOW - app.get
app.get('/childs/:id', childController.getChildById)
// CREATE - app.post
/* POST Goes to INDEX route because we are creating something new */
app.post('/childs', childController.createChild) // .post will create stuff!
/* UPDATE and DELETE must go in show route since we are updating a specific item */
// UPDATE - app.put
app.put('/childs/:id', childController.updateChild)
// DELETE - app.delete
app.delete('/childs/:id', childController.deleteChild)

/* body-parser is needed for CRUD stuff (?) */
/* Browser can only GET, we need tools to do full CRUD */
/* Create stuff with ThunderClient or something similar */

// INDEX - app.get
app.get('/uncles', uncleController.getAllUncles)
// SHOW - app.get
app.get('/uncles/:id', uncleController.getUncleById)
// CREATE - app.post
/* POST Goes to INDEX route because we are creating something new */
app.post('/uncles', uncleController.createUncle) // .post will create stuff!
/* UPDATE and DELETE must go in show route since we are updating a specific item */
// UPDATE - app.put
app.put('/uncles/:id', uncleController.updateUncle)
// DELETE - app.delete
app.delete('/uncles/:id', uncleController.deleteUncle)

/* body-parser is needed for CRUD stuff (?) */
/* Browser can only GET, we need tools to do full CRUD */
/* Create stuff with ThunderClient or something similar */











app.get('/middleware', (req, res, next) => {
    console.log('middleware is working') // Next will run THIS CODE first BEFORE the response is sent
    next()
},
    (req, res) => /* Must restart req and res */
        {res.send('response complete')}
)

app.get('/*', (req, res)=> {
    res.send({
       error: '404 file not found'
    })
})