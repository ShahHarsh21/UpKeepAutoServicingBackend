var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var slot=require('../models/slot_models'); //Name of the model
var path=require('path');

    router.get('/',function(req,res,next){
    slot.getAllSlot(function(err,rows){
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
router.get('/:slot_register_id',function(req,res,next){
    slot.getSlotById(req.params.slot_register_id,function(err,rows){
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
     slot.AddSlot(req.body,function(err,rows){                 
        // console.log(req.body);
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
 router.delete('/:slot_register_id',function(req,res,next){
     slot.deleteSlot(req.params.slot_register_id,function(err,rows){
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
 router.put('/:slot_register_id',function(req,res,next){
     slot.updateSlot(req.params.slot_register_id,req.body,function(err,rows){
         if(err){
             res.json(err);
         }
         else{
             res.json(rows);
         }
     });
 });
module.exports=router;