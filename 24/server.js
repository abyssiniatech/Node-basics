// const http=require("http");
const express =require('express');
// const server=http.createServer((req,res)=>{
    
//     res.write("welcome to http server")
//     res.end("End")
// })

// server.listen(3000,()=>{
//     console.log("run at https://localhost:3000")
// })


// express server
const app=express();
app.get("/",(req,res)=>{
    res.write("welcome to express server")
})

app.listen(2000,()=>{
    console.log("welcome")
})