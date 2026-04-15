// file system in node js 


// 1 readfile 
const fs=require('fs');
fs.writeFile("file.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})
console.log("+++++++")

// 2 write data
fs.writeFile("file.txt"," i love ethiopia",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("file seccesfully updated")
})

console.log("+++++++")

// delte file in node js 
fs.unlink("app.js",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("file successfuly delted") 
})