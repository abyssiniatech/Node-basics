const path=require('path');
const fs=require('fs')
// console.log(path.parse(__filename))

// absolute
// console.log(path.isAbsolute(__filename))
// fs.mkdir("newdir",(err)=>{
//     if(err){
//         console.log(err)
//     }
    
//         console.log("successfully new folder was created")
    

// })


// create sura.txt inside 
fs.writeFile("welcome.txt","welcome to surafel",(err)=>{
    if(err){
        console.log(err)
    }
    console.log("seccessfully create welcome")
})

