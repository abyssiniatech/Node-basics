const fs=require("fs");
fs.writeFile("file.txt","welcome file2",(error)=>{
    if(error){
        console.log(error)
    }else{
        console.log("file created successfully")
    }
})