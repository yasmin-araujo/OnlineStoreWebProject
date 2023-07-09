const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const Schema = mongoose.Schema;

const product = new Schema({
    id: {
        type: String,
        default: uuidv4,
        required: true,
        index: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    qty: {
        type: Number,
        required: true,
    },
    collectionId: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Product', product);
