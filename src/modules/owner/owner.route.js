const express = require('express');
const register = require('./controllers/auth/register');
const login = require('./controllers/auth/login');
const checkEmail = require('./controllers/auth/checkEmail');
const verifyEmail = require('../../common/Auth_operation/verifyEmail');
const validateRequest = require('../../middlewares/validateRequest');
const loginSchema = require('../../common/validationsModel/login-schema')
const verifyEmailSchema = require('../../common/validationsModel/verifyEmail-schema')
const checkEmailSchema = require('../../common/validationsModel/checkEmail-schema');
const ownerShema = require('./validators/ownerSchema');
const forgetPassword = require('./controllers/auth/forgetPassword');
const { multerConfig } = require('../../utils/multer');
const restPassword = require('./controllers/auth/restPassword');
const resendCode = require('../../common/Auth_operation/resendCode');
const restPasswordSchema = require('../../common/validationsModel/restPassword');
const changePasswordSchema = require('../../common/validationsModel/changePassword');
const changePassword = require('./controllers/auth/changePassword');
const getOwner = require('./controllers/get_owner');
const router = express.Router();



router.route('/register')
    .post(multerConfig().fields([{ name: 'logo', maxCount: 1 }]), validateRequest(ownerShema), register);

router.route('/login')
    .post(multerConfig().array(), validateRequest(loginSchema), login);

router.route('/check-email')
    .post(multerConfig().array(), validateRequest(checkEmailSchema), checkEmail);

router.route('/verify-email')
    .post(multerConfig().array(), validateRequest(verifyEmailSchema), verifyEmail);

router.route('/forget-password')
    .post(multerConfig().array(), validateRequest(checkEmailSchema), forgetPassword);

router.route('/rest-password')
    .post(multerConfig().array(), validateRequest(restPasswordSchema), restPassword);


router.route('/change-password')
    .post(multerConfig().array(), validateRequest(changePasswordSchema), changePassword);

router.route('/resend-code')
    .post(multerConfig().array(), validateRequest(checkEmailSchema), resendCode);



router.route('/current-owner')
    .get(getOwner);

module.exports = router;
