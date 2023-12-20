const { Router } = require('express')

const auth = require('./auth')
const categories = require('./categories')
const posts = require('./posts')
const topics = require('./topics')
const eppeal = require('./appeal')

const authMiddleware = require('../../middleware/authMiddleware')

const router = Router();

router.use('/auth', auth)
router.use('/categories', authMiddleware, categories)
router.use('/posts', authMiddleware, posts)
router.use('/topics', authMiddleware, topics)
router.use('/appeals', eppeal)

module.exports = router