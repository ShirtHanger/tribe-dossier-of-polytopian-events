const mongoose = require('mongoose')

const childSchema = require('./child')
const parentSchema = require('./parent')

const Child = mongoose.model('Child', childSchema)
const Parent = mongoose.model('Parent', parentSchema)

module.exports = {
  Child,
  Parent
}