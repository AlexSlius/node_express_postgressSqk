class Appeal {
    async sendForm(req, res) {
        res.status(200).json({ status: 'successfull' })
    }
}

module.exports = new Appeal()