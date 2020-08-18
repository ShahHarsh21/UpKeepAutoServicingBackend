var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var product_image=require('../../models/User/user_product_img_model'); //Name of the model
var path=require('path');
var multer=require('multer');

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images/Product_image');
    },

    filename:(req,file,cb)=>{
        x=file.fieldname+'-'+Date.now()+path.extname(file.originalname);
        cb(null,x);
    }
})

var upload=multer({storage:storage});

router.get('/',function(req,res,next){
    product_image.getAllImages(function(err,rows){
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

router.get('/:product_id',function(req,res,next){
    (req.params.product_id);
    product_image.getImageById(req.params.product_id,function(err,rows){
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


router.put('/:product_id',upload.single('img'), function (req, res, next) {
    product_image.updatePhoto(req.params.product_id,req.file != null ? req.file.filename : req.body.img,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports=router;