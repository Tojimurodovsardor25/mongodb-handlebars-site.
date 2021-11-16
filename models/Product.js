const { Schema, model } = require('mongoose')

const MaxlinkSchema = new Schema({
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
    categoryId: {
        ref: 'categories',
        type: Schema.Types.ObjectId
    }
})

module.exports = model('product', MaxlinkSchema)