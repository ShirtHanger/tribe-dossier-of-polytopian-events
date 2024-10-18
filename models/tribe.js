// const mongoose = require('mongoose')
/* If only one schema, you can do models index function with this. */
const { Schema } = require('mongoose')

const parentSchema = new Schema(
  {
    country: { type: String, required: true },
    religion: { type: Number, required: true, min: 0 },
    isMoral: { type: Boolean, required: true },
  },
  { timestamps: true }
)

module.exports = parentSchema

// module.exports = mongoose.model('parents', Parent) 

/* If there is only one schema, you can do the models index function here */