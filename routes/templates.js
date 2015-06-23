/**
 * Created by kliu on 19/06/2015.
 */

var express = require('express');
var router = express.Router();
var winston = require("winston");

function get_user_openid(req, res, callback){
    //callback("test");

    var code = req.query.code;
    var oauth = req.app.get("wechat-oauth");
    oauth.getAccessToken(code, function(err, result) {
        if (err) {
            winston.log("error", "fail to get oauth access token ", err);
        } else {
            var openid = result.data.openid;
            callback(openid);
        }
    });

};

router.get('/noauth/:template_id', function(req, res, next){
    var oauth = req.app.get("wechat-oauth");
    var url = oauth.getAuthorizeURL(req.protocol + "://" + req.get('host') + req.baseUrl + "/oauth/" + req.params.template_id, "testState", "snsapi_base");
    res.redirect(url);
});
/**
 * present the template
 */
router.get('/oauth/:template_id', function(req, res, next) {
    get_user_openid(req, res, function(openid){
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
                                markups : markups,
                                user_id : openid
                            };
                            res.render("templates/" + req.params.template_id, data);
                        }
                    });
                }
            }
        });
    });
});

module.exports = router;