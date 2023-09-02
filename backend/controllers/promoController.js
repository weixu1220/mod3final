const Promo = require('../models/promoModel')

module.exports.index = async(req,res) =>{
    console.log("GET promo/index")
    try{
        const promo = await Promo.find().sort({createdAt:1})
        
        res.status(200).json({promo})
    }catch(err){
        console.log(err.message)
        res.status(400).json({error:err.message})
    }
}

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

module.exports.delete = async(req,res)=>{
    console.log('Delete /')
    console.log(req.body)
    try{
const item = await Promo.findByIdAndDelete({_id : req.id})
res.status(200).json({success: "item is deleted"})

    }catch(err){
        console.log(err.message)
        res.status(400).json({error:err.message})
    }
}

module.exports.update = async (req,res) =>{
    console.log('Update /')
    console.log(req.body)
    try{
        const updatedPost = await Promo.findByIdAndUpdate({_id : req.id}, req.body, {new: true})
        res
    }catch(err){
        console.log(err.message)
        res.status(400).json({error:err.message})
    }
}

