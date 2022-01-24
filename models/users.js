import mongoose from 'mongoose'
// import md5 from 'md5'
// import validator from 'valdiator'

const userSchema = new mongoose.Schema({
  account: {
    type: String,
    minlength: [4, '帳號必須 4 個字以上'],
    maxlength: [15, '帳號必須 15 個字以下'],
    unique: true,
    required: [true, '帳號為必填']
  },
  password: {
    type: Number,
    minlength: [4, '密碼必須 4 個字以上'],
    maxlength: [15, '密碼必須 15 個字以下'],
    required: [true, '密碼為必填']
  }
})

export default mongoose.model('users', userSchema)
