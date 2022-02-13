import express from 'express'
import content from '../middleware/content.js'
import auth from '../middleware/auth.js'
import admin from '../middleware/admin.js'

import {
  register,
  login,
  extend,
  logout,
  getAllUsers,
  getUserInfo
} from '../controllers/users.js'
const router = express.Router()

router.post('/', content('application/json'), register)
router.post('/login', content('application/json'), login)
router.post('/extend', auth, extend)
router.delete('/logout', auth, logout)
router.get('/all', auth, admin, getAllUsers)
router.get('/me', auth, getUserInfo)

export default router
