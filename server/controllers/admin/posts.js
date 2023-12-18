
const pictureUuidName = require('../../helpers/pictureUuidName')

const { posts, postCategories, categories } = require('../../db/models')
const validPost = require('../../validations/posts')

class PostController {
    async create(req, res, next) {
        try {
            const { error } = validPost(req.body)

            if (error)
                return next({ type: 'JOI', error })

            if (!req.files)
                return next({ message: 'Picture required' })

            const { title, description, text, idCategory } = req.body
            const adminId = req.idUser
            const categoriesData = JSON.parse(idCategory);

            if (!categoriesData?.length)
                return next({ message: 'idCategory array category' })

            const { picture = null } = req.files
            const { fileName } = pictureUuidName({ picture })

            let newPost = await posts.create({
                title,
                description,
                text,
                idAdmin: adminId,
                picture: fileName
            })

            categoriesData.forEach(i => {
                postCategories.create({
                    postId: newPost.id,
                    categoryId: i,
                })
            });

            return res.json({
                data: {
                    status: true,
                    message: 'added'
                }
            })
        } catch (error) {
            return next({ message: error.message })
        }
    }

    async edit(req, res) {
        const { id = null } = req.params

        if (id === null)
            res.status(500).Json({
                error: true,
                message: 'Id not found'
            })

        const dataBody = req.body;
        const adminId = req.idUser


        let dataPost = {
            ...dataBody,
            idAdmin: adminId,
        }

        if (req.files?.picture) {
            const { picture = null } = req.files
            const { fileName } = pictureUuidName({ picture })

            if (fileName) {
                dataPost.picture = fileName
            }
        }

        let postUpdate = await posts.update(dataPost, {
            where: { id }
        })

        res.status(200).json({ data: !!postUpdate?.[0] })
    }

    async getAll(req, res, next) {
        try {
            const { offset = 0, limit = 10 } = req.query;

            let data = await posts.findAndCountAll({
                include: [
                    {
                        model: categories,
                        as: 'categories',
                        attributes: ['id', 'name'],
                        through: {
                            attributes: [],
                        }
                    }
                ],
                distinct: true,
                offset: offset,
                limit
            })

            res.status(200).json({
                data: data
            })
        } catch (error) {
            next(error.message)
        }
    }

    async getOne(req, res) {
        const { id = null } = req.params

        const onePost = await posts.findOne({
            where: {
                id
            },
            include: [
                {
                    model: categories,
                    as: 'categories',
                    attributes: ['id', 'name'],
                    through: {
                        attributes: []
                    }
                }
            ]
        })

        res.status(200).json({
            data: onePost
        })
    }

    async delete(req, res) {
        const { id = null } = req.params

        let statusDelete = await posts.destroy({
            where: { id }
        })

        res.status(200).json({ status: statusDelete })
    }
}

module.exports = new PostController()