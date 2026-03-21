const res=require('./add')
function  sayhello(){
  console.log("Welcome node js")
}


const pw=res(12.67)
console.log(pw)




setTimeout(sayhello,2000)


