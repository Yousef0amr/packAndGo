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
        enum: ['sell', 'rent']
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
    owner: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Owner'
    }
},
    setting);


if (schema.path('type').enumValues.includes('rent')) {
    schema.add({
        rent_period: {
            type: String,
            enum: ['daily', 'monthly', 'yearly'],
        }
    });
}

module.exports = mongoose.model('Property', schema);
