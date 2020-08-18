var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var user=require('../models/user_models'); //Name of the model

    router.get('/',function(req,res,next){
    user.getAllUser(function(err,rows){
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
router.get('/:user_id',function(req,res,next){
    user.getUserById(req.params.user_id,function(err,rows){
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
     user.AddUser(req.body,function(err,rows){                   //Insert
        console.log(req.body) 
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
 router.delete('/:user_id',function(req,res,next){
     user.deleteUser(req.params.user_id,function(err,rows){
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
 router.put('/:user_id',function(req,res,next){
     user.updateUser(req.params.user_id,req.body,function(err,rows){
         if(err)
         {
            res.json(err);
         }
         else
         {
            res.json(rows);
         }
     });
 });
module.exports=router;