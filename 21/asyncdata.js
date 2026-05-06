const fs=require('fs');
const path=require('path');
// async function readfile
const readfile=async()=>{
    try{
 const data=await fs.readFile(path.join(__dirname, 'file.txt'), 'utf-8', (err, data) => {

    if(err){
        console.log(err)
    }
    else{
        console.log(data)
    }

 })
    }
    catch(err){
        console.error(err)
    }
}
readfile()