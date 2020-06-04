var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var category=require('./../../models/User/user_category_model'); //Name of the model
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

module.exports=router;