var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var service=require('../models/service_model'); //Name of the model
   
  router.get('/',function(req,res,next){
    service.getAllService(function(err,rows){
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
router.get('/:service_id',function(req,res,next){
    service.getServiceById(req.params.service_id,function(err,rows){
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
    service.AddService(req.body,function(err,rows){                   //Insert
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

 router.put('/:service_id',function(req,res,next){
    console.log(req.params.service_id); 
    console.log(req.body);
     service.updateStatusRemark(req.params.service_id,req.body,function(err,rows){
         if(err){
             console.log('err');
             res.json(err);
         }
         else
         {
             console.log('rows');
             res.json(rows);
         }
     });
 });

 router.delete('/:service_id',function(req,res,next){
    service.deleteService(req.params.service_id,function(err,rows){
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