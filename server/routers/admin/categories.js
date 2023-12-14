const { Router } = require('express')

const {
    getCategoriesAll,
    addCategories,
    pathCategory,
    deleteCategory
} = require('../../controllers/admin/categories')

const router = Router()

router.get('/', getCategoriesAll)
router.post('/', addCategories)
router.patch('/:id', pathCategory)
router.delete('/:id', deleteCategory)

module.exports = router