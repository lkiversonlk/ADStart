/**
 * Created by kliu on 23/06/2015.
 */

/**
 * Created by kliu on 18/06/2015.
 */

var express = require('express');
var router = express.Router();
var winston = require("winston");

/**
 * user apply for a delegation
 */
router.post('/', function(req, res, next) {
    if(req.body){
        res.write("user:" + req.body['user_id']);
        res.write("data:" + req.body['data']);
        res.write("template:" + req.body['template_id']);
        res.end();
    }else{
        res.end();
    }
});

module.exports = router;
