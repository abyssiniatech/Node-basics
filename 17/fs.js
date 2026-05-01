const fs=require('fs')
// 1.read file in node js
fs.readFile("file.txt","utf8",(err,data) =>{
    if(err){
        console.error(err);
    } else {
        console.log(data);
    }
})

// 2.write file in  jode js 
fs.writeFile("file.txt","hello surafel",(err)=>{
    if(err){
     console.log(err)
    }
    else{
        console.log("file written successfully")
    }
})

// 3.append file in node js
fs.appendFile("file.txt"," welcome to node js",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file appended successfully")
    }
})


// 4.delete file in node js
fs.unlink('del.txt',(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file deleted successfully")
    }
})

