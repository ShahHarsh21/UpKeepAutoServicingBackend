var express = require('express');
var router = express.Router();
var worker_router = require('../models/worker_models');
router.get('/:worker_id',function(req,res,next){
    console.log(req.params.worker_id);
    worker_router.getWorkerById(req.params.worker_id,function(err,rows){
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