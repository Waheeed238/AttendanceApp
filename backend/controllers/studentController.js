const asyncHandler = require('express-async-handler')
const Student = require('../models/studentModel')

const registerStudent = asyncHandler( async (req, res) => {
    const { name, rollNo, branch } = req.body
    const student = await Student.create({ name, rollNo, branch })
    if(student){
        res.status(201).json({ _id: student.id, name: student.name, rollNo: student.rollNo, branch: student.branch })
    } else {
        res.json(400)
        throw new Error('Invalid data')
    }
})

module.exports = { registerStudent }