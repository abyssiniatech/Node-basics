const http=require('http');

const server=http.createServer((req,res)=>{
    res.write("these is http server")
    res.end()
})


// create local s3000erver
server.listen(3000,()=>{
    console.log("watch these : http://localhost:3000")
})