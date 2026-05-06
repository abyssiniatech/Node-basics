const fs=require('fs');
const surafel=()=>{
    return new Promise((resolve,reject)=>{
       fs.unlink("del.txt",(err)=>{
        if(err){
            reject(err)
        } else {
            resolve()
        }
       }) 
    })
}



surafel().then(()=>{
    console.log("File deleted successfully")
})
.catch((err)=>{
    console.error(err)
})