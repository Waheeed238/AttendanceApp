const express = require('express')
const { studentAttendance } = require('../controllers/attendanceController')
const router = express.Router()

router.get('/attendance', studentAttendance)

module.exports = router