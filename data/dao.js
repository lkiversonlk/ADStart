/**
 * Created by kliu on 17/06/2015.
 */
var sqlite3 = require("sqlite3").verbose();

function Dao(param){
    var self = this;
    self.database = new sqlite3.Database(param);
};

Dao.prototype.addUser = function(user){

};

exports.Dao = Dao;


