//Revision node js 
//1. fs in node js
const fs=require('fs')
// read file node js
fs.readFile("file.txt",'utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

// 2 write file in node js 
fs.writeFile("file.txt","node js",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Congratuleation you are seccesfully write the file  ")
    }
})


// 3 delete file in node js 
fs.unlink("temp.txt",(err)=>{
    if(err){
        console.log(err);
        
    }
    else{

        console.log("Successfully delete the file ");
    }
    
})