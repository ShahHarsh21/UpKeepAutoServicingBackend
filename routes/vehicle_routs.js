    var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var vehicle=require('../models/vehicle_assigned_model'); //Name of the model
router.get('/:vehicle_assigned_id',function(req,res,next){
    (req.params.vehicle_assigned_id);
    vehicle.getVehicleById(req.params.vehicle_assigned_id,function(err,rows){
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


router.post('/',function(req,res,next){
    
    (req.body);
    
    vehicle.updateAssignedVehicle(req.body,function(err,rows){                   //Insert
        if(err)
        {
            res.json(err);
            ("err");
        }
        if(rows)
        {
            res.json(rows);    
            ("rows");
        }
    });        
});
module.exports=router;