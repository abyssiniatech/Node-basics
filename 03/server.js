// console.log(__dirname)
// console.log(__filename)
// console.log(process.cwd())
// console.log(__dirname === process.cwd());

// setTimeout(() => {
//     console.log('setTimeout')
// }, 1000)
// setImmediate(() => {
//     console.log('setImmediate')
// })
// process.nextTick(() => {
//     console.log('nextTick')
// })
// Promise.resolve().then(() => {
//     console.log('Promise')
// })

// setTimeout(()=>{
//     console.log("run after 3 seconds")
// })
// console.log(global)
// // console.log(window)


// console.log(__dirname, (new Date() - 0))
// console.log(new Date().getHours() + ":" + new Date().getFullYear() + ":"+ new Date().getMonth() + ":" + new Date().getDate() + ":" + new Date().getSeconds())




// file system in node js all about it 
//1. reading file in node js
//2. writing file in node js
//3. deleting file in node js
//4. renaming file in node js
//5. creating directory in node js
//6. deleting directory in node js
//7. reading directory in node js
//8. watching file in node js


// 1. reading file in node js
const fs=require('fs');
// fs.readFile("file.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err)
//     } else {
//         console.log(data)
//     }
// })




// // 2. writing file in node js

// fs.writeFile("file.txt","Welcome to node",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     return "File is succesfully created"
// })



// 3. deleting file in node js
// fs.unlink("del.txt",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("File is succesfully deleted")
// })

//  4. renaming file in node js

// const fs=require('fs');
// fs.rename("file.txt","sura.txt",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("File is succesfully renamed")
// })


// // 5. creating directory in node js
// fs.mkdir("mydir",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("Directory is succesfully created")
// })



// 6. deleting directory in node js
// fs.rmdir("mydir",(err)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log("Directory is succesfully deleted")
// })


// 7. reading directory in node js
// fs.readdir("mydir", (err, files) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(files);
//     }
// });



// 8. watching file in node js
fs.watch("file.txt",(eventType,filename)=>{
    console.log(`File ${filename} has been ${eventType}`)
})
