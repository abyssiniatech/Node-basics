const http =require('http');

const server=http.createServer((req,res)=>{
  if(req.url === '/', req.method === "GET"){
    res.end("home page")
  }
  else if(req.url === '/about',req.method === 'GET'){
    res.end("about page")
  }
  else if(req.url === '/contact',req.method === "GET"){
    res.end('contact page')
  }
  else{
    res.statusCode = 404
    res.end('Page Not Found')
  }
})



server.listen(100,()=>{
    console.log('Server is running on port 100')
})