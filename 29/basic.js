// basic node js 
const fs=require("node:fs")
const os= require('os');
const path =require('path')
const http = require('http')
const express =require('express')

// console.log(os.version())
// console.log(os.type())
// console.log(os.homedir())

// // file system in node js 
// fs.readFile("file.txt",'utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })

// // writeFile in node js
// fs.writeFile("file.txt","my name is surafel",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("Congratulation are successfuly created:")
//     }
// })

// // delete file
// fs.unlink("app.txt",(err)=>{
//     if(err){
//        console.log(err)
//     }
//     else{
//       console.log("you are deleted seccesfully!")
//     }
// })


// // path in node js
// console.log(__dirname);
// console.log(__filename);

// create http server
 console.log('start')
const server=http.createServer((req,res)=>{
    res.writeHead(200,"content-type","text/html")
    res.write("<h1>welcome to http server</h1>")
})

// port 
server.listen(3000,()=>{
    console.log("my website is listen on port 3000")
})

// create express server
const app=express();
app.get('/',(req,res)=>{
    res.send("<h1>welcome </h1>")
})

// listen
app.listen(3001,()=>{
    console.log('the server run at port 3001')
})


