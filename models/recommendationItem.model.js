import mongoose from 'mongoose'

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
    { collection: 'content2item' }
)

export default mongoose.model('Item', itemSchema)
