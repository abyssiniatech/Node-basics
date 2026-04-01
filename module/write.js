const fs= require("fs");
fs.writeFile("file.txt","my name is surafel",(error)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log("file created successfully")
    }
})