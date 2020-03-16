var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var vehicle_assigned=require('../models/vehicle_assigned_model'); //Name of the model

router.post('/',function(req,res,next){
    vehicle_assigned.deleteAllVehicle_assigned(req.body,function(err,rows){                   //Insert
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