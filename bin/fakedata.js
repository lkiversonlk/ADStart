/**
 * Created by kliu on 22/06/2015.
 */

var Dao = require("../data/dao").Dao;
var config = require("../config/config").config, appConfig = new config(process.cwd());
var dao = new Dao(appConfig.data.database);
var winston = require("winston");

dao.add("brands", [
    {
        id : 1234,
        name : "花猫美食",
        brief : "小龙虾，皮皮虾，螃蟹！",
        detail : "花猫美食是一家位于北京市朝阳区的餐饮品牌，主要经营辣炒系列，面向全国提供快递服务。"
    },
    {
        id : 2342,
        name : "英派斯健身",
        brief : "迎接健康生活!",
        detail : "英派斯健身位于北京市朝阳区常营，一共两层，一层有室内游泳池，桑拿，二层有器材类健身。"
    }
], function(error, doc){
    if(error){
        winston.log("error", "fail to insert brands", error);
    }else{
        winston.log("info", "brands inserted.");
    }
});


/**
 * my open id is oYAzXtzI0j5_IthJyGyr3X0TJmcs
 */

dao.add("products", [
    {
        id : "1234-1",
        name : "快来健身！",
        brand : "1234",
        brand_name : "花猫美食",
        brief : "大家一起来健身吧！",
    }
], function(error ,doc){
    if(error){
        winston.log("error", "fail to insert products", error);
    }else{
        winston.log("info", "products inserted.");
    }
});

dao.add("templates", [
    {
        id : "1234-1",
        name : "花猫美食，香辣螃蟹邮票版",
        brand : "1234",
        brand_name : "花猫美食",
        product : "1234-1",
        product_name : "香辣大螃蟹",
        requirement : "花猫请带盐人您上传一张自己的正面上半身头像",
        markups : ["placeholder.png"]
    }
], function(error, doc){
    if(error){
        winston.log("error", "fail to insert templates", error);
    }else{
        winston.log("info", "templates inserted.");
    }
});

dao.add("delegations", [], function(error, doc){
    if(error){
        winston.log("error", "fail to insert delegations", error);
    }else{
        winston.log("info", "delegations inserted.");
    }
});