var express = require('express');
var router = express.Router();
var wechat = require("wechat");
var winston = require("winston");
var config = require("../config/config").config;
var Message = require("../data/messages").Message;
var app_config = new config(process.cwd());
var winston = require("winston");
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
  winston.log("debug", message);
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
  winston.log("debug", message);
  switch (message.Event){
    case "subscribe":
      res.reply(Message.WELCOME_MESSAGE);
      break;
    case "CLICK":
          switch (message.EventKey){
            case "aboutus":
              res.reply(Message.ABOUT_US_MESSAGE);
              break;
          }

  }
}).device_text(function (message, req, res, next) {
  // TODO
}).device_event(function (message, req, res, next) {
  // TODO
}).middlewarify());

module.exports = router;
