
const express = require('express') 
const PORT = process.env.PORT || 3001
const cors = require('cors')
const db = require('./db')
// Insert your database schema files here (??)
const { Comment, Media, Culture, Tribe } = require('./models')

/* Optional (?), for logging functionality */
const bodyParser = require('body-parser')
const logger = require('morgan')

const tribeController = require('./controllers/tribeController')
const cultureController = require('./controllers/cultureController')
const mediaController = require('./controllers/mediaController')
const commentController = require('./controllers/commentController')
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
    res.send('Welcome to the Tribe Dossier! Learn more about the cultures of the tribes of Polytopia (Owned and Developed by Midjiwan)')
})













// INDEX - app.get
app.get('/tribes', tribeController.getAllTribes)
// SHOW - app.get
app.get('/tribes/:id', tribeController.getTribeById)

app.get('/tribes/name/:name', tribeController.getTribeByName)

app.get('/tribes/type/free/', tribeController.getTribeByFree)
app.get('/tribes/type/paid/', tribeController.getTribeByPaid)
app.get('/tribes/type/human/', tribeController.getTribeByHuman)
app.get('/tribes/type/special/', tribeController.getTribeBySpecial)

// CREATE - app.post
/* POST Goes to INDEX route because we are creating something new */
app.post('/tribes', tribeController.createTribe) // .post will create stuff!
/* UPDATE and DELETE must go in show route since we are updating a specific item */
// UPDATE - app.put
app.put('/tribes/:id', tribeController.updateTribe)
// DELETE - app.delete
app.delete('/tribes/:id', tribeController.deleteTribe)

/* body-parser is needed for CRUD stuff (?) */
/* Browser can only GET, we need tools to do full CRUD */
/* Create stuff with ThunderClient or something similar */

// INDEX - app.get
app.get('/cultures', cultureController.getAllCultures)
// SHOW - app.get
app.get('/cultures/:id', cultureController.getCultureById)

app.get('/cultures/name/:name', cultureController.getCultureByName)

// CREATE - app.post
/* POST Goes to INDEX route because we are creating something new */
app.post('/cultures', cultureController.createCulture) // .post will create stuff!
/* UPDATE and DELETE must go in show route since we are updating a specific item */
// UPDATE - app.put
app.put('/cultures/:id', cultureController.updateCulture)
// DELETE - app.delete
app.delete('/cultures/:id', cultureController.deleteCulture)

/* body-parser is needed for CRUD stuff (?) */
/* Browser can only GET, we need tools to do full CRUD */
/* Create stuff with ThunderClient or something similar */

// INDEX - app.get
app.get('/medias', mediaController.getAllMedias)
// SHOW - app.get
app.get('/medias/:id', mediaController.getMediaById)

app.get('/medias/name/:name', mediaController.getMediaByName)
// CREATE - app.post
/* POST Goes to INDEX route because we are creating something new */
app.post('/medias', mediaController.createMedia) // .post will create stuff!
/* UPDATE and DELETE must go in show route since we are updating a specific item */
// UPDATE - app.put
app.put('/medias/:id', mediaController.updateMedia)
// DELETE - app.delete
app.delete('/medias/:id', mediaController.deleteMedia)

/* body-parser is needed for CRUD stuff (?) */
/* Browser can only GET, we need tools to do full CRUD */
/* Create stuff with ThunderClient or something similar */

// INDEX - app.get
app.get('/comments', commentController.getAllComments)
// SHOW - app.get
app.get('/comments/:id', commentController.getCommentById)

app.get('/comments/name/:name', commentController.getCommentByName)
// CREATE - app.post
/* POST Goes to INDEX route because we are creating something new */
app.post('/comments', commentController.createComment) // .post will create stuff!
/* UPDATE and DELETE must go in show route since we are updating a specific item */
// UPDATE - app.put
app.put('/comments/:id', commentController.updateComment)
app.put('/comments/name/:name', commentController.updateCommentByName)
// DELETE - app.delete
app.delete('/comments/:id', commentController.deleteComment)

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