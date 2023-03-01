const fs = require("fs");
const path = require("path");

// 判断文件夹是否存在
const pathName = "./test";

// 如果文件夹不存在， 则创建文件
if (!fs.existsSync(pathName)) {
  fs.mkdir(pathName, (error) => {
    // 创建文件
  });
}

// 在尝试对一个文件写入的时候，如果不存在该文件，会创建该文件
fs.writeFile(path.resolve(pathName, "aaa.txt"), "测试创建文件1", (error) => {});

// 读取文件夹的信息， files 为该文件夹下的所有文件的文件名，也包括目录，如果要操作，需要判断是文件还是目录
// withFileTypes 是在读取的时候，加上对文件类型的判断
fs.readdir(pathName, { withFileTypes: true }, (error, files) => {
  files.forEach((file) => {
    console.log(file.isDirectory());
  });
});

// 文件重命名
// fs.rename("./test/ccc", "./test/ddd", () => {});

// 文件复制
// fs.copyFile()
