const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    firstname:{
        type:String,
        required: true,
    },
    lastname:{
        type:String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    ads:{
        type: Boolean,
    },
    agree:{
        type: Boolean,
        enum: [ true ]
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User