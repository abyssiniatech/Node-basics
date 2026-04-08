import http from "http";

interface ServerRequest extends http.IncomingMessage {}
interface ServerResponse extends http.ServerResponse {}

http
  .createServer((req: ServerRequest, res: ServerResponse) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>welcome</h1>
    <p>this is a simple server</p>`);
    res.end();
  })
  .listen(3000, () => {
    console.log("server is running at http://localhost:3000");
  });
