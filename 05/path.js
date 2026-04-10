const path=require('path');
console.log(path.dirname("C:/Users/HP/Desktop/nodejs/05/server.js"));
console.log(path.extname("C:/Users/HP/Desktop/nodejs/05/server.js"));
console.log(path.basename("C:/Users/HP/Desktop/nodejs/05/server.js"));
console.log(path.parse("C:/Users/HP/Desktop/nodejs/05/server.js"));
console.log(path.join("C:/Users/HP/Desktop/nodejs/05/server.js","hello.txt"));

console.log(path.resolve("hello.txt"));
console.log(__dirname);
console.log(__filename)
console.log(path.join(__dirname,"hello.txt"));



// file exists or not
const fs=require('fs');
fs.__dirname= 'C:\\Users\\user\\Desktop\\node-basics\\05';
fs.exists(path.join(fs.__dirname,"hello.txt"),(exists)=>{
    console.log(exists);
});


