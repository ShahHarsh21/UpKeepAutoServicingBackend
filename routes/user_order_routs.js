var express = require('express');
var router = express.Router();
var order_rou = require("../models/user_order_model");

router.get('/',function(req,res,next){
    order_rou.getAllOrder(function(err,rows){
        if(err){
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.get('/:order_id',function(req,res,next){
    order_rou.getOrderById(req.params.order_id,function(err,rows){
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


    router.post('/',function(req,res,next){
        console.log("inside order add");
        order_rou.insertOrder(req.body,function(err,rows){
              if(err)
              {
                console.log(req.body);
                  res.json(err);
              }
              else
              {
                  res.json(rows);
              }
          });
        });

router.delete('/:order_id',function(req,res,next){
    order_rou.deleteOrder(req.params.order_id,function(err,rows){
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports=router;