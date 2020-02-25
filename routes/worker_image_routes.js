var express = require('express');
var router = express.Router();
var workerPhotos = require('../models/worker_models');
var multer=require('multer');
var path=require('path');

// Set storage engine
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'public/images/WorkerImages');
    },
 
    filename:(req,file,cb)=>{
        x=file.fieldname+'-'+Date.now()+path.extname(file.originalname);
        cb(null,x);
    }
})

var upload=multer({storage:storage});

router.get('/:worker_id', function (req, res, next) {
    console.log(req.params.worker_id)
    workerPhotos.getWorkerPhotoByid(req.params.worker_id,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.put('/:worker_id',upload.single('img'), function (req, res, next) {
    workerPhotos.updateWorkerPhoto(req.params.worker_id,req.file != null ? req.file.filename : req.body.img,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });


});
module.exports = router;