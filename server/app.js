const express = require('express')
const dotenv = require('dotenv')
const passport = require('passport')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const path = require('path')

const routers = require('./routers')
const errorController = require('./controllers/errors')

dotenv.config();

const app = express();

//MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, '..', 'public')))
app.use(passport.initialize())
app.use(fileUpload({}))
app.use('/api', routers)
app.use(errorController)

module.exports = app;