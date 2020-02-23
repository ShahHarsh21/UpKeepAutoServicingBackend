var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var worker=require('../models/worker_models'); //Name of the model


router.get('/',function(req,res,next){
    worker.getWorkerWithAssignedCount(function(err,rows){
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
router.get('/:worker_id',function(req,res,next){
    worker.getWorkerById(req.params.worker_id,function(err,rows){
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
     console.log(req.body);
    worker.AddWorker(req.body,function(err,rows){                   //Insert
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
 
 router.put('/:worker_id',function(req,res,next){
    worker.updateWorker(req.params.worker_id,req.body,function(err,rows){
         if(err){
             res.json(err);
         }
         else{
             res.json(rows);
         }
     });
 });
module.exports=router;