import mongoose from 'mongoose'

const questionSchema = new mongoose.Schema({
  question: {
    type: String
  },
  answer: {
    type: String
  }
})

export default mongoose.model('question', questionSchema)
