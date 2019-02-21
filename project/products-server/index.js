const express = require('express');
const cors = require("cors");
const mysql= require('mysql');
const app = express();
const  selectAll = "select * from products";
const connection =  mysql.createConnection({
    host:'localhost',
    user :'root',
    password:'root',
    database:'react_sql'
});
connection.connect(err=>{
    if(err){
        return err;
    }
});
app.use(cors());
app.post('/products/add',(req,res)=>{
    //  const {name,price}=req.body.data;
    // console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
    console.log(req.body);
    // const insertQuery='insert into products (name,price) values(?,?)';
    // connection.query(insertQuery,[name,price],(err,results)=>{
    //     if(err){
    //         return res.send(err);
    //     }
    //     else{
    //         return res.send('Successfully Inserted')
    //     }
    // });
    });


app.get('/',(req,res)=>{
    res.send('go to the product server')
});
app.get('/products',(req,res)=>{
    
    connection.query(selectAll,(err,results)=>{
        if(err){
            return res.send(err);
        }
        else{
            return res.json({data:results})
        }
    });
    });
app
 app.listen(4000,()=>{
     console.log("Product server listening in port 4000")
 });
 