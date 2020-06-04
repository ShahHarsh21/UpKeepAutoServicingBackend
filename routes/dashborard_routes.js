var express = require('express');
var router = express.Router();
var dashrout = require('../models/dashboard_models');
// router.get('/', function (req, res, next) {
//     dashrout.getAllCustomer(function (err, rows) {
//         if (err) {
//             res.json(err);
//         }
//         else {
//             res.json(rows);
//         }
//     });
// });
router.get('/:fk_worker_id', function (req, res, next) {
    console.log(req.params.fk_worker_id);
    dashrout.getRatioByWorkerId(req.params.fk_worker_id, function (err, rows) {
        console.log(res);
        if (err) {
            console.log("error");
            res.json(err);
        }
        else {
            console.log("rows");
            res.json(rows);
        }
    });
});

module.exports = router;