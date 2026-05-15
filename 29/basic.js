// basic node js 
const fs=require("node:fs")
const os= require('os');
console.log(os.version())
console.log(os.type())
console.log(os.homedir())

// file system in node js 
fs.readFile("file.txt",'utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }
})

// writeFile in node js
fs.writeFile("file.txt","my name is surafel",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Congratulation are successfuly created:")
    }
})

// delete file
fs.unlink("app.txt",(err)=>{
    if(err){
       console.log(err)
    }
    else{
      console.log("you are deleted seccesfully!")
    }
})