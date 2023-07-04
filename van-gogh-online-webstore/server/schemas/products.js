const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const product = new Schema({
    id: {
        type: Number,
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
