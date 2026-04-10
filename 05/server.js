const http=require('http');
const server=http.createServer((req,res)=>{
   res.statusCode=200;
   res.setHeader("content-type","text/plain");
    res.end("welcome to node js");
});
server.listen(3001,()=>{
    console.log('Server is running on port 3001');
});


