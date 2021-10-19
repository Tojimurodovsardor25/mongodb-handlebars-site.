const {Schema, model} = require('mongoose')
const ProductSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required:true
    },
    // email:{
    //     unique: true
    // }
})

module.exports = model('product',ProductSchema)