const welcome=(name)=>{
    console.log(`welcome to ${name}`)
}
const greet=(fn)=>{
    const name="surafel"
    fn(name)
    
}

greet(welcome)




// higher order function
const number=(num1)=>{
    console.log(`the value of  num1 = ${num1 * num1}`)
}

const sum=(fb)=>{
    const num1=29
   fb(num1)
}
sum(number)