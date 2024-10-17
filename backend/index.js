const express = require('express');
const { default: mongoose } = require('mongoose');
const dotenv = require('dotenv').config()
// const mongoose = require('mongoose')
const port = process.env.PORT || 5000
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

mongoose.connect('mongodb+srv://admin:admin@waheedcluster.g3keq.mongodb.net/attendenceApp')

app.use('/', require('./routes/attendanceRoute'))
app.use('/teacher', require('./routes/teacherRoutes'))
app.use('/student', require('./routes/studentRoute'))


app.listen(port, () => {
    console.log(`Server running on ${port}`)
})