const Joi = require("joi");
const { Validation } = require('./../utils/apiResponse');


const validateQueryLn = () => {
    return (req, res, next) => {
        const schema = Joi.object().keys({
            ln: Joi.string().valid('en', 'ar').required(),
            limit: Joi.optional(),
            select: Joi.optional(),
            search: Joi.optional(),
            sort: Joi.optional(),
            location: Joi.optional(),
        });
        const { error, value } = schema.validate(req.query, { abortEarly: false });

        if (error) {
            return Validation(res, "ln are required");
        }
        req.ln = value.ln
        next();
    }
};



module.exports = validateQueryLn;