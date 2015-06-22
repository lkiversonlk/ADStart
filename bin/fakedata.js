/**
 * Created by kliu on 22/06/2015.
 */

var Dao = require("../data/dao").Dao;
var config = require("../config/config").config, appConfig = new config(process.cwd());
var dao = new Dao(appConfig.data.database);
var winston = require("winston");

dao.add("brands", {
    id : 1234,
    name : "花猫美食",
    brief : "小龙虾，皮皮虾，螃蟹，花猫辣炒应有尽有！"
}, function(error, doc){
    if(error){
        winston.log("error", "fail to insert 花猫 brand", error);
    }else{
        winston.log("info", "brand 花猫 inserted.");
    }
});
