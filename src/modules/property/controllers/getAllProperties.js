const wrap = require('express-async-wrapper')
const Property = require('../property.model')
const { Success } = require('../../../utils/apiResponse')
const getAll = require('../../../common/DB_operation/CRUD/getAll')
const ApiFeatures = require('./../../../utils/apiFeatures')
const getAllProperty = wrap(
    async (req, res, next) => {

        const api = new ApiFeatures(Property.find({}).sort({ ratingsAvg: 1 }), req.query)

        const properties = await api.mongooseQuery
        return Success(res, "OK", { properties })
    }
)


module.exports = getAllProperty