/**
 * Created by kliu on 16/06/2015.
 */
var yaml = require("js-yaml");
var fs = require("fs");
var winston = require("winston");

function config(rootDir){
    var self = this;
    var dataFile = rootDir + "/config/data.yaml";
    try{
        self.data = yaml.safeLoad(fs.readFileSync(dataFile, "utf-8"));
    }catch(e){
        winston.log("error", "fail to load configuration file " + dataFile);
        process.exit(1);
    }
};

exports.config = config;