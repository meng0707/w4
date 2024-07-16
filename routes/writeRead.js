'use strict';
<<<<<<< HEAD
const express = require('express'); // call library express
const crypto = require('crypto'); // call library crypto
const wrRoute = express.Router();
const connection = require('../db');

wrRoute.post('/users', function (req, res, next) {
    const { product_id, product_name, quantity = 0, location = '', supplier = '', expiry_date = null } = req.body;

    if (!product_id || !product_name) {
        return res.status(400).send("Missing required fields: product_id, product_name");
    }

    const received_date = new Date().toISOString().slice(0, 19).replace('T', ' '); // MySQL datetime format

    connection.execute(`INSERT INTO treasury (product_id, product_name, quantity, location, supplier, received_date, expiry_date) VALUES (?, ?, ?, ?, ?, ?, ?);`,
        [product_id, product_name, quantity, location, supplier, received_date, expiry_date])
        .then(() => {
            console.log('Insert Successfully');
            res.status(201).send("Insert Successfully");
        }).catch((err) => {
            console.error("Error inserting data:", err);
            res.status(500).send("Error inserting data");
        });
});

// GET: ดึงข้อมูลทั้งหมดจาก wms
wrRoute.get('/g', function (req, res, next) {
    connection.execute('SELECT * FROM treasury;')
        .then((result) => {
            var rawData = result[0];
            res.send(JSON.stringify(rawData));
        }).catch((err) => {
            console.error('Error fetching users:', err);
            res.status(500).send("Error fetching users.");
        });
});

wrRoute.post('/check', function (req, res, next) {
    if (!req.body.username || !req.body.password) {
        return res.status(400).send("Missing required fields: username, password");
    }

    let mypass = crypto.createHash('md5').update(req.body.password).digest("hex");
    connection.execute('SELECT * FROM Users_tbl WHERE product_id=?;', 
        [req.body.username, mypass]).then((result) => {
            const data = result[0];
            if (data.length === 0) {
                res.sendStatus(400);
            } else {
                res.sendStatus(200);
            }
        }).catch((err) => {
            console.error(err);
            res.status(500).send("Error checking credentials");
        });
});

wrRoute.use('/', function (req, res, next) {
    res.sendStatus(404);
});

module.exports = wrRoute;
=======
const express=require('express'); //call library express
const crypto=require('crypto'); //call library crypto
const wrRoute=express.Router();
const connection=require('../db');


wrRoute.post('/users',function(req,res,next){
    let mypass=crypto.createHash('md5').update(req.body.password).digest("hex");
    connection.execute(`INSERT INTO Users_tbl 
        (name, tel, username, password, created_at, updated_at) VALUES (?,?,?,?,?,?);`,
        [req.body.name,req.body.tel,req.body.username,mypass,Date.now(),Date.now()]).then(()=>{
            console.log('ok');
            res.status(201).send("Insert Successfully");
        }).catch((err)=>{
            console.log(err);
            res.end();
        });
});

wrRoute.get('/users',function(req,res,next){
  connection.execute('SELECT * FROM Users_tbl;')
    .then((result)=>{
        var rawData = result[0];
        // res.send(JSON.stringify(rawData));
        res.send(rawData);
    }).catch((err)=>{
        console.log(err);
        res.end();
    })

});

wrRoute.post('/check',function(req,res,next){
   let mypass = crypto.createHash('md5').update(req.body.password).digest("hex");
    connection.execute('SELECT * FROM Users_tbl WHERE username=? AND password=?;',
        [req.body.username,mypass]).then((result)=>{
            var data =result[0];
            if(data.length ===0){
                res.sendStatus(400);
            }else{
                res.sendStatus(200);
            }

        }).catch((err)=>{
            console.log(err);
            res.sendStatus(404);
        })

});


wrRoute.use('/',function(req,res,next){
    res.sendStatus(404);
})

module.exports = wrRoute;
>>>>>>> a2786c820de5eaecc1066185dfb491f2c749d735
