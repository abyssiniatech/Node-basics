const http=require('http');
const server=http.createServer((req,res)=>{
    res.writeHead(200,"content-type",'text/html');
    res.write("<h1>Welcome to my website!</h1>");
    res.end();
})

//set port
server.listen(3000,()=>{
    console.log(`my website watch port 3000`)
})


