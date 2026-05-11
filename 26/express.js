const express=require('express');
const app=express()
 app.get('/',(req,res)=>{
    res.send("welcome to home page")
 })

// listen server
app.listen(5000,()=>{
console.log("server is listen on port 5000")
})