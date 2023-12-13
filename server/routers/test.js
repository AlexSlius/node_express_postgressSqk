const { Router } = require('express')

const { getTest, getMain } = require('../controllers/test')
const authMiddleware = require('../middleware/authMiddleware')

const routes = Router()

routes.get('/', getMain)
routes.get('/test', authMiddleware, getTest)

module.exports = routes