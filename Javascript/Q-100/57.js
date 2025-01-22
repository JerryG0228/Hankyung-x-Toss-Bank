const nums = Array.from({ length: 1001 }, (_, idx) => idx);

const cnt_one = nums.reduce((cnt, curr) => {
  let arr = Array.from(`${curr}`);
  arr.forEach((v) => {
    if (Number(v) === 1) cnt++;
  });
  return cnt;
}, 0);

console.log(cnt_one);
