const http=require('http')
const server=http.createServer((req,res)=>{
    res.write('This is the first server ')
    res.end()
})


server.listen(3001,()=>{
    console.log("server is running via:http://localhost:3001")
})