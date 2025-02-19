const http = require("node:http");

// 요청 발생시 해야할 일을 콜백함수에 등록
const server = http.createServer((req, res) => {
  console.log("http 요청 발생");
});

// 3000번 포트에서 서버 실행
server.listen(3000, () => {
  console.log("3000번 포트에서 서버 실행 중...");
});
