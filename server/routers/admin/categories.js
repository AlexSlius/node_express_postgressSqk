const { Router } = require('express')

const categoryController = require('../../controllers/admin/categories')

const router = Router()

router.get('/', categoryController.getCategoriesAll)
router.post('/', categoryController.addCategories)
router.patch('/:id', categoryController.pathCategory)
router.delete('/:id', categoryController.deleteCategory)

module.exports = router