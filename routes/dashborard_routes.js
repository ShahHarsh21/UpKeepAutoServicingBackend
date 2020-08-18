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
        (res);
        if (err) {
            ("error");
            res.json(err);
        }
        else {
            ("rows");
            res.json(rows);
        }
    });
});

module.exports = router;