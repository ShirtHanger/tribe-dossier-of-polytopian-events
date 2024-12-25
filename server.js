
const express = require('express') 
const PORT = process.env.PORT || 3001
const cors = require('cors')
const db = require('./db')
// database schema files and imports just incase
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

const allowedOrigins = [
    'https://tribe-dossier-fan-site.surge.sh',
    'https://shirthanger.github.io'
  ]


// This prevents third parties and randos from accessing the render link via the source code
// This checks if the origin is any of my website links, and will ONLY accept requests from that  
app.use(cors({
    origin: function (origin, callback) {

        if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true)
        } else {
        callback(new Error('Not allowed by CORS'))
        }
    }
}))

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

// Error handling middleware
app.use((err, req, res, next) => {
    if (err.message === 'Not allowed by CORS') {
      res.status(403).send('This is the backend! You are not supposed to be here! (Like the Cymanti)')
    } else {
      res.status(500).send('Internal Server Error')
    }
  })


/* 
=============
Tribe Routes
===============
 */


// INDEX - app.get
app.get('/tribes', tribeController.getAllTribes)

// SHOW - app.get
app.get('/tribes/:id', tribeController.getTribeById)
app.get('/tribes/name/:name', tribeController.getTribeByName)
// 
app.get('/tribes/type/free/', tribeController.getFreeTribes)
app.get('/tribes/type/paid/', tribeController.getPaidTribes)
app.get('/tribes/type/human/', tribeController.getHumanTribes)
app.get('/tribes/type/special/', tribeController.getSpecialTribes)

// CREATE - app.post
/* POST Goes to INDEX route because we are creating something new */
app.post('/tribes', tribeController.createTribe) 

/* UPDATE and DELETE must go in show route since we are updating a specific item */

// UPDATE - app.put
app.put('/tribes/:id', tribeController.updateTribe)
// DELETE - app.delete
app.delete('/tribes/:id', tribeController.deleteTribe)

/*body-parser needed for full CRUD stuff*/


/* 
=============
Culture Routes
===============
 */

// INDEX - app.get
app.get('/cultures', cultureController.getAllCultures)
// SHOW - app.get
app.get('/cultures/:id', cultureController.getCultureById)

app.get('/cultures/name/:name', cultureController.getCultureByTribeName)

// CREATE - app.post
/* POST Goes to INDEX route because we are creating something new */
app.post('/cultures', cultureController.createCulture) 
/* UPDATE and DELETE must go in show route since we are updating a specific item */
// UPDATE - app.put
app.put('/cultures/:id', cultureController.updateCulture)
// DELETE - app.delete
app.delete('/cultures/:id', cultureController.deleteCulture)

/*body-parser needed for full CRUD stuff*/

/* 
=============
Media Routes
===============
 */

// INDEX - app.get
app.get('/medias', mediaController.getAllMedias)
// SHOW - app.get
app.get('/medias/:id', mediaController.getMediaById)

app.get('/medias/name/:name', mediaController.getMediaByTribeName)
// CREATE - app.post
/* POST Goes to INDEX route because we are creating something new */
app.post('/medias', mediaController.createMedia) 
/* UPDATE and DELETE must go in show route since we are updating a specific item */
// UPDATE - app.put
app.put('/medias/:id', mediaController.updateMedia)
// DELETE - app.delete
app.delete('/medias/:id', mediaController.deleteMedia)

/*body-parser needed for full CRUD stuff*/


/* 
=============
Comment Routes
===============
 */

// INDEX - app.get
app.get('/comments', commentController.getAllComments)
// SHOW - app.get
app.get('/comments/:id', commentController.getCommentById)

app.get('/comments/name/:name', commentController.getCommentByTribeName)
// CREATE - app.post
/* POST Goes to INDEX route because we are creating something new */
app.post('/comments', commentController.createComment) 
/* UPDATE and DELETE must go in show route since we are updating a specific item */
// UPDATE - app.put
app.put('/comments/:id', commentController.updateComment)
app.put('/comments/name/:name', commentController.updateCommentByTribeName)
// DELETE - app.delete
app.delete('/comments/:id', commentController.deleteComment)

/*body-parser needed for full CRUD stuff*/


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