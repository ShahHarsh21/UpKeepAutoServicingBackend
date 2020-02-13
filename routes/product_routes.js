var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var product=require('../models/product_models'); //Name of the model
var path=require('path');
   
  router.get('/',function(req,res,next){
    product.getAllProduct(function(err,rows){
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
router.get('/:product_id',function(req,res,next){
    product.getProductById(req.params.product_id,function(err,rows){
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
     product.AddProduct(req.body,function(err,rows){                   //Insert
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
 router.delete('/:product_id',function(req,res,next){
     product.deleteProduct(req.params.product_id,function(err,rows){
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
 router.put('/:product_id',function(req,res,next){
     product.updateProduct(req.params.product_id,req.body,function(err,rows){
         if(err){
             res.json(err);
         }
         else{
             res.json(rows);
         }
     });
 });
module.exports=router;