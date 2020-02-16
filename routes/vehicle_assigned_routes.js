var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var vehicle=require('../models/vehicle_assigned_model'); //Name of the model
var path=require('path');
   
  router.get('/',function(req,res,next){
    vehicle.getAllVehicle(function(err,rows){
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
router.get('/:vehicle_assigned_id',function(req,res,next){
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
     vehicle.AddVehicle(req.body,function(err,rows){                   //Insert
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
     vehicle.deleteVehicle(req.params.vehicle_assigned_id,function(err,rows){
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