const express = require('express');
const addCategory = require('./controllers/add_category');
const getAllCategory = require('./controllers/getAllCategories');
const updateCategory = require('./controllers/update_category');
const deleteCategory = require('./controllers/delete_category');

const validateParamsId = require('../../middlewares/validateParamsId');
const validateRequest = require('../../middlewares/validateRequest');
const { multerConfig } = require('./../../utils/multer')
const categoryShema = require('./validators/categoryShema')

const categoryRouter = express.Router();

categoryRouter.route("/")
    .post(multerConfig().fields([
        { name: 'logo', maxCount: 1 }
    ]), validateRequest(categoryShema), addCategory)
    .get(getAllCategory)

categoryRouter.route("/:id")
    .patch(validateParamsId(), updateCategory)
    .delete(validateParamsId(), deleteCategory)


module.exports = categoryRouter