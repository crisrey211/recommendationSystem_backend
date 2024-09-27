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

const userSchema = new mongoose.Schema({
    ID_usuario: {
        type: String,
        required: true,
    },
    Recomendaciones: [recommendationSchema],
})

export default mongoose.model('User', userSchema)
