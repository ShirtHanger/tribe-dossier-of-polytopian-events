const { Schema } = require('mongoose')

const mediaSchema = new Schema(
  {
    tribe_id: { type: Schema.Types.ObjectId, ref: 'Tribe' },
    tribe_name: { type: String, required: true },

    mediaURLs: {
      url_2019: { type: String, required: false },
      url_2020: { type: String, required: false },
      url_2021: { type: String, required: false },
      url_2022: { type: String, required: false },
      url_2023: { type: String, required: false },
      url_2024: { type: String, required: false },
  }
  },
  { timestamps: true }
)

module.exports = mediaSchema