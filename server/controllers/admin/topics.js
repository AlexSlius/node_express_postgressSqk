const { topics } = require('../../db/models')
const { validCreate } = require('../../validations/topics')


class Topics {
    async create(req, res, next) {
        const { error } = validCreate(req.body)

        try {
            if (error)
                return next({ type: 'JOI', error })

            const { name } = req.body
            let newTopic = await topics.create({ name })

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

    async getAll(req, res) {
        let getAll = await topics.findAll()

        res.status(200).json({
            data: getAll
        })
    }

    async edit(req, res, next) {
        const { error } = validCreate(req.body)

        try {
            if (error)
                return next({ type: 'JOI', error })

            const { id = null } = req.params

            if (id === null)
                return res.status(500).Json({
                    error: true,
                    message: 'Id not found'
                })

            const { name } = req.body

            let update = await topics.update({ name }, {
                where: { id }
            })

            if (!!update[0])
                return res.status(200).json({
                    status: 'update',
                })

            return res.status(200).json({
                status: 'no-update',
            })
        } catch (error) {
            return next({ message: error.message })
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params;

            let getOne = await topics.findOne({ where: { id } })

            res.status(200).json({
                data: getOne
            })
        } catch (error) {
            return next({ message: error.message })
        }
    }

    async deleteOne(req, res, next) {
        try {
            const { id } = req.params;

            let deleteOne = await topics.destroy({ where: { id } })

            if (!!deleteOne[0])
                return res.status(200).json({
                    status: 'delete',
                })

            return res.status(200).json({
                status: 'no-delete',
            })
        } catch (error) {
            return next({ message: error.message })
        }
    }
}

module.exports = new Topics()