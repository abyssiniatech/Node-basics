const data = require('./data.js');

console.log("Hello World");

data.map((item) => {
    console.log(`My name is ${item.name} and I am ${item.age} years old. I live in ${item.city}.`);
});