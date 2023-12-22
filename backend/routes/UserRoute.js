const express = require('express')
const { registerUser } = require('../controllers/UserController')
const expressAsyncHandler = require('express-async-handler')
const router = express.Router()

router.post('/register', expressAsyncHandler(registerUser))

module.exports = router
