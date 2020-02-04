var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var employee=require('../models/employee_models'); //Name of the model
var path=require('path');
    router.get('/',function(req,res,next){
    employee.getAllEmpWithMachanic(function(err,rows){
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