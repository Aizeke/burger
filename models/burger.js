var orm = require("../config/orm");

var burger = {
    all: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });
    },
    create: function(cb){
        orm.create("burgers", col, val, function(res){
            cb(res);
        });
    },
    delete: function(condition, cb){
        orm.delete("burgers", condition, function(res){
            cb(res);
        });
    }
}

module.exports = burger;