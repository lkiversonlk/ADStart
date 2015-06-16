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

router.use('/wechat', wechat(app_config.data).text(function (message, req, res, next) {
  res.reply("收到您的消息了！朋友");
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
  // TODO
}).device_text(function (message, req, res, next) {
  // TODO
}).device_event(function (message, req, res, next) {
  // TODO
}).middlewarify());

module.exports = router;
