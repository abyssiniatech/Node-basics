const path=require('path');
const fs=require('fs');
console.log(__filename);
console.log(__dirname);



console.log("-----------------------------")
console.log(path.basename(__dirname));
console.log(path.dirname(__filename));



console.log("-----------------------------")
console.log(path.extname(__filename));
console.log(path.extname(__dirname));