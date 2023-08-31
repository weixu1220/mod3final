const express = require('express')
const router = express.Router()

const adminAuthController = require('../controllers/adminAuthController')

router.post('/create', adminAuthController.create)
router.post('/signin', adminAuthController.signIn)

module.exports = router