// express-sever

const express = require("express");
const app = express();
const PORT = 5050;

app.get("/", (req, res) => {
  res.status(200);
  res.send(`<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    </ul>`);
});

app.get("/login-form", (req, res) => {
  res.status(200);
  res.send("로그인");
});
app.get("/login", (req, res) => {
  res.status(200);
  res.send("로그인성공");
});

app.listen(PORT, () => {
  console.log(`${PORT}에서 실행중`);
});
