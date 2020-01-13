const connection = require("../config/connection");

const orm = {
    selectAll: function(tableInput) {
        let queryString = `SELECT * FROM ?? `;
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(reuslt);
        })
    },
    insertOne: function(tableInput) {
        let queryString = `UPDATE `;
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(reuslt);
        })
    }
}

module.exports = orm;