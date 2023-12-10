const express = require('express')
const dotenv = require('dotenv')

const routers = require('./routers')

dotenv.config();

const app = express();

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', routers)

module.exports = app;