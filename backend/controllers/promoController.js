const Promo = require('../models/promoModel')

module.exports.create = async(req,res) =>{
    console.log('POST promo/new')
    console.log(req.body)
    try{
        const promo = await Promo.create({...req.body})
        res.status(200).json({promo})
    }catch(err){
        console.log(err.message)
        res.status(400).json({error:err.message})
    }
}