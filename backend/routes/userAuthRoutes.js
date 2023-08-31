const express = require('express')
const router = express.Router()

const userAuthController = require('../controllers/userAuthController')

router.post('/create', userAuthController.create)
router.post('/signin', userAuthController.signIn)

module.exports = router