import mongoose from 'mongoose'

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
    { collection: 'content2user' }
)

export default mongoose.model('Book', bookSchema)
