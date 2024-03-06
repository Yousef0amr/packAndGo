const express = require('express');
const register = require('./controllers/auth/register');
const login = require('./controllers/auth/login');
const checkEmail = require('./controllers/auth/checkEmail');
const verifyEmail = require('../../common/Auth_operation/verifyEmail');
const validateRequest = require('../../middlewares/validateRequest');
const loginSchema = require('../../common/validationsModel/login-schema')
const verifyEmailSchema = require('../../common/validationsModel/verifyEmail-schema')
const checkEmailSchema = require('../../common/validationsModel/checkEmail-schema');
const forgetPassword = require('./controllers/auth/forgetPassword');
const { multerConfig } = require('../../utils/multer');
const restPassword = require('./controllers/auth/restPassword');
const resendCode = require('../../common/Auth_operation/resendCode');
const restPasswordSchema = require('../../common/validationsModel/restPassword');
const changePasswordSchema = require('../../common/validationsModel/changePassword');
const changePassword = require('./controllers/auth/changePassword');
const userSchema = require('./models/userSchema');
const getUser = require('./controllers/get_user');
const router = express.Router();
const addToFavorites = require('./controllers/favorites/add_to_favorites')
const removeFromFavorites = require('./controllers/favorites/remove_from_favorites');
const validateParamsId = require('../../middlewares/validateParamsId');
const getFavorites = require('./controllers/favorites/get_favorites');


router.route('/register')
    .post(multerConfig().fields([{ name: 'logo', maxCount: 1 }]), validateRequest(userSchema), register);

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



router.route('/current-user')
    .get(getUser);


router.route('/favorites')
    .get(getFavorites)

router.route('/favorites/:id')
    .post(validateParamsId(), addToFavorites)
    .delete(validateParamsId(), removeFromFavorites);

module.exports = router;
