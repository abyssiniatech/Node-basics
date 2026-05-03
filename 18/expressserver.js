const express =require('express');
const app=express();
app.get('/',(req,res)=>{
    res.send("welcome to express server")
})


app.listen(3001,()=>{
    console.log("server is running on port 3001");
})