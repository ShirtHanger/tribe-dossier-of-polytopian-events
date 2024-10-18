const { Schema } = require('mongoose')

const childSchema = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: {type: String, required: true},
    parent_id: { type: Schema.Types.ObjectId, ref: 'Parent' },
  },
  { timestamps: true }
)

module.exports = childSchema