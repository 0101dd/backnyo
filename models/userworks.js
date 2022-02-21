import mongoose from 'mongoose'

const userworkSchema = new mongoose.Schema({
  user: {
    type: mongoose.ObjectId,
    ref: 'users'
  },
  name: {
    type: String,
    required: [true, '作品標題必填']
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  show: {
    type: Boolean,
    default: false
  }
}, { versionKey: false })

export default mongoose.model('userworks', userworkSchema)
