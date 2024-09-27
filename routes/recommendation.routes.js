import { Router } from 'express'
import {
    getLibroByISBN,
    getAllLibros,
    getAllUsers,
    getBookByUser,
    getAllItems,
    getItemsByISBN,
} from '../controllers/recommendation.controller.js'

const router = Router()

///Rutas para filtrado basado en contenido
router.get('/content2content', getAllLibros)
router.get('/content2content/:isbn', getLibroByISBN)

///Rutas para filtrado colaborativo basado en usuarios
router.get('/content2user', getAllUsers)
router.get('/content2user/:userId', getBookByUser)

///Rutas para filtrado colaborativo basado en items
router.get('/content2item', getAllItems)
router.get('/content2item/:isbn', getItemsByISBN)

export default router
