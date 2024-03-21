const express = require('express');
const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        msg : "this is facalti get request"
    })
})

router.post('/',(req,res,next)=>{
    res.status(200).json({
        msg : "this is facalti post request"
    })
})


module.exports = router;