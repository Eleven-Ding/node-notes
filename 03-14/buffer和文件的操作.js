const fs = require("fs");

const buffer = fs.readFileSync("./foo.txt", { encoding: 'utf-8' });
console.log(buffer);

// 图片裁剪

const imgBuffer = fs.readFileSync("./aaa.png");
console.log(imgBuffer)
