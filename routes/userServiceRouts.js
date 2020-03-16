var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var service=require('../models/service_model');

router.get('/:service_id',function(req,res,next){
    console.log(req.params.service_id);
    service.getUserServiceByUserId(req.params.service_id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
module.exports=router;