const express=require('express');
const app=express();
let port =process.env.port || 3000;

app.get('/',(req,res)=>{
    res.send({"studentfirstname":"john",
             "colleagename":"IIT",
             "location":"mumbai"})
})
// app.get('/student',(req,res)=>{
//     res.send(importData)
// })
app.listen(port,()=>{
    console.log("listening port in 3000")
})