const express=require('express');
const host='localhost';
const port=3000;
console.log("start")
const app= express();
app.get("/",(req,res)=>{
   res.send("welcome to my chanel");
   res.end("end")
})

app.listen(3000,()=>{
    console.log(`Watch ${host}:${port}`)
})


console.log('end');
