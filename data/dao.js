/**
 * Created by kliu on 17/06/2015.
 */

var yaml = require("js-yaml");
var fs = require("fs");
var brand = require("./models").brand;

function Dao(param){

};

Dao.prototype.addBrands = function(brand){

};

Dao.prototype.allBrands = function(){
    var brands = [];
    var huamao = new brand("花猫美食", "logo_lol.png", "各种麻辣小炒，螃蟹麻小，不容错过！");
    huamao.id = "1234";
    brands.push(huamao);
    var yingsipai = new brand("英派斯健身", "logo_cf.png", "积极健身，迎接美好生活！");
    yingsipai.id = "2342";
    brands.push(yingsipai);
    return brands;
};

Dao.prototype.addProduct = function(product){

};

Dao.prototype.loadDelegations = function(user_id){
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
};

exports.Dao = Dao;
