const wrap = require("express-async-wrapper")
const Owner = require('./../owner.model')
const { Success } = require("./../../../utils/apiResponse")
const { ownerFilter } = require('./../../../utils/filters')


const getOwner = wrap(
    async (req, res, next) => {
        const id = req.userId
        const owner = await Owner.findById(id, { ...ownerFilter })
        return Success(res, 'OK', { owner })
    }
)

module.exports = getOwner