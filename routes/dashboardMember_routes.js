var express = require('express');
var router = express.Router();
var dashrout = require('../models/dashboard_models');

router.get('/:year', function (req, res, next) {
    dashrout.getRatioByWorkerId(req.params.year, function (err, rows) {
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