var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var supplier=require('../models/supplier_models'); //Name of the model

    router.get('/',function(req,res,next){
        supplier.getAllSupplier(function(err,rows){
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
router.get('/:supplier_id',function(req,res,next){
    supplier.getSupplierById(req.params.supplier_id,function(err,rows){
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
    supplier.AddSupplier(req.body,function(err,rows){                   //Insert
         if(err)
         {
             ("err");
             res.json(err);
         }
         if(rows)
         {
            ("rows");
             res.json(rows);    
         }
     });
 });
 router.delete('/:supplier_id',function(req,res,next){
    supplier.deleteSupplier(req.params.supplier_id,function(err,rows){
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
 router.post('/:supplier_id',function(req,res,next){
      supplier.updateSupplier(req.params.supplier_id,req.body,function(err,rows){
        if(err){
             res.json(err);
         }
         else{
             res.json(rows);
             ('rows');
         }
     });
 });
module.exports=router;