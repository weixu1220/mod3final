const express = require('express')
const router = express.Router()

const adminAuthController = require('../controllers/adminAuthController')
const { authorize } = require('../middlewares/authMiddleware')

router.post('/create', authorize, adminAuthController.create)
router.post('/signin', adminAuthController.signIn)

module.exports = router