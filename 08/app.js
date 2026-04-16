const express=require('express');
const app=express()
app.get("/",(req,res)=>{
    res.write("<h1>Welcome to node js</h1>")
    res.write("<p>this is node js crash course</p>")
    res.end()
})

// listen the server
app.listen(5000,()=>{
    console.log("http://localhost:5000")
})