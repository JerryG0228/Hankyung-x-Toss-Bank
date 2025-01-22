const str = "hello";
const leftSpace = 50 - str.length;
const halfLS = Number(leftSpace / 2);

let res = `${"=".repeat(halfLS)}${str}${"=".repeat(leftSpace - halfLS)}`;
console.log(res);
