const fs=require('fs')
fs.readFile("index.txt",'utf-8',(err,data)=>{
    if(err){
        console.log(err);
        
    }
    else{
  console.log(data);
  
    }
})




// writedata
fs.writeFile("data.txt","she is the best",(err)=>{
    if(err){
    console.log(err);
    
    }
    else{
        console.log("Successfully write the first file on node  js ");
        
    }
    
    
})


// delete file on the node js 
fs.unlink("del.txt",(err)=>{
    if(err){
        console.log(err);
}
    else{
        console.log("waw the file is deleted");
        
    }
    
})