var express = require('express');
var router = express.Router();
var empPhotos = require('../models/emp_photo_model');
var multer=require('multer');
var path=require('path');

// Set storage engine
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

router.get('/:employee_id', function (req, res, next) {
    empPhotos.getAllPhoto(req.params.employee_id,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

// router.get('/:photo_id', function (req, res, next) {
//     console.log('get rout');
//     prophotos.getPhotoById(req.params.photo_id, function (err, rows) {
//         if (err) {
//             res.json(err);
//             console.log('err');
//         }
//         else {
//             res.json(rows);
//             console.log('data');
//         }
//     });
// });

// router.delete('/:photo_id', function (req, res, next) {
//     prophotos.Photodelete(req.params.photo_id, function (err, rows) {
//         if (err) {
//             res.json(err);
//         }
//         else {
//             res.json(rows)
//         }
//     });
// });

// router.post('/',upload.single('img'), function (req, res, next) {
//     console.log(req.body);
//     console.log(req.file);
//     console.log(req.file.filename);
//     prophotos.addPhoto(req.body,req.file != null ? req.file.filename : null, function (err, rows) {
        
//         if (err) {
//             console.log('error');
//             res.json(err);
//         }
//         else {
//             console.log('rows');
//             res.json(rows)
//         }
//     });
// });

router.put('/:email_id',upload.single('img'), function (req, res, next) {
    empPhotos.updatePhoto(req.params.email_id,req.file != null ? req.file.filename : req.body.img,function (err, rows) {
        if (err) {
            console.log('error');
            res.json(err);
        }
        else {
            console.log('rows');
            res.json(rows);
        }
    });
});

module.exports = router;