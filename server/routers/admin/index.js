const { Router } = require('express')

const auth = require('./auth')
const categories = require('./categories')
const authMiddleware = require('../../middleware/authMiddleware')

const router = Router();

router.use('/auth', auth)
router.use('/categories', authMiddleware, categories)

module.exports = router