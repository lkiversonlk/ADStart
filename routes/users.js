var express = require('express');
var router = express.Router();
var winston = require("winston");

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
  var dao = req.app.get("dao");

  if(req.params.user_id == 'mine'){
    winston.log("debug", "get mine request");
    var code = req.query.code;
    var oauth = req.app.get("wechat-oauth");
    oauth.getAccessToken(code, function(err, result){
      if(err){
        winston.log("error", "fail to get oauth access token ", err);
      }else{
        var accessToken = result.data.access_token;
        var openid = result.data.openid;
        oauth.getUser(openid, function(err, result){
          if(err){
            winston.log("error", "fail to get user info", err);
            res.end("sorry, we can't get your infomation");
          }else{
            var user_id = result.openid;
            var delegations = dao.get("delegations", {
              user_id : user_id
            }, function(error, delegations){
              if(error){
                winston.log("error", "fail to load delegations of user " + user_id, error);
                res.end("can't find your infomation in the database");
              }else{
                var total_delegations = delegations.length;
                var passed_delegations = 0, denied_delegations = 0, ongoing_delegations = 0;
                delegations.forEach(function(delegation){
                  switch(delegation.status){
                    case "0" : ongoing_delegations++;break;
                    case "1" : passed_delegations++; break;
                    case "2" : denied_delegations++ ; break;
                  }
                });
                var data = {
                  user : {
                    name : result.nickname,
                    iconUrl : result.headimgurl + "46",
                    total_delegations: total_delegations,
                    passed_delegations: passed_delegations,
                    denied_delegations: denied_delegations,
                    ongoing_delegations: ongoing_delegations
                  },
                  delegations : delegations
                };
                winston.log("debug", "render user with ", data);
                res.render("users/user", data);
              }
            });
          }
        });
      }
    });
  }else{
    winston.log("debug", "retrive user info :" + req.params.user_id);
    res.end();
  }
});


/*
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
  res.end();
});
*/

module.exports = router;
