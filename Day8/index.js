const os=require('os');
const path=require('path')
console.log(global);
console.log(os.type())
console.log(os._dirname)
console.log(path.join(__dirname,'index.js'))
console.log(path.parse(__dirname))
console.log(path.extname(__dirname))
console.log(path.basename(__dirname))
console.log(path.dirname(__dirname))
console.log(path.sep)
console.log(path.delimiter)
console.log(path.isAbsolute(__dirname))
console.log(path.isAbsolute('./index.js'))














