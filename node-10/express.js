const express=require("express");
const app=express();
app.get('/',(req,res)=>{
    res.write("welcome express js");
    res.end();
})

app.listen(2000,()=>{
    console.log("http://localhost:2000");
    
})