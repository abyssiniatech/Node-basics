const http=require('http');
const port=3000;
const host='localhost';
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<p>Welcome to my website</p>')
})

// create port
server.listen(port,host,()=>{
    console.log(`https://${host}:${port}`)
})