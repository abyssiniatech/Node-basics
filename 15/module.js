const val=require('./math.js')
const path=require('path')
console.log('The sum of 5 and 10 is:',val(5,10));
console.log('The current directory is:',__dirname);
console.log('The current file is:',__filename);
console.log('The path to math.js is:',path.join(__dirname,'math.js'));
console.log('The base name of the current file is:',path.basename(__filename));
console.log('The extension of the current file is:',path.extname(__filename));
console.log('The directory name of the current file is:',path.dirname(__filename));
console.log('The parsed path of the current file is:',path.parse(__filename));