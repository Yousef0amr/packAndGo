const handleFieldErrors = require('./../utils/handleFileErrors')
const { Validation } = require('./../utils/apiResponse')
const errorValidationMessages = require('./../utils/errorValidationMessages')


const validateRequest = (schema) => {
    return (req, res, next) => {
        const data = { ...req.body, ...req.files }

        const { error, value } = schema.validate(data, { abortEarly: false });

        if (error) {
            const errorResponse = handleFieldErrors(error, errorValidationMessages?.[req.ln]);
            return Validation(res, errorResponse);
        }

        next();
    }
};



module.exports = validateRequest;