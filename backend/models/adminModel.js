const mongoose = require('mongoose')
const Schema = mongoose.Schema
const adminSchema = new Schema({

})
const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin