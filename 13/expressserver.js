const fs=require('fs')
const express=require("express");
const port=2000;
const hostname='localhost';
const app=express()
app.get('/',(req,res)=>{
    res.write("express server")
    res.end()
})

app.listen(port,hostname,()=>{
    console.log(`http://${hostname}:${port}`);
    
})