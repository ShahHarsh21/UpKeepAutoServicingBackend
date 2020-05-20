var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var worker=require('../models/worker_models'); //Name of the model

router.get('/:worker_id',function(req,res,next){
    console.log(req.params.worker_id);
    worker_router.getPasswordById(req.params.worker_id,function(err,rows){
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