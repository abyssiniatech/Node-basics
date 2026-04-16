const http=require('http');

const server=http.createServer((req,res)=>{
    res.write("these is server")
    res.end()
})
server.listen(1000,"localhost",()=>{
    console.log("these website is listen on : http://localhost:1000")
})