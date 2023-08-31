// backend packages: express, cors, dotenv, mongoose, bcrypt, jsonwebtoken (nodemon and postman)
require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT1

// Load the connectDB function
const connectDB = require('./config')
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
const userAuthRoutes = require('./routes/userAuthRoutes')
const adminAuthRoutes = require('./routes/adminAuthRoutes')

//Connect to database
connectDB()
app.use('/api/user',userRoutes)
app.use('/api/admin',adminRoutes)
app.use('/account/user',userAuthRoutes)
app.use('/account/admin',adminAuthRoutes)

//Listen to the given port
app.listen(PORT, ()=>{
    console.log('Backend listening to the port: '+ PORT)
})