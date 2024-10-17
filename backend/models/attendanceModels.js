const mongoose = require('mongoose')

const attendanceSchema = mongoose.Schema({
    teacher: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Teacher', required: true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true
    },
    date: {
        type: Date, default: Date.now
    },
    status: {
        type: String, 
        enum: ['Present', 'Absent'],
        required: true
    }
})

module.exports = mongoose.model('Attendance', attendanceSchema)