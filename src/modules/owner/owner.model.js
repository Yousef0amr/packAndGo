const mongoose = require('mongoose');
const setting = require('../../config/schemaConfig');

const schema = new mongoose.Schema({
    logo: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    },
    password: {
        type: String,
        required: true,
    },
    signWithGoogle: {
        type: Boolean,
        default: false,
        required: true,
    },
    role: {
        type: String,
        default: 'owner',
    },
    isLoggedIn: {
        type: Boolean,
        default: false,
    },
},
    setting);

module.exports = mongoose.model('Owner', schema);
