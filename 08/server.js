// const {createServer}=require("node:http");
// import { createServer } from 'http';
// const hostname='127.0.0.1';
// const port=3000;
// // create the server via http
// const server=createServer((req,res)=>{
//     res.statusCode=200;
//     res.setHeader("containt-Type",'plain/text');
//     res.end("welcome to my server")
// })


// server.listen(port,hostname,()=>{
//     console.log(`my website is run via: http://${hostname}:${port}/`)




// 

const {createServer} =require('node:http');
const hostname='127.0.0.1';
const port=3000;
const server=createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-Type',"plain/text");
    res.end("My server")
})

server.listen(port,hostname,()=>{
    console.log(`my website is : http://${hostname}:${port}`);
    
})