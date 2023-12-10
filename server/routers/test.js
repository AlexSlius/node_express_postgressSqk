const { Router } = require('express')

const { getTest, getMain } = require('../controllers/test')

const routes = Router()

routes.get('/', getMain)
routes.get('/test', getTest)

module.exports = routes