const { Schema, model } = require('mongoose')

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    context: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    maxName: {
        type: String,
    },
    maxImg: {
        type: String,
    },
    maxText: {
        type: String,
    },
    categoryId: {
        ref: 'categories',
        type: Schema.Types.ObjectId
    }
})

module.exports = model('product', ProductSchema)