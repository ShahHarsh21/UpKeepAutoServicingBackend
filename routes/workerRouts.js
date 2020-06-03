var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var worker=require('../models/worker_models'); //Name of the model

router.get('/',function(req,res,next){
    worker.getAllWorker(function(err,rows){
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

router.post('/:worker_id',function(req,res,next){
    worker.changePassword(req.params.worker_id,req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
});
module.exports=router;