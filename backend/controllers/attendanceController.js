const asyncHandler = require('express-async-handler')
const Attendance = require('../models/attendanceModels');
const { default: mongoose } = require('mongoose');
const studentAttendance = asyncHandler( async(req, res) => {
    const { teacher, student, status } = req.body

    if (!mongoose.Types.ObjectId.isValid(teacher) || !mongoose.Types.ObjectId.isValid(student)) {
        res.status(400);
        throw new Error('Invalid teacher or student ID');
      }

    const takeAttendance = await Attendance.create({teacher, student, status})
    if (takeAttendance){
        res.status(201).json({_id: takeAttendance.id, teacher: takeAttendance.teacher, student: takeAttendance.student, date: takeAttendance.date, status: takeAttendance.status})
    } else {
        res.status(400)
        throw new Error('Invalid data')
    }
})

module.exports = { studentAttendance }