const fs=require('fs').promise;
fs.readFile("promise.txt",'utf-8')


.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)

})