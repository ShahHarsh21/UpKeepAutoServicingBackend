var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var supplier=require('../models/supplier_models'); //Name of the model

router.get('/:supplier_id',function(req,res,next){
    supplier.getSupplierByIdWithAllDetails(req.params.supplier_id,function(err,rows){
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