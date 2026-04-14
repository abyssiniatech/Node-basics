const http=require("http")
const server=http.createServer((req,res)=>{
    res.write("welcome to channel")
    res.end()
})

server.listen(3000,()=>{
    console.log("server is running : http://localhost:3000")
})