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
    brands.push(new brand("花猫美食", "logo_lol.png", "各种麻辣小炒，螃蟹麻小，不容错过！"));
    brands.push(new brand("英派斯健身", "logo_cf.png", "积极健身，迎接美好生活！"));
    return brands;
};

Dao.prototype.addProduct = function(product){

};

exports.Dao = Dao;
