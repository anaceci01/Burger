var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: "root",
    user: "root",
    password: "Sonora83",
    database: "burger_db"
});