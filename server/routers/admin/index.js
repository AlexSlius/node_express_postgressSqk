const { Router } = require('express')

const auth = require('./auth')
const categories = require('./categories')
const posts = require('./posts')

const authMiddleware = require('../../middleware/authMiddleware')

const router = Router();

router.use('/auth', auth)
router.use('/categories', authMiddleware, categories)
router.use('/posts', authMiddleware, posts)

module.exports = router