const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const filePath = "./aaa.png";
  const stat = fs.statSync(filePath);
  res.writeHead(200, {
    "Content-Type": "application/octet-stream",
    "Content-Disposition": "attachment; filename=aaa.png",
    "Content-Length": 0, // 设置为 0 了
  });
  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

server.listen(8080, () => {
  console.log("Server running on port 8080");
});
