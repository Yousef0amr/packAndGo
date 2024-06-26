const jwt = require('jsonwebtoken');


const generateToken = async (payload, tokenType, period = "100y") => {
    return jwt.sign(payload, tokenType, { expiresIn: period })
}

module.exports = generateToken
