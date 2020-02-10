var express=require('express');
var router=express.Router(); // Router has only one which have all the function
var product_image=require('../models/product_image_model'); //Name of the model
var path=require('path');
var multer=require('multer');
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images/EmployeeImages');
    },

    filename:(req,file,cb)=>{
        x=file.fieldname+'-'+Date.now()+path.extname(file.originalname);
        cb(null,x);
    }
})

var upload=multer({storage:storage});

router.put('/:product_id',upload.single('img'), function (req, res, next) {
    product_image.updatePhoto(req.params.product_id,req.file != null ? req.file.filename : req.body.img,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});module.exports=router;