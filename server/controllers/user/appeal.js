const { appeals } = require('../../db/models')

class Appeal {
    async sendForm(req, res) {
        const { topicId, email, name, question } = req.body

        const newAppeal = await appeals.create({
            topicId, email, name, question
        })

        res.status(200).json({
            status: 'successfull',
            data: newAppeal
        })
    }
}

module.exports = new Appeal()