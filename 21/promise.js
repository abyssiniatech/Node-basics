const fs=require('fs');
const readdata=()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile('file.txt','utf-8',(err,data)=>{
            if(err){
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}


readdata().then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})




