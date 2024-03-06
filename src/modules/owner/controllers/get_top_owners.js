const wrap = require("express-async-wrapper")
const Owner = require('./../owner.model')
const { Success } = require("./../../../utils/apiResponse")
const { ownerFilter } = require('./../../../utils/filters')


const getTopOwners = wrap(
    async (req, res, next) => {
        const owners = await Owner.find({}, { ...ownerFilter, signWithGoogle: false }).limit(20).sort({ ratingsAvg: 1 })
        return Success(res, 'OK', { owners })
    }
)

module.exports = getTopOwners