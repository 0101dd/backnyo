import express from 'express'
import content from '../middleware/content.js'
import auth from '../middleware/auth.js'
// import admin from '../middleware/admin.js'
import upload from '../middleware/upload.js'

import {
  register,
  login,
  extend,
  logout,
  getAllUsers,
  getUserInfo,
  getUerById,
  updateUserById,
  deleteUserById
} from '../controllers/users.js'
const router = express.Router()

router.post('/', content('application/json'), register)
router.post('/login', content('application/json'), login)
router.post('/extend', auth, extend)
router.delete('/logout', auth, logout)
router.get('/all', auth, getAllUsers)
router.get('/me', auth, getUserInfo)
router.get('/:id', auth, getUerById)
router.patch('/:id', auth, upload, content('multipart/form-data'), updateUserById)
router.patch('/:id', auth, upload, content('multipart/form-data'), deleteUserById)

export default router
