const fs=require('fs')
const eth=require("./app.json");
console.log(eth.name);
// fs in node js 
// 1.readfile in node js
console.log("_____________//__")
fs.readFile("file.txt","utf-8",(err,data)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log(data)
    }
})
  console.log("_____________//__")
// writefile in node js 
fs.writeFile("file.txt","welcome to surafel",(err)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log("file written successfully")
    }
    })



    // appendfile in node js
    fs.appendFile("file.txt"," welcome to node js",(err)=>{
        if(err){
            console.error(err);
        }
        else{
            console.log("file appended successfully")
        }
        })




        // delete file 



        fs.unlink("file.txt",(err)=>{
            if(err){
                console.error(err);
            }
            else{
                console.log("file deleted successfully")
            }
        })
