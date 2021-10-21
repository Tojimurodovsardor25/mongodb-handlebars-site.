const {
    Schema,
    model
} = require('mongoose')

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    titletxt: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    }

})

module.exports = model('product', ProductSchema)