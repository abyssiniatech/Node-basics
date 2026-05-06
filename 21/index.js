const {createReadStream}=require('fs');
const stream=createReadStream('file.txt','utf-8');
stream.on('data',(chunk)=>{
    console.log("Data is being read")
})