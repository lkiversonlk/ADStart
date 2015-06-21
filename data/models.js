/**
 * Created by kliu on 18/06/2015.
 */

/**
 * id
 * name
 * brief
 * @param name
 * @param brief
 */
function brand(name, brief){
    var self = this;
    self.name = name;
    self.brief = brief;
};

/**
 * id
 * brand
 * name
 * brief
 * @param name
 * @param brief
 */
function product(name, brief){
    var self = this;
    self.name = name;
    self.brief = brief;
};

/**
 * id
 * brand
 * product
 * name
 * brief
 */
function template(){
    var self = this;
};

/**
 * a delegation should have:
 * id
 * user
 * brand
 * product
 * status
 */
function delegation(){
    var self = this;

};

exports.brand = brand;
exports.product = product;
exports.template = template;
exports.delegation = delegation;