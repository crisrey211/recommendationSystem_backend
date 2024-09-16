import { Router } from 'express'
import { getLibroByISBN } from '../controllers/recommendation.controller.js'

const router = Router()

router.get('/content2content/:isbn', getLibroByISBN)

export default router
