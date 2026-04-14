const express = require ("express");

 const app = express();

 app.get("/sum", (req, res)=>{
    const sum = parseInt (req.query.a)+parseInt(req.query.b);
    res.send(sum.toLocaleString());
 })
 
 app.get("/sub", (req,res)=>{
    const sub = parseInt(req.query.a) - parseInt(req.query.b);
    res.send(sub.toLocaleString())
 })

 app.get("/mult", (req,res)=>{
    const mult = parseInt(req.query.a) * parseInt(req.query.b);
    res.send(mult.toLocaleString())
 })

 app.get("/div",(req,res)=>{
    const div = parseInt(req.query.a) / parseInt(req.query.b);
    res.send(div.toLocaleString())
 })

 app.listen(3000, ()=>{
    console.log("server is running at port 3000");
 })