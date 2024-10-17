const asyncHandler = require('express-async-handler') 
const bcrypt = require('bcryptjs')
const Teacher = require('../models/teacherModel')

const registerTeacher = asyncHandler (async (req, res) => {
    

    const { name, email, password } = req.body

    const UserExists = await Teacher.findOne({ email })
    if(UserExists){
        res.status(400).json('User Already Exists')
    }
    
    const teacher = await Teacher.create({name, email, password})
    if(teacher){
        res.status(200).json({_id: teacher.id, name: teacher.name, email: teacher.email })
    } else {
        res.status(400)
        throw new Error('Invalid data')
    }
})

const loginTeacher = asyncHandler( async (req, res) => {
    const { email, password } = req.body
    const teacher = await Teacher.findOne({email})
    if(teacher && bcrypt.compare(password, teacher.password)){
        res.status(200).json({_id: teacher.id, name: teacher.name, email: teacher.email})
    } else {
        res.status(400)
        throw new Error('User does not exists')
    }
})

module.exports = { registerTeacher, loginTeacher }