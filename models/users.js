import mongoose from 'mongoose'
import md5 from 'md5'
import validator from 'validator'

const userSchema = new mongoose.Schema({
  account: {
    type: String,
    minlength: [4, '帳號必須 4 個字以上'],
    maxlength: [15, '帳號必須 15 個字以下'],
    unique: true,
    required: [true, '帳號為必填']
  },
  password: {
    type: String,
    required: [true, '密碼為必填']
  },
  email: {
    type: String,
    required: [true, '信箱為必填'],
    unique: true,
    validate: {
      validator (email) {
        return validator.isEmail(email)
      },
      message: '信箱格式不正確'
    }
  },
  role: {
    type: Number,
    default: 0
  },
  tokens: {
    type: [String]
  },
  cart: {
    type: [
      {
        product: {
          type: mongoose.ObjectId,
          ref: 'products',
          required: [true, '缺少商品 ID']
        },
        quantity: {
          type: Number,
          required: [true, '缺少商品數量']
        },
        comment: {
          type: String
        }
      }
    ]
  },
  image: {
    type: String
  },
  nickName: {
    type: String
  },
  age: {
    type: Number
  },
  birthday: {
    type: String
  },
  address: {
    type: String
  },
  phone: {
    type: String,
    minlength: [10, '少於 10 位數']
  },
  gender: {
    type: Boolean
  }
}, { versionKey: false })

userSchema.pre('save', function (next) {
  const user = this
  if (user.isModified('password')) {
    if (user.password.length >= 4 && user.password.length <= 20) {
      user.password = md5(user.password)
    } else {
      const error = new mongoose.Error.ValidationError(null)
      error.addError('password', new mongoose.Error.ValidatorError({ message: '密碼長度錯誤' }))
      next(error)
      return
    }
  }
  next()
})

userSchema.pre('findOneAndUpdate', function (next) {
  const user = this._update
  if (user.password) {
    if (user.password.length >= 4 && user.password.length <= 20) {
      user.password = md5(user.password)
    } else {
      const error = new mongoose.Error.ValidationError(null)
      error.addError('password', new mongoose.Error.ValidatorError({ message: '密碼長度錯誤' }))
      next(error)
      return
    }
  }
  next()
})

export default mongoose.model('users', userSchema)
