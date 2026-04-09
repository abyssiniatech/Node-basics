console.log(__dirname)
console.log(__filename)
console.log(process.cwd())
console.log(__dirname === process.cwd());

setTimeout(() => {
    console.log('setTimeout')
}, 1000)
setImmediate(() => {
    console.log('setImmediate')
})
process.nextTick(() => {
    console.log('nextTick')
})
Promise.resolve().then(() => {
    console.log('Promise')
})

setTimeout(()=>{
    console.log("run after 3 seconds")
})
console.log(global)
// console.log(window)


console.log(__dirname, (new Date() - 0))
console.log(new Date().getHours() + ":" + new Date().getFullYear() + ":"+ new Date().getMonth() + ":" + new Date().getDate() + ":" + new Date().getSeconds())