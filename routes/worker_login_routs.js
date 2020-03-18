var express = require('express');
var router = express.Router();
var worker_router = require('../models/worker_models');

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