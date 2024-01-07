const { appeals, topics } = require('../../db/models')

class Appeal {
    async getAll(req, res) {
        const {
            limit = 20,
            offset = 0
        } = req.query

        let appealse = await appeals.findAndCountAll({
            include: [
                {
                    model: topics,
                },
            ],
            offset: offset,
            limit
        })

        res.status(200).json({
            data: appealse
        })
    }

    async getOne(req, res) {
        const { id = null } = req.params

        let oneAppeal = await appeals.findOne(
            { where: { id } }
        )

        res.status(200).json({
            include: [
                {
                    association: 'topic',
                },
            ],
            data: oneAppeal
        })
    }
}

module.exports = new Appeal()