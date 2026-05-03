const {readFileSync,writeFileSync} =require('fs');
const one=readFileSync("file.txt",'utf8');
const two =writeFileSync('main.txt',"welcome to me",()=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file is written successfully");
    }
})
console.log("done with this task");
console.log(one)
console.log(two)

