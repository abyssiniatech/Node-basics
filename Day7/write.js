const fs = require('fs');
fs.writeFile("file.txt","hi there i am surafel",(error)=>{
    if(error){
        console.log(error);
        
    }
    else{
        console.log("file created successfully");
    }
})