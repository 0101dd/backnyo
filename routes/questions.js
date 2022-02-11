import express from 'express'
import content from '../middleware/content.js'
import { createQuestion } from '../controllers/questions.js'

const router = express.Router()

router.post('/', content('application/json'), createQuestion)

export default router
