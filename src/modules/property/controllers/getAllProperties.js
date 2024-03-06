const wrap = require('express-async-wrapper')
const Property = require('../property.model')
const { Success } = require('../../../utils/apiResponse')
const getAll = require('../../../common/DB_operation/CRUD/getAll')
const ApiFeatures = require('./../../../utils/APiFeatures')
const getAllProperty = wrap(
    async (req, res, next) => {

        const api = new ApiFeatures(Property.find({}).sort({ ratingsAvg: 1 }).populate({
            path: 'owner',
            select: 'name phone email logo'
        }).populate({
            path: 'category'
        }), req.query)
            .select()



        const properties = await api.mongooseQuery
        return Success(res, "OK", { properties })
    }
)


module.exports = getAllProperty