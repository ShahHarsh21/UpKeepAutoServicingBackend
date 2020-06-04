var express = require('express');
var router = express.Router();
var orders = require('../models/order_model');

router.post('/', function (req, res, next) {
    orders.deleteAll(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


module.exports = router;