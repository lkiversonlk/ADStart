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
        brief : "小龙虾，皮皮虾，螃蟹！"
    },
    {
        id : 2342,
        name : "英派斯健身",
        brief : "迎接健康生活!"
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

    }
], function(error ,doc){

});

dao.add("templates", [
    {
        id : "1234-1",
        requirement : "花猫请带盐人您上传一张自己的正面上半身头像",
        markups : ["placeholder.png"]
    }
], function(error, doc){

});

dao.add("delegations", [], function(error, doc){

});