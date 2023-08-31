const User = require('../models/userModel')

async function show (req,res){
    console.log('GET /users')
    try {
        const foundUser = await User.findById(req.id)
        res.json({
            firstname: foundUser.firstname,
            lastname: foundUser.lastname,
            email:foundUser.email,
            ads:foundUser.ads,
            agree:foundUser.agree
        })
    }catch(err){
        res.json({error: err.message})
    }
}
module.exports = {show}