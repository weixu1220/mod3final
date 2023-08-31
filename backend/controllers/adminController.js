const Admin = require('../models/userModel')

async function show (req,res){
    console.log('GET /users')
    try {
        const foundAdmin = await User.findById(req.id)
        res.json({
            firstname: foundAdmin.firstname,
            lastname: foundAdmin.lastname,
            email:foundAdmin.email,
        })
    }catch(err){
        res.json({error: err.message})
    }
}
module.exports = {show}