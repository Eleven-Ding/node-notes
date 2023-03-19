const program = require("commander");
// 创建指令
function createCommands() {
  program
    .command("create <project> [others...]")
    .description("clone repo from github")
    .action((project, others) => {
      console.log(project, others, "22222");
      //  在 node 中如何写 shell 脚本
    });
}

module.exports = createCommands;
