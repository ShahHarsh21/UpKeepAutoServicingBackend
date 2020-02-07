var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var allotment=require('../models/Employee_Allotement_models'); //Name of the model
var path=require('path');
router.get('/',function(req,res,next){
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
        allotment.AddEmpAllot(req.body,function(err,rows){                   //Insert
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
module.exports=router;