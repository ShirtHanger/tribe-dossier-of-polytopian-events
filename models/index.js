const mongoose = require('mongoose')

const mediaSchema = require('./media')
const cultureSchema = require('./culture')
const tribeSchema = require('./tribe')

const Media = mongoose.model('Media', mediaSchema)
const Culture = mongoose.model('Culture', cultureSchema)
const Tribe = mongoose.model('Tribe', tribeSchema)

module.exports = {
  Media,
  Culture,
  Tribe
}