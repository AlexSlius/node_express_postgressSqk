const { Router } = require('express')

const authMiddleware = require('../../middleware/authMiddleware')

const {
    login,
    session,
    logout
} = require('../../controllers/admin/auth')

const router = Router();

router.post('/login', login)
router.get('/session', authMiddleware, session);
router.get('/logout', authMiddleware, logout);

module.exports = router