const fs=require('fs');
fs.unlink("lab1.txt",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("seccesfully deleted ")
    }
})