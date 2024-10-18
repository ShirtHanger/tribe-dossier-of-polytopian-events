const { Schema } = require('mongoose')

const tribeSchema = new Schema(
  {
    name: { type: String, required: true },
    inspirations: [{ type: String, required: false }],
    leader: { type: String, required: true },
    description: { type: String, required: true},
    colorName: { type: String, required: true},
    colorHex: { type: String, required: true},
    headImageURL: { type: String, required: true },
    unitImageURL: { type: String, required: true },
    buildingImageURL: { type: String, required: true },
    isFreeTribe: { type: Boolean, required: true },
    isSpecialTribe: { type: Boolean, required: true },
    theme: { type: String, required: false },
    natureAmbience: { type: String, required: false },
    skins: [{
      name: { type: String, required: false },
      description: { type: String, required: false },
      headImageURL: { type: String, required: false },
      unitImageURL: { type: String, required: false },
      buildingImageURL: { type: String, required: false },
      theme: { type: String, required: false },
      natureAmbience: { type: String, required: false },
    }]
  },
  { timestamps: true }
)

/* Append Themes to all tribes later, after you finish filling up tribe seed */

module.exports = tribeSchema