const { Router } = require('express')

const topicControlle = require('../../controllers/user/topic')

const router = Router()


router.get('/', topicControlle.getAll)


module.exports = router
