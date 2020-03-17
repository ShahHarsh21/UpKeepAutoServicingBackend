var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var user=require('../models/user_models'); //Name of the model

router.get('/:user_id',function(req,res,next){
    console.log(req.params.user_id);
    user.getUserWithService(req.params.user_id,function(err,rows){
        if(err)
        {
            console.log("err");
            res.json(err);
        }
        else
        {
            console.log("rows");
            res.json(rows);
        }
    });
});

module.exports=router;