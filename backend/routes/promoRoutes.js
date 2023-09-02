const express = require('express')
const router = express.Router()
const {authorize} = require('../middlewares/authMiddleware')


const promoController = require('../controllers/promoController')
router.get('/',promoController.index)
router.post('/', authorize, promoController.create)
router.delete('/:id', authorize, promoController.delete)
router.put('/:id', authorize, promoController.update)

module.exports = router