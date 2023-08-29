// backend packages: express, cors, dotenv, mongoose, bcrypt, jsonwebtoken (nodemon and postman)
require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT1

// Load the connectDB function
const connectDB = require('./config')

//Connect to database
connectDB()

//Listen to the given port
app.listen(PORT, ()=>{
    console.log('Backend listening to the port: '+ PORT)
})