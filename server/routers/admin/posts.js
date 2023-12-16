const { Router } = require('express')

const postControlle = require('../../controllers/admin/posts')

const router = Router()

router.post('/', postControlle.create)
router.patch('/:id', postControlle.edit)
router.get('/', postControlle.getAll)
router.get('/:id', postControlle.getOne)
router.delete('/:id', postControlle.delete)

module.exports = router