var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var cart=require('../models/cart_models'); //Name of the model

router.post('/',function(req,res,next){
    cart.deleteAllCart(req.body,function(err,rows){                   //Insert
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