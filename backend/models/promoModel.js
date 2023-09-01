const mongoose = require('mongoose')
const Schema = mongoose.Schema

const promoSchema = new Schema({
    title:{
        type:String,
    },
    text:{
        type:String,
    },
    btn:{
        type:String,
    },
    url:{
        type:String,
    },
    bgColor:{
        type:String,
    },
    image:{
        data: Buffer,
        contentType: String
    }
    
})
const Promo = mongoose.model('promo', promoSchema)

module.exports = Promo