var express = require('express');
var router = express.Router();
var wechat = require("wechat");
var winston = require("winston");
var config = require("../config/config").config;
var Message = require("../data/messages");
var app_config = new config(process.cwd());

/* GET home page. */
router.get('/index', function(req, res, next) {
  var dao = req.app.get("dao");
  var data = {
    brands : dao.allBrands()
  }
  res.render('index', data);
});

router.use(express.query());

router.use('/wechat', wechat(app_config.data).text(function (message, req, res, next) {
  res.reply(Message.WELCOME_MESSAGE);
}).image(function (message, req, res, next) {
  // TODO
  res.reply(message.PicUrl);
}).voice(function (message, req, res, next) {
  // TODO
}).video(function (message, req, res, next) {
  // TODO
}).location(function (message, req, res, next) {
  // TODO
}).link(function (message, req, res, next) {
  // TODO
}).event(function (message, req, res, next) {
  switch (message.Event){
    case "subscribe":
      res.reply(Message.WELCOME_MESSAGE);
      break;
    case "click":
          switch (message.EventKey){
            case "aboutus":
              res.reply("我们是位于北京市朝阳区的一家初创互联网广告公司，我们相信，互联网时代也将深刻的改变广告行业。\n移动时代的广告需要更可信，更真实，更亲切。\n我们会帮助好的产品像病毒一样传播开来!" +
                  "\n欢迎联系我们，与我们进行交流，更热烈欢迎愿意加入我们的小伙伴！" +
                  "\n手机:18810232704 \n邮件:jerry.kliu@vip.126.com\n微信:272293041");
              break;
          }

  }
}).device_text(function (message, req, res, next) {
  // TODO
}).device_event(function (message, req, res, next) {
  // TODO
}).middlewarify());

module.exports = router;
