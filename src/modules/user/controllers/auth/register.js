const wrap = require('express-async-wrapper')
const { Success, ApiError } = require('./../../../../utils/apiResponse')
const User = require('./../../user.model')
const hashPassword = require("./../../../../utils/hashPassword")
const generateToken = require('./../../../../utils/generateToken')
const checkEmailDB = require('../../../../common/DB_operation/checkEmailDB')
const uploadMedia = require('./../../../../utils/uploadMedia')

const register = wrap(
    async (req, res, next) => {
        const value = { ...req.body }
        const files = req.files
        const isExist = await checkEmailDB(User, value.email)
        if (isExist) {
            return next(new ApiError("Email is already registered", 400));
        }


        value.logo = await uploadMedia(files.logo[0].path, 'pack-and-Go/users/logo')
        value.password = await hashPassword(value.password)

        const user = new User({
            ...value
        });

        await user.save();
        const payload = { id: user._id, role: user.role };
        const token = await generateToken(payload, process.env.ACCESS_TOKEN_SECRET);

        return Success(res, "OK", { token }, 201);
    }
)

module.exports = register