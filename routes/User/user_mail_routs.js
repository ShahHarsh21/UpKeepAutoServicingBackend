var express = require('express');
var router = express.Router();
var demo = require("../../models/User/user_mail");
router.post('/',function(req,res,next){

    demo.sendMail(req.body,function(err,message){
        
        if(err)
        {
            res.json(err);
            
        }
        else
        {
            return res.json({success: true, msg: 'sent'});//or return count for 1 or 0
        }
    });
});

router.get('/:email_id',function(req,res,next){
    console.log(req.params.email_id);
    demo.getUserByEmailId(req.params.email_id,function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    })
});

module.exports=router; 