const http=require('http');
const server=http.createServer((req,res)=>{
    res.write("This is the server")
    res.end()
})


// create port
server.listen(3000,()=>{
    console.log("http://localhost:3000")
})


