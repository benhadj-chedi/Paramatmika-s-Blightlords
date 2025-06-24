const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end("<h1>Hello nodejs!</h1>");
});

server.listen(3000, () => {
  console.log("Server running at port 3000 http://localhost:3000/");
});
