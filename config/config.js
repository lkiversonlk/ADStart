/**
 * Created by kliu on 16/06/2015.
 */
var yaml = require("js-yaml");
var fs = require("fs");
var winston = require("winston");

function config(rootDir){
    var self = this;
    self.configFolder = rootDir + "/config";
    var dataFile = rootDir + "/config/config.yaml";
    try{
        self.data = yaml.safeLoad(fs.readFileSync(dataFile, "utf-8"));
    }catch(e){
        winston.log("error", "fail to load configuration file " + dataFile);
        process.exit(1);
    }
};

config.prototype.loadMenu = function(){
    var self = this;
    if(self.data.menu){
        try{
            var content = fs.readFileSync(self.configFolder + "/" + self.data.menu, "utf-8");
            return JSON.parse(content);
        }catch(error){
            throw error;
        }
    }else{
        throw new Error("no menu configuration");
    }
}
exports.config = config;