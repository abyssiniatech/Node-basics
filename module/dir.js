// _dir
// __dirname is a global variable that holds the directory name of the current module. It is a string that represents the absolute path of the directory containing the currently executing file. This variable is useful for constructing file paths and accessing files relative to the current module's location.
// _filename
// __filename is a global variable that holds the file name of the current module. It is a string that represents the absolute path of the currently executing file. This variable is useful for accessing the file itself or constructing file paths relative to the current module's location.
const path = require("path");
console.log(__dirname);
console.log(__filename);
console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

