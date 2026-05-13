const express=require('express');
const app=express()
app.get('/',(req,res)=>{
    res.status(200).send("Home page!")
})
app.all('*').send("404 page not found")



app.listen(5000,()=>{
    console.log("server is listen to port 5000")
})