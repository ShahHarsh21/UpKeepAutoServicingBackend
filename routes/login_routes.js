var express=require('express');
var router=express.Router();
var user_router=require('../models/user_models');

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