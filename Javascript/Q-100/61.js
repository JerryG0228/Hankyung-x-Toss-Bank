const str = Array.from("aaabbbbcdddd");
let res = "";
let cnt = 0;

str.reduce((prev, curr, idx, arr) => {
  if (prev === curr) cnt++;
  else {
    res += prev + String(cnt);
    cnt = 1;
  }
  if (idx + 1 === arr.length) res += prev + String(cnt);
  return curr;
}, str[0]);

console.log(res);
