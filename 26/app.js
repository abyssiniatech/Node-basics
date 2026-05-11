const http=require('http');
const port=3000;
const host='localhost';
 
const server=http.createServer((req,res)=>{
    const url=req.url;
     if(req.url ==='/'){
         res.writeHead(200,{'content-type':'text/html'});
         res.write('<p>Home page!</p>')
         res.end()
     }
       else if(req.url ==='/about'){
         res.writeHead(200,{'content-type':'text/html'});
         res.write('<p>About page!</p>')
         res.end()
     }
       else{
         res.writeHead(404,{'content-type':'text/html'});
         res.write('<p>Page not found!</p>')
         res.end()
     }
})

// create port
server.listen(port,host,()=>{
    console.log(`https://${host}:${port}`)
})