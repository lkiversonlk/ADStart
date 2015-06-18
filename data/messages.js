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

    WHAT_ARE_WE_MESSAGE : "什么是带盐人？\n" +
        "带盐人的初衷就是让每个普通的人可以为自己觉得好的东西进行推荐，同时也让好的产品能够靠着口口相传广泛传播。\n" +
        "广告不应该只是一些收了钱的明星在电视网上虚假的宣传，而是我们真实的向朋友宣传我们的生活方式。\n" +
        "有好的产品，也不用花费巨额的广告费用，酒香不再怕巷子深，有了移动互联网，我们帮他们香飘万里。",
    HandleText : function(text){
        switch (text){
            case '1':
                return this.WHAT_ARE_WE_MESSAGE;
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