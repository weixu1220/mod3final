const express = require('express')
const router = express.Router()

const promoController = require('../controllers/promoController')

router.post('/', promoController.create)

module.exports = router