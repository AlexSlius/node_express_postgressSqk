import express from 'express'
import dotenv from 'dotenv'

import routers from './routers'

dotenv.config();

const app = express();

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

routers(app)

export default app;