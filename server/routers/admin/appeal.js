const { Router } = require('express')

const appealControlle = require('../../controllers/admin/appeal')

const router = Router()

router.get('/', appealControlle.getAll)
router.get('/:id', appealControlle.getOne)

module.exports = router