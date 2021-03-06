var express = require('express');
var router = express.Router();
var user_router = require('../../models/User/user_login_model');


router.get('/:email_id',function(req,res,next){
    (req.params.email_id);
    user_router.getUserByEmailId(req.params.email_id,function(err,rows){
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
    console.log(req.body)
    user_router.login(req.body,function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            console.log("rows")
            res.json(rows);
        }
    })
});

module.exports=router;