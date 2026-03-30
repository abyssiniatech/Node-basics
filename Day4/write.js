const fs = require("fs")
fs.writeFile("file.txt","welcome to me",(error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("Seccessfuly file was created!")
    }
})