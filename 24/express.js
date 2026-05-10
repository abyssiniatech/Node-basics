const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.status(200).send('<h1>Express Server</h1>')
})

// 404 handler
app.use((req, res) => {
    res.status(404).send('404 page not found')
})

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000")
})