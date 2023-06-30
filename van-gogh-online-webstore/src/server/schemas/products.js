import mongoose from "mongoose";

const Schema = mongoose.Schema;

const product = new Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: [true, 'O slug é obrigatório'],
        trim: true,
        index: true,
        unique: true,
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
})

export default mongoose.model('Product', product)
