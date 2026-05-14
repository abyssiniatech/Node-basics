const fs=require('node:fs');
const http = require('node:http');
const path=require('path')
const server=http.createServer((req,res)=>{
    const url=req.url;
    const html=fs.readFileSync('./index.html','utf-8')
    if(req.url==="/"){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end(html)
    }
    else{
         res.writeHead(404,{'Content-Type':'text/html'})
         res.write("<button>Logout</button>")
        res.end('<h1>404 page not found!</h1>')

    }
})


server.listen(3000);