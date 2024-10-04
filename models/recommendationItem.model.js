import mongoose from 'mongoose'
import { COLLECTION_BASED_ITEMS_NAME } from '../config.js'

const recommendationSchema = new mongoose.Schema({
    ISBN: {
        type: String,
        required: true,
    },
    Título: {
        type: String,
        required: true,
    },
    Género: {
        type: String,
        required: true,
    },
})

const itemSchema = new mongoose.Schema(
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
    { collection: COLLECTION_BASED_ITEMS_NAME }
)

export default mongoose.model('Item', itemSchema)
