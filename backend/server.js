// backend packages: express, cors, dotenv, mongoose, bcrypt, jsonwebtoken (nodemon and postman)
require('dotenv').config()

const express = require('express')

const cors = require('cors')

const app = express()
const PORT = process.env.PORT1

// Load the connectDB function
const connectDB = require('./config')
connectDB()

const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
const userAuthRoutes = require('./routes/userAuthRoutes')
const adminAuthRoutes = require('./routes/adminAuthRoutes')
const promoRoutes = require('./routes/promoRoutes')
const {authorize} = require('./middlewares/authMiddleware')

app.use(express.json())
app.use(cors())

//Connect to database

app.use('/api/users', authorize, userRoutes)
app.use('/api/admins', authorize, adminRoutes)
app.use('/api/promos',promoRoutes)
app.use('/api/account/user',userAuthRoutes)
app.use('/api/account/admin',adminAuthRoutes)

//Listen to the given port
app.listen(PORT, ()=>{
    console.log('Backend listening to the port: '+ PORT)
})