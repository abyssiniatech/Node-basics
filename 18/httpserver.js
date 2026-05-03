const http =require('http');
const server=http.createServer((req,res)=>{
    console.log(req)
    if(req.url==='/'){
        res.end("welcome to http server");
    }
})
server.listen(3000,()=>{
    console.log("Server is running on port 3000");
})