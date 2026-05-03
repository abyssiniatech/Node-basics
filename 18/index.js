setTimeout(()=>{
    console.log('Hello World');
},1000)
console.log("I am first");
function sayHello(second){
    console.log(`Hello World ${'surafel'} ${second}`);
}
setTimeout(() => {
    sayHello(`after 2 seconds:${Date.now()}`)
}, 2000);