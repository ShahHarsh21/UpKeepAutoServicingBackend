var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var cart=require('../models/cart_models'); //Name of the model
var path=require('path');
    router.get('/',function(req,res,next){
    cart.getAllCart(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        if(rows)
        {
            console.log('rows');
            res.json(rows);
        }
    });
});
router.get('/:cart_id',function(req,res,next){
    cart.getCartById(req.params.cart_id,function(err,rows){
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
    cart.AddCart(req.body,function(err,rows){                   //Insert
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
 router.delete('/:cart_id',function(req,res,next){
    cart.deleteCart(req.params.cart_id,function(err,rows){
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
 router.put('/:cart_id',function(req,res,next){
    cart.updateCart(req.params.cart_id,req.body,function(err,rows){
         if(err){
             res.json(err);
         }
         else{
             res.json(rows);
         }
     });
 });
module.exports=router;