import express from 'express'
import dotenv from 'dotenv'

dotenv.config();

const app = express();

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send('Hello World!123')
})

export default app;