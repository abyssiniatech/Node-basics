const http=require('http');
const Server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('content-type','Text/plain');
    res.end("these is the first server")
})

Server.listen(3000,()=>{
    console.log('the server is run via http://localhost:3000')
})