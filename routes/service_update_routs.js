var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var service=require('../models/service_model'); //Name of the model

 router.put('/',function(req,res,next){
     service.updateStatusRemark(req.body,function(err,rows){
        console.log(req.body);
         if(err){
             res.json(err);
         }
         else{
             res.json(rows);
         }
     });
 });
module.exports=router;