const express = require('express')
const dotenv = require('dotenv')
const passport = require('passport')

const routers = require('./routers')

dotenv.config();

const app = express();

//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize())
app.use('/api', routers)

module.exports = app;