var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var worker=require('../models/worker_models'); //Name of the model

router.post('/',function(req,res,next){
    console.log(req.body);
       worker.getAssignedWorker(req.body,function(err,rows){
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
    console.log(req.params.worker_id);
    worker.getAssignedWorker(req.params.worker_id,function(err,rows){
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