const mysql = require("mysql");

console.log(process.env.DB_HOST,process.env.DB_USER,process.env.DB_PASSWORD,process.env.DB_NAME);
let dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 300,
    multipleStatements: true
};

// let dbConfig = {
//   host: "localhost",
//   user: "root",
//   password: "QIAu#JUD1I^g",
//   database: "supra",
//   port: "3306",
//   connectionLimit: 300,
//   multipleStatements: true
// };




const pool = mysql.createPool(dbConfig);
const connection = () => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                console.log(err);
                reject(err);
            }
            console.log("MySQL pool connected: threadId " + connection.threadId);
            const query = (sql, binding) => {
                return new Promise((resolve, reject) => {
                    connection.query(sql, binding, (err, result) => {
                        if (err) {
                            console.log(err);
                            reject(err);
                        }
                        resolve(result);
                    });
                });
            };
            const release = () => {
                return new Promise((resolve, reject) => {
                    if (err) {
                        console.log(err);
                        reject(err);
                    }
                    console.log("MySQL pool released: threadId " + connection.threadId);
                    resolve(connection.release());
                });
            };
            resolve({ query, release });
        });
    });
};
// const query = (sql, binding) => {
//   return new Promise((resolve, reject) => {
//     pool.query(sql, binding, (err, result, fields) => {
//       if (err) reject(err);
//       resolve(result);
//     });
//   });
// };
// module.exports = { pool, connection, query };

module.exports = { connection };
