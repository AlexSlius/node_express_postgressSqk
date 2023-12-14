const { categories } = require('../../db/models')

const getCategoriesAll = (req, res) => {
    categories.findAll().then((data) => {
        res.status(200).json({
            data: data
        })
    })
}

const addCategories = (req, res) => {
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

const pathCategory = (req, res) => {
    res.status(200)
}

const deleteCategory = (req, res) => {
    res.status(200)
}

module.exports = {
    getCategoriesAll,
    addCategories,
    pathCategory,
    deleteCategory
}