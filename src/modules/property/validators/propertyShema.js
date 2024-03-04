const fileSchema = require('../../../common/validationsModel/file-schema')
const Joi = require('joi')

module.exports = Joi.object({
    title: Joi.string().required(),
    category: Joi.string().required(),
    location: Joi.string().required(),
    image: fileSchema.max(1),
    property_images: fileSchema,
    type: Joi.string().required(),
    rent_period: Joi.string().required(),
    price: Joi.string().required(),
    features: Joi.array().items(Joi.string()),
    numberOfRooms: Joi.string().required(),
    facilities: Joi.array().items(Joi.string()).optional(),
    description: Joi.string().required(),
});

