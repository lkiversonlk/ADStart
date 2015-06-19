/**
 * Created by kliu on 19/06/2015.
 */

/*
 * assume ticket variable is already set by the server side
 */
var Base = {
    config : function(ticket){
        wx.config({
            debug: true,
            appId : ticket.appId,
            timestamp: ticket.timestamp,
            nonceStr: ticket.nonceStr,
            signature: ticket.signature,
            jsApiList: []
        });
    }
}