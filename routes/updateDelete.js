'use strict';
const express=require('express'); //call library express
const udRoute=express.Router();
const connection=require('../db');

<<<<<<< HEAD
udRoute.put('/users/:uid', function (req, res, next) {
    const { product_name, quantity, location, supplier, expiry_date } = req.body;
    const { uid } = req.params;

    // Validate inputs
    if (!product_name) {
        console.error('Validation error: product_name is required.');
        return res.status(400).send("product_name is required.");
    }

    connection.execute(
        "UPDATE treasury SET product_name=?, quantity=?, location=?, supplier=?, expiry_date=? WHERE product_id=?;",
        [product_name, quantity || null, location || null, supplier || null, expiry_date || null, uid]
    ).then(() => {
        console.log(`Product with ID ${uid} updated successfully`);
        res.status(200).send("Update Successfully.");
    }).catch((err) => {
        console.error('Error updating product:', err);
        res.status(500).send("Error updating product.");
    });
});




=======
udRoute.put('/users/:uid',function(req,res,next){
    connection.execute("UPDATE Users_tbl SET name=?,tel=?,updated_at=? WHERE id=?;",
        [req.body.name,req.body.tel,Date.now(),req.params.uid]).then(()=>{
            console.log('ok');
        }).catch((err)=>{
            console.log(err);
        });
        res.status(200).send("Update Successfully.");

});

>>>>>>> a2786c820de5eaecc1066185dfb491f2c749d735
udRoute.delete('/users/:uid',function(req,res,next){
    connection.execute("DELETE FROM Users_tbl WHERE id=?;",
        [req.params.uid]).then(()=>{
            console.log('ok');
        }).catch((err)=>{
            console.log(err);
        });
        res.end();

});
udRoute.use('/',function(req,res,next){
    res.sendStatus(404);

})




module.exports = udRoute;