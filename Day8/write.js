const fs=require("fs")
fs.writeFile("file.txt","welcome to node js ",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("File written successfully")
    }
})