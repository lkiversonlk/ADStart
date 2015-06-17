/**
 * Created by kliu on 18/06/2015.
 */

var express = require('express');
var router = express.Router();

/* GET brands listing. */
router.get('/', function(req, res, next) {
    var dao = req.app.get("dao");
    var data = {
        brands : dao.allBrands()
    }
    res.render('brands', data);
});

router.get("/:brand_id", function(req, res){
    res.end("end " + req.params.brand_id + " ~");
});

module.exports = router;
