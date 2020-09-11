const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description : {
        type: String,
        required: true,
        trim: true
    },
    price : {
        type : Number,
        required: true,
        trim: true
    },
    make : {
        type : Number,
        required: true,
        trim: true
    },
    // owner: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     required: true,
    //     ref: 'User'
    // }

})

const Product = mongoose.model('Product', productSchema)

module.exports = Product