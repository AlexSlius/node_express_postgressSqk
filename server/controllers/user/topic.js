const { topics } = require('../../db/models')

class Topics {
    async getAll(req, res) {
        let getAll = await topics.findAll()

        res.status(200).json({
            data: getAll
        })
    }
}

module.exports = new Topics()