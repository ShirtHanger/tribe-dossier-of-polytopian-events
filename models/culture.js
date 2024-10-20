const { Schema } = require('mongoose')

const cultureSchema = new Schema(
  {
    tribe_id: { type: Schema.Types.ObjectId, ref: 'Tribe' },
    tribe_name: { type: String, required: true },
    
    lore: {
    blurb_2019: { type: String, required: false },
    blurb_2020: { type: String, required: false },
    blurb_2021: { type: String, required: false },   
    blurb_2022: { type: String, required: false },
    blurb_2023: { type: String, required: false },
    blurb_2024: { type: String, required: false },
  }
  },
  { timestamps: true }
)

module.exports = cultureSchema