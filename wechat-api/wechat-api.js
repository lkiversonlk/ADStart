/**
 * Created by kliu on 19/06/2015.
 */
var wechatapi = require("wechat-api");
var winston = require("winston");

function wechatApi(config){
    var self = this;
    self.api = new wechatapi(config.appid, config.appSecret);
};

wechatapi.prototype.getJsTicket = function(callback){
    var self = this;
    if(!self.ticket){
        self.api.getTicket(function(error, result){
            if(error){
                callback(error);
            }else{
                self.ticket = result;
                callback(null, result);
            }
        });
    }else{

    }
};

exports.wechatApi = wechatApi;