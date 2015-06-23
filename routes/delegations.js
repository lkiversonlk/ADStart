/**
 * Created by kliu on 21/06/2015.
 */

var express = require('express');
var router = express.Router();
var winston = require("winston");

/**
 * user apply for a delegation
 * get the user id, template id, and the data, then store it to the delegation
 *
 */
router.get('/:delegation_id', function(req, res, next) {
    var dao = req.app.get("dao");
    dao.get("delegations", {
        _id : req.params.delegation_id
    }, function(error, docs){
        if(error){
            res.end("didn't find the delegation");
        }else{
            if(docs.length == 0){
                res.end("didin't find the delegation");
            }else{
                var data = {
                    is_delegation : true,
                    markups : docs[0].markups
                }
                res.render("templates/" + docs[0].template, data);
            }
        }
    });
});

module.exports = router;