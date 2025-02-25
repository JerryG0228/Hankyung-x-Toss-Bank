const express = require("express"); // express 모듈
const mongoose = require("mongoose"); // mongoDB 모듈
const cors = require("cors"); //cors 처리 모듈
require("dotenv").config(); // .env

const app = express("");
app.use(cors()); // 모든 도메인 CORS 허용
app.use(express.json()); // 클라이언트로부터 전달받는 string 값을 읽을 수 있음
app.use(express.urlencoded({ extended: true })); // form 데이터 전달받아도 읽을 수 있음
const PORT = 3000;

const MONGO_URI = process.env.DB_URI;
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// Mongoose 모델 정의
const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
  comments: [{ comment: String }],
});

//몽고DB 도큐먼트 객체
const Post = mongoose.model("Post", PostSchema);

// 게시글 추가
app.post("/addPost", async (req, res) => {
  try {
    const { title, content } = req.body;

    const newPost = new Post({ title, content });
    await newPost.save();

    res
      .status(201)
      .json({ message: "게시글이 추가되었습니다.", post: newPost });
  } catch (error) {
    console.log("추가 실패");
  }
});

// 게시글 목록 조회
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch {
    console.log("조회 실패");
  }
});

// 게시글 단건 조회
app.get("/post/:id", async (req, res) => {
  try {
    let { id } = req.params;

    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ message: "게시글을 찾을 수 없습니다." });
    }

    res.json(post);
  } catch {
    console.log("조회 실패");
  }
});

// 게시글 수정
app.put("/post/:id", async (req, res) => {
  try {
    let { id } = req.params;
    const { title, content } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { title, content },
      { new: true } // 수정된 게시글 반환
    );

    res.json({ message: "수정완료", post: updatedPost });
  } catch (error) {
    console.log("수정 실패");
  }
});

// 게시글 삭제
app.delete("/post/:id", async (req, res) => {
  try {
    let { id } = req.params;

    const deletePost = await Post.findByIdAndDelete(id);

    res.status(200).json({ message: "실패 성공!", delete: deletePost });
  } catch {
    console.log("삭제 실패");
  }
});

// 댓글 추가
app.post("/post/:id", async (req, res) => {
  try {
    const { comment } = req.body;
    const post = await Post.findById(req.params.id);
    if (!post) {
      res.status(404).json({ message: "Post Not Fount" });
    }

    post.comments.push({ comment });
    await post.save();

    res.status(200).json({ message: "댓글 추가 성공!", comment, post });
  } catch (error) {
    console.log("댓글 추가 실패...");
  }
});

app.listen(PORT, () => {
  console.log(`${PORT}번에서 서버 실행중...`);
});
