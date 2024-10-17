const express = require('express')
const { registerStudent, loginStudent } = require('../controllers/studentController')
const router = express.Router()

router.get('/register', registerStudent)

module.exports = router;