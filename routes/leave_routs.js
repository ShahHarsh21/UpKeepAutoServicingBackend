var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var leave=require('../models/leave_model'); //Name of the model

router.get('/',function(req,res,next){
    leave.getAllLeave(function(err,rows){
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

router.get('/:fk_worker_id',function(req,res,next){
    leave.getAllLeaveByWorker(req.params.fk_worker_id,function(err,rows){
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
     leave.applyLeave(req.body,function(err,rows){                   //Insert
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