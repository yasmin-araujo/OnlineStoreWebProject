const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const user = new Schema({
    id: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    address: {
        type: String,
        required: true,
    },
    telephone: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilePic: {
        type: Number,
        required: true,
    },
    orders: [{
        id: Number,
        productId: Number,
        qty: Number,
        price: Number,
    }],
    isAdmin: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('User', user);