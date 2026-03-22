const fs=require("fs")
fs.unlink("del.txt",(err)=>{
    if(err){
        console.error("The Error is :",err)
        return
    }
    console.log("Successfully file was Deleted");
})