var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        user: process.env.LOCAL_DB_USER,
        password: process.env.LOCAL_DB_PASSWORD,
        port: process.env.LOCAL_DB_PORT,
        host: process.env.LOCAL_DB_HOST,
        database: process.env.LOCAL_DB_HOST,
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