var express = require('express');
var router = express.Router();
var orDetails = require('../models/user_orderDetails_model');

router.get('/',function(req,res,next){
    orDetails.getAllOrderDetails(function(err,rows){
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.post('/',function(req,res,next){
orDetails.insertOrderDetail(req.body,function(err,rows){
        console.log(req.body);
        console.log("details routes");
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

router.delete('/:od_id',function(req,res,next){
    orDetails.deleteOrderDetails(req.params.od_id,function(err,rows){
        if(err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports=router;
