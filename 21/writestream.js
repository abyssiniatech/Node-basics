const {createWriteStream}=require('fs');
const stream =createWriteStream("write.txt");
stream.write("Hello World\n");
stream.write("Welcome to Node.js\n");
stream.end("This is the end of the file\n");
stream.on("finish",()=>{
    console.log("File writing completed")
})
stream.on("error",(err)=>{
    console.error(err)
})