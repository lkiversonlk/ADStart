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
    ret.push(
        {
            product_name: "小龙虾",
            brand_name: "花猫美食"
        }
    );
    ret.push(
        {
            product_name: "健身",
            brand_name : "英派斯健身"
        }
    );
    return ret;
};

exports.Dao = Dao;
