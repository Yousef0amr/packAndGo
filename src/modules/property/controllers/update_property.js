const wrap = require('express-async-wrapper')
const Property = require('../property.model')
const { Success } = require('../../../utils/apiResponse')
const updateByID = require('../../../common/DB_operation/CRUD/updateByID')

const updateProperty = wrap(
    async (req, res, next) => {
        const id = req.params.id
        const value = { ...req.body }
        const property = await updateByID(Property, id, value);

        return Success(res, "property updated successfully", property)
    }
)


module.exports = updateProperty