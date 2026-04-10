const fs = require('fs');
const module=require('./module.js');
const a=5;
const b=10;
const result=module.sum(a,b);
console.log(`The sum of ${a} and ${b} is: ${result}`);
const differenceResult=module.difference(a,b);
console.log(`The difference of ${a} and ${b} is: ${differenceResult}`);
