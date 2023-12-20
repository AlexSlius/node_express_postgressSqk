const { Router } = require('express')

const appealControlle = require('../../controllers/user/appeal')

const router = Router()


router.post('/', appealControlle.sendForm)


module.exports = router