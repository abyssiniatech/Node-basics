const http=require('http');

const express=require('express')
const server=http.createServer((req,res)=>{
    res.write("these is http server")
    res.end()
})


// create local s3000erver
server.listen(3000,()=>{
    console.log("watch these : http://localhost:3000")
})





// create server on express js 
// there are two steps to create express node server 

const app=express()
app.get("/",(req,res)=>{
    res.write("This is the express server")
    res.end()
})


app.listen(5500,()=>{
    console.log("express server is listen at:http://localhost:5500")
})