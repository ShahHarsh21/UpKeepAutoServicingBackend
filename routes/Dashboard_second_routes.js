var express = require('express');
var router = express.Router();
var dashrout = require('../models/dashboard_models');

router.get('/:order_date', function (req, res, next) {
    console.log(req.params.order_date)
    dashrout.ordersCust(req.params.order_date, function (err, rows) {
        (res);
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
