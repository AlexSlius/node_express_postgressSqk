const { Router } = require('express')

const admin = require('./admin')

const router = Router();

router.use('/admin', admin)

router.use('*', (req, res) => {
    res.status(404).json({
        message: "Not found"
    })
})


module.exports = router