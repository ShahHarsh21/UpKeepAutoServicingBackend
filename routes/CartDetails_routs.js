var express = require('express');
var router = express.Router();
var cartdetails = require('../models/CartDetails_model');
router.get('/',function(req,res,next){
    cartdetails.getallcatdetails(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            (rows);
            res.json(rows);
        }
    });
});
router.put('/:cart_detail_id',function(req,res,next){
    cartdetails.updatecartdetails(req.params.cart_detail_id,req.body,function(err,row){
        if(err) {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }  
    });
});
router.delete('/:cart_detail_id',function(req,res,next){
    cartdetails.deleteCartdetails(req.params.cart_detail_id,function(err,rows){
        if(err) {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});
module.exports=router;  