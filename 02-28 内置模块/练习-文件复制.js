const fs = require("fs");
const path = require("path");

// 把 node-copy 中所有的文件都复制一份，并且只保留 json 文件，txt 文件不保留，采用 node 传值的方式

const dirname = process.argv[2];
const basename = process.argv[3];
const dest = "copy";
const destUrl = path.resolve(dirname, dest);

function copy(dirname, basename) {
  if (!dirname) {
    console.log("缺少目录路径");
    return;
  }
  if (!basename) {
    console.log("缺少目录名");
    return;
  }
  const url = path.resolve(dirname, basename);
  console.log(url);
  if (!fs.existsSync(url)) {
    console.log("源目录不存在");
    return;
  }

  // 创建拷贝目录
  fs.mkdirSync(destUrl);
  // 读取目录原目录
  fs.readdir(url, { withFileTypes: true }, (err, files) => {
    // 这些文件都需要创建到拷贝目录去
    files.forEach((file) => {
      // 如果是一个目录,并且拷贝目录里面没有这个目录，则创建
      if (!file.isFile() && !fs.existsSync(path.resolve(destUrl, file.name))) {
        fs.mkdir(path.resolve(destUrl, file.name));
        // 对该目录进行遍历 copy
        fs.readdir(path.resolve(url, file.name), (error, files) => {
            files.forEach(file=>{
                if(file.endsWith('.json')){
                    copyFile()
                }
            })
        });
      }
    });
  });
}
// 草，不写了

function copyFile(originUrl, destUrl) {
  return new Promise((resolve, reject) => {
    fs.copyFile(originUrl, destUrl, (err) => {
      if (error) reject(error);
      resolve();
    });
  });
}
copy(dirname, basename);
