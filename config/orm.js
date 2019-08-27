var connection = require("../config/connection");

var orm = {
    all: function (table, cb) {
        var queryString = `SELECT * FROM ${table};`
        connection.query(queryString, function (err, result) {
            if (err) {
                console.log(err)
                throw err
            } else {
                cb(result);
                console.log(result);
            }
        })
    },
    create: function (table, name, cb) {
        var queryString = `INSERT INTO ${table} (burger_name) VALUES ("${name}");`;
        console.log(queryString)
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            cb(result);
            console.log("--------------in ORM--------------------")
            console.log(result)
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