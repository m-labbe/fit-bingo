import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import path from 'path'

import user from './routes/user'

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', (err) => { console.log('DB connection error', err) })
db.once('open', () => { console.log('Connection to DB successful') })

const app = express()
const PORT = process.env.PORT

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, './views'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/users', user)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
