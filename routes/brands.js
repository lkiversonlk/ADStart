/**
 * Created by kliu on 18/06/2015.
 */

var express = require('express');
var router = express.Router();
var winston = require("winston");

/* GET brands listing. */
router.get('/', function(req, res, next) {
    var dao = req.app.get("dao");
    dao.all('brands', function(error, brands){
        if(error){
            winston.log("error", "fail to load brands list", error);
            res.end();
        }else{
            var data = {
                brands : brands
            };
            res.render("brands", data);
        }
    });
});

router.get("/:brand_id", function(req, res){
    res.render("brands/" + req.params.brand_id, {});
});

module.exports = router;
