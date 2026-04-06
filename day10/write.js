const fs=require("fs");
fs.writeFile("lab1.txt","welcome to surafel",(err)=>{
     if(err){
        console.log(err)
     }
     else{
        console.log("ethiopia is the best country")
     }
})