/**
 * Created by kliu on 18/06/2015.
 */

/**
 * id
 * name
 * brief  (brief introduction, display in list cells)
 * detail (detail, display in foot)
 * @param name
 * @param brief
 */
function brand(){
    var self = this;
};

/**
 * id
 * name
 * brand
 * brand_name
 * brief
 */
function product(){
    var self = this;
};

/**
 * id
 * name
 * brand
 * brand_name
 * product
 * product_name
 * requirement
 * markups
 */
function template(){
    var self = this;
};

/**
 * a delegation should have:
 * id
 * user
 * brand
 * brand_name
 * product
 * product_name
 * template
 * template_name
 * serverIds
 * localIds
 * markups
 * status
 */
function delegation(){
    var self = this;
};

exports.brand = brand;
exports.product = product;
exports.template = template;
exports.delegation = delegation;