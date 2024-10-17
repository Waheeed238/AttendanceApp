const express = require('express')
const { registerTeacher, loginTeacher } = require('../controllers/teacherController')
const router = express.Router()

router.get('/register', registerTeacher)
router.get('/login', loginTeacher)

module.exports = router;