import mongoose from 'mongoose'
import { COLLECTION_BASED_CONTENT_NAME } from '../config.js'

const recommendationSchema = new mongoose.Schema({
    ISBN: { type: String, required: true },
    Título: { type: String, required: true },
})

const bookSchema = new mongoose.Schema(
    {
        ISBN: {
            type: String,
            required: true,
            unique: true,
        },
        Título: {
            type: String,
            required: true,
        },
        Recomendaciones: [recommendationSchema],
    },
    { collection: COLLECTION_BASED_CONTENT_NAME }
)

export default mongoose.model('Book', bookSchema)
