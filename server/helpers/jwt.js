const jwt = require('jsonwebtoken');

const jstSing = ({ id, email }) => {
    let dataNow = Date.now() + (1000 * 60 * 60 * 24 * 7)
    
    return {
        dataNow,
        token: jwt.sign({ id, email }, process.env.JWT_SECRET_OR_KEY, { expiresIn: dataNow })
    }
}

module.exports = {
    jstSing
}