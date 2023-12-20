const { Router } = require('express')

const appeal = require('./appeal')
const topic = require('./topic')

const router = Router()


router.use('/appeals', appeal)
router.use('/topics', topic)


module.exports = router