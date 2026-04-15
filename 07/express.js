const express=require('express')
const app=express()
app.get("/",(req,res)=>{
    res.write("express server")
    res.end()
})
app.listen(3001,()=>{
    console.log("watch:http://localhost:3001")
})