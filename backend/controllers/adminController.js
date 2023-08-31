const Admin = require('../models/adminModel')

async function show (req,res){
    console.log('GET /admin')
    try {
        const foundAdmin = await Admin.findById(req.id)
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