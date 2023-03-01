const fs = require("fs");

const pathName = "./content.json";

// fs.writeFile(pathName, '{"name":"十一"}', { mode: "1" }, (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// encoding 指定了 data 显示的格式
fs.readFile(pathName, { encoding: "utf-8"}, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});
