const fs = require("fs");

const pathName = "./aaa.json";
// 获取文件的信息，属性，创建时间，修改时间，大小，等
const content = fs.statSync(pathName);
console.log(content);

fs.stat(pathName, (err, stats) => {
  if (err) {
    return;
  }
  console.log(stats, "异步");
});
