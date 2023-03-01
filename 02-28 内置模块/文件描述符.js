const fs = require("fs");

const pathName = "./aaa.json";

// 打开一个文件可以拿到这个文件描述符，之后写文件，查文件，读文件，都可以使用这个文件描述符
fs.open(pathName, (error, fd) => {
  console.log(fd);
});

fs.fstat(22, (err, stats) => {
  console.log(stats);
});
