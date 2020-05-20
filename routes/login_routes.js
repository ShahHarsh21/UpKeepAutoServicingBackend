var express = require('express');
var router = express.Router();
var user_router = require('../models/user_models');
var worker_router = require('../models/worker_models');
router.get('/',function(req,res,next){
    console.log(re.body);
    worker_router.getWorkerByEmail(req.body,function(err,rows){
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
    
    user_router.login(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
});

module.exports=router;