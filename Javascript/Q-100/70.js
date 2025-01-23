const a = [
  [1, 2, 3],
  [4, 5, 6],
];

const b = [
  [7, 8],
  [9, 10],
  [11, 12],
];

if (a[0].length !== b.length) console.log(-1);
else {
  const res = [];
  for (let i = 0; i < a.length; i++) res.push([]);

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length; j++) {
      let temp = 0;
      for (let k = 0; k < b.length; k++) {
        temp += a[i][k] * b[k][j];
      }
      res[i].push(temp);
    }
  }
  console.log(res);
}
