var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var vehicle=require('../models/vehicle_assigned_model'); //Name of the model

  router.get('/',function(req,res,next){
    vehicle.getAllVehicleAssigned(function(err,rows){
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
router.get('/:vehicleid',function(req,res,next){
    vehicle.getAssignedWorkerByVehicleId(req.params.vehicleid,function(err,rows){
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
             vehicle.AddVehicleAssigned(req.body,function(err,rows){                   //Insert
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
 router.delete('/:vehicle_assigned_id',function(req,res,next){
     vehicle.deleteVehicle_assigned(req.params.vehicle_assigned_id,function(err,rows){
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