var mysql = require("mysql");

connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Sonora83",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.log("There was an error connecting: " + err.stack);
        return;
    }
    console.log("connnect as id " + connection.threadId);
});

module.exports = connection;