import express from 'express'
import content from '../middleware/content.js'
import auth from '../middleware/auth.js'
import admin from '../middleware/admin.js'
import {
  createQuestion,
  getAllQuestions,
  getQuestionId,
  editQuestion
} from '../controllers/questions.js'

const router = express.Router()

router.post('/', auth, admin, content('application/json'), createQuestion)
router.get('/all', getAllQuestions)
router.get('/:id', getQuestionId)
router.patch('/:id', auth, admin, content('application/json'), editQuestion)

export default router
