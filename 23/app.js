const express = require('express')

// create express app
const app = express()

// home route
app.get("/", (req, res) => {
    res.status(200).send("Welcome to home page")
})

// about route
app.get("/about", (req, res) => {
    res.status(200).send("About page")
})
//contact route
app.get("/contact", (req, res) => {
    res.status(200).send("contact page")
})

// 404 handler (must be last)
app.use((req, res) => {
    res.status(404).send("404 page not found")
})

// start server
app.listen(3000, () => {
    console.log("Server is running on port 3000")
})