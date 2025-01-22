let students = [
  "강은지",
  "김유정",
  "박현서",
  "최성훈",
  "홍유진",
  "박지호",
  "권윤일",
  "김채리",
  "한지호",
  "김진이",
  "김민호",
  "강채연",
].sort();

let numList = students.map((v, idx) => {
  return { 번호: idx + 1, 이름: v };
});

numList.forEach((v) => {
  console.log(`번호: ${v["번호"]}, 이름: ${v["이름"]}`);
});
