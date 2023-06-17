const express = require('express')
const signup = require('../controller/auth')
const login = require('../controller/auth')
const verifyUser = require('../controller/auth')

const router = express.Router()

app.get("/api/auth/signup", signup)
app.get("/api/auth/login", login)
app.get("/api/auth/confirm/:confirmationCode", verifyUser)

export default router