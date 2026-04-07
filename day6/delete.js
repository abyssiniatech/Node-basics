// // delete fs 
// const fs=require('fs')
// fs.unlink("file.txt",(error)=>{

//     if(error){
//         console.log(error)
//     }
//     else{
//         console.log("file deleted successfully")
//     }
// })



const fs = require("fs");
fs.unlink("temp.txt",(error)=>{
    if(error){
        console.log(error);
        
    }
    else{
        console.log("file deleted successfully");
    }
})