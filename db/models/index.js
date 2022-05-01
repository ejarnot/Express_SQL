const mysql = require("mysql")
const employees = require("../queries/employees")

const mySqlConfig = {
    host: "localhost",
    user: "root",
    password: "password",
    database: "bestbuy",
}

const Connection = mysql.createPool(mySqlConfig)

const Query = (query, values) => {
    return new Promise((resolve, reject) => {
        Connection.query(query, values, (err, results) => {
            if(err) reject(err);
            resolve(results);
        })
    })
};

module.exports = Query