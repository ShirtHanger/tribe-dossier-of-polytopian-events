const mongoose = require('mongoose')

const commentSchema = require('./comment')
const mediaSchema = require('./media')
const cultureSchema = require('./culture')
const tribeSchema = require('./tribe')

const Comment = mongoose.model('Comment', commentSchema)
const Media = mongoose.model('Media', mediaSchema)
const Culture = mongoose.model('Culture', cultureSchema)
const Tribe = mongoose.model('Tribe', tribeSchema)

module.exports = {
  Comment,
  Media,
  Culture,
  Tribe
}