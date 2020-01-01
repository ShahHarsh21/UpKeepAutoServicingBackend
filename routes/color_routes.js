var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var color=require('../models/color_models'); //Name of the model
var path=require('path');
    router.get('/',function(req,res,next){
    color.getAllColor(function(err,rows){
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
router.get('/:color_id',function(req,res,next){
    color.getColorById(req.params.color_id,function(err,rows){
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
     color.AddColor(req.body,function(err,rows){                   //Insert
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
 router.delete('/:color_id',function(req,res,next){
     color.deleteColor(req.params.color_id,function(err,rows){
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
 router.put('/:color_id',function(req,res,next){
     color.updateColor(req.params.color_id,req.body,function(err,rows){
         if(err){
             res.json(err);
         }
         else{
             res.json(rows);
         }
     });
 });
module.exports=router;