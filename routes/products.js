import express from 'express'
import content from '../middleware/content.js'
import auth from '../middleware/auth.js'
import admin from '../middleware/admin.js'
import upload from '../middleware/upload.js'

import {
  create,
  getProducts,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProducts
} from '../controllers/products.js'

const router = express.Router()

router.post('/', auth, admin, content('multipart/form-data'), upload, create)
router.get('/', getProducts)
router.get('/all', auth, admin, getAllProducts)
router.get('/:id', getProductById)
router.patch('/:id', auth, admin, content('multipart/form-data'), upload, updateProductById)
router.patch('/deleteProducts/:id', auth, admin, content('multipart/form-data'), upload, deleteProducts)

export default router
