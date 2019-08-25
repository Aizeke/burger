var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "%I_Met_The_Devil_In_Miami%",
    database: "burgers_db"
});

connection.connect(function(err){
    if (err) throw err;

    console.log("connection threadId: " + connection.threadId);
})

module.exports = connection;