var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var stock=require('../models/stock_models'); //Name of the model
var path=require('path');
    router.get('/',function(req,res,next){
    stock.getAllStock(function(err,rows){
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
router.get('/:stock_id',function(req,res,next){
    stock.getStockById(req.params.stock_id,function(err,rows){
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
    stock.AddStock(req.body,function(err,rows){                   //Insert
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
 router.delete('/:stock_id',function(req,res,next){
    stock.deleteStock(req.params.stock_id,function(err,rows){
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
 router.put('/:stock_id',function(req,res,next){
    stock.updateStock(req.params.stock_id,req.body,function(err,rows){
         if(err){
             res.json(err);
         }
         else{
             res.json(rows);
         }
     });
 });
module.exports=router;