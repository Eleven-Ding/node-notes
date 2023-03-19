const mesage = "hello 11";

const buffer = Buffer.from(mesage, "utf-8");

console.log(buffer);

console.log(buffer.toString("utf-8"));

const p = Buffer.alloc(4, "a", "utf-8");
console.log(p.toString());
