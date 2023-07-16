const http = require("http");
const data = require("./lifts.json");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/json" });

    res.end(JSON.stringify(data));
  })
  .listen(process.env.PORT);
