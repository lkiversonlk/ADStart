/**
 * Created by kliu on 19/06/2015.
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:template_id', function(req, res, next) {
    var api = req.app.get("wechat-api");
    var configParam = null;
    var param = {
        debug : true,
        jsApiList : [
            'chooseImage'
        ],
        url : req.protocol + "://" + req.get('host') + req.originalUrl
    };

    api.getJsConfig(param, function(error, result){
        if(error){
            res.end("fail to get js config, please refresh the page");
        }else{
            res.render("templates/" + req.params.template_id, {
                'configParam' : JSON.stringify(result)
            });
        }
    });
});

module.exports = router;