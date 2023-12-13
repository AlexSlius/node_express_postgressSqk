const { Router } = require('express')

const admin = require('./admin')
const test = require('./test')

const router = Router();

router.use('/admin', admin)
router.use('/', test)


module.exports = router