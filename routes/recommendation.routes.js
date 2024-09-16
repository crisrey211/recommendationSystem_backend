import { Router } from 'express'
import {
    getLibroByISBN,
    getAllLibros,
} from '../controllers/recommendation.controller.js'

const router = Router()

router.get('/content2content', getAllLibros)
router.get('/content2content/:isbn', getLibroByISBN)

export default router
