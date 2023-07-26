const express = require('express')
const { signup, verifyUser, login } = require('../controller/auth')


const router = express.Router()

router.get("/api/auth/signup", signup)
router.get("/api/auth/login", login)
router.get("/api/auth/confirm/:confirmationCode", verifyUser)

module.exports = router 