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

const userSchema = new mongoose.Schema(
    {
        ID_usuario: {
            type: Number,
            required: true,
        },
        Recomendaciones: [recommendationSchema],
    },
    { collection: 'content2user' }
)

export default mongoose.model('User', userSchema)
