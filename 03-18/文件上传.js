const fs = require("fs");
const path = require("path");
const http = require("http");

// 创建一个服务器
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/upload") {
    // 拿到请求头中的分隔符
    // 在请求体中的分隔符会多两个 --
    const separator = `--${req.headers["content-type"].split("boundary=")[1]}`;
    // 创建一个 0 字节的内存，用来存储请求体的内容
    let data = Buffer.alloc(0);
    // req 是一个可读流
    req.on("data", (chunk) => {
      data = Buffer.concat([data, chunk]);
    });
    req.on("end", () => {
      // 解析文件
      parseFile(data, separator);
      res.end("文件上传成功");
    });
  }
});

server.listen(3000, () => {
  console.log("server start up 3000");
});

function parseFile(data, separator) {
  // 利用分隔符分割data
  // split 等同于数组的 split
  const bufArr = split(data, separator).slice(1, -1);
  bufArr.forEach((item) => {
    // 分割 head 与 body
    const [head, body] = split(item, "\r\n\r\n");

    // 可能会存在两行 head，所以用换行符 '\r\n' 分割一下
    // 这里的第一个元素是截取后剩下空 buffer，所以要剔除掉
    const headArr = split(head, "\r\n").slice(1);
    console.log(headArr[0].toString());
    // head 的第一行肯定是 Content-Disposition
    // 通过这个字段肯定能拿到文件名
    // 通过parseHeader解析head
    const headerVal = parseHeader(headArr[0].toString());
    console.log(headerVal);
    // 如果 head 内存在 filename 字段，则代表是一个文件
    if (headerVal.filename) {
      // 写入文件到磁盘
      fs.writeFile(
        path.resolve(__dirname, `./${headerVal.filename}`),
        body.slice(0, -2),
        (err) => {
          if (err) {
            console.log(err);
          }
        }
      );
    }
  });
}
function parseHeader(header) {
  const [name, value] = header.split(": ");
  const valueObj = {};
  value.split("; ").forEach((item) => {
    const [key, val = ""] = item.split("=");
    valueObj[key] = val && JSON.parse(val);
  });

  return valueObj;
}

function split(buffer, separator) {
  const res = [];
  let offset = 0;
  let index = buffer.indexOf(separator, 0);
  while (index != -1) {
    res.push(buffer.slice(offset, index));
    offset = index + separator.length;
    index = buffer.indexOf(separator, index + separator.length);
  }

  res.push(buffer.slice(offset));

  return res;
}
