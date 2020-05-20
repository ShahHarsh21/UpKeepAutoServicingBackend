var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var stock=require('../models/stock_models'); //Name of the model

    router.get('/',function(req,res,next){
    stock.getAllQuantity(function(err,rows){
        if(err)
        {
            console.log('err');
            res.json(err);
        }
        if(rows)
        {
            console.log('rows');
            res.json(rows);
        }
    });
});

module.exports=router;