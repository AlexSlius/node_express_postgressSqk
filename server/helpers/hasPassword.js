const bcrypt = require('bcryptjs')

const hasPasswordSalt = (password) => {
    const salt = bcrypt.genSaltSync(10);

    return bcrypt.hashSync(password, salt)
}

const hasCompare = (clientPassword, hasPassword) => {
    return new Promise((resolve, reject) => {
        try {
            resolve(bcrypt.compareSync(clientPassword, hasPassword))
        } catch (error) {
            console.log('erroreHasCompare: ', error)
            reject();
        }
    })
}

module.exports = {
    hasPasswordSalt,
    hasCompare
}