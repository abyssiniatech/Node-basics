import { createServer } from "http";

const server = createServer((req, res) => {
  res.end("My First Server 🚀");
  
});

server.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});