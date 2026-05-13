const express= require('express');
const app=express()

// server logic
app.get('/',(req,res)=>{
    res.json({name:"surafel",age:39,email:"sura@gmail.com"})
})


app.listen(3000,()=>{
 console.log("3000")
})





app.get('/',(req,res)=>{
    res.json({id:1,name:"surafel mengist",age:29,email:'sura@gmail.com'})
})

app.listen(2000,()=>{
    console.log("the server is run at port 2000")
})