const express = require('express')
const app = express()

app.set('view engine', 'ejs')

// Home route
app.get("/", (req, res) => {
    res.render("home")
})

// About route
app.get("/about", (req, res) => {
    res.render("about")
})

// Contact route
app.get("/contact", (req, res) => {
    res.render("contact")
})

// 404 page (must be last)
app.use((req, res) => {
    res.status(404).render("404")
})

// server
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000")
})