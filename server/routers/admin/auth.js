const { Router } = require('express')

const authMiddleware = require('../../middleware/authMiddleware')

const {
    login,
    session
} = require('../../controllers/admin/auth')

const router = Router();

router.post('/login', login)
router.get('/session', authMiddleware, session);

module.exports = router