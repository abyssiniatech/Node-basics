const fs = require('fs');
fs.unlink("temp.js",(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("file deleted successfully");      
    }
})