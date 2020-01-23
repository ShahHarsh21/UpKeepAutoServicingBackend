var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var category=require('../models/category_models'); //Name of the model
var path=require('path');
    router.get('/',function(req,res,next){
    category.getAllCategory(function(err,rows){
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
router.get('/:category_id',function(req,res,next){
    category.getCategoryById(req.params.category_id,function(err,rows){
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
     category.AddCategory(req.body,function(err,rows){                   //Insert
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
 router.delete('/:category_id',function(req,res,next){
     user.deleteCategory(req.params.category_id,function(err,rows){
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
 router.put('/:category_id',function(req,res,next){
     category.updateCategory(req.params.category_id,req.body,function(err,rows){
         if(err){
             res.json(err);
         }
         else{
             res.json(rows);
         }
     });
 });
module.exports=router;