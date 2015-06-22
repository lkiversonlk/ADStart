/**
 * Created by kliu on 19/06/2015.
 */

var express = require('express');
var router = express.Router();
var winston = require("winston");

/**
 * present the template
 */
router.get('/:template_id', function(req, res, next) {
    var api = req.app.get("wechat-api");
    var param = {
        debug : true,
        jsApiList : [
            'chooseImage'
        ],
        url : req.protocol + "://" + req.get('host') + req.originalUrl
    };
    winston.log("info", "config param", param);
    api.getJsConfig(param, function(error, result){
        if(error){
            res.end("fail to get js config, please refresh the page");
        }else{
            var data = {
                configParam : JSON.stringify(result),
                template : {
                    requirement : "花猫美食希望您上传一张您自己正面的酷照！"
                }
            };
            res.render("templates/" + req.params.template_id, data);
        }
    });
});

module.exports = router;