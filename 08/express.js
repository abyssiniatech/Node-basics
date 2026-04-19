const express=require('express');
const hostname='127.0.0.1'
const port=3000;
const app=express()
app.get('/',(req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type','text/plain');
    res.write("welcome")
    res.end("i'm express js")
})
app.listen(port,hostname,()=>{
    console.log(`http://${hostname}:${port}/`)
})