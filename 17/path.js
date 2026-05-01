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


console.log("-----------------------------")
console.log(path.parse(__filename));


console.log("-----------------------------")
console.log(path.join(__dirname,'/test','/test1','/test2','/test3','/test4','/test5','/test6','/test7','/test8','/test9','/test10'));

console.log("-----------------------------")
console.log(path.resolve(__dirname,'/test','/test1','/test2','/test3','/test4','/test5','/test6','/test7','/test8','/test9','/test10'));
