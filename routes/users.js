import express from 'express'
import content from '../middleware/content.js'
import auth from '../middleware/auth.js'
// import admin from '../middleware/admin.js'
// import upload from '../middleware/upload.js'

import {
  register,
  login,
  extend,
  logout,
  getAllUsers,
  getUserInfo,
  addCart,
  getCart,
  updateCart,
  getUerById
} from '../controllers/users.js'
const router = express.Router()

router.post('/', content('application/json'), register)
router.post('/login', content('application/json'), login)
router.post('/extend', auth, extend)
router.delete('/logout', auth, logout)
router.get('/all', auth, getAllUsers)
router.get('/me', auth, getUserInfo)
router.post('/me/cart', auth, addCart)
router.get('/me/cart', auth, getCart)
router.patch('/me/cart', auth, updateCart)
router.get('/:id', auth, getUerById)

export default router
