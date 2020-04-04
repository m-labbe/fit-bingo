import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import user from './routes/user'

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const app = express()
const router = express.Router()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/users', user)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
