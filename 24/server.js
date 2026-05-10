const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.status((200).send('<h1>welcome express</h1>'))


})

app.use((req,res)=>{
     res.status((404).send('<h1>404 page not found</h1>'))
})
app.listen(5000, () => {
    console.log("Server running at http://localhost:5000")
})