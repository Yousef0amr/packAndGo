const wrap = require('express-async-wrapper')
const Property = require('../property.model')
const { Success } = require('../../../utils/apiResponse')


const getProperty = wrap(
    async (req, res, next) => {
        const id = req.params.id
        const property = await Property.findById(id)
        return Success(res, "OK", { property })
    }
)


module.exports = getProperty