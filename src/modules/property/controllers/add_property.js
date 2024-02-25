const wrap = require('express-async-wrapper')
const Property = require('../property.model')
const { Success } = require('../../../utils/apiResponse')
const create = require('../../../common/DB_operation/CRUD/create')
const uploadMedia = require('../../../utils/uploadMedia')
const transformLocation = require('./../../../utils/tranformLocation')

const addProperty = wrap(
    async (req, res, next) => {
        const value = { ...req.body }
        const files = req.files

        value.image = await uploadMedia(files.logo[0].path, `pack-and-Go/properties/images`)
        const images = await Promise.all(files.property_images.map(async file => {
            const image = await uploadMedia(file.path, `pack-and-Go/properties/images`)
            return `${image.public_id}`;
        }));
        value.property_images = images
        value.location = transformLocation(value.location)
        value.owner = req.userId

        const property = await create(Property, value)
        return Success(res, 'added Property successfully', { property })
    }
)


module.exports = addProperty