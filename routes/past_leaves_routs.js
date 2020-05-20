var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var leave=require('../models/leave_model'); //Name of the model


router.get('/:leave_id',function(req,res,next){
    leave.getLeaveById(req.params.leave_id,function(err,rows){
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

module.exports=router;