const http=require('http');
const fs=require('fs')
const hostname="localhost"
const port=3000;
const server=http.createServer((req,res)=>{
    // res.setHeader("",)
    res.write("http server");
    res.end()
})

server.listen(port,hostname,()=>{
    console.log('====================================');
    console.log(`http://${hostname}:${port}`);
    console.log('====================================');
})