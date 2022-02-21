import express from 'express'
import content from '../middleware/content.js'
import auth from '../middleware/auth.js'
import upload from '../middleware/upload.js'

import {
  create,
  getWorks,
  getAllWorks,
  getWorkById,
  updateWorkById,
  deleteWorks,
  getMyWork
} from '../controllers/userworks.js'

const router = express.Router()

router.post('/', auth, content('multipart/form-data'), upload, create)
router.get('/', getWorks)
router.get('/all', auth, getAllWorks)
router.get('/:id', getWorkById)
router.patch('/:id', auth, content('multipart/form-data'), upload, updateWorkById)
router.patch('/deleteProducts/:id', auth, content('multipart/form-data'), upload, deleteWorks)
router.get('/me', auth, getMyWork)

export default router
