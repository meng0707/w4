<<<<<<< HEAD
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
=======
const mysql=require('mysql2');
const dbConfig=require('./db.config');


const connection=mysql.createPool({ //createPool allow mutiple connection in the same time
    host:dbConfig.HOST,
    user:dbConfig.USER,
    database:dbConfig.DATABASE,
    password:dbConfig.PASSWORD,
    pool:dbConfig.PORT
});

module.exports=connection.promise();
>>>>>>> a2786c820de5eaecc1066185dfb491f2c749d735
