import express from 'express'
import content from '../middleware/content.js'
import auth from '../middleware/auth.js'
import admin from '../middleware/admin.js'
import upload from '../middleware/upload.js'

import {
  create,
  getAllQuestions,
  getQuestionById,
  editQuestion,
  deleteQuestion
} from '../controllers/questions.js'

const router = express.Router()

router.post('/', auth, admin, content('multipart/form-data'), upload, create)
router.get('/all', getAllQuestions)
router.get('/:id', getQuestionById)
router.patch('/:id', auth, admin, upload, content('multipart/form-data'), editQuestion)
router.patch('/deleteQuestion/:id', auth, admin, content('multipart/form-data'), upload, deleteQuestion)

export default router
