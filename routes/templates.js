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
    var dao = req.app.get("dao");
    dao.get("templates", {
        id : req.params.template_id
    }, function(error, templates){
        if(error){
            res.end("can't find the template");
        }else{
            if(templates.length == 0){
                res.end("can't find the template");
            }else{
                var template = templates[0];
                var api = req.app.get("wechat-api");
                var param = {
                    debug : false,
                    jsApiList : [
                        'chooseImage',
                        'uploadImage'
                    ],
                    url : req.protocol + "://" + req.get('host') + req.originalUrl
                };
                winston.log("info", "config param", param);
                api.getJsConfig(param, function(error, result){
                    if(error){
                        res.end("fail to get js config, please refresh the page");
                    }else{
                        var markups = [];
                        template.markups.forEach(function(imgName){
                            markups.push(
                              "/templates/" + req.params.template_id + "/" + imgName
                            );
                        });
                        var data = {
                            configParam : JSON.stringify(result),
                            template : template,
                            is_delegation : false,
                            markups : markups
                        };
                        res.render("templates/" + req.params.template_id, data);
                    }
                });
            }
        }
    });
});

module.exports = router;