const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.status(200).send('<h1>My Website</h1>')
})

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000")
})