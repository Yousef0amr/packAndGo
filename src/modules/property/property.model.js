const mongoose = require('mongoose');
const setting = require('../../config/schemaConfig');


const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    location: {
        type: { type: String, default: 'Point' },
        coordinates: [Number],
    },
    image: {
        type: String,
        default: ''
    },
    property_images: [
        {
            type: String,
            default: ''
        }
    ],
    type: {
        type: String,
        required: true,
        enum: ['Sell', 'Rent']
    },
    price: {
        type: String,
        required: true
    },
    features: [
        String
    ],
    numberOfRooms: {
        type: String,
        required: true
    },
    facilities: [String],
    ratingsAvg: {
        type: Number,
        default: 0
    },
    ratingsQuentity: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true,
        default: true
    },
    rent_period: {
        type: String,
        enum: ['Daily', 'Monthly', 'Yearly', ''],
    },
    owner: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Owner'
    }
},
    setting);




module.exports = mongoose.model('Property', schema);
