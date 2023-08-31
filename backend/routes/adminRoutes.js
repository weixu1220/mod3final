const express = require('express')
const router = express.Router()
const adminController = require('../controllers/userController')

router.get('/', adminController.show)

module.exports = router