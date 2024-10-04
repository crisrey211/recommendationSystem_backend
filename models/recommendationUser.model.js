import mongoose from 'mongoose'
import { COLLECTION_BASED_USERS_NAME } from '../config.js'

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

const userSchema = new mongoose.Schema(
    {
        ID_usuario: {
            type: Number,
            required: true,
        },
        Recomendaciones: [recommendationSchema],
    },
    { collection: COLLECTION_BASED_USERS_NAME }
)

export default mongoose.model('User', userSchema)
