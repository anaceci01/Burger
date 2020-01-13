var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: "root",
    user: "root",
    password: "Sonora83",
    database: "burger_db"
});

connection.connect(function(err) {
    if (err) {
        console.log("There was an error connecting: " + err.stack);
        return;
    }
    console.log("connnect as id " + connection.threadId);
});

module.exports = connection;