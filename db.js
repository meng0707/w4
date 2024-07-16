const mysql = require('mysql2');
const dbConfig = require('./db.config');

const connection = mysql.createPool({ // createPool allow multiple connections at the same time
    host: dbConfig.HOST,
    user: dbConfig.USER,
    database: dbConfig.DATABASE,
    password: dbConfig.PASSWORD,
    port: dbConfig.PORT // แก้ไขเป็น port แทน pool
});

module.exports = connection.promise();
