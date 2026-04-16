// these is file system in node js 
// 1. read file from your computer
const fs=require('fs');
fs.readFile("file.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);

        
    }
    else{
        console.log(data)
    }
})

// 2 write file in node js 
fs.writeFile("file.txt","write file ",(err)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log("File is succesfully write")
    }
})



// 3 delete file in node js 
fs.unlink("temp.txt",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("File succesfully deleted")
    }
})