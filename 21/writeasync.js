const fs=require('fs');
const write=async()=>{
   try{
    const data= await fs.promises.writeFile('file.txt',"Hello World")
    console.log("File written successfully")
   }
   catch(err){
    console.error(err)
   }
}
write()
