import express from 'express'
import content from '../middleware/content.js'
import auth from '../middleware/auth.js'
import admin from '../middleware/admin.js'
import upload from '../middleware/upload.js'

import {
  create,
  getWorks,
  getAllWorks,
  getWorkById,
  updateWorkById,
  deleteWorks
} from '../controllers/works.js'

const router = express.Router()

router.post('/', auth, content('multipart/form-data'), upload, create)
router.get('/', getWorks)
router.get('/all', auth, admin, getAllWorks)
router.get('/:id', getWorkById)
router.patch('/:id', auth, admin, content('multipart/form-data'), upload, updateWorkById)
router.patch('/deleteProducts/:id', auth, admin, content('multipart/form-data'), upload, deleteWorks)

export default router
