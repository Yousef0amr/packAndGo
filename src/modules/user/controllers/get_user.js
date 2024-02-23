const wrap = require("express-async-wrapper")
const User = require('./../user.model')
const { Success } = require("./../../../utils/apiResponse")
const { userFilter } = require('./../../../utils/filters')


const getUser = wrap(
    async (req, res, next) => {
        const id = req.userId
        const user = await User.findById(id, { ...userFilter })
        return Success(res, 'OK', { user })
    }
)

module.exports = getUser
