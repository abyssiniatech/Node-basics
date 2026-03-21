const { models } = require("mongoose")

  const add=(a,b)=>{
    return a+b
}


models.export =add;