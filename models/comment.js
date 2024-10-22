const { Schema } = require('mongoose')

const commentSchema = new Schema(
  {
    tribe_id: { type: Schema.Types.ObjectId, ref: 'Tribe' },
    tribe_name: { type: String, required: true },
    
    comments_section: [
        {
           userName: { type: String, required: true },
           comment: { type: String, required: true },
        }
    ]
  },
  { timestamps: true }
)

module.exports = commentSchema