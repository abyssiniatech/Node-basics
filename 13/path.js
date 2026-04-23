const fs=require('fs')
const path=require('path');
console.log('====================================');
console.log(__filename);
console.log('====================================');



// 
console.log('====================================');
console.log(__filename,(""));
console.log('====================================');


fs.mkdir("new",(err)=>{
    if(err){

        console.log('====================================',err);
    }
    else{

        console.log("success");
        console.log('====================================');
    }
})