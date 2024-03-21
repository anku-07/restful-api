const express = require('express');
const router = express.Router();
const newTest = require('../model/student')
const mongoose = require('mongoose');


// get all data
router.get('/',(req,res,next) => {
    newTest.find()
    .then(result => {
        res.status(200).json({
            studentData : result
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        });
    })
})

// get by id
router.get('/:id',(req,res,next) => {
    console.log(req.params.id);
    newTest.findById(req.params.id)
    .then(result => {
        res.status(200).json({
            studentData : result
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        });
    })
})

// Add data
router.post('/',(req,res,next)=>{
    const student = new newTest({
        _id : new mongoose.Types.ObjectId,
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        gender : req.body.gender
    })

    student.save()
    .then(result => {
        console.log(result);
        res.status(200).json({
            newStudent:result
        })
    })

    .catch(err =>{
        console.log(err);
        res.status(404).json({
            error : err
        })
    })

})

// delete get by id
router.delete('/:id', (req, res, next) => {
    newTest.findOneAndDelete({_id:req.params.id})
        .then(result => {
            if (!result) {
                return res.status(404).json({
                    msg: "Data not found"
                });
            }
            res.status(200).json({
                msg: "Data deleted successfully",
                result: result
            });
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
});

// update request

router.put('/:id',(req,res,next) => {
    console.log(req.params.id);
    newTest.findOneAndUpdate({_id:req.params.id},{
        $set:{
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        gender : req.body.gender
        }
    })
    .then(result => {
        console.log(result);
        res.status(200).json({
            newStudent:result
        })
    })

    .catch(err =>{
        console.log(err);
        res.status(404).json({
            error : err
        })
    })
})


module.exports = router;