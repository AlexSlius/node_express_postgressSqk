const joi = require('joi')

const validCreate = (data) => {
    const schema = joi.object({
        name: joi.string().min(2).max(255).required(),
    })

    return schema.validate(data)
}

module.exports = {
    validCreate
}