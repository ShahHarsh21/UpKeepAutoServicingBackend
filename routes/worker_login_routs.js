var express = require('express');
var router = express.Router();
var worker_router = require('../models/worker_models');


router.get('/:email_id',function(req,res,next){
    console.log(req.params.email_id);
    worker_router.getWorkerByEmailId(req.params.email_id,function(err,rows){
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


router.post('/',function(req,res,next){
    worker_router.login(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
});

module.exports=router;