const joi = require('joi')

module.exports = (data) => {
    const schema = joi.object({
        title: joi.string().min(5).max(255).required(),
        description: joi.string().min(50).max(600).required(),
        text: joi.string().min(50).required(),
        idCategory: joi.required(),
        picture: joi.any
    })

    return schema.validate(data)
}