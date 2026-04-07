const fs=require('fs')
// const path=require('path')
fs.readFile("file.txt", "utf-8",(error,data)=>{
    if(error){
        console.log(error)
    }
    else{
        console.log(data)
    }
})

// final const path=require('path')
