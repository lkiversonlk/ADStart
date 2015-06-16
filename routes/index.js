var express = require('express');
var router = express.Router();
var wechat = require("wechat");
var winston = require("winston");
var config = require("../config/config").config;

var app_config = new config(process.cwd());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(express.query());

router.use('/wechat', wechat(app_config.data, function(req, res, next){
  var message = req.weixin;
  winston.log('debug', message);
  res.reply("山那边的朋友，我们听到您的声音了！！！");
}));

module.exports = router;
