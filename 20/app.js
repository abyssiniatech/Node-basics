//lcome  1 run the first code in node js 
const fs =require('fs');
// console.log("wecome to these app!")
// console.log(global)


// 3. file system in node js 
fs.readFile("file.txt","utf8",(err,data)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log(data);
        
    }
})


// 4 write file in node js 
fs.writeFile("write.txt","my name is surafel ",(err)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log("Congratulation you are seccesfully!");
        
    }
})


// 5 delte file in node js 
fs.unlink('temp.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Seccesfully remove file from the directory");
        
    }
})