const express = require('express');
const routerOutlet = express.Router()
const endPoints = require('./../utils/endPoints')

const userRouter = require('../modules/user/user.route');
const ownerRouter = require('../modules/owner/owner.route');
const categoryRouter = require('../modules/category/category.route');
const propertyRouter = require('../modules/property/property.route');


routerOutlet.use(`${endPoints.USER}`, userRouter)

routerOutlet.use(`${endPoints.OWNER}`, ownerRouter)

routerOutlet.use(`${endPoints.CATEGORY}`, categoryRouter)

routerOutlet.use(`${endPoints.PROPERTY}`, propertyRouter)


module.exports = routerOutlet