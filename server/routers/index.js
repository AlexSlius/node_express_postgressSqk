const { Router } = require('express')

const user = require('./user')
const admin = require('./admin')

const router = Router();

router.use('/', user)
router.use('/admin', admin)

router.use('*', (req, res) => {
    res.status(404).json({
        message: "Not found"
    })
})


module.exports = router