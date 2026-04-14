// create server via express js
const express =require('express');
const app=express()
app.get("/",(req,res)=>{
    res.send("these is my webiste ")
})


// server
app.listen(3000,()=>{
    console.log("my webiste is serve via:http://localhost:3000")
})

