const fs=require('fs');
const path=require('path');
const http=require('http');


const server=http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end("Home page")
    }
    else if(req.url ==='/about'){
        res.end("About page")
    }
    else if(req.url === "/contact"){
        res.end("contact page")
    }
    else{
        res.end("404 page")
    }
})


// create port
server.listen(3000,()=>{
    console.log("server is run on port 3000")
})