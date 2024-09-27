import Book from '../models/recommendation.model.js'
import User from '../models/recommendationUser.model.js'
import Item from '../models/recommendationItem.model.js'

///Recomendación basado en contenido
export const getLibroByISBN = async (req, res) => {
    const { isbn } = req.params
    const bookFound = await Book.findOne({ ISBN: isbn })

    if (!bookFound)
        return res.status(400).json({ message: 'Book ISBN not found' })

    res.json(bookFound)

    try {
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getAllLibros = async (req, res) => {
    try {
        const libros = await Book.find().lean()
        console.log('RESULTADO', libros)
        res.json(libros)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

///Recomendación colaborativo basado en usuarios
export const getBookByUser = async (req, res) => {
    const { userId } = req.params
    const userFound = await User.findOne({ ID_usuario: userId })
    console.log(userFound)
    if (!userFound) return res.status(400).json({ message: 'User not found' })

    res.json(userFound)

    try {
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().lean()
        console.log(users)
        res.json(users)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

///Recomendación colaborativo basado en usuarios
export const getItemsByISBN = async (req, res) => {
    const { isbn } = req.params
    const itemFound = await Item.findOne({ ISBN: isbn })
    if (!itemFound) return res.status(400).json({ message: 'Item not found' })

    res.json(userFound)

    try {
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getAllItems = async (req, res) => {
    try {
        const items = await Item.find().lean()
        res.json(items)
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
