var express = require('express');
var router = express.Router();

/**
 * get user self infomation
 */
router.get('/', function(req, res, next) {
  /**
   * first get oauth info
   */
  var oauth = req.app.get("wechat-oauth");
  var url = oauth.getAuthorizeURL( req.protocol + "://" + req.get('host') + req.baseUrl + "/mine", "testState", "snsapi_userinfo");
  res.redirect(url);
});

router.get("/:user_id", function(req, res, next){

});

router.get("/mine", function(req, res, next){
  var code = req.query.code;
  res.write("code : " + code);
  var oauth = req.app.get("wechat-oauth");
  oauth.getAccessToken(code, function(err, result){
    var accessToken = result.data.access_token;
    res.write("access_token: " + accessToken);
    var openid = result.data.openid;
    res.write("openid: " + openid);

    oauth.getUser(openid, function(err, result){
      res.write(JSON.stringify(result));
    });
  });
});

module.exports = router;
