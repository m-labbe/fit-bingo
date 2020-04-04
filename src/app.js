import dotenv from 'dotenv'
import express from 'express'
import bodyParser from 'body-parser'

if (process.env.NODE_ENV !== 'production') {
    dotenv.config()
}

const app = express()
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('Hello World')
})