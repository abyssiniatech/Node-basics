// path module in node js
const path=require('path');
const filePath=path.join('/users','john','documents','file.txt');
console.log(filePath);
const baseName=path.basename(filePath);
console.log(baseName);
const dirName=path.dirname(filePath);
console.log(dirName);
const extName=path.extname(filePath);
console.log(extName);
const parsedPath=path.parse(filePath);
console.log(parsedPath);
const resolvedPath=path.resolve('users','john','documents','file.txt');
console.log(resolvedPath);
const relativePath=path.relative('/users/john','/users/john/documents/file.txt');
console.log(relativePath);
const normalizedPath=path.normalize('/users//john///documents/file.txt');
console.log(normalizedPath);
