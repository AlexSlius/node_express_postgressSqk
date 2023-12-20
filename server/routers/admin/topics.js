const { Router } = require('express')

const topicControlle = require('../../controllers/admin/topics')

const router = Router()


router.post('/', topicControlle.create)
router.get('/', topicControlle.getAll)
router.patch('/:id', topicControlle.edit)
router.get('/:id', topicControlle.getOne)
router.delete('/:id', topicControlle.deleteOne)


module.exports = router
