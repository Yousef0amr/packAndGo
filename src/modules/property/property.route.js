const express = require('express');

const addProperty = require('./controllers/add_property')
const getAllProperties = require('./controllers/getAllProperties')
const getProperty = require('./controllers/get_property')
const deleteProperty = require('./controllers/delete_property')
const updateProperty = require('./controllers/update_property')

const router = express.Router();

router.route('/')
    .get(getAllProperties)
    .post(addProperty);

router.route('/:id')
    .get(getProperty)
    .delete(deleteProperty)
    .patch(updateProperty);


module.exports = router