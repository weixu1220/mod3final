const mongoose = require('mongoose')
const Schema = mongoose.Schema

const promoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    btnText: {
        type: String,
    },
    url: {
        type: String,
    },
    bgColor: {
        type: String,
    },
    image: {
        type: String
    }

})
const Promo = mongoose.model('promo', promoSchema)

module.exports = Promo