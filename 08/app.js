const express=require('express');
const app=express()
app.get("/",(req,res)=>{
    res.setHeader("content-type","plain/text")
    res.write("i am surafel")
    res.end()
})

// listen the server
app.listen(2000,"localhost",()=>{
    console.log("http://localhost:2000")
})