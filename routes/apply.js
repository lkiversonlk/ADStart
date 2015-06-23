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
 * get the user id, template id, and the data, then store it to the delegation
 *
 */
router.post('/', function(req, res, next) {
    if(req.body){
        var user = req.body['user_id'];
        var data = JSON.parse(req.body['data']);
        var template = req.body['template_id'];
        var dao = req.app.get("dao");
        dao.get("templates", {
            id : template
        }, function(error, docs){
            if(error){
                res.end("can't find the template you want to delegate");
            }else{
                if(docs.length == 0){
                    res.end("can't find the template you want to delegate");
                }else{
                    dao.add("delegations", {
                        user : user,
                        brand : docs[0].brand,
                        brand_name : docs[0].brand_name,
                        product : docs[0].product,
                        product_name : docs[0].product_name,
                        status : "0",
                        template : docs[0].id,
                        template_name : docs[0].name,
                        markups : data
                    }, function(error, doc){
                        if(error){
                            res.end("fail to insert delegation into records");
                        }else{
                            res.end("多谢您的带盐！品牌方审核通过后会第一时间通知您!");
                        }
                    });
                }
            }
        });
    }else{
        res.end();
    }
});

module.exports = router;
