const express =require('express');
const app=express()
app.get('/',(req,res)=>{
    res.send('Hello World')
    res.end("welcome to express server")
})

// create port


app.listen(3001,(req,res)=>{
    console.log('server is running on port 3001')
})