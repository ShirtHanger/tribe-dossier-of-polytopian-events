const { Schema } = require('mongoose')

const mediaSchema = new Schema(
  {
    tribe_id: { type: Schema.Types.ObjectId, ref: 'Tribe' },
    tribe_name: { type: String, required: true },

    mediaURL_2019: { type: String, required: false },
    mediaURL_2020: { type: String, required: false },
    mediaURL_2021: { type: String, required: false },
    mediaURL_2022: { type: String, required: false },
    mediaURL_2023: { type: String, required: false },
    mediaURL_2024: { type: String, required: false },
  },
  { timestamps: true }
)

module.exports = mediaSchema