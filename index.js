import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import usersRouter from './routes/users.js'
import questionsRouter from './routes/questions.js'
import productsRouter from './routes/products.js'
import worksRouter from './routes/works.js'
import userworksRouter from './routes/userworks.js'
import orderRouter from './routes/orders.js'

mongoose.connect(process.env.DB_URL, () => {
  console.log('MongoDB Connected')
})

const app = express()

app.use(cors({
  origin (origin, callback) {
    if (origin === undefined || origin.includes('github') || origin.includes('localhost')) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed'), false)
    }
  }
}))

app.use((_, req, res, next) => {
  res.status(403).send({ success: false, message: '請求被拒絕' })
})

app.use(express.json())
app.use((_, req, res, next) => {
  res.status(400).send({ success: false, message: '資料格式錯誤' })
})

app.use('/users', usersRouter)
app.use('/questions', questionsRouter)
app.use('/products', productsRouter)
app.use('/works', worksRouter)
app.use('/userworks', userworksRouter)
app.use('/orders', orderRouter)

app.all('*', (req, res) => {
  res.status(404).send({ success: false, message: '找不到' })
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Server Started')
})
