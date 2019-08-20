var connection = require("./connection");

var print = function (val){
    var arr = [];

    for(var i = 0; i < val; i++){
        arr.push("?");
    }

    return arr.toString();
};







var orm = {
    all: function (table, cb) {
        var queryString = `SELECT * FROM ${table};`

        connection.query(queryString, function (err, result) {
            if (err) throw err;
        });
    },
    create: function (table, col, val, cb) {
        var queryString = `INSERT INTO ${table} (${col.toString()}) VALUES (${print(val.lenght)});`;

        connection.query(queryString, val, function(err, result){
            if(err) throw err;
            cb(result);
        });
    },
    delete: function (table, condition, cb) {
        var queryString = `DELETE FROM ${table} WHERE ${condition}`;

        connection.query(queryString, function (err, result) {
            if (err) throw err;

            cb(result);
        });
    }
}

module.exports = orm;