/**
 * Created by kliu on 17/06/2015.
 */

var yaml = require("js-yaml");
var fs = require("fs");
var brand = require("./models").brand;
var Datastore = require("nedb");
var async = require("async");

function Dao(param){
    var self = this;
    self.db = {};
    self.db.brands = new Datastore({
        filename: param + "/brands.nedb",
        autoload : true
    });
    self.db.products = new Datastore({
        filename: param + "/products.nedb",
        autoload : true
    });
    self.db.templates = new Datastore({
        filename: param + "/templates.nedb",
        autoload : true
    });
    self.db.delegations = new Datastore({
        filename: param + "/delegations.nedb",
        autoload : true
    })
};

/*
Dao.prototype.addBrands = function(brands, callback){
    var self = this;
    self.db.brands.insert(brands, callback);
};
*/

/*
Dao.prototype.allBrands = function(callback){
    var self = this;
    self.db.brands.find({}).exec(callback);

    var brands = [];
    var huamao = new brand("花猫美食", "logo_lol.png", "各种麻辣小炒，螃蟹麻小，不容错过！");
    huamao.id = "1234";
    brands.push(huamao);
    var yingsipai = new brand("英派斯健身", "logo_cf.png", "积极健身，迎接美好生活！");
    yingsipai.id = "2342";
    brands.push(yingsipai);
    return brands;
};
*/

/*
Dao.prototype.addProduct = function(product, callback){
    var self = this;
    self.db.products.insert(product, callback);
};
*/

/*
Dao.prototype.loadDelegations = function(user_id, callback){
    var ret = [];
    var hua_brand = {
        'name':"花猫美食",
        'brief':"麻辣小龙虾，各种小炒！",
        'id' : "1234"
    };
    var ying_brand = {
        'name' : "英派斯健身",
        'brief' : "迎接健康生活",
        'id' : "2342",
    };

    var hua_product_1 = {
        "id" : "1234-1",
        "name" : "麻辣小龙虾",
        "brief" : "用花猫秘制调料辣炒出来的小龙虾，肉质鲜嫩，麻辣诱惑！",
        "brand" : hua_brand
    };

    var hua_product_1_template = {
        "id" : "1234-1-23",
        "name" : "麻辣小龙虾-诱惑版",
        "brand" : hua_brand,
        "product" : hua_product_1
    };

    var hua_product_1_delegation = {
        "id" : "1234-1-23-234",
        "name" : "给花猫的带盐",
        "user" : "234",
        "template" : hua_product_1_template,
        "brand" : hua_brand,
        "product" :  hua_product_1,
        "status" : "1",
        "creationTime" : "2015-6-22"
    };

    ret.push(
        hua_product_1_delegation
    );
    return ret;

    var self = this;
    self.db.delegations.find({
        user_id : user_id
    }, callback);
};
*/

Dao.prototype.add = function(type, docs, callback){
    var self = this;
    self.db[type].insert(docs, callback);
};

Dao.prototype.all = function(type, callback){
    var self = this;
    self.db[type].find({}).exec(callback);
};

Dao.prototype.get = function(type, query, callback){
    var self = this;
    self.db[type].find(query, callback);
}

exports.Dao = Dao;
