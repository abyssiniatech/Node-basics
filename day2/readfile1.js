const fs=require("fs")
fs.readFile("data.js","utf8",(error,data)=>{
 if(error){
     console.log(`somthing happend! `,error)
    
    }  

    console.log("congratulation")
    console.log("Welcome read file1")
  
    
})