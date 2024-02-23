const wrap = require('express-async-wrapper')
const Property = require('../property.model')
const { Success } = require('../../../utils/apiResponse')
const getAll = require('../../../common/DB_operation/CRUD/getAll')

const getAllProperty = wrap(
    async (req, res, next) => {
        const properties = await getAll(Property)
        return Success(res, "OK", { properties })
    }
)


module.exports = getAllProperty