// npm i path

const path = require("path");

const fullpath = path.join(__dirname, "some", "work", "text.txt");
console.log(fullpath);

const parsedPath1 = path.parse(__dirname);
console.log(parsedPath1);

const parsedPath2 = path.parse(__filename);
console.log(parsedPath2);
