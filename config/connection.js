var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Sonora83",
        database: "burgers.db",
        port: 3306
    });
};

connection.connect(function(err) {
    if (err) {
        console.error("There was an error connecting: " + err.stack);
        return;
    }
    console.log("connnect as id " + connection.threadId);
});

module.exports = connection;