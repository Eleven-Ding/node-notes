const fs = require("fs");

fs.createReadStream("./foo.txt").pipe(
  fs.createWriteStream("./bar.txt", { flags: "a+", start: 3 })
);
