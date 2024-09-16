import Book from '../models/recommendation.model.js'

export const getLibroByISBN = async (req, res) => {
    const { isbn } = req.params

    console.log('ISBN PARAM=>', isbn)
    const bookFound = await Book.findOne({ ISBN: req.params.isbn })
    console.log('RESULTADO', bookFound)
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
