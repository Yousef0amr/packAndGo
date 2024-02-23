const wrap = require('express-async-wrapper')
const Property = require('../property.model')
const { Success } = require('../../../utils/apiResponse')

const deleteProperty = wrap(
    async (req, res, next) => {
        const id = req.params.id

        await Property.findByIdAndDelete(id);

        return Success(res, "Property deleted successfully")
    }
)


module.exports = deleteProperty