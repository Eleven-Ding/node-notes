const path = require("path");


// 如果 basePath 最前面没有 / 那么 path.resolve()
const basePath = "/www.dingshiyi.top";

const filename = "img.jpg";

// 这样写会有问题： 有些操作系统的目录分割符可能是 \ ，这样不兼容。
const url = basePath + "/" + filename;

// 使用 path.resolve 来
const safeUrl = path.resolve(basePath, filename);

// 使用 path.join 来
const joinUrl = path.join(basePath, filename);


console.log(safeUrl, "\n", joinUrl);


// 获取目录路径
console.log(path.dirname(joinUrl),'dirname')

// 获取文件名
console.log(path.basename(joinUrl),'basename')


// 获取扩展
console.log(path.extname(joinUrl), 'extname')

// 解析 
console.log(path.parse('/home/user/dir/file.txt'))

const basePath1 = "/www.dingshiyi.top";
const filename1 = "img.jpg";
path.resolve(basePath1, filename1);



const basePath2 = "www.dingshiyi.top";
const filename2 = "img.jpg";
path.resolve(basePath2, filename2);