var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var order_details=require('../models/order_details_models'); //Name of the model
var path=require('path');
    router.get('/',function(req,res,next){
    order_details.getAllOrder_Details(function(err,rows){
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
router.get('/:order_details_id',function(req,res,next){
    order_details.getOrder_DetailsById(req.params.order_details_id,function(err,rows){
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
    order_details.AddOrder_Details(req.body,function(err,rows){                   //Insert
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
 router.delete('/:order_details_id',function(req,res,next){
    order_details.deleteOrder_Details(req.params.order_details_id,function(err,rows){
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
 router.put('/:order_details_id',function(req,res,next){
    order_details.updateOrder_Details(req.params.order_details_id,req.body,function(err,rows){
         if(err){
             res.json(err);
         }
         else{
             res.json(rows);
         }
     });
 });
module.exports=router;