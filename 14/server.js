const  http=require('http');
const hostname='localhost'
const port =3000;

const server=http.createServer((req,res)=>{
    res.statusCode=200
    res.end("welcome to http server")
})


server.listen(port,hostname,()=>{
    console.log(`http://${hostname}:${port}`);
    
})