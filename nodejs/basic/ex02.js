// npm i ansi-colors

const c = require("ansi-colors");

function hello(name) {
  console.log(`${c.green(name)}님 환영합니다.`);
}

hello("홍길동");

// 패키지 삭제: npm uninstall ansi-colors