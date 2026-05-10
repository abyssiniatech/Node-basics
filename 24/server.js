const http=require("http");
const server=http.createServer((req,res)=>{
    
    res.write("welcome to http server")
    res.end("End")
})

server.listen(3000,()=>{
    console.log("run at https://localhost:3000")
})
