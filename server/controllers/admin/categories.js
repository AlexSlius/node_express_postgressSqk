const { categories } = require('../../db/models')

class CategoryController {
    async getCategoriesAll(req, res) {
        categories.findAll().then((data) => {
            res.status(200).json({
                data: data
            })
        })
    }

    async addCategories(req, res) {
        const { name } = req.body;

        if (!name)
            res.
                status(400)
                .json({
                    error: true,
                    message: 'The name field is empty'
                })

        try {
            categories.create({
                name
            }).then((data) => {
                res.
                    status(200)
                    .json({
                        data,
                        message: 'Сategory added'
                    })
            })
                .catch(function (err) {
                    res.
                        status(400)
                        .json({
                            error: true,
                            dataErrors: err.errors.map(el => ({ key: el.path, message: el.message })),
                            message: err.errors[0].message
                        })
                });
        } catch (error) {
            res.
                status(500)
                .json({
                    error: true,
                    message: 'error'
                })
        }
    }

    async pathCategory(req, res) {
        try {
            const { id } = req.params
            const { name } = req.body

            let categoryUpdate = await categories.update({
                name
            }, {
                where: {
                    id
                }
            })

            res.status(200).json({
                status: !!categoryUpdate[0],
            })

        } catch (error) {
            res.status(500).json({
                error: e
            })
        }
    }

    async deleteCategory(req, res) {
        try {
            const { id } = req.params

            let categoryDelete = await categories.destroy({
                where: { id }
            })

            res.status(200).json({
                status: categoryDelete
            })
        } catch (e) {
            res.status(500).json({
                error: e
            })
        }
    }
}

module.exports = new CategoryController()