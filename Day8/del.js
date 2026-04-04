const fs=require('fs');
    fs.unlink("del.txt",(err)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("File deleted successfully")
        }
    })
