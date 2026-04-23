const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("Home Page");
//     res.end();
//   } else if (req.url === "/about") {
//     res.write("About Page");
//     res.end();
//   } else if (req.url === "/contact") {
//     res.write("Contact Page");
//     res.end();
//   } else {
//     res.write("404 Not Found");
//     res.end();
//   }
// });

// server.listen(3000);





const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.write("Home Page");
      break;
    case "/about":
      res.write("About Page");
      break;
    case "/contact":
      res.write("Contact Page");
      break;
    default:
      res.write("404 Not Found");
  }
  res.end();
});

server.listen(3000)