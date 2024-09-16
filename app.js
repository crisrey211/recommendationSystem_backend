import express from 'express'
import recommendationRoutes from './routes/recommendation.routes.js'

const app = express()
app.use('/api', recommendationRoutes)

export default app
