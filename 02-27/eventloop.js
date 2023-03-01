console.log("sync");

setTimeout(() => {
  console.log("setTimeout");
}, 0);

setImmediate(() => {
  console.log("setImmediate");
});

setInterval(() => {
  console.log("setInterval");
}, 1000);
process.nextTick(() => {
  console.log("nextTick");
});
