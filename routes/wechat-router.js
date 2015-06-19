/**
 * Created by kliu on 19/06/2015.
 */
var wechat = require("wechat");
var winston = require("winston");
var Message = require("../data/messages").Message;

function createRouter(config){
    return wechat(config)
      .text(function (message, req, res, next) {
        res.reply(Message.HandleText(message.Content));
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
    }).middlewarify();
};

exports.wechatRouter = createRouter;