// const cluster = require("cluster");
// const http = require("http");
// const numCPUs = require("os").cpus().length;
// const process = require("process");

// if (cluster.isMaster) {
//   console.log(`Primary ${process.pid} is running`);

//   // 衍生工作进程。
//   for (let i = 0; i < numCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
// } else {
//   // 工作进程可以共享任何 TCP 连接
//   // 在本示例中，其是 HTTP 服务器
//   http
//     .createServer((req, res) => {
//       res.writeHead(200);
//       res.end("hello world\n");
//     })
//     .listen(8000);

//   console.log(`Worker ${process.pid} started`);
// }


const ora = require('ora')

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows111111';
}, 1000);