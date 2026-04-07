// create server on node js 
const http=require('http');
const server=http.createServer((req,res)=>{
    req.statusCode=200;
    res.setHeader('content-type','text/plain')
    res.end('welcome to the first node server')
     
})
const port=3001;
server.listen(port,()=>{
    console.log(`server requist from https://localhost:${port}`)
})