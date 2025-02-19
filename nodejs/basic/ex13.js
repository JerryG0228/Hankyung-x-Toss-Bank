const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ id: 123, name: "test" });
});

app.get("/posts", (req, res) => {
  res.status(200);
  res.send("게시글 목록");
});

app.get("/posts/:id", (req, res) => {
  res.status(200);
  res.send(`${req.params.id}번 게시물`);
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  console.log(`${username}의 패스워드: ${password}`);

  res.redirect("/posts");
});

app.get("/image", (req, res) => {
  res.status(200);
  res.sendFile(__dirname + "/assets/dog.png");
});

app.listen(3000, () => {
  console.log("3000번 포트 실행");
});
