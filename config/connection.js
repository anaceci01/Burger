var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "lolyz0ok3stvj6f0.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "knspqczghc2qpelf",
        password: "g2xgy1ia0uz2ey8t",
        database: "burgers_db"
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