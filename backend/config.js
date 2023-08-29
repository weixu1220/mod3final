const mongoose = require('mongoose')
const mongoConfig = async () =>{
    try{
        console.log(process.env.MONGO_URL)
        const response = await mongoose.connect(process.env.MONGO_URL)
        console.log("Mongo database connected: ", response.connection.host)
    }catch(err){
        console.log("Mongo database failed to connect: ", err.message)
    }
}
module.exports = mongoConfig