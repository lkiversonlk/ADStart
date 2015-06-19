/**
 * Created by kliu on 19/06/2015.
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:template_id', function(req, res, next) {
    var fakeData = {};
    fakeData.jsTicket = "nothing";
    res.render("templates/" + req.params.template_id, fakeData);
});

module.exports = router;