import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema({
  question: {
    type: String
  },
  answer: {
    type: String
  }
}, { versionKey: false })

export default mongoose.model('questions', questionSchema)
