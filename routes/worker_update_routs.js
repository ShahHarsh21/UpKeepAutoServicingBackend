var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var worker=require('../models/worker_models'); //Name of the model

router.put('/:worker_id',function(req,res,next){
    console.log(req.body)
    console.log(req.params.worker_id)
    worker.updateWorker(req.params.worker_id,req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}); 
router.get('/:worker_id',function(req,res,next){
     console.log(req.params.worker_id);
     worker.getWorkerImage(req.params.worker_id,function(err,rows){
         if(err)
         {
            res.json(err);
         }
         else
         {
            res.json(rows);
         }
     })
 });
module.exports=router;