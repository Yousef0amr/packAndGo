const wrap = require('express-async-wrapper')
const { Success, ApiError } = require('./../../../../utils/apiResponse')
const Owner = require('../../owner.model')
const hashPassword = require("./../../../../utils/hashPassword")
const generateToken = require('./../../../../utils/generateToken')
const checkEmailDB = require('../../../../common/DB_operation/checkEmailDB')
const uploadMedia = require('./../../../../utils/uploadMedia')
const register = wrap(
    async (req, res, next) => {
        const value = { ...req.body }
        const files = req.files
        const isExist = await checkEmailDB(Owner, value.email)
        if (isExist) {
            return next(new ApiError("Email is already registered", 400));
        }
        value.password = await hashPassword(value.password)
        value.logo = await uploadMedia(files.logo[0].path, 'pack-and-Go/owners/logo')

        const owner = new Owner({
            ...value
        });
        await owner.save();

        const payload = { id: owner._id, role: owner.role };
        const token = await generateToken(payload, process.env.ACCESS_TOKEN_SECRET);

        return Success(res, "OK", { token }, 201);
    }
)

module.exports = register