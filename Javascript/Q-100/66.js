const tower = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const rule = "ABD";
let res = [];

tower.map((v) => {
  let n = -1;
  let possible = true;
  for (let ch of v) {
    if (!rule.includes(ch)) continue;
    if (n > rule.search(ch)) {
      possible = false;
      break;
    } else {
      n = rule.search(ch);
    }
  }

  possible ? res.push("가능") : res.push("불가능");
});

console.log(res);
