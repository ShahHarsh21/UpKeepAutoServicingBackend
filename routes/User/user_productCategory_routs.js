var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var product=require('../../models/User/user_product_model'); //Name of the model
var path=require('path');
   
// router.get('/',function(req,res,next){
//     product.getAllProduct(function(err,rows){
//         if(err)
//         {
//             res.json(err);
//         }
//         if(rows)
//         {
//             res.json(rows);
//         }
//     });
// });
router.get('/:fk_cate_id',function(req,res,next){
    console.log(req.params.fk_cate_id);
    product.getAllProductByCategoryId(req.params.fk_cate_id,function(err,rows){
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