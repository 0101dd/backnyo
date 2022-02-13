import express from 'express'
import content from '../middleware/content.js'
import auth from '../middleware/auth.js'
import admin from '../middleware/admin.js'
import {
  createQuestion,
  getAllQuestions
} from '../controllers/questions.js'

const router = express.Router()

router.post('/', auth, admin, content('application/json'), createQuestion)
router.get('/all', auth, admin, getAllQuestions)

export default router
