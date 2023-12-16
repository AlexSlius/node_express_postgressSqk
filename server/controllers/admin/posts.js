const path = require('path')
const uuid = require('uuid')

const { posts, postCategories } = require('../../db/models')
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
            const categories = JSON.parse(idCategory);

            if (!categories?.length)
                return next({ message: 'idCategory array category' })

            const { picture } = req.files
            const filePicture = picture?.name ? picture : picture[0]
            const fileName = `${uuid.v4()}__${filePicture.name}`

            picture.mv(path.resolve(__dirname, '../../..', 'public/picture', fileName))

            let newPost = await posts.create({
                title,
                description,
                text,
                idAdmin: adminId,
                picture: fileName
            })

            categories.forEach(i => {
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

    }

    async getAll(req, res) {

    }

    async getOne(req, res) {

    }

    async delete(req, res) {

    }
}

module.exports = new PostController()