var express = require('express');
var router = express.Router();
var dashroutTracking = require('../models/dashboard_models');
router.get('/', function (req, res, next) {
    dashroutTracking.trackStatus(function (err, rows) {
        if (err) {
            ('err');
            res.json(err);
        }
        else {
            ('rows');
            res.json(rows);
        }
    });
    
});
module.exports = router;