const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Admin = require('../models/adminModel')

function generateToken(admin) {
    const payload = { id: admin._id, email: admin.email }
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' })
    return token
}

async function create(req, res) {
    console.log("create admin",req.body)
    try {
   
    // 1. Check if the admin exists

        const foundAdmin = await Admin.findOne({ email: req.body.email })
        
        if (foundAdmin) {
            return res.status(400).json({ error: 'Admin already exists' })
        }

    // 2. If they don't exist, encrypt their password

        const encryptedPassword = await bcrypt.hash(req.body.password, Number(process.env.SALT_ROUNDS))

    // 3. Add new admin to the database with encrypted password

        const newAdmin = await Admin.create({ ...req.body, password: encryptedPassword })

    // 4. Generate a JWT token and returning it to admin (Give them keys!) (Sign a permission slip and give it to them)

        const token = generateToken(newAdmin)

        res.status(200).json({ token })

    } catch(err) {

        console.log(err.message)
        res.status(400).json({ error: err.message })

    }
}

async function signIn(req, res) {

    try {

    // 1. Check if admin exists

    const foundAdmin = await Admin.findOne({ email: req.body.email })

    if (!foundAdmin) {
        return res.status(404).json({ error: 'No such admin exists' })
    }

    // 2. Check if the password provided by admin matches the one in the database

    const validPass = await bcrypt.compare(req.body.password, foundAdmin.password)

    if (!validPass) {
        return res.status(400).json({ error: 'Invalid credentials' })
    }

    // 3. Generate a JWT token and return it to admin

    const token = generateToken(foundAdmin)

    res.status(200).json({ token })

    } catch(err) {

        console.log(err.message)
        res.status(400).json({ error: err.message })
    }

}

module.exports = {
    create,
    signIn
}