#!/usr/bin/env node
const program = require("commander");
const createCommands = require("./lib/core/create")
program
  .option("-d, --debug", "output extra debugging")
  .option("-s, --small", "small pizza size")
  .option("-p, --pizza-type <type>", "flavour of pizza");


program.on("--help", () => {
  console.log("\n");
  console.log("help 1111");
});

// 创建指令 
createCommands()
program.parse(process.argv);

const options = program.opts();
if (options.debug) console.log(options);
console.log("pizza details:");
if (options.small) console.log("- small pizza size");
if (options.pizzaType) console.log(`- ${options.pizzaType}`);

const sum = (num1, num2) => {
  return num1 + num2;
};

module.exports = {
  sum,
};

// 思路，把不同的指令功能封装到不同的模块当中，根据参数选择不同的模块进行执行
