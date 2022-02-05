import express from 'express'
import content from '../middleware/content.js'

import {
  register,
  login
} from '../controllers/users.js'
const router = express.Router()

router.post('/', content('application/json'), register)
router.post('/login', content('application/json'), login)

export default router
