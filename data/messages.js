/**
 * Created by kliu on 18/06/2015.
 */


var Message = {
    WELCOME_MESSAGE : '欢迎来到带盐人！\n' +
        '我们这里有很多很好的产品在等着大明星您给ta带盐\n' +
        '当然，店家一定会好好的酬谢各位带盐人!\n' +
        '回复1 了解什么是带盐人\n' +
        '回复2 学习如何带盐\n' +
        '回复3 查看您当前的所有带盐' +
        '回复0 关于我们',
    ABOUT_US_MESSAGE : "我们是位于北京市朝阳区的一家初创互联网广告公司，我们相信，互联网时代也将深刻的改变广告行业。\n移动时代的广告需要更可信，更真实，更亲切。\n我们会帮助好的产品像病毒一样传播开来!" +
    "\n欢迎联系我们，与我们进行交流，更热烈欢迎愿意加入我们的小伙伴！" +
    "\n手机:18810232704 \n邮件:jerry.kliu@vip.126.com\n微信:272293041",

    HandleText : function(text){
        switch (text){
            case '1':
                return '';
            case '2':
                return '';
            case '3':
                return '';
            case '0':
                return this.ABOUT_US_MESSAGE;
            default:
                return this.WELCOME_MESSAGE;
        }
    }
};

exports.Message = Message;