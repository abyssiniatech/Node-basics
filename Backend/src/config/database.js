import mongoos from "mongoose"
import { process } from './../../../node_modules/ipaddr.js/lib/ipaddr.js.d';
const connectDb= async ()=>{
    try{
     const connectioniInstance=await mongoos.connect(`${process.env.MONGODB_URI}`)
    console.log("successfully connect db")
    `${connectioniInstance.connection.host}`
    } 
    catch(error){
        console.log(error)
    }
}