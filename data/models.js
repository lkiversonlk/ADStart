/**
 * Created by kliu on 18/06/2015.
 */

function brand(name, img, brief){
    var self = this;
    self.name = name;
    self.img = img;
    self.brief = brief;
};

function product(name, brief){
    var self = this;
    self.name = name;
    self.brief = brief;
};

function template(){
    var self = this;
};


exports.brand = brand;
exports.product = product;
exports.template = template;