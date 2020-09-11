const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
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
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }

})

const Cart = mongoose.model('Cart', cartSchema)

module.exports = Cart