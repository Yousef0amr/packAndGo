const fileSchema = require('../../../common/validationsModel/file-schema')
const Joi = require('joi')

module.exports = Joi.object({
    logo: fileSchema.max(1),
    name: Joi.string().required(),
});



