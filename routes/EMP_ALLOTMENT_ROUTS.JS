var express = require('express');
var router = express.Router();
var allotment = require('../models/Employee_Allotement_models');

router.get('/',function(req,res,next){
    console.log(req.body)
    allotment.getAllAllotment(function(err,rows){
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
});

router.put('/',function(req,res,next){
    console.log(req.body);
   allotment.addAllotedEmpId(req.body,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});


module.exports=router;