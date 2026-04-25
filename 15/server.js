
const http=require('http');
const express=require('express');
const app=express();
const server=http.createServer(app);

server.listen(3000,()=>{
    console.log('Server is running on port 3000');
});


// create server via express
const expressServer=express();
expressServer.get('/',(req,res)=>{
    res.send('<h1>Hello from Express Server!</h1>');
});
expressServer.listen(4000,()=>{
    console.log('Express Server is running on port 4000');
});

console.log('Servers are up and running!')