var express = require('express');
var router = express.Router();
var allotment = require('../models/Employee_Allotement_models');

router.get('/',function(req,res,next){
    allotment.getAllAllotment(function(err,rowa){
        if(err)
        {
            res.json(err);
        }
        if(rows)
        {
            res.json(rows);
        }
    });
});

router.post('/',function(req,res,next){
    console.log("HI");
    console.log(req.body);
    allotment.AddEmpAllot(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        if(rows)
        {
            res.json(rows);
        }
    });
})
module.exports=router;