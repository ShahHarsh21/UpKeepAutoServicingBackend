var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var stock=require('../models/stock_models'); //Name of the model

router.get('/:stock_id',function(req,res,next){
    stock.getSupplier(req.params.stock_id,function(err,rows){
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