const fs=require('fs');
fs.readFile("file.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(data);
        
    }
})

// write
fs.writeFile("file.txt","these is write",(err)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log("Congratulation")
    }
})