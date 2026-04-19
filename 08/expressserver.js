const express = require("express");
const app = express();

app.get("*", (req, res) => {

    switch (req.path) {

        case "/":
            res.send("<h1>Home (Express Switch)</h1>");
            break;

        case "/about":
            res.send("<h1>About (Express Switch)</h1>");
            break;

        default:
            res.status(404).send("<h1>404 Not Found</h1>");
    }
});

app.listen(3000, () => {
    console.log("Server running");
});