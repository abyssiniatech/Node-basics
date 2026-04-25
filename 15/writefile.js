const fs=require('fs')
fs.writeFile('temp.txt',"welcome to node js",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file created successfully")
    }
})