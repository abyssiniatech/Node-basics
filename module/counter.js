//    in this file we will create a module and export it to index.js file
const counter = (num) => {
    return num + 1;
}
const val= counter(5);
console.log(val);
module.exports = counter;