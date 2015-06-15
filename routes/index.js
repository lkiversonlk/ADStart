var express = require('express');
var router = express.Router();
var wechat = require("wechat");
var winston = require("winston");

var config = {
  token: 'lkiversonlka',
  appid : 'wxe310cb2cc9fb774fe',
  encodingAESKey : 'Y5dcvkBQSGFruNyScs6NrXOX7DQSpXD4XoGub4RvW1xd'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use(express.query());

router.use('/wechat', wechat(config, function(req, res, next){
  var message = req.weixin;
  winston.log('debug', message);
  res.reply("山那边的朋友，我们听到您的声音了！！！");
}));

module.exports = router;
