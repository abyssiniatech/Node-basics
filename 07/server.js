const http=require("http")
const server=http.createServer((req,res)=>{
    res.write("welcome to my server")
    res.end()
})

server.listen(3000,()=>{
    console.log("my local server is display on :http://localhost:3000")
})