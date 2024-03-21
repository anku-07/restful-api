const express = require('express');
const app = express();
const studentRoute = require('./api/routes/student');
const facultyRoute = require('./api/routes/facalti');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


mongoose.connect('mongodb+srv://ngtiq:ngtiq12345@ngtiq.q2dcccm.mongodb.net/?retryWrites=true&w=majority').then(()=> console.log('Connected to MongoDB')).catch(err => console.error('Failed to connect to MongoDB',err));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/student',studentRoute);

app.use('/faculty',facultyRoute);

app.use((req,res,next)=>{
    res.status(404).json({
        error : "bad request"
    });
})

module.exports = app;